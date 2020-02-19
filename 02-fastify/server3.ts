import fastify from 'fastify'

// si no tuviera el esModuleInterop en el tsconfig deberia hacer esto:
// import * as fastify from 'fastify'


const server: fastify.FastifyInstance = fastify({})

const opts: fastify.RouteShorthandOptions = {
   schema: {
      response: {
         200: {
            type: 'object',
            properties: {
               pong: {
                  type: 'string'
               }
            }
         }
      }
   }
}

server.get('/ping', opts, async (request, reply) => {
   return { pong: 'anduvo' }
})

server.listen(3000, (err) => {
   if (err) {
      console.error(err)
      process.exit(1)
   }
   // @ts-ignore
   console.info(`servidor escuchando en ${server.server.address().port}`)
})
