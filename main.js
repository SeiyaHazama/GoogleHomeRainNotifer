/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const home = require("google-home-notifier");
const request = require('request');

let url = "https://map.yahooapis.jp/weather/V1/place";

home.device("Your GoogleHome name");
home.ip("IP address of GoogleHome");

request.get({
    uri: url,
    headers: {'Content-type': 'application/json'},
    qs: {
        output: "json",
        coordinates: "longitude,latitude",
        appid: "Your Application ID"
    },
    json: true
}, function (err, req, data) {
    let weather_raw = data.Feature[0].Property.WeatherList.Weather;
    let flg = false;
    for (var i = 0; i < weather_raw.length; i++) {
        if (weather_raw[i].Rainfall > 0) {
            let msg = "Message of rain with in 60 min";
            flg = true;
            home.notify(msg, (res) => {
                console.log(res);
            });
            break;
        }
    }
});
