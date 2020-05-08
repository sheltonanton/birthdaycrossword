import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';

export default Component.extend({
    session: service(),
    actions: {
      submit: function() {
        const {
          login,
          password
        } = this.getProperties('login', 'password');
        this.get('session').authenticate('authenticator:oauth2', login, password).then(() => {
          alert('Success! Click the top link!');
        }, (err) => {
          alert('Error obtaining token: ' + err.responseText);
        });
      },
      onSignIn: function(){
          console.log("Signed in");
      }
    }
});