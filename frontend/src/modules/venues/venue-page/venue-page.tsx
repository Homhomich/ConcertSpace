import React, {ReactNode} from 'react';
import {Button, Dialog, IconButton, Typography} from '@material-ui/core';
import {Row} from '@mui-treasury/components/flex';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useNewsInfoStyles} from '@mui-treasury/styles/info/news';
import CloseIcon from '@material-ui/icons/Close';
import {Style} from './styles';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RentVenueDialog from '../rent-venue-dialog/index';
import {VenueModel} from '../../../models/venue-model';

export type Props = Style & InternalProps;

interface State {
	isRentDialogOpen: boolean;
}

interface InternalProps {
	venue: VenueModel;
	isOpen: boolean;
	onClose: () => void;
}

export class VenuePage extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isRentDialogOpen: false,
		};
	}

	public render(): ReactNode {
		const {onClose, isOpen, classes, venue} = this.props;
		const {isRentDialogOpen} = this.state;

		return (
			<div>
				<Dialog maxWidth={'xl'} className={classes.main} onClose={onClose} aria-labelledby="simple-dialog-title" open={isOpen}>
					<div className={classes.title}>
						<Typography variant="h2" id="simple-dialog-title">{venue.name}</Typography>
						<IconButton onClick={onClose}>
							<CloseIcon color={'secondary'}/>
						</IconButton>
					</div>
					<Row
						className={classes.subtitle}
						gap={2}
						bgcolor={'common.white'}
					>
						<Info position={'middle'} useStyles={useNewsInfoStyles}>
							<InfoTitle variant="h2">{venue.type}</InfoTitle>
							<InfoSubtitle variant="h2">{venue.location}</InfoSubtitle>
						</Info>
					</Row>
					<div className={classes.divider}/>
					<div>
						<div className={classes.content}>
							<div>
								<img
									alt={'image'}
									className={classes.cardMedia}
									src={venue.imgPath}
								/>
								<Button onClick={() => this.setState({isRentDialogOpen: true})} className={classes.button} fullWidth color={'secondary'} variant={'contained'}>
									Забронировать
								</Button>
							</div>
							<div>
								<Typography variant="body1" className={classes.cardMedia}>
									{venue.description}
								</Typography>
								<div className={classes.mainInfo}>
									<div className={classes.iconWithText}>
										<PeopleIcon/>
										<Typography> {venue.capacity} {' '} чел</Typography>
									</div>

									<div className={classes.iconWithText}>
										<LocalOfferIcon/>
										<Typography> {venue.rentPerHour} руб/ч </Typography>
									</div>

									<div className={classes.iconWithText}>
										<ZoomOutMapIcon/>
										<Typography> {venue.square} (м.кв)</Typography>
									</div>
								</div>
								<div className={classes.contacts}>
									<div className={classes.contactsIcons}>
										<MailIcon/>
										<Typography> {venue.ownerEmail} </Typography>
									</div>

									<div className={classes.contactsIcons}>
										<PhoneIcon/>
										<Typography> {venue.ownerPhone} </Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Dialog>
				{isRentDialogOpen ? this.getComp() : null}
			</div>
		);
	}

	private getComp = () => {
		const {venue} = this.props;
		const {isRentDialogOpen} = this.state;
		return <RentVenueDialog
			venue={venue}
			onClose={() => {
				this.setState({isRentDialogOpen: false});
			}}
			isOpen={isRentDialogOpen}
		/>;
	};
}


