const pool = require('../db')

module.exports ={

  postCart: (req, res) => {
    const {description, calories, protein, fat, carbohydrate, sugar} = req.body;
    pool.query(`INSERT INTO cart (description, calories, protein, fat, carboyhydrate, sugar) VALUES (${description}, ${calories}, ${protein}, ${fat}, ${carbohydrate}, ${sugar})`)
    .then(result => res.sendStatus(201).end())
    .catch(err => console.error(err))


  }
}