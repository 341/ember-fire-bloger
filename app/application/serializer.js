import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

//const { String: {underscore} } = Ember;

export default RESTSerializer.extend({
    // keyForAttribute: function(attr) {
    //     return underscore(attr);
    // },
    //
    // keyForRelationship(key) {
    //     return underscore(key);
    // }
});
