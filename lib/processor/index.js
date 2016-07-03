import { compose } from '../helpers'

// import language from './language';
// import translator from './translator';
// import classifier from './classifier';
// import compromise from './compromise';
// import taxonomy from './taxonomy';
import tokens from './tokens';
// import relations from './relations';
import sentiment from './sentiment';

export default (state) => {
  const factory = compose(tokens, sentiment);
  return factory(state);
  // debugger;
  // tokens(state)

  // return factory(state);
}
