import express from "express";
<<<<<<< HEAD
import { logEvents, logger } from "./middlewares/logger.midleware.js";
import dotenv from "dotenv";
import maeSolo from "./routes/api.routes.js";
=======
import { logEvents, logger } from "./middlewares/logger.midleware.js"
import dotenv from "dotenv"
import maeSolo from "./routes/maeSolo.routes.js";
import profissional from "./routes/profissionalApoio.route.js";
import disponibilidade from "./routes/disponibilidade.route.js";
import router from "./routes/filho.routes.js";

>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc

dotenv.config();

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
=======
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc

app.use(logger);
app.use(express.json());

app.use("/mae-solo", maeSolo);
app.use("/profissional", profissional);
app.use("/disponibilidade", disponibilidade);
app.use("/filho", router);

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
<<<<<<< HEAD
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
=======
    //logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
    console.log(`Servidor rodando na porta ${PORT}`)
});
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
