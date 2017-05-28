import FirebaseAdapter from 'emberfire/adapters/firebase';
import RESTAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default FirebaseAdapter.extend(DataAdapterMixin, RESTAdapter, {
});



// import config from '../config/environment';
//
// export default JSONAPIAdapter.extend(DataAdapterMixin,{
//     host: `${config.APP.API_HOST}`,
//     namespace: `${config.APP.API_NAMESPACE}`,
//     authorizer: 'authorizer:token'
// });