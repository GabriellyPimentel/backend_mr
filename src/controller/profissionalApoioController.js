import { logEvents } from "../middlewares/logger.midleware.js";
import profissionalApoioService from "../services/profissionalApoio.service.js";

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

            const existeUsuario = await encontrarUsuario(documentoIdentificacao);

            if(existeUsuario) {
                return res.status(404).json({message: "Insira dados validos"});
            }

            const novoUsuario = await criarUsuario({
                nome,
                documentoIdentificacao,
                telefone,
                email
            });

            const id = novoUsuario.id;

            const novoProfissional = await profissionalApoioService.criarProfissionalApoio({
                id,
                areaAtuacao
            });

            return res.status(201).json({
                mensagem: "Profissional de apoio cadastrado com sucesso.",
                profissional: novoProfissional
            });
        } catch (err) {
            return res.status(500).json({
                erro: err
            });
        }
    }

    async getAllProfissionais(req, res) {
        const profissionais = await profissionalApoioService.getAllProfissionais();
        return res.status(200).json({
            data: profissionais
        });
    }

    async atualizarProfissional(req, res) {
        const { cpf } = req.params;
        const {
            nome,
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
            documentoIdentificacao: usuario.documentoIdentificacao,
            telefone,
            email: usuario.email
        });

        const profissionalAtualizado = await profissionalApoioService.atualizarProfissional(usuario.id, {
            areaAtuacao
        });
        return res.status(200).json({
            message: "Profissional atualizado",
            profissionalAtualizado
        }); 
    }

    async deletarProfissional(req, res) {
        const { cpf } = req.params;

        if(!cpf) {
            return res.status(400).json( { erro: "Cpf não informado"});
        }
        const usuarioExiste = await encontrarUsuario(cpf);
        
        if(!usuarioExiste) {
            return res.status(400).json({ message: "infome um usuário válido!"});
        }

        const profissionalDeletado = await profissionalApoioService.deletarProfissional(usuarioExiste.id);
        const usuarioDeletado = await deletarUsuario(usuarioExiste.id);
        
        return res.status(200).json({
            message: "Profissional deletado!"
        });
    }
}


export default new ProfissionalApoioController();