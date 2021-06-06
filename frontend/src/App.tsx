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

function App() {
	moment.locale('ru');
	return (
		<MuiThemeProvider theme={theme}>
			<MuiPickersUtilsProvider locale={'ru'} libInstance={moment} utils={MomentUtils}>
				<BrowserRouter>
					<CssBaseline/>
					<Header/>
					<RouterContainer />
					<Footer/>
				</BrowserRouter>
			</MuiPickersUtilsProvider>


		</MuiThemeProvider>

	);
}

export default App;
