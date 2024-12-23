
import mysql from 'mysql2'
const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    connectionLimit :10
};
const dbConnection = mysql.createPool(config)

export default function(fastify, options, done){
    dbConnection.getConnection((err,connection)=>{
        fastify.decorate('db',connection)
        done()
    })    
}



