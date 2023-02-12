const conn = require("../database/connect");

const pb = {
    getAll: (callback)=>{
        let query = "SELECT * FROM phong_ban ORDER BY id DESC";
        conn.query(query,(err,result)=>{
            if (err) {
                callback(err,null);
            } else {
                callback(null,result)
            }
        });
    },
     
    getByID: (id,callback) =>{
        let query = "SELECT * FROM phong_ban WHERE id = ?";
        conn.query(query,id,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        });
    },

    create: (data,callback) =>{
        let query = "INSERT INTO phong_ban SET ?";
        conn.query(query,data,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result);
            }
        })
    },

    update: (id,data,callback)=>{
        let query = "UPDATE phong_ban SET ? WHERE id = ?";
        conn.query(query,[data,id],(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    delete:(id,callback) =>{
        let query = "DELETE FROM phong_ban WHERE id = ?";
        conn.query(query,id,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    }
}

module.exports = pb;