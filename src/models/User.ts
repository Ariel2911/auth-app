import { Schema, model } from "mongoose";
import { UserInterface }  from "../interfaces/UserInterfaces";
import { boolean } from "joi";

/* CREACION DE LOS CAMPOS DE LA TABLA USER */
const userSchema = new Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmation: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);

export default userModel;
