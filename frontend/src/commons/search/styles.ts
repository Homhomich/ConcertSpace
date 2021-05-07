import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	root: {
		margin: '50px',
		padding: '10px 10px',
		display: 'flex',
		alignItems: 'center',
		width: '50%',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	button: {
		padding: 10,
		width: '30%',
	},
	divider: {
		height: 28,
		margin: 4,
	},
});
