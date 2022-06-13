const { response } = require("express");
const connection = require("../database")
let nota = null;

function getNotas(request, response) {
console.log(request.query.mark_id)
    let sql;
    if (request.query.mark_id) {
        sql = "SELECT * FROM marks WHERE mark_id=" + request.query.mark_id;
    } else{
        console.log("Id not given")
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }

    })
}



function postNotas(request, response) {
    let respuesta;
    mark = null;
    console.log(request.body);
    let sql = "INSERT INTO marks(student_id, subject_id, date, mark) " +
        "VALUES ('" + request.body.student_id + "', '" + request.body.subject_id + "', '" + request.body.date + "', '" + request.body.mark + "' ) ";
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


function putNotas(request, response) {
    let respuesta;
    let sql;
    if (request.query.mark_id === null) {
        sql = {
            error: true, codigo: 200,
            mensaje: 'Nota no existe', resultado: null
        }
    }
    else {
        console.log(request.body);

        console.log(sql);

        let student_id = request.body.student_id;
        let subject_id = request.body.subject_id;
        let date = request.body.date;
        let mark = request.body.mark;
        let mark_id = request.body.mark_id;

        let params = [student_id, subject_id, date, mark, mark_id]
       
        sql = "UPDATE marks SET student_id = COALESCE(?, student_id) , " +
            "subject_id = COALESCE(?, subject_id) , " +
            "date = COALESCE(?, date) , " +
            "mark = COALESCE(?, mark)  WHERE mark_id = ?"
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

function deleteNotas(request, response) {
    let respuesta;
    let sql;
    if (request.query.id != ""){   
    sql = `DELETE FROM marks WHERE mark_id= ` +  request.query.mark_id    
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

module.exports = { getNotas, postNotas, putNotas, deleteNotas };