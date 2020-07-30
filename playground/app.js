const path=require('path')
const express=require('express')
const hbs = require('hbs');
const app=express()

// setup for static file
const publicDirectoryPath = path.join(__dirname, '../public')
const template=path.join(__dirname,'../partials')
 

app.use(express.static(publicDirectoryPath))
console.log(publicDirectoryPath)
 
 

// setting handlbars and views
app.set('view engine', 'hbs')
app.set('views', '../views')

// partials 
hbs.registerPartials(template)


app.get('/',(req,res)=>{
  
    res.render('index',{
        title:'Weather',
        Name:'Achint'
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        Name:'Achint'

    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
       title:'Help',
       Name:'Achint'

    })
})





app.listen(3000,()=>{

    console.log('Server Running')
})

 



