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

export default (state) => {
  debugger;
  // find by city || state || zip code
  const factory = compose(tokens, sentiment, relations);
  return factory(state);
}

cities.filter(function (city) { return city.name.match('Albuquerque') });
