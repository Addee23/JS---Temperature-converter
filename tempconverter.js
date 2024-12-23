document.getElementById('convert-btn').addEventListener('click', () => {
    let celsius = parseFloat(prompt(`Enter the temperature in Celsius:`));
    
    if (!isNaN(celsius)) {
      let fahrenheit = (celsius / 5) * 9 + 32;
      alert(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else {
      alert("Please enter a valid number for Celsius!");
    }
  
    let nyFahrenheit = parseFloat(prompt(`Enter the temperature in Fahrenheit:`));
    
    if (!isNaN(nyFahrenheit)) {
      let celsiusNy = (nyFahrenheit - 32) * 5 / 9;
      alert(`${nyFahrenheit}°F is equal to ${celsiusNy.toFixed(2)}°C`);
    } else {
      alert("Please enter a valid number for Fahrenheit!");
    }
  });
  