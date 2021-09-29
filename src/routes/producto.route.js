const express = require('express'); 

const enrutador = express.Router();

const db = require('../database')

enrutador.get('/productos', (req,res) =>{

        //vamos a realizar una consulta a la base de datos.
        db.query('select * from Producto', (err,rows) =>{
            
            if(!err)
            {
            res.json(rows);

            }else{

            //Entregamos como respuesta los datos de la tabla en formato JSON
            res.json('Error al traer los datos de la tabla Producto');

            }

        })



});

enrutador.delete('/productos/:codigo', async (req,res) => {
    //Primer paso: capturar el código.
    var id = req.params.codigo;
    //Segundo paso: Capturar el body, los datos del cliente modificado
    const clienteModificado = req.body;
    await db.query('delete from Producto ? where id_producto = ?',[clienteModificado,id], (err,result) => {
        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('Se eliminó exitosamente')
        }
    })
});

enrutador.post('/productos', async (req,res) => {
    const unProducto = req.body;
    await db.query('insert into Producto set ?',[unProducto], (err,result) => {

        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('El producto se inserto exitosamente!')

        }
    })
    
});
//Implementación y creación de una ruta cliente -UPDATE
enrutador.put('/productos/:codigo', async (req,res) => {
    //Primer paso: capturar el código.
    var id = req.params.codigo;
    //Segundo paso: Capturar el body, los datos del cliente modificado
    const productoModificado = req.body;
    await db.query('update Producto set ? where id_producto = ?',[productoModificado,id], (err,result) => {
        if(err){
            return console.log('Algo ocurrió!')

        }else{
            res.json('Operación exitosa')
        }
    });

    
});
module.exports = enrutador;