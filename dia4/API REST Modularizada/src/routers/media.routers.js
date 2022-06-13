const {Router} = require ("express")
const router = Router();
const mediaCtrl = require("../controller/media.controller")

router.get("/media/?student_id=", mediaCtrl.getMedia);

router.get("/media/", mediaCtrl.getMedia);

router.get("/apuntadas/?student_id=", mediaCtrl.getApuntadas);

router.get("/apuntadas",  mediaCtrl.getApuntadas);

router.get("/impartidas/?teacher_id=",  mediaCtrl.getImpartidas);

router.get("/impartidas",  mediaCtrl.getImpartidas);







module.exports = router;