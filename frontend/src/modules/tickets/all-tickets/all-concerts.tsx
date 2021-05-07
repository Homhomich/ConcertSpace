import React, {ReactNode} from 'react';
import {Style} from './styles';
import CustomizedSearch from '../../../commons/search/index';
import MainBackground from '../../home-page/components/main-background/index';
import CustomizedCard from '../ticket-card/index';
import {ConcertModel} from '../../../models/concert-model';
import {getAllTickets} from './all-concerts-service';

export type Props = Style;

interface State {
	concerts: ConcertModel[];
}

export class AllConcertsPage extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			concerts: [],
		};
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	componentDidMount() {
		getAllTickets().then(concerts => this.setState({concerts: concerts}));
	}

	public render(): ReactNode {
		const {classes} = this.props;
		const arr = [
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
			{a: '1'},
		];
		return (
			<div>
				<MainBackground
					backgroundImage="https://www.dontforgettomove.com/wp-content/uploads/2015/02/half-moon-party-dates.jpg"
					title="НЕ ПРОПУСТИ КОНЦЕРТ СВОЕЙ МЕЧТЫ"
					subtitle="Стань самым преданным фанатом"
					middleText="Окунись в атмосферу ламповых лофт-концертов."
					componentToShow={<CustomizedSearch title={'Наити концерт'}/>}
					backGroundStyle={classes.background}
				/>

				<div className={classes.cards}>
					{arr.map((item, index) => {
						return (<div className={classes.cardItem} key={index}><CustomizedCard/></div>);
					})}
				</div>


			</div>
		);
	}
}


