import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
  actions: {
    switchToEdit: function () {
      this.set('editMode', true);
    }
  }
});
