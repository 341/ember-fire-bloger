import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/get';
import service from 'ember-service/inject';

export default Ember.Route.extend(ApplicationRouteMixin, {
    session: service(),
    beforeModel: function() {
        let session = this.get('session');
        console.log(session);
        return session;
    }
});
