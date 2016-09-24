/* globals Promise */

import moviesDb from 'movies-database';

class SearchModel {
    search(searchTerm) {
        return new Promise((resolve, reject) => {
            // TODO: 

            console.log(searchTerm);
        });
    }

    searchByTitle(movieTitle) {

    }

    searchByDirector(movieDirector) {
        
    }
}

const searchModel = new SearchModel();
export default searchModel;