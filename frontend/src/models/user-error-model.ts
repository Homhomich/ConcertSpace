import {ErrorModel} from './concert-error-model';

export interface UserErrorModel{
	firstName?: boolean;
	lastName?: boolean;
	email?: ErrorModel;
	phoneNumber?: ErrorModel;
	cardNumber?: ErrorModel;
	cvv?: ErrorModel;
	nameOnCard?: boolean;
	expireDate?: boolean;
}
