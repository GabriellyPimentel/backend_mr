import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js"
import ProfissionalApoioController from "../controllers/ProfissionalApoioController.js";


const maeSolo = Router();
const profissionalApoio = Router();


// Colocar as rotas aqui
maeSolo.post("/cadastrarMae", MaeSoloController.criarMaeSolo);

profissionalApoio.post("/cadastrarProfissional", ProfissionalApoioController.criarProfissionalApoio);



export default maeSolo;


