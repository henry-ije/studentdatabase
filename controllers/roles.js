db = require("../models/index")
const roles = db.roles;

exports.rolesController = {
    create: (req, res)=> {
        const role = req.body
        roles.create(role).then(data=> {
            res.status(200)
            .send(data)
        }).catch(err=> {
            // const errorObj = {}
            // err.erros.map(error => {
            //     errorObj[error.path] = error.message
            // })
            // res.status(400)
            // .send(errObj)
            res.status(400)
            .send(err)
        })
    },
    getAll: (req, res)=> {
        roles.findAll().then(data=> {
        res.status(200).send(data)

        }).catch(err=> {
            res.status(400).send({
                message: message || "Could not fetch record"
            })

        })
    }, 
    getById: (req, res, )=> {
        roles.findOne({
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
        const role = req.body
        roles.update(role, {
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

        roles.destroy({
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