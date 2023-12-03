const db = require("../models/index")
const users = db.users;
const bcrypt = require("bcryptjs")
const {sign} = require("jsonwebtoken")
const config = require("../config/auth")

exports.authController = {
    signup: (req, res)=> {
        const user = req.body
        user.password = bcrypt.hashSync(user.password,10)
        users.create(user).then(data=> {
            res.status(200)
            .send(data)
        }).catch(err=> {
            // const errorObj = {}
            // err.erros.map(error => {
            //     errorObj[error.path] = error.message
            // })
            res.status(400)
            .send(err)
        })
    },
    sign: (req, res)=> {
        users.findOne({
            where: {
                userName: req.body.userName
            }
        }).then(user=> {
            if(!user){
                return res.status(401).send({
                    message: "Invalud userName or password"
                })
            }
            let isValidPassword = bcrypt.compareSync(req.body.password, user.password)
             
            if(!isValidPassword){
                return res.status(401).send({
                    message: "Invalid username or password"
                })
            }
            let payload = {
                id: user.id,
                userName: user.userName
            }
            let token = sign(payload, config.secret, {
                expiresIn: 36000
            })
           
        res.status(200).send({
            accessToken: token
        })

        }).catch(err=> {
            res.status(400).send({
                message: err.message || "Could not fetch record"
            })
        })
    }, 

    forgotpassword: (req, res)=> {
        const user = req.bodyusers.create(user).then(data=> {
            res.status(200)
            .send(data)
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Could not fetch record"
            })
        })
    }
}