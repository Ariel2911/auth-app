//Rutas relacionadas a la autenticacion de la aplicacion 
import { Router } from "express";
import { Request, Response } from "express";
import { signUpController } from "../controllers/auth/authController";

export const authRouter = Router()

authRouter.post('/signup',/*[/*middleware]*/ signUpController)

authRouter.post('/login', (_req:Request, res:Response) => {
    // res.json({message: 'Login'})
})