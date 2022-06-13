class Nota {
    constructor(student_id, subject_id, date, mark) {
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;
    }
}



function postNotas() {
    let nota = new Nota(
        document.getElementById("student_id").value,
        document.getElementById("subject_id").value,
        document.getElementById("date").value,
        document.getElementById("mark").value
    )

    let url = "http://localhost:3000/marks"

    if (validar(nota)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(nota),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}
function output(result) {

    let resultado = "";
    let tabla =
            `<table>
            <tr>
            <th>ID Mark</th>
            <th>ID Estudiante</th>
            <th>ID Asignatura</th>
            <th>Fecha</th>                   
            <th>Nota</th>
            </tr>
        `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                                <td>${result[i].mark_id}</td>
                                <td>${result[i].student_id}</td>
                                <td>${result[i].subject_id}</td>
                                <td>${result[i].date}</td>                                
                                <td>${result[i].mark}</td>
                                </tr>
                    `}
                 
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}

function getNotas() {
  
    let mark_id = document.getElementById("mark_id").value;  
   let url;
 url = `http://localhost:3000/marks/?mark_id=${mark_id}`
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            method: "GET"
        }
        console.log(url)
        console.log(param)
        fetch(url, param)
            .then(function (data) {               
                return data.json()               
            })
            .then(function (result) {
                output(result);              
            })
            .catch(function (err) {
                console.log(err)
            })

    
}
function putNotas() {

    let url = `http://localhost:3000/marks`;

    let input = {
        student_id: document.getElementById("student_id").value,
        subject_id: document.getElementById("subject_id").value,
        date: document.getElementById("date").value,
        mark: document.getElementById("mark").value,
        mark_id: document.getElementById("mark_id").value
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(input),
        method: "PUT"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario creado correctamente", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}

function deleteNotas() {

    let mark_id = document.getElementById("mark_id").value;
    let url = `http://localhost:3000/marks/?mark_id=${mark_id}`;

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "DELETE"
    }
    console.log(mark_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}


function validar(nota) {
    resultado = false
    if (nota.student_id == "" || nota.student_id == "null") {
        showToast("AVISO: Campo name vacío", "bg-warning");
    } else if (nota.subject_id == "" || nota.subject_id == "null") {
        showToast("AVISO: Campo surname vacío", "bg-warning")
    } else if (nota.date == "" || nota.date == "null") {
        showToast("AVISO: Campo anyoIngreso vacío", "bg-warning");
    } else if (nota.mark == "" || nota.mark == "null") {
        showToast("AVISO: Campo anyoIngreso vacío", "bg-warning");
    } else {
        resultado = true;
    } return resultado;
}

function showToast(message, color) {

    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}