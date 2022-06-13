const { response } = require("express");
const connection = require("../database")
let alumno = null;


function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

// SECCIÓN ALUMNOS
function getAlumnos(request, response) {

    let sql;
    if (request.query.student_id != null) {
        sql = "SELECT * FROM students WHERE student_id=" + request.query.student_id;
    }
    else {

        sql = "SELECT * FROM students"
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }

    })
}

function postAlumnos(request, response) {
    let respuesta;
    alumno = null;
    console.log(request.body);
    let sql = "INSERT INTO students(name, surname, anyoIngreso) " +
        "VALUES ('" + request.body.name + "', '" + request.body.surname + "', '" + request.body.anyoIngreso + "') ";
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
    })
}

function putAlumnos(request, response) {
    let respuesta;
    let sql;
    if (request.query.student_id === null) {
        sql = {
            error: true, codigo: 200,
            mensaje: 'alumno no existe papá', resultado: null
        }
    }
    else {
        console.log(request.body);

        console.log(sql);

        let name = request.body.name;
        let surname = request.body.surname;
        let anyoIngreso = request.body.anyoIngreso;
        let student_id = request.body.student_id;

        let params = [name, surname, anyoIngreso, student_id]

        sql = "UPDATE students SET name = COALESCE(?, name) , " +
            "surname = COALESCE(?, surname) , " +
            "anyoIngreso = COALESCE(?, anyoIngreso)  WHERE student_id = ?"
        console.log(sql)
        connection.query(sql, params, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (result.insertId)
                    response.send(String(result.insertId))
                else
                    response.send(respuesta)
            }
        })
    };
    response.send(respuesta);

}

function deleteAlumnos(request, response) {
    let respuesta;
    let sql;
    if (request.query.id != ""){   
    sql = `DELETE FROM students WHERE student_id= ` +  request.query.student_id    

    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId))
            else
                response.send(respuesta)
        }
        
    })
}
}



module.exports = { getStart, getAlumnos, deleteAlumnos, putAlumnos, postAlumnos};