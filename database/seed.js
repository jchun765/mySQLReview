const db = require('./index')

const seed = [
  {
    name: 'Burgers',
    price: 2,
    rating: 8,
  },
  {
    name: 'Tacos',
    price: 1,
    rating: 9,
  },
  {
    name: 'Pizza',
    price: 8,
    rating: 10,
  },
  {
    name: 'Sandwich',
    price: 5,
    rating: 4,
  },
  {
    name: 'Steak',
    price: 30,
    rating: 10
  }
];

function seedMe() {
  seed.forEach((food, index) => {
    db.query(`INSERT INTO FOOD (name, price, rating) VALUES ("${food.name}", ${food.price}, ${food.rating});`, (err, results) => {
      if(err) {
        console.log(`seed failed`)
      } else {
        console.log(`seed succeeded`)
      }
    })
  })
  db.end()
}

seedMe()
