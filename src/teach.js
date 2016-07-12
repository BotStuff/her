'use strict';

const isObject = (value) => (typeof(value) === 'object');

export default (state) => ({
  teach: function(category) {
    if (isObject(category)) {
      state.categories[category.name] = category.terms;
    }

    return this;
  }
});
