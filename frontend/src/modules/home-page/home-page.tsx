import React, { ReactNode } from 'react';
import {Style} from './styles';
import MainBackground from './components/main-background/index';
import MainInfo from './components/main-info/index';
import Contacts from './components/contacts/index';

export type Props = Style;

export class HomePage extends React.PureComponent<Props> {
	public render(): ReactNode {
		const { classes } = this.props;

		return (
			<div>
				<MainBackground
					backgroundImage="http://kudago.com/media/images/event/42/95/4295d87e9dc23dfc1b027d1959025474.jpg"
					title="АПГРЕЙДНИ СВОИ ВЕЧЕРА"
					subtitle="Стань участником или организатором атмосферного концерта в своем городе."
					middleText="Создавай настроение"
					componentToShow={<div className={classes.divider}/>}
					backGroundStyle={classes.background}
				/>
				<MainInfo />
				<Contacts />
			</div>
		);
	}
}
