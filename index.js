const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Mensaje recibido:", req.body);
  const twiml = \`
    <Response>
      <Message>¡Hola! Soy tu bot de InDrive 🟢</Message>
    </Response>\`;
  res.set("Content-Type", "text/xml");
  res.send(twiml);
});

app.get("/", (req, res) => {
  res.send("Bot InDrive activo ✅");
});

app.listen(port, () => {
  console.log(\`Servidor iniciado en http://localhost:\${port}\`);
});