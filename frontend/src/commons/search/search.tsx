import React, {ReactNode} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import {Style} from './styles';

export type Props = Style;


export class CustomizedSearch extends React.PureComponent<Props> {
	public render(): ReactNode {
		const { classes } = this.props;
		return (
			<Paper component="form" className={classes.root}>
				<div className={classes.iconButton} aria-label="menu">
					<SearchIcon />
				</div>
				<InputBase
					className={classes.input}
					placeholder="Search the concert" //todo titile propp
					inputProps={{ 'aria-label': 'search google maps' }}
				/>
				<Button type="submit" variant="contained" color="secondary" className={classes.button} aria-label="search">
				Search
				</Button>
			</Paper>
		);
	}
}

