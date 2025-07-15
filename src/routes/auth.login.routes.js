import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Router } from 'express';
import jwt from 'jsonwebtoken';

// ...existing code...
import { loginUser } from '../controller/auth.login.controller.js';
// ...existing code...

const router = Router();
const prisma = new PrismaClient();

router.post('/auth/login', loginUser);

    const { email, senha } = req.body;

    try {
        const usuario = await prisma.usuario.findUnique({ where: { email } });

        if (!usuario) {
            return res.status(401).json({ mensagem: 'Email ou senha inválidos' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(401).json({ mensagem: 'Email ou senha inválidos' });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000, 
        });

        res.status(200).json({ mensagem: 'Login bem-sucedido' });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
;

export default router;
