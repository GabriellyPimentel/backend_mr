import encaminhamentoService from "../services/encaminhamento.service.js";

//Controle do Encaminhamento
class ControllerEncaminhamento {

    //Creat Encaminhamento
    async criarEncaminhamento(req, res) {
        
        //Corpo da requisição
        const {
            idMae,
            idProfissional,
            data,
            status,
            tipoServico
        } = req.body;

        //Verificar todas informações
        if(!idMae || !idProfissional || !data || !status || !tipoServico) {
                return res.status(404).json({
                    message: "Informe todos os dados obrigatirios"
                });
        }

        //Novo Encaminhamento
        const novoEncaminhamento = await encaminhamentoService.criarEncaminhamento({
            idMae,
            idProfissional,
            data,
            status,
            tipoServico
        });

        //Encaminhamento Criado
        return res.status(200).json({
            message: "Encaminhamento criado",
            novoEncaminhamento
        });
    }

    //Read
    async exibirEncaminhamento(req, res) {
        
<<<<<<< HEAD
        const todosEncaminhamentos = await encaminhamentoService.getAllEncaminhamento();  /// acrescimo do await 
=======
        const todosEncaminhamentos = encaminhamentoService.getAllEncaminhamento();
>>>>>>> ec47c0d6ad2091ad4cb070b098e456a69a203f43

        return res.status(200).json({
            todosEncaminhamentos
        });

    }

    //Update
    async atualizarEncaminhamento(req, res) {

        const {
            idMae,
            idProfissional,
            data,
            status,
            tipoServico
        } = req.body;

        const {
            id
        } = req.params;

        const encaminhamentoAtualizado = await encaminhamentoService.atualizarEncaminhamento(id, {
            idMae,
            idProfissional,
            data,
            status,
            tipoServico
        });

        return res.status(200).json({
            message: "Encaminhamento atualizado",
            encaminhamentoAtualizado
        });

    }

    //Delet
    async deletarEncaminhamento(req, res) {

        const {
            id
        } = req.params;

        const deletarEncaminhamento = await encaminhamentoService.deletarEncaminhamento(id);

        return res.status(200).json({
            message: "Encaminhamento deletado"
        });

    }

}

export default new ControllerEncaminhamento();