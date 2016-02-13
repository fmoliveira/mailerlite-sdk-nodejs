'use strict';

module.exports = Lists;

/**
 * Lists.
 * @constructor
 * @param {Client} client - Instance of an API client.
 */
function Lists(client) {
  /**
   * Returns all lists you have in your account. Also basic summary for each list including the ID.
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
   * Retrieve stats about sent messages.
   * @param {number} id - The ID of the list you want the stas for.
   */
  this.getDetails = () => {
    //
  };

  /**
   * Create new list.
   * @param {string} name - The name of the new list you want to create.
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
