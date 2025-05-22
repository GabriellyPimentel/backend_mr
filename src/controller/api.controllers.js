import { logEvents } from "../middlewares/logger.midleware.js";
import maesoloService from "../services/maesolo.service.js";
import serviceMae from "../services/maesolo.service.js";
<<<<<<< HEAD
import { atualizarMae } from "../services/maesolo.service.js";
import { criarUsuario } from "./../services/criar.service.js";


class MaeSoloController {
    async criarMaeSolo(req, res) {
        try {
=======
import { 
    criarUsuario,
    encontrarUsuario,
    atualizarUsuario,
    deletarUsuario
} from "./../services/criar.service.js";



class MaeSoloController {
    async criarMaeSolo (req, res) {
        try { 
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
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

            if (!nome ||
                !documentoIdentificacao ||
                !ano ||
                !mes ||
                !dia ||
                !escolaridade ||
                !endereco ||
                !rendaMensal ||
<<<<<<< HEAD
                !situacaoTrabalho) {
                return res.status(400).json({
                    mensagem: "Informe todos os dados obrigatórios."
                })
=======
                !situacaoTrabalho) 
            {
                return res.status(400).json({
                    mensagem: "Informe todos os dados"
                })
            }
            
            const existeMae = await encontrarUsuario(documentoIdentificacao);

            if(existeMae) {
                return res.status(404).json({message: "Insira dados validos"});
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
            }

            const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
            const novoUsuario = await criarUsuario({ nome, documentoIdentificacao, telefone, email });
            const id = novoUsuario.id;

            const novaMae = await serviceMae.criarMae({
                id,
                dataNascimento,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho
            });

<<<<<<< HEAD
            return res.status(201).json({
                mensagem: "Mãe criada com sucesso!",
                mae: novaMae
            });
        } catch (err) {
            return res.status(500).json({ erro: err.message })
=======
            return res.json ({
                mensagem: "Mãe cadastrada"
            })
        } catch(err) {
            console.log(err.message)
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
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

<<<<<<< HEAD
    async atualizarMae(req, res) {
        const { id } = req.params;
=======
    async atualizarMae(req,res) {
        const { cpf } = req.params;

>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
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

<<<<<<< HEAD
        if (!nome ||
=======
        if(!cpf) {
            return res.status(404).json({message: "Informe o documento de identificacao."});
        }

        if( !nome ||
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
            !telefone ||
            !email ||
            !escolaridade ||
            !endereco ||
            !rendaMensal ||
            !situacaoTrabalho) {
            return res.status(400).json({
<<<<<<< HEAD
                mensagem: "Informe todos os dados obrigatórios para atualização"
            });
        }

        const atualizado = await serviceMae.atualizarMae(id, {
            id,
            nome,
            telefone,
            email,
            escolaridade,
            endereco,
            rendaMensal,
            situacaoTrabalho
        });

        if (!atualizado) {
            return res.status(404).json({ message: "Mae não encontrada." });
        }

        return res.status(200).json({ message: "Mãe atualizada com sucesso." });
    } catch(err) {
        return res.status(500).json({ erro: err.message });
    }
   
 
=======
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
>>>>>>> d1cc74f310aae5c86e2559c62c7ff96439ab6fdc
}



export default new MaeSoloController();
