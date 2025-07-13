import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function loginUser(req, res) {
    try {
        const { documentoIdentificacao, senha } = req.body;

        const usuario = await prisma.usuario.findUnique({
            where: { documentoIdentificacao },
        });

        if (!usuario) {
            return res.status(400).json({ mensagem: "Usuário não encontrado" });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Senha incorreta" });
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                tipo: usuario.MaeSolo ? "maeSolo" : usuario.ProfissionalApoio ? "profissional" : "usuario",
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 2 * 60 * 60 * 1000, // 2 horas
        });

        res.status(200).json({ mensagem: "Login realizado com sucesso", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao realizar login" });
    }
}
