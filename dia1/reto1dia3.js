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

// let params = ["students.student_id","marks.student_id", "marks.subject_id", "subjects.subject_id"];
// let sql = "SELECT first_name,last_name,subjects.title FROM students INNER JOIN marks ON ( ? = ? ) INNER JOIN subjects ON ( ? =? )"
// connection.query(sql, params, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })

// let params = ["teachers.teacher_id","subject_teacher.subject_id", "subject_teacher.subject_id", "subjects.subject_id"];
// let sql = "SELECT first_name AS nombre,last_name AS apellido ,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (? = ?) INNER JOIN subjects ON (? = ?)"
// connection.query(sql, params, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })


let sql="SELECT COUNT(student_id) AS numero_alumnos,teachers.first_name,teachers.last_name, title FROM students INNER JOIN subject_teacher ON (students.group_id = subject_teacher.group_id)INNER JOIN teachers ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY subjects.subject_id"
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