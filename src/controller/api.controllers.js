import { logEvents } from "../middlewares/logger.midleware.js";
import maesoloService from "../services/maesolo.service.js";
import serviceMae from "../services/maesolo.service.js";

import { 
    criarUsuario,
    encontrarUsuario
} from "./../services/criar.service.js";


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

        const existeMae = await encontrarUsuario(documentoIdentificacao);

        if(existeMae) {
            return res.status(404).json({message: "Insira dados validos"});
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
            situacaoTrabalho
        });

        return res.json ({
            mensagem: "Mãe cadastrada"
        })
        } catch(err) {
            console.log(err.message)
        }
    }

    async getAllMaes(req, res) {
        const maes = await serviceMae.getAllMaes();
        return res.status(200).json({
            maes
        });
    }

    async atualizarMae(req,res) {
        const { documentoIdentificacao } = req.params;
        const {
            nome,
            telefone,
            email,
            escolaridade,
            endereco,
            rendaMensal,
            situacaoTrabalho
        } = req.body;

        if(!identificacao) {
            return res.status(404).json({message: "Informe o documento de identificacao."});
        }

        if( !nome ||
            !telefone ||
            !email ||
            !escolaridade ||
            !endereco ||
            !rendaMensal ||
            !situacaoTrabalho) {
            return res.status(400).json({
                mensagem: "Informe todos os dados"
            });
        }

        const mae = await encontrarUsuario(documentoIdentificacao);
        
         if(!mae) {
            return res.status(404).json({ message: "Mae não encontrada."});
        }

        const atualizado = await atualizarMae(
            mae.id, {
                nome,
                telefone,
                email,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho
        });

        res.status(200).json({
            message: "Mãe atualizada!",
            atualizado
        });
    }

    async deletarMae(req, res) {
        const { documentoIdentificacao } = req.params;
        if(!documentoIdentificacao) {
            return res.status(400).json({message: "Informe o documento de identificação da mãe a ser deletada!"});
        }

        const maeDeletar = encontrarUsuario(documentoIdentificacao);

        if(!maeDeletar) {
            return res.status(400).json({message: "Informações inválidas"})
        }

        serviceMae.deletarMae(maeDeletar.id);
        return res.status(200).json({message: "Mãe excluida!"})
    }

    async encontrarMaeCpf(req, res) {
        const { documentoIdentificacao } = req.params;

        if(!documentoIdentificacao) {
            return res.status(400).json({message: "Informe o documento de identificação da mãe a ser deletada!"});
        }

        const mae = maesoloService.encontrarMaeCpf(documentoIdentificacao);

        if(!mae) {
            return res.status(400).json({message: "Informações inválidas"});
        }

        return res.status(200).json({
            message: "Mãe atualizada!",
            mae: mae
        });
    }
}

export default new MaeSoloController();