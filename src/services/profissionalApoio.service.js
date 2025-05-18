import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


class serviceProfissionalApoio {
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
}

export default new serviceProfissionalApoio();
