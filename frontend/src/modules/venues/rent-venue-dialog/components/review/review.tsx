import React, { ReactNode } from 'react';
import {Style} from './styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {TicketModel} from '../../../../../models/ticket-model';
import {UserModel} from '../../../../../models/user-model';

interface InternalProps{
	ticket: TicketModel;
	userInfo: UserModel;
}

export type Props = Style & InternalProps;

export class Review extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes, ticket , userInfo} = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Итог покупки
				</Typography>
				<List disablePadding>
					<ListItem className={classes.listItem} key={ticket.name}>
						<ListItemText primary={ticket.name} secondary={ticket.description} />
						<Typography variant="body2">{ticket.price}</Typography>
					</ListItem>
					<ListItem className={classes.listItem}>
						<ListItemText primary="Total" />
						<Typography variant="subtitle1" className={classes.total}>
							{ticket.price}
						</Typography>
					</ListItem>
				</List>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Владелец билета
						</Typography>
						<Typography gutterBottom>{userInfo.firstName} {' '} {userInfo.lastName}</Typography>
						<Typography gutterBottom>{userInfo.email}</Typography>
					</Grid>
					<Grid item container direction="column" xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Детали оплаты
						</Typography>
						<Grid container>
							<React.Fragment key={userInfo.cardNumber}>
								<Grid item xs={6}>
									<Typography gutterBottom>Card number</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{userInfo.cardNumber}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment key={userInfo.nameOnCard}>
								<Grid item xs={6}>
									<Typography gutterBottom>Card holder</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{userInfo.nameOnCard}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment key={userInfo.cvv}>
								<Grid item xs={6}>
									<Typography gutterBottom>CVV</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{userInfo.cvv}</Typography>
								</Grid>
							</React.Fragment>
							<React.Fragment key={userInfo.expireDate}>
								<Grid item xs={6}>
									<Typography gutterBottom>Expire date</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{userInfo.expireDate}</Typography>
								</Grid>
							</React.Fragment>
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


