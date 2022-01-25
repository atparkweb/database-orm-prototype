const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: PG_HOST,
        user: PG_USER,
        password: PG_PASSWORD,
        database: PG_DB_NAME,
        port: PG_PORT || 5432
    },
    searchPath: ['knex', 'public'],
});

module.exports = db;
