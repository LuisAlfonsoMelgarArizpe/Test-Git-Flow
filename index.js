const express = require("express");

const app = express();


app.listen(4000, () => {
    let host = 'localhost';
    console.log('El servidor esta prendido en http://%s:%s', host, 4000)
})

app.get('/login',(req,res)=>{
    console.log("login");
});


app.post('/registro',(req,res)=>{
    console.log("registro");
});

app.post('');