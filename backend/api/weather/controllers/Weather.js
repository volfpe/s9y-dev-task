'use strict';

/**
 * Weather.js controller
 *
 * @description: A set of functions called "actions" for managing `Weather`.
 */

module.exports = {
  getInPrague: async () => {
    return {
      state: 'sunny',
      mintempature: 10,
      maxtempature: 12
    };
  }
};
