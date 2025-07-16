import { Router } from "express";
import profissionalApoioController from "../controller/profissionalApoioController.js";
import validateFields from "../middlewares/validateFields.middleware.js";

const profissional = Router();

profissional.get(
    "/",
    validateFields(["pagina"], "query"), // Exemplo: valida query
    profissionalApoioController.getAllProfissionais
);

profissional.post(
    "/cadastrar",
    validateFields(["nome", "cpf"], "body"),
    profissionalApoioController.criarProfissionalApoio
);

profissional.put(
    "/atualizar/:cpf",
    validateFields(["cpf"], "params"),
    validateFields(["nome"], "body"),
    profissionalApoioController.atualizarProfissional
);

profissional.delete(
    "/deletar/:cpf",
    validateFields(["cpf"], "params"),
    validateFields(["confirmacao"], "query"), // Exemplo: valida query
    profissionalApoioController.deletarProfissional
);

export default profissional;