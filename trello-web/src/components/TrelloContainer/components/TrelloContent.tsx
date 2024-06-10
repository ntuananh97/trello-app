import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'
import AddContentColumn from './AddContentColumn';

function TrelloContent() {
  return (
    <Box
      className="trello-column__list"
      component="ul"
      sx={{ display: "flex", gap: "20px", height: '100%' }}
    >
      {[...Array(2)].map((_, index) => (
        <ContentColumn key={index} />
      ))}
      <AddContentColumn />
    </Box>
  );
}

export default TrelloContent