import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://x.com/home",
  match: "https://x.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "x-com.json",
  maxTokens: 2000000,
  selector: "body" 
};
