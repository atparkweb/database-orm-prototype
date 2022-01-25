# Sprint: Database ORM Refactor

## Steps:
1. Install dependencies `npm install`
1. Write Express server setup code in `src/server.js`
1. **Checkpoint**: Run express server: `node ./src/index.js`
1. Add a start script to `package.json` to start server
1. Add `dotenv` to `src/index.js`
1. Create `.env` file
1. Add `PORT` to `.env` file and use it when setting port in `src/index.js` 
1. **Checkpoint**: Run express server to verify that `dotenv` is doing its job: `npm start`
1. Add DB params to `.env`
   - DB_HOST
   - DB_USER
   - DB_PASSWORD
   - DB_NAME
1. Configure Knex/DB connection in `src/knex.js` file. Use DB environment variables
1. Create `/migrations` directory in the project root

## Gotchas
- `.env` file must be at same directory where the node process starts (i.e. root)

## Common Errors/Blockers:
- On migration:
  - "error: database ... does not exist"
    - Needs to create the database through PSQL
- On server start with knex migration:
  - "Error: ENOENT: no such file or directory '.../migrations'"
    - Need to create a `migrations` directory
