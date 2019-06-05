const { server, port } = require('./src/server')

const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('db connect')
    server.listen(port, () => {
      console.log(`server listening port ${port}`)
    })
  })

  .catch(error => {
    console.error('Error: ', error)
  })
