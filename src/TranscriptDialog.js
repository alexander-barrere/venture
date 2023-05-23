import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import EpisodeDetails from './EpisodeDetails';

const TranscriptDialog = ({ open, handleClose, transcript, episode }) => {
  return (
    <Dialog open={open} onClose={handleClose} scroll="paper" aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
      <DialogTitle id="scroll-dialog-title">
        Transcript - {episode.name}
      </DialogTitle>
      <DialogContent dividers={true}>
        <EpisodeDetails episode={episode} />
        {transcript.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TranscriptDialog;
