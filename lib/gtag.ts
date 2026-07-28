// Central helpers for Google Analytics (GA4) + Google Ads conversion tracking.
//
// Nothing here works until you set these in your deployment environment
// (e.g. Vercel project settings) — get the values from your own Google
// Ads / GA4 accounts once you create them:
//
//   NEXT_PUBLIC_GA_MEASUREMENT_ID       e.g. G-XXXXXXXXXX   (GA4 property)
//   NEXT_PUBLIC_GADS_CONVERSION_ID      e.g. AW-XXXXXXXXX   (Google Ads account)
//   NEXT_PUBLIC_GADS_CONVERSION_LABEL   the label for your specific "lead" conversion action
//
// Until those are set, every function below simply no-ops — the site
// works normally, it just doesn't report anything anywhere.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
export const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

type GtagArgs = [string, string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

function callGtag(...args: GtagArgs) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag(...args);
}

/** Fire on a completed, successful contact-form submission. */
export function trackLeadSubmit(formLabel: string) {
  // GA4's recommended event name for a lead-generation action
  callGtag("event", "generate_lead", { form_name: formLabel });

  if (GADS_CONVERSION_ID && GADS_CONVERSION_LABEL) {
    callGtag("event", "conversion", {
      send_to: `${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}`,
    });
  }
}

/** Fire when someone clicks a tel: or mailto: link — a real intent signal for a service business. */
export function trackContactClick(method: "phone" | "email") {
  callGtag("event", "contact", { method });
}
