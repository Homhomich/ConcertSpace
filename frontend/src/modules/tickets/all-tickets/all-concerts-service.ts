import {ConcertModel} from '../../../models/concert-model';
import axios from 'axios';

export async function getAllTickets(): Promise<ConcertModel[]> {
	return await axios.get('api/tickets').then((response) => response.data);
}

