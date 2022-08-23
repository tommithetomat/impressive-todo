import WeatherService from '../weatherService/WeatherService'
import { Component } from 'react';
import './weather.scss'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.updateWeather();
  }

  state = {
    weath: {}
  }

  weatherService = new WeatherService();

  onWeatherLoaded = (weath) => {
    this.setState({weath})
  }

  updateWeather = () => {
    this.weatherService
        .getAllWeatherParam()
        .then(this.onWeatherLoaded)
  } 

  render() {
    const {weath: {weather_id, weather_icon, temp, feels_like}} = this.state;
    const weather_descrRU = () => {
      switch(weather_id) { 
        case 200: return 'Гроза с маленьким дождем'
        case 201: return 'Гроза с дождем'
        case 202: return 'Гроза с сильным дождем'
        case 210: return 'Легкая гроза'
        case 211: return 'Гроза'
        case 212: return 'Сильная гроза'
        case 221: return 'Рваная гроза'
        case 230: return 'Гроза с мелким дождем'
        case 231: return 'Гроза с моросью'
        case 232: return 'Гроза с сильным моросящим дождем'
        case 300: return 'мелкая морось'
        case 301: return 'морось'
        case 302: return 'морось сильная интенсивность'
        case 310: return 'мелкий дождь изморось'
        case 311: return 'моросящий дождь'
        case 312: return 'сильный моросящий дождь'
        case 313: return 'ливень дождь и изморось'
        case 314: return 'сильный ливень с дождем и изморосью'
        case 321: return 'моросящий дождь'
        case 500: return 'легкий дождь'
        case 501: return 'умеренный дождь'
        case 502: return 'сильный интенсивный дождь'
        case 503: return 'очень сильный дождь'
        case 504: return 'сильный дождь'
        case 511: return 'холодный дождь'
        case 520: return 'слабый ливень дождь'
        case 521: return 'душ дождь'
        case 522: return 'сильный ливневый дождь'
        case 531: return 'рваный душ дождь'
        case 600: return 'легкий снег'
        case 601: return 'Снег'
        case 602: return 'Сильный снегопад'
        case 611: return 'мокрый снег'
        case 612: return 'Слабый дождь с мокрым снегом'
        case 613: return 'Мокрый дождь'
        case 615: return 'Небольшой дождь и снег'
        case 616: return 'Дождь и снег'
        case 620: return 'Слабый ливневый снег'
        case 621: return 'Снежный душ'
        case 622: return 'Сильный ливневый снег'
        case 701: return 'туман'
        case 721: return 'туман'
        case 741: return 'туман'
        case 711: return 'Дым'
        case 731: return 'песчаные/пылевые вихри'
        case 751: return 'Песок'
        case 761: return 'Пыль'
        case 762: return 'Вулканический пепел'
        case 771: return 'Шквал'
        case 781: return 'торнадо'
        case 800: return 'Ясное небо'
        case 801: return 'Облачно'
        case 802: return 'Облачно'
        case 803: return 'Облачно'
        case 804: return 'Облачно'
        default: return ''
      }
    }
    const url = `http://openweathermap.org/img/wn/${weather_icon}@4x.png`;
    const options = {  year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',timezone: 'UTC'}
    const nowDate = new Date().toLocaleString("ru", options).toUpperCase();
    return (
        <div className="weather-card">
          <div className="date">{nowDate}</div>
          <div className="icon_weather"><img src={url} alt="icon_weather"/></div>
          <div className="weather_description">НА УЛИЦЕ: {weather_descrRU().toUpperCase()}</div>
          <div className="temperature">ТЕМПЕРАТУРА: {Math.round(temp)} °C</div>
          <div className="t_feels">ОЩУЩАЕТСЯ КАК: {Math.round(feels_like)} °C</div>
        </div>
    )
  }
}

export default Weather;