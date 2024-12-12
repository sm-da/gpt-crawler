import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://spacecoinageminecryps.com/",
  match: "https://spacecoinageminecryps.com/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body"
};
