import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://openai.com/sitemap.xml/",
  match: "",
  maxPagesToCrawl: 1,
  outputFileName: "open-ai.json",
  maxTokens: 2000000,
  selector: "",
};
