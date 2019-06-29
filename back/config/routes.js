
module.exports = app => {
    
    app.route('/contatos')
        .get(app.api.contatos.get)
        .post(app.api.contatos.save)

    app.route('/contato/:id')
        .put(app.api.contatos.save)
        .get(app.api.contatos.getById)
        .delete(app.api.contatos.remove)
    
        app.route('/categorias')
        .get(app.api.categorias.get)
        .post(app.api.categorias.save)

    app.route('/categorias/:id')
        .put(app.api.categorias.save)
        .get(app.api.categorias.getById)
        .delete(app.api.categorias.remove)
        
    app.route('/telefones')
        .get(app.api.telefones.get)
        .post(app.api.telefones.save)

    app.route('/telefones/:id')
        .put(app.api.telefones.save)
        .get(app.api.telefones.getById)
        .delete(app.api.telefones.remove)
    
    app.route('/ufs')
        .get(app.api.ufs.get)
        .post(app.api.ufs.save)

    app.route('/ufs/:id')
        .put(app.api.ufs.save)
        .get(app.api.ufs.getById)
        .delete(app.api.ufs.remove)

    app.route('/municipios')
        .get(app.api.municipios.get)
        .post(app.api.municipios.save)

    app.route('/municipios/:id')
        .put(app.api.municipios.save)
        .get(app.api.municipios.getById)
        .delete(app.api.municipios.remove)

    app.route('/pessoasjuridicas')
        .get(app.api.pessoasjuridicas.get)
        .post(app.api.pessoasjuridicas.save)

    app.route('/pessoasjuridicas/:id')
        .put(app.api.pessoasjuridicas.save)
        .get(app.api.pessoasjuridicas.getById)
        .delete(app.api.pessoasjuridicas.remove)
    }