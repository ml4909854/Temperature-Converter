const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celcius":
      kelvin.value = currentValue + 273.32;
      fahrenheit.value = currentValue * 1.8 + 32;
      break;
    case "fahrenheit":
      celcius.value = (currentValue - 32) / 1.8;
      kelvin.value = (currentValue - 32) / 1.8 + 273.32;

      break;
    case "kelvin":
      celcius.value = currentValue - 273 - 32;
      fahrenheit.value = (currentValue - 273.31) * 1.8 + 32;

      break;
    default:
      break;
  }
}
