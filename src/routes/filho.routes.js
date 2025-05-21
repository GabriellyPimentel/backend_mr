import { Router } from "express";
import FilhoController from "../controller/filho.controller.js";

const router = Router();

router.post("/filho/cadastrar", FilhoController.criar);
router.get("/filho", FilhoController.listar);
router.get("/filho/buscar/:id", FilhoController.buscarPorId);
router.put("/filho/atualizar/:id", FilhoController.atualizar);
router.delete("/filho/deletar/:id", FilhoController.deletar);

export default router;
