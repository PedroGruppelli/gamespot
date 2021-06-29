
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogos').del()
    .then(function () {
      // Inserts seed entries
      return knex('jogos').insert([
        {nome: 'Death Stranding', genero_id:2, ano:2020, preco:200, foto:'https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg?h=270&resize=1&w=480' },
        {nome: 'Red Dead Redemption', genero_id:1, ano:2019, preco:250, foto:'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png' },
        {nome: 'Red Dead Redemption 2', genero_id:1, ano:2014, preco:100, foto:'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Red_Dead_Redemption_capa.png/270px-Red_Dead_Redemption_capa.png' },

      ]);
    });
};
