import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://x.com/home",
  match: "https://x.com/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
