import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { LocationInformation } from '../../components/LocationInformation';
import { PaperInformation } from '../../components/PaperInformation';
import { UserModel } from '../../models/user.model';
export interface DescriptionInterface {
	userState: UserModel | null;
}

const Description : React.FC<DescriptionInterface> = (props) => {
	const {
		userState
	} = props;

	return <Fragment>
		<Stack sx={{justifyContent: 'center'}}>
			<Typography variant='body1'>
				{
					userState?.bio
						?? 'Lorem ipsum dolor sit amet, consectetur adip'
				}
			</Typography>
		</Stack>
		<PaperInformation userState={userState}/>
		<LocationInformation userState={userState}/>
	</Fragment>;
};

export default Description;
