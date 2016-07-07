import { findInSentence } from 'smart-city-finder';

export default (state) => {
  return findInSentence(state.sentence, 1);
};
