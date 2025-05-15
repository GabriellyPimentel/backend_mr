import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js"

const maeSolo = Router();

// Colocar as rotas aqui
maeSolo.post("/cadastrar-mae", MaeSoloController.criarMaeSolo);
maeSolo.get("/", MaeSoloController.getAllMaes);
maeSolo.put("/atualizar-mae:cpf", MaeSoloController.atualizarMae);
maeSolo.delete("/deletar-mae:cpf", MaeSoloController.deletarMae);

export default maeSolo;