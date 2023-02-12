const conn = require("../database/connect");

const nv = {
    getAll: (callback) => {
        let query = "SELECT * FROM nhan_vien ORDER BY id DESC";
        conn.query(query,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    getByID: (id,callback) => {
        let query = "SELECT * FROM nhan_vien WHERE id = ?";
        conn.query(query, id, (err,result)=>{
            if (err) {
                callback(err,null);
            } else {
                callback(null,result)                
            }
        })
    },

    create: (data, callback) => {
        let query = "INSERT INTO nhan_vien SET ?";
        conn.query(query,data,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result);
            }
        })
    },

    update: (id,data,callback) =>{
        let query = "UPDATE nhan_vien SET ? WHERE id = ?";
        conn.query(query,[data,id],(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    delete: (id,callback) =>{
        let query = "DELETE FROM nhan_vien WHERE id = ?"
        conn.query(query,id,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    }
}

module.exports = nv;