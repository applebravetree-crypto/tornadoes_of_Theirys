var stylesPerF = {
    "U": styles_FU,
    "0": styles_F0,
    "1": styles_F1,
    "2": styles_F2,
    "3": styles_F3,
    "4": styles_F4,
    "5": styles_F5,
    "6": styles_F6,
}
var StartMarkersPerF = {
    "U": FU_StartMarkers,
    "0": F0_StartMarkers,
    "1": F1_StartMarkers,
    "2": F2_StartMarkers,
    "3": F3_StartMarkers,
    "4": F4_StartMarkers,
    "5": F5_StartMarkers,
    "6": F6_StartMarkers,
}
var OIS_perF = {
    "U": 0,
    "0": 0,
    "1": 0,
    "2": 2,
    "3": 5,
    "4": 10,
    "5": 15,
    "6": 15,
}
function tornado_constructor (parent, layer) {
    totalTornadoes += 1;
    var prop = layer.feature.properties
    totalDeaths += prop.deaths;
    totalInjuries += prop.injuries;
    totalLength += prop.length;
    totalDuration += prop.duration;
    totalOIS += OIS_perF[prop.rating];
    var style = stylesPerF[prop.rating]
    var StartMarker = StartMarkersPerF[prop.rating]
    var satisfiesDate = false
    if ((prop.year + (monthsStartDayOfYear[prop.month-1]/130) + (prop.day/130) >= yearMIN + (monthsStartDayOfYear[monthMIN-1]/130) + (dayMIN/130)) && (prop.year + (monthsStartDayOfYear[prop.month-1]/130) + (prop.day/130) <= yearMAX + (monthsStartDayOfYear[monthMAX-1]/130) + (dayMAX/130))) {
        satisfiesDate = true
    }
    if ((prop.season >= seasonMIN && prop.season <= seasonMAX) && satisfiesDate && ((prop.hour+(prop.minute/60)) >= (hourMIN+(minuteMIN/60)) && (prop.hour+(prop.minute/60)) <= (hourMAX+(minuteMAX/60))) && (prop.windspeed >= windspeedMIN && prop.windspeed <= windspeedMAX) && (prop.width >= widthMIN && prop.width <= widthMAX) && (prop.length >= lengthMIN && prop.length <= lengthMAX) && (prop.duration >= durationMIN && prop.duration <= durationMAX) && (prop.deaths >= deathsMIN && prop.deaths <= deathsMAX) && (prop.injuries >= injuriesMIN && prop.injuries <= injuriesMAX)) {
        layer.options.smoothFactor = 0;
        layer.setStyle(style)
        var start = L.polyline([[layer.feature.geometry.coordinates[0][1], layer.feature.geometry.coordinates[0][0]],[layer.feature.geometry.coordinates[0][1], layer.feature.geometry. coordinates[0][0]]])
            .setStyle(styles_StartMarker)
            .addTo(StartMarker);
        layer.on("click", tornadoClicked)
    } else {
        parent.removeLayer(layer);
    }
}