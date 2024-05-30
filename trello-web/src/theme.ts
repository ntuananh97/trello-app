import { ColorMode } from './helper/colorMode';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        trello: {
            headerBarHeight: string;
            boardBarHeight: string;
        };
    }

}

const getDesignTokens = (mode: ColorMode) => ({
    trello: {
        headerBarHeight: '48px',
        boardBarHeight: '48px'
    },
    palette: {
      mode,
    },
   
  });

const getTheme = (mode: ColorMode) => createTheme(getDesignTokens(mode));

export default getTheme;