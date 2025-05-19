import * as service from "../services/filho.service.js";

class FilhoController {
  async criar(req, res) {
    try {
      const { nome, dataNascimento, maeSoloId } = req.body;
      if (!nome || !dataNascimento || !maeSoloId) {
        return res.status(400).json({ mensagem: "Dados incompletos." });
      }
      const filho = await service.criarFilho({ nome, dataNascimento, maeSoloId });
      return res.status(201).json(filho);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  async listar(req, res) {
    try {
      const lista = await service.listarFilhos();
      return res.json(lista);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const filho = await service.buscarFilhoPorId(req.params.id);
      if (!filho) return res.status(404).json({ mensagem: "Filho não encontrado." });
      return res.json(filho);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const atualizado = await service.atualizarFilho(req.params.id, req.body);
      if (!atualizado) return res.status(404).json({ mensagem: "Filho não encontrado." });
      return res.json(atualizado);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await service.deletarFilho(req.params.id);
      return res.json({ mensagem: "Filho removido com sucesso." });
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

export default new FilhoController();
