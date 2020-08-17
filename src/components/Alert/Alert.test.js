import React from 'react';
import { render, screen } from '@testing-library/react';
import SnackbarAlert from './SnackbarAlert';

describe('Alert', () => {
  it('renders SnackbarAlert', async () => {
    render(<SnackbarAlert open setOpen={() => {}} />);
    screen.getByText('Success');
  });
  it('renders SnackbarAlert with props', async () => {
    const testText = 'test text';
    render(<SnackbarAlert title={testText} open setOpen={() => {}} />);
    screen.getByText(testText);
  });
});
