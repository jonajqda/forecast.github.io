window.addEventListener('load', () => {
  let temperaturaValor = document.getElementById('temperatura-valor');
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
  let ubicacion = document.getElementById('ubicacion');
  let iconoAnimado = document.getElementById('icono-animado');
  let vientoVelocidad = document.getElementById('viento-velocidad');

  document.getElementById('buscar').addEventListener('click', () => {
      const ciudad = document.getElementById('ciudad').value;

      if (ciudad) {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=734af87ad1be61e2af0b03235c9f7301`;

          fetch(url)
              .then(response => response.json())
              .then(data => {
                  let temp = Math.round(data.main.temp);
                  temperaturaValor.textContent = `${temp} ° C`;

                  let desc = data.weather[0].description;
                  temperaturaDescripcion.textContent = desc.toUpperCase();
                  ubicacion.textContent = data.name;

                  vientoVelocidad.textContent = `${data.wind.speed} m/s`;

                  
                  switch (data.weather[0].main) {
                      case 'Thunderstorm':
                          iconoAnimado.src = 'animated/thunder.svg';
                          break;
                      case 'Drizzle':
                          iconoAnimado.src = 'animated/rainy-2.svg';
                          break;
                      case 'Rain':
                          iconoAnimado.src = 'animated/rainy-7.svg';
                          break;
                      case 'Snow':
                          iconoAnimado.src = 'animated/snowy-6.svg';
                          break;
                      case 'Clear':
                          iconoAnimado.src = 'animated/day.svg';
                          break;
                      case 'Atmosphere':
                          iconoAnimado.src = 'animated/weather.svg';
                          break;
                      case 'Clouds':
                          iconoAnimado.src = 'animated/cloudy-day-1.svg';
                          break;
                      default:
                          iconoAnimado.src = 'animated/cloudy-day-1.svg';
                  }
              })
              .catch(error => {
                  console.log(error);
              });
      } else {
          alert("Por favor, introduce una ciudad.");
      }
  });
});
