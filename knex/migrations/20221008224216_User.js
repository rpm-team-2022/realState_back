exports.up = async function (knex) {
    await knex.schema.createTable("User", (tbl) => {
        tbl.increments('ID')
        tbl.text("firstName").notNull();
        tbl.text("lastName").notNull();
        tbl.varchar("email").notNull().unique();
        tbl.text("password").notNull();
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("User");
};
