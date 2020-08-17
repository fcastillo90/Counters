import React from 'react';
import { render, screen } from '@testing-library/react';
import { BadgePicker, Picker } from './index';
import { EXAMPLES } from '../../constants/examples';

describe('Picker', () => {
  it('renders BadgePicker', async () => {
    render(
      <BadgePicker
        label={EXAMPLES[0].label}
        data={EXAMPLES[0].data}
        onSelect={() => {}}
      />
    );
    screen.getByText(EXAMPLES[0].label);
    screen.getByText(EXAMPLES[0].data[0]);
  });
  it('renders Picker with props', async () => {
    const testText = 'test text';
    render(
      <Picker
        label={testText}
        number={0}
        onRemove={() => {}}
        onAdd={() => {}}
      />
    );
    screen.getByText(testText);
  });
});
