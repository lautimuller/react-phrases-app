export type Phrase = {
  id: string;
  text: string;
};

export type PhraseContextType = {
  phrases: Phrase[];
  addPhrase: (text: string) => void;
  removePhrase: (id: string) => void;
  editPhrase: (id: string, newText: string) => void;
  searchPhrase: (query: string) => Phrase[];
};
