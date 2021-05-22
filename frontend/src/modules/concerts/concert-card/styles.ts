import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles } from '@material-ui/core/styles/withStyles';

export type Style = WithStyles<typeof styles>;

export const styles = (theme: Theme) => createStyles({
	card: {
		marginLeft: '25%',

		maxWidth: 320,
		position: 'relative',
		boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
		overflow: 'visible',
		transition: '0.4s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'translateY(-2px)',
			'& $shadow': {
				bottom: '-1.5rem',
			},
			'& $shadow2': {
				bottom: '-2.5rem',
			},
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			zIndex: 0,
			display: 'block',
			width: '100%',
			bottom: -1,
			height: '100%',
			borderRadius: '1.5rem',
			backgroundColor: 'rgba(0,0,0,0.08)',
		},
	},
	main: {
		overflow: 'hidden',
		zIndex: 1,
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			display: 'block',
			width: '100%',
			height: '100%',
		},
	},
	content: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		zIndex: 1,
		padding: '1.5rem 1.5rem 1rem',
	},
	avatar: {
		width: 48,
		height: 48,
	},
	tag: {
		display: 'inline-block',
		fontFamily: '\'Sen\', sans-serif',
		backgroundColor: theme.palette.secondary.main,
		borderRadius: '0.5rem',
		padding: '2px 1rem',
		color: '#fff',
		marginBottom: '0.5rem',
	},
	title: {
		fontFamily: '\'Sen\', sans-serif',
		fontSize: '2rem',
		fontWeight: 800,
		color: '#fff',
	},
	author: {
		zIndex: 1,
		position: 'relative',
		borderBottomLeftRadius: '1.5rem',
		borderBottomRightRadius: '1.5rem',
	},
	shadow: {
		transition: '0.2s',
		position: 'absolute',
		zIndex: 0,
		width: '88%',
		height: '100%',
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.06)',
		left: '50%',
		transform: 'translateX(-50%)',
	},
	shadow2: {
		bottom: 0,
		width: '72%',
		backgroundColor: 'rgba(0,0,0,0.04)',
	},
	cardMedia:{
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		zIndex: 0,
	},
	divider:{
		borderTop: '3px dotted',
		borderColor: theme.palette.secondary.main,
		width: '120%',
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(1),
	}
});
