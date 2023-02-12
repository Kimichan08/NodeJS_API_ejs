const pb = require("../models/pb");
const pbController ={
    getAll: (req,res) => {
        pb.getAll((err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.render("phong_ban/list",{pb:data})
            }
        })
    },

    viewCreate:(req,res) =>{
        res.render("phong_ban/add");
    },

    create:(req,res) =>{
        pb.create(req.body,(err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.redirect("/phong_ban/list");
            }
        })
    },

    viewUpdate: (req,res) =>{
        pb.getByID(req.params.id,(err,data)=>{
            if (err) {
                res.send(err)
            } else {
                res.render("phong_ban/update",{pb:data[0]});
            }
        })
    },

    update: (req,res) =>{
        pb.update(req.params.id,req.body,(err,data)=>{
            if (err) {
                res.send(err);
            } else {
                res.redirect("/phong_ban/list");
            }
        })
    },

    delete: (req,res) => {
        pb.delete(req.params.id,(err,data)=>{
            if (err) {
                res.send(err)
            } else {
                res.redirect("/phong_ban/list");
            }
        })
    }
}

module.exports = pbController;