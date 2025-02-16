import { withErrorBoundary } from '../../hoc/withErrorBoundary';
import { PhraseManager } from './PhraseManager';

const EnhancedPhraseManager = withErrorBoundary(PhraseManager);

export default EnhancedPhraseManager;
