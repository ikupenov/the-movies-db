import templateHandler from 'template-handler';

import firebaseDb from 'firebase-database';

class HeaderController {
    updateHeader() {
        firebaseDb.onAuthStateChanged(user => {
            if (user) {
                templateHandler.setTemplate('header', '#header', { isLoggedIn: true });
            } else {
                templateHandler.setTemplate('header', '#header', { isLoggedIn: false });
            }
        });
    }
}

const headerController = new HeaderController();
export default headerController;