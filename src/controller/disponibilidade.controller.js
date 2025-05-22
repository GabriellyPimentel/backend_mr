import { format } from "date-fns";
import { 
    encontrarUsuarioId
 } from "../services/criar.service.js";
import disponibilidadeService from "../services/disponibilidade.service.js";

class DisponibilidadeController {
    async criarDisponibilidade(req, res) {
        const {
            idProfissional,
            data,
            horario
        }   = req.body;

        if(!idProfissional || !data || !horario) {
            return res.status(400).json({message: "Informe todos os dados!"});
        }

        const existeUsuario = await encontrarUsuarioId(idProfissional);


        if(!existeUsuario) {
            console.log(existeUsuario);
            return res.status(404).json({erro: "Usuário inválido!"});
        }

        const disponibilidade = await disponibilidadeService.criardisponibilidade({
            idProfissional,
            horario,
            data
        });

        return res.status(201).json({
            message: "Disponibilidade criada",
            disponibilidade
        });
    };

    async editarDisponibilidade(req, res) {
        const {
            data, 
            horario
        } = req.body;
        
        const { id } = req.params;

        if(!data || !horario) {
            return res.status(400).json({message: "Informe todos os dados!"});
        }
        const existeDisponibilidade = await disponibilidadeService.buscarPorId(id);

        if(!existeDisponibilidade) {
            return res.status(404).json({message: "Informe disponibilidade válida"});
        }

        const disponibilidadeAtualizada = await disponibilidadeService.atualizardisponibilidade(id, {data, horario});

        return res.status(200).json({
            message: "Disponibilidade atualizada",
            disponibilidadeAtualizada
        });
    };

    async pegarTodasDisponibilidade(req, res) {
        const todasDisponibilidade = await disponibilidadeService.listardisponibilidade();

        if(!todasDisponibilidade) {
            return res.status(400).json({message: "sem disponibilidades no momento!"});
        }

        return res.status(200).json({data: todasDisponibilidade});
    }
    
    async pegarDisponibilidade(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({message: "Informe a disponibilidade"});
        }

        const disponibilidade = disponibilidadeService.buscarPorId(id);
        if(!disponibilidade) {
            return res.status(404).json({message: "disponibilidade não encontrada!"});
        }

        return res.status(200).json(disponibilidade);
    }

    async disponibilidadePofissional(req, res) {
        const { idProfissional } = req.params;
    
        if(!idProfissional) {
            return res.status(400).json({message: "Informe o profissional!"});
        }

        const disponibilidades = await disponibilidadeService.listarDisponibilidadeProfissional(idProfissional);

        return res.status(200).json({disponibilidades});
    }

    async deletarDisponibilidade(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({message: "Informe a disponibilidade para deletar1"});
        }

        await disponibilidadeService.deletardisponibilidade(id);

        return res.status(200).json({message:"Disponibilidade deletada!"});
    }
}

export default new DisponibilidadeController();