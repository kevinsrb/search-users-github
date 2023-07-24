import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCardUser } from './FavoriteCardUser';
import { IMiniUser } from '../../interfaces';

interface Props {
    users: IMiniUser[];
}

export const FavoriteUsers: FC<Props> = ({ users }) => {
  return (

    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
    {
        users.map( (user, index) => (
            <FavoriteCardUser key={ index } user={ user } />          
        ))
    }
    </Grid.Container>

  )
};
