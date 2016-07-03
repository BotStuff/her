import sentiment from 'sentiment';

export default (state) => {
  const sentence = sentiment(state.sentence);
  debugger;
  state.sentiment = sentence.score;

  return(state);
};
