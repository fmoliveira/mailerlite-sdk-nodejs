'use strict';

module.exports = Subscribers;

/**
 * Subscribers.
 * @constructor
 * @param {Client} client - Instance of an API client.
 */
function Subscribers () {
  /**
   * Adds a subscriber to an existing list, including custom field data if supplied.
   * If the email address is already subscribed, their name and any custom field values are updated with whatever is passed in.
   * @param {number} id - The ID of the list to which the subscriber should be added.
   * @param {string} email - The email of the subscriber.
   * @param {string} name - Name of the subscriber.
   * @param {object[]} fields - Array of custom fields of the subscriber.
   * @param {boolean} resubscribe - Sets if you want to reactive subscriber.
   */
  this.addSubscriber = (id, email, name, fields, resubscribe) => {
    //
  };

  /**
   * Allows you to add many subscribers to a list in one request, including custom field data if supplied.
   * If an email addresses are already subscribed, their name and any custom field values are updated with whatever is passed in.
   * @param {object[]} subscribers - Array of subscribers.
   * @param {boolean} resubscribe - Sets if you want to reactive subscribers.
   */
  this.addManySubscribers = (subscribers, resubscribe) => {
    //
  };

  /**
   * Get details.
   */
  this.getDetails = () => {
    //
  };

  /**
   * Delete subscriber.
   */
  this.deleteSubscriber = () => {
    //
  };

  /**
   * Unsubscribe subscriber.
   */
  this.unsubscribeSubscriber = () => {
    //
  };
}
