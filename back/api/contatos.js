module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const contato = { ...req.body }
        if(req.params.id) contato.id = req.params.id

        try {
            existsOrError(contato.nome, 'Nome não informado')
            existsOrError(contato.endereco, 'Endereço não informado')
            existsOrError(contato.bairro, 'Bairro não informado')
            existsOrError(contato.cidade, 'Cidade não informada')
            isNumber(contato.telefone, 'Campo telefone só aceita números')
            existsOrError(contato.telefone, 'E-mail não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(contato.id) {
            app.db('contatos')
                .update(contato)
                .where({ id: contato.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('contatos')
                .insert(contato)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('contatos')
            .then(contato => res.json(contato))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('contatos')
            .where({ id: req.params.id })
            .first()
            .then(contato => res.json(contato))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('contatos')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}