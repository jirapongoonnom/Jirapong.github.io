function Temperature() {
    var Typetemp1 = document.getElementById('Typetem1').value;
    var Typetemp2 = document.getElementById('Typetem2').value;
    var x = document.getElementById('Temperature1').value;
    var Total;
    var unit;
    if (Typetemp2 == 'Celsius') {
        unit = ' °C'
    }
    else if (Typetemp2 == 'Fahrenheit') {
        unit = ' °F'
    }
    else if (Typetemp2 == 'Kelvin') {
        unit = ' K'
    }

    if (Typetemp1 == Typetemp2) {
        document.getElementById('Temperature2').value = x + unit;
    }
    else if (Typetemp1 == 'Celsius' && Typetemp2 == 'Fahrenheit') {
        Total = (x * 9 / 5) + 32;
        document.getElementById('Temperature2').value = Total + '°F';
    }
    else if (Typetemp1 == 'Celsius' && Typetemp2 == 'Kelvin') {
        Total = x + 273.15;
        document.getElementById('Temperature2').value = Total + 'K';
    }
    else if (Typetemp1 == 'Fahrenheit' && Typetemp2 == 'Celsius') {
        Total = (x - 32) * 5 / 9;
        document.getElementById('Temperature2').value = Total + '°C';
    }
    else if (Typetemp1 == 'Fahrenheit' && Typetemp2 == 'Kelvin') {
        Total = (x - 32) * 5 / 9 + 273.15;
        document.getElementById('Temperature2').value = Total + 'K';
    }
    else if (Typetemp1 == 'Kelvin' && Typetemp2 == 'Celsius') {
        Total = x - 273.15
        document.getElementById('Temperature2').value = Total + '°C';
    }
    else if (Typetemp1 == 'Kelvin' && Typetemp2 == 'Fahrenheit') {
        Total = (x - 273.15) * 9 / 5 + 32

        document.getElementById('Temperature2').value = Total + '°F';
    }
}


function Measurement() {
    var Measure1 = document.getElementById('Measure1').value;
    var Measure2 = document.getElementById('Measure2').value;
    var x = document.getElementById('Measurement1').value;
    var Total;
    var unit;

    if (Measure2 == 'Centimeters') {
        unit = ' cm';
    }
    else if (Measure2 == 'Millimeter') {
        unit = ' mm';
    }
    else if (Measure2 == 'Inches') {
        unit = ' in';
    }

    if (Measure1 == Measure2) {
        document.getElementById('Measurement2').value = x + unit;
    }
    else if (Measure1 == 'Centimeters' && Measure2 == 'Millimeter') {
        Total = (x / 0.10000)
        document.getElementById('Measurement2').value = Total + unit;
    }
    else if (Measure1 == 'Centimeters' && Measure2 == 'Inches') {
        Total = (x * 0.39370)
        document.getElementById('Measurement2').value = Total + unit;
    }
    else if (Measure1 == 'Millimeter' && Measure2 == 'Centimeters') {
        Total = (x * 0.10000)
        document.getElementById('Measurement2').value = Total + unit;
    }
    else if (Measure1 == 'Millimeter' && Measure2 == 'Inches') {
        Total = (x * 0.039370)
        document.getElementById('Measurement2').value = Total + unit;
    }
    else if (Measure1 == 'Inches' && Measure2 == 'Centimeters') {
        Total = (x / 0.39370)
        document.getElementById('Measurement2').value = Total + unit;
    }
    else if (Measure1 == 'Inches' && Measure2 == 'Millimeter') {
        Total = (x / 0.039370)
        document.getElementById('Measurement2').value = Total + unit;
    }
}

function Bmi() {
    var Weight = document.getElementById('Weight').value;
    var Height = document.getElementById('Height').value;
    var totalB = Weight/((Height*0.01)*2)
    document.getElementById('BMIranges').value = totalB.toFixed(2)
    if (totalB > 30) {
        document.getElementById('ranges').value = 'Obesity';
    }
    else if (totalB < 30 && totalB > 25) {
        document.getElementById('ranges').value = 'Overweight';
    }
    else if (totalB < 25 && totalB > 18.5) {
        document.getElementById('ranges').value = 'Healthy Weight';
    }
    else if (totalB < 18.5 ) {
    document.getElementById('ranges').value = 'Underweight';
     }
 
 
 
}


