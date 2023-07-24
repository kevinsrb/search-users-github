import { FC } from 'react';
import { useRouter } from 'next/router';

import { Grid, Card } from '@nextui-org/react';
import { IMiniUser } from '../../interfaces';


interface Props {
  user: IMiniUser;
}


export const FavoriteCardUser:FC<Props> = ({ user }) => {

  const router = useRouter();


  const onFavoriteClicked = () => {
    router.push(`/name/${ user?.login }`);
  }

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ user?.id } onClick={ onFavoriteClicked }>
        <Card hoverable clickable css={{ padding: 10 }}>
          <Card.Header>{user?.login}</Card.Header>
          <Card.Image 
              src={ user?.avatar_url }
              width={'100%'}
              height={ 140 }
          />
          <Card.Body>
            <p>id: { user?.id }</p>
          </Card.Body>
        </Card>
    </Grid>
  )
};
