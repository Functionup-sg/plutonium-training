const axios = require("axios")

let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getTemperature = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let cityByTemp = async function (req, res) {
    try {
        cityList = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        let arr = []
        for (city of cityList) {
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            }
            let result = await axios(options)
            let data = result.data.main.temp
            arr.push({ city: city, temp: data })
        }
        arr.sort((a, b) => {
            return a.temp - b.temp;
        });
        res.status(200).send({ temp: arr, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather
module.exports.getTemperature = getTemperature
module.exports.cityByTemp = cityByTemp