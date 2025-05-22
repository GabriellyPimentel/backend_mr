import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function criarFilho({ nome, dataNascimento, maeSoloId }) {
  return await prisma.filho.create({
    data: {
      nome,
      data_nascimento: dataNascimento,
      idMae: maeSoloId
    },
    include: {
      mae: true
    }
});
}

export async function listarFilhos() {
  return await prisma.filho.findMany({
    include: {
      mae: {
        include: { usuario: true }
      }
    }
  });
}

export async function buscarFilhoPorId(id) {
  return await prisma.filho.findUnique({
    where: { id },
    include: {
      mae: {
        include: { usuario: true } 
      }
    }
  });
}

export async function atualizarFilho(id, dados) {
  return await prisma.filho.update({
    where: { id },
    data: {
      nome: dados.nome,
      data_nascimento: dados.dataNascimento
    },
    include: {
      mae: {
        include: { usuario: true } // Isso só funciona se o modelo MaeSolo tiver `usuario`
      }
    }
  });
}

export async function deletarFilho(id) {
  return await prisma.filho.delete({
    where: { id }
  });
}
