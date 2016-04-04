import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      subcategories: this.store.findAll('subcategory')
    });
  },
});
