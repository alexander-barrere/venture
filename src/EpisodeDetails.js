import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@material-ui/core';

const EpisodeDetails = ({ episode }) => {
  return (
    <Card className="episode-details">
      <CardContent>
        <Typography variant="h5" component="h2">
          {episode.name}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          Characters
        </Typography>
        <List dense>
          {episode.characters.map((character) => (
            <ListItem key={character}>{character}</ListItem>
          ))}
        </List>
        <Typography color="textSecondary" variant="h6">
          Locations
        </Typography>
        <List dense>
          {episode.locations.map((location) => (
            <ListItem key={location}>{location}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default EpisodeDetails;
