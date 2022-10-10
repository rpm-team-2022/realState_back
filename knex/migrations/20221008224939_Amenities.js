exports.up = async function (knex) {
    await knex.schema.createTable("Amenities", (tbl) => {
        tbl.increments('ID')
        tbl.varchar("name").notNull().unique();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("Amenities");
};
