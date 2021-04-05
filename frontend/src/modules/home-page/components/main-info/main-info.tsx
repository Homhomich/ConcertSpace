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
                                The best luxury hotels
							</Typography>
							<Typography variant="subtitle1">
								{'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
								{', go for a mini-vacation just a few subway stops away from your home.'}
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
                                New experiences
							</Typography>
							<Typography variant="subtitle1">
								{'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
								{'your Sundays will not be alike.'}
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
                                Exclusive rates
							</Typography>
							<Typography variant="subtitle1">
								{'By registering, you will access specially negotiated rates '}
								{'that you will not find anywhere else.'}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
