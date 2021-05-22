import {UserModel} from '../models/user-model';
import {UserErrorModel} from '../models/user-error-model';
import {ConcertModel} from '../models/concert-model';
import {ConcertErrorModel, ErrorModel} from '../models/concert-error-model';

export function checkUserInfo(userInfo: Partial<UserModel>, setErrorFormModel: (errorFormModel: UserErrorModel) => void): boolean {
	const userErrorModel: UserErrorModel = {};

	userErrorModel.phoneNumber = checkPhoneNumber(userInfo.phoneNumber);
	userErrorModel.cvv = !userInfo.cvv;
	userErrorModel.cardNumber = !userInfo.cardNumber;
	userErrorModel.email = checkEmail(userInfo.email);
	userErrorModel.nameOnCard = !userInfo.nameOnCard;
	userErrorModel.firstName = !userInfo.firstName;
	userErrorModel.lastName = !userInfo.lastName;
	userErrorModel.expireDate = !userInfo.expireDate;

	setErrorFormModel(userErrorModel);

	return userErrorModel.phoneNumber.error || !userInfo.cvv || !userInfo.cardNumber
		|| userErrorModel.email.error || !userInfo.nameOnCard || !userInfo.firstName
		|| !userInfo.lastName || !userInfo.expireDate;
}

export function checkUserInfoWithoutCard(userInfo: Partial<UserModel>, setErrorFormModel: (errorFormModel: UserErrorModel) => void): boolean {
	const userErrorModel: UserErrorModel = {};

	userErrorModel.phoneNumber = checkPhoneNumber(userInfo.phoneNumber);
	userErrorModel.email = checkEmail(userInfo.email);
	userErrorModel.firstName = !userInfo.firstName;
	userErrorModel.lastName = !userInfo.lastName;

	setErrorFormModel(userErrorModel);

	return userErrorModel.phoneNumber.error  || userErrorModel.email.error || !userInfo.firstName || !userInfo.lastName;
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
		||  !concert.location ||  !concert.imgPath || !concert.description || !!concertErrors.tickets;

}

export function checkPhoneNumber(phoneNumber: string| undefined): ErrorModel{
	const regex = /^(\+7|7|8)?[\s\\-]?\(?[489][0-9]{2}\)?[\s\\-]?[0-9]{3}[\s\\-]?[0-9]{2}[\s\\-]?[0-9]{2}$/;
	if (!phoneNumber){
		return {error: true, helperText: 'Обязательное поле'};
	}
	if(!regex.test(phoneNumber)){
		return {error: true, helperText: 'Неверный формат номера'};
	}
	return {error: false, helperText: ''};
}

export function checkEmail(email: string | undefined): ErrorModel{
	if (!email){
		return {error: true, helperText: 'Обязательное поле'};
	}
	if(!email.includes('@mail.ru') && !email.includes('@gmail.com') && !email.includes('@yandex.ru')){
		return {error: true, helperText: 'Неверный формат почтового адреса'};
	}
	return {error: false, helperText: ''};
}
