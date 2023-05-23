import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import EpisodeList from './EpisodeList';
import EpisodeDetails from './EpisodeDetails';
import TranscriptViewer from './TranscriptViewer';
import './App.css';

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    // Fetch the episode data from the Adventure_Time.json file
    fetch('./Adventure_Time.json')
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      })
      .catch((error) => {
        console.error('Error fetching episode data:', error);
      });
  }, []);

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
  };

  return (
    <div className="app">
      <NavBar />
      <EpisodeList episodes={episodes} onSelectEpisode={handleEpisodeSelect} />
      {selectedEpisode && (
        <>
          <EpisodeDetails episode={selectedEpisode} />
          <TranscriptViewer transcript={selectedEpisode.transcript} />
        </>
      )}
    </div>
  );
};

export default App;
