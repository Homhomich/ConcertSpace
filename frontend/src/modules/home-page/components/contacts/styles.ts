import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const styles = (theme: Theme) => createStyles({
	root: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(20),
		display: 'flex',
	},
	cardWrapper: {
		zIndex: 1,
	},
	card: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: theme.palette.warning.main,
		padding: theme.spacing(8, 3),
	},
	cardContent: {
		maxWidth: 400,
	},
	textField: {
		width: '100%',
		backgroundColor: '#ffffff',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
	},
	button: {
		width: '100%',
		height: '50px',
	},
	imagesWrapper: {
		position: 'relative',
	},
	imageDots: {
		position: 'absolute',
		top: -67,
		left: -67,
		right: 0,
		bottom: 0,
		width: '100%',
	},
	image: {
		position: 'absolute',
		top: -28,
		left: -28,
		right: 0,
		bottom: 0,
		width: '100%',
		maxWidth: 600,
	},
});
