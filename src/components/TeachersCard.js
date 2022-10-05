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


export default function TeachersCard({ teacher }) {
  return (
    <>
      <Card sx={{ maxWidth: 325 }}>
        <CardMedia
          component="img"
          height="194"
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
            Delete
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon sx={{ color: green[500] }}/>
            Edit
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </>
  );
}

