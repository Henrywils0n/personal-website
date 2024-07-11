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

async function getPlaylist(accessToken, playlistId, nextUrl = null, accumulatedTracks = []) {
  const url = nextUrl || `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();

  const tracks = data.items.map((item) => {
    const { track } = item;
    return {
      name: track.name,
      albumCover: track.album.images[0]?.url,
      artist: track.artists.map((artist) => artist.name).join(', '),
      popularity: track.popularity,
    };
  });

  // eslint-disable-next-line no-param-reassign
  accumulatedTracks = [...accumulatedTracks, ...tracks];

  if (data.next) {
    return getPlaylist(accessToken, playlistId, data.next, accumulatedTracks);
  }

  return accumulatedTracks;
}

export { getAccessToken, getPlaylist };
