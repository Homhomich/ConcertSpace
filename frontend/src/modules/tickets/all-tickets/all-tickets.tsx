import React, { ReactNode } from 'react';
import {Style} from './styles';
import CustomizedSearch from '../../../commons/search/index';
import MainBackground from '../../home-page/components/main-background/index';
import CustomizedCard from '../../../commons/card/index';

export type Props = Style;

export class AllTicketsPage extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes } = this.props;
		const arr = [
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
			{a : '1'},
		];
		return (
			<div>
				<MainBackground
					backgroundImage="https://www.dontforgettomove.com/wp-content/uploads/2015/02/half-moon-party-dates.jpg"
					title="Upgrade your Fridays"
					subtitle="Discover the experience"
					middleText="Enjoy secret offers up to -70% off the best luxury hotels every Sunday."
					componentToShow={<CustomizedSearch />}
					backGroundStyle={classes.background}
				/>

				<div className={classes.cards}>
					{arr.map((item, index)=> {
						return (<div className={classes.cardItem} key={index}><CustomizedCard  /></div>);
					})}
				</div>


			</div>
		);
	}
}


