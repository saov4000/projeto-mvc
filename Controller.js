const Livro = require('./Livro')

const Controller = {

    //Mostra o formulário de cadastro (ou seja, abre uma tela html)
    create(req, res){
        res.render('livro/create')
    },
    
    //Salva no banco
    async cadastrar(req, res){
        await Livro.create(req.body)
        res.redirect('/livros')
    },

    //Listar todos os livros
    async listar(req,res){
        const livros = await Livro.findAll({raw:true})
        res.render('/livros/list',{livros}) 
    },

    //Abre o formulário de edição (abre a tela de edição)
    async update(req,res){
        const livro = await Livro.findByPk(req.params.id, {raw:true})
        res.render('/livros/edit',{livro})
    },

    //salva a edição
    async salvarEdicao(req, res){
        await Livro.update(req.body, {where:{id:req.body.id}})
        res.redirect('/livros')
    },

    //apaga o livro do banco
    async remover(req, res){
        await Livro.destroy({where:{id:req.body.id}})
        res.redirect('/livros')
    }
}

module.exports = Controller