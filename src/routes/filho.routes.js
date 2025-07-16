import { Router } from "express";
import FilhoController from "../controller/filho.controller.js";
import validateFields from "../middlewares/validateFields.middleware.js";

const router = Router();

router.post(
    "/cadastrar",
    validateFields(["nome", "dia", "mes", "ano", "maeSoloId"], "body"),
    FilhoController.criar
);

router.get(
    "/",
    validateFields(["pagina"], "query"), // Exemplo: valida query
    FilhoController.listar
);

router.get(
    "/buscar/:id",
    validateFields(["id"], "params"),
    FilhoController.buscarPorId
);

router.put(
    "/atualizar/:id",
    validateFields(["id"], "params"),
    validateFields(["nome", "dia", "mes", "ano", "maeSoloId"], "body"),
    FilhoController.atualizar
);

router.delete(
    "/deletar/:id",
    validateFields(["id"], "params"),
    FilhoController.deletar
);

export default router;
