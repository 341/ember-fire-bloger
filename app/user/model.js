import DS from 'ember-data';

export default DS.Model.extend({
    uid: DS.attr('string'),
    email: DS.attr(),
    createdAt: DS.attr(),
    disabled: DS.attr(),
    emailVerified: DS.attr(),
    lastLoginAt: DS.attr(),
    localId: DS.attr(),
    passwordHash: DS.attr(),
    passwordUpdatedAt: DS.attr(),
    providerUserInfo: DS.attr(),
    validSince: DS.attr()
});
