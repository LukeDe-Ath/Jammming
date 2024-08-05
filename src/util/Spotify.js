const client_id = '2a8b92f51b3d4aca95afbf37a978859b';
const redirect_uri = 'http://192.168.4.137:3000/'
let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
          return accessToken;
        }
    
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-private&redirect_uri=${redirect_uri}`;
          window.location = accessUrl;
        }
      },
    search(term) {
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&limit=10&q=${term}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(item => ({
                id: item.id,
                name: item.name,
                artist: item.artists[0].name,
                album: item.album.name,
                uri: item.uri,
                explicit: item.explicit
            }))
        })
    },
    savePlaylist(uris, playlistName) {
        if (!playlistName || !uris.length) {
            return;
        }

        const token = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${token}` }
        let user_id;

        // Get user ID
        return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
        .then(response => response.json())
        .then(jsonResponse => {
            user_id = jsonResponse.id;
            // Create playlist
            return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
                headers: headers,
                method: "POST",
                body: JSON.stringify({
                    name: playlistName,
                    description: "Playlist created with Jammming",
                    public: false
                })
            })
            .then(res => res.json())
            .then(jsonResponse => {
                const playlist_id = jsonResponse.id;
                // Add tracks to playlist
                return fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({uris: uris})
                })
            })
        })
    }
}

export default Spotify;