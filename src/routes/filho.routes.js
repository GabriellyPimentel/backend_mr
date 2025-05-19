import { Router } from "express";
import FilhoController from "../controller/filho.controller.js";

const router = Router();

router.post("/", FilhoController.criar);
router.get("/", FilhoController.listar);
router.get("/:id", FilhoController.buscarPorId);
router.put("/:id", FilhoController.atualizar);
router.delete("/:id", FilhoController.deletar);

export default router;
