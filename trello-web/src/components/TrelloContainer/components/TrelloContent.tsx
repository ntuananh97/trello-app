import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'

function TrelloContent() {
  return (
    <Box
      className="trello-column__list"
      component="ul"
      sx={{ display: "flex", gap: "20px", height: '100%' }}
    >
      {[...Array(6)].map((_, index) => (
        <ContentColumn key={index} />
      ))}
    </Box>
  );
}

export default TrelloContent