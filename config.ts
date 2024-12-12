import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://openai.com/",
  match: "https://openai.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "open-ai.json",
  maxTokens: 2000000,
  selector: "body",
};
