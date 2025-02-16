export type Phrase = {
  id: string;
  text: string;
};

export type PhraseContextType = {
  phrases: Phrase[];
  newPhrase: string;
  setNewPhrase: React.Dispatch<React.SetStateAction<string>>;
  addPhrase: (text: string) => void;
  removePhrase: (id: string) => void;
  editPhrase: (id: string, newText: string) => void;
  editId: string | null;
  startEditing: (phrase: Phrase) => void;
  stopEditing: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
