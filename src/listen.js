'use strict';

import { compose, timeout, factoryIntents} from './helpers';
import factoryProcessor from './processor';
import { findInSentence } from 'smart-city-finder';

export default (state) => ({
  listen: (sentence, ms) => {
    return new Promise((resolve, reject) => {
      if (ms) timeout(reject, ms);
      state.sentence = sentence.toLowerCase();
      debugger;
      factoryProcessor(state)
      .then((stuff) => {
        debugger;
      }).catch((stuff) => {
        debugger;
      })

      const factory = compose(factoryProcessor, factoryIntents);
      factory(state)
      .then((stuff) => {
        debugger;
      })
    });
  }
})
