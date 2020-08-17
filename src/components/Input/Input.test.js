import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';
import SearchInput from './SearchInput';

describe('404', () => {
  it('renders Input', async () => {
    render(<Input value="hello world" setValue={() => {}} />);
    const inputTest = screen.getByRole('textbox');
    expect(inputTest.value).toBe('hello world');
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
});
