import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function registerUser(req, res) {
    try {
        const { nome, documentoIdentificacao, telefone, email, senha } = req.body;

        const hashedPassword = await bcrypt.hash(senha, 10);

        const usuario = await prisma.usuario.create({
            data: {
                nome,
                documentoIdentificacao,
                telefone,
                email,
                senha: hashedPassword,
            },
        });

        res.status(201).json({ mensagem: "Usuário registrado com sucesso", usuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao registrar usuário" });
    }
}