exports.up = async function (knex) {
    await knex.schema.createTable("PropImage", (tbl) => {
        tbl.increments('ID')
        tbl.text("URL").notNull();
        tbl
            .integer("propID")
            .unsigned()
            .notNull()
            .references("ID")
            .inTable("Property")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("PropImage");
};
