import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { UserModel } from '../../models/user.model';
import { LocationOn, Twitter, Language, Business } from '@mui/icons-material'
export interface LocationInformationInterface {
	userState: UserModel | null;
}

const LocationInformation : React.FC<LocationInformationInterface> = (props) => {
	const {
		userState
	} = props;
	return <Grid container spacing={2} sx={{marginTop: '15px'}}>
		<Grid item xs={6}>
			<Stack spacing={2} direction='row'>
				<LocationOn/>
				<Typography>{userState?.location}</Typography>
			</Stack>
		</Grid>
		<Grid item xs={6}>
			<Stack spacing={2} direction='row'>
				<Twitter/>
				<Typography>{`@${userState?.twitter_username}` ?? 'Not available'}</Typography>
			</Stack>
		</Grid>
		<Grid item xs={6}>
			<Stack spacing={2} direction='row'>
				<Language/>
				<Typography>{userState?.blog ?? 'Not available'}</Typography>
			</Stack>
		</Grid>
		<Grid item xs={6}>
			<Stack spacing={2} direction='row'>
				<Business/>
				<Typography>{userState?.company ?? 'Not available'}</Typography>
			</Stack>
		</Grid>
	</Grid>;
};

export default LocationInformation;
