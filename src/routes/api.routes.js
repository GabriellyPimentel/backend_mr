import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js";
import ProfissionalApoioController from "../controllers/ProfissionalApoioController.js";
import disponibilidadeController from "./../controllers/disponibilidadeController.js";

const maeSolo = Router();
const profissionalApoio = Router();
const disponibilidade = Router();


// Colocar as rotas aqui
maeSolo.post("/cadastrarMae", MaeSoloController.criarMaeSolo);

profissionalApoio.post("/cadastrarProfissional", ProfissionalApoioController.criarProfissionalApoio);

disponibilidade.post("/cadastrardispobilidade",disponibilidadeController.criardisponibilidade);


export default maeSolo;


