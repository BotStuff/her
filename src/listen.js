'use strict';

import { compose, timeout } from '../lib/helpers';
import factoryProcessor from '../lib/processor';

export default (state) => ({
  listen: (sentence, ms) => {
    return new Promise((resolve, reject) => {
      state.sentence = sentence.toLowerCase();

      if (ms) timeout(reject, ms);
      // populate analyzer and check if passes context rules
      const factory = compose(factoryProcessor);
      factory(state)
      .then((stuff) => {
        debugger;
      })
      // break down sentence in properties <> add to state
      // check tokens <> from state
        //check rules
          //resolve answer

      // factory(state).
      //   then( state => {
      //     state.action ? resolve(state) : reject(new Error('Unknown action'))
      //   }).
      //   catch ( error => {
      //     if (!error) error = { code: 0, message: "Sorry, I haven't understood you" };
      //     reject(error);
      //   })
    });
  }
})
