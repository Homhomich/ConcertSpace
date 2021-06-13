import React, {FormEvent} from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {Style} from './styles';
import {Button, Snackbar, TextField, Typography} from '@material-ui/core';
import {checkPhoneNumber} from '../../../../services/validation-service';

export type Props = Style ;

export function Contacts(props: Props) {
	const { classes } = props;
	const [open, setOpen] = React.useState(false);
	const [input, setInput] = React.useState('');
	const [snackBarText, setSnackBarText] = React.useState('Наш оператор перезвонит вам в ближайшее время.');



	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const check = checkPhoneNumber(input);
		if(check.error){
			setSnackBarText('Неверно введен номер. Пожалуйста, попробуйте снова.');
		}
		else {
			setSnackBarText('Наш оператор перезвонит вам в ближайшее время.');
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	return (
		<Container className={classes.root} component="section">
			<Grid container>
				<Grid item xs={12} md={6} className={classes.cardWrapper}>
					<div className={classes.card}>
						<form onSubmit={handleSubmit} className={classes.cardContent}>
							<Typography variant="h2" component="h2" gutterBottom>
                                Мы на связи
							</Typography>
							<Typography variant="h5">
                                Всегда готовы помочь с подбором площадки для твоего концерта или покупкой билета
							</Typography>
							<TextField onChange={handlePhoneChange} variant={'outlined'} className={classes.textField} id={'phone'} placeholder="Телефон" />
							<Button type="submit" color="primary" variant="contained" className={classes.button}>
                                перезвоните мне
							</Button>
						</form>
					</div>
				</Grid>
				<Grid item xs={12} md={6} className={classes.imagesWrapper}>
					<Hidden smDown>
						<div className={classes.imageDots} />
						<img
							src="https://content.instructables.com/ORIG/FZC/66MO/JGWJEYKT/FZC66MOJGWJEYKT.jpg?auto=webp"
							alt="call to action"
							className={classes.image}
						/>
					</Hidden>
				</Grid>
			</Grid>
			<Snackbar
				open={open}
				onClose={handleClose}
				autoHideDuration={4000}
				message={snackBarText}
			/>
		</Container>
	);
}
