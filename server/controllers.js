
module.exports = {
  get: (req, res) => {
    console.log(req.body)
    res.send('Hello World')
  },

  post: (req, res) => {
    res.send(`Hi, sending post request`)
  }
}