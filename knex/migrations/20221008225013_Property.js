exports.up = async function (knex) {
    await knex.schema.createTable("Property", (tbl) => {
        tbl.increments('ID')
        tbl.text("type").notNull();
        tbl.integer("size")
        tbl.integer("beds")
        tbl.integer("bath")
        tbl.integer("price")
        tbl
            .integer("locationID")
            .unsigned()
            .notNull()
            .references("ID")
            .inTable("Location")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("Property");
};
