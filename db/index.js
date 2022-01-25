const Knex = require('knex');

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DB_NAME, PG_PORT } = process.env;

module.exports = function(config) {
    const knex = Knex({
        client: 'pg',
        connection: {
            host: PG_HOST,
            user: PG_USER,
            password: PG_PASSWORD,
            database: PG_DB_NAME,
            port: PG_PORT || 5432
        },
        migrations: {
            directory: './migrations'
        },
        searchPath: ['knex', 'public']
    });

    return {
        users: require('./users')(knex)
    };
};
