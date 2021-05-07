import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const styles = (theme: Theme) => createStyles({
	title: {
		fontSize: 24,
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	left: {
		flex: 1,
	},
	leftLinkActive: {
		color: theme.palette.common.white,
	},
	right: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	rightLink: {
		fontSize: 16,
		color: theme.palette.common.white,
		marginLeft: theme.spacing(3),
	},
	linkSecondary: {
		color: theme.palette.secondary.main,
	},
});
