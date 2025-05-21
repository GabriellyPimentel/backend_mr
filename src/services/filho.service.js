import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function criarFilho({ nome, dataNascimento, maeSoloId }) {
  return await prisma.filho.create({
    data: { nome, dataNascimento: new Date(dataNascimento), maeSoloId }
  });
}

export async function listarFilhos() {
  return await prisma.filho.findMany({
    include: {
      maeSolo: {
        include: { usuario: true }
      }
    }
  });
}

export async function buscarFilhoPorId(id) {
  return await prisma.filho.findUnique({
    where: { id: Number(id) },
    include: {
      maeSolo: {
        include: { usuario: true }
      }
    }
  });
}

export async function atualizarFilho(id, dados) {
  return await prisma.filho.update({
    where: { id: Number(id) },
    data: {
      nome: dados.nome,
      dataNascimento: dados.dataNascimento
        ? new Date(dados.dataNascimento)
        : undefined
    },
    include: {
      maeSolo: {
        include: { usuario: true }
      }
    }
  });
}

export async function deletarFilho(id) {
  return await prisma.filho.delete({
    where: { id: Number(id) }
  });
}
