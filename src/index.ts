import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao curso de Node.js!");    
});

app.listen(3000, () => {
  console.log("Server ativo na porta 3000 - http://localhost:3000");
});