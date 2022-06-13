const {Router} = require ("express")
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller")

// ROUTERS ALUMNOS

router.get("/", alumnosCtrl.getStart);

router.get("/students", alumnosCtrl.getAlumnos);

router.get("/students/?student_id=", alumnosCtrl.getAlumnos);

router.post("/students",  alumnosCtrl.postAlumnos);

router.put("/students",  alumnosCtrl.putAlumnos);

router.delete("/students",  alumnosCtrl.deleteAlumnos)



module.exports = router;