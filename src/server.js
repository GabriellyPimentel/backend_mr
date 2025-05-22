import express from "express";
import { logEvents, logger } from "./middlewares/logger.midleware.js";
import dotenv from "dotenv";
import maeSolo from "./routes/api.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

app.use("/maeSolo", maeSolo);

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  logEvents(`${err.name}: ${err.message}`, "error.log");
  res.status(500).json({ mensagem: "Erro interno no servidor" });
});

app.listen(PORT, async () => {
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});