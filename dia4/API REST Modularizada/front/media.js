
function getMedia() {
    
    let student_id = document.getElementById("student_id").value   
    if (url = `http://localhost:3000/media?student_id=${student_id}`) {
        let resultado2 = "";
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
                        console.log(result)                       
                        resultado2.innerHTML = `<div>   
                        <tr>              
                <td><b>Id Estudiante: </b></td>              
                <td>${student_id}</td>   
                </tr>     
                <tr>      
                <tr>              
                <td><b>Nota media: </b></td>              
                <td>${result[0].notaMedia}</td>   
                </tr>          
                          
                </div>`
                    
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
function output(result) {
    let resultado = "";
    let tabla = `<table>
                    <tr>                    
                    <th>Nombre</th>
                    <th>Apellido</th>                   
                    <th>Asignatura</th>
                    </tr>
                `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {
        resultado += ` <tr>
                                
                                <td>${result[i].name}</td>
                                <td>${result[i].surname}</td>                                
                                <td>${result[i].asignatura}</td>
                                </tr>
                    `}
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}
function getMedia() {
    
    let student_id = document.getElementById("student_id").value   
    if (url = `http://localhost:3000/media?student_id=${student_id}`) {
        let resultado2 = "";
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
                        console.log(result)                       
                        resultado2.innerHTML = `<div>   
                        <tr>              
                <td><b>Id Estudiante: </b></td>              
                <td>${student_id}</td>   
                </tr>     
                <tr>      
                <tr>              
                <td><b>Nota media: </b></td>              
                <td>${result[0].notaMedia}</td>   
                </tr>          
                          
                </div>`
                    
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
function output2(result) {
    let resultado = "";
    let tabla = `<table>
                    <tr>                    
                    <th>Nombre</th>
                    <th>Apellido</th>                   
                    <th>Asignatura</th>
                    </tr>
                `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {
        resultado += ` <tr>
                                
                                <td>${result[i].first_name}</td>
                                <td>${result[i].last_name}</td>                                
                                <td>${result[i].asignatura}</td>
                                </tr>
                    `}
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}


function getApuntadas() {
    let student_id = document.getElementById("student_id").value;   
    if (url = `http://localhost:3000/apuntadas/`) {
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
    } if (url = `http://localhost:3000/apuntadas/?student_id=${student_id}`) {
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
    } else {
        console.log("error")
    }
}

function getImpartidas() {
    let teacher_id = document.getElementById("teacher_id").value;   
    if (url = `http://localhost:3000/impartidas/`) {
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
                output2(result);
            })
            .catch(function (err) {
                console.log(err)
            })
    } if (url = `http://localhost:3000/impartidas/?teacher_id=${teacher_id}`) {
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
                output2(result);
            })
            .catch(function (err) {
                console.log(err)
            })
    } else {
        console.log("error")
    }
}

function showToast(message, color) {

    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}