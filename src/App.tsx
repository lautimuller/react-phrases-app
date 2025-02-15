import PhraseManager from './containers/PhraseManager';
import { PhraseProvider } from './context/PhraseContext/PhraseProvider';

const App = () => {
  return (
    <PhraseProvider>
      <PhraseManager />
    </PhraseProvider>
  );
};

export default App;
