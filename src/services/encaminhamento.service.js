import { PrismaClient } from "@prisma/client";
import { v4 as uuid4 } from "uuid";
const prisma = new PrismaClient();

//Classe Encaminhamento
class serviceEncaminhamento {

    //Creat
    async criarEncaminhamento(data) {
        const  novoEncaminhamento = await prisma.encaminhamento.create({
            data: {
                id: uuid4(),
                idMae: data.idMae,
                idProfissional: data.idProfissional,
                data: data.data,
                status: data.status,
                tipo_servico: data.tipo_servico
            },
            include: {
                usuario: true
            }
        });
    return novoEncaminhamento
    };

    //Read
    async getAllEncaminhamento() {
        const rows = await prisma.encaminhamento.findMany();
        return rows;
    };

    //Update
    async atualizarEncaminhamento(id, data) {
        const encaminhamentoAtualizado = await prisma.encaminhamento.update({
            where: {
                id
            },
            data: {
                escolaridade: data.escolaridade,
                endereco: data.endereco,
                rendaMensal: data.rendaMensal,
                situacaoTrabalho: data.situacaoTrabalho
            }
        });
        return encaminhamentoAtualizado;
    };

    //Delet
    async deletarEncaminhamento(id) {
        const encaminhamentoDeletado = await prisma.encaminhamento.delete({
            where: {
                id
            }
        })
        return encaminhamentoDeletado;
    };

}

export default new serviceEncaminhamento();