const { Model, DataTypes } = require('sequelize');

class Funcionario {
    constructor(id, nome, CPF, endereco) {
        this.id = id
        this.nome = nome
        this.CPF = CPF
        this.endereco = endereco
    }
}
module.exports = Funcionario