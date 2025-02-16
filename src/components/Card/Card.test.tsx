import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { usePhrase } from '../../context/PhraseContext/usePhrase';
import { Card } from './Card';

jest.mock('../../context/PhraseContext/usePhrase');

const mockUsePhrase = usePhrase as jest.MockedFunction<typeof usePhrase>;

describe('Card Component', () => {
  beforeEach(() => {
    mockUsePhrase.mockReturnValue({
      phrases: [{ id: '1', text: 'Hello, world!' }],
      editId: null,
      startEditing: jest.fn(),
      removePhrase: jest.fn(),
      newPhrase: '',
      setNewPhrase: jest.fn(),
      addPhrase: jest.fn(),
      editPhrase: jest.fn(),
      stopEditing: jest.fn(),
      query: '',
      setQuery: jest.fn(),
    });
  });

  test('triggers startEditing when edit button is clicked', () => {
    const { startEditing } = mockUsePhrase();
    render(<Card phraseId="1" />);

    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    expect(startEditing).toHaveBeenCalledWith({ id: '1', text: 'Hello, world!' });
  });

  test('triggers removePhrase when delete button is clicked', () => {
    const { removePhrase } = mockUsePhrase();
    render(<Card phraseId="1" />);

    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(removePhrase).toHaveBeenCalledWith('1');
  });
});