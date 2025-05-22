import { logEvents } from "../middlewares/logger.midleware.js";
import serviceMae, {
    atualizarMae,
    criarMae,
} from "../services/maesolo.service.js";
import {
    criarUsuario,
    encontrarUsuario,
    atualizarUsuario,
    deletarUsuario,
} from "./../services/criar.service.js";

class MaeSoloController {
    async criarMaeSolo(req, res) {
        try {
            const {
                nome,
                documentoIdentificacao,
                telefone,
                email,
                ano,
                mes,
                dia,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho,
            } = req.body;

            if (
                !nome ||
                !documentoIdentificacao ||
                !ano ||
                !mes ||
                !dia ||
                !escolaridade ||
                !endereco ||
                !rendaMensal ||
                !situacaoTrabalho
            ) {
                return res.status(400).json({
                    mensagem: "Informe todos os dados obrigatórios.",
                });
            }

            const existeMae = await encontrarUsuario(documentoIdentificacao);
            if (existeMae) {
                return res.status(409).json({ message: "Usuário já existe." });
            }

            const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
            const novoUsuario = await criarUsuario({
                nome,
                documentoIdentificacao,
                telefone,
                email,
            });
            const id = novoUsuario.id;

            const novaMae = await serviceMae.criarMae({
                id,
                dataNascimento,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho,
            });

            return res.status(201).json({
                mensagem: "Mãe criada com sucesso!",
                mae: novaMae,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ erro: err.message });
        }
    }

    async getAllMaes(req, res) {
        try {
            const maes = await serviceMae.getAllMaes();
            return res.status(200).json({ maes });
        } catch (err) {
            return res.status(500).json({ erro: err.message });
        }
    }

    async atualizarMae(req, res) {
        try {
            const { cpf } = req.params;
            const {
                nome,
                telefone,
                email,
                ano,
                mes,
                dia,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho,
            } = req.body;

            if (!cpf) {
                return res
                    .status(400)
                    .json({ message: "Informe o documento de identificação (CPF)." });
            }

            if (
                !nome ||
                !telefone ||
                !email ||
                !ano ||
                !mes ||
                !dia ||
                !escolaridade ||
                !endereco ||
                !rendaMensal ||
                !situacaoTrabalho
            ) {
                return res.status(400).json({
                    mensagem: "Informe todos os dados obrigatórios para atualização.",
                });
            }

            const mae = await encontrarUsuario(cpf);
            if (!mae) {
                return res.status(404).json({ message: "Mãe não encontrada." });
            }

            // Atualiza dados do usuário
            const usuarioAtualizado = await atualizarUsuario(mae.id, {
                nome,
                documentoIdentificacao: mae.documentoIdentificacao,
                telefone,
                email,
            });

            // Atualiza dados da mãe solo
            const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
            const maeAtualizada = await serviceMae.atualizarMae(mae.id, {
                dataNascimento,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho,
            });

            return res.status(200).json({
                message: "Mãe atualizada com sucesso.",
                maeAtualizada: {
                    nome: usuarioAtualizado.nome,
                    telefone: usuarioAtualizado.telefone,
                    documentoIdentificacao: usuarioAtualizado.documentoIdentificacao,
                    email: usuarioAtualizado.email,
                    dataNascimento: maeAtualizada.dataNascimento,
                    escolaridade: maeAtualizada.escolaridade,
                    endereco: maeAtualizada.endereco,
                    rendaMensal: maeAtualizada.rendaMensal,
                    situacaoTrabalho: maeAtualizada.situacaoTrabalho,
                },
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ erro: err.message });
        }
    }

    async deletarMae(req, res) {
        try {
            const { cpf } = req.params;
            if (!cpf) {
                return res.status(400).json({
                    message: "Informe o documento de identificação da mãe a ser deletada.",
                });
            }

            const maeDeletar = await encontrarUsuario(cpf);
            if (!maeDeletar) {
                return res.status(404).json({ message: "Mãe não encontrada." });
            }

            await serviceMae.deletarMae(maeDeletar.id);
