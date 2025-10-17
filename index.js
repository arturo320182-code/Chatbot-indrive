const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("Mensaje recibido:", req.body);
  res.send("<Response><Message>¡Hola! Tu bot InDrive está activo 🚗💬</Message></Response>");
});

app.get("/", (req, res) => {
  res.send("Bot InDrive funcionando correctamente ✅");
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});