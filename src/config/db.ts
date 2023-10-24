import mongoose from "mongoose";

try {
  mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log("Base de datos conectada");
  });
} catch (error) {
  console.error(error);
}
