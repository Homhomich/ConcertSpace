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
import PaymentForm from './components/payment-form/index';
import Review from './components/review/index';
import {TicketModel} from '../../../models/ticket-model';
import {UserModel} from '../../../models/user-model';
import {checkUserCard, checkUserInfo} from '../../../services/validation-service';
import {UserErrorModel} from '../../../models/user-error-model';
import {putNewBoughtTicket} from '../../../services/concert-service';

interface InternalProps {
	ticket: TicketModel;
	concertId?: number;
	isOpen: boolean;
	onClose: () => void;
}

interface State {
	activeStep: number;
	userInfo: Partial<UserModel>;
	errorFormModel: UserErrorModel;
}

export type Props = Style & InternalProps;

export class BuyTicketPage extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {activeStep: 0, userInfo: {}, errorFormModel: {}};
	}

	private steps = ['Данные покупателя', 'Детали оплаты', 'Ваша покупка'];

	public render(): ReactNode {
		const {classes, isOpen, onClose, ticket} = this.props;
		console.log(ticket);
		return (
			<div>
				<Dialog maxWidth={'xl'} aria-labelledby="simple-dialog-title" open={isOpen} onClose={onClose}>
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
								<Typography component="h1" variant="h5" color={'primary'} align="center">
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
														onClick={this.handleBack}
														color={'primary'}
														className={classes.button}
													>
														Назад
													</Button>
												)}
												<Button
													variant="contained"
													color="primary"
													onClick={this.handleNext}
													className={classes.button}
												>
													{this.state.activeStep === this.steps.length - 1 ? 'Купить' : 'Далее'}
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
		if (this.state.activeStep === 0 && !checkUserInfo(this.state.userInfo, this.setErrorFormModel)) {
			this.setState({activeStep: this.state.activeStep + 1});
		}

		if (this.state.activeStep === 1 && !checkUserCard(this.state.userInfo, this.setErrorFormModel)) {
			this.setState({activeStep: this.state.activeStep + 1});
		}

		if (this.state.activeStep === this.steps.length - 1) {
			const {concertId, ticket} = this.props;
			if (!ticket.id) {
				return;
			}
			putNewBoughtTicket( ticket.id, this.state.userInfo, concertId)
				.catch(() => alert('Произошла ошибка при покупке билета, пожалуйста, попробуйте еще раз!'));
			this.setState({activeStep: this.state.activeStep + 1});
		}
	};

	private setErrorFormModel = (errorFormModel: UserErrorModel) => {
		this.setState({errorFormModel: errorFormModel});
	};

	private handleBack = () => {
		this.setState({activeStep: this.state.activeStep - 1});
	};

	private handleSetUserInfo = (userInfo: Partial<UserModel>) => {
		this.setState({userInfo: Object.assign({}, this.state.userInfo, userInfo)});
	};

	private getStepContent(step: number) {
		const {ticket} = this.props;
		const {userInfo, errorFormModel} = this.state;

		switch (step) {
		case 0:
			return <UserInfo errorFormModel={errorFormModel}  userInfo={userInfo} handleSetUserInfo={this.handleSetUserInfo}/>;
		case 1:
			return <PaymentForm errorFormModel={errorFormModel} userInfo={userInfo} handleSetUserInfo={this.handleSetUserInfo}/>;
		case 2:
			return <Review
				ticket={ticket}
				userInfo={userInfo}
			/>;
		default:
			throw new Error('Unknown step');
		}
	}
}
