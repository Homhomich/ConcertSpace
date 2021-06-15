import React, {ReactNode} from 'react';
import {Style} from './styles';
import CustomizedSearch from '../../../commons/search/index';
import MainBackground from '../../home-page/components/main-background/index';
import CustomizedCard from '../concert-card/index';
import {ConcertModel} from '../../../models/concert-model';
import {getAllConcerts, getSearchedConcerts} from '../../../services/concert-service';
import Loader from '../../../commons/loader/index';

export type Props = Style;

interface State {
	isLoading: boolean;
	concerts: ConcertModel[];
}

export class AllConcertsPage extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			concerts: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		getAllConcerts().then(concerts => this.setState({concerts: concerts, isLoading: false}));
	}

	public render(): ReactNode {
		const {classes} = this.props;
		const {concerts, isLoading} = this.state;

		return (
			<div>
				{isLoading ? <Loader/> : (
					<>
						<MainBackground
							backgroundImage="https://www.dontforgettomove.com/wp-content/uploads/2015/02/half-moon-party-dates.jpg"
							title="НЕ ПРОПУСТИ КОНЦЕРТ СВОЕЙ МЕЧТЫ"
							subtitle="Стань самым преданным фанатом"
							middleText="Окунись в атмосферу ламповых лофт-концертов."
							componentToShow={
								<CustomizedSearch
									getSearchedContent={this.getSearchedConcerts}
									title={'Найти концерт'}
								/>}
							backGroundStyle={classes.background}
						/>

						<div className={classes.cards}>
							{concerts.map((concert) => {
								return (
									<div className={classes.cardItem} key={concert.id}>
										<div onClick={() => {
											// eslint-disable-next-line @typescript-eslint/ban-ts-comment
											// @ts-ignore
											if (typeof window['ym'] !== 'undefined') {
												// eslint-disable-next-line @typescript-eslint/ban-ts-comment
												// @ts-ignore
												window['ym'](79795747,'reachGoal','buy_venue_click');
											}
										}}>
											<CustomizedCard concert={concert}/>
										</div>
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
		);
	}

	private getSearchedConcerts = (search: string) => {
		this.setState({isLoading: true});
		getSearchedConcerts(search).then(concerts => this.setState({concerts: concerts, isLoading: false}));
	};
}


