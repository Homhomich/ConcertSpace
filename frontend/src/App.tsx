import React from 'react';
import './App.css';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import theme from './theme';
import 'fontsource-roboto';
import Header from './modules/home-page/components/header/index';
import AllTicketsPage from './modules/tickets/all-tickets/index';
import HomePage from './modules/home-page/index';
import TicketPage from './modules/tickets/ticket-page/index';
import BuyTicketPage from './modules/tickets/buy-ticket-dialog/index';
import VenueCard from './modules/venues/components/venue-card/index';
import AllVenuesPage from './modules/venues/all-venues/index';
import VenuePage from './modules/venues/venue-page/index';
import RentVenueDialog from './modules/venues/rent-venue-dialog/index';

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			{/*
			<AllTicketsPage />
*/}
			{/*<HomePage />*/}

			{/*<TicketPage  isOpen={true} onClose={() => {console.log('close');}} />*/}

			{/*
			<AllVenuesPage />
*/}

			{/*
			<VenuePage  isOpen={true} onClose={() => {console.log('close');}}  />
*/}

			{/*
			<BuyTicketPage isOpen={true} />
*/}

			<RentVenueDialog isOpen={true} />

			
			
		</MuiThemeProvider>

	);
}

export default App;
