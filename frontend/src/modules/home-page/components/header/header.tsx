import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import {AppBar, Toolbar} from '@material-ui/core';
import {Style} from './styles';

export type Props = Style;

export class Header extends React.PureComponent<Props>  {
	public render(): ReactNode {
		const { classes } = this.props;
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar className={classes.toolbar}>
						<div className={classes.left} />
						<Link
							variant="h6"
							underline="none"
							color="inherit"
							className={classes.title}
							href="/premium-themes/onepirate/"
						>
							{'concert space'}
						</Link>
						<div className={classes.right}>
							<Link
								color="inherit"
								variant="h6"
								underline="none"
								className={classes.rightLink}
								href="/premium-themes/onepirate/sign-in/"
							>
								{'tickets'}
							</Link>
							<Link
								variant="h6"
								underline="none"
								className={clsx(classes.rightLink, classes.linkSecondary)}
								href="/premium-themes/onepirate/sign-up/"
							>
								{'venues'}
							</Link>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
