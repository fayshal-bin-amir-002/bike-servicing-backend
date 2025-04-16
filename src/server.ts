import { Server } from "http";
import app from "./app";

const port = 7070;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

main();
