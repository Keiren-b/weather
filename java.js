const send = document.getElementById('send')
const heading = document.getElementById('heading')
const city = document.getElementById('location')
const current = document.getElementById('current')
const container = document.getElementById('container')


async function getForecast(location){
  let neededData = {
    currentTemp:'',
    one:'',
    two:'',
    three:'',
    four:'',
    five:'',
    six:'',
    seven:''
  }
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=c2bf2d0f988a436496d74444231308&q='+location+'&days=7&aqi=no&alerts=no', {mode: 'cors'})
  const weatherData = await response.json();
  const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  console.log(weatherData)
  neededData.currentTemp = weatherData.current.temp_c
  console.log(neededData)

  for (let i=0; i<7; i++){
  container.childNodes[i].textContent = daysOfWeek[new Date(weatherData.forecast.forecastday[i].date).getDay()]
}
  for (let i=0; i<7; i++){
    container.childNodes[i+7].textContent = weatherData.forecast.forecastday[i].day.avgtemp_c + ' °C'
  }
}
// getWeather('London')

function getCity() {
  let currentCity = city.value
  return currentCity
}

function render() {
  heading.textContent = "The forcast for "+ getCity()+' is...'
}

send.addEventListener('click', ()=>{
  getForecast(getCity())
})


