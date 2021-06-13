import axios from 'axios';
import {ConcertModel} from '../models/concert-model';
import {UserModel} from '../models/user-model';
import {TicketModel} from '../models/ticket-model';

export async function getAllConcerts(): Promise<ConcertModel[]> {
	return await axios.get('https://concertspace-backend.herokuapp.com/concerts/all').then((response) => response.data);
}

export async function getSearchedConcerts(search: string): Promise<ConcertModel[]> {
	return await axios.get(`https://concertspace-backend.herokuapp.com/concerts/search?search=${search}`, {params: search}).then((response) => response.data);
}

export async function putNewBoughtTicket(ticketId: number, user: Partial<UserModel>, concertId?: number): Promise<TicketModel> {
	console.log(JSON.stringify(user));
	return await axios.post('https://concertspace-backend.herokuapp.com/concerts/buy', user, {
		params: {
			concertId: concertId,
			ticketSettingsId: ticketId
		}
	}).then((response) => response.data);
}

