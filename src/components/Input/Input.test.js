import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import SearchInput from './SearchInput';

describe('404', () => {
  it('Input renders OK with value', async () => {
    render(<Input value="hello world" setValue={() => {}} />);
    const inputTest = screen.getByRole('textbox');
    expect(inputTest.value).toBe('hello world');
  });
  it('Input writes OK', async () => {
    let value = '';
    render(
      <Input
        value={value}
        setValue={(e) => {
          value += e;
        }}
      />
    );
    const inputTest = screen.getByRole('textbox');
    await act(() => userEvent.type(inputTest, 'TEST'));
    expect(value).toBe('TEST');
  });

  it('renders SearchInput', async () => {
    render(
      <SearchInput
        data={[]}
        onSearch={() => {}}
        value="hello world"
        setValue={() => {}}
      />
    );
    const searchInputTest = screen.getByRole('textbox');
    expect(searchInputTest.value).toBe('hello world');
  });
  it('SearchInput searches OK', async () => {
    let value = '';
    let searched = [];
    const data = [
      { title: 'Hot-dogs', display: true },
      { title: 'Cupcakes eaten', display: true },
      { title: 'Chicken food', display: true },
      { title: 'Dog food', display: true },
      { title: 'What?', display: true },
    ];
    const expectedResult = [
      { title: 'Hot-dogs', display: false },
      { title: 'Cupcakes eaten', display: false },
      { title: 'Chicken food', display: false },
      { title: 'Dog food', display: false },
      { title: 'What?', display: true },
    ];
    render(
      <SearchInput
        data={data}
        onSearch={(e) => {
          searched = e;
        }}
        value={value}
        setValue={(e) => {
          value += e;
        }}
      />
    );
    const inputTest = screen.getByRole('textbox');
    await act(() => userEvent.type(inputTest, 'What?'));
    expect(JSON.stringify(expectedResult)).toBe(JSON.stringify(searched));
  });
});
