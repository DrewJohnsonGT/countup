import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {},
  palette: {},
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '"Arial", "sans-serif"',
  },
});

export const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={(_theme) => ({
      '#root': {
        height: '100%',
      },
      body: {
        height: '100%',
      },
      html: {
        height: '100%',
      },
    })}
  />
);
