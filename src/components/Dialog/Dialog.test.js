import React from 'react';
import { render, screen } from '@testing-library/react';
import MessageDialog from './MessageDialog';
import CreateDialog from './CreateDialog';

describe('Dialog', () => {
  it('renders MessageDialog', async () => {
    const title = 'the title';
    const message = 'the message';
    const button = 'first button';
    render(
      <MessageDialog
        open
        handleClose={() => {}}
        title={title}
        message={message}
        firstButtonLabel={button}
        firstButtonAction={() => {}}
      />
    );
    screen.getByText(title);
    screen.getByText(message);
    screen.getByText(button);
  });
  it('renders CreateDialog', async () => {
    const testText = 'Create counter';
    render(<CreateDialog open onClose={() => {}} onSave={() => {}} />);
    screen.getByText(testText);
  });
});
