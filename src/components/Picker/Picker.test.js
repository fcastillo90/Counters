import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
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
  it('BadgePicker Clicks OK', async () => {
    let picked = {};
    render(
      <BadgePicker
        label={EXAMPLES[0].label}
        data={EXAMPLES[0].data}
        onSelect={(e) => {
          picked = e;
        }}
      />
    );
    const inputTest = screen.getByText(EXAMPLES[0].data[0]);
    act(() => userEvent.click(inputTest));
    expect(picked).toBe(EXAMPLES[0].data[0]);
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

  it('Picker buttons inc OK', async () => {
    const testText = 'test text';
    let number = 0;
    render(
      <Picker
        label={testText}
        number={number}
        onRemove={() => {}}
        onAdd={() => {
          number += 1;
        }}
      />
    );
    screen.getByText(testText);
    const addTest = screen.getByLabelText('Add');
    act(() => userEvent.click(addTest));
    expect(number).toBe(1);
  });
  it('Picker buttons dec OK', async () => {
    const testText = 'test text';
    let number = 1;
    render(
      <Picker
        label={testText}
        number={number}
        onRemove={() => {
          number += -1;
        }}
        onAdd={() => {}}
      />
    );
    const decTest = screen.getByLabelText('Remove');
    act(() => userEvent.click(decTest));
    expect(number).toBe(0);
  });
  it('Picker buttons dec past 0 OK', async () => {
    const testText = 'test text';
    let number = 0;
    render(
      <Picker
        label={testText}
        number={number}
        onRemove={() => {
          number += -1;
        }}
        onAdd={() => {}}
      />
    );
    const decTest = screen.getByLabelText('Remove');
    act(() => userEvent.click(decTest));
    expect(number).toBe(0);
  });
});
