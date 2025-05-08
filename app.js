const express = require("express")
const app = express()
const expressLayout = require("express-ejs-layouts")
const todoRoutes = require("./router/todoRoutes")
//template
app.set("view engine", "ejs")
app.use(expressLayout)
app.set("layout", "layout/main")
//middleware
app.use(express.urlencoded({extended:true}))
//kirim data
app.use("/", todoRoutes)
//jalankan server
app.listen(3000,()=>{
  console.log("berhasil berjalan")
})