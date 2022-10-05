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


export default function TeachersCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ bgcolor: teal[100] }}>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          {/* {enter description here.} */}
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
  );
}




// function TeachersCard(){
//     return (
//         <>

//         </>
//     )
// }

// export default TeachersCard;