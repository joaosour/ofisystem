const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let user=models.User;
let categoria=models.Categoria;
let modelo=models.Modelo;

app.post('/login', async(req, res)=>{
    let response=await user.findOne({
        where: {name:req.body.name, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/verifyPass', async(req, res)=> {
    let response=await user.findOne({
        where: {id:req.body.id, password: req.body.senhaAntiga}
    });
    if(response === null){
        res.send(JSON.stringify('Senha antiga não confere!'));
    }else{
        if(req.body.novaSenha === req.body.confNovaSenha){
            response.password=req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
            
        }else{
            res.send(JSON.stringify ('Nova Senha e Confirmação não conferem!'));
        }
        
    }
});

app.post('/verifyPassRegister', async(req, res)=> {


    let responseRegister=await user.findOne({
        where: {id:req.body.id, name:req.body.nameUserAdmin, password: req.body.senhaAtual}
        
    });
    if(responseRegister === null){
        res.send(JSON.stringify('Senha/Usuario do administrador não conferem!'));
    
    }else{
                   
            let responseCreate=await user.findOne({
                where: {id: req.body.id, name:req.body.novoUsuario, password: req.body.novaSenha}
            });
            if (responseCreate === null){
                // Verificar se usuario já existe
                let existingUser = await user.findOne({
                    where: {name: req.body.novoUsuario}
                });
                if (existingUser){
                    res.send(JSON.stringify('O usuário já existe!'))
                } else {
                    // Criar um novo usuário
                    let newUser = await user.create({
                        id: null,
                        name: req.body.novoUsuario,
                        password: req.body.novaSenha,
                    }); 
                    
                        res.send(JSON.stringify('Usuario Criado Com Sucesso!'));
                    
                }
            } else {
                res.send(JSON.stringify('Senha/Usuario do administrador conferem!'));
            }
                 
        
    }
});

let port=process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});