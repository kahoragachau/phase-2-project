import * as React from 'react';
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
// import { useNavigate } from 'react-router-dom';


export default function TeachersCard({ teacher, handleDelete, handleEdit }) {

  // const navigate = useNavigate();

  // const handleEdit = () => {
  //   navigate('EditTeacher')
  // }

  return (
    <>
    <Grid container spacing={2} columns={12}>
      <Grid item xs={12} md={4} lg={6} >
        <Card sx={{ maxWidth: 600 }} >
        <CardMedia
          component="img"
          height="350"
          image={teacher.avatar}
          alt={ teacher.name }
        />
        <CardContent sx={{ bgcolor: teal[100] }}>
          Name:
          <Typography variant="body2" color="text.secondary">
           {teacher.name}
          </Typography>
          Description:
          <Typography variant="body2" color="text.secondary">
            {teacher.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Delete teacher" onClick={handleDelete}>
            <DeleteIcon sx={{ color: red[900] }}/>
            Remove
          </IconButton>
          <IconButton aria-label="Edit Teachers Info" onClick={handleEdit}>
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

