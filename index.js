document.getElementById("submit-button").onclick = function() {
    let temp;

    if(document.getElementById("c-button").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById('temp-label').innerHTML = Math.round(temp) + "°C";
    }
    else if(document.getElementById("f-button").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById('temp-label').innerHTML = Math.round(temp) + "°F";
    }
    else {
        document.getElementById('temp-label').innerHTML = "Select a unit";
    }
}

function toCelcius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9/5 + 32;
}