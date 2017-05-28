import Ember from 'ember';
import JSONAPISerializer from 'ember-data/serializers/json-api';

const { String: {underscore} } = Ember;

export default JSONAPISerializer.extend({
    keyForAttribute: function(attr) {
        return underscore(attr);
    },

    keyForRelationship(key) {
        return underscore(key);
    }
});
