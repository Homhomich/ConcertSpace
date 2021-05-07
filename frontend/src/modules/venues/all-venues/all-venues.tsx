import React, { ReactNode } from 'react';
import {Style} from './styles';
import CustomizedSearch from '../../../commons/search/index';
import MainBackground from '../../home-page/components/main-background/index';
import VenueCard from '../components/venue-card/index';

export type Props = Style;

export class AllVenuesPage extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes } = this.props;
		const arr = [
			{a : 'https://speedrent.s3.eu-west-1.amazonaws.com/d8/venue/photo/662454/2020/341962_1606135483.2743.jpg'},
			{a : 'https://basementloft.ru/uploads/s/k/h/s/khsmjqug42hy/img/full_vk8QC2kC.jpg'},
			{a : 'https://www.loft2rent.ru/upload_data/2021/7393/upldrhNopB.jpg.900x600.jpg'},
			{a : 'https://mpp-staging.s3.amazonaws.com/uploads/picture/file/11572/IMG_20200626_010734.jpg'},
			{a : 'https://www.loft2rent.ru/upload_data/2019/1967/upldv815f8.jpg.900x600.jpg'},
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
					backgroundImage="https://image.kurier.at/images/cfs_landscape_616w_347h/2706293/46-110947826.jpg"
					title="ОРГАНИЗУЙ КОНЦЕРТ СВОЕЙ МЕЧТЫ"
					subtitle=""
					middleText="Бронируй площадку, продавай билеты, стань кузнецом своей зажигательной пятницы."
					componentToShow={<CustomizedSearch title={'Найти площадку'} />}
					backGroundStyle={classes.background}
				/>

				<div className={classes.cards}>
					{arr.map((item, index)=> {
						return (<div className={classes.cardItem} key={index}><VenueCard  image={item.a} /></div>);
					})}
				</div>


			</div>
		);
	}
}


