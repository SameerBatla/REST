const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", function(req, res, next) {
  Ninja.aggregate()
    .near({
      type: "Point",
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 100000,
      spherical: true,
      distanceField: "dist.calculated"
    })
    .then(function(ninjas) {
      res.send(ninjas);
    });
});

router.post("/ninjas", (req, res, next) => {
  console.log(req.body);
  //   var ninja = new Ninja(req.body)
  //   ninja.save()
  Ninja.create(req.body)
    .then(ninja => {
      res.send(ninja);
    })
    .catch(next);
});

router.put("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    ninja => {
      res.send(ninja);
    }
  );
});

router.delete("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(ninja => {
    res.send(ninja);
  });
});

module.exports = router;

// app.get("/api", (req, res) => {
//     console.log("GET REQUEST");
//     res.send({
//       name: "sameer"
//     });
//   });
