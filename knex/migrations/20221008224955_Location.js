exports.up = async function (knex) {
    await knex.schema.createTable("Location", (tbl) => {
        tbl.increments('ID')
        tbl.text("area")
        tbl.text("city")
        tbl.text("country")
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("Location");
};
