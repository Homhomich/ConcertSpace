import React, { ReactNode } from 'react';
import {Styles} from './styles';
import {Button, Dialog, Divider, IconButton, Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import {Row} from '@mui-treasury/components/flex';
import {Info, InfoSubtitle, InfoTitle} from '@mui-treasury/components/info';
import {useNewsInfoStyles} from '@mui-treasury/styles/info/news';
import CloseIcon from '@material-ui/icons/Close';

export type Props = Styles & InternalProps;

interface InternalProps{
    isOpen: boolean;
    onClose: () => void;
}

export class TicketPage extends React.PureComponent<Props> {
	public render(): ReactNode {
		const { onClose, isOpen , classes} = this.props;
		return (
			<div>
				<Dialog maxWidth={'xl'} className={classes.main} onClose={onClose} aria-labelledby="simple-dialog-title" open={isOpen}>
					<div className={classes.title}>
						<Typography  variant="h2"  id="simple-dialog-title">Монеточка</Typography>
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
							<InfoTitle variant="h2">2 марта, 19.00</InfoTitle>
							<InfoSubtitle variant="h2">Event-Hall</InfoSubtitle>
						</Info>
					</Row>
					<div className={classes.divider}></div>
					<div>
						<div className={classes.content}>
							<Box  position={'relative'}>
								<CardMedia
									className={classes.cardMedia}
									image="https://vokrug.tv/pic/news/d/c/2/3/dc23153d1ed611cf38abdfe861e4d309.jpg"
								/>
							</Box>
							<div>	
								<Typography variant='body1' className={classes.cardMedia}>
								Успех певицы Монеточки (под этим псевдонимом выступает екатеринбурженка Елизавета Гырдымова) связывают с развитием социальных сетей и вирусным распространением информации внутри этих сетей. По сути, Монеточка повторила успех таких музыкантов, как Адель и Arctic Monkeys, — просто в их случае площадкой был MySpace, а Гырдымова использовала в качестве трамплина российскую «ВКонтакте». Успех и популярность Монеточке принесли, во-первых, ироничные, легко запоминающиеся тексты с яркими образами и спорными темами, во-вторых, узнаваемый невинно-детский голосок.
								</Typography>
								<div className={classes.item}>
									<Divider />
									<div className={classes.ticket}>
										<Info className={classes.item} position={'middle'} useStyles={useNewsInfoStyles}>
											<InfoTitle variant="h2">VIP</InfoTitle>
											<InfoSubtitle variant="h2">входной билет</InfoSubtitle>
										</Info>
										<Button className={classes.button} color={'secondary'} variant={'contained'}>
											Купить
											650р
										</Button>
									</div>

									<Divider />

									<div className={classes.ticket}>
										<Info className={classes.item} position={'middle'} useStyles={useNewsInfoStyles}>
											<InfoTitle variant="h2">Танцпол</InfoTitle>
											<InfoSubtitle variant="h2">входной билет</InfoSubtitle>
										</Info>
										<Button className={classes.button} color={'secondary'} variant={'contained'}>
											Купить
											850р
										</Button>
									</div>
									<Divider />
								</div>
							</div>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}


