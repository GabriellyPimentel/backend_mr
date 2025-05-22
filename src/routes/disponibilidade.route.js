import { Router } from "express";
import disponibilidadeController from "../controller/disponibilidade.controller.js";

const disponibilidade = Router();

disponibilidade.get("/", disponibilidadeController.pegarTodasDisponibilidade);
disponibilidade.get("/:id", disponibilidadeController.pegarDisponibilidade);
disponibilidade.post("/criar", disponibilidadeController.criarDisponibilidade);
disponibilidade.put("/atualizar/:id", disponibilidadeController.editarDisponibilidade);
disponibilidade.delete("/deletar/:id", disponibilidadeController.deletarDisponibilidade);
disponibilidade.get("/:idProfissional", disponibilidadeController.disponibilidadePofissional);

export default disponibilidade;