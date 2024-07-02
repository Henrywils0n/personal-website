import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import { getAccessToken, getPlaylist } from '../utils/spotify';

const About = () => {
  const [markdown, setMarkdown] = useState('');
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });

    const fetchPlaylist = async () => {
      const accessToken = await getAccessToken();
      const playlistData = await getPlaylist(accessToken, '5oz1Md6FdhZLcpMeezKmyO');
      setPlaylist(playlistData);
    };

    fetchPlaylist();
  }, []);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

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
          <div className="playlist">
            <h3>Playlist</h3>
            <ul>
              {playlist.tracks.items.map((track) => (
                <li key={track.track.id}>{track.track.name}</li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Main>
  );
};

export default About;
