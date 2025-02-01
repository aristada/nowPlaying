// Read README for extra info

const API_KEY = "<YOUR_API_KEY>"
const username = "<YOUR_USERNAME_HERE>"
TYPE_ID = "music"
API_LINK = "https://ws.audioscrobbler.com/"
API_VERSION = "2.0"
METHOD = "user.getrecenttracks"
url = `${API_LINK}${API_VERSION}/?method=${METHOD}&format=json&api_key=${API_KEY}&limit=1&user=${username}`

const fetchURL = async (url) => {
    let response = await fetch(url);
    return response.json();
}

const updateNowPlaying = async () => {
    const json = await fetchURL(url);
    const last_track = json.recenttracks.track[0];
    const track = last_track.name;
    const trackLink = last_track.url;
    const artist = last_track.artist['#text'];
    const now_playing = (!last_track["@attr"]) ? false : true;

    let html = document.getElementById(STRING_ID);
    html.innerHTML = `🎵: ${track} by ${artist} - ${now_playing ? "Now Playing" : "Last Played"}`;
}

updateNowPlaying();
