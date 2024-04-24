
let searchValue= document.getElementById('searchValue')
let temperature = document.getElementById('temperature')
let cityName = document.getElementById('cityName')
let countryName = document.getElementById('cityCountry')

let detail = document.getElementsByClassName('detail')
let ima= document.getElementById('inf')

let Search  = async() =>{
    if (searchValue.value.length==0) {
        alert('please enter a city name before search')
        
    } else {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
         let respone = await fetch(url)
         let data = await respone.json()

         temperature.textContent =data.main.temp
        cityName.textContent =data.name
        countryName.textContent = data.sys.country
        detail[0].textContent = data.main.temp_min
        detail[2].textContent = data.main.temp_max
        detail[1].textContent =data.main.humidity
        detail[3].textContent = data.main.pressure
       

        if (data.main.temp > 30) {
        ima.style.backgroundImage ="url('./img/hotday.jpg')"
        }

        else if(data.main.temp >= 20 && data.main.temp <= 30 ){
           ima.style.backgroundImage= "url('./img/clear-sky.jpg')"
        }
        else if(data.main.temp>= 10 && data.main.temp < 20){
            ima.style.backgroundImage="url('./img/breeze.jpg')"
        }
        else {
            ima.style.backgroundImage="url('./img/snow_fall.jpg')"
        }
    }

}
