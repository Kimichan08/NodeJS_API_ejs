const nv = require("../models/nv");
const pb = require("../models/pb");

const nvController = {
    getAll : (req,res) => {
        nv.getAll((err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.render("nhan_vien/list",{nv: data})
            }
        })
    },

    viewCreate: (req,res) =>{
        pb.getAll((err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.render("nhan_vien/add",{pb: data})
            }
        })
    },

    create : (req,res) => {
        req.body.image = `${req.file.filename}`;
        nv.create(req.body,(err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.redirect("/nhan_vien/list")
            }
        })
    },
    
    viewUpdate: (req,res) =>{
        pb.getAll((error,data)=>{
            if (error) {
                res.send(error)
            } else {
                nv.getByID(req.params.id,(err,result)=>{
                    if (err) {
                        res.send(err)
                    } else {
                        res.render("nhan_vien/update",{nv:result[0],pb:data})
                    }
                })
            }
        })
    },

    update:(req,res) => {

        nv.getByID(req.params.id,(error,data)=>{
            if (error) {
                res.send(error)
            } else {
                if (!req.file) {
                    req.body.image = `${data[0].image}`;
                } else {
                    req.body.image = `${req.file.filename}`;
                }
                nv.update(req.params.id,req.body, (err,result)=>{
                    if (err) {
                        res.send(err)
                    } else {
                        res.redirect("/nhan_vien/list")
                    }
                });
            }
        })
    },

    delete: (req,res) => {
        nv.delete(req.params.id,(err,data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect("/nhan_vien/list")
            }
        })
    }
}

module.exports = nvController;