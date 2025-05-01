import type { Article } from "./Article";

export function formatArticles(json: any): Article[] {
  const sections = ["main", "left", "right"];
  return json.map((item: any, index: number) => ({
    section: sections[index % sections.length],
    headline: item.headline.main,
    snippet: item.snippet,
    image: item.multimedia?.default.url || undefined,
    caption: item.multimedia?.caption || undefined,
  }));
}
