const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")
function authUser(req,res,next){
    const token  = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"token not provide"
        })
    }

    const isTokenBlacklisted = tokenBlacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted){
        return res.status(401).json({
            message:"token is not provided"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.usere = decoded

        next()

    }catch(err){
        return res.status(401).json({
            message:"token Invalid"
        })
    }
    
}

module.exports = {authUser}