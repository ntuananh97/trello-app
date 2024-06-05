import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'

function TrelloContent() {
  return (
    <Box className='trello-column__list' component="ul" sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
      {[...Array(4)].map(item => (<ContentColumn />))}
        
    </Box>
  )
}

export default TrelloContent