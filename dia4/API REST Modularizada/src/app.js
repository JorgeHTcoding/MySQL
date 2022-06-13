const express = require("express")
const cors = require('cors')
const alumnosRouters = require("./routers/alumnos.routers")
const notasRouters = require("./routers/notas.routers")
const mediaRouters = require("./routers/media.routers")
const errorHandling = require("./error/errorHandling")

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(alumnosRouters);
app.use(notasRouters);
app.use(mediaRouters);
app.use(function (req, res, next) 
    {
        res.status(404).json({
            error: true,
            codigo: 404,
            message: "Endpoint can't be found"
        })
    })

app.use(errorHandling)

module.exports= app;