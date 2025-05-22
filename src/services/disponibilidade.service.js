import { PrismaClient } from "@prisma/client";
import { v4 as uuid4 } from "uuid";
const prisma = new PrismaClient();

class disponibilidadeService {
    async criardisponibilidade(data) {
        const novadisponibilidade = await prisma.disponibilidade.create({
    data: {
        data: data.data,
        horario:data.horario,
        profissional: {
        connect: {
            id: data.idProfissional  // ou idProfissionalApoio dependendo do nome real
        }
        }
    },
    include: {
        profissional: true  // ou profissionalApoio
    }
});

        return novadisponibilidade;
    }

    async listardisponibilidade() {
        return await prisma.disponibilidade.findMany();
    }

    async buscarPorId(id) {
        return await prisma.disponibilidade.findUnique({
            where: { id },
            include: {
                profissional: true
            }
        });
    }

    async atualizardisponibilidade(id, dataAtualizada) {
        return await prisma.disponibilidade.update({
        where: { id },
        data: {
            horario: dataAtualizada.horario,
            data: dataAtualizada.data
        },
        include: {
            profissional: true
        }
    });
    }

    async deletardisponibilidade(id) {
        return await prisma.disponibilidade.delete({
            where: { id}
        });
    }

    async listarDisponibilidadeProfissional(idProfissional) {
        return await prisma.disponibilidade.findMany({
            where: {
                idProfissional
            },
            include: {
                profissionalApoio: true
            }
        });
    }
}

export default new disponibilidadeService();

