import express from "express";

import { printRouter } from "./routes/print";

const app = express();

app.use(express.json());

app.use(printRouter);

app.all("*", (req, res) => {
  throw new Error("Not found");
});

app.listen(4000);
console.log("app listening on port 4000");
