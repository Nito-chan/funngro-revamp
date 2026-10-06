import type { MetadataRoute } from "next";

/**
 * Intentionally empty: v1 is noindexed (duplicate-content protection, the
 * indexable canonical revamp lives in the v2 project), so it submits no URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}