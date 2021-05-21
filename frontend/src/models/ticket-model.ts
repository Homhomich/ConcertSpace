export interface TicketModel {
	id?: number;
	name: string; // тип билета, например, VIP или танцпол
	description: string; // например: входной билет или сидячее место
	price: number;
}
