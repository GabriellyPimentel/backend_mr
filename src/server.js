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
import verifyToken from "./middlewares/auth.middleware.js";
import { checkPermission } from "./middlewares/permission.middleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());

// ✅ ROTA PRINCIPAL 
app.get('/', (req, res) => {
  res.json({ 
    message: 'Mãe Solo API funcionando!',
    status: 'online',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// ✅ HEALTH CHECK
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'API funcionando perfeitamente!',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()) + ' segundos'
  });
});

// Rotas públicas
app.use("/auth", authRoutes);

// Rotas protegidas
app.use("/mae-solo", verifyToken, checkPermission(["maeSolo"]), maeSolo);
app.use("/profissional", verifyToken, checkPermission(["profissional"]), profissional);
app.use("/disponibilidade", verifyToken, checkPermission(["profissional"]), disponibilidade);
app.use("/filho", verifyToken, checkPermission(["maeSolo"]), router);

const PORT = process.env.PORT || 8800;

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  logEvents(`${err.name}: ${err.message}`, "error.log");
  res.status(500).json({ mensagem: "Erro interno no servidor" });
});

// 404 
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT} - VERSÃO CORRIGIDA`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📱 Teste: http://localhost:${PORT}/`);
  console.log(`💚 Health: http://localhost:${PORT}/health`);
});