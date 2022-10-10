exports.up = async function (knex) {
    await knex.schema.createTable("prop_amenit", (tbl) => {
        tbl
            .integer("propID")
            .unsigned()
            .notNull()
            .references("ID")
            .inTable("Property")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl
            .integer("amenitID")
            .unsigned()
            .notNull()
            .references("ID")
            .inTable("Amenities")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("prop_amenit");
};
