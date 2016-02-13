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
  this.getDetails = (id) => {
    //
  };

  /**
   * Create new list.
   * @param {string} name - The name of the new list you want to create.
   * @returns {object} - ID and name of the created list.
   */
  this.addList = (name) => {
    return client.Post('/lists/', {
      name: name
    });
  };

  /**
   * Update existing list.
   * @param {number} id - The ID of the list you want to change.
   * @param {string} name - The new name of the list you want to change.
   */
  this.updateList = (id, name) => {
    //
  };

  /**
   * Delete the list
   * @param {number} id - The ID of the list you want to remove.
   */
  this.removeList = (id) => {
    return client.Delete(`/lists/${id}/`);
  };

  /**
   * Returns all active subscribers in a given list.
   * @param {number} id - The ID of the list you want stats for.
   * @param {number} limit - Sets the limit of results in one page (default 1000).
   * @param {number} page - You can navigate through records by increasing page number.
   */
  this.getActiveSubscribers = (id, limit, page) => {
    //
  };

  /**
   * Returns all unsubscribed subscribers in a given list.
   * @param {number} id - The ID of the list you want stats for.
   * @param {number} limit - Sets the limit of results in one page (default 1000).
   * @param {number} page - You can navigate through records by increasing page number.
   */
  this.getUnsubscribedSubscribers = (id, limit, page) => {
    //
  };

  /**
   * Returns all bounced subscribers in a given list.
   * @param {number} id - The ID of the list you want stats for.
   * @param {number} limit - Sets the limit of results in one page (default 1000).
   * @param {number} page - You can navigate through records by increasing page number.
   */
  this.getBouncedSubscribers = () => {
    //
  };
}
