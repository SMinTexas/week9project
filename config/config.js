module.exports = {
    "development": {
        "username": "xbjrboem",
        "password": "HRbwpqzSsLa7rv7wbaE9_1ZEsQXwSfIo",
        "database": "xbjrboem",
        "host": "hansken.db.elephantsql.com",
        "dialect": "postgres"

    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOSTNAME,
        "dialect": "postgres"

    }
}