const apiKey = 'f2173df1f9ef0d3dc7f4c1ecaeed7e3e'
let _waether = document.getElementsByClassName('weather')[0]
let _city = document.getElementsByClassName('cityName')[0]
let _temperature = document.getElementsByClassName('temperature')[0]
let _humidity = document.getElementsByClassName('humidity')[0]
let _img = document.getElementById('img')
let _date = document.getElementsByClassName('date')[0]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function _weather() {
    let cityValue = document.getElementById("city").value
    if (cityValue == '') {
        document.getElementById("city").placeholder = 'Please enter your city!'
    } else {
        // const d = new Date();
        // let day = days[d.getDay()];
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
            .then(res => res.json()
                .then(val => {
                    console.log(val);
                    // _date.innerHTML = day
                    _waether.innerHTML = val.weather[0].main
                    _city.innerHTML = val.name
                    _temperature.innerHTML = '+' + parseInt(val.main.temp) + '°C'
                    _humidity.innerHTML = val.main.humidity + '%'
                    _img.src = './img/' + val.weather[0].main + '.png'
                }))
    }
}
function _today() {
    const d = new Date();
    let day = days[d.getDay()];
    _date.innerHTML = day

}
