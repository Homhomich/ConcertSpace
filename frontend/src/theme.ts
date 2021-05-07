import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
	palette: {
		primary: {
			light: '#69696a',
			main: '#28282a',
			dark: '#1e1e1f',
		},
		secondary: {
			light: '#fff5f8',
			main: '#ff3366',
			dark: '#e62958',
		},
		warning: {
			main: '#ffc071',
			dark: '#ffb25e',
		},
		error: {
			main: red[500],
			dark: red[700],
		},
		success: {
			main: green[500],
			dark: green[700],
		},
	},
	typography: {
		fontFamily:  '\'Work Sans\', sans-serif',
		fontSize: 15,
		fontWeightLight: 300, // Work Sans
		fontWeightRegular: 400, // Work Sans
		fontWeightMedium: 700, // Roboto Condensed
	},
});

const fontHeader = {
	color: rawTheme.palette.text.primary,
	fontWeight: rawTheme.typography.fontWeightMedium,
	textTransform: 'uppercase',
};
const theme = {
	...rawTheme,
	palette: {
		...rawTheme.palette,
		background: {
			...rawTheme.palette.background,
			default: rawTheme.palette.common.white,
			placeholder: grey[200],
		},
	},
	typography: {
		...rawTheme.typography,
		fontHeader,

		h1: {
			...rawTheme.typography.h1,
			...fontHeader,
			letterSpacing: 0,
			fontSize: 60,
			fontFamily:'\'Roboto Condensed\', sans-serif',
		},
		h2: {
			...rawTheme.typography.h2,
			...fontHeader,
			fontSize: 48,
			fontFamily:'\'Roboto Condensed\', sans-serif',
		},
		h3: {
			...rawTheme.typography.h3,
			...fontHeader,
			fontSize: 42,
			fontFamily:'\'Roboto Condensed\', sans-serif',
		},
		h4: {
			...rawTheme.typography.h4,
			...fontHeader,
			fontSize: 36,
			fontFamily:'\'Roboto Condensed\', sans-serif',
		},
		h5: {
			...rawTheme.typography.h5,
			fontSize: 20,
			fontWeight: rawTheme.typography.fontWeightLight,
		},
		h6: {
			...rawTheme.typography.h6,
			...fontHeader,
			fontSize: 18,
		},
		subtitle1: {
			...rawTheme.typography.subtitle1,
			fontSize: 18,
		},
		body1: {
			...rawTheme.typography.body2,
			fontWeight: rawTheme.typography.fontWeightRegular,
			fontSize: 16,
		},
		body2: {
			...rawTheme.typography.body1,
			fontSize: 14,
			letterSpacing: 1,
		},
	},
};

export default theme;

