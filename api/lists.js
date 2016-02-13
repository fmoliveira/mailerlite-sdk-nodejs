'use strict';

module.exports = Lists;

/**
 * Lists.
 */
function Lists(client) {
  /**
   * Get all lists from your account.
   */
  this.getAll = () => client.Get('/lists/');
}

Lists.prototype.getDetails = () => {
    //
};

Lists.prototype.addList = () => {
    //
};

Lists.prototype.updateList = () => {
    //
};

Lists.prototype.removeList = () => {
    //
};

Lists.prototype.getActiveSubscribers = () => {
    //
};

Lists.prototype.getBouncedSubscribers = () => {
    //
};
