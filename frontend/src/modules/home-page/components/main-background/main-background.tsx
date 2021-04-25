import React from 'react';
import {Style} from './styles';
import ProductHeroLayout from './product-hero-layout';
import Typography from '@material-ui/core/Typography';

export type Props = Style & InternalProps;

export interface InternalProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
	middleText: string;
	componentToShow: React.ReactNode;
	backGroundStyle: string;
}

export function MainBackground(props: Props) {
	const { classes, backgroundImage, componentToShow, middleText, subtitle, title, backGroundStyle} = props;

	return (
		<ProductHeroLayout backgroundClassName={backGroundStyle}>
			<img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
			<Typography color="inherit" align="center" variant="h2">
				{title}
			</Typography>
			<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
				{middleText}
			</Typography>
			{componentToShow}
			<Typography variant="body1" color="inherit" className={classes.more}>
				{subtitle}
			</Typography>
		</ProductHeroLayout>
	);
}

/*<ProductHeroLayout backgroundClassName={classes.background}>
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
</ProductHeroLayout>*/
