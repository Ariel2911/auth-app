import { Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";

export const router = Router();

router.use("/auth", authRouter);
router.use("/dashboard", userRouter);
