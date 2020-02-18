const fastify = require('fastify')({ logger: true})

fastify.route({
	method: 'GET',
	url: '/',
	schema: {
		querystring: {
			name: { type: 'string'}
		},
		response: {
			200: {
				type: 'object',
				properties: {
					hello: { type: 'string'}
				}
			}
		}
	},
	beforeHandler: async (request, reply) => {
		//check auth
	},
	handler: async (request, reply) => {
		return { hello: 'world' }
	}
})

const start = async() => {
	try {
		await fastify.listen(3000)
		fastify.log.info(`servidor escuchando en ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
