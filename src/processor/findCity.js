import { findInSentence } from 'smart-city-finder';

export default (state) => {
  state.city = findInSentence(state.sentence, 1)[0];
  return state;
};
