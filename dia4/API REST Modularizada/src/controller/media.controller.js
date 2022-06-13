const { response } = require("express");
const connection = require("../database")
let nota = null;

function getMedia(request, response) {

    let sql;  
        sql = "SELECT AVG(mark) AS notaMedia FROM marks WHERE student_id=" + request.query.student_id;   
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }

    })
}

function getApuntadas(request, response) {

    let sql;
    if (request.query.student_id != null) {
        sql = "SELECT name,surname,subjects.title AS asignatura FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE marks.student_id=" + request.query.student_id;
    }
    else {

        sql = "SELECT name,surname,subjects.title AS asignatura FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id)"
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }

    })
}

function getImpartidas(request, response) {

    let sql;
    if (request.query.teacher_id != null) {
        sql = "SELECT first_name ,last_name ,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE subject_teacher.teacher_id=" + request.query.teacher_id;
    }
    else {

        sql = "SELECT first_name  ,last_name ,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }

    })
}

module.exports = { getMedia, getApuntadas,  getImpartidas };