import { TextField } from '@mui/material'
import Box from '@mui/material/Box'


export default function Search(){
    return(
        <Box 
        components="form" 
        sx={{  '& .MuiTextField-root': { m: 1, width: '25%' }, }}
        noValidate
        autoComplete="off"
        >
        <TextField id='filled-search' label="search field" type="search" variant="filled"/>

        </Box>
    )
}