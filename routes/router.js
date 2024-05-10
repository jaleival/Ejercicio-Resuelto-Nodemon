import express from "express";
import enviar from "../config/mailer.js";
import path from "path";
const __dirname = path.resolve();

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/inicio", (req, res) => {
  res.send("hola mundo, soy la configuración con express");
});

router.post("/enviar", async (req, res) => {
  try {
    const { to, subject, html } = req.body;
    console.log(req.body);
    await enviar(to, subject, html);
    res.send("Correo enviado");
  } catch (error) {
    console.log(error);
  }
});

export default router;