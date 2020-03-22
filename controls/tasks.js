const express = require('express')
const mongoose = require('mongoose')
const ListModel = mongoose.model('List')
const router = express.Router()

router.delete('/task', (req, res) => {
  try {
    ListModel.findOne({ id: req.body.listid }, function (err, docs) {
      if (err) throw (err)
      docs.tasks.pull(req.body._id)
      docs.save()
      res.status(204).send({ message: 'successful', status: 'OK' })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

router.put('/task', (req, res) => {
  try {
    ListModel.findOne({ id: req.body.listid }, function (err, docs) {
      if (err) throw (err)
      docs.tasks.id(req.body._id).set(req.body)
      docs.save()
      res.status(204).send({ message: 'successful', status: 'OK' })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})

router.post('/task', (req, res) => {
  try {
    ListModel.findOne({ id: req.body.listid }, function (err, docs) {
      if (err) throw (err)
      docs.tasks.push(req.body)
      docs.save(function (err, data) {
        if (err) throw (err)
        const taskid = data.tasks[data.tasks.length - 1]._id
        res.status(201).send({ id: taskid, message: 'successful', status: 'OK' })
      })
    })
  } catch (error) {
    res.status(500).send({ error: error.toString() })
  }
})
module.exports = router
