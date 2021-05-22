import {ConcertModel} from './concert-model';
import {VenueParametersModel} from './venue-parameters';
import {UserModel} from './user-model';

export interface VenueRentModel{
	concert: Partial<ConcertModel>;
	venueRentParameters: VenueParametersModel;
	userInfo: Partial<UserModel>;
	rentComment: string;
}
