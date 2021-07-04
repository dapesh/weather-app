
/*const url = 'http://api.weatherstack.com/current?access_key=bb92ccc373d4858fc1f0ebea79ed9875&query=37.8267,-122.4233&units=f'
request({url:url, json:true},(error, response)=>{
    if(error){
        console.log('Unable to connect to weather service!');
    }else if(response.body.error){
        console.log('unable to find location')
    }else{
        console.log("Humidity is: "+response.body.current.humidity +"It's currently" + response.body.current.temperature +"degrees out. There is" +response.body.current.precip + "% of rain. ")
    }
    })*/

/*const url2 = ' http://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1IjoiZGlwZXNoMDEiLCJhIjoiY2twbDVmZDVmM2U5ZDJvbGE2ZzhiZHlyeCJ9.P2kmefK8sT1JDH8KCD2chg&limit=1'
request({url:url2, json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to mapbox service!')
    }
    else if(response.body.features.length === 0){
        console.log('Unable to find location.Try another one');
    }else{
        const latitude =  response.body.features[0].center[0]
        const longitude= response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
    
}) */



const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js');
const address = process.argv[2];
if(! address){
    console.log('Please provide the address')
}
else{
    geocode(address, (error, {latitude, longitude,location})=>{
        if(error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(location);
            console.log(forecastData)
        })

    })

}
