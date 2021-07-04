const express = require('express');
const app = express()
const PORT = process.env.PORT ||5000;
const hbs = require('hbs')

const path = require('path')
console.log(__dirname)
console.log(path.join(__dirname,"../public"))
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

app.use(express.static(path.join(__dirname,"../public")))
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index.hbs',{
        title:'Weather',
        name:'Dipesh Wagle'
        
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Dipesh Wagle'
        
    })
})
app.get('/help',(req,res)=>{
    res.render('help.hbs',{
        helpText: 'This is some helpful text',
        title:'help',
        name:'Dipesh Wagle'
    })
})



app.get('',(req,res)=>{
    res.render('about.html')
})

app.listen(PORT,console.log("app is listening to port ${PORT}"))