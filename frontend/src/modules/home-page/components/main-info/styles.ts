import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const styles = (theme: Theme) => createStyles({
	root: {
		display: 'flex',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.light,
	},
	container: {
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(30),
		display: 'flex',
		position: 'relative',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(0, 5),
	},
	image: {
		height: 75,
	},
	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
	curvyLines: {
		pointerEvents: 'none',
		position: 'absolute',
		top: -180,
	},
});
