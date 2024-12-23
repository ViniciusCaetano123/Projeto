
import mysql from 'mysql2/promise'
  
export default (fastify) => {    
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',  
        database: process.env.DB_DATABASE || '',
        connectionLimit :10
    }; 
    const dbConnection = mysql.createPool(config) 
    fastify.decorate('dbConnection',null)
    fastify.addHook('preHandler',function (req, reply, done) {
        console.log('vindo pre handler')
        req.dbConnection = dbConnection
        done();
    })
}



