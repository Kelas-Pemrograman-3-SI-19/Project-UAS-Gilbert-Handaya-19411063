const router = require('express').Router()
const daftarController = require('../controller/Data')

router.post('/insert', (req, res) => {
    try {
        daftarController.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    } catch (error) {
        console.log(error)
    }
})

router.get('/getall', (req, res) => {
    daftarController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    daftarController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    daftarController.update(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) =>{
    daftarController.delete(req.params.id)
        .then(result => res.json(result))
        .catch(result => res.json(err))
})

module.exports = router