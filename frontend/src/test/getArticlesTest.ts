import { formatArticles } from "../lib/formatArticles.ts";
import { queryArticles } from "../lib/queryArticles.ts";
import { expect } from "chai";
import * as dotenv from "dotenv";

// Mock Flask Get API Key Behavior
dotenv.config({ path: "../.env" });
let apiKey = String(process.env.NYT_API_KEY);

describe("getArticles", () => {
  it("should return a JSON object with info from all articles", async () => {
    const result = await queryArticles(apiKey, "New York City");
    expect(result).to.be.an("object");
    expect(result).to.have.property("docs");
  });
});

describe("getArticles error", () => {
  it("should throw an error given invalid input", async () => {
    try {
      const result = await queryArticles("key-invalid", "city");
    } catch (error) {
      console.log(error);
    }
  });
});

describe("getArticles", () => {
  it("should return a JSON object with info from all articles", async () => {
    const result = await queryArticles(apiKey, "New York City");
    const res = await formatArticles(result["docs"]);
  });
});
