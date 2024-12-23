function UsuarioDao(connection){
    this.connection = connection
}

UsuarioDao.prototype.getUser =  async function(email){
    try{
        const [rows] = await this.connection.query('SELECT * FROM usuarios WHERE email =  ?',[email])
        return rows
    }catch(error){
        throw error
    }
}

UsuarioDao.prototype.inserir = async function(usuario){
    try{
        const [result] = await this.connection.query('INSERT INTO usuarios SET ?',usuario)        
        return result.insertId
    }catch(error){
        throw error
    }
    
}


export default UsuarioDao