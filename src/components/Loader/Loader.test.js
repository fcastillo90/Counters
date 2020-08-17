import React from 'react';
import { render } from '@testing-library/react';
import { EchoLoader, PageLoader } from './index';

describe('Loader', () => {
  it('renders EchoLoader', async () => {
    render(<EchoLoader />);
  });
  it('renders PageLoader', async () => {
    render(<PageLoader />);
  });
});
