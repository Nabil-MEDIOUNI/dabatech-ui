import { createTheme } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
export default createTheme({
  typography: {
    fontFamily: ['"NotoSans"', '"Open Sans"', '"sans-serif"'].join(','),
  },
  spacing: 8,
});
