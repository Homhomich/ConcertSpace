import React, {ReactNode} from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import {Card} from '@material-ui/core';
import {Style} from './styles';
import {ConcertModel} from '../../../models/concert-model';
import ConcertPage from '../concert-page/index';

interface InternalProps{
	concert: ConcertModel;
}

export type Props = InternalProps & Style;

interface State{
	isTicketCardOpen: boolean;
}


export class ConcertCard extends React.PureComponent<Props,State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isTicketCardOpen: false,
		};
	}

	public render(): ReactNode {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	    const {classes, concert} = this.props;
		const {isTicketCardOpen} = this.state;

		return (
			<>
				<Card onClick={()=> this.setState({isTicketCardOpen: true})} className={classes.card}>
					<Box className={classes.main} minHeight={300} position={'relative'}>
						<CardMedia
							className={classes.cardMedia}
							image={concert.imgPath}
						/>
						<div className={classes.content}>
							<div className={classes.tag}>{concert.artist.genre}</div>
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
							<InfoTitle >{concert.artist.name}</InfoTitle>
							<div className={classes.divider}/>
							<InfoSubtitle>{concert.date}</InfoSubtitle>
							<InfoSubtitle variant="h3">{concert.location}</InfoSubtitle>

						</Info>
					</Row>

					<div className={classes.shadow}/>
				</Card>
				<ConcertPage
					concert={concert}
					isOpen={isTicketCardOpen}
					onClose={()=> this.setState( {isTicketCardOpen: false})}
				/>
			</>
		);
	}
}
