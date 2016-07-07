import sentiment from 'sentiment';

export default (state) => {
  const sentence = sentiment(state.sentence);
  state.sentiment = sentence.score;
  return(state);
};
