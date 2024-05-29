import BirdModel from '../models/BirdModel';

const fetchBirdAll = async () => {
    try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        const data = await response.json();
        const birdModels = data.map(birdData => new BirdModel(birdData));
        return birdModels;
    } catch (error) {
        console.error('Error al obtener aves:', error);
        throw error; 
    }
};

export default fetchBirdAll;
