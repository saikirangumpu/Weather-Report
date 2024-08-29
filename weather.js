const axios = require('axios')
const prompt = require('prompt-sync')()

const API_KEY = 'b5793bb561da2eaa815397e406c01a3e'
const URL = 'http://api.weatherstack.com/current'

async function getWeather(location) {
  try {
    const response = await axios.get(URL, {
      params: {
        access_key: API_KEY,
        query: location,
      },
    })

    const data = response.data

    if (data.error) {
      console.log(`Error: ${data.error.info}`)
    } else {
      console.log(
        `Current weather in ${data.location.name}, ${data.location.country}:`,
      )
      console.log(`Temperature: ${data.current.temperature}°C`)
      console.log(`Weather: ${data.current.weather_descriptions[0]}`)
      console.log(`Humidity: ${data.current.humidity}%`)
      console.log(`Wind Speed: ${data.current.wind_speed} km/h`)
    }
  } catch (error) {
    console.error(`Error fetching weather data: ${error.message}`)
  }
}

const location = prompt('Enter a city or location: ')
getWeather(location)
