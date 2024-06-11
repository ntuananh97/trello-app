import Box from '@mui/material/Box'
import TrelloContent from './TrelloContent'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/store';
import { fetchExampleData } from '../../../redux/trelloContent/trelloContentServices';

function Trello() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExampleData())
  }, [dispatch])

  return (
    <Box sx={{
      height: theme => `calc(100vh - ${theme.trello.headerBarHeight} - ${theme.trello.boardBarHeight})`,
      padding: '15px 15px 0'
    }} className="trello-content">
      <TrelloContent />
    </Box>
  )
}

export default Trello