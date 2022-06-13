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

// let sql = "INSERT INTO subjects (title) VALUES (\"Matemáticas\"),(\"Física\"),(\"Electrónica\"),(\"Programación\"),(\"Maquetación\"),(\"Base de datos\"),(\"Fundamentos\"),(\"Robótica\"),(\"Machine Learning\"),(\"Entornos\")";
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

// let sql ="INSERT INTO groups (name) VALUES (\"GrupoA\"),(\"GrupoB\"),(\"GrupoC\"),(\"GrupoD\"),(\"GrupoE\"),(\"GrupoF\"),(\"GrupoG\"),(\"GrupoH\"),(\"GrupoI\"),(\"GrupoJ\")"
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

// let sql = "INSERT INTO teachers (first_name, last_name) VALUES (\"Pepe\",\"Monagas\"),(\"Juan\",\"Tulio\"),(\"Marco\",\"Antonio\"),(\"Jose\",\"Jofaino\"),(\"Oliver\",\"Ibenji\"),(\"Myke\",\"Tyson\"),(\"Eltra\",\"Buco\"),(\"Debora\",\"Melotroso\"),(\"Mao\",\"Nesa\"),(\"Pepin\",\"Boliche\")";
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

// let sql = "INSERT INTO students (first_name, last_name, group_id) VALUES (\"Benito\",\"Camela\", 1),(\"Ester\",\"Colero\", 2),(\"Maria\",\"Sarmiento\", 3),(\"Juana\",\"Banana\", 4),(\"Pepa\",\"Pig\", 5),(\"Tomás\",\"Turbado\", 6),(\"Paca\",\"Lalpaca\", 7),(\"Toca\",\"Melas\", 8),(\"Debora\",\"Mela\", 9),(\"Paquita\",\"Ladelbarrio\", 10)";
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

// let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (1, 1, \"2022-6-2\", 10),(2, 2, \"2021-2-2\", 1),(3, 3, \"0001-1-1\", 1), (4, 5, \"2022-6-2\", 9), (5, 4, \"2023-2-1\", 3), (6, 6, \"2012-1-3\", 6), (7, 7, \"2234-7-1\", 10), (8, 8, \"1992-12-8\", 10), (9, 9, \"2022-6-2\", 10), (10, 10, \"2000-6-2\", 11)";
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

// let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (1, 1, 1),(2, 2, 2),(3, 3, 3),(4, 4, 4),(5, 5, 5),(6, 6, 6),(7, 7, 7),(8, 8, 8),(9, 9, 9),(10, 10, 10)";
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

// let sql = "UPDATE marks SET mark = '0' ";
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

// let sql = "SELECT first_name,last_name FROM students";
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

// let sql = "SELECT * FROM teachers";
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

// let sql = "DELETE FROM marks WHERE date < \"2012-2-2\" ";
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

let sql = "UPDATE marks SET mark = '5' WHERE mark = '0'";
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

