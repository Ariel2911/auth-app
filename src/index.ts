import { app } from "./app";
import "./config/db";
app.set("PORT", process.env.PORT);

app.listen(app.get("PORT"), () => {
  console.log(`Server listen in port ${app.get("PORT")}`);
});