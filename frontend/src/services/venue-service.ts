import axios from 'axios';
import {VenueRentModel} from '../models/venue-rent-model';
import {VenueModel} from '../models/venue-model';
import {venues} from './test-values';

export async function getAllVenues(): Promise<VenueModel[]> {
	const promise = new Promise<VenueModel[]>((resolve) => {
		setTimeout(() => resolve(venues), 500);
	});
	return promise.then(result => result);
	
	//return await axios.get('venues/all').then((response) => response.data);
}

export async function getSearchedVenues(search: string): Promise<VenueModel[]> {
	return await axios.get('venues', {params: search}).then((response) => response.data);
}

export async function putRentedVenue(venueId: number, venueRent: VenueRentModel): Promise<VenueModel> {
	return await axios.post('venues/rent', venueRent, {
		params: {venueId: venueId}
	}).then((response) => response.data);
}

