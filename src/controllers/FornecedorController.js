const Fornecedor = require('../models/Fornecedor');

module.exports = {
    async index(req, res) {
        const Fornecedores = await Fornecedor.findAll();

        return res.json(Fornecedores); //retorna todos os Fornecedores
    },

    async show(req, res) {
        const { id } = req.params;
        const fornecedor = await Fornecedor.findByPk(id);
      
        if (!fornecedor) {
          return res.status(400).json({ error: "Fornecedor não existe" });
        }
      
        return res.json(fornecedor);
      },

    async store(req, res) {
        const { empresa, oferta, valor } = req.body;

        const fornecedor = await Fornecedor.create({ empresa, oferta, valor })

        return res.json(fornecedor);
    },

    async update(req, res) {
        const { id } = req.params;
        const { empresa, oferta, valor } = req.body;

        const fornecedor = await Fornecedor.findByPk(id);

        if (!fornecedor) {
            return res.status(400).json({ error: 'Falha ao atualizar fornecedor' });
        }

        const updatedFornecedor = await fornecedor.update({ empresa, oferta, valor });

        return res.json(updatedFornecedor);
    },

    async delete(req, res) {
        const { id } = req.params;

        const fornecedor = await Fornecedor.findByPk(id);

        if (!fornecedor) {
            return res.status(400).json({ error: 'Fornecedor não encontrado' });
        }

        await fornecedor.destroy();
        return res.send();
    }
}
