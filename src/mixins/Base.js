let Request = require('../Request');

const base = {

    list(cb) {
        this.options.url = this.baseUri;

        new Request(this.options, cb);
    },

    retrieve(id, cb) {
        this.options.url = this.baseUri + '/' + id;

        new Request(this.options, cb);
    },

    create(params, cb) {
        this.options.url = this.baseUri;
        this.options.method = 'POST';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
    },

    update(id, params, cb) {
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'PATCH';
        this.options.body = JSON.stringify(params);

        new Request(this.options, cb);
   },

    delete(id, cb) {
        this.options.url = this.baseUri + '/' + id;
        this.options.method = 'DELETE';

        new Request(this.options, cb);
    }
};

module.exports = base;