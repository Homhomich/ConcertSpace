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

interface InternalProps{
	image: string;
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
		const {classes, image} = this.props;
		const {isVenuePageOpen} = this.state;
		return (
			<>
				<Card onClick={() => this.setState({isVenuePageOpen: true})} className={classes.card}>
					<Box className={classes.main} minHeight={300} position={'relative'}>
						<CardMedia
							className={classes.cardMedia}
							image={image}
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
							<InfoTitle >Baby ROOM</InfoTitle>
							<div className={classes.divider}></div>
							<InfoSubtitle>ул. Электродная, д.32</InfoSubtitle>
							<InfoSubtitle className={classes.subtitle} variant="h3">
								<PeopleIcon  className={classes.icon} fontSize={'small'} />
									20 чел
							</InfoSubtitle>
							<InfoSubtitle className={classes.subtitle} variant="h3">
								<LocalOfferIcon  className={classes.icon} fontSize={'small'}  /> 10000 р/день
							</InfoSubtitle>

						</Info>
					</Row>
					<div className={classes.shadow}/>
				</Card>
				<VenuePage
					isOpen={isVenuePageOpen}
					onClose={() => this.setState({isVenuePageOpen: false})}
				/>
			</>
		);
	}
}
