import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      subcategories: this.store.findAll('subcategory'),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    save2() {
      var params = {
        image: this.get('image'),
        text: this.get('text'),
        title: this.get('title'),
        address: this.get('address'),
        zip: this.get('zip'),
        date: this.get('date'),
        author: this.get ('author')
      };
      this.set('addNewListing', false);
      this.sendAction('save3', params);
    }
  }
});
