const logger = function (req, res, next) {
    let date = new Date()
    console.log(date)
    next()
}

module.exports = logger