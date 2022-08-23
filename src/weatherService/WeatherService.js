class WeatherService {
  _apiBase = 'https://api.openweathermap.org/data/2.5/weather?lat=55&lon=37&appid='
  _apiKey = '1aefba68b1740e495d3fb4950e98a436'

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllWeatherParam = async () => {
    const res = await this.getResource(`${this._apiBase}${this._apiKey}&units=metric`)

    return this._transformWeather(res);

  }

    _transformWeather = (weath) => {
      return {
        temp: weath.main.temp,
        feels_like: weath.main.feels_like,
        weather_descr: weath.weather[0].description,
        weather_main: weath.weather[0].main,
        weather_id: weath.weather[0].id,
        weather_icon: weath.weather[0].icon,
        icon: weath.weather[0].icon
      }
    }

}

export default WeatherService;