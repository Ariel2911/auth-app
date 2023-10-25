import express from "express";
import { router } from "./routes/index";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);
