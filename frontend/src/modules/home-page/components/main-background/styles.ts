import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
/*	background: {
		backgroundImage: 'url(http://kudago.com/media/images/event/42/95/4295d87e9dc23dfc1b027d1959025474.jpg)',
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
	},*/
	button: {
		minWidth: 200,
	},
	h5: {
		marginBottom: theme.spacing(4),
		marginTop: theme.spacing(4),
		[theme.breakpoints.up('sm')]: {
			marginTop: theme.spacing(10),
		},
	},
	more: {
		marginTop: theme.spacing(2),
	},
	divider:{
		backgroundColor: theme.palette.secondary.main,
		width: '100px',
		height: '7px'
	}
});
