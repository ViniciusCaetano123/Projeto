
import {cadastrar} from '../controllers/usuario.js'
export default function(fastify, options, done){
    const url =  '/usuario'
    fastify.route({
        method:'POST',
        url:`${url}/cadastrar`,
        schema: {
            body:{
                type:'object',
                properties:{
                    nome:{type:'string'},
                    email:{type:'string'},
                    senha:{type:'string'}
                },
                required: ['nome', 'email', 'senha'],
                additionalProperties: false
            },
            response:{
                200:{
                    type: 'object',
                    mensagem: { type: 'string' },
                    data: {}
                }
            }
        },
        handler: cadastrar
    })


    done()
}