import { PrismaClient } from "@prisma/client";
import { v4 as uuid4 } from "uuid";
const prisma = new PrismaClient();

class serviceDisponibilidade {
    async criardisponibilidade(data) {
        const novadisponibilidade = await prisma.disponibilidade.create({
            data: {
                id: uuid4(),
                idProfissionalApoio: data.idProfissional,
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
            where: { id },
            include: {
                profissionalApoio: true
            }
        });
    }

    async atualizardisponibilidade(id, dataAtualizada) {
        return await prisma.disponibilidade.update({
            where: { id },
            data: {
                horario: dataAtualizada.horario,
                data: new Date(dataAtualizada.data)
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

export default new serviceDisponibilidade();

