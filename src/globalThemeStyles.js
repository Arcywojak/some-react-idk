import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

theme.typography.h3 = {
    ...theme.typography.h3,
    "@media (max-width: 800px)": {
        fontSize: "2rem"
    }
}

export default theme;