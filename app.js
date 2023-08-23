const fs = require("fs")
const express = require("express")

const app = express()
const port = 3000


app.get('/file', (req,res) => {

    fs.writeFile("C:\\DEV\\SERPRO-APLICADA\\prova\\teste.txt","thiago braga", err =>{
    })
    
    
    fs.appendFile("C:\\DEV\\SERPRO-APLICADA\\prova\\teste.txt"," nobre", err =>{
    })
    
    fs.readFileSync("C:\\DEV\\SERPRO-APLICADA\\prova\\teste.txt","utf-8", (err,data) =>{
        res.json(data)
    })
    

})

app.listen(port, ()=>{
    console.log("server on")
})