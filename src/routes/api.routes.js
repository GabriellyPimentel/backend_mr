import { Router } from "express";
import MaeSoloController from "./../controller/api.controllers.js"
import ProfissionalApoioController from "../controllers/ProfissionalApoioController.js";


const maeSolo = Router();
const profissionalApoio = Router();


// Colocar as rotas aqui
//rotas da mae
maeSolo.get("/mae", MaeSoloController.getAllMaes);
maeSolo.post("/mae/cadastrar", MaeSoloController.criarMaeSolo);
maeSolo.put("/mae/atualizar/:cpf", MaeSoloController.atualizarMae);
maeSolo.delete("/mae/deletar/:cpf", MaeSoloController.deletarMae);

profissionalApoio.post("/cadastrarProfissional", ProfissionalApoioController.criarProfissionalApoio);



export default maeSolo;


