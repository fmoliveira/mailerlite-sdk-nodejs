'use strict';

module.exports = Lists;

function Lists (api) {

    this.getAll = () => api.get('/lists/');

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
