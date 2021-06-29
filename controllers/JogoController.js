const knex = require("../database/dbConfig")

module.exports = {
  
  async index(req, res) {
   

    const jogos = await knex
      .select("j.id", "j.nome", "g.nome as genero", "j.ano", "j.preco","j.descricao", "j.foto")
      .from("jogos as j")
      .leftJoin("generos as g", "j.genero_id", "g.id")
      .orderBy("j.id", "desc")
      res.status(200).json(jogos)
  },

  async store(req, res) {
    // desestruturação do objeto request
    const { nome, genero_id, descricao, ano, preco, foto } = req.body

    // se algum dos atributos não for passado
    if (!nome || !genero_id || !ano || !descricao || !preco || !foto) {
      res.status(400).json({
          erro: "Enviar nome, genero_id, ano, preco e foto do jogo",
        })
      return;
    }

    try {
      const novo = await knex("jogos").insert({nome, genero_id, descricao, ano, preco, foto})
      res.status(201).json({ id: novo[0]})
    } catch (error) {
      res.status(400).json({erro: error.message})
    }
  },
}