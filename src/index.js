require('dotenv').config();

const db = require('./knex');
const app = require('./app');

const port = process.env.PORT || 9000;

(async () => {
    try {
        console.log('Running migrations...');
        await db.migrate.latest();

        console.log('Starting server...');
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (err) {
        console.error('Error starting app', err);
        process.exit(-1);
    }
})();
