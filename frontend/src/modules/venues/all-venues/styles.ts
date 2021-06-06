import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	background: {
		backgroundImage: 'url(https://media.nomadicmatt.com/2021/party1.jpg)',
		backgroundColor: '#7fc7d9', // Average color of the background image.
		backgroundPosition: 'center',
	},
	cards:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexFlow: 'wrap',
	},
	cardItem :{
		marginTop: theme.spacing(3),
		marginLeft: '12%',
	},
});
