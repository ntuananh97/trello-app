import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function SearchInput() {
  return (
    <>
      <TextField
        sx={{ display: { xs: "none", md: "block" } }}
        label="Search ..."
        variant="outlined"
        size="small"
        type="search"
        color="primary"
      />
      <IconButton aria-label="Search" sx={{ display: { xs: "flex", md: "none" } }}>
        <SearchIcon color='primary' />
      </IconButton>
    </>
  );
}

export default SearchInput