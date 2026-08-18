var monthsStartDayOfYear = [0, 13, 25, 38, 51, 64, 77, 90, 103, 116] // is 1 lower because day of month will make up for it

var seasonMIN = -Math.pow(2, 32);
var seasonMAX = Math.pow(2, 32);

var yearMIN = -Math.pow(2, 32);
var yearMAX = Math.pow(2, 32);

var monthMIN = 1;
var monthMAX = 10;

var dayMIN = 1;
var dayMAX = 13;

var hourMIN = -99;
var hourMAX = 23;

var minuteMIN = -99;
var minuteMAX = 59;

var windspeedMIN = -Math.pow(2, 32);
var windspeedMAX = Math.pow(2, 32);

var ratingALLOW = {
    "U":true,
    "0":true,
    "1":true,
    "2":true,
    "3":true,
    "4":true,
    "5":true,
    "6":true,
}

var timezoneALLOW = {
    MVT:true,
    EHR:true,
    ESP:true,
    ENG:true,
    WFA:true,
    JSA:true,
    ERU:true,
    CLA:true,
}

var widthMIN = -Math.pow(2, 32);
var widthMAX = Math.pow(2, 32);

var lengthMIN = -Math.pow(2, 32);
var lengthMAX = Math.pow(2, 32);

var durationMIN = -Math.pow(2, 32);
var durationMAX = Math.pow(2, 32);

var deathsMIN = -Math.pow(2, 32);
var deathsMAX = Math.pow(2, 32);

var injuriesMIN = -Math.pow(2, 32);
var injuriesMAX = Math.pow(2, 32);