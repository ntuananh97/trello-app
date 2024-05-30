import { ThemeProvider } from '@emotion/react';
import React, { ReactNode, useState } from 'react';
import { ColorMode, getColorModeFromLocalStorage, saveColorMode } from './helper/colorMode';
import getTheme from './theme';

interface AppProviderProps {
    children: ReactNode;
}

export interface AppContextType {
    toggleColorMode: () => void;
}

const AppContext = React.createContext<AppContextType>({ toggleColorMode: () => {} });


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<ColorMode>(() => getColorModeFromLocalStorage());

    const theme = React.useMemo(
        () =>
          getTheme(mode),
        [mode],
      );

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const mode = prevMode === 'light' ? 'dark' : 'light';
            saveColorMode(mode)
            return (mode)
        });
    }


    return (
      <AppContext.Provider value={{toggleColorMode}}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      </AppContext.Provider>
    );
  };

export default AppContext