import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save1() {
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
      this.sendAction('save2', params);
    }
  }
});
