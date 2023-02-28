const express = require('express');
const routes = require ('./routes')

require ('./database');

const app = express();
const port = 3000

app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log(`Server rodando em: http://localhost:${port}`)
})

/* 
* EXTENSÕES:
* Thunder Client > pra usar e testar o CRUD
* SQLITE > App pra ver as tabelas
*/
