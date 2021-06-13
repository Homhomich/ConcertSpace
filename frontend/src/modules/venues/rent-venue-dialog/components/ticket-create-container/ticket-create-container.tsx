import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {IconButton, Snackbar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CustomizedSlider from './slider';
import {SnackbarCloseReason} from '@material-ui/core/Snackbar/Snackbar';
import {TicketModel} from '../../../../../models/ticket-model';

export interface TicketKeyModel {
	key: number;
	name?: string; // тип билета, например, VIP или танцпол
	description?: string; // например: входной билет или сидячее место
	price?: number;
	amount?: number;
}

interface InternalProps {
	tickets: TicketModel[] | undefined;
	handleTicketTypeAdd: (tickets: TicketKeyModel[]) => void;
	max: number;
}

interface State {
	tickets: Map<number, TicketKeyModel>;
	key: number;
	snackBarOpen: boolean;
	snackBarMessage: string;
}

export type Props = Style & InternalProps;

export class TicketsCreateContainer extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tickets: this.mapTickets(props.tickets),
			key: 0,
			snackBarOpen: false,
			snackBarMessage: '',
		};
		props.handleTicketTypeAdd(Array.from(this.state.tickets.values()));
	}

	public render(): ReactNode {
		const {classes, max} = this.props;
		const {tickets, snackBarOpen, snackBarMessage} = this.state;

		return (
			<React.Fragment>
				<div className={classes.headerContainer}>
					<Typography variant="subtitle1" gutterBottom>
						Настройка билетов
					</Typography>
					<IconButton color={'primary'} onClick={this.handleNewTicketAdd}>
						<AddIcon/>
					</IconButton>
				</div>

				<div className={classes.rowContainer}>
					{Array.from(tickets.values()).map((ticket) =>
						<div key={ticket.key} className={classes.ticketContainer}>
							<TextField
								required
								value={ticket.name}
								className={classes.name}
								onChange={this.handleNameChange(ticket.key)}
								name="type"
								label="Тип билета"
							/>
							<TextField
								required
								value={ticket.description}
								className={classes.description}
								onChange={this.handleDescriptionChange(ticket.key)}
								name="description"
								label="Описание билета"
							/>
							<TextField
								required
								value={ticket.price}
								className={classes.price}
								onChange={this.handlePriceChange(ticket.key)}
								name="price"
								label="Цена"
							/>
							<CustomizedSlider
								handleAmountChange={this.handleAmountChange(ticket.key)}
								max={max}
								open={true}
								value={ticket.amount}
							/>
						</div>
					)}
				</div>
				<Typography variant={'h4'} >{'Максимальное количество билетов: '+ max}</Typography>
				<Snackbar
					open={snackBarOpen}
					autoHideDuration={3000}
					onClose={(event: React.SyntheticEvent<any>, reason: SnackbarCloseReason) => {
						if (reason === 'timeout') {
							this.setState({snackBarOpen: false});
						}
					}}
					color={'red'}
					message={snackBarMessage}
				/>
			</React.Fragment>
		);
	}

	private handleNewTicketAdd = () => {
		const {tickets, key} = this.state;
		const {handleTicketTypeAdd} = this.props;
		const current = tickets.get(key);

		if (current && (!current.name || !current.description || !current.price)) {
			this.setState({snackBarOpen: true, snackBarMessage: 'Сначала заполните существующий билет.'});
			return;
		}

		const newTickets = tickets;
		newTickets.set(key + 1, {key: key + 1, amount: 0});
		this.setState(
			{
				tickets: newTickets,
				key: key + 1,
			}
		);
		handleTicketTypeAdd(Array.from(newTickets.values()));
	};

	private handleNameChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const {handleTicketTypeAdd} = this.props;
		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.name = event.target.value;
			tickets.set(key, changedTicket);
			this.setState({tickets: tickets});
			handleTicketTypeAdd(Array.from(tickets.values()));
		}
	};

	private handlePriceChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const {handleTicketTypeAdd} = this.props;

		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.price = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
			tickets.set(key, changedTicket);
			this.setState({tickets: tickets});
			handleTicketTypeAdd(Array.from(tickets.values()));
		}
	};

	private handleAmountChange = (key: number) => (amount: number) => {
		const {tickets} = this.state;
		const {handleTicketTypeAdd, max} = this.props;

		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.amount = amount;
			this.setState({tickets: tickets});
			handleTicketTypeAdd(Array.from(tickets.values()));
			if (this.calculateRemainder(max) < 0) {
				this.setState({
					snackBarOpen: true,
					snackBarMessage: 'Количество билетов не должно превышать вместимость площадки.'
				});
			}
		}
	};

	private handleDescriptionChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const {handleTicketTypeAdd} = this.props;
		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.description = event.target.value;
			tickets.set(key, changedTicket);
			this.setState({tickets: tickets});
			handleTicketTypeAdd(Array.from(tickets.values()));
		}
	};

	private calculateRemainder = (max: number): number => {
		const {tickets} = this.state;
		let remainder = max;
		tickets.forEach(ticket => {
			if (ticket.amount) {
				remainder -= ticket.amount;
			}
		});
		return remainder;
	};

	private mapTickets = (tickets: TicketModel[] | undefined) => {
		const ticketsMap = new Map<number, TicketKeyModel>();
		if (!tickets || tickets.length === 0) {
			ticketsMap.set(0, {
				key: 0,
				name: 'Танцпол',
				description: 'входной билет',
				price: 1200,
				amount: 10,
			});
		}
		else {
			tickets.forEach((ticket, index) => {
				ticketsMap.set(index, {
					key: index,
					name: ticket.name,
					description: ticket.description,
					price: ticket.price,
					amount: ticket.amount,
				});
			});
		}
		return ticketsMap;
	};
}


