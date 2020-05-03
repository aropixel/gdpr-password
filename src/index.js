// import `.scss` files
import './scss/styles.scss';


// export default UserList class
// I used `defaultExport` to state that variable name doesn't matter
export default class GdprPassword {

    constructor(elem, options){

        let defaultOptions = {
            'notification': {
                'id': null,
                'content': 'Saisissez au moins 8 caractères, sans espace, comportant au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial.',
            },
            'classes': {
                'common': 'account__passwordChecker',
                'weak': 'account__passwordChecker--weak',
                'strong': 'account__passwordChecker--strong',
            },
            'conditions': {
                'number': true,
                'lowercase': true,
                'uppercase': true,
                'specialchar': true,
                'length': 8,
            }
        };

        //
        this.options = Object.assign(defaultOptions, options);

        //
        this.checkers = {
            'number': {'condition': this.options.conditions.number, 'pattern': /\d+/},
            'lowercase': {'condition': this.options.conditions.lowercase, 'pattern': /[a-z]/},
            'uppercase': {'condition': this.options.conditions.uppercase, 'pattern': /[A-Z]/},
            'specialchar': {'condition': this.options.conditions.specialchar, 'pattern': /[!@#\$%\^\&*\)\(+=._-]+/g},
        };

        //
        this.password =  typeof elem == 'string' ? document.getElementById(elem) : elem;

        //
        this.notification = null;
        this.initNotification();
        this.listenElement();
    }

    initNotification() {

        if (this.options.notification.id) {
            this.notification = document.getElementById(this.options.notification.id);
        }
        else {

            // var parentDiv = this.password.parentNode ? this.password.parentNode : document.body;
            this.notification = document.createElement('div');
            this.notification.classList.add(this.options.classes.common)
            this.password.after(this.notification);


        }
    }

    listenElement() {

        this.password.addEventListener('keyup', (event) => {

            if (this.matchConditions()) {

                // on donne une classe forte au champs mot de passe
                this.notification.classList.remove('account__passwordChecker--weak');
                this.notification.classList.add('account__passwordChecker--strong');


            } else {

                // on donne une classe faible au champs mot de passe
                this.notification.style.display = '';
                this.notification.classList.remove('account__passwordChecker--strong');
                this.notification.classList.add('account__passwordChecker--weak');

                // on affiche le message de validation
                this.notification.innerHTML = this.options.notification.content;

            }

        });
    }

    matchConditions() {

        var match = true;

        for (let [type, item] of Object.entries(this.checkers)) {

            match &=
                (item.condition === true && this.count(item.pattern)) ||
                (item.condition && this.count(item.pattern) >= item.condition)
            ;

        }

        if (this.options.conditions.length) {
            match &= this.password.value.length >= this.options.conditions.length;
        }

        return match;
    }

    count(pat) {
        return ((this.password.value || '').match(pat) || []).length
    }


}
