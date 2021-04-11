import React, {ReactNode} from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import {Card} from '@material-ui/core';
import {Style} from './styles';

export type Props = Style;

export class CustomizedCard extends React.PureComponent<Props> {
	public render(): ReactNode {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	    const {classes} = this.props;
		return (
			<>
				<Card className={classes.card}>
					<Box className={classes.main} minHeight={300} position={'relative'}>
						<CardMedia
							className={classes.cardMedia}
							image="https://vokrug.tv/pic/news/d/c/2/3/dc23153d1ed611cf38abdfe861e4d309.jpg"
						/>
						<div className={classes.content}>
							<div className={classes.tag}>Pop</div>
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
							<InfoTitle >Монеточка</InfoTitle>
							<div className={classes.divider}></div>
							<InfoSubtitle>2 марта, 19.00</InfoSubtitle>
							<InfoSubtitle variant="h3">Event-Hall</InfoSubtitle>

						</Info>
					</Row>

					<div className={classes.shadow}/>
				</Card>
			</>
		);
	}
}
