const express = require('express'); 

const enrutador = express.Router();

const db = require('../database')

enrutador.get('/clientes', (req,res) =>{

        //vamos a realizar una consulta a la base de datos.
        db.query('select * from cliente', (err,rows) =>{
            
            if(!err)
            {
            res.json(rows);

            }else{

            //Entregamos como respuesta los datos de la tabla en formato JSON
            res.json('Error al traer los datos de la tabla cliente');

            }

        })



});

enrutador.delete('/clientes/:codigo', async (req,res) => {
    //Primer paso: capturar el código.
    var id = req.params.codigo;
    //Segundo paso: Capturar el body, los datos del cliente modificado
    const clienteModificado = req.body;
    await db.query('delete from cliente ? where id_cliente = ?',[clienteModificado,id], (err,result) => {
        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('Se eliminó un cliente')
        }
    })
});

enrutador.post('/clientes', async (req,res) => {
    const unCliente = req.body;
    await db.query('insert into cliente set ?',[unCliente], (err,result) => {

        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('El cliente se inserto exitosamente!')

        }
    })
    
});
//Implementación y creación de una ruta cliente -UPDATE
enrutador.put('/clientes/:codigo', async (req,res) => {
    //Primer paso: capturar el código.
    const id = req.params.codigo;
    //Segundo paso: Capturar el body, los datos del cliente modificado
    const clienteModificado = req.body;
    await db.query('update cliente set ? where id_cliente = ?',[clienteModificado,id], (err,result) => {
        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('Operación exitosa')
        }
    });

    
})
module.exports = enrutador;