import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

theme.typography.h3 = {
    ...theme.typography.h3,
    textAlign: "center",
    "@media (max-width: 800px)": {
        fontSize: "2rem",
        padding: "0 12px"
    }
};

theme.typography.h2 = {
    ...theme.typography.h2,
    margin: "1em 0",
    "@media (max-width: 800px)": {
        fontSize: "2.5rem",
        margin: ".5em 0"
    }
}

export default theme;