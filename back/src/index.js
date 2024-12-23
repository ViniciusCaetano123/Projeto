import fastify from "fastify";

import dotenv from 'dotenv'
dotenv.config({  debug : true  })
import usuarioRouter from "./routes/usuario.js"
import connectionDb from "./db/connectionDb.js";



const app = fastify({logger:true})
connectionDb(app)

app.register(usuarioRouter)

export default app


