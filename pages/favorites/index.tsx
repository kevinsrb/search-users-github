import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';

import { FavoriteUsers } from '../../components/user/FavoriteUsers';
import { NoFavorites } from '../../components/ui/NoFavorites';
import backendApi from '../../api/backendApi';
import { IMiniUser } from '../../interfaces';

const FavoritesPage = () => {

  const [favoriteUser, setFavoriteUser] = useState<IMiniUser[]>([]);

  useEffect(() => {
    getFavoritesUsers()
  }, []);
  

  const getFavoritesUsers = async () => {
    const { data } = await backendApi.get(`/api/users`);
    setFavoriteUser(data)
  }


  return (
      <Layout title='Pokémons - Favoritos'>
        
        {
          favoriteUser.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoriteUsers users={favoriteUser} /> )
              }
      
      </Layout>
  )
};

export default FavoritesPage;
