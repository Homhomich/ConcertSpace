import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.secondary.light,
	},
	container: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: 'flex',
	},
	iconsWrapper: {
		height: 120,
	},
	icons: {
		display: 'flex',
	},
	icon: {
		width: 58,
		height: 58,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.warning.main,
		marginRight: theme.spacing(1),
		'&:hover': {
			backgroundColor: theme.palette.warning.dark,
		},
	},
	list: {
		margin: 0,
		listStyle: 'none',
		padding: 0,
	},
	listItem: {
		paddingTop: theme.spacing(0.5),
		paddingBottom: theme.spacing(0.5),
	},
	language: {
		marginTop: theme.spacing(1),
		width: 150,
	},
});
