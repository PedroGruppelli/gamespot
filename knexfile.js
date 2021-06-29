// Update with your config settings.

module.exports = {

  development: {
  
    client:     'mysql2',
    connection: {
      host:     'localhost',
      database: 'revenda_gamespot',
      user:     'root',
      password: '33051300'
    },
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },

    seeds: {
      directory: 'database/seeds'

    }
  }

};
