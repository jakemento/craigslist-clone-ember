import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      subcategories: this.store.findAll('subcategory'),
      listings: this.store.findAll('listing')
    });
  },

  actions: {
    save3(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      this.transitionTo('index');
    },
    deleteListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    }
  }
});
