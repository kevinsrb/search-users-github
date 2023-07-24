import { FC } from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, Row, Text } from '@nextui-org/react';

import { IUser } from '../../interfaces';
import { ScoreGraph } from '../grahp/ScoreGraph';

interface Props {
    user: IUser
}

export const UserCard: FC<Props> = ({ user }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${ user.login }`);
    }

    
  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 2 } key={ user.id }>
        <Card 
            hoverable 
            clickable
            onClick={ onClick }
        >
            <Card.Body css={{ p: 1 }}>
                <Card.Image 
                    src={ user.avatar_url }
                    width="100%"
                    height={ 140 }
                />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{ user.login }</Text>
                    <Text>#{ user.id }</Text>

                </Row>
            </Card.Footer>
        </Card>

       
    </Grid>
  )
};
