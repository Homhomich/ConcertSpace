import React, {ReactNode} from 'react';
import {Style} from './styles';
import CustomizedSearch from '../../../commons/search/index';
import MainBackground from '../../home-page/components/main-background/index';
import CustomizedCard from '../concert-card/index';
import {ConcertModel} from '../../../models/concert-model';
import {getAllConcerts, getSearchedConcerts} from '../../../services/concert-service';

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

	componentDidMount() {
		getAllConcerts().then(concerts => this.setState({concerts: concerts}));
	}

	public render(): ReactNode {
		const {classes} = this.props;
		const {concerts} = this.state;

		return (
			<div>
				<MainBackground
					backgroundImage="https://www.dontforgettomove.com/wp-content/uploads/2015/02/half-moon-party-dates.jpg"
					title="НЕ ПРОПУСТИ КОНЦЕРТ СВОЕЙ МЕЧТЫ"
					subtitle="Стань самым преданным фанатом"
					middleText="Окунись в атмосферу ламповых лофт-концертов."
					componentToShow={
						<CustomizedSearch
							getSearchedContent={this.getSearchedConcerts}
							title={'Наити концерт'}
						/>}
					backGroundStyle={classes.background}
				/>

				<div className={classes.cards}>
					{concerts.map((concert, index) => {
						return (
							<div className={classes.cardItem} key={index}>
								<CustomizedCard concert={concert}/>
							</div>
						);
					})}
				</div>


			</div>
		);
	}

	private getSearchedConcerts = (search: string) => {
		getSearchedConcerts(search).then(concerts => this.setState({concerts: concerts}));
	};

}


