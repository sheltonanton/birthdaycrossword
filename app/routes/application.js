import Route from '@ember/routing/route';

export default Route.extend({
    model: function(){
        return [
            {
                route: 'home',
                name: 'Home'
            },{
                route: 'login',
                name: 'Login'
            },{
                route: 'register',
                name: 'Register'
            }
        ]
    }
});
