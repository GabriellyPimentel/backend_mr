import { logEvents } from "../middlewares/logger.midleware.js";
import serviceProfissionalApoio from "../services/profissionalapoio.service.js";
import { 
    criarUsuario,
    encontrarUsuario,
    atualizarUsuario,
    deletarUsuario
 } from "../services/criar.service.js";


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
        const profissionais = await serviceProfissionalApoio.getAllProfissionais();
        return res.status(200).json({
            profissionais
        });
    }

    async atualizarProfissional(req, res) {
        const { cpf } = req.params;
        const {
            nome,
            documentoIdentificacao,
            telefone,
            email,
            areaAtuacao
        } = req.body;

        if (!cpf) {
            return res.status(400).json({
                message: "Iforme o cpf do profissional."
            })
        };

        const usuario = await encontrarUsuario(cpf);

        if(!usuario) {
            return res.status(400).json({
                message: "Informações inválidas!"
            });
        }

        const usuarioAtualizado = await atualizarUsuario(usuario.id, {
            nome,
            documentoIdentificacao,
            telefone,
            email
        });

        const profissionalAtualizado = await serviceProfissionalApoio(usuario.id, {
            areaAtuacao
        });
        return res.status(200).json({
            message: "Profissional atualizado",
            profissionalAtualizado
        }); 
    }

    async deletarProfissional(req, res) {
        const { cpf } = req.params;

        if(!id) {
            return res.status(400).json( { erro: "Id não informado"});
        }
        const usuarioExiste = await encontrarUsuario(id);
        
        if(!usuarioExiste) {
            return res.status(400).json({ message: "infome um usuário válido!"});
        }
        const usuarioDeletado = await deletarUsuario(usuarioExiste.id);
        const profissionalDeletado = await serviceProfissionalApoio.deletarProfissional(usuarioExiste.id);
        return res.status(200).json({
            message: "Profissional deletado!"
        });
    }
}


export default new ProfissionalApoioController();
