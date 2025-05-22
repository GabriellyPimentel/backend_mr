import { Router } from "express";
import FilhoController from "../controller/filho.controller.js";

const router = Router();

router.post("/cadastrar", FilhoController.criar);
router.get("/", FilhoController.listar);
router.get("/buscar/:id", FilhoController.buscarPorId);
router.put("/atualizar/:id", FilhoController.atualizar);
router.delete("/deletar/:id", FilhoController.deletar);

export default router;
