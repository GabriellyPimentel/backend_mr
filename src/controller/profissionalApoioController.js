import { logEvents } from "../middlewares/logger.midleware.js";
import serviceProfissionalApoio from "../services/profissionalapoio.service.js";

class ProfissionalApoioController {
        async criarProfissionalApoio(req, res) {
            try {
                const {
                    nome,
                    documentoIdentificacao,
                    telefone,
                    email,
                    areaAtuacao
                        } = req.body;

            if (
                !nome ||
                !documentoIdentificacao ||
                !telefone ||
                !email ||
                !areaAtuacao
            ) {
                return res.status(400).json({
                    mensagem: "Informe todos os dados obrigatórios."
                });
            }

            const novoUsuario = await criarUsuario({
                nome,
                documentoIdentificacao,
                telefone,
                email
            });

            const id = novoUsuario.id;

            const novoProfissional = await serviceProfissionalApoio.criarProfissionalApoio({
                id,
                areaAtuacao
            });

            return res.status(201).json({
                mensagem: "Profissional de apoio cadastrado com sucesso.",
                profissional: novoProfissional
            });
        } catch (err) {
            return res.status(500).json({
                erro: err.message
            });
        }
    }

      async getAllProfissionais() {
        const profissionais = await prisma.profissionalApoio.findMany({
            include: {
                usuario: true
            }
        });
        return profissionais;
    }

    async atualizarProfissional(id, data) {
        const profissionalExistente = await prisma.profissionalApoio.findUnique({
            where: { id }
        });

        if (!profissionalExistente) return null;

        await prisma.usuario.update({
            where: { id },
            data: {
                nome: data.nome,
                telefone: data.telefone,
                email: data.email,
                documentoIdentificacao: data.documentoIdentificacao
            }
        });

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
        const profissionalExistente = await prisma.profissionalApoio.findUnique({
            where: { id }
        });

        if (!profissionalExistente) return null;

        await prisma.profissionalApoio.delete({
            where: { id }
        });

        await prisma.usuario.delete({
            where: { id }
        });

        return true;
    }
}


export default new ProfissionalApoioController();
