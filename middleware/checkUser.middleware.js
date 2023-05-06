const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
    let token = req.headers.authorization;
    try {
        if (token) {
            jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
                if (decoded) {
                    if (decoded.isAdmin) next()
                } else {
                    res.status(400).send({ message: "permission denied!" })
                }
            })
        } else res.status(400).send({ message: "permission denied!" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}



module.exports = checkUser;