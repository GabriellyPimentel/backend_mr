import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { logEvents, logger } from "./middlewares/logger.midleware.js";
import authRoutes from "./routes/auth.routes.js";
import disponibilidade from "./routes/disponibilidade.route.js";
import router from "./routes/filho.routes.js";
import maeSolo from "./routes/maeSolo.routes.js";
import profissional from "./routes/profissionalApoio.route.js";

import  verifyToken from "./middlewares/auth.middleware.js";
import { checkPermission } from "./middlewares/permission.middleware.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());

// Rotas públicas
app.use("/auth", authRoutes);

// Rotas protegidas
app.use("/mae-solo", verifyToken, checkPermission(["maeSolo"]), maeSolo);
app.use("/profissional", verifyToken, checkPermission(["profissional"]), profissional);
app.use("/disponibilidade", verifyToken, checkPermission(["profissional"]), disponibilidade);
app.use("/filho", verifyToken, checkPermission(["maeSolo"]), router);

const PORT = process.env.PORT || 8800;

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
  console.log(`Servidor rodando na porta ${PORT}`)
});
