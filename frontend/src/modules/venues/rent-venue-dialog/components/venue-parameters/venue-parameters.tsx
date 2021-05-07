import React, { ReactNode } from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import {DatePicker} from '@material-ui/pickers';
import {MaterialUiPickersDate} from '@material-ui/pickers/typings/date';
import moment from 'moment';

interface InternalProps{
	disabledDates: string[];
}

interface State{
	bar: boolean;
	snacks: boolean;
	lightShow: boolean;
	shooting: boolean;
	canBringLiquids: boolean;
	hookah: boolean;
	date: string | undefined;
}

export type Props = Style & InternalProps;

export class VenueParameters extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state ={
			bar: false,
			snacks: false,
			lightShow:false,
			shooting: false,
			canBringLiquids: false,
			hookah: false,
			date: undefined,
		};
	}

	public render(): ReactNode {
		const  { classes } = this.props;
		const {bar, lightShow, canBringLiquids, hookah, shooting, snacks} = this.state;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные владельца билета
				</Typography>
				<Grid container spacing={3}>
					<Grid container item  >
						<FormControlLabel
							control={
								<Checkbox
									checked={bar}
									onChange={() => this.setState({bar: !bar})}
									color="primary" />
							}
							label="Бар + бармен" />
						<FormControlLabel
							control={
								<Checkbox
									checked={snacks}
									onChange={() => this.setState({snacks: !snacks})}
									color="primary" />
							}
							label="Закуски" />
					</Grid>

					<Grid container item >
						<FormControlLabel
							control={
								<Checkbox
									checked={lightShow}
									onChange={() => this.setState({lightShow: !lightShow})}
									color="primary" />
							}
							label="Световое шоу" />
						<FormControlLabel
							control={
								<Checkbox
									checked={shooting}
									onChange={() => this.setState({shooting: !shooting})}
									color="primary" />
							}
							label="Фейерверк" />
					</Grid>

					<Grid container item  >
						<FormControlLabel
							control={
								<Checkbox
									checked={canBringLiquids}
									onChange={() => this.setState({canBringLiquids: !canBringLiquids})}
									color="primary" />
							}
							label="Разрешение на пронос своих напитков" />
						<FormControlLabel
							control={
								<Checkbox
									checked={hookah}
									onChange={() => this.setState({hookah: !hookah})}
									color={'primary'} />
							}
							label="Кальяны" />
					</Grid>

					<Grid item xs={12}>
						<DatePicker
							required
							value={undefined}
							label="Дата бронирования"
							disablePast={true}
							shouldDisableDate={this.shouldDisableDate}
							onChange={this.handleDateChange}
							animateYearScrolling
							variant={'inline'}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="comment"
							name="comment"
							label="Комментарий к бронированию"
							fullWidth
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
	
	private handleDateChange = (date: MaterialUiPickersDate) => {
		if (!date) {
			this.setState({date: undefined});
			return;
		}
		const ISODate = moment(date).toISOString(true);
		this.setState({date: ISODate});
	}


	private shouldDisableDate =(chosenDate: MaterialUiPickersDate): boolean => {
		const {disabledDates} = this.props;
		disabledDates.forEach(date => {
			const ISODate = moment(date).toISOString(false);
			const chosenISODate = moment(chosenDate).toISOString(false);
			console.log(chosenISODate);

			if(moment(chosenISODate).isSame(ISODate)) {
				console.log('here');
				return true;
			}
		});
		return false;
	}
}


