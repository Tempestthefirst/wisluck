import Script from "next/script";
import { GA_MEASUREMENT_ID, GADS_CONVERSION_ID } from "@/lib/gtag";

export function GoogleTag() {
  // Load gtag.js if either a GA4 Measurement ID or a Google Ads
  // Conversion ID is configured. Renders nothing until one is set.
  const tagId = GA_MEASUREMENT_ID || GADS_CONVERSION_ID;
  if (!tagId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ""}
          ${GADS_CONVERSION_ID ? `gtag('config', '${GADS_CONVERSION_ID}');` : ""}
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
