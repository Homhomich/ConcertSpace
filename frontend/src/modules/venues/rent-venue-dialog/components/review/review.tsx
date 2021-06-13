import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {UserModel} from '../../../../../models/user-model';
import {VenueParametersModel} from '../../../../../models/venue-parameters';
import {ConcertModel} from '../../../../../models/concert-model';
import moment from 'moment';

interface InternalProps {
	concert: Partial<ConcertModel>;
	userInfo: Partial<UserModel>;
	venueParameters: VenueParametersModel;
}

export type Props = Style & InternalProps;

export class Review extends React.PureComponent<Props> {

	public render(): ReactNode {
		const {classes, venueParameters, userInfo, concert} = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Итог аренды
				</Typography>
				<Grid container spacing={1}>
					<Grid item container direction="column" xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Параметры концерта
						</Typography>
						<Grid container>
							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Название концерта: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{concert.name}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment >
								<Grid item xs={6}>
									<Typography gutterBottom>Артист: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{concert.artist?.name}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment >
								<Grid item xs={6}>
									<Typography gutterBottom>Жанр: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{concert.artist?.genre}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment>
								<Grid item xs={6}>
									<Typography gutterBottom>Дата бронирования: </Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{moment(concert.date).format('DD.MM.YYYY')}</Typography>
								</Grid>
							</React.Fragment>
						</Grid>
					</Grid>
					<Grid item container direction="column" xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Параметры аренды
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
					<Grid item xs={12} sm={10}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Арендатор
						</Typography>
						<Typography gutterBottom>{userInfo.firstName} {' '} {userInfo.lastName} {' '}{userInfo.phoneNumber}</Typography>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


