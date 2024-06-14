import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'
import AddContentColumn from './AddContentColumn';
import { useSelector } from 'react-redux';
import { columnOrderIdSelector } from '../../../redux/trelloContent/trelloContentSelector';


function TrelloContent() {
  const columnOrderIds = useSelector(columnOrderIdSelector);
  console.log("TrelloContent ~ columnOrderIds:", columnOrderIds)

  return (
    <Box
      className="trello-column__list"
      component="ul"
      sx={{ display: "flex", gap: "20px", height: '100%' }}
    >
      {columnOrderIds.map((columnId) => (
        <ContentColumn key={columnId} columnId={columnId} />
      ))}
      <AddContentColumn />
    </Box>
  );
}

export default TrelloContent