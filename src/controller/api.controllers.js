import { logEvents } from "../middlewares/logger.midleware.js";
import serviceMae from "../services/maesolo.service.js";

import { criarUsuario } from "./../services/criar.service.js";
import serviceProfissionalApoio from "../services/profissionalapoio.service.js";


class MaeSoloController {
    async criarMaeSolo (req, res) {
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
                    situacaoTrabalho
            } = req.body;

            if( !nome ||
                !documentoIdentificacao ||
                !ano ||
                !mes ||
                !dia ||
                !escolaridade ||
                !endereco ||
                !rendaMensal ||
                !situacaoTrabalho) {
                    return res.status(400).json({
                        mensagem: "Informe todos os dados"
                    })
            }

            const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
            const novoUsuario = await criarUsuario({nome, documentoIdentificacao, telefone, email});
            const id = novoUsuario.id;
            
            const novaMae = await serviceMae.criarMae({
                id,  
                dataNascimento,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho});
            return res.json ({
                mensagem: "Cadastrado",
                mae: novaMae
            })
            } catch (err) {
            return res.json({erro: err.message})
        }
    }

    async getAllMaes(req, res) {
        const maes = await serviceMae.getAllMaes();
        return res.status(200).json({
            maes
        });
    }

    async atualizarMae(req,res) {
        const { id } = req.params;
        const {
            nome,
            telefone,
            email,
            escolaridade,
            endereco,
            rendaMensal,
            situacaoTrabalho
        } = req.body;

        if( !nome ||
            !telefone ||
            !email ||
            !escolaridade ||
            !endereco ||
            !rendaMensal ||
            !situacaoTrabalho) {
            return res.status(400).json({
                mensagem: "Informe todos os dados"
            })
        }

        const atualizado = await atualizarMae(
            id, {
                nome,
                telefone,
                email,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho
        });
        if(!atualizado) {
            return res.status(404).json({ message: "Mae não encontrada."});
        }
        res.status(200).json({message: "Mãe atualizada!"});
    }


}

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
}

export default new MaeSoloController();
