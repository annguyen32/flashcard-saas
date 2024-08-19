import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const Flashcard = ({ flashcard }) => {
    const [showAnswer, setShowAnswer] = React.useState(false);
  
    const handleToggle = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {flashcard.question}
          </Typography>
          {showAnswer && (
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
              {flashcard.answer}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleToggle}>
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Flashcard;