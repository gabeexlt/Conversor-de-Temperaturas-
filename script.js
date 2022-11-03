const celsiusT = document.getElementById("celsius");
const fahrenheitT = document.getElementById("fahrenheit");
const kelvinT = document.getElementById("kelvin");
const rankineT = document.getElementById("rankine");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) 
        {
            case "celsius":
                fahrenheitT.value = (value * 1.8) + 32;
                kelvinT.value = value + 273.15;
                rankineT.value = ((value *9)/5)+491.67;
                break;
            
                case "fahrenheit":
                celsiusT.value = (value - 32) / 1.8;
                kelvinT.value = ((value - 32) / 1.8) + 273.15;
                rankineT.value = value + 459.67;
                break;
            
                case "kelvin":
                celsiusT.value = value - 273.15;
                fahrenheitT.value = ((value - 273.15) * 1.8) + 32;
                rankineT.value = value * 1.8;
                break;
            
                case "rankine":
                celsiusT.value = ((value - 491.67)*5/9);
                fahrenheitT.value = value - 459.67;
                kelvinT.value = (value * 5)/9 ;

        
        }
    });
}