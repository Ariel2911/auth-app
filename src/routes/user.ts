import { Router } from "express";
import { Request, Response } from "express";

export const userRouter = Router();

userRouter.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Lista de usuario" });
});

userRouter.get("/:id", (_req:Request, res:Response) => {
  res.json({ message: "Usuario" });
});

userRouter.put("/:id", (_req:Request, res:Response) => {
  res.json({ message: "Usuario modificado" });
});

userRouter.delete("/:id", (_req:Request, res:Response) => {
  res.json({ message: "Usuario borrado" });
});
