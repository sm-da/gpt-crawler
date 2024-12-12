import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.spacex.com/",
  match: "https://www.spacex.com/**",
  maxPagesToCrawl: 9999999999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
