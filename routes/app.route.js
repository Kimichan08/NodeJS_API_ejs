const uploadFile = require("../configs/uploadFile");
const homeController = require("../controllers/homeController");
const nvController = require("../controllers/nvController");
const pbController = require("../controllers/pbCotroller");

const app_route = (app) =>{
    app.get("/", homeController.index);

    //phong ban
    app.get("/phong_ban/list", pbController.getAll);
    
    app.get("/phong_ban/add",pbController.viewCreate);
    app.post("/phong_ban/add",pbController.create);

    app.get("/phong_ban/edit/:id",pbController.viewUpdate);
    app.post("/phong_ban/edit/:id",pbController.update);

    app.get("/phong_ban/delete/:id",pbController.delete);

    // nhan vien
    app.get("/nhan_vien/list",nvController.getAll);

    app.get("/nhan_vien/add",nvController.viewCreate);
    app.post("/nhan_vien/add",uploadFile.single("image"),nvController.create);

    app.get("/nhan_vien/edit/:id",nvController.viewUpdate);
    app.post("/nhan_vien/edit/:id", uploadFile.single("image"),nvController.update);

    app.get("/nhan_vien/delete/:id",nvController.delete);
}

module.exports = app_route;