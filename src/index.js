// import `.scss` files
import './scss/styles.scss';


// export default UserList class
// I used `defaultExport` to state that variable name doesn't matter
export default class GdprPassword {

    constructor(elem, options){

        let defaultOptions = {
            // 'form': false,
            'notification': {
                'id': null,
                content: "" +
                    "<div id='passwordError'>Mot de passe invalide</div>" +
                    "<div id='passwordCheckerList'>" +
                    "<strong>Votre mot de passe doit contenir :</strong>" +
                    "<ul>" +
                    "<li class='numeral'>8 caractères minimum</li>" +
                    "<li class='uppercase'>1 majuscule minimum</li>" +
                    "<li class='lowercase'>1 minuscule minimum</li>" +
                    "<li class='number'>1 chiffre minimum</li>" +
                    "<li class='specialchar'>1 caractère spécial minimum (!?@...)</li>" +
                    "</ul>" +
                    "</div>"
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
            'specialchar': {'condition': this.options.conditions.specialchar, 'pattern': /[!@#\$§£€%°\^\?~\&*\)\(+=.,;:/_-]+/g},
        };

        //
        this.password =  typeof elem == 'string' ? document.getElementById(elem) : elem;

        //
        this.form = null;
        if (this.options.form) {
            this.form =  typeof this.options.form == 'string' ? document.getElementById(this.options.form) : this.options.form;
        }

        //
        this.notification = null;
        this.isStateOk = null;

        this.updateState();
        this.initNotification();
        this.listenElement();
    }

    updateState() {
        this.isStateOk =
            (
                (this.password.value.length && this.matchConditions()) ||
                (!this.isRequired() && !this.password.value.length)
            )
        ;
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

        // Au clic dans le champ mdp, on affiche les recommandations
        this.password.addEventListener("click", t => {

            this.notification.style.display = "block";

            if (!this.password.value.length) {
                this.notification.innerHTML = this.options.notification.content
            }

            document.getElementById('passwordCheckerList').style.display = "block";
            document.getElementById('passwordError').style.display = 'none';

        })


        // Lors de la saisie, on vérifie si le mdp est en erreur
        this.password.addEventListener('keyup', (event) => {

            if (this.matchConditions()) {
                event.target.classList.remove('inputPasswordError');
            } else {
                event.target.classList.add('inputPasswordError');
            }

            // on barre chaque consigne respectée au fur et à mesure de la saisie
            this.crossMatchConditions()

            this.updateState();

        });

        // Si l'utilisateur clique ailleurs, on cache la div des consignes de mdp
        document.addEventListener("click", function(event) {

            if (!event.target.getAttribute('data-gdpr')) {

                document.getElementById('passwordCheckerList').style.display = "none";

                // on affiche "mdp non valide" si les consignes sont fermées et que le mdp est invalide
                if (document.querySelector('.inputPasswordError') && document.getElementById('passwordError')) {
                    document.getElementById('passwordError').style.display = "block";
                } else {
                    document.getElementById('passwordError').style.display = "none";
                }

            }

        })

        if (this.form) {

            this.form.addEventListener('submit', (event) => {

                if (!this.isStateOk) {
                    event.preventDefault();
                    return false;
                }

            });

        }

    }

    matchConditions() {

        var match = true;

        // Vérifie tous les checkers
        // - si le champs est obligatoire
        // - si le champs est facultatif ET renseigné

        if (this.isRequired() || this.password.value.length) {

            for (let [type, item] of Object.entries(this.checkers)) {

                match &=
                    (item.condition === true && this.count(item.pattern)) ||
                    (item.condition && this.count(item.pattern) >= item.condition)
                ;

            }

            if (this.options.conditions.length) {
                match &= this.password.value.length >= this.options.conditions.length;
            }

        }


        return match;
    }

    crossMatchConditions() {

        if (this.isRequired() || this.password.value.length) {

            for (let [type, n] of Object.entries(this.checkers)) {

                let typeClass = document.querySelector('#passwordCheckerList .' + type);

                if (n.condition && (this.count(n.pattern) !== 0)) {
                    typeClass.style.textDecoration = 'line-through';
                } else {
                    typeClass.style.textDecoration = 'none';
                }

            }

        }

        if (this.password.value.length >= this.options.conditions.length) {

            this.notification.querySelector('.numeral').style.textDecoration = 'line-through';

        } else {

            this.notification.querySelector('.numeral').style.textDecoration = "none";

        }

    }

    isRequired() {
        return this.password.hasAttribute('required') && this.password.getAttribute('required') === 'required';
    }

    count(pat) {
        return ((this.password.value || '').match(pat) || []).length
    }


}
