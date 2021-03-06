import DS from 'ember-data';
import Publisher from'./publisher';
import Ember from 'ember'
import {hasMany} from 'ember-data/relationships'

export default Publisher.extend({
    books: DS.hasMany('book', {async: true}),
    loadedAt: Ember.on('didLoad', function () {
        this.set('loadedAt', new Date());
    })
});
