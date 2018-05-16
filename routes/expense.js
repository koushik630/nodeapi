var express 	= 	require('express');
var router 		=   express.Router();


const Controller = require("../systems/controllers");

global.app.use(function(req, response, next) {
   response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type");
  return next();
});
let prefix = process.env.EXPANSE_APP;
router.post("/"+prefix+"/auth/signup", Controller.expenseapp.AuthController.signup);
router.post("/"+prefix+"/auth/signin", Controller.expenseapp.AuthController.signin);
router.get("/"+prefix+"/search-user", Controller.expenseapp.HomeController.searchUser);
router.post("/"+prefix+"/create-group", Controller.expenseapp.GroupController.create);
router.post("/"+prefix+"/user-groups", Controller.expenseapp.GroupController.getUserGroups);
router.post("/"+prefix+"/groups-details", Controller.expenseapp.GroupController.getGroupDetails);
router.post("/"+prefix+"/member-deposit-edit", Controller.expenseapp.GroupController.memberDepositEdit);
router.post("/"+prefix+"/save-pay", Controller.expenseapp.GroupController.memberSavePay);

module.exports = router;