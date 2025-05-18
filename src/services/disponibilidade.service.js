import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class servicedisponibilidade {
    async criardisponibilidade(data) {
        const novadisponibilidade = await prisma.disponibilidade.create({
            data: {
                idProfissionalApoio: data.idProfissionalApoio,
                horario: data.horario,
                data: new Date(data.data)
            },
            include: {
                profissionalApoio: true
            }
        });

        return novadisponibilidade;
    }

    async listardisponibilidade() {
        return await prisma.disponibilidade.findMany({
            include: {
                profissionalApoio: true
            }
        });
    }

    async buscarPorId(id) {
        return await prisma.disponibilidade.findUnique({
            where: { id: Number(id) },
            include: {
                profissionalApoio: true
            }
        });
    }

    async atualizardisponibilidade(id, dataAtualizada) {
        return await prisma.disponibilidade.update({
            where: { id: Number(id) },
            data: {
                idProfissionalApoio: dataAtualizada.idProfissionalApoio,
                horario: dataAtualizada.horario,
                data: new Date(dataAtualizada.data)
            }
        });
    }

    async deletardisponibilidade(id) {
        return await prisma.disponibilidade.delete({
            where: { id: Number(id) }
        });
    }
}

export default new servicedisponibilidade();

