import React, {ReactNode} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import {Style} from './styles';

export interface InternalProps {
	type: 'concert' | 'venue';
	title: string;
	getSearchedContent: (search: string) => void;
}

export type Props = Style & InternalProps;

interface State {
	inputSearch: string;
}

export class CustomizedSearch extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {inputSearch: ''};
	}

	public render(): ReactNode {
		const {classes, title} = this.props;
		return (
			<Paper component="form" className={classes.root}>
				<div className={classes.iconButton} aria-label="menu">
					<SearchIcon/>
				</div>
				<InputBase
					className={classes.input}
					placeholder={title}
					onChange={this.handleInputChange}
					inputProps={{'aria-label': 'search google maps'}}
				/>
				<Button
					onClick={this.handleSearch}
					type="submit" variant="contained"
					color="secondary"
					className={classes.button}
					aria-label="search"
				>
					Найти
				</Button>
			</Paper>
		);
	}

	private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({inputSearch: event.target.value});
	};

	private handleSearch = () => {
		const {getSearchedContent, type} = this.props;
		const {inputSearch} = this.state;
		getSearchedContent(inputSearch);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (typeof window['ym'] !== 'undefined') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			type === 'venue'? window['ym'](79795747,'reachGoal','venue_search_click') : window['ym'](79795747,'reachGoal','search_concert_click');
		}
	};
}

