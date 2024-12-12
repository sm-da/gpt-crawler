import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://x.ai/",
  match: "https://x.ai/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body",
};
