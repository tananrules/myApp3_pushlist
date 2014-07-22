import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	pretty_name: DS.attr('string')
});