const path=require('path')
const express=require('express')
const hbs = require('hbs')
const app=express()
const forecast=require('../utils/forecast')
const geocode=require('../utils/geocode')

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


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        Name: 'Achint'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
   {
       return res.send({
           error:'Please enter correct Address'
       })
   }

   geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

    forecast(latitude,longitude,(error,data)=>{

        if(error){
            return res.send({
                error:'Please enter correct Address'
            })
        }
        console.log(data)

        res.send({
            forecast:data,
            location,
            address:req.query.address
        })
    })


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

 


