const User = require('../models/Funcionario');

class FuncionarioController {

    static rotas(app) {
        app.get('/Funcionario', FuncionarioController.listar)
        app.get('/Funcionario/id/:id', FuncionarioController.buscarPorID)
        app.post('/Funcionario', FuncionarioController.inserir)
        app.put('/Funcionario/id/:id', FuncionarioController.atualizaFuncionario)
        app.delete('/Funcionario/id/:id', FuncionarioController.deletar)

    }

    //ROTA GET
    static listar(req, res) {

        res.status(200).send(bdFuncionario)
    }

    //ROTA GET de BUSCAR
    static buscarPorID(req, res) {
        const funcionario = bdFuncionario.find(funcionario => funcionario.id === req.params.id)

        //se for vazio(se não funcionario)  
        if (!funcionario) {
            res.status(404).send("Funcionario não encontrado")
            return
        }

        res.status(200).send(funcionario)
    }

    //ROTA POST
    static inserir(req, res) {
        const funcionario = new Funcionario(req.body.id, req.body.nome, req.body.CPF, req.body.endereco )
        bdFuncionario.push(funcionario)
        res.status(201).send(bdFuncionario)
        console.log(req.body)
    }


    //ROTA PUT

    static atualizaFuncionario(req, res) {
        const funcionario = bdFuncionario.find(funcionario => funcionario.id === req.params.id)

        if (!funcionario) {
            res.status(404).send('Funcionario não encontrado')
            // res.status(404).send('Funcionario não encontrado')
            return 
        }

        cliente.id = req.body.id
        cliente.nome = req.body.nome
        cliente.CPF = req.body.CPF
        cliente.endereco = req.body.endereco
        
        
        // res.status(200).send(bdCliente)
        res.status(201).send(bdFuncionario)
    }



    // ROTA DELETE
    static deletar(req, res) {
        const funcionario = bdFuncionario.find(funcionario => funcionario.id === req.params.id)
        
        if (!funcionario) {
            res.status(204).send("Funcionario não encontrado")
            return
        }

        const index = bdFuncionario.indexOf(funcionario);
        bdFuncionario.splice(index, 1);
        res.status(200).send({
            "Mensagem": `O Funcionario do id ${funcionario.id} foi deletado!`
        });
    }


}


module.exports = funcionarioController



