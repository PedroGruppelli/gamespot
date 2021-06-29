
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('generos').del()
    .then(function () {
      // Inserts seed entries
      return knex('generos').insert([
        {nome: 'Ação'},
        {nome: 'Aventura'},
        {nome: 'Terror'},
        {nome: 'Multiplayer'},
        {nome: 'Co-op'},
        {nome: 'Casual'},
        {nome: 'RPG'},
        {nome: 'Moba'},
        {nome: 'Esporte'},
        {nome: 'Corrida'},
        {nome: 'Estratégia'},
        {nome: 'Indie'}
        
      ])
    })
}
