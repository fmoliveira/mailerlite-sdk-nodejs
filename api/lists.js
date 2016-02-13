'use strict';

module.exports = Lists;

/**
 * Lists.
 * @constructor
 * @param {Client} client - Instance of an API client.
 */
function Lists(client) {
  /**
   * Get all lists from your account.
   * @param {number} [limit] - Sets the limit of results in one page (default 1000).
   * @param {number} [page] - You can navigate through records by increasing page number.
   */
  this.getAll = (limit, page) => {
    return client.Get('/lists/', {
      limit: limit,
      page: page
    });
  };

  /**
   * Get details.
   */
  this.getDetails = () => {
    //
  };

  /**
   * Add list.
   */
  this.addList = () => {
    //
  };

  /**
   * Update list.
   */
  this.updateList = () => {
    //
  };

  /**
   * Remove list.
   */
  this.removeList = () => {
    //
  };

  /**
   * Get active subscribers.
   */
  this.getActiveSubscribers = () => {
    //
  };

  /**
   * Get bounced subscribers.
   */
  this.getBouncedSubscribers = () => {
    //
  };
}
