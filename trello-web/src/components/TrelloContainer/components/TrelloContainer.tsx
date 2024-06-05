import Box from '@mui/material/Box'
import TrelloContent from './TrelloContent'

function Trello() {
  return (
    <Box sx={{
      height: theme => `calc(100vh - ${theme.trello.headerBarHeight} - ${theme.trello.boardBarHeight})`,
      padding: '15px'
    }}>
      <TrelloContent />
    </Box>
  )
}

export default Trello