require('dotenv').config();


// module.exports = {
//   development: {
//     client: "mysql",
//     connection: {
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'password',
//         database: 'RealState_DB'
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: "./knex/migrations",
//     },
//     seeds: { directory: "./knex/seeds" },
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run("PRAGMA foreign_keys=ON", done);
//     },
//   },
// };


module.exports = {
  development: {
    client: "mysql",
    connection: {
        host: '34.69.137.232',
        port: process.env.SERVER_PORT,
        user: 'ramy',
        password: process.env.SERVER_PASSWORD,
        database: process.env.SERVER_DB
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys=ON", done);
    },
  },
};