import React, { ReactNode } from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export type Props = Style;

export class UserInfo extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes } = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные владельца билета
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="Имя"
							fullWidth
							autoComplete="given-name"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Фамилия"
							fullWidth
							autoComplete="family-name"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="email"
							name="email"
							label="Email"
							fullWidth
							type="email"
							autoComplete="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="phone"
							name="phone"
							label="Номер телефона"
							fullWidth
							type="phone"
							autoComplete="phone"
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


