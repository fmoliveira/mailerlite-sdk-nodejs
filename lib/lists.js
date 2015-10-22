'use strict';

module.exports = Lists;

function Lists (api) {

    this.getAll = () => {
        let promise = new Promise((resolve, reject) => {
            api.get(`/lists/`, (err, req, res, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return promise;
    };

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
