'use strict';

module.exports = Lists;

function Lists (client, apiKey) {

    this.getAll = () => {
        let promise = new Promise((resolve, reject) => {
            client.get(`/lists/?apiKey=${apiKey}`, (err, req, res, data) => {
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
