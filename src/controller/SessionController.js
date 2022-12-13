const { modules } = require("../models/User");

//Metodos: index, show, Update, Store, Destroy
const User= require("../models/User");

class SessionController{
  async store(req,res){
const Email=req.body.Email;
let user= await User.findOne({Email})
!user? user=await User.create({Email}): res.json({
  statusCode: 404,
  Menssage: "Usuario ja existe"
}) 

  }
}
module.exports= new SessionController();