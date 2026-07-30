import type { MetadataRoute } from "next";

// Force www so it matches your main domain & GSC property
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wisluck.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
