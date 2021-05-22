import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {UserModel} from '../../../../../models/user-model';

interface InternalProps {
	handleSetUserInfo: (userInfo: Partial<UserModel>) => void;
	userInfo: Partial<UserModel>;
}

export type Props = InternalProps & Style;

export class PaymentForm extends React.PureComponent<Props> {

	public render(): ReactNode {
		const {userInfo}  =this.props;
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные карты
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<TextField 
							required
							value={userInfo.nameOnCard}
							id="cardName" 
							label="Держатель карты"
							fullWidth
							autoComplete="cc-name"
							onChange={this.handleNameOnCardChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							value={userInfo.cardNumber}
							id="cardNumber"
							label="Номер карты"
							fullWidth
							autoComplete="cc-number"
							onChange={this.handleCardNumberChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							id="expDate"
							value={userInfo.expireDate}
							label="Дата окончания действия"
							fullWidth autoComplete="cc-exp"
							onChange={this.handleExpireDateChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							value={userInfo.cvv}
							id="cvv"
							label="CVV"
							helperText="Последние три цифры на полосе для подписи"
							fullWidth
							autoComplete="cc-csc"
							onChange={this.handleCVVChange}
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

	private handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			cvv: parseInt(event.target.value),
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			cardNumber: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handleNameOnCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			nameOnCard: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handleExpireDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			expireDate: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};
}


