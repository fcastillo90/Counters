import React from 'react';
import { render, screen } from '@testing-library/react';
import NoData from './NoData';

describe('Alert', () => {
  it('renders NoData', async () => {
    render(<NoData />);
    screen.getByText('No counters yet');
  });
});
