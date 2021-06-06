import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import {WithStyles} from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	root: {
		width: '99.2vw',
		height: '90vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.3,
		background: '#d7ced7',
	},
	loader:{
		opacity: 0.9,
		color: '#c70359',
	}
});
