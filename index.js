const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("🚀 Bot InDrive funcionando correctamente!");
});

app.post("/webhook", (req, res) => {
  console.log("📨 Mensaje recibido:", req.body);

  const twiml = `
    <Response>
      <Message>👋 ¡Hola! Soy tu bot InDrive. ¿En qué te puedo ayudar?</Message>
    </Response>
  `;

  res.type("text/xml");
  res.send(twiml);
});

app.listen(port, () => {
  console.log(Servidor iniciado en http://localhost:${port});
});
