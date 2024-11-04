const powerButton = document.getElementById("display");

let temperature = 21, mode = "summer", level = 0, isOn = true;


const dateObj = document.getElementById("date");
const temperatureObj = document.getElementById("temperature");
const levelObj = document.getElementById("level");
const modusObj = document.getElementById("modus");

document.getElementById("on-off-button").addEventListener("click", turnOnOff);
document.getElementById("level-button").addEventListener("click", levelChange);
document.getElementById("mode-button").addEventListener("click", modeChange);
document.getElementById("plus-button").addEventListener("click", increaseTemperature);
document.getElementById("minus-button").addEventListener("click", decreaseTemperature);

const time = () => setInterval(updateTime, 1000)

function updateTime() {
    dateObj.innerText = new Date().toLocaleString('en-GB', {timeZone: 'UTC'}) + " - "
        + getGreetingDependOnTime(new Date());
}

time();

function turnOnOff() {
    isOn = !isOn;
    updateDisplay();
}

function updateDisplay() {
    if (!isOn) {
        temperatureObj.innerText = `Temperatur: ${temperature} Celsius`
        levelObj.innerText = `Level: ${level}`
        modusObj.innerText = `Modus: ${mode}`
    } else {
        temperatureObj.innerText = ""
        levelObj.innerText = ""
        modusObj.innerText = ""
    }
}


getGreetingDependOnTime =  function (myDate) {
    let timeMorning = '05:00';
    let timeDay = '12:00';
    let timeEvening = '18:00';

    const dateMorningStart = new Date('2020-01-01 ' + timeMorning);
    const dateDayStart = new Date('2020-01-01 ' + timeDay);
    const dateEveningStart = new Date('2020-01-01 ' + timeEvening);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());


    if (dateCurrent.getTime() >= dateMorningStart.getTime() && dateCurrent.getTime() < dateDayStart.getTime()) {
        return "Guten Morgen"
    }
    else if (dateCurrent.getTime() >= dateDayStart.getTime() && dateCurrent.getTime() < dateEveningStart.getTime()){
        return "Guten Tag"
    }
    else {
        return "Guten Abend"
    }
} 

/*getGreetingDependOnTime = function (myDate) {
    let morningBegin = '06:00';
    let dayTimeBegin = '12:00';
    let eveningBegin = '18:00';
    let nightBegin = '22:00';

    const datemorningBegin = new Date('2020-01-01T' + morningBegin);
    const dateDayTimeBegin = new Date('2020-01-01T' + dayTimeBegin);
    const dateEveningBegin = new Date('2020-01-01T' + eveningBegin);
    const dateNightBegin = new Date('2020-01-01T' + nightBegin);

    const dateCurrent = new Date('2020-01-01T' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateCurrent.getTime() >= datemorningBegin.getTime() && dateCurrent.getTime() < dateDayTimeBegin.getTime()) {
        return "Guten Morgen";
    } 
    else if (dateCurrent.getTime() >= dateDayTimeBegin.getTime() && dateCurrent.getTime() < dateEveningBegin.getTime()) {
        return "Guten Tag";
    }
     else if (dateCurrent.getTime() >= dateEveningBegin.getTime() && dateCurrent.getTime() < dateNightBegin.getTime()) {
        return "Guten Abend";
    } 
    else {
        return "Gute Nacht";
    }
}*/



function increaseTemperature() {
    temperature--;
    updateDisplay();
}

function decreaseTemperature() {
    temperature++;
    updateDisplay();
}

function levelChange() {
    switch (level) {
        case 0:
            level = 1;
            break;
        case 1:
            level += 1;
            break;
        case 2:
            level++;
            break;
        default:
            level -= 3;
            break;
    }
    updateDisplay();
}

function modeChange() {
    mode == "summer" ? mode = "winter" : mode = "summer"
    updateDisplay();
}