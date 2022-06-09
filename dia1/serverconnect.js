let mysql = require("mysql2");
let connection = mysql.createConnection(
{
    host: "localhost",
    user:"root",
    password:"*****",
    database:"codenotch"
    
});

connection.connect(function(error){
    if(error){
        console.log(error);
    
    }else{
        console.log("conexión correcta");
    }
});

let sql = "DROP TABLE alumnos";
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

