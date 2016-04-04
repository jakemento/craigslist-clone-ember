import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    save3(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('index');
    }
  }
});
