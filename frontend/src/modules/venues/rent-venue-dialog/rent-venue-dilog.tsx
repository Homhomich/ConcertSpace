import React, {ReactNode} from 'react';
import {Style} from './styles';
import {Dialog} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserInfo from './components/user-info/index';
import Review from './components/review/index';
import ConcertParameters from './components/concert-parameters/index';
import VenueParameters from './components/venue-parameters/index';
import {VenueModel} from '../../../models/venue-model';
import {ConcertModel} from '../../../models/concert-model';
import {UserModel} from '../../../models/user-model';
import {VenueParametersModel} from '../../../models/venue-parameters';
import {UserErrorModel} from '../../../models/user-error-model';
import {ConcertErrorModel} from '../../../models/concert-error-model';
import {checkConcertParameters, checkUserInfoWithoutCard} from '../../../services/validation-service';
import {putRentedVenue} from '../../../services/venue-service';

interface InternalProps {
	venue: VenueModel;
	isOpen: boolean;
	onClose: () => void;
}

interface State {
	activeStep: number;
	userInfo: Partial<UserModel>;
	concertInfo: Partial<ConcertModel>;
	venueParameters: VenueParametersModel;
	userErrorModel: UserErrorModel;
	concertErrorModel: ConcertErrorModel;
}

export type Props = Style & InternalProps;

export class RentVenueDialog extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			activeStep: 1,
			userInfo: {},
			userErrorModel: {},
			concertErrorModel: {},
			concertInfo: {
				location: this.props.venue.location,
			},
			venueParameters: {
				bar: false,
				snacks: false,
				lightShow: false,
				shooting: false,
				canBringLiquids: false,
				hookah: false,
			}
		};
	}

	private steps = ['Данные арендатора', 'Параметры площадки', 'Параметры концерта', 'Ваша бронь'];

	public render(): ReactNode {
		const {classes, isOpen, onClose} = this.props;

		return (
			<div>
				<Dialog maxWidth={'xl'} aria-labelledby="simple-dialog-title" onClose={onClose} open={isOpen}>
					<React.Fragment>
						<CssBaseline/>
						<AppBar position="absolute" color="default" className={classes.appBar}>
							<Toolbar>
								<Typography variant="h6" color="inherit" noWrap>
									concert space
								</Typography>
							</Toolbar>
						</AppBar>
						<main className={classes.layout}>
							<Paper className={classes.paper}>
								<Typography component="h1" variant="h4" color={'primary'} align="center">
									Покупка билета
								</Typography>
								<Stepper activeStep={this.state.activeStep} className={classes.stepper}>
									{this.steps.map((label) => (
										<Step key={label}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
								<React.Fragment>
									{this.state.activeStep === this.steps.length ? (
										<React.Fragment>
											<Typography variant="h5" gutterBottom>
												Спасибо за покупку!
											</Typography>
											<Typography variant="subtitle1">
												Мы отправим ваш билет вам на почту. Если в организации концерта
												произойдут изменения, уведомление также поступит на почту.
											</Typography>
										</React.Fragment>
									) : (
										<React.Fragment>
											{this.getStepContent(this.state.activeStep)}
											<div className={classes.buttons}>
												{this.state.activeStep !== 0 && (
													<Button
														onClick={this.handleBack} color={'primary'}
														className={classes.button}>
														Назад
													</Button>
												)}
												<Button
													variant="contained"
													color="primary"
													onClick={this.handleNext}
													className={classes.button}
												>
													{this.state.activeStep === this.steps.length - 1 ? 'Забронировать' : 'Дальше'}
												</Button>
											</div>
										</React.Fragment>
									)}
								</React.Fragment>
							</Paper>
						</main>
					</React.Fragment>
				</Dialog>
			</div>
		);
	}

	private handleNext = () => {
		const {userInfo, concertInfo, venueParameters} = this.state;
		const {venue} = this.props;

		if (this.state.activeStep === this.steps.length - 1) {
			if (checkUserInfoWithoutCard(userInfo, this.setUserErrorModel)
				&& checkConcertParameters(concertInfo, this.setConcertErrorModel)) {
				putRentedVenue(venue.id, {userInfo, concert: concertInfo, venueRentParameters: venueParameters})
					.catch(() => alert('Произошла ошибка при аренде площадки'));
			}
		}

		this.setState({activeStep: this.state.activeStep + 1});
	};

	private setUserErrorModel = (userErrorModel: UserErrorModel) => {
		this.setState({userErrorModel: userErrorModel});
	};

	private setConcertErrorModel = (concertErrorModel: ConcertErrorModel) => {
		this.setState({concertErrorModel: concertErrorModel});
	};

	private handleBack = () => {
		this.setState({activeStep: this.state.activeStep - 1});
	};

	private handleSetUserInfo = (userInfo: Partial<UserModel>) => {
		this.setState({userInfo: Object.assign({}, this.state.userInfo, userInfo)});
	};

	private handleSetVenueParameters = (venueParameters: VenueParametersModel) => {
		this.setState({userInfo: Object.assign({}, this.state.userInfo, venueParameters)});
	};

	private handleSetConcertInfo = (concertInfo: Partial<ConcertModel>) => {
		this.setState({userInfo: Object.assign({}, this.state.concertInfo, concertInfo)});
	};

	private getStepContent(step: number) {
		const {venue} = this.props;
		const {userInfo, venueParameters, concertInfo} = this.state;

		switch (step) {
		case 0:
			return <UserInfo userInfo={userInfo} handleSetUserInfo={this.handleSetUserInfo}/>;
		case 1:
			return <VenueParameters
				venueParameters={venueParameters}
				handleSetVenueParameters={this.handleSetVenueParameters}
			/>;
		case 2:
			return (
				<ConcertParameters
					concert={concertInfo}
					handleSetConcertInfo={this.handleSetConcertInfo}
					disabledDates={venue.disabledDates}
				/>
			);
		case 3:
			return <Review
				venueParameters={venueParameters}
				userInfo={userInfo}
			/>;

		default:
			throw new Error('Unknown step');
		}
	}
}
