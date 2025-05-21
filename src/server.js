import express from "express";
import { logEvents, logger } from "./middlewares/logger.midleware.js"
import dotenv from "dotenv"
import maeSolo from "./routes/api.routes.js";

dotenv.config();

const app = express();

app.use(logger);
app.use(express.json());

app.use("/maeSolo", maeSolo);

const PORT = process.env.PORT || 8800;

app.listen(PORT, async () => {
    logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});