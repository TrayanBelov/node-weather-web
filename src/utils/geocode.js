const request= require('request')

const geocode =(address, callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiemFwLXJvZ3JhbSIsImEiOiJjbDU5bGdqMmgweTY1M2RxbDdlbG9hM2Y1In0.T93OKWLzABMkdIbJWKX-8A&limit=1'

    request({url, json: true}, (error, {body})=>{
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else if (body.features.length===0) {
            callback('Unable to find location. Try someting else',undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
 }

 module.exports= geocode