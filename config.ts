import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.openai.com/",
  match: "https://docs.openai.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "open-ai.json",
  maxTokens: 2000000,
  selector: "body",
};
