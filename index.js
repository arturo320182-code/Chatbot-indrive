const express = require("express");
const { urlencoded } = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));

app.post("/webhook", (req, res) => {
  const messageBody = req.body.Body || "";

  console.log("Mensaje recibido:", messageBody);

  const responseMessage = "👋 Hola, soy tu bot InDrive. ¿En qué puedo ayudarte?";

  const twiml = `
    <Response>
      <Message>${responseMessage}</Message>
    </Response>
  `;

  res.set("Content-Type", "text/xml");
  res.send(twiml.trim());
});

app.get("/", (req, res) => {
  res.send("🚀 Bot InDrive en línea.");
});

app.listen(port, () => {
  console.log(Servidor iniciado en http://localhost:${port});
});
