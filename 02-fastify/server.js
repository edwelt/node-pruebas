// importa e instancia fastify
const fastify = require('fastify')({ logger: true})

// declara ruta
fastify.get('/', async (request, reply) => {
   return { hello: 'world' }
})

// ejecuta el servidor
const start = async () => {
   try {
      await fastify.listen(3000)
      fastify.log.info(`servidor corriendo en ${fastify.server.address().port}`)
   } catch (err) {
      fastify.log.error(err)
      process.exit(1)
   }
}
start()
