const { Router } = require("express");
const router = Router();

//Routes
router.get('/', (req, res) => {
    res.json({"Tittle": "Hello Wolrd"});
});

router.get('/test', (req, res) => {
    const data = {
        "name": "idem",
        "website": "teoremaiee.com"
    };
    res.json(data);
});

module.exports = router; //Exporta a otros archivos