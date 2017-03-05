import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    shouldReloadRecord(){
        return false
    },
    shouldBackgroundReloadRecord(store, snapshot){
        console.log('calling shouldBackgroundReloadRecord');
        const loadedAt = snapshot.record.get('loadedAt');

        //    If the record was loaded more than an hour ago
        if(Date.now() - loadedAt >3600000){
            return true;
        } else {
            return false;
        }
    }
});
