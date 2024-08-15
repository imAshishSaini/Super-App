import axios from "axios"

const BASE_URL = "https://api.weatherapi.com/v1"
const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;

const fetchWeather = async (city = "Mumbai") => {

    try {
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchWeather