import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { gitHubApi } from '../api';
import { Layout } from '../components/layouts';
import { UserListResponse, IUser } from '../interfaces';
import { UserCard } from '../components/user';


const HomePage: NextPage = () => {

  const [ users, setUsers ] = useState<IUser[]>([]);

  const findUser = async(search: any) => {
    const { data } = await gitHubApi.get<UserListResponse>(`/search/users?q=${search.name}`);
    setUsers(data.items.slice(0,10))
  }


  return (
    <Layout title='Listado de usuario' 
    findUser={findUser}
    >
      
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          users.map( ( user ) => (
            <UserCard key={ user.id } user={ user } />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}





export default HomePage;
