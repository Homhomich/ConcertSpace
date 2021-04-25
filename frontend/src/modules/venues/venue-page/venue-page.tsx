import React, { ReactNode } from 'react';
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

export type Props = Style & InternalProps;

interface InternalProps{
	isOpen: boolean;
	onClose: () => void;
}

export class VenuePage extends React.PureComponent<Props> {
	public render(): ReactNode {
		const { onClose, isOpen , classes} = this.props;
		return (
			<div>
				<Dialog maxWidth={'xl'} className={classes.main} onClose={onClose} aria-labelledby="simple-dialog-title" open={isOpen}>
					<div className={classes.title}>
						<Typography  variant="h2"  id="simple-dialog-title">Boho loft</Typography>
						<IconButton >
							<CloseIcon color={'secondary'}/>
						</IconButton>
					</div>
					<Row
						className={classes.subtitle}
						gap={2}
						bgcolor={'common.white'}
					>
						<Info position={'middle'} useStyles={useNewsInfoStyles}>
							<InfoTitle variant="h2">Лофт</InfoTitle>
							<InfoSubtitle variant="h2">бауманская улица 20д</InfoSubtitle>
						</Info>
					</Row>
					<div className={classes.divider}></div>
					<div>
						<div className={classes.content}>
							<div>
								<img
									alt={'fghjk'}
									className={classes.cardMedia}
									src="https://www.loft2rent.ru/upload_data/2021/4500/upldUsRJdR.jpeg.900x600.jpg"
								/>
								<Button className={classes.button} fullWidth color={'secondary'} variant={'contained'}>
									Забронировать
								</Button>
							</div>
							<div>
								<Typography variant='body1' className={classes.cardMedia}>
									Boho loft – это уютный и стильный дизайнерский интерьер в стиле boho с авторскими картинами и зеленой зоной с подвесными креслами.

									Мы рады предложить вам удобное пространство для небольшой компании. Атмосфера созданного интерьера располагает к общению и отдыху с настольной игрой, кальяном, фильмом или музыкой.

									Также в вашем распоряжении будут:

									- 15 посадочных мест (количество которых при необходимости может быть увеличено до 20);

									- холодильник (винный шкаф);

									- проектор  (за дополнительную плату);

									- мощная музыкальная система;

									- караоке  (за дополнительную плату);

									- посуда (за дополнительную плату);

									- кальяны (за дополнительную плату).

									Наш лофт расположен в шаговой доступности от метро Бауманская, а также имеется круглосуточная бесплатная парковка.

									Boho loft может стать площадкой для воплощения любых ваших идей по проведению любых мероприятий в реальность.

									Мы готовы оказать любую помощь при организации мероприятий – кейтринг, диджей, ведущий.
								</Typography>
								<div className={classes.mainInfo}>
									<div className={classes.iconWithText}>
										<PeopleIcon />
										<Typography> 20 чел</Typography>
									</div>

									<div className={classes.iconWithText}>
										<LocalOfferIcon />
										<Typography> 15000 р/день</Typography>
									</div>

									<div className={classes.iconWithText}>
										<ZoomOutMapIcon />
										<Typography> 20 м</Typography>
									</div>
								</div>
								<div className={classes.contacts}>
									<div className={classes.contactsIcons}>
										<MailIcon />
										<Typography> laungeBar@mail.ru</Typography>
									</div>

									<div className={classes.contactsIcons}>
										<PhoneIcon />
										<Typography> 8(960)192-86-58</Typography>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}


