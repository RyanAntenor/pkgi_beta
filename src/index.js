import './scss/style.scss';
import './scss/components.scss';

import './vue/dropzone.vue';
import './vue/gallery.vue';
import './vue/user.vue';
import './vue/register.vue';
import './vue/create-post.vue';


(function() {


    //State Management

    var store = {
        // debug: true,
        // state: {
        //     message: 'Hello!'
        // },
        // setMessageAction(newValue) {
        //     if (this.debug) console.log('setMessageAction triggered with', newValue)
        //     this.state.message = newValue
        // },
        // clearMessageAction() {
        //     if (this.debug) console.log('clearMessageAction triggered')
        //     this.state.message = ''
        // }

        uploadApi: ''
    }



    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });


})();