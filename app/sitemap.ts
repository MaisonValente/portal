import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auraelyum.com";
  return [
    "",
    "/jogos",
    "/aplicativos",
    "/beta",
    "/sobre",
    "/contato",
    "/admin"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changefreq: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
