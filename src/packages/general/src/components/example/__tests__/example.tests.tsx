import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Example } from '../example';

describe('<Example />', () => {
  test('should render properly', async () => {
    render(<Example />);

    expect(screen).toBeDefined();
    expect(screen.getByText('Example')).toBeDefined();
  });
});
