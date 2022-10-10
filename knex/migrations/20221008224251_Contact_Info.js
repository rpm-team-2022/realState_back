exports.up = async function (knex) {
    await knex.schema.createTable("Contact_Info", (tbl) => {
        tbl.increments('ID')
        tbl.text("Name")
        tbl.text("phone")
        tbl.text("altPhone")
        tbl.text("email")
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("Contact_Info");
};
