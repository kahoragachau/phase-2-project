import  Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import MuiAlert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export default function ContactForm(){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

//     function handleClick() { 
//     return <Alert severity="success">Sent!</Alert>
//  }
    return (
        <Box 
        component="form" 
        sx={{ '& .MuiTextField-root': { m: 1, width: '75ch' } }}
        noValidate 
        autoComplete="off">
        
        <div>
            <h2>Have an issue? Reach Out to us in the form below</h2>
            <TextField
            required
            id="filled-required"
            label="Your Name"
            variant="filled"
            />
            <br />
            <TextField
            required
            id="filled-required"
            label="Your Email Address"
            variant="filled"
            />
            <br />
            <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            />
            <br />
            <Button variant="outlined" endIcon={<SendIcon />} onClick={handleClick}>Send</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Message Sent
                </Alert>
            </Snackbar>

        </div>
        </Box>
    )
}