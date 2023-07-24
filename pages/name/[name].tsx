import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { gitHubApi } from '../../api';
import { Layout } from '../../components/layouts';
import { IOneUser } from '../../interfaces';
import backendApi from '../../api/backendApi';
import { ScoreGraph } from '../../components/grahp/ScoreGraph';


const UserByNamePage = () => {

  const [user, setUser] = useState<IOneUser>()
  const [isInFavorites, setIsInFavorites] = useState<Boolean>(false);
  const router = useRouter()

  const getUser = async () => {
    const { data } = await gitHubApi.get<IOneUser>(`/users/${router.query.name}`);

    if (data) {
      const response = await backendApi.get(`/api/users/${data.id}`);
      setIsInFavorites(response.data)
    }
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  const onToggleFavorite = async () => {
    if (!isInFavorites) {
      await backendApi.post(`/api/users`, {
        login: user?.login,
        id: user?.id,
        avatar_url: user?.avatar_url,

      });
      setIsInFavorites(true);
    } else {
      await backendApi.delete(`/api/users/${user?.id}`)
      setIsInFavorites(false);
    }


    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })

  }

  return (
    <Layout title={user?.login}>

      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4} >
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={user?.avatar_url || '/no-image.png'}
                alt={user?.login}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{user?.login}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>id: {user?.id}</Text>
              <Container className='container-follower'>
                <ScoreGraph followers={user?.followers} />
              </Container>

            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};




export default UserByNamePage;
