var Perfume = require('./models/perfume')

exports.createPerfume = function (req, res) {
    var newperfume = new Perfume(req.body);
    newperfume.save(function (err, perfume) {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect('/');
    });
};

exports.getPerfumes = function (req, res) {
    Perfume.find({}, function (err, perfumes) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(perfumes)
    });
};

exports.updatePerfume = function(req, res) {
  Perfume.findByIdAndUpdate(FormData, req.body, {new: true}, function (err, perfumes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(perfumes);
  }); 
};

exports.deletePerfume = function (req, res) {
    const array = req.body

    Perfume.findByIdAndRemove(array, function (err, perfumes) {
        if (array) {

            for (let i = 0; i < array.length; i++) {
                console.log(array[i])
            }
        }
        res.json('Successful');
    });
};