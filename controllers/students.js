db = require("../models/index")
const students = db.students;

exports.studentsController = {
    create: (req, res)=> {
        const student = req.body
        students.create(student).then(data=> {
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
        students.findAll({
            include: db.users
        }).then(data=> {
        res.status(200).send(data)

        }).catch(err=> {
            res.status(400).send({
                message: message || "Could not fetch record"
            })

        })
    }, 
    getById: (req, res, )=> {
        students.findOne({
            where: {
                id: req.params.id
            }, 
            include: db.users
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
        const student = req.body
        students.update(student, {
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
        students.destroy({
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