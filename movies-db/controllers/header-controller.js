import templateHandler from 'template-handler';

import firebaseDb from 'firebase-database';

class HeaderController {
    updateHeader() {
        firebaseDb.onAuthStateChanged(user => {
            if (user) {
                templateHandler.setTemplate('header', '#header', { loggedIn: true });
            } else {
                templateHandler.setTemplate('header', '#header', { loggedIn: false });
            }
        });
    }
}

const headerController = new HeaderController();
export default headerController;