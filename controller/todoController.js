const db = require("../config/db")

//tampilkan semua todo
exports.showTodos = (req,res)=>{
  const sql = "SELECT * FROM todos"
  db.query(sql, (err, results)=>{
    if (err) return res.status(500).send("gagal ambil data", err.message)
    //render halaman
    res.render("index", {todos : results, title:"todo list"})
  })
}

//create todo
exports.addTodos = (req,res)=>{
  const {title} = req.body
  
  const sql = "INSERT INTO todos (title) VALUES (?)"
  db.query(sql, [title], err=>{
    if (err) return res.send("gagal menambah data")
    res.redirect("/")
  })
}

//hapusbtodo

exports.deleteTodos = (req,res)=>{
  const {id} = req.params
  
  const sql = "DELETE FROM todos WHERE id = ?"
  db.query(sql, [id], err=>{
    if (err) return res.send("gagal menghapus data")
    res.redirect("/")
    
  })
}