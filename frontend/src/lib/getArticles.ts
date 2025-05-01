import type { Article } from './Article';

export function getArticles(json: any): Article[] {
    const sections = ["main", "left", "right"];
    return json.articles.map((item: any, index: number) => ({
        section: sections[index % sections.length],
        headline:item.headline,
        snippet: item.snippet,
        image: item.multimedia?.default.url || undefined,
        caption: item.multimedia?.caption || undefined
    }))
}