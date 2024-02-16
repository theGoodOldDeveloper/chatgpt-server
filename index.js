import express from "express";
import CORS from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(CORS());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get("/", (req, res) => {
  res.send("Im theGoodOldDeveloper personaless secretary... 😎");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
