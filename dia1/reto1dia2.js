let mysql = require("mysql2");
let connection = mysql.createConnection(
{
    host: "localhost",
    user:"root",
    password:"*****",
    database:"reto2"
    
});
connection.connect(function(error){
    if(error){
        console.log(error);
    
    }else{
        console.log("conexión correcta");
    }
});

// let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";
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

// let sql = "SELECT COUNT(*) FROM students";
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

// let sql = "SELECT DISTINCT * FROM reto2.groups";
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

// let sql = "UPDATE marks SET mark = null WHERE mark > 5 AND date LIKE '2022%'";
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



// let sql = "SELECT * FROM students WHERE anyo_ingreso = 2022";
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

// let sql = "SELECT subject_id,COUNT(teacher_id) AS teachers_persub FROM subject_teacher GROUP BY subject_id";
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
