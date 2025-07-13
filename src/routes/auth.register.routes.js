import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.post('/auth/register', async (req, res) => {
    const { nome, email, senha, documentoIdentificacao, telefone } = req.body;

    try {
        const usuarioExistente = await prisma.usuario.findUnique({
            where: { email },
        });

        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const novoUsuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha: senhaHash,
                documentoIdentificacao,
                telefone,
            },
        });

        return res.status(201).json({
            mensagem: 'Usuário registrado com sucesso',
            usuario: { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email },
        });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: 'Erro interno ao registrar' });
    }
});

export default router;
