import React, { ReactNode } from 'react';
import {Style} from './styles';
import Header from './components/header/index';
import MainBackground from './components/main-background/index';
import MainInfo from './components/main-info/index';
import Contacts from './components/contacts/index';

export type Props = Style;

export class HomePage extends React.PureComponent<Props> {
	public render(): ReactNode {
		return (
			<div>	
				<Header />
				<MainBackground />
				<MainInfo />
				<Contacts />
			</div>
		);
	}

}
