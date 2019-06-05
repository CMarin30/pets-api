const mongoose = require('mongoose')

const conectionString = 'mongodb+srv://pets-api:contraseñapets@marindb-4bmht.mongodb.net/test?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(conectionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve()
  })
})

module.exports = {
  connect
}
