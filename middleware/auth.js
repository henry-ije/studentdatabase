const {jwt, verify} = require("jsonwebtoken")
const config = require("../config/auth")

verifyToken = (req, res, next)=> {
    let token = req.headers["Authorization"]
    if(!token){
        return res.status(403).send({
            message: "Forbidden"
        })
    }

   verify(token, config.secret, (err, decoded)=> {
    if (err){
        return res.status(401).send({
            message: "Unauthorised access"
        })
    }

    req.userId = decoded.id
   })


}
const jwtAuth = {
    verifyToken 
}
module.exports = jwtAuth