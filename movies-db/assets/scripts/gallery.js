(function () {
    function generateAddToWatchlistContainer(movieId) {
        let $container = $(`<div class="add-to-watchlist-container" movie-id="${movieId}"/>`);
        let $form = $(`<form action="#/account/add-to-watchlist/${movieId}" method="POST"/>`);
        let $addBtn = $('<button class="add-to-watchlist-btn"/>');
        let $icon = $('<i class="material-icons" style="font-size: 5rem;"/>');
        $icon.html('bookmark_border');

        $addBtn.append($icon);
        $form.append($addBtn);
        $container.append($form);

        return $container[0].outerHTML;
    }

    function generateRemoveFromWatchlistContainer(movieId) {
        let $container = $(`<div class="remove-from-watchlist-container" movie-id="${movieId}"/>`);
        let $form = $(`<form action="#/account/remove-from-watchlist/${movieId}" method="POST"/>`);
        let $removeBtn = $('<button class="remove-from-watchlist-btn"/>');
        let $icon = $('<i class="material-icons" style="font-size: 5rem;"/>');
        $icon.html('bookmark');

        $removeBtn.append($icon);
        $form.append($removeBtn);
        $container.append($form);

        return $container[0].outerHTML;
    }

    var $container = $('.container .container');

    $container.on('click', '.add-to-watchlist-btn', ev => {
        ev.stopPropagation();

        let $target = $(ev.target);
        let $container = $target.parents('.add-to-watchlist-container');
        let movieId = $container.attr('movie-id');

        $(document).ajaxStop(() => {
            let removeFromWatchlistHtml = generateRemoveFromWatchlistContainer(movieId);
            $container.replaceWith(removeFromWatchlistHtml);
        })
    });

    $container.on('click', '.remove-from-watchlist-btn', ev => {
        ev.stopPropagation();

        let $target = $(ev.target);
        let $container = $target.parents('.remove-from-watchlist-container');
        let movieId = $container.attr('movie-id');

        $(document).ajaxStop(() => {
            let addToWatchlistHtml = generateAddToWatchlistContainer(movieId);
            $container.replaceWith(addToWatchlistHtml);
        })
    });
} ());