import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

    queryParams: ['limit'],
    limit: 5,

    total: computed('model.meta', function(){
        return this.get('model.meta').total
    }),
    showAll:computed('total', 'model', function(){
        //this makes 'total' into the model.length integer so ShowAll actually shows all
        return this.get('total') > this.get('model.length');
    })

});