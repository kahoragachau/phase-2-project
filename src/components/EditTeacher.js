import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import  Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditTeacher() {

  const [updateInfo, setUpdateInfo] = useState({})

  const {id} = useParams();
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    fetch(`https://jolly-puce-chipmunk.cyclic.app/teachers/${id}`,{
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(data => setUpdateInfo(previousData => [...previousData, data]))
    // After updating the info redirect user to home
    navigate("/")
  }

  useEffect(()=>{
    fetch(`https://jolly-puce-chipmunk.cyclic.app/teachers/${id}`
    )
    .then(res => res.json())
    .then(data => setUpdateInfo(data))
  },[id])

  return (
    <Box 
    component="form" 
    sx={{ '& .MuiTextField-root': { m: 1, width: '75ch' } }}
    noValidate 
    autoComplete="off">
    
    <div>
        <h2>Edit Teacher's Information Below</h2>
        <TextField
        required
        id="outlined-required"
        label="Enter Teacher's Name"
        onChange={(e) => {
          setUpdateInfo({...updateInfo, name:e.target.value});
        }}
        value={updateInfo.name}
        />
        <br />
        <TextField
        required
        id="outlined-required"
        label="Description/Teachers Info"
        onChange={(e) => {
          setUpdateInfo({...updateInfo, description:e.target.value});
        }}
        value={updateInfo.description}
        />
        <br />
        <TextField
        id="outlined-required"
        label="Salary"
        // type="number"
        onChange={(e) => {
          setUpdateInfo({...updateInfo, salary:e.target.value});
        }}
        value={updateInfo.salary}
        />
        <br />
        <TextField
        id="outlined-helperText"
        label="Avatar URL"
        onChange={(e) => {
          setUpdateInfo({...updateInfo, avatar:e.target.value});
        }}
        value={updateInfo.avatar}
        />
        <br />
        <Button variant="outlined" onClick={handleSubmit} >Update Teacher</Button>
    </div>
    </Box>
  )
}