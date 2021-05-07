import React, {ReactNode} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import {Style} from './styles';

export interface InternalProps {
	title: string;
}
export type Props = Style & InternalProps;


export class CustomizedSearch extends React.PureComponent<Props> {
	public render(): ReactNode {
		const { classes, title } = this.props;
		return (
			<Paper component="form" className={classes.root}>
				<div className={classes.iconButton} aria-label="menu">
					<SearchIcon />
				</div>
				<InputBase
					className={classes.input}
					placeholder={title}
					inputProps={{ 'aria-label': 'search google maps' }}
				/>
				<Button type="submit" variant="contained" color="secondary" className={classes.button} aria-label="search">
					Найти
				</Button>
			</Paper>
		);
	}
}

