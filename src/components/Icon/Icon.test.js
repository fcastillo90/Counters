import React from 'react';
import { render } from '@testing-library/react';
import { PaperNote, Logo, Share, Trash } from './index';

describe('Icon', () => {
  it('renders PaperNote', async () => {
    render(<PaperNote />);
  });
  it('renders Logo', async () => {
    render(<Logo />);
  });
  it('renders Share', async () => {
    render(<Share />);
  });
  it('renders Trash', async () => {
    render(<Trash />);
  });
});
