import  Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { useState } from "react";

export default function AddTeacher({ setTeachers }){
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        salary: 0,
        age: 0,
        avatar: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        fetch("http://localhost:3001/teachers",{
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setFormData({
            name: "",
            description: "",
            salary: 0,
            age: 0,
            avatar: ""
        })
        setTeachers(previousData => [...previousData, data])
    })}

    return(
        <Box 
        component="form" 
        sx={{ '& .MuiTextField-root': { m: 1, width: '75ch' } }}
        noValidate 
        autoComplete="off">
        
        <div>
            <h2>Enter Teacher's Information Below</h2>
            <TextField
            required
            id="filled-required"
            label="Enter Teacher's Name"
            variant="filled"
            onChange={(e) => {
                setFormData({...formData, name:e.target.value});
              }}
            value={formData.name}
            />
            <br />
            <TextField
            required
            id="filled-required"
            label="Description/Teachers Info"
            variant="filled"
            onChange={(e) => {
                setFormData({...formData, description:e.target.value});
              }}
            value={formData.description}
            />
            <br />
            <TextField
            id="filled-number"
            label="Salary"
            type="number"
            variant="filled"
            onChange={(e) => {
                setFormData({...formData, salary:e.target.value});
              }}
            value={formData.salary}
            />
            <br />
            <TextField
            id="filled-helperText"
            label="Avatar URL"
            helperText="Enter a URL of a picture"
            variant="filled"
            onChange={(e) => {
                setFormData({...formData, avatar:e.target.value});
              }}
            value={formData.avatar}
            />
            <br />
            <Button variant="outlined" onClick={handleSubmit}>Add Teacher</Button>
        </div>
        </Box>
    )
}