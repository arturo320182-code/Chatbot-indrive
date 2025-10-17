const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("¡Bot InDrive funcionando correctamente!");
});

app.listen(port, () => {
  console.log(Servidor iniciado en http://localhost:${port});
});
