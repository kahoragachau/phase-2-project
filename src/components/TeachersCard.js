import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,teal,green } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid'

export default function TeachersCard({ teacher }) {
  return (
    <>
    <Grid container spacing={2} columns={12}>
      <Grid item xs={12} md={4} lg={6}>
        <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="350"
          image={teacher.avatar}
          alt={ teacher.name }
        />
        <CardContent sx={{ bgcolor: teal[100] }}>
          <Typography variant="body2" color="text.secondary">
            {teacher.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Delete favorites">
            <DeleteIcon sx={{ color: red[300] }} onClick={ ()=> alert("Clicked!!") }/>
            Remove
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon sx={{ color: green[500] }}/>
            Edit
          </IconButton>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
      <br />
    </>
  );
}

