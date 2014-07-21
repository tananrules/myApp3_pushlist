import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
	extractArray: function(store, type, payload){
		delete payload.count;
		delete payload.current_page;
		delete payload.pages;

		return this._super(store, type, payload);
	}
});