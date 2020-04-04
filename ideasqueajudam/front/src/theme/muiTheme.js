import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: grey[50] },
        secondary: { main: orange[600] },
    },
    shape: {
        borderRadius: 8
    },
});

export default theme;