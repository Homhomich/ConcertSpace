import axios from 'axios';
import {VenueRentModel} from '../models/venue-rent-model';
import {VenueModel} from '../models/venue-model';

export async function getAllVenues(): Promise<VenueModel[]> {
	return await axios.get('https://concertspace-backend.herokuapp.com/venues/all').then((response) => response.data);
}

export async function getSearchedVenues(search: string): Promise<VenueModel[]> {
	return await axios.get(`https://concertspace-backend.herokuapp.com/venues/search?search=${search}`)
		.then((response) => response.data);
}

export async function putRentedVenue(venueId: number, venueRent: VenueRentModel): Promise<VenueModel> {
	console.log(JSON.stringify(venueRent));
	return await axios.post('https://concertspace-backend.herokuapp.com/venues/venue/rent', venueRent, {
		params: {venueId: venueId}
	}).then((response) => response.data);
}

