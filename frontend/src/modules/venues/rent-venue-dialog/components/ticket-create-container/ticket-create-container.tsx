import React, {ReactNode} from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {IconButton, Snackbar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface TicketKeyModel {
	key: number;
	name?: string; // тип билета, например, VIP или танцпол
	description?: string; // например: входной билет или сидячее место
	price?: number;
}

interface InternalProps {
	handleTicketTypeAdd: (tickets: TicketKeyModel[]) => void;
}

interface State {
	tickets: Map<number, TicketKeyModel>;
	key: number;
	snackBarOpen: boolean;
}

export type Props = Style & InternalProps;

export class TicketsCreateContainer extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tickets: new Map<number, TicketKeyModel>()
				.set(0, {
					key: 0,
					name: 'Танцпол',
					description: 'входной билет',
					price: 1200,
				},),
			key: 0,
			snackBarOpen: false,
		};
	}

	public render(): ReactNode {
		const {classes} = this.props;
		const {tickets, snackBarOpen} = this.state;

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
						</div>
					)}
				</div>
				<Snackbar
					open={snackBarOpen}
					resumeHideDuration={4000}
					onClose={()=>this.setState({snackBarOpen: false})}
					color={'red'}
					message="Сначала заполните существующий билет."
				/>
			</React.Fragment>
		);
	}

	private handleNewTicketAdd = () => {
		const {tickets, key} = this.state;
		const current = tickets.get(key);

		if (current && (!current.name || !current.description || !current.price)) {
			this.setState({snackBarOpen: true});
			return;
		}

		const newTickets = tickets;
		newTickets.set(key + 1, {key: key + 1});
		this.setState(
			{
				tickets: newTickets,
				key: key + 1,
			}
		);
	};

	private handleNameChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.name = event.target.value;
			tickets.set(key, changedTicket);
		}
	};

	private handlePriceChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.price = parseInt(event.target.value);
			tickets.set(key, changedTicket);
		}
	};

	private handleDescriptionChange = (key: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const {tickets} = this.state;
		const changedTicket = tickets.get(key);
		if (changedTicket) {
			changedTicket.description = event.target.value;
			tickets.set(key, changedTicket);
		}
	};

}


