import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'my-app3', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'my-app3');

export default App;
