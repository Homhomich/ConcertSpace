import React, {ReactNode} from 'react';
import {CircularProgress} from '@material-ui/core';
import {Style} from './styles';

export type Props = Style;

export class Loader extends React.PureComponent<Props> {
	public render(): ReactNode {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<CircularProgress className={classes.loader} size={'5rem'} />
			</div>
		);
	}
}

