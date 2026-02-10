import fs from "fs";

export function getAppInfo() {
  const raw = fs.readFileSync("./models/app-info.json");
  return JSON.parse(raw);
}
