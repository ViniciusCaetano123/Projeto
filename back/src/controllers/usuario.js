import bcrypt from 'bcrypt';
import UsuarioDB  from '../db/usuario.js'
export async function cadastrar (req,res){
   
    const {nome,email,senha} = req.body
    if (!nome || !email || !senha) {
        return res.status(400).send({ mensagem: 'Todos os campos são obrigatórios.' });
    }
    try {
        const dbConnection  = req.dbConnection   
        const usuarioDb = new UsuarioDB(dbConnection)
        const usuario = await usuarioDb.getUser(email)
        
        const existUsuario = usuario.length
        
        if(existUsuario){
            return res.status(400).send({ mensagem: 'Usuário já existe' });
        }
        const hashedPassword = await bcrypt.hash(senha, 16);

        const resultInsert = await usuarioDb.inserir({nome,email,"senha":hashedPassword})

        
        console.log(resultInsert)
        return res.status(200).res({mensagem:'Usuário cadastro com sucesso'})
    }catch (error) {
        console.log()
        return res.status(500).send({ mensagem: 'Erro ao cadastrar o usuário.' });
    }
  
}


 