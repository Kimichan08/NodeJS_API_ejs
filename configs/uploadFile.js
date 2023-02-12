const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, "./uploads")
    },
    filename : (req,file,callback)=>{
        callback(null,file.originalname)
    }
});

const uploadFile = multer({
    storage : diskStorage
});

module.exports = uploadFile;