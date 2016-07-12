'use strict';

import teach from './teach';
import intent from './intent';
import listen from './listen';

export default (props = {}) => {

  let state = {
    categories: {},
    intents: [],
    contexts: [],
    matched: [],
    debug: props.debug || false
  }

  return Object.assign(
    {},
    teach(state),
    intent(state),
    listen(state),
  )
}
