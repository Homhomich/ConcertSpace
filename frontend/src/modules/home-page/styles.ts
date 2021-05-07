import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	divider:{
		backgroundColor: theme.palette.secondary.main,
		width: '100px',
		height: '7px'
	},
	background: {
		backgroundImage: 'url(http://kudago.com/media/images/event/42/95/4295d87e9dc23dfc1b027d1959025474.jpg)',
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
	},
});
