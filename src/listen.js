'use strict';

import { compose, timeout, factoryIntents, factoryCategories} from './helpers';
import factoryProcessor from './processor';
import { findInSentence } from 'smart-city-finder';

export default (state) => ({
  listen: (sentence, ms) => {
    return new Promise((resolve, reject) => {
      if (ms) timeout(reject, ms);
      state.sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]\s/g, ' ');
      debugger;
      const factory = compose(factoryProcessor, factoryIntents, factoryCategories);
      return factory(state)
      .then((state) => {
        // store into json data into db
        state.answer ? resolve(state.answer) : reject(false);
      })
    });
  }
});
