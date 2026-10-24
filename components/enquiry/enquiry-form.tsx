"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { EnquiryRouteConfig } from "./route-configs";

const INPUT_CLASS =
  "w-full rounded-[2px] border border-border bg-background px-[14px] py-3 font-sans text-[0.95rem] text-foreground transition-colors duration-(--transition-fast) ease-(--ease-standard) focus:border-primary focus:outline-none";

interface EnquiryFormProps {
  config: EnquiryRouteConfig;
  projectSlug?: string;
  sourcePage?: string;
  prefill?: Record<string, string>;
  onSubmitted?: (data: Record<string, unknown>) => void;
}

export default function EnquiryForm({
  config,
  projectSlug,
  sourcePage,
  prefill,
  onSubmitted,
}: EnquiryFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const field of config.fields) {
      if (field.type === "checkbox") {
        initial[field.name] = prefill?.[field.name] ?? "false";
      } else {
        initial[field.name] = prefill?.[field.name] ?? "";
      }
    }
    return initial;
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const statusRef = useRef<HTMLDivElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      statusRef.current?.focus({ preventScroll: reduce });
      statusRef.current?.scrollIntoView({
        block: "nearest",
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }, [status]);

  const setField = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    for (const field of config.fields) {
      if (field.type === "checkbox") {
        if (field.required && values[field.name] !== "true") {
          nextErrors[field.name] = "This consent is required.";
        }
        continue;
      }
      if (field.required && !values[field.name]?.trim()) {
        nextErrors[field.name] = "This field is required.";
      }
      if (field.type === "email" && values[field.name]?.trim()) {
        const email = values[field.name].trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          nextErrors[field.name] = "Enter a valid work email.";
        }
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypotRef.current && honeypotRef.current.value) {
      // Bot detected - silently succeed
      setStatus("success");
      return;
    }
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const payload = {
      route: config.slug,
      sourcePage: sourcePage ?? window.location.pathname,
      projectSlug: projectSlug ?? null,
      submittedAt: new Date().toISOString(),
      ...values,
    };
    try {
      // PLACEHOLDER: confirm HubSpot form fields and property names with whoever owns the HubSpot account.
      // Submit via a Next.js server action or route handler. Never call HubSpot from the client with a private token.
      await new Promise((resolve) => setTimeout(resolve, 400));
      onSubmitted?.(payload);
      setStatus("success");
      const reset: Record<string, string> = {};
      for (const field of config.fields) {
        if (field.type === "checkbox") {
          reset[field.name] = "false";
        } else {
          reset[field.name] = prefill?.[field.name] ?? "";
        }
      }
      setValues(reset);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        role="status"
        tabIndex={-1}
        className="border border-accent/30 bg-accent/10 p-[clamp(20px,3vw,30px)] focus:outline-none"
      >
        <p className="text-[1.05rem] leading-[1.6] text-foreground">
          {config.successCopy}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center justify-center rounded-[2px] border border-primary px-[22px] py-[12px] font-sans text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-(--transition-normal) ease-(--ease-standard) hover:bg-primary hover:text-primary-foreground"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-border bg-card/30 p-[clamp(20px,3vw,34px)]"
    >
      <input
        ref={honeypotRef}
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="route" value={config.slug} />
      {projectSlug ? (
        <input type="hidden" name="projectSlug" value={projectSlug} />
      ) : null}

      <p className="mb-[clamp(18px,2.4vw,26px)] max-w-[56ch] text-[0.94rem] leading-[1.6] text-muted-foreground">
        {config.subtitle}
      </p>

      {status === "error" && Object.keys(errors).length === 0 && (
        <div
          ref={statusRef}
          role="alert"
          tabIndex={-1}
          className="mb-5 border-l-2 border-destructive bg-destructive/10 p-4 text-[0.9rem] focus:outline-none"
        >
          Something went wrong. Please try again or use the routes listed below.
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 max-[760px]:grid-cols-1">
        {config.fields.map((field) => {
          if (field.type === "checkbox") {
            const checked = values[field.name] === "true";
            return (
              <div key={field.name} className="col-span-2 max-[760px]:col-span-1">
                <label className="flex items-start gap-3 text-[0.9rem] leading-[1.6]">
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={checked}
                    required={field.required}
                    onChange={(e) =>
                      setField(field.name, e.target.checked ? "true" : "false")
                    }
                    className="mt-1 h-4 w-4 rounded-[2px] border-border"
                    aria-invalid={errors[field.name] ? "true" : "false"}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  />
                  <span>
                    {field.label}
                    {field.name === "consent" && config.privacyHref ? (
                      <>
                        {" "}
                        (<a
                          href={config.privacyHref}
                          className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                        >
                          Privacy Policy
                        </a>
                        )
                      </>
                    ) : null}
                  </span>
                </label>
                {errors[field.name] ? (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-[0.8rem] text-destructive"
                  >
                    {errors[field.name]}
                  </p>
                ) : null}
              </div>
            );
          }

          if (field.type === "select") {
            return (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-[7px] block text-[0.72rem] font-semibold tracking-[0.08em] uppercase"
                >
                  {field.label}
                  {field.required ? <span aria-hidden="true"> *</span> : null}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={values[field.name]}
                  required={field.required}
                  onChange={(e) => setField(field.name, e.target.value)}
                  className={INPUT_CLASS}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                >
                  <option value="">Select</option>
                  {(field.options ?? []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[field.name] ? (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-[0.8rem] text-destructive"
                  >
                    {errors[field.name]}
                  </p>
                ) : null}
              </div>
            );
          }

          if (field.type === "textarea") {
            return (
              <div key={field.name} className="col-span-2 max-[760px]:col-span-1">
                <label
                  htmlFor={field.name}
                  className="mb-[7px] block text-[0.72rem] font-semibold tracking-[0.08em] uppercase"
                >
                  {field.label}
                  {field.required ? <span aria-hidden="true"> *</span> : null}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name]}
                  onChange={(e) => setField(field.name, e.target.value)}
                  className={cn(INPUT_CLASS, "min-h-[110px] resize-y")}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
                {errors[field.name] ? (
                  <p
                    id={`${field.name}-error`}
                    className="mt-2 text-[0.8rem] text-destructive"
                  >
                    {errors[field.name]}
                  </p>
                ) : null}
              </div>
            );
          }

          return (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-[7px] block text-[0.72rem] font-semibold tracking-[0.08em] uppercase"
              >
                {field.label}
                {field.required ? <span aria-hidden="true"> *</span> : null}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.autocomplete}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => setField(field.name, e.target.value)}
                className={INPUT_CLASS}
                aria-invalid={errors[field.name] ? "true" : "false"}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              />
              {errors[field.name] ? (
                <p
                  id={`${field.name}-error`}
                  className="mt-2 text-[0.8rem] text-destructive"
                >
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-[0.76rem] leading-[1.6] text-muted-foreground">
        {/* PLACEHOLDER: confirm HubSpot form fields and property names with whoever owns the HubSpot account. */}
        No confidential documents are shared through this form. Materials are
        released only through an approved, authenticated process.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center gap-[9px] rounded-[2px] border border-primary bg-primary px-[28px] py-[14px] font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-primary-foreground uppercase transition-colors transition-transform duration-(--transition-normal) ease-(--ease-standard) hover:-translate-y-px hover:bg-[#2b6a8d] disabled:translate-y-0 disabled:opacity-60 motion-reduce:transform-none"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
