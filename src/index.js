const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//obtengo tota la funcionalidad de express
const server = express()

//Espicificamos el formato de datos que va a manipular nuestro servidor, es decir nuestra api.
server.use(express.json())

//Nos va a permitir comunicar el cliente con el servidro y viceversa
server.use(cors())

//Nos va a notificar en la consola cada vez que se haga petición HTTP(get, put, delete, post)
server.use(morgan())

//seteamos  puerto disponible en el sistema
server.set('port', process.env.PORT || 3000)

//ponemos las rutas en funcionamiento

server.use(require('./routes/cliente.route'))
server.use(require('./routes/producto.route'))

//Le damos arranque a nuestro servidor
server.listen(server.get('port'))

//Mostramos por pantalla el puerto en el que corre el servidor
console.log(`Servidor corriendo en el puerto ${server.get('port')}`)