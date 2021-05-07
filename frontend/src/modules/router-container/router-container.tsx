import React, { ReactNode } from 'react';
import {Style} from './styles';
import {Redirect, RedirectProps, Route, Switch} from 'react-router';
import {Path} from './routes';
import HomePage from '../home-page/index';
import AllTicketsPage from '../tickets/all-tickets/index';
import AllVenuesPage from '../venues/all-venues/index';

export type Props = Style;

export class RouterContainer extends React.PureComponent<Props> {
	public render(): ReactNode {
		return (
			<div>
				{this.getRoutes()}
			</div>
		);
	}

	private getRoutes(): React.ReactNode {
		const redirectProps: RedirectProps = {
			path: Path.DEFAULT,
			to: {
				pathname: Path.HOME_PAGE,
				state: {
					from: Path.DEFAULT,
				},
			},
		};
		return (
			<Switch>
				<Redirect exact {...redirectProps} />
				<Route exact path={Path.HOME_PAGE} component={HomePage} />
				<Route exact path={Path.VENUES} component={AllVenuesPage} />
				<Route exact path={Path.TICKETS} component={AllTicketsPage} />
			</Switch>
		);
	}
}
