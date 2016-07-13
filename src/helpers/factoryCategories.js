'use strict';

const isMatch = (state, category, terms) => {
  const regex = new RegExp(`\\b(${terms})\\b`, 'igm');
  let match = sentence.match(regex);
  if (match) {
    state.contexts.push(category);
    state.matched.push(match);
  }
  return state;
};
// find alternative to .map (only for array ) _.map lodash?
export default async (state) => {
  const categories = state.categories.map(cateogry => isMatch(state, cateogry.name, cateogry.terms));
  return await Promise.all(categories);
}
m
