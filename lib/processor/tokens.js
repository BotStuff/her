'use strict';

import Compromise from 'nlp_compromise';

export default (state) => {
  debugger;
  state.tokens = Compromise.text(state.sentence).root().split(' ');

  return (state);
};
