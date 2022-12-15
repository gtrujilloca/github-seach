import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { UserModel } from '../../models/user.model';
export interface PaperInformationInterface {
	userState: UserModel | null;
}

const PaperInformation : React.FC<PaperInformationInterface> = (props) => {
	const {
		userState
	} = props;

	return <Paper elevation={3}>
		<Stack
			direction='row'
			spacing={3}
			sx={{justifyContent: 'space-evenly', margin: '20px'}}
		>
			<Stack direction='column'>
				<Typography variant='h5'>Repos</Typography>
				<Typography variant='h6'>{userState?.public_repos}</Typography>
			</Stack>
			<Stack direction='column'>
				<Typography variant='h5'>Followers</Typography>
				<Typography variant='h6'>{userState?.followers}</Typography>
			</Stack>
			<Stack direction='column'>
				<Typography variant='h5'>Following</Typography>
				<Typography variant='h6'>{userState?.following}</Typography>
			</Stack>
		</Stack>
	</Paper>;
};

export default PaperInformation;
