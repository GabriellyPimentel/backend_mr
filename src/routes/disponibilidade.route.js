import { Router } from "express";
import disponibilidadeController from "../controller/disponibilidade.controller.js";
import validateFields from "../middlewares/validateFields.middleware.js";

const disponibilidade = Router();

disponibilidade.get(
    "/:id",
    validateFields(["id"], "params"),
    disponibilidadeController.pegarDisponibilidade
);

disponibilidade.post(
    "/criar",
    validateFields(["idProfissional", "data", "horario"], "body"),
    disponibilidadeController.criarDisponibilidade
);

disponibilidade.put(
    "/atualizar/:id",
    validateFields(["id"], "params"),
    validateFields(["data", "horario"], "body"),
    disponibilidadeController.editarDisponibilidade
);

disponibilidade.delete(
    "/deletar/:id",
    validateFields(["id"], "params"),
    disponibilidadeController.deletarDisponibilidade
);

export default disponibilidade;