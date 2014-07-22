import Ember from "ember";

export default Ember.View.extend({
	templateName: 'taxonomies',
	didInsertElement: function() {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){
    		Ember.$('#menu').multilevelpushmenu();
    	});
	}
});