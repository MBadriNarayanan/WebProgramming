const express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app=express();

app.listen(3000);

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended:true, useNewUrlParser: true, useUnifiedTopology: true}));

mongoose.connect("mongodb+srv://Badri:BadriWebProgrammingLab@cluster0.hn5pf.mongodb.net/WebProgrammingLab?retryWrites=true&w=majority");

const account={
    title:String,
    firstname:String,
    lastname:String,
    mobilenumber: String,
    emailid: String,
    message: String
}

const portfolio = mongoose.model("Portfolio",account);



app.get('/',(req,res)=>{
    res.sendFile('./views/MyWebPage.html',{root:__dirname});
})
app.get('/contact',(req,res)=>{
    res.sendFile('./views/contact.html',{root:__dirname});
})
app.post('/contact',(req,res)=>{
    let newaccount=new portfolio({
        title:req.body.title,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mobilenumber: req.body.mobilenumber,
        emailid: req.body.emailid,
        message: req.body.message
    })
    newaccount.save();
    res.redirect('/done');
});
app.get('/done',(req,res)=>{
    res.sendFile('public/insertion.html',{root:__dirname});
})

app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname});
})

