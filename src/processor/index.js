import { compose } from '../helpers';

// import language from './language';
// import translator from './translator';
// import classifier from './classifier';
// import compromise from './compromise';
// import taxonomy from './taxonomy';
import tokens from './tokens';
import relations from './relations';
// import relations from './relations';
import sentiment from './sentiment';
import cities from 'smart-city-finder';

export default (state) => {
  debugger;
  console.log(cities);
  // find by city || state || zip code
  const factory = compose(tokens, sentiment, relations);
  return factory(state);
}
