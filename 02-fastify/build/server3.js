"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = fastify_1.default({});
const opts = {
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
};
server.get('/ping', opts, async (request, reply) => {
    return { pong: 'anduvo' };
});
server.listen(3000, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.info(`servidor escuchando en ${server.server.address().port}`);
});
//# sourceMappingURL=server3.js.map