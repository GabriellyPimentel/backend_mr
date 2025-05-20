import { Router } from "express";
import profissionalApoioController from "../controller/profissionalApoioController.js";

const profissional = Router();

profissional.get("/", profissionalApoioController.getAllProfissionais);
profissional.post("/cadastrar", profissionalApoioController.criarProfissionalApoio);
profissional.put("/atualizar/:cpf", profissionalApoioController.atualizarProfissional);
profissional.delete("/deletar/:cpf", profissionalApoioController.deletarProfissional);

export default profissional;