import {ArtistModel} from './artist-model';
import {TicketModel} from './ticket-model';

export interface ConcertModel {
	id?: number;
	name: string;
	artist: ArtistModel;
	location?: string; // при создании концерта это поле берется из venue
	description: string;
	date: string;
	tickets: TicketModel[];
	imgPath: string;
}
