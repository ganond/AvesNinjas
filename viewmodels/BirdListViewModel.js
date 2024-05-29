import { useState, useEffect } from 'react';
import fetchBirdAll from '../services/fetchBirdAll';

const useBirdListViewModel = () => {
  const [birds, setBirds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const data = await fetchBirdAll();
        setBirds(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obteneree:', error);
        setIsLoading(false);
      }
    };

    fetchBirds();
  }, []);

  return { birds, isLoading };
};

export default useBirdListViewModel;
