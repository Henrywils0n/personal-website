/* eslint-disable import/prefer-default-export */
const clientId = '55eab5d239d44c1398e1d4966a9a8e93';
const clientSecret = '8bd1a87eeecd4e26a31c71e100bfead3';

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

async function getPlaylist(accessToken, playlistId) {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  const playlist = await response.json();
  return playlist.tracks.items.map((item) => {
    const { track } = item;
    return {
      name: track.name,
      albumCover: track.album.images[0]?.url,
      artist: track.artists.map((artist) => artist.name).join(', '),
      popularity: track.popularity,
    };
  });
}

export { getAccessToken, getPlaylist };
