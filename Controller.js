const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const { Sequelize, where} = require('sequelize');

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

app.post('/cadastrarCategoria', async (req, res) => {
    let existingCategoria = await categoria.findOne({
      where: { categoria: req.body.novaCategoria }
    });
  
    if (existingCategoria) {
      res.send(JSON.stringify('A categoria já existe!'));
    } else {
      let responseCreateCategoria = await categoria.create({
        id: null,
        categoria: req.body.novaCategoria,
        descricao: req.body.novaDescricao,
        quantModel: 0,
        url_img: req.body.novaImg,
      });
  
      res.send(JSON.stringify('Categoria Criada Com Sucesso!'));
    }
  });

  app.post('/cadastrarModelo', async (req, res) => {
    let existingModelo = await modelo.findOne({
      where: { modelo: req.body.novoModelo }
    });
  
    if (existingModelo === null) {

        let existingCat = await categoria.findOne({
            where: {categoria: req.body.novaCat}
        });
        
        
        if (existingCat === null){
            res.send(JSON.stringify('Categoria não encontrada'));
            
        } else {
            const idCat = existingCat.id;
            const nomeCat = existingCat.categoria;
            
                let responseCreateModelo = await modelo.create({
                    id: null,
                    modelo: req.body.novoModelo,
                    valor: req.body.novoValor,
                    idCategoria: idCat,
                    url_imgModel: req.body.novaImgmod,
                    nomeCategoria: nomeCat,
      });
      res.send(JSON.stringify('Modelo Criado Com Sucesso!'));
        
    } 
      
    } else {
        res.send(JSON.stringify('O modelo já existe!')); 
    }
    
  });

  app.get('/listarCategoria', async(req, res)=>{
    try {
        const categorias = await categoria.findAll({

        attributes: {
            include: [
              [
                Sequelize.literal(`(
                  SELECT COUNT(*)
                  FROM modelos
                  WHERE modelos.idCategoria = categoria.id
                )`),
                'quantModel',
                
              ],
              
            ],
          },
        });

        for (const cat of categorias){
            await categoria.update(
                { quantModel: cat.getDataValue('quantModel')},
                { where: { id: cat.id}}
            );
            
        }

        res.json(categorias);
    } catch (error) {
        console.error(error);
        res
        .status(500)
        .json({ error: 'Erro ao listar as categorias.' });
      }
  });;
  

  app.get('/listarModelo', async(req, res)=>{
    try {
        const modelos = await modelo.findAll();

        res.json(modelos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar as modelos.' });
      }
  });

  app.post('/editarModelo', async (req, res) => {
    try {
      let existingmodeloEditar = await modelo.findOne({
        where: { id: req.body.selectModel }
      });
      
      if (existingmodeloEditar === null) {
        res.send(JSON.stringify('Mpdelo Não Confere com o Listado Acima'));
      } else {
          existingmodeloEditar.modelo=req.body.novoModelo;
          existingmodeloEditar.valor=req.body.novoValor
          existingmodeloEditar.save();
          res.send(JSON.stringify('Modelo Editado Com Sucesso!'));

      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao editar o modelo' });
    }
  });

  app.delete('/excluirModelo', async (req, res) => {
    try {
      let existingModeloExcluir = await modelo.findOne({
        where: { modelo: req.body.selectModel }
      });
      
      if (existingModeloExcluir === null) {
        res.send(JSON.stringify('Modelo Não Confere com o Listado Acima'));
      } else {
        existingModeloExcluir.destroy();
        res.send(JSON.stringify('Modelo excluído com sucesso!'));
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir o modelo' });
    }
  });

  app.delete('/excluirCategoria', async (req, res) => {
    try {
      let existingcategoriaExcluir = await categoria.findOne({
        where: { categoria: req.body.selectCategoria }
      });
      
      if (existingcategoriaExcluir === null) {
        res.send(JSON.stringify('Categoria Não Confere com a Listada Acima'));
      } else {
        if (existingcategoriaExcluir.quantModel > 0 ){
          res.send(JSON.stringify('Exclusão Falhou! Categoria Possui Modelos Vinculados'));
        } else {
        existingcategoriaExcluir.destroy();
        res.send(JSON.stringify('Categoria excluída com sucesso!'));
      }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir a categoria!' });
    }
  });

  app.post('/editarCategoria', async (req, res) => {
    try {
      let existingcategoriaEditar = await categoria.findOne({
        where: { categoria: req.body.confirmeCategoria }
      });
      
      if (existingcategoriaEditar === null) {
        res.send(JSON.stringify('Categoria Não Confere com a Listada Acima'));
      } else {
          existingcategoriaEditar.categoria=req.body.novaCategoria;
          existingcategoriaEditar.descricao=req.body.novaDescricao;
          existingcategoriaEditar.save();
          res.send(JSON.stringify('Categoria Editada Com Sucesso!'));

      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir a categoria!' });
    }
  });



let port=process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});