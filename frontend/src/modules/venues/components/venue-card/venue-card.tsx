import React, {ReactNode} from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import {Card} from '@material-ui/core';
import {Style} from './styles';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VenuePage from '../../venue-page/index';
import {VenueModel} from '../../../../models/venue-model';

interface InternalProps{
	venue: VenueModel;
}

interface State{
	isVenuePageOpen: boolean;
}

export type Props = Style & InternalProps;

export class VenueCard extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isVenuePageOpen: false,
		};
	}

	public render(): ReactNode {
		const {classes, venue} = this.props;
		const {isVenuePageOpen} = this.state;
		return (
			<>
				<Card onClick={() => this.setState({isVenuePageOpen: true})} className={classes.card}>
					<Box className={classes.main} minHeight={300} position={'relative'}>
						<CardMedia
							className={classes.cardMedia}
							image={venue.imgPath}
						/>
						<div className={classes.content}>
							<div className={classes.tag}>Loft</div>
						</div>
					</Box>
					<Row
						className={classes.author}
						m={0}
						p={3}
						pt={2}
						gap={2}
						bgcolor={'common.white'}
					>
						<Info position={'middle'} useStyles={useNewsInfoStyles}>
							<InfoTitle >{venue.name}</InfoTitle>
							<div className={classes.divider}/>
							<InfoSubtitle>{venue.location}</InfoSubtitle>
							<InfoSubtitle className={classes.subtitle} variant="h3">
								<PeopleIcon  className={classes.icon} fontSize={'small'} />
								{venue.capacity}
							</InfoSubtitle>
							<InfoSubtitle className={classes.subtitle} variant="h3">
								<LocalOfferIcon  className={classes.icon} fontSize={'small'}  />
								{venue.rentPerHour}
							</InfoSubtitle>

						</Info>
					</Row>
					<div className={classes.shadow}/>
				</Card>
				<VenuePage
					venue={venue}
					isOpen={isVenuePageOpen}
					onClose={() => this.setState({isVenuePageOpen: false})}
				/>
			</>
		);
	}
}
