const request = require('request');


const geocode = (address, callback)=>{
    const url= 'http://api.mapbox.com/geocoding/v5/mapbox.places/' +address +'.json?access_token=pk.eyJ1IjoiZGlwZXNoMDEiLCJhIjoiY2twbDVmZDVmM2U5ZDJvbGE2ZzhiZHlyeCJ9.P2kmefK8sT1JDH8KCD2chg&limit=1'
    request({url, json: true}, (error, {body})=>{
        
        if(error){
            callback('Cannot connect to the location ', undefined)
        }else if(body.features.length === 0){
            callback('Cannot find the location. Try another one', undefined)
        }else{
            callback(undefined, {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }

    })
}
module.exports = geocode;


