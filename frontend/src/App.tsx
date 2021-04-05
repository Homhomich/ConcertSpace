import React from 'react';
import './App.css';
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import theme from './theme';
import 'fontsource-roboto';
import HomePage from './modules/home-page/index';

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<HomePage />
		</MuiThemeProvider>

	);
}

export default App;
