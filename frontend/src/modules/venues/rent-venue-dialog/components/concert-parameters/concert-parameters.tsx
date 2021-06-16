import React, {ReactNode} from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {DatePicker} from '@material-ui/pickers';
import {MaterialUiPickersDate} from '@material-ui/pickers/typings/date';
import moment from 'moment';
import TicketsCreateContainer from '../ticket-create-container/index';
import {ConcertModel} from '../../../../../models/concert-model';
import {TicketKeyModel} from '../ticket-create-container/ticket-create-container';
import {TicketModel} from '../../../../../models/ticket-model';
import {ConcertErrorModel} from '../../../../../models/concert-error-model';

interface InternalProps {
	concert: Partial<ConcertModel>;
	disabledDates: string[];
	handleSetConcertInfo: (concertInfo: Partial<ConcertModel>) => void;
	concertErrorModel: ConcertErrorModel;
	venueCapacity: number;
}

export type Props = Style & InternalProps;

export class ConcertParameters extends React.PureComponent<Props> {

	public render(): ReactNode {
		const {concert, concertErrorModel, venueCapacity} = this.props;
		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите описание концерта
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={concert.name ? concert.name : ''}
							error={concertErrorModel.name}
							helperText={concertErrorModel.name ? 'Обязательное поле' : undefined}
							id="concertName"
							name="concertName"
							label="Название концерта"
							fullWidth
							onChange={this.handleConcertNameChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							value={concert.imgPath ? concert.imgPath : ''}
							error={concertErrorModel.imgPath}
							helperText={concertErrorModel.imgPath ? 'Обязательное поле' : undefined}
							id="img"
							name="img"
							label="Постер концерта (ссылка)"
							fullWidth
							onChange={this.handleConcertImgChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							value={concert.description ? concert.description : ''}
							error={concertErrorModel.description}
							helperText={concertErrorModel.description ? 'Обязательное поле' : undefined}
							id="description"
							name="description"
							label="Описание концерта"
							fullWidth
							multiline
							rows={4}
							onChange={this.handleConcertDescriptionChange}
						/>
					</Grid>
					<Grid item>
						<TextField
							required
							value={concert.artist?.name ? concert.artist.name : ''}
							error={concertErrorModel.artistName}
							helperText={concertErrorModel.artistName ? 'Обязательное поле' : undefined}
							label="Артист"
							fullWidth
							onChange={this.handleConcertArtistChange}
						/>
						<TextField
							required
							value={concert.artist?.genre ? concert.artist.genre : ''}
							error={concertErrorModel.genre}
							helperText={concertErrorModel.genre ? 'Обязательное поле' : undefined}
							id="genre"
							name="genre"
							label="Жанр"
							fullWidth
							onChange={this.handleConcertGenreChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<DatePicker
							required
							autoOk
							value={concert.date ? concert.date : null}
							error={concertErrorModel.date}
							helperText={concertErrorModel.date ? 'Обязательное поле' : undefined}
							label="Дата бронирования"
							disablePast={true}
							shouldDisableDate={this.shouldDisableDate}
							onChange={this.handleDateChange}
							variant={'inline'}
						/>
					</Grid>
					<Grid item>
						<TicketsCreateContainer
							tickets={concert.tickets}
							max={venueCapacity}
							handleTicketTypeAdd={this.handleTicketTypeAdd}/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}

	private handleTicketTypeAdd = (tickets: TicketKeyModel[]) => {
		const newTickets: TicketModel[] = [];
		tickets.forEach(t => {
			if (t.name && t.price && t.description && t.amount) {
				newTickets.push({name: t.name, price: t.price, description: t.description, amount: t.amount});
			}
		});
		const newConcertModel: Partial<ConcertModel> = {
			tickets: newTickets,
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};

	private handleConcertNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newConcertModel: Partial<ConcertModel> = {
			name: event.target.value,
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};

	private handleConcertDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newConcertModel: Partial<ConcertModel> = {
			description: event.target.value,
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};
	private handleConcertImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newConcertModel: Partial<ConcertModel> = {
			imgPath: event.target.value,
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};
	private handleConcertArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newConcertModel: Partial<ConcertModel> = {
			artist: Object.assign({}, this.props.concert.artist, {name: event.target.value})
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};
	private handleConcertGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newConcertModel: Partial<ConcertModel> = {
			artist: Object.assign({}, this.props.concert.artist, {genre: event.target.value})
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};

	private handleDateChange = (date: MaterialUiPickersDate) => {
		if (!date) {
			return;
		}
		const ISODate = moment(date).toISOString(true);
		const newConcertModel: Partial<ConcertModel> = {
			date: ISODate,
		};
		this.props.handleSetConcertInfo(newConcertModel);
	};


	private shouldDisableDate = (chosenDate: MaterialUiPickersDate): boolean => {
		const {disabledDates} = this.props;
		let isDisabled = false;
		disabledDates.forEach(date => {
			if (date === moment(chosenDate).format('DD.MM.YYYY')) {
				isDisabled = true;
			}
		});
		return isDisabled;
	};
}


