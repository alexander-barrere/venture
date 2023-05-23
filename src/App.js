import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import EpisodeList from './EpisodeList';
import EpisodeDetails from './EpisodeDetails';
import TranscriptViewer from './TranscriptViewer';
import { Grid } from '@material-ui/core';
import './App.css';
import episodesData from './Adventure_Time.json';

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    setEpisodes(episodesData);
  }, []);

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
  };

  return (
    <div className="app">
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <EpisodeList episodes={episodes} onEpisodeSelect={handleEpisodeSelect} selectedEpisode={selectedEpisode} />
        </Grid>
        {selectedEpisode && (
          <Grid item xs={12} md={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <EpisodeDetails episode={selectedEpisode} />
              </Grid>
              <Grid item>
                <TranscriptViewer transcript={selectedEpisode.transcript} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default App;
