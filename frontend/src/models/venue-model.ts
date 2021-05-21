export interface VenueModel {
	id: number;
	name:string;
	type: string; // например лофт или студия или танцпол+сцена
	location: string;
	description: string;
	rentPerHour: number;
	capacity: number;
	ownerPhone: string;
	ownerEmail: string;
	square: string; // в ер диаграмме этого нет((
	imgPath: string;
	disabledDates: string[];
}
