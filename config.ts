import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://paypal.com/",
  match: "https://paypal.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "paypal.json",
  maxTokens: 2000000,
  selector: "body",
};
