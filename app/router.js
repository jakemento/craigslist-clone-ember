import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', {path: '/category/:category_id'});
  this.route('subcategory', {path: '/subcategory/:subcategory_id'});
});

export default Router;
