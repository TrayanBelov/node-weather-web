const request= require('request')

const forecast=(latitude, longitude, callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=e9d365875aae690794d2d609b383a113&query='+longitude+','+latitude
    

     request({url, json: true}, (error, {body})=>{
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        }else if (body.error) {
            console.log(body.error)
            callback('Unable to find location. Try someting else',undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]+'. The temerature is '+body.current.temperature+'. It feels like '+body.current.feelslike+'. The humidity is '+body.current.humidity+'%.')
            
        }
    })
}

module.exports= forecast
