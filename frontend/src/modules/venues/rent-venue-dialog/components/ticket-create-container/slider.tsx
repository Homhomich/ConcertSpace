import React from 'react';
import {withStyles, makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import theme from '../../../../../theme';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: 300 + theme.spacing(3) * 2,
		},
		margin: {
			height: theme.spacing(3),
		},
		title:{
			marginLeft: theme.spacing(1),
		}
	}),
);

interface Props {
	open: boolean;
	value?: number;
	max: number;
	handleAmountChange: (amount: number) => void;
}

const PrettoSlider = withStyles({
	root: {
		color: theme.palette.primary.main,
		height: 8,
		marginLeft: theme.spacing(1),
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -10,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);

export default function CustomizedSlider(props: Props) {
	const classes = useStyles();
	const {max, value, handleAmountChange} = props;

	// eslint-disable-next-line @typescript-eslint/ban-types
	const onSliderValueChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
		if (!Array.isArray(value)) {
			handleAmountChange(value);
		}
	};

	return (
		<div className={classes.root}>
			<Typography gutterBottom>Количество билетов</Typography>
			<PrettoSlider
				max={max >= 0 ? max : 0}
				onChange={onSliderValueChange}
				valueLabelDisplay="auto"
				aria-label="pretto slider"
				defaultValue={value ? value : 0}
			/>
		</div>
	);

}


