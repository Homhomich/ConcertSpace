import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	ticketContainer:{
		display: 'flex',
		flexDirection: 'row'
	},
	rowContainer:{
		display: 'flex',
		flexDirection: 'column'
	},
	description:{
		flexGrow: 3,
		marginRight: theme.spacing(1),
	},
	name:{
		flexGrow: 2,
		marginRight: theme.spacing(1),
	},
	price:{
		flexGrow: 2,
		marginRight: theme.spacing(1),
	},
	headerContainer:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
	}

});
