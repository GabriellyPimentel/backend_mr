import express from "express";
import { loginUser } from "../controller/auth.login.controller.js";
import { registerUser } from "../controller/auth.register.controller.js";
import validateFields from "../middlewares/validateFields.middleware.js";


const router = express.Router();

// Rota de registro
router.post("/register", validateFields(["nome", "documentoIdentificacao", "senha"]), registerUser);

// Rota de login
router.post("/login", validateFields(["documentoIdentificacao", "senha"]), loginUser);

export default router;