const Funcionario = require('../models/Funcionario');

module.exports = {
    async index(req, res) {
        const funcionarios = await Funcionario.findAll();

        return res.json(funcionarios); //retorna todos os/Fornecedores
    },

    async show(req, res) {
        const { id } = req.params;
        const funcionario = await Funcionario.findByPk(id);
      
        if (!funcionario) {
          return res.status(400).json({ error: "Funcionário não existe" });
        }
      
        return res.json(funcionario);
      },

    async store(req, res) {
        const { nome, cpf, senha } = req.body;

        const funcionario = await Funcionario.create({ nome, cpf, senha })

        return res.json(funcionario);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, cpf, senha } = req.body;

        const funcionario = await Funcionario.findByPk(id);

        if (!funcionario) {
            return res.status(400).json({ error: 'Falha ao atualizar funcionário' });
        }

        const updatedFuncionario= await funcionario.update({ nome, cpf, senha });

        return res.json(updatedFuncionario);
    },

    async delete(req, res) {
        const { id } = req.params;

        const funcionario = await Funcionario.findByPk(id);

        if (!funcionario) {
            return res.status(400).json({ error: 'Funcionário não encontrado' });
        }

        await funcionario.destroy();
        return res.send();
    }
}
