//Rutas relacionadas a la autenticacion de la aplicacion 
import { Router } from "express";
import { Request, Response } from "express";

export const authRouter = Router()

authRouter.post('/signup',[/*middleware*/], (req:Request, res:Response) => {
    // const { name } = req.body;
    // console.log(name);
})

authRouter.post('/login', (_req:Request, res:Response) => {
    // res.json({message: 'Login'})
})