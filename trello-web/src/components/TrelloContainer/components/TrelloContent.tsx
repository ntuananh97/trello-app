import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'
import AddContentColumn from './AddContentColumn';
import { MOCK_DATA } from '../../../mockData/mock-data';

const { columns: COLUMNS } = MOCK_DATA.board

function TrelloContent() {
  return (
    <Box
      className="trello-column__list"
      component="ul"
      sx={{ display: "flex", gap: "20px", height: '100%' }}
    >
      {COLUMNS.map((column) => (
        <ContentColumn key={column._id} data={column} />
      ))}
      <AddContentColumn />
    </Box>
  );
}

export default TrelloContent