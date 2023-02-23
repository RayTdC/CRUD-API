const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
    static init(sequelize) {
        return super.init({
            empresa: DataTypes.STRING,
            oferta: DataTypes.STRING,
            valor: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'fornecedores',
        });
    }
}

module.exports = Fornecedor;