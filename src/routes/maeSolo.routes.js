import { Router } from "express";
import MaeSoloController from "../controller/api.controller.js";
import validateFields from "../middlewares/validateFields.middleware.js";

const maeSolo = Router();

maeSolo.get(
    "/mae",
    validateFields(["pagina"], "query"), // Se usar paginação
    MaeSoloController.getAllMaes
);

maeSolo.post(
    "/mae/cadastrar",
    validateFields(["nome", "documentoIdentificacao", "telefone", "email", "ano", "mes", "dia", "escolaridade", "endereco", "rendaMensal", "situacaoTrabalho"], "body"),
    MaeSoloController.criarMaeSolo
);

maeSolo.put(
    "/mae/atualizar/:documentoIdentificacao",
    validateFields(["documentoIdentificacao"], "params"),
    validateFields(["nome", "telefone", "email", "ano", "mes", "dia", "escolaridade", "endereco", "rendaMensal", "situacaoTrabalho"], "body"),
    MaeSoloController.atualizarMae
);

maeSolo.delete(
    "/mae/deletar/:documentoIdentificacao",
    validateFields(["documentoIdentificacao"], "params"),
    MaeSoloController.deletarMae
);

export default maeSolo;


