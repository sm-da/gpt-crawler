import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://",
  match: "https://**",
  maxPagesToCrawl: 1,
  outputFileName: "output/<filename>.json",
  maxTokens: 2000000,
  selector: "body"
};
