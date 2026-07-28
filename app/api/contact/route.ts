import { NextResponse } from "next/server";

// Destination for all site enquiries — the official WISLUCK inbox.
const CONTACT_EMAIL = "infoteam@wisluck.com";

// Using FormSubmit (https://formsubmit.co) as the mail relay: it needs no
// API key or account, just a POST to this endpoint. The first message ever
// sent to a new destination email triggers a one-time confirmation email
// from FormSubmit that infoteam@wisluck.com must click — every submission
// after that delivers straight to the inbox.
//
// This endpoint was built from FormSubmit's publicly documented AJAX API,
// not verified by an actual live call — this sandbox has no network path
// to formsubmit.co to test it. Send a real test enquiry once this is
// deployed and confirm it arrives (and that the confirmation email gets
// clicked) before you start sending Ads traffic here.
//
// To switch to a different provider later (Resend, SendGrid, your own
// SMTP), this is the only file that needs to change — the form itself
// just POSTs JSON here and doesn't know or care how mail actually goes out.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, company, subject, message } = body;

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  try {
    const relayResponse = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        company: company || "—",
        subject,
        message,
        _subject: `WISLUCK enquiry: ${subject}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!relayResponse.ok) {
      throw new Error(`Relay responded with ${relayResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form relay failed:", error);
    return NextResponse.json(
      {
        error:
          "We couldn't send your message right now. Please email us directly at " +
          CONTACT_EMAIL +
          " or call us.",
      },
      { status: 502 }
    );
  }
}
