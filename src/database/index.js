const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Fornecedor = require('../models/Fornecedor');
const Produto = require('../models/Produto');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Fornecedor.init(connection);
Produto.init(connection);
Endereco.init(connection);


module.exports = connection;