import { Router } from "express";
import MaeSoloController from "../controller/api.controller.js";



const maeSolo = Router();


// Colocar as rotas aqui
//rotas da mae
maeSolo.get("/mae", MaeSoloController.getAllMaes);
maeSolo.post("/mae/cadastrar", MaeSoloController.criarMaeSolo);
maeSolo.put("/mae/atualizar/:cpf", MaeSoloController.atualizarMae);
maeSolo.delete("/mae/deletar/:cpf", MaeSoloController.deletarMae);

export default maeSolo;


