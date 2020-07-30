// var request=require('request')
// const url='http://api.weatherstack.com/current?access_key=ec1b52dd078a9f3e41af121fdf46a2b7&query=12.34,-98.34'


// request({url:url,json:true},(error,response)=>{

//     if(error)
//     console.log('Unable to connect')
//     else if(response.body.error)
//     console.log('Unable to find location')
//     else
//     console.log(response.body.location.timezone)


    
// })


// const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWNoaW50NTQwMCIsImEiOiJja2QxZWticDExMnF3MnBwdjA4OW96cDk3In0.EyoYkGU4APv3pIit8DTa5A'

// request({url:url2,json:true},(error,response)=>{

//     if(error)
//     console.log('Unable to connect')
//     else if(response.body.features.length==0)
//     console.log('Unable to find location')
//     else
//     console.log(response.body)


    
// })  
// New part 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs=require('yargs')

const address=process.argv[2];

if(!address)
{
    console.log('Enter correct address')
}
 

else{


geocode(address, (error, {latitude,longitude,location}={} ) => {
    
    

    if(error)
    {
        return console.log("Enter Correct location")

    }

     



    forecast(latitude,longitude, (error, data) => {
       // console.log('Error', error)

       if(error)
      { return console.log("Enter Correct location")

      }
        console.log(data)
    })



})
//40.7831,-73.9712
}