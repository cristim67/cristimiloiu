import { MetadataRoute } from "next";
import { PAGE_ROUTES, SITE_URL } from "@/lib/site";

export const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
