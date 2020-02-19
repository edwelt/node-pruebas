// Validacion (json schema) y hooks (ejecutar una operacion) antes de ejecutar el handler de request/response
const fastify = require('fastify')({ logger: true})

fastify.route({
   method: 'GET',
   url: '/',
   schema: {
      // el request debera tener un querystring un el parametro 'name'
      querystring: {
         name: { type: 'string'}
      },
      // la respuesta debe contener un objeto con una propiedad 'hello' de tipo string
      response: {
         200: {
            type: 'object',
            properties: {
               hello: { type: 'string'}
            }
         }
      }
   },
   preHandler: async (request, reply) => {
      //se ejecuta antes que el handler, ej para check auth
   },
   handler: async (request, reply) => {
      return { hello: 'world' }
   }
})

const start = async() => {
   try {
      await fastify.listen(3000, '0.0.0.0')
      fastify.log.info(`servidor escuchando en ${fastify.server.address().port}`)
   } catch (err) {
      fastify.log.error(err)
      process.exit(1)
   }
}
start()
