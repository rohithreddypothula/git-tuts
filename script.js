const form =document.querySelector('form');
const searchField = document.querySelector('.searchField')

const tempratureField = document.querySelector('.temp')
const cityField = document.querySelector('.time_location p')
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather-icon img");
const weatherField = document.querySelector(".weather_condition span");
let target = 'Mumbai'





form.addEventListener('submit' , search)

function search(e){
    e.preventDefault( );
    target =searchField.value
    console.log(target)
    fetchData(target);

}

// process 
 


async function fetchData(target){
    const endPoint = `http://api.weatherapi.com/v1/current.json?key=3c5b51ded72340a39a8122524251307&q=${target}&aqi=no`;
    console.log(endPoint);
    // fetch method
     const response = await fetch(endPoint);
     const data = await response.json();
     console.log(response)
     console.log(data)

     let currTemp= data.current.temp_c;
     let cityName= data.location.name;
     let localTime = data.location.localtime;
     let condition = data.current.condition.text;
     let conditionIcon = data.current.condition.icon;

     updateWeather(currTemp , cityName , localTime , condition , conditionIcon)

    function updateWeather(currTemp , cityName , localTime , condition , conditionIcon)
     {
        tempratureField.innerText = currTemp
        cityField.innerText = cityName
        dateField.innerText = time
        weatherField.innerText = currentCondition
        emojiField.src = conditionLogo
    }
}   
