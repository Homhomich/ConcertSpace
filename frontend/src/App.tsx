import React from 'react';
import './App.css';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import theme from './theme';
import 'fontsource-roboto';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Header from './modules/home-page/components/header/index';
import moment from 'moment';
import 'moment/locale/ru';
import {BrowserRouter} from 'react-router-dom';
import RouterContainer from './modules/router-container/index';
import Footer from './modules/home-page/components/footer/index';
import RentVenueDialog from './modules/venues/rent-venue-dialog/index';

function App() {
	moment.locale('ru');
	return (
		<MuiThemeProvider theme={theme}>
			<MuiPickersUtilsProvider locale={'ru'} libInstance={moment} utils={MomentUtils}>
				<BrowserRouter>
					<CssBaseline/>
					<Header/>

					<RentVenueDialog venue={{
						id: 1,
						name: 'Bob Marly',
						type: 'loft', // например лофт или студия или танцпол+сцена
						location: 'First dtreet',
						description: 'skcsbnchsssssssssssssssssss',
						rentPerHour: 1200,
						capacity: 20,
						ownerPhone: '1234567890',
						ownerEmail: 'string@,ailm',
						square: '29', // в ер диаграмме этого нет((
						imgPath: 'https://www.loft2rent.ru/upload_data/2019/8922/upldOKMFeD.jpg.900x600.jpg',
						disabledDates: [],

					}} isOpen={true} onClose={() => console.log('hi')}/>
					{/*	<RouterContainer />*/}
					<Footer/>
				</BrowserRouter>
			</MuiPickersUtilsProvider>


		</MuiThemeProvider>

	);
}

export default App;
