const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'apidb'

});

//Acá se pone en marcha la conección
db.connect(function(err){

    if(err){
        console.log('Error en la conexión')
        return;
    }else{
        console.log('La conexión ha sido exitosa')
    }
});

module.exports = db;