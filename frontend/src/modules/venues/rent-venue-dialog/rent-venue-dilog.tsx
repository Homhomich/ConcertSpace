import React, { ReactNode } from 'react';
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
import PaymentForm from './components/payment-form/index';
import Review from './components/review/index';
import ConcertParameters from './components/concert-parameters/index';
import VenueParameters from './components/venue-parameters/index';

interface InternalProps{
	isOpen: boolean;
	onClose: () => void;
}

interface State{
	activeStep: number;
}

export type Props = Style & InternalProps;

export class RentVenueDialog extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {activeStep: 1};
	}

	private steps = ['Данные арендатора',  'Параметры площадки', 'Параметры концерта', 'Ваша бронь'];

	public render(): ReactNode {
		const  { classes , isOpen, onClose} = this.props;

		return (
			<div>
				<Dialog maxWidth={'xl'} aria-labelledby="simple-dialog-title" onClose={onClose} open={isOpen}>
					<React.Fragment>
						<CssBaseline />
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
												Мы отправим ваш билет вам на почту. Если в организации концерта произойдут изменения, уведомление также поступит на почту.
											</Typography>
										</React.Fragment>
									) : (
										<React.Fragment>
											{this.getStepContent(this.state.activeStep)}
											<div className={classes.buttons}>
												{this.state.activeStep !== 0 && (
													<Button onClick={this.handleBack} color={'primary'} className={classes.button}>
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
		this.setState({activeStep: this.state.activeStep + 1});
	};

	private handleBack = () => {
		this.setState({activeStep: this.state.activeStep - 1});
	};

	private getStepContent(step: number) {
		const dd = [
			new Date('2021-04-26').toISOString(),
			new Date('2021-04-27').toISOString(),
			new Date('2021-04-28').toISOString(),
		];

		switch (step) {
		case 0:
			return <UserInfo />;
		case 1:
			return <VenueParameters disabledDates={dd} />;
		case 2:
			return <ConcertParameters />;
		case 3:
			return <Review
				ticket={{
					id: 1,
					name: 'Meladze',
					description: 'The concert',
					price: 1200,
				}}
				userInfo={{
					id: 1,
					firstName: 'Anna',
					lastName: 'Ivanova',
					email: 'email@mail.ru',
					phoneNumber: '12789765',
					cardNumber: '1111222233334444',
					cvv: 233,
					nameOnCard: 'Anna Ivanova',
					expireDate: '2021-03-21',
				}
				}
			/>;

		default:
			throw new Error('Unknown step');
		}
	}
}
