const { server, port } = require('./src/server')

server.listen(port, () => {
  console.log(`Express listening por 8080`)
})
