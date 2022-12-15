import React from 'react';
import { CardMedia, Grid, Stack } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation/index';
import { UserModel } from '../../models/user.model';
import { Description } from '../Description';
export interface UserCardInterface {
	userState: UserModel | null;
}

const UserCard : React.FC<UserCardInterface> = (props) => {

	const {
		userState
	} = props;

	return <Grid
		container
		spacing={2}
		sx={{
			marginTop: '15px',
		}}
	>
		<Grid item xs={3}>
			<CardMedia
				component='img'
				alt='Gibhub user'
				image={userState?.avatar_url}
				sx={{
					borderRadius: '50%',
					marginLeft: '5px',
				}}
			/>
		</Grid>
		<Grid item xs={9}>
			<Stack
				direction='column'
				spacing={1}
				sx={{
					margin: '30px',
				}}
			>
				<PrincipalInformation userState={userState}/>
				<Description userState={userState}/>
			</Stack>
		</Grid>
	</Grid>;
};

export default UserCard;
