const mysql = require("mysql2")

//buat koneksi
const db = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "todo"
})

//cek koneksi
db.connect(err =>{
  if (err){
    console.error("koneksi gagal:", err)
  }else {
    console.log("berhasil")
  }
})

module.exports = db