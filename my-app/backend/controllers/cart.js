const pool = require('../db')

module.exports ={

  postCart: (req, res) => {
    const {description, calories, protein, fat, carbohydrate, sugar} = req.body;
    console.log('DESCRIPTION', description, 'req', req.body)
    pool.query(`INSERT INTO cart (description, calories, protein, fat, carbohydrate, sugar) VALUES ($1, $2, $3, $4, $5, $6);`,
    [description, calories, protein, fat, carbohydrate, sugar])
    .then(result => res.sendStatus(201).end())
    .catch(err => console.error(err))


  },

  getCart: (req, res) => {
    pool.query('SELECT * from cart')
    .then(response => res.send(response.rows))
    .catch(err => console.error(err))
  }
}