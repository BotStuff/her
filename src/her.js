'use strict';

import intent from './intent';
import listen from './listen';

export default (props = {}) => {

  let state = {
    intents: [],
    debug: props.debug || false
  }

  return Object.assign(
    {},
    intent(state),
    listen(state),
  )
}
