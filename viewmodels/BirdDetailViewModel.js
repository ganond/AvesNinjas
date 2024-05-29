
import { useState, useEffect } from 'react';
import fetchBirdDetail from '../services/fetchBirdDetail';

const useBirdDetailViewModel = (uid) => {
  const [birdDetail, setBirdDetail] = useState(null);

  useEffect(() => {
    const getBirdDetail = async () => {
      const data = await fetchBirdDetail(uid);
      setBirdDetail(data);
    };

    getBirdDetail();
  }, [uid]);

  return {
    birdDetail,
  };
};

export default useBirdDetailViewModel;
