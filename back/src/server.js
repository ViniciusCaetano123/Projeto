import app from './index.js'

const port =  process.env.PORT || 3333
/*
    Os exemplos acima, e os exemplos subsequentes neste documento, têm como padrão escutar somente na 127.0.0.1interface localhost. 
    Para escutar em todas as interfaces IPv4 disponíveis, o exemplo deve ser modificado para escutar 0.0.0.0assim
*/
const start = async () => {
    try {
      await app.listen({ port: port, host: '0.0.0.0' })
      
    } catch (err) {
        app.log.error(err)
      process.exit(1)
    }
  }
  start()