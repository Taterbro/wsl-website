const ACCOUNTS_URL = process.env.ZOHO_ACCOUNTS_URL!;
const API_DOMAIN = process.env.ZOHO_API_DOMAIN!;

async function getAccessToken() {
  const body = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    client_id: process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    grant_type: "refresh_token",
  });

  const response = await fetch(`${ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok || !result.access_token) {
    throw new Error("Failed to authenticate with Zoho");
  }

  return result.access_token as string;
}

type Lead = {
  firstName?: string;
  lastName: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function createLead(lead: Lead) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${API_DOMAIN}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: lead.firstName,
          Last_Name: lead.lastName,
          Email: lead.email,
          Phone: lead.phone,
          Description: lead.message,
        },
      ],
    }),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok || result.data?.[0]?.status !== "success") {
    throw new Error("Failed to create Zoho lead");
  }

  return result.data[0].details;
}
