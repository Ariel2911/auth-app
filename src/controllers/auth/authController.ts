import userModel from "../../models/User";
import { Request, Response } from "express";
import { UserInterface } from "../../interfaces/UserInterfaces";

export const signUpController = async (req: Request, res: Response) => {
  try {
    // Recibir los datos
    const { username, email, password }: UserInterface = req.body;
    // Crear el modelo
    const userCreated = new userModel({
      username,
      email,
      password,
    });
    // Enviar a la Base de datos
    const user = await userCreated.save();
    if (!user) {
      throw new Error("Error al crear el usuario");
    }
    return res.status(200).send(user)
    // Devolver una respuesta
  } catch (error: any) {
    res.status(422).json({ message: error.message });
  }
};
