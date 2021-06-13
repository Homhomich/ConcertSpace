import axios from 'axios';
import {ConcertModel} from '../models/concert-model';
import {UserModel} from '../models/user-model';
import {TicketModel} from '../models/ticket-model';

export async function getAllConcerts(): Promise<ConcertModel[]> {
	return await axios.get('http://localhost:8080/concerts/all').then((response) => response.data);
}

export async function getSearchedConcerts(search: string): Promise<ConcertModel[]> {
	return await axios.get(`http://localhost:8080/concerts/search?search=${search}`, {params: search}).then((response) => response.data);
}

export async function putNewBoughtTicket(ticketId: number, user: Partial<UserModel>, concertId?: number): Promise<TicketModel> {
	console.log(JSON.stringify(user));
	return await axios.post('http://localhost:8080/concerts/buy', user, {
		params: {
			concertId: concertId,
			ticketSettingsId: ticketId
		}
	}).then((response) => response.data);
}

