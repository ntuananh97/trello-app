import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useAppContext } from '../../hooks/useAppContext';


function ColorMode() {
  const theme = useTheme();
  const { toggleColorMode } = useAppContext();

  return (
    <Box>
      <IconButton size='small' onClick={toggleColorMode} color="primary">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default ColorMode