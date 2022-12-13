const express=require('express')
const routes= require('./routes')
const mongoose=require('mongoose')

class App {
  constructor(){
    this.server=express();
    mongoose.set("strictQuery", true);
    mongoose.connect('mongodb+srv://Rafael:Rafael330@estudo.pll9dhm.mongodb.net/?retryWrites=true&w=majority',{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    mongoose.set('strictQuery', true);
    this.middleware();
    this.routes();
  }

middleware(){
  this.server.use(express.json())
}
  routes(){
    this.server.use(routes)
  }
}
module.exports= new App().server;