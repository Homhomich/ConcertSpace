import axios from 'axios';
import {ConcertModel} from '../models/concert-model';
import {UserModel} from '../models/user-model';
import {TicketModel} from '../models/ticket-model';
import {concerts} from './test-values';

export async function getAllConcerts(): Promise<ConcertModel[]> {
	const promise = new Promise<ConcertModel[]>((resolve) => {
		setTimeout(() => resolve(concerts), 500);
	});
	return promise.then(result => result);
//	return await axios.get('concerts/all').then((response) => response.data);
}

export async function getConcertById(): Promise<ConcertModel> {
	const promise = new Promise<ConcertModel>((resolve) => {
		setTimeout(() => resolve(concerts[0]), 500);
	});
	return promise.then(result => result);
//	return await axios.get('concerts/concert/:{id}').then((response) => response.data);
}

export async function getSearchedConcerts(search: string): Promise<ConcertModel[]> {
	return await axios.get('concerts', {params: search}).then((response) => response.data);
}

export async function putNewBoughtTicket(ticketId: number, user: Partial<UserModel>, concertId?: number): Promise<TicketModel> {
	return await axios.post('concerts/buy', user, {
		params: {
			concertId: concertId,
			ticketId: ticketId
		}
	}).then((response) => response.data);
}

