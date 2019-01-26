const aspect = require('../../data/aspect')

exports.getAspects = async (req, res) => {
    res.send(aspect)
}
