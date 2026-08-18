var monthNames = ["January", "February", "March", "April", "May", "June", "Minerve", "Cerese", "Brume", "Angerune"]
function tornadoClicked(e) {
    console.log(e)
    var prop = e.sourceTarget.feature.properties
    var txtTime = ""
    var txtDate = ""
    var txtWindspeed = ""
    var txtWidth = ""
    var txtLength = ""
    var txtDuration = ""
    var txtDeaths = ""
    var txtInjuries = ""
    if (prop.hour != -99) {
        txtTime = numLeng(prop.hour, 2) + ":" + numLeng(prop.minute, 2) + " " + prop.timezone + " "
    }
    if (prop.month != -99 && prop.day != -99) {
        txtDate = prop.day + " " + monthNames[prop.month-1] + " " + prop.year
    }
    if (prop.month != -99 && prop.day == -99) {
        txtDate = monthNames[prop.month-1] + " " + prop.year
    }
    if (prop.month == -99 && prop.day != -99) {
        txtDate = prop.day + " ??? " + prop.year
    }
    if (prop.month == -99 && prop.day == -99) {
        txtDate = prop.year
    }
    if (prop.windspeed != -99) {
        txtWindspeed = "<tr><th>Windspeed</th><td>" + prop.windspeed + " km/h</td></tr> "
    }
    if (prop.width != -99) {
        txtWidth = "<tr><th>Width</th><td>" + prop.width + " m</td></tr> "
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>Length</th><td>" + prop.length + " km</td></tr> "
        if (prop.duration != -99) {
            txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " min</td></tr> "
        } else {
            txtDuration = "<tr><th>Duration</th><td>?</td></tr> "
        }
    }
    if (prop.duration != -99) {
        txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " min</td></tr> "
    }
    if (prop.deaths != -99) {
        txtDeaths = "<tr><th>Deaths</th><td>" + prop.deaths + "</td></tr> "
    }
    if (prop.injuries != -99) {
        txtInjuries = "<tr><th>Injuries</th><td>" + prop.injuries + "</td></tr> "
    }
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_F" + prop.rating + "' colspan='99'><h2>EF" + prop.rating + " Tornado - " + prop.year + "/" + numLeng(prop.month, 2) + "/" + numLeng(prop.day, 2) + "</h2></th></tr></thead> <tbody><tr><th>Start time</th><td>" + txtTime + txtDate + "</td></tr> <tr><th>Rating</th><td>EF" + prop.rating + "</td></tr> " + txtWindspeed + txtWidth + txtLength + txtDuration + txtDeaths + txtInjuries + "<tr><th>Comments</th><td>" + prop.comments + "</td></tr></tbody><table>")
        .openOn(map);
}
