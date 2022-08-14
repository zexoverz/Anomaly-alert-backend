const Alert = require('./alert.model')

exports.getAll = async (req, res, next) => {
    try {
        const alerts = await Alert.find()
        res.status(200).json(alerts)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.create = async (req, res, next) => {
    try {
        console.log(req.body)
        const alert = await Alert.create(req.body)
        res.status(201).json(alert)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.update = async (req, res, next) => {
    try {
        const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(alert)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}