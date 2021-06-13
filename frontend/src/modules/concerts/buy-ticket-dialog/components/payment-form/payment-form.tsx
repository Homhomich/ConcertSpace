import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {UserModel} from '../../../../../models/user-model';
import {UserErrorModel} from '../../../../../models/user-error-model';

interface InternalProps {
	handleSetUserInfo: (userInfo: Partial<UserModel>) => void;
	userInfo: Partial<UserModel>;
	errorFormModel: UserErrorModel;
}

export type Props = InternalProps & Style;

export class PaymentForm extends React.PureComponent<Props> {

	public render(): ReactNode {
		const {userInfo, errorFormModel} = this.props;
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные карты
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<TextField
							required
							value={userInfo.nameOnCard ? userInfo.nameOnCard :''}
							error={errorFormModel.nameOnCard}
							helperText={errorFormModel.nameOnCard ? 'Обязательное поле' : undefined}
							id="cardName"
							label="Держатель карты"
							fullWidth
							onChange={this.handleNameOnCardChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							value={userInfo.cardNumber? userInfo.cardNumber :'' }
							error={errorFormModel.cardNumber?.error}
							helperText={errorFormModel.cardNumber?.helperText}
							id="cardNumber"
							label="Номер карты"
							fullWidth
							onChange={this.handleCardNumberChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							id="expDate"
							value={userInfo.expireDate ? userInfo.expireDate : ''}
							error={errorFormModel.expireDate}
							helperText={errorFormModel.expireDate ? 'Обязательное поле' : undefined}
							label="Дата окончания действия"
							fullWidth
							onChange={this.handleExpireDateChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							value={userInfo.cvv ? userInfo.cvv : ''}
							error={errorFormModel.cvv?.error}
							helperText={errorFormModel.cvv?.helperText ? errorFormModel.cvv.helperText : 'Последние три цифры на полосе для подписи'}
							id="cvv"
							label="CVV"
							fullWidth
							onChange={this.handleCVVChange}
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

	private handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			cvv: event.target.value,
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


