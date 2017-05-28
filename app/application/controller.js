import Ember from 'ember';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        signIn: function (provider) {
            let email = get(this, 'email');
            let password = get(this, 'password');

            this.get('session').authenticate('authenticator:firebase', {
                provider: provider,
                email: 'maxhuni.eroll@gmail.com',
                password: 'traktor7001'
            }).then(function(data) {
                console.log(data);
            });
        },
        signOut: function () {
            this.get('session').close();
        }
    }
});
