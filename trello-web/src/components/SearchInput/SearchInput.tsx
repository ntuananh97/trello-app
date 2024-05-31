import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'


function SearchInput() {
  return (
    <Box>
      <TextField label="Search ..." variant="outlined" size='small' type='search' color="primary"  />
    </Box>
  )
}

export default SearchInput