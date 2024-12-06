async function getWeather() {
    const latitude = 32.2319;     // Latitude of Tucson AZ
    const longitude = -110.9535;   // longitude of Tucson AZ
  
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      
      const data = await response.json();
  
      // Extract needed data
      const temperatureCelsius = data.current_weather.temperature;
      const temperatureFahrenheit = (1.0 * temperatureCelsius * 9/5) + 32;
  
      // Update HTML content
      document.getElementById('weather').innerHTML = `
        <p>Temperature in Tucson, AZ:<br>${temperatureFahrenheit.toFixed(1)}°F</p>
      `;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('weather').innerHTML = `<p>Error fetching weather data.</p>`;
    }
  }
  
  // Call the function on page load
  document.addEventListener('DOMContentLoaded', getWeather);