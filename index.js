import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));

//Ruta
app.use("/", router);

// Puerto escucha
app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));
