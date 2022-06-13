let mysql = require("mysql2");
let connection = mysql.createConnection(
{
    host: "localhost",
    user:"root",
    password:"*****",
    database:"museo"
    
});
connection.connect(function(error){
    if(error){
        console.log(error);
    
    }else{
        console.log("conexión correcta");
    }
});

// let sql="SELECT propietarios.nombre,propietarios.apellido,propietarios.email, entrada AS fecha_expiracion,localizacion, n.nombre FROM propietarios INNER JOIN pieza n ON (n.id_propietarios = propietarios.id_propietarios) INNER JOIN prestamo ON (n.id_prestamo = prestamo.id_prestamo) GROUP BY n.nombre "
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })

let sql="SELECT COUNT(*) AS totalobjetos,tipo, n.en_expo , n.localizacion FROM colecciones INNER JOIN pieza n ON(n.id_colecciones = colecciones.id_colecciones) GROUP BY tipo ORDER BY n.nombre DESC  "
connection.query(sql, function(err, result)
{
    if(err)
    console.log(err);
    else
    {
        console.log("Dato Actualizado");
        console.log(result);
    }
})
