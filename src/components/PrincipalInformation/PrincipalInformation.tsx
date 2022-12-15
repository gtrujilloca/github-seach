import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { UserModel } from '../../models/user.model';
export interface PrincipalInformationInterface {
	userState: UserModel | null;
}

const PrincipalInformation : React.FC<PrincipalInformationInterface> = (props) => {
	const {
		userState
	} = props;

	return <Fragment>
		<Stack direction='row' sx={{justifyContent: 'space-between'}}>
			<Typography variant='h4'>{userState?.name}</Typography>
			<Typography variant='subtitle2'>{userState?.created_at}</Typography>
		</Stack>
			<Typography variant='caption'>{userState?.login}</Typography>
	</Fragment>;
};

export default PrincipalInformation;
