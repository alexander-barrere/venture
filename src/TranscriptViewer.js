import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const TranscriptViewer = ({ transcript }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentLine((prevLine) => prevLine + 1);
    }, 1000);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2">
          Transcript
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {transcript.slice(0, currentLine + 1).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TranscriptViewer;
