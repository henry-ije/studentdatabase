db = require("../models/index")
const users = db.users;

exports.usersController = {
    create: (req, res)=> {
        const user = req.body
        users.create(user).then(data=> {
            res.status(200)
            .send(data)
        }).catch(err=> {
            const errorObj = {}
            err.erros.map(error => {
                errorObj[error.path] = error.message
            })
            res.status(400)
            .send(errObj)
        })
    },
    getAll: (req, res)=> {
        users.findAll().then(data=> {
        res.status(200).send(data)

        }).catch(err=> {
            res.status(400).send({
                message: message || "Could not fetch record"
            })

        })
    }, 
    getById: (req, res, )=> {
        users.findOne({
            where: {
                id: req.params.id
            }
        }).then(data=> {
            if(data== undefined){
                res.status(404).send({
                    message: "Record not found"
                })
            }
            res.status(200).send(data)
        }).catch(err=> {
            res.status(400).send({
                message:err.message || "Could not fetch record"
            })
        })

    }, 
    update: (req, res)=> {
        const user = req.body
        users.update(user, {
            where: {
                id: req.params.id
            }
        }).then(data=> {
            if(data[0] !== 1){
                res.status(400)
                .send({
                    message: "Record not found"

                })
                res.status(200).send({
                    message: "Record updated"
                })
            }
        }).catch(err=> {
            res.status(400).send({
                message:err.message || "Could not fetch record"
            })
        })

    }, 
    delete: (req, res)=> {
        users.destroy({
            where: {
                id: req.params.id
            }
        }).then(data=>{
            if(data !== 1)
            {
                res.status(404).send({
                    message: "Record not found"
                })
            }
        }).catch(err => {
            res.status(400).send({
                message: err.essage || "Could not fetch record"
            })
        })
    }
}