import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  if (loading) return 'Loading';
  if (error) return `Error!${error.message}`;

  console.log('data:-', data);
  console.log('error:-', error);
  console.log('loading:-', loading);


  return data;
};

export default useRepositories;
