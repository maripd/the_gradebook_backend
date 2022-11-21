require('dotenv').config()
module.exports = {
  development: {
    database: 'gradebook_development',
    dialect: 'postgres'
  },
  test: {
    database: 'gradebook_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
