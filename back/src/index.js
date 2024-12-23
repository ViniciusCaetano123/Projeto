import fastify from "fastify";

import dotenv from 'dotenv'

import usuarioRouter from "./routes/usuario.js"
import connectionDb from "./db/connectionDb.js";

dotenv.config()

const app = fastify({logger:true})


app.register(usuarioRouter)
app.register(connectionDb)


export default app


