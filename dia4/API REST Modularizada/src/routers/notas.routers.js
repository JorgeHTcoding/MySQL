const {Router} = require ("express")
const router = Router();
const notasCtrl = require("../controller/notas.controller")

router.get("/marks/?mark_id=", notasCtrl.getNotas);

router.get("/marks", notasCtrl.getNotas);

router.post("/marks",  notasCtrl.postNotas);

router.put("/marks",  notasCtrl.putNotas);

router.delete("/marks",  notasCtrl.deleteNotas)





module.exports = router;