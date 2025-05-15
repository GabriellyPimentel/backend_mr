import { PrismaClient } from "@prisma/client";
import { v4 as uuid4 } from "uuid";

const prisma = new PrismaClient();

export async function criarUsuario(data) {
    const novoUsuario = await prisma.usuario.create({
        data: {
            id: uuid4(),
            nome: data.nome,
            documentoIdentificacao: data.documentoIdentificacao,
            telefone: data.telefone,
            email: data.email
        }
    })
    return novoUsuario;
}

export async function encontrarUsuario(identificacao) {
    const usuario = await prisma.usuario.findUnique({
        where: {
                documentoIdentificacao: identificacao
        }
    });
};

export async function atualizarUsuario(data) {
    const usuarioAtualizado = await prisma.usuario.update({
        where: {
            id
        },
        data: {
            nome: data.nome,
            documentoIdentificacao: data.documentoIdentificacao,
            telefone: data.telefone,
            email: data.email
        }
    })
}