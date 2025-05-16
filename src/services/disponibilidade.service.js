

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


class servicedisponibilidade {
    async criardisponibilidade(data) {
        const novadisponibilidade = await prisma.disponibilidade.create({
            data: {
                idprofissionalApoio:
                data.idprofissionalApoio,
                horario:
                data.horario,
                data:newDate(data.data)
            },
            include: {
                profissionalApoio: true
            }
        });

        return novadisponibilidade;
    }
}

export default new servicedisponibilidade();
