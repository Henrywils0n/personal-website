import React, { useState, useEffect } from 'react';
import { getAccessToken, getPlaylist } from '../../utils/spotify';

const { PUBLIC_URL } = process.env;

const Spotify = () => {
  const [bearerToken, setBearerToken] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [randomTrack, setRandomTrack] = useState(null);
  const [selectPlaylist, setSelectPlaylist] = useState(null);
  const [selectTrack, setSelectTrack] = useState(null);

  const playlistMap = {
    Rock: '2aBBzw32kfI6FuayPhJqO4',
    Summer: '5WAeabO3SsVhhIWLgMD52Y',
    Alternative: '1sRhFbnzhTv7RQLKGckSqg',
    'Punk Rock': '4zbk9OFoT9PfmidYDA7mcu',
    'Yacht Rock': '1XzcWLbmd12wV6Q6c4zaE8',
    EDM: '1AXE9XeKp1wExSGVqhztwm',
  };

  const handleRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    setRandomTrack(playlist[randomIndex]);
  };

  const handleSelectTrack = () => {
    const randomIndex = Math.floor(Math.random() * selectPlaylist.length);
    setSelectTrack(selectPlaylist[randomIndex]);
  };

  useEffect(() => {
    getAccessToken().then((token) => {
      setBearerToken(token);
      getPlaylist(token, '5oz1Md6FdhZLcpMeezKmyO').then((data) => {
        setPlaylist(data);
      }).catch((error) => console.error('Error fetching playlist:', error));
    });
  }, []);

  useEffect(() => {
    if (selectPlaylist && selectPlaylist.length > 0) {
      handleSelectTrack();
    }
  }, [selectPlaylist]);

  const handleGenreChange = async (e) => {
    try {
      getPlaylist(bearerToken, playlistMap[e.target.value]).then((data) => {
        setSelectPlaylist(data);
      }).catch((error) => console.error('Error fetching playlist:', error));
    } catch (error) {
      console.error('Error fetching genre playlist:', error);
    }
  };

  return (
    <article className="spotify">
      <header>
        <h2> Get to know my music </h2>
        <a href="https://open.spotify.com/user/lwirz0qqyyh2kwexvuj9prhxa" target="_blank" rel="noopener noreferrer">
          <img className="spotify-logo" src={`${PUBLIC_URL}/images/spotify.png`} alt="Spotify Logo" />
        </a>
      </header>
      <p className="blurb">
        I have always loved music.
        In fact, as a kid I played the drums and have since been trying to learn the guitar.
        It is not going particularly well.
        Get to know my taste in music with some info from the spotify API.
        All calls are properly authorized ( Hopefully :/ ).
      </p>
      <div className="activities">
        <div className="recommender">
          {randomTrack ? (
            <div>
              <img src={randomTrack.albumCover} alt={randomTrack.name} width="110" />
              <p className="blurb">{randomTrack.name}<br />{randomTrack.artist}<br />Popularity: {randomTrack.popularity}</p>
              <button type="button" onClick={handleRandomTrack}>Choose Another</button>
            </div>
          ) : (
            <div>
              <h2> Recommender </h2>
              <p className="blurb"> let me recommend you a random song from my spotify that makes me happy :) </p>
              <button type="button" onClick={handleRandomTrack}>Show Random Song</button>
            </div>
          )}
        </div>
        <div className="recommender">
          {selectTrack ? (
            <div>
              <img src={selectTrack.albumCover} alt={selectTrack.name} width="110" />
              <p className="blurb">{selectTrack.name}<br />{selectTrack.artist}<br />Popularity: {selectTrack.popularity}</p>
              <div className="activities">
                <button className="side-button" type="button" onClick={handleSelectTrack}>Another Song!</button>
                <button className="side-button" type="button" onClick={() => setSelectTrack(null)}>Another Genre</button>
              </div>
            </div>
          ) : (
            <div>
              <h2> Select a Genre </h2>
              <p className="blurb">If you have a more particular taste, let us narrow it down.</p>
              <select defaultValue={null} onChange={(e) => handleGenreChange(e)}>
                <option value="">Select a genre</option>
                {Object.keys(playlistMap).map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Spotify;
