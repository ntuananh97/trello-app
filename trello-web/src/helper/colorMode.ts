export type ColorMode = 'light' | 'dark';

const COLOR_STORAGE_KEY = "colorMode";

export const getColorModeFromLocalStorage = (): ColorMode => (localStorage.getItem(COLOR_STORAGE_KEY) || 'light') as ColorMode;

export const saveColorMode = (colorMode: ColorMode) => {
    localStorage.setItem(COLOR_STORAGE_KEY, colorMode);
}