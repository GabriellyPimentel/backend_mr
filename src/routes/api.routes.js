import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js"

const maeSolo = Router();

// Colocar as rotas aqui
maeSolo.post("/cadastrarMae", MaeSoloController.criarMaeSolo);

export default maeSolo;