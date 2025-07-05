import { useEffect } from 'react';
import { history } from '@umijs/max';

const HomePage: React.FC = () => {
  useEffect(() => {
    history.push('/dashboard');
  }, []);

  return null;
};

export default HomePage;