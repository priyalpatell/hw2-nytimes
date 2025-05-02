import { test, expect, it, describe, assert } from "vitest";
import { formatArticles } from "../lib/formatArticles";
import { articles } from "./content";
import { queryArticles } from "../lib/queryArticles";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env" });
let apiKey = String(process.env.NYT_API_KEY);

// test("App", async () => {
//   render(App);
// });

interface MyArticle {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  multimedia: any;
  headline: any;
  keywords: any;
  pub_date: string;
  document_type: string;
  desk: string;
  section_name: string;
  byline: any;
  type_of_material: string;
  word_count: number;
  uri: string;
}

/* Test queryArticles() returning output */
test("check for first article that query values returned match expected output", async () => {
  try {
    const result = await queryArticles(apiKey, "Davis CA");
    expect("docs" in result);
    expect(result["docs"].length).toBeGreaterThan(0);
    expect("snippet" in result["docs"][0]);
    expect("multimedia" in result["docs"][0]);
    expect("headline" in result["docs"][0]);
  } catch (error) {
    console.log(error);
  }
});

/* Test queryArticles() to have key value*/
describe("Object check", () => {
  it("should have the key and value", async () => {
    try {
      const result = await queryArticles(apiKey, "Davis CA");
      expect(result["docs"].length).toBeGreaterThan(0);
      expect(result["docs"][0]).toHaveProperty("type_of_material", "News");
    } catch (error) {
      console.log(error);
    }
  });
});


/* Test formatArticles() */
test("check articles with additional fields are being stored and formatted correctly", () => {
  const result = formatArticles(articles);
  expect(result.length).toBeGreaterThan(0);
  expect("snippet" in result[0]);
  expect("multimedia" in result[0]);
  expect("headline" in result[0]);
});

/* Test formatArticles() sections */
test("formatArticles assigns sections in cyclic order: main, left, right", () => {
  const mockArticles = Array.from({ length: 6 }).map((_, i) => ({
    headline: { main: `Headline ${i}` },
    snippet: `Snippet ${i}`,
    multimedia: [],
  }));

  const formatted = formatArticles(mockArticles);
  const expectedSections = ["main", "left", "right", "main", "left", "right"];

  formatted.forEach((article, i) => {
    expect(article.section).toBe(expectedSections[i]);
  });
});

