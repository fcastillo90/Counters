import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('404', () => {
  it('renders NotFound', async () => {
    render(<NotFound />);
    screen.getByText(
      "We can't seem to find the page you're looking for. Embarrassing..."
    );
    screen.getByText('Oops!');
  });
});
