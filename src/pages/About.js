import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import { getTrackInfoFromPlaylist } from '../utils/spotify';

const About = () => {
  const [markdown, setMarkdown] = useState('');
  const [playlist, setPlaylist] = useState(null);
  const [randomTrack, setRandomTrack] = useState(null);
  const [chosenPlaylist, setChosenPlaylist] = useState(null);
  const [selectTrack, setSelectTrack] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');

  const playlistMap = {
    rock: '2aBBzw32kfI6FuayPhJqO4',
    summer: '5WAeabO3SsVhhIWLgMD52Y',
    alternative: '1sRhFbnzhTv7RQLKGckSqg',
    punkPop: '4zbk9OFoT9PfmidYDA7mcu',
    yachtRock: '1XzcWLbmd12wV6Q6c4zaE8',
    edm: '1AXE9XeKp1wExSGVqhztwm',
  };

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });

    getTrackInfoFromPlaylist('5oz1Md6FdhZLcpMeezKmyO').then((data) => {
      setPlaylist(data);
    }).catch((error) => console.error('Error fetching playlist:', error));
  }, []);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  const handleRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    setRandomTrack(playlist[randomIndex]);
  };

  const handleSelectTrack = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length);
    setSelectTrack(chosenPlaylist[randomIndex]);
  };

  const handleGenreChange = async (e) => {
    setSelectedGenre(e.target.value);
    try {
      getTrackInfoFromPlaylist(playlistMap[selectedGenre]).then((data) => {
        setChosenPlaylist(data);
      }).catch((error) => console.error('Error fetching playlist:', error));

      const randomIndex = Math.floor(Math.random() * chosenPlaylist.length);
      setSelectTrack(chosenPlaylist[randomIndex]);
    } catch (error) {
      console.error('Error fetching genre playlist:', error);
    }
  };

  return (
    <Main
      title="About"
      description="Learn about Henry Wilson"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
        <article className="post" id="stats">
          <header>
            <div className="title">
              <h2><Link to="/stats">Facts</Link></h2>
            </div>
          </header>
          <Personal />
        </article>
        {playlist && (
          <article className="spotify">
            <header>
              <h2> Get to know my music </h2>
            </header>
            {/* eslint-disable-next-line max-len */}
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
                    <button type="button" onClick={handleSelectTrack}>Another Song!</button>
                    <button type="button" onClick={() => setSelectTrack(null)}>Choose Another Genre</button>
                  </div>
                ) : (
                  <div>
                    <h2> Select a Genre </h2>
                    <p className="blurb">If you have a more particular taste, let us narrow it down.</p>
                    {/* eslint-disable-next-line max-len */}
                    <select onChange={(e) => handleGenreChange(e)} value={selectedGenre}>
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
        )}
      </article>
    </Main>
  );
};

export default About;
