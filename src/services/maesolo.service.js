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
    
    async atualizarMae() {

    }
}


export default new serviceMae();