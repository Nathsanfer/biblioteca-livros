import express from "express";
import { config } from "dotenv";

import livrosRouter from "./routes/livroRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse de JSON

app.use("/livros", livrosRouter); // Usar as rotas de livros

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de Livros funcionando!" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
