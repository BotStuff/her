'use strict';

import { compose, timeout, factoryIntents} from './helpers';
import factoryProcessor from './processor';
import { findInSentence } from 'smart-city-finder';

export default (state) => ({
  listen: (sentence, ms) => {
    return new Promise((resolve, reject) => {
      if (ms) timeout(reject, ms);
      state.sentence = sentence.toLowerCase();
      const factory = compose(factoryProcessor, factoryIntents);
      return factory(state)
      .then((state) => {
        state.answer ? resolve(state.answer) : reject(false);
      })
    });
  }
});
