import React from 'react';

const EpisodeList = ({ episodes, onEpisodeSelect, selectedEpisode }) => {
  return (
    <div>
      <h2>Episode List</h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.name}
            onClick={() => onEpisodeSelect(episode)}
            className={selectedEpisode === episode ? 'selected' : ''}
          >
            {episode.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
