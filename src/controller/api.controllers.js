import { logEvents } from "../middlewares/logger.midleware.js";
import {
    criar,
    criarMae
} from "../services/maesolo.service.js"


class MaeSoloController {
    criarMaeSolo (req, res) {
        try{
             const {
                documentoIdentificacao,
                telefone,
                email,
                dataNascimento,
                escolaridade,
                endereco,
                rendaMensal,
                situacaoTrabalho
        } = req.body;

        if( !nome ||
            !documentoIdentificacao ||
            !dataNascimento ||
            !escolaridade ||
            !endereco ||
            !rendaMensal ||
            !situacaoTrabalho) {
                return res.status(400).json({
                    mensagem: "Informe todos os dados"
                })
        }

        const novoUsuario = criar(nome, documentoIdentificacao,telefone, email);
        
        const novaMae = criarMae(novoUsuario.id,   
            dataNascimento,
            escolaridade,
            endereco,
            rendaMensal,
            situacaoTrabalho);
        return res.json ({mensagem: "Cadastrado"})
        } catch (err) {
        console.log(err);
        return res.json({erro: err.message})
    }

    } 
}

export default new MaeSoloController();