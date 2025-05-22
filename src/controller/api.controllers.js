import { logEvents } from "../middlewares/logger.midleware.js";
import maesoloService from "../services/maesolo.service.js";
import serviceMae from "../services/maesolo.service.js";
import { 
    criarUsuario,
    encontrarUsuario,
    atualizarUsuario,
    deletarUsuario
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
                !situacaoTrabalho) 
            {
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
                situacaoTrabalho
        } = req.body;

        if(!cpf) {
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

        const mae = await encontrarUsuario(cpf);
        
         if(!mae) {
            return res.status(404).json({ message: "Mae não encontrada."});
        }
        const usuarioAtualizaddo = await atualizarUsuario(
            mae.id, {
                nome,
                documentoIdentificacao: mae.documentoIdentificacao,
                telefone,
                email: mae.email
            }
        )
        
        const maeAtualizada = await serviceMae.atualizarMae(
            mae.id, {
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho
        });

        res.status(200).json({
            message: "Mãe atualizada!",
            maeAtualizada: {
                "nome": usuarioAtualizaddo.nome,
                "telefone": usuarioAtualizaddo.telefone,
                "documentoIdentificacao": usuarioAtualizaddo.documentoIdentificacao,
                "telefone": usuarioAtualizaddo.telefone,
                "email": usuarioAtualizaddo.email,
                "dataNascimento": maeAtualizada.data_nascimento,
                "escolaridade": maeAtualizada.escolaridade,
                "endereco": maeAtualizada.endereco,
                "rendaMensal": maeAtualizada.rendaMensal,
                "situacaoTrabalho": maeAtualizada.situacaoTrabalho
            }
        });
    }

    async deletarMae(req, res) {
        const { cpf } = req.params;
        if(!cpf) {
            return res.status(400).json({message: "Informe o documento de identificação da mãe a ser deletada!"});
        }
        
        const maeDeletar = await encontrarUsuario(cpf);

        if(!maeDeletar) {
            return res.status(400).json({message: "Informações inválidas!!!"})
        }

        const maeDeletada = await serviceMae.deletarMae(maeDeletar.id);
        const usuarioDeletado = await deletarUsuario(maeDeletar.id);
        return res.status(200).json({
            message: "Mãe excluida!"
        })
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
