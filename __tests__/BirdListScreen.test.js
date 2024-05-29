import React from 'react';
import { render } from '@testing-library/react-native';
import BirdListScreen from '../screens/BirdListScreen';

describe('BirdListScreen', () => {
  it('Muestra el texto de carga cuando isLoading es verdadero', () => {
    const { getByText } = render(<BirdListScreen />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeDefined();
  });

  
});
