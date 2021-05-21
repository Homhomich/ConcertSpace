import axios from 'axios';
import {ConcertModel} from '../models/concert-model';
import {UserModel} from '../models/user-model';
import {TicketModel} from '../models/ticket-model';

export async function getAllConcerts(): Promise<ConcertModel[]> {
	return await axios.get('concerts/all').then((response) => response.data);
}

export async function getSearchedConcerts(search: string): Promise<ConcertModel[]> {
	return await axios.get('concerts', {params: search}).then((response) => response.data);
}

export async function putNewBoughtTicket(concertId: number, ticketId: number, user: Partial<UserModel>): Promise<TicketModel> {
	return await axios.post('concerts/buy', user, {
		params: {
			concertId: concertId,
			ticketId: ticketId
		}
	}).then((response) => response.data);
}

