// declaring a variable and assigning a value
const kelvin = 0;

// converting kelvin to celsius and assigning it to a variable
const celsius = kelvin - 273;

// converting celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// rounding the value down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



// Converting to Newton
let newton = celsius * (33 / 100);

// Rounding down the value to the neares whole number
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);