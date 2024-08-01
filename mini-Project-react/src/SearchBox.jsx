import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox(){
    return(
        <>
        <h2>Search for the weather</h2>
        <TextField id="city" label="City Name" variant="outlined" required />
        <br></br><br></br>
        <Button variant="contained" type="submit" >
        Search
      </Button>
        </>
        
    )
}