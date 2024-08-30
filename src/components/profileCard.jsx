import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import ProfilePicture from './profilePicture';
import ProfileTextField from './textField';

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* Center the ProfilePicture component */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <ProfilePicture />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MY PROFILE
          </Typography>
          <ProfileTextField />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
