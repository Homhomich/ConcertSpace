import React, {ReactNode} from 'react';
import {Styles} from './styles';
import {Button, Dialog, Divider, IconButton, Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import {Row} from '@mui-treasury/components/flex';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useNewsInfoStyles} from '@mui-treasury/styles/info/news';
import CloseIcon from '@material-ui/icons/Close';
import BuyTicketPage from '../buy-ticket-dialog/index';
import {ConcertModel} from '../../../models/concert-model';
import {TicketModel} from '../../../models/ticket-model';
import moment from 'moment';

export type Props = Styles & InternalProps;

interface InternalProps{
	concert: ConcertModel;
    isOpen: boolean;
    onClose: () => void;
}

interface State{
	isBuyTicketDialogOpen: boolean;
}

export class ConcertPage extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isBuyTicketDialogOpen: false,
		};
	}
	public render(): ReactNode {
		const { onClose, isOpen , classes, concert} = this.props;

		return (
			<div>
				<Dialog
					maxWidth={'xl'}
					className={classes.main}
					onClose={onClose}
					aria-labelledby="simple-dialog-title"
					open={isOpen}
				>
					<div className={classes.title}>
						<Typography  variant="h2"  id="simple-dialog-title">{concert.artist.name}</Typography>
						<IconButton onClick={onClose} >
							<CloseIcon color={'secondary'}/>
						</IconButton>
					</div>
					<Row
						className={classes.subtitle}
						gap={2}
						bgcolor={'common.white'}
					>
						<Info position={'middle'} useStyles={useNewsInfoStyles}>
							<InfoTitle variant="h2">{moment(concert.date).format('DD MMM')}</InfoTitle>
							<InfoSubtitle variant="h2">{concert.location}</InfoSubtitle>
						</Info>
					</Row>
					<div className={classes.divider}/>
					<div>
						<div className={classes.content}>
							<Box  position={'relative'}>
								<CardMedia
									className={classes.cardMedia}
									image={concert.imgPath}
								/>
							</Box>
							<div className={classes.descriptionContainer}>
								<Typography variant="body1" className={classes.description}>
									{concert?.description}
								</Typography>
								<div className={classes.item}>
									{this.getTickets()}
								</div>
							</div>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}

	private getTickets = (): ReactNode => {
		const {classes, concert} = this.props;
		const {isBuyTicketDialogOpen} = this.state;

		return concert.tickets.map((ticket) =>
			<div key={ticket.id}>
				<Divider/>
				<div className={classes.ticket}>
					<Info className={classes.item} position={'middle'} useStyles={useNewsInfoStyles}>
						<InfoTitle variant="h2">{ticket.name}</InfoTitle>
						<InfoSubtitle variant="h2">{ticket.description}</InfoSubtitle>
					</Info>
					<Button
						onClick={() => this.setState({isBuyTicketDialogOpen: true})}
						className={classes.button}
						color={'secondary'}
						variant={'contained'}
					>
						Купить {'\n'}
						{ticket.price}
					</Button>
					{isBuyTicketDialogOpen ? this.getTicketDialog(ticket) : null}
				</div>
				<Divider/>
			
			</div>
		);
	};
	
	private getTicketDialog = (ticket: TicketModel) =>{
		const {isBuyTicketDialogOpen} = this.state;
		const {concert} = this.props;

		return 	<BuyTicketPage
			concertId={concert.id}
			ticket={ticket}
			isOpen={isBuyTicketDialogOpen}
			onClose={() => this.setState({isBuyTicketDialogOpen: false})}
		/>;
	}
}


