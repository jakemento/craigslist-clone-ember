import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      subcategories: this.store.findAll('subcategory'),
      listings: this.store.findAll('listing')
    });
  }
});
