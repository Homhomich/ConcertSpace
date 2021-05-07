import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Style} from './styles';
import {Typography} from '@material-ui/core';

export type Props = Style ;

export function MainInfo(props: Props) {
	const { classes } = props;

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<img
					src="https://github.com/mui-org/material-ui/blob/master/docs/public/static/themes/onepirate/appCurvyLines.png?raw=true"
					className={classes.curvyLines}
					alt="curvy lines"
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="https://image.flaticon.com/icons/png/512/1598/1598814.png"
								alt="suitcase"
							/>
							<Typography variant="h6" className={classes.title}>
								ТЕПЛЕЙШИЕ КОНЦЕРТЫ
							</Typography>
							<Typography variant="subtitle1">
								{'Насладись выступлениями любимых исполнителей в' +
								' атмосферном месте и насладись живой музыкой '}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="https://www.clipartmax.com/png/middle/24-241795_electric-guitar-instrument-comments-electric-guitar-svg.png"
								alt="graph"
							/>
							<Typography variant="h6" className={classes.title}>
								НОВЫЕ ВПЕЧАТЛЕНИЯ
							</Typography>
							<Typography variant="subtitle1">
								{'Убеги от реальности и привычных шумных тусовок, окунувшись в рай из живой музыки и родных людей вокруг.'}
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src="https://www.pngfind.com/pngs/m/84-843832_png-file-svg-cocktail-icon-png-transparent-png.png"
								alt="clock"
							/>
							<Typography variant="h6" className={classes.title}>
								ЭКСКЛЮЗИВНЫЙ ШАНС
							</Typography>
							<Typography variant="subtitle1">
								{'Стань организатором концерта маленького исполнителя в твоем городе и подари кусочек рая на земле окружающим.'}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
