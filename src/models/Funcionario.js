const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        return super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize,
        });
    }
}

module.exports = Funcionario;