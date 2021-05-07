import React, { ReactNode } from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export type Props = Style;

export class PaymentForm extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes } = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные карты
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<TextField required id="cardName" label="Держатель карты" fullWidth autoComplete="cc-name" />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							id="cardNumber"
							label="Номер карты"
							fullWidth
							autoComplete="cc-number"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField required id="expDate" label="Дата окончания действия" fullWidth autoComplete="cc-exp" />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							id="cvv"
							label="CVV"
							helperText="Последние три цифры на полосе для подписи"
							fullWidth
							autoComplete="cc-csc"
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


