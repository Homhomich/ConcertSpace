import React, { ReactNode } from 'react';
import {Style} from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export type Props = Style;

export class ConcertParameters extends React.PureComponent<Props> {

	public render(): ReactNode {
		const  { classes } = this.props;

		return (
			<React.Fragment>
				<Typography variant="h6" gutterBottom>
					Введите данные владельца билета
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="concertName"
							name="concertName"
							label="Название концерта"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="genre"
							name="genre"
							label="Жанр"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="description"
							name="description"
							label="Описание концерта"
							fullWidth
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address"
							name="address"
							label="Address"
							fullWidth
							autoComplete="address"
						/>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}


