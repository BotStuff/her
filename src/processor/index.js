import { compose } from '../helpers';

import tokens from './tokens';
import relations from './relations';
import sentiment from './sentiment';
import findCity from './findCity';

export default (state) => {
  const factory = compose(tokens, relations, sentiment, findCity);
  return factory(state);
}
