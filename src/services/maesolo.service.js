import { PrismaClient } from "@prisma/client";
const prisma = PrismaClient;
import { v4 as uuid4 } from "uuid"
    export const criar = async (nome, documentoIdentificacao,telefone,email) => { 
        await prisma.user.create({
        data: {
            id: uuid4(),
            nome,
            documento_identificacao: documentoIdentificacao,
            telefone,
            email 
        }
    });
}

export const criarMae = async (id, 
            dataNascimento,
            escolaridade,
            endereco,
            rendaMensal,
            situacaoTrabalho) => {
    await prisma.user.create({
    data: {
        id,
        data_nascimento: data_nascimento,
        escolaridade,
        endereco,
        renda_mensal,
        situacao_trabalho
    }
})
}

