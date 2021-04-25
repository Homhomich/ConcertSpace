import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	background: {
		backgroundImage: 'url(https://static.dw.com/image/54667813_303.jpg)',
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
	},
	cards:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexFlow: 'wrap',
	},
	cardItem :{
		marginTop: theme.spacing(3),
		flexBasis: '26%',
	},
});
