const db = require('./index')


const dbHelpers = {
  get: (callback) => {
    let queryStr = `SELECT * FROM Food`
    db.query(queryStr, (err, result) => {
      if(err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  post: (req, callback) => {
    const {name, price, rating} = req.body
    let queryStr = `INSERT INTO Food (name, price, rating) VALUES ("${name}", ${price}, ${rating})`
    db.query(queryStr, (err, result) => {
      if(err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}



module.exports = dbHelpers;