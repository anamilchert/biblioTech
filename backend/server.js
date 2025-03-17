const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Servidor está rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});