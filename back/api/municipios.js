module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const municipio = { ...req.body }
        if(req.params.id) municipio.id = req.params.id

        try {
            isNumber(municipio.municipio, 'Campo municipio só aceita números')
            existsOrError(municipio.municipio, 'E-mail não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(municipio.id) {
            app.db('municipios')
                .update(municipio)
                .where({ id: municipio.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('municipios')
                .insert(municipio)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        // TIP: inserir paginação no get
        app.db('municipios')
            .then(municipio => res.json(municipio))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('municipios')
            .where({ id: req.params.id })
            .first()
            .then(municipio => res.json(municipio))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('municipios')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}