'use strict'

module.exports = Subscribers

/**
 * Subscribers.
 * @constructor
 * @param {Client} client - Instance of an API client.
 */
function Subscribers (client) {
  /**
   * Adds a subscriber to an existing list, including custom field data if supplied.
   * If the email address is already subscribed, their name and any custom field values are updated with whatever is passed in.
   * @param {number} list_id - The ID of the list to which the subscriber should be added.
   * @param {string} email - The email of the subscriber.
   * @param {string} name - Name of the subscriber.
   * @param {object[]} fields - Array of custom fields of the subscriber.
   * @param {boolean} resubscribe - Sets to true if you want to reactive subscriber.
   */
  this.addSubscriber = (list_id, email, name, fields, resubscribe) => {
    return client.Post(`/subscribers/${list_id}/`, {
      email: email,
      name: name,
      fields: fields,
      resubscribe: resubscribe ? 1 : 0
    })
  }

  /**
   * Allows you to add many subscribers to a list in one request, including custom field data if supplied.
   * If an email addresses are already subscribed, their name and any custom field values are updated with whatever is passed in.
   * @param {number} list_id - The ID of the list to which the subscriber should be added.
   * @param {object[]} subscribers - Array of subscribers.
   * @param {boolean} resubscribe - Sets to true if you want to reactive subscribers.
   */
  this.addManySubscribers = (list_id, subscribers, resubscribe) => {
    return client.Post(`/subscribers/${list_id}/import`, {
      id: list_id,
      subscribers: subscribers,
      resubscribe: resubscribe ? 1 : 0
    })
  }

  /**
   * Retrieves a subscriber's details including their email address, name, active/inactive state and any custom field data.
   * @param {string} email - The email address of the subscriber whose details should be retrieved.
   * @param {boolean} history - Sets to true if you want to get historical records of campaigns and autoresponder emails received by a subscriber (default: false).
   */
  this.getDetails = (email, history) => {
    return client.Get('/subscribers/', {
      email: email,
      history: history
    })
  }

  /**
   * Removes subscriber from a list. He will no longer receive campaigns sent to this list.
   * @param {number} list_id - The ID of the list to which the subscribed should be removed.
   * @param {string} email - The email of the subscriber.
   */
  this.deleteSubscriber = (list_id, email) => {
    return client.Delete(`/subscribers/${list_id}`, {
      email: email
    })
  }

  /**
   * Marks subscriber as unsubscribed. He will no longer receive any campaigns.
   * @param {string} email - The email of the subscriber.
   */
  this.unsubscribeSubscriber = (email) => {
    return client.Post('/subscribers/unsubscribe/', {
      email: email
    })
  }
}
