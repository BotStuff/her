export default (state) => {
  state.tokens = state.sentence.split(' ');
  state.sentenceLength = state.sentence.length;
  return (state);
};
