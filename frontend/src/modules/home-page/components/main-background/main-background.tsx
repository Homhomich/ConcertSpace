import React from 'react';
import {Style} from './styles';
import ProductHeroLayout from './product-hero-layout';
import Typography from '@material-ui/core/Typography';

const backgroundImage = 'http://kudago.com/media/images/event/42/95/4295d87e9dc23dfc1b027d1959025474.jpg';

export type Props = Style ;


export function MainBackground(props: Props) {
	const { classes } = props;

	return (
		<ProductHeroLayout backgroundClassName={classes.background}>
			<img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
			<Typography color="inherit" align="center" variant="h2">
                Upgrade your Fridays
			</Typography>
			<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
			</Typography>

			<div className={classes.divider}></div>
			<Typography variant="body2" color="inherit" className={classes.more}>
                Discover the experience
			</Typography>
		</ProductHeroLayout>
	);
}

