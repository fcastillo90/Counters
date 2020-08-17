import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareTooltip from './ShareTooltip';

describe('Alert', () => {
  it('renders ShareTooltip', async () => {
    const text = 'Hello World!';
    render(
      <ShareTooltip onClose={() => {}} open count={2} onShare={() => {}}>
        <>{text}</>
      </ShareTooltip>
    );
    screen.getByText(text);
  });
});
