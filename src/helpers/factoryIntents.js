'use strict';

export default async (state) => {
  debugger;
  const intents = state.intents.map( intent => intent.script(state, intent.actions) );
  return await Promise.all(intents);
}
