const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbconfig")
//middleware
app.use(cors());
app.use(express.json());

//Routes//

//create
app.post("/addmhs", async (req, res) => {
    const { nama_mahasiswa, nilai_mahasiswa, grade } = req.body

    const query = `insert into tabel_mahasiswa
        (nama_mahasiswa, nilai_mahasiswa, grade) values ('${nama_mahasiswa}','${nilai_mahasiswa}', '${grade}')`
    pool.query(query, (error, result) => {
        if (error) {
            res.send(400, {
                succes: false,
                result: error

            })
        }
        else {
            res.send(200, {
                success: true,
                result: `Data ${nama_mahasiswa} has been add`
            })
        }
    })
})

//get all

app.get("/getmhs", async(req,res) => {
    // const query = `select * from tabel_mahasiswa`
    // pool.query(query, (error, result) => {
    //     if (error) {
    //         res.send(400, {
    //             succes: false,
    //             result: error
    //         })
    //     }
    //     else {
    //         res.send(200, {
    //             success: true,
    //             result: result.rows
    //         })
    //     }
    // })
    try {
        const allMhs = await pool.query("select * from tabel_mahasiswa")
        res.json(allMhs.rows)
    } catch (error) {
        console.log(error.message)
    }
})

//get spesific

app.get("/getmhs/:id",  async(req, res) =>{
    const {id} = req.params
    const query = `select * from tabel_mahasiswa where mhs_id=${id}`

    pool.query(query, (error, result) => {
        if (error) {
            res.send(400, {
                succes: false,
                result: error
            })
        }
        else {
            res.send(200, {
                success: true,
                result: result.rows
            })
        }
    })
})

//update

app.put("/putmhs/:id",async(req,res)=>{
    const {id} = req.params;
    const {nama_mahasiswa, nilai_mahasiswa,grade} = req.body
    const query = `update tabel_mahasiswa set nama_mahasiswa = '${nama_mahasiswa}', nilai_mahasiswa = '${nilai_mahasiswa}', grade = '${grade}' where mhs_id = '${id}' `

    pool.query(query, (error, result) => {
        if (error) {
            res.send(400, {
                succes: false,
                result: error
            })
        }
        else {
            res.send(200, {
                success: true,
                result: "Data succesfully updated"
            })
        }
    })
})

//delete a 
app.put("/deletemhs/:id", async(req,res)=>{
    const {id} = req.params;
    const query =  `delete from tabel_mahasiswa where mhs_id = '${id}' `
    pool.query(query, (error, result) => {
        if (error) {
            res.send(400, {
                succes: false,
                result: error
            })
        }
        else {
            res.send(200, {
                success: true,
                result: `Data succesfully deleted`
            })
        }
    })
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})