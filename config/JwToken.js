//Function to Generate Token
const secret = require('./secret.js')
const jwt = require('jsonwebtoken')
module.exports = {
    generateToken
}
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: "2m"
    };

    return jwt.sign(payload, secret.jwtSecret, options)
}