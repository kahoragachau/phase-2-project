import { TextField } from '@mui/material'
import Box from '@mui/material/Box'


export default function Search({ searchText, setSearchText }){
    return(
        <Box 
        components="form" 
        sx={{  '& .MuiTextField-root': { m: 1, width: '44%' }, }}
        noValidate
        autoComplete="off"
        >
        <TextField 
        id='filled-search' 
        label="search Teacher" 
        type="search" 
        variant="filled"
        onChange={ (e) => setSearchText(e.target.value) }
        value={searchText}/>
        </Box>
    )
}