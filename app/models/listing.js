import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  text: DS.attr(),
  title: DS.attr(),
  address: DS.attr(),
  zip: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  subcategory: DS.belongsTo('subcategory', {async: true})

});
