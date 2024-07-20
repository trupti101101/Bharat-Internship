const apiKey = 'YOUR_API_KEY'; 
// Replace with your API key from OpenWeatherMap!

async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            const weather = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather').innerHTML = weather;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error in fetching data. Please try again.</p>`;
    }
}
