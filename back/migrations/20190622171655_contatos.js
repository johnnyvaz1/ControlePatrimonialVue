
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contatos', table => {
        table.increments('id').primary()
        table.string('nome')
        table.string('endereco')
        table.string('bairro')
        table.string('cidade')
        table.string('telefone')
        table.string('email')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contatos')
};
