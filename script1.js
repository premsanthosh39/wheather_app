const form = document.getElementById('wheatherform');
const cityInput = document.getElementById('typeCity');
const wheatherresult = document.getElementById('wheatherResults');

const API_KEY = 'be650d2151fdd92190a6450ef466dcbd';

form.addEventListener('submit',async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if(!city){
        wheatherresult.innerHTML = '<p>please enter the city name.</p>';
        return;
    }
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`   
            );
    if(!response.ok){
        throw new error('City Is Not Found');
    }
    const data = await response.json();
    wheatherresult.innerHTML = `
    <h2>${data.name},${data.sys.country}</h2>
    <div class="results">
        <div class="wheatherResult">
            <i class="fa-solid fa-temperature-three-quarters"></i>
            <p>Temperature : ${data.main.temp}Degree Celsius</p>
        </div>
        <div class="wheatherResult">
            <i class="fa-solid fa-temperature-half"></i>
            <p>Wheather : ${data.weather[0].description}</p>
        </div>
        <div class="wheatherResult">
            <i class="fa-solid fa-droplet"></i>
            <p>Humidity : ${data.main.humidity}%</p>
        </div>
        <div class="wheatherResult">
            <i class="fa-solid fa-wind"></i>
            <p>Wind Speed : ${data.wind.speed}m/s</p>
        </div>
    </div>
    `
    }
    catch(error){
        wheatherresult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});