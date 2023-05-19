// get your own last.fm api key from https://www.last.fm/api/account/create
LASTFM_API_KEY = "YOUR_KEY_HERE"
username = "YOUR_USERNAME_HERE" // change username here
url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&api_key=" + LASTFM_API_KEY + "&limit=1&user=" + username

// make API call
function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}



var json = JSON.parse(httpGet(url))
var last_track = json.recenttracks.track[0]
var track = last_track.name
var trackLink = last_track.url
var artist = last_track.artist['#text']

var now_playing = (last_track["@attr"] == undefined) ? false : true

var html = document.getElementById("music");
html.innerHTML = "𝅘𝅥𝅮: " + last_track.name + " by " + last_track.artist['#text'] + " - " +  (now_playing ? " Now Playing" : " Last Played");

console.log(
    "Artist: " + artist + "\n" +
    "Track: " + track + "\n" +
    "Now playing: " + now_playing)