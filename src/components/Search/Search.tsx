import React, { useRef } from 'react';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material';
export interface SearchInterface {
	setInputUser: (val: string) => void
}

const Search : React.FC<SearchInterface> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const {
		setInputUser
	} = props;

	return <Stack
		direction = 'row'
		sx={{
			marginTop: '30px',
			width: '80%',
		}}
	>
		<TextField
			label='Github user'
			id='outline-basic'
			variant='outlined'
			inputRef={inputRef}
			type= 'text'
			fullWidth={false}
			autoComplete='off'
			placeholder='Octocat'
			sx={{
				width: '90%',
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton size='small' onClick={() => setInputUser(inputRef.current?.value || '')}>
							<SearchIcon/>
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	</Stack>
};

export default Search;
