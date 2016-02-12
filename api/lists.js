'use strict';

module.exports = Lists;

function Lists(client) {
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
