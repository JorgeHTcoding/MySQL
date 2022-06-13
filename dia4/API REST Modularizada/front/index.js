class Alumno {
    constructor(name, surname, anyoIngreso) {
        this.name = name;
        this.surname = surname;
        this.anyoIngreso = anyoIngreso;
    }
}



function postAlumnos() {
    let alumno = new Alumno(
        document.getElementById("name").value,
        document.getElementById("surname").value,
        document.getElementById("anyoIngreso").value,
    )

    let url = "http://localhost:3000/students"

    if (validar(alumno)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(alumno),
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
    let tabla = `<table>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>                   
                    <th>Año ingreso</th>
                    </tr>
                `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                                <td>${result[i].student_id}</td>
                                <td>${result[i].name}</td>
                                <td>${result[i].surname}</td>                                
                                <td>${result[i].anyoIngreso}</td>
                                </tr>
                    `}
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}

function getAlumnos() {
    let student_id = document.getElementById("student_id").value;

    let resultado2 = "";
    if (url = `http://localhost:3000/students/`) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            method: "GET"
        }
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
    } if (url = `http://localhost:3000/students/?student_id=${student_id}`) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            method: "GET"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (!result.err) {
                    resultado2 = document.getElementById("tablaName")
                    for (let i = 0; i < result.length; i++) {
                        resultado2.innerHTML = `<div>   
                        <tr>              
                <td><b>Id: </b></td>              
                <td>${result[i].student_id}</td>   
                </tr>     
                <tr>      
                <tr>              
                 <td><b>Nombre: </b></td>              
                 <td>${result[0].name}</td>   
                 </tr>           
                 <tr>              
                 <td><b>Apellido: </b></td>              
                 <td>${result[0].surname}</td>              
                 </tr>  
                 <tr>              
                 <td><b>Año de ingreso: </b></td>              
                 <td>${result[0].anyoIngreso}</td>         
                 </tr>  
                 <tr>            
                 </tr>            
                 </div>`
                    }
                } else {
                    showToast("Error" + result.mensaje, "bg-danger")
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    } else {
        console.log("error")
    }
}

function putAlumnos() {

    let url = `http://localhost:3000/students`;

    let input = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        anyoIngreso: document.getElementById("anyoIngreso").value,
        student_id: document.getElementById("student_id").value
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

function deleteAlumnos() {

    let student_id =  document.getElementById("student_id").value ;
    let url = `http://localhost:3000/students/?student_id=${student_id}`;

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },       
        method: "DELETE"
    }
    console.log(student_id)
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


function validar(alumno) {
    resultado = false
    if (alumno.name == "" || alumno.name == "null") {
        showToast("AVISO: Campo name vacío", "bg-warning");
    } else if (alumno.surname == "" || alumno.surname == "null") {
        showToast("AVISO: Campo surname vacío", "bg-warning")
    } else if (alumno.anyoIngreso == "" || alumno.anyoIngreso == "null") {
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