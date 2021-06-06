import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {UserModel} from '../../../../../models/user-model';
import {VenueParametersModel} from '../../../../../models/venue-parameters';

interface InternalProps {
	userInfo: Partial<UserModel>;
	venueParameters: VenueParametersModel;
}

export type Props = Style & InternalProps;

export class Review extends React.PureComponent<Props> {

	public render(): ReactNode {
		const {classes, venueParameters, userInfo} = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Итог аренды
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Арендатор
						</Typography>
						<Typography gutterBottom>{userInfo.firstName} {' '} {userInfo.lastName}</Typography>
						<Typography gutterBottom>{userInfo.phoneNumber}</Typography>
					</Grid>
					<Grid item container direction="column" xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Детали оплаты
						</Typography>
						<Grid container>
							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Бар: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.bar ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment >
								<Grid item xs={6}>
									<Typography gutterBottom>Закуски: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.snacks ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment >
								<Grid item xs={6}>
									<Typography gutterBottom>Кальян: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.hookah ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Можно проносить напитки: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.canBringLiquids ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>

							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Фейерверк: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.shooting ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>

							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Световое шоу</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{venueParameters.lightShow ? 'да' : 'нет'}</Typography>
								</Grid>
							</React.Fragment>
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


