import { ColorMode } from './helper/colorMode';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        trello: {
            headerBarHeight: string;
            boardBarHeight: string;
            gapHeader: string;
        };
    }

}

const getDesignTokens = (mode: ColorMode) => ({
    trello: {
        headerBarHeight: '58px',
        boardBarHeight: '48px',
        gapHeader: '10px'
    },
    palette: {
      mode
    },
  });

const getTheme = (mode: ColorMode) => createTheme(getDesignTokens(mode));

export default getTheme;