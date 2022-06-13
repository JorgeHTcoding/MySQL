let mysql = require("mysql2");
let connection = mysql.createConnection(
{
    host: "localhost",
    user:"root",
    password:"Alai321!",
    database:"reto2"
    
});
connection.connect(function(error){
    if(error){
        console.log(error);
    
    }else{
        console.log("conexión correcta");
    }
});


// let sql = "SELECT student_id,mark FROM reto2.marks WHERE student_id BETWEEN 1 AND 20 OR mark > 8 AND date LIKE '2021%'";
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


// let sql = "SELECT subject_id,AVG(mark) FROM marks WHERE date LIKE '2022%' GROUP BY subject_id";
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



// let sql = "SELECT student_id,AVG(mark) FROM marks WHERE date LIKE '2022%' GROUP BY student_id";
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