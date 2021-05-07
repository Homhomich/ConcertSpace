import React, {ReactNode} from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {Style} from './styles';
import {Typography} from '@material-ui/core';


export type Props = Style ;

function Copyright() {
	return (
		<React.Fragment>
			{'© '}
			<Link color="inherit" href="https://material-ui.com/">
				CONCERT SPACE
			</Link>{' '}
			{new Date().getFullYear()}
		</React.Fragment>
	);
}

export class Footer extends React.PureComponent<Props> {
	public render(): ReactNode {
		const {classes} = this.props;
		return (
			<Typography component="footer" className={classes.root}>
				<Container className={classes.container}>
					<Grid container spacing={5}>
						<Grid item xs={6} sm={4} md={3}>
							<Grid
								container
								direction="column"
								justify="flex-end"
								className={classes.iconsWrapper}
								spacing={2}
							>
								<Grid item className={classes.icons}>
									<a href="https://github.com/Homhomich/ConcertSpace" className={classes.icon}>
										<img style={{width: '80px'}} alt={'Github'} src={'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'} /></a>
								</Grid>
								<Grid item>
									<Copyright />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Typography>
		);
	}
}

