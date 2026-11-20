import { NextRequest, NextResponse } from "next/server";
import { getEnquiryConfig } from "@/components/enquiry/route-configs";
import { createLead, type Lead } from "@/lib/zoho";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body._hp) {
      return NextResponse.json({ success: true });
    }

    let config;
    try {
      config = getEnquiryConfig(body.route);
    } catch {
      return NextResponse.json(
        { error: "Unknown enquiry route" },
        { status: 400 },
      );
    }

    if (!config.mapToZoho) {
      return NextResponse.json({ success: true });
    }

    const fieldErrors: Record<string, string> = {};
    for (const field of config.fields) {
      const value = body[field.name];

      if (field.type === "checkbox") {
        if (field.required && value !== "true") {
          fieldErrors[field.name] = "This consent is required.";
        }
        continue;
      }

      if (typeof value !== "string" || !value.trim()) {
        if (field.required) {
          fieldErrors[field.name] = "This field is required.";
        }
        continue;
      }

      if (field.type === "email" && !EMAIL_PATTERN.test(value.trim())) {
        fieldErrors[field.name] = "Enter a valid work email.";
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { error: "Invalid submission", fields: fieldErrors },
        { status: 400 },
      );
    }

    const values: Record<string, string> = {};
    for (const field of config.fields) {
      const value = body[field.name];
      values[field.name] =
        typeof value === "string"
          ? value.trim()
          : value === true
            ? "true"
            : "false";
    }

    const lead: Lead = {
      ...values,
      firstName: values.firstName,
      lastName: values.lastName,
      workEmail: values.workEmail,
      route: config.slug,
      sourcePage: typeof body.sourcePage === "string" ? body.sourcePage : "",
      projectSlug: typeof body.projectSlug === "string" ? body.projectSlug : "",
      submittedAt:
        typeof body.submittedAt === "string"
          ? body.submittedAt
          : new Date().toISOString(),
    };

    await createLead(lead);

    return NextResponse.json({
      success: true,
      message: "Your submission was received!",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      { error: "Unable to process your submission" },
      { status: 500 },
    );
  }
}
