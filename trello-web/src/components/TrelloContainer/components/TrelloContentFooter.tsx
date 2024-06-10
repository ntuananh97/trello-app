import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function TrelloContentFooter() {
  return (
    <Box className="trello-column__item__footer" sx={{padding: '0 15px'}}>
      <Button startIcon={<AddIcon />}>
        Add card
      </Button>
    </Box>
  )
}

export default TrelloContentFooter