/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#f2f2f2';
const tintColorDark = '#090a0a';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  brand: {
    transparent: 'transparent',
    // Base
    black: '#1C1C1C',
    white: '#f1f1f1',
    // Brand
    primary: '#56B68C',
    primary15: '#56B68C26',
    secondary: '#FDC800',
    secondary15: '#FDC80026',
    // Grays
    gray5: '#0D0D0D',
    gray10: '#1A1A1A',
    gray15: '#262626',
    gray20: '#333333',
    gray25: '#404040',
    gray30: '#4D4D4D',
    gray35: '#595959',
    gray40: '#666666',
    gray45: '#737373',
    gray50: '#808080',
    // Validations
    success: '#56B68C',
    success15: '#56B68C15',
    warning: '#F9B550',
    warning15: '#F9B55015',
    error: '#E95053',
    error15: '#E9505315',
  },
};
