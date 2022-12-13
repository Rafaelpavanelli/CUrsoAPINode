const app = require('./app.js')
const PORT=3333;
app.listen(PORT,()=>{
  console.log('Starting server on port: '+ PORT)
})