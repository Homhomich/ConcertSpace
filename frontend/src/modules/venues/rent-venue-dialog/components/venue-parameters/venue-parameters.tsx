import React, {ReactNode} from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import {VenueParametersModel} from '../../../../../models/venue-parameters';

interface InternalProps {
	handleSetVenueParameters: (venueParameters: VenueParametersModel) => void;
	handleSetRentComment: (rentComment: string) => void;
	venueParameters: VenueParametersModel;
	rentComment: string;
}

export type Props = Style & InternalProps;

export class VenueParameters extends React.PureComponent<Props> {
	public render(): ReactNode {
		const {venueParameters, handleSetRentComment, rentComment} = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Выберите необходимые параметры бронирования
				</Typography>
				<Grid container spacing={3}>
					<Grid container item>
						<FormControlLabel
							label="Бар + бармен"
							control={
								<Checkbox
									checked={venueParameters.bar}
									onChange={this.handleChangeVenueParameter('bar', !venueParameters.bar)}
									color="primary"
								/>
							}

						/>
						<FormControlLabel
							label="Закуски"
							control={
								<Checkbox
									checked={venueParameters.snacks}
									onChange={this.handleChangeVenueParameter('snacks', !venueParameters.snacks)}
									color="primary"
								/>
							}
						/>
					</Grid>

					<Grid container item>
						<FormControlLabel
							control={
								<Checkbox
									checked={venueParameters.lightShow}
									onChange={this.handleChangeVenueParameter('lightShow', !venueParameters.lightShow)}
									color="primary"/>
							}
							label="Световое шоу"/>
						<FormControlLabel
							label="Фейерверк"
							control={
								<Checkbox
									checked={venueParameters.shooting}
									onChange={this.handleChangeVenueParameter('shooting', !venueParameters.shooting)}
									color="primary"
								/>
							}

						/>
					</Grid>

					<Grid container item>
						<FormControlLabel
							control={
								<Checkbox
									checked={venueParameters.canBringLiquids}
									onChange={this.handleChangeVenueParameter('canBringLiquids', !venueParameters.canBringLiquids)}
									color="primary"/>
							}
							label="Разрешение на пронос своих напитков"/>
						<FormControlLabel
							label="Кальяны"
							control={
								<Checkbox
									checked={venueParameters.hookah}
									onChange={this.handleChangeVenueParameter('hookah', !venueParameters.hookah)}
									color={'primary'}
								/>
							}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="comment"
							value={rentComment}
							name="comment"
							label="Комментарий к бронированию"
							fullWidth
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSetRentComment(event.target.value)}
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

	private handleChangeVenueParameter = (key: keyof VenueParametersModel, changeValue: boolean) => () => {
		const {venueParameters} = this.props;
		const {handleSetVenueParameters} = this.props;

		handleSetVenueParameters(Object.assign({}, venueParameters, {[key]: changeValue}));
	};
}

