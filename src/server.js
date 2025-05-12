import express from "express";
import { logEvents, logger } from "./middlewares/logger.midleware.js"
import dotenv from "dotenv"
import maeSolo from "./routes/api.routes.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use("/maeSolo", maeSolo);

app.use(logger);
app.use(express.json());

app.listen(PORT, async () => {
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});