import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Styles = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	main:{

	},
	content:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignContent: 'center',
		minHeight: '600px',
		minWidth: '1200px',
	},
	cardMedia:{
		margin: theme.spacing(3),
		marginBottom: 0,
		width: '500px',
		height: '500px',
		fontSize: 20,
	},
	title:{
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	divider:{
		borderTop: '3px dotted',
		borderColor: theme.palette.secondary.main,
		width: '98%',
		marginLeft: theme.spacing(1),
		marginTop: theme.spacing(1),
	},
	subtitle: {
		marginLeft: '3px',
		padding: 0,
	},
	button:{
		height: '50px',
		padding: '10px',
		marginTop: '5px',
	},
	item:{
		padding: '10px',
	},
	ticket:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
});
