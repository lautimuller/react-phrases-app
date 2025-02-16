import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { usePhrase } from '../../context/PhraseContext/usePhrase';

jest.mock('../../context/PhraseContext/usePhrase');

describe('SearchBar Component', () => {
  it('renders the search input with a placeholder', () => {
    (usePhrase as jest.Mock).mockReturnValue({
      query: '',
      setQuery: jest.fn(),
    });

    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Buscar');
    expect(input).toBeTruthy();
  });

  it('updates the query on input change', () => {
    const setQueryMock = jest.fn();
    (usePhrase as jest.Mock).mockReturnValue({
      query: '',
      setQuery: setQueryMock,
    });

    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(setQueryMock).toHaveBeenCalledWith('Hello');
  });
});