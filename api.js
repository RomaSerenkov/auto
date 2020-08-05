const express = require("express")
const router = express.Router()
const Auto = require("./database/auto")

router.get("/auto", (req, res) => {
  Auto.find({})
    .then(auto => {
      res.send(auto)
    })
})

router.post("/auto", (req, res) => {
  Auto.create(req.body)
    .then(auto => {
      res.send(auto)
    })
})

router.put("/auto/:id", (req, res) => {
  Auto.findByIdAndUpdate({ _id: req.params.id}, req.body)
    .then(() => {
      Auto.findOne({ _id: req.params.id})
        .then(auto => {
          res.send(auto)
        })
    })
})

router.delete("/auto/:id", (req, res) => {
  Auto.deleteOne({ _id: req.params.id})
    .then(auto => {
      res.send(auto)
    })
})

module.exports = router
