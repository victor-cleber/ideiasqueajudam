import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: orange[600], contrastText: 'white' },
        secondary: { main: grey[50] },
    },
    shape: {
        borderRadius: 8
    },
});

export default theme;