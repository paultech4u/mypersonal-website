import React, { memo } from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, colors } from "@material-ui/core";

export const AppThemeProvider = memo((props) => {
  const { children, mode } = props;
  const theme = createMuiTheme({
      palette: {
        type: mode,
        primary: colors.orange,
        text: {
          primary: colors.common.black
        }
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        h1: {
           fontSize: 30
        },
        h2: {
          fontSize: 15
        },
        
      }
  });
  return <ThemeProvider theme={theme} mode={mode}>{children}</ThemeProvider>;
});


AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppThemeProvider