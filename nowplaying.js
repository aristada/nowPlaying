// get your own last.fm api key from https://www.last.fm/api/account/create
LASTFM_API_KEY = "YOUR_API_KEY"
username = "YOUR_USERNAME_HERE" // change username here
STRING_ID = "music" // change string id here
url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&api_key=" + LASTFM_API_KEY + "&limit=1&user=" + username

// make API call
const fetchURL = async (url) => {
    var response = await fetch(url);
    return response.json();
}

const updateNowPlaying = async () => {
    var json = await fetchURL(url);
    var last_track = json.recenttracks.track[0];
    var track = last_track.name;
    var trackLink = last_track.url;
    var artist = last_track.artist['#text'];

    var now_playing = (last_track["@attr"] == undefined) ? false : true;

    var html = document.getElementById(STRING_ID);
    html.innerHTML = "🎵: " + track + " by " + artist + " - " + (now_playing ? " Now Playing" : " Last Played");
}

updateNowPlaying();
