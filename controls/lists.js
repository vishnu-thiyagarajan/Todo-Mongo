const express = require('express')
const mongoose = require('mongoose')

const ListModel = mongoose.model('List')
const router = express.Router()

router.get('/list', (req, res) => {
  try {
    ListModel.find((err, docs) => {
      if (err) throw err
      res.status(200).send(docs)
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

router.post('/list', (req, res) => {
  try {
    var list = new ListModel()
    list.id = req.body.id
    list.listname = req.body.listname
    list.tasks.push(...req.body.tasks)
    list.save((err, docs) => {
      if (err) throw err
      res.status(201).send({ message: 'successful', status: 'OK' })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

router.put('/list', (req, res) => {
  try {
    ListModel.updateOne({ id: req.body.id }, req.body, function (err) {
      if (err) throw err
      res.status(204).send({ message: 'successful', status: 'OK' })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

router.delete('/list', (req, res) => {
  try {
    ListModel.deleteOne({ id: req.body.id }, function (err) {
      if (err) throw err
      res.status(204).send({ message: 'successful', status: 'OK' })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

module.exports = router
