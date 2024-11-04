exports.celsiusToFahrenheit = function (celsius){
 return celsius*(9/5)+32
}

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)*(5/9))
 }   
}

exports.getGreetingDependOnTime =  function (myDate) {
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


