import React, {ReactNode} from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {UserModel} from '../../../../../models/user-model';

interface InternalProps {
	handleSetUserInfo: (userInfo: Partial<UserModel>) => void;
	userInfo: Partial<UserModel>;
}

export type Props = InternalProps & Style;

export class UserInfo extends React.PureComponent<Props> {
	public render(): ReactNode {
		const {userInfo} = this.props;
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные владельца билета
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={userInfo.firstName}
							id="firstName"
							name="firstName"
							label="Имя"
							fullWidth
							autoComplete="given-name"
							onChange={this.handleFirstNameChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={userInfo.lastName}
							id="lastName"
							name="lastName"
							label="Фамилия"
							fullWidth
							autoComplete="family-name"
							onChange={this.handleLastNameChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							value={userInfo.email}
							id="email"
							name="email"
							label="Email"
							fullWidth
							type="email"
							autoComplete="email"
							onChange={this.handleEmailChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							value={userInfo.phoneNumber}
							id="phone"
							name="phone"
							label="Номер телефона"
							fullWidth
							type="phone"
							autoComplete="phone"
							onChange={this.handlePhoneChange}
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

	private handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			firstName: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			lastName: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			email: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};

	private handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newUserModel: Partial<UserModel> = {
			phoneNumber: event.target.value,
		};
		this.props.handleSetUserInfo(newUserModel);
	};
}


