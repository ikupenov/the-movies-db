/* globals Promise */

import loadingScreen from 'loading-screen';
import htmlHandler from 'html-handler';

import searchModel from 'search-model';

class SearchController {
    search(sammy) {
        const searchTerm = sammy.params.search;
        const promise = searchModel.search(searchTerm);
    }
}

const searchController = new SearchController();
export default searchController;