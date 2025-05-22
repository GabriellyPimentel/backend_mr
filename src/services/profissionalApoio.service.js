import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


class profissionalApoioService {
    async criarProfissionalApoio(data) {
        const novoProfissional = await prisma.profissionalApoio.create({
            data: {
                id: data.id,
                areaAtuacao: data.areaAtuacao
            },
            include: {
                usuario: true
            }
        });

        return novoProfissional;
    }
    
    async getAllProfissionais() {
        const profissionais = await prisma.profissionalApoio.findMany();
        return profissionais;
    }

    async atualizarProfissional(id, data) {
        const profissionalAtualizado = await prisma.profissionalApoio.update({
            where: { id },
            data: {
                areaAtuacao: data.areaAtuacao
            },
            include: {
                usuario: true
            }
        });
        return profissionalAtualizado;
    }

    async deletarProfissional(id) {
        const profissionalDeletado = await prisma.profissionalApoio.delete({
            where: {
                id
            }
        })
        return profissionalDeletado;
    }
}

export default new profissionalApoioService();
