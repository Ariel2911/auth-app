import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Funciona");
});

