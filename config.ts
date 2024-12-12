import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://neuralink.com/",
  match: "https://neuralink.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "neuralink.json",
  maxTokens: 2000000,
};
