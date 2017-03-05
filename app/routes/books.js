import Ember from 'ember';

export default Ember.Route.extend({
    //here is the limiter component
    queryParams:{
      limit:{
          refreshModel: true
      }
    },
    model(params){
        return this.store.findAll('book',params);
    },
    actions: {
        showAll(){
            const total = this.controllerFor('books').get('total');
            this.transitionTo({queryParams: {limit: total}})
        }
    }
});
