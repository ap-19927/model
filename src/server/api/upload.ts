import path from "path";
import { promises as fs } from "fs";
const __dirname = path.resolve(path.dirname(""));
export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  await fs.writeFile(path.join(__dirname,`/src/public/images/uploads/${body[0].filename}`), body[0].data);
  return body;
});
