import {UserModel} from '../models/user-model';
import {UserErrorModel} from '../models/user-error-model';
import {ConcertModel} from '../models/concert-model';
import {ConcertErrorModel} from '../models/concert-error-model';

export function checkUserInfo(userInfo: Partial<UserModel>, setErrorFormModel: (errorFormModel: UserErrorModel) => void): boolean {
	const userErrorModel: UserErrorModel = {};

	userErrorModel.phoneNumber = !userInfo.phoneNumber;
	userErrorModel.cvv = !userInfo.cvv;
	userErrorModel.cardNumber = !userInfo.cardNumber;
	userErrorModel.email = !userInfo.email;
	userErrorModel.nameOnCard = !userInfo.nameOnCard;
	userErrorModel.firstName = !userInfo.firstName;
	userErrorModel.lastName = !userInfo.lastName;
	userErrorModel.expireDate = !userInfo.expireDate;

	setErrorFormModel(userErrorModel);

	return !userInfo.phoneNumber || !userInfo.cvv || !userInfo.cardNumber
		|| !userInfo.email || !userInfo.nameOnCard || !userInfo.firstName
		|| !userInfo.lastName || !userInfo.expireDate;
}

export function checkUserInfoWithoutCard(userInfo: Partial<UserModel>, setErrorFormModel: (errorFormModel: UserErrorModel) => void): boolean {
	const userErrorModel: UserErrorModel = {};

	userErrorModel.phoneNumber = !userInfo.phoneNumber;
	userErrorModel.email = !userInfo.email;
	userErrorModel.firstName = !userInfo.firstName;
	userErrorModel.lastName = !userInfo.lastName;

	setErrorFormModel(userErrorModel);

	return !userInfo.phoneNumber || !userInfo.email || !userInfo.firstName || !userInfo.lastName;
}

export function checkConcertParameters(concert: Partial<ConcertModel>, setConcertFormModel: (concertFormModel: ConcertErrorModel) => void): boolean {
	const concertErrors: ConcertErrorModel = {};

	concertErrors.name = !concert.name;
	concertErrors.artistName = !concert.artist?.name;
	concertErrors.genre = !concert.artist?.genre;
	concertErrors.date = !concert.date;
	concertErrors.location = !concert.location;
	concertErrors.imgPath = !concert.imgPath;
	concertErrors.description = !concert.description;

	concert.tickets?.forEach((ticket, index) => {
		if (!ticket.name || !ticket.description || !ticket.price) {
			concertErrors.tickets?.push(index);
		}
	});

	setConcertFormModel(concertErrors);

	return !concert.name || !concert.artist?.name || !concert.artist?.genre ||  !concert.date
		||  !concert.location ||  !concert.imgPath || !concert.description || !concertErrors.tickets;

}
