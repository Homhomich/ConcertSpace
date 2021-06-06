import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	main:{
	},
	content:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignContent: 'center',
		maxHeight: '800px',
		maxWidth: '1500px',
	},
	cardMedia:{
		margin: theme.spacing(2),
		marginBottom: 0,
		maxWidth: '700px',
		maxHeight: '1000px',
		fontSize: 18,
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
		marginLeft: '10%',
		width: '70%',
		height: '60px',
		margin: '15px',
	},
	mainInfo:{
		margin: theme.spacing(5),
		padding: '10px',
		border: '1px solid',
		borderColor: theme.palette.primary.main,

		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	contacts:{
		margin: theme.spacing(5),
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	iconWithText:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	contactsIcons:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginLeft: '15px',
	},
	ticket:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
});
