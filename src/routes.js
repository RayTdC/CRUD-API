const express = require ('express');
const UsuarioController = require('./controllers/UsuarioController');
const FornecedorController = require('./controllers/FornecedorController');
const EnderecoController = require('./controllers/EnderecoController');
const ProdutoController = require('./controllers/ProdutoController');
const FuncionarioController = require('./controllers/FuncionarioController');




const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

//rotas dos fornecedores ↓

routes.get('/fornecedores', FornecedorController.index);
routes.get('/fornecedores/:id', FornecedorController.show);
routes.post('/fornecedores', FornecedorController.store);
routes.put('/fornecedores/:id', FornecedorController.update);
routes.delete('/fornecedores/:id', FornecedorController.delete);

//rotas dos produtos ↓

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

//rotas dos endereços ↓

routes.get('/enderecos', EnderecoController.index);
routes.post('/enderecos', EnderecoController.store);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.delete);

//rotas dos funcionários ↓

routes.get('/funcionarios', FuncionarioController.index);
routes.get('/funcionarios/:id', FuncionarioController.show);
routes.post('/funcionarios', FuncionarioController.store);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

module.exports = routes;