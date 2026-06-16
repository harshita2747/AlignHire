const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

async function authUser(req, res, next) {

    const token = req.cookies.token
    const jwtSecret = process.env.JWT_SECRET

    if (!token) {
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "token is invalid"
        })
    }

    if (!jwtSecret) {
        return res.status(500).json({
            message: "JWT secret is not configured."
        })
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)

        req.user = decoded

        next()

    } catch (err) {
        console.error("JWT auth error:", err.name, err.message)
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token expired."
            })
        }

        return res.status(401).json({
            message: "Invalid token."
        })
    }

}


module.exports = { authUser }
