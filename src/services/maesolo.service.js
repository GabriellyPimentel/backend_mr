import { PrismaClient } from "@prisma/client";
import { v4 as uuid4 } from "uuid";
const prisma = new PrismaClient();
 
class serviceMae {
    async criarMae(data) {
        const  novaMae = await prisma.maeSolo.create({
            data: {
                id: data.id,
                data_nascimento: data.dataNascimento,
                escolaridade: data.escolaridade,
                endereco: data.endereco,
                rendaMensal: data.rendaMensal,
                situacaoTrabalho: data.situacaoTrabalho
            },
            include: {
                usuario: true
            }
        });
    return novaMae
    } 

    async getAllMaes() {
        const rows = await prisma.maeSolo.findMany();
        return rows;
    }
    
    async atualizarMae(id, data) {
        const maeAtualizada = await prisma.maeSolo.update({
            where: {
                id
            },
            data: {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                escolaridade: data.escolaridade,
                endereco: data.endereco,
                rendaMensal: data.rendaMensal,
                situacaoTrabalho: data.situacaoTrabalho
            }
        });
        return maeAtualizada;
    };

    async deletarMae(id) {
        const maeDeletada = await prisma.maeSolo.delete({
            where: {
                id
            }
        })
    };

    async encontrarMaeCpf(identificacao) {
        const mae = await prisma.maeSolo.findUnique({
            where: {
                documentoIdentificacao: identificacao
            }
        })
    }
}


export default new serviceMae();