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
  },

  /**
   * Retrieve weather records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.weather.search(ctx.query);
    } else {
      return strapi.services.weather.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a weather record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.weather.fetch(ctx.params);
  },

  /**
   * Count weather records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.weather.count(ctx.query);
  },

  /**
   * Create a/an weather record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.weather.add(ctx.request.body);
  },

  /**
   * Update a/an weather record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.weather.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an weather record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.weather.remove(ctx.params);
  }
};
