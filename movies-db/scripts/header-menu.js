/// <reference path="../typings/index.d.ts" />

const SMALL_SCREEN_MAX_WIDTH_IN_PX = 720;

// Reminder: Consider IFEE instead of document.ready
$(document).ready(function () {
    let submitIcon = $('.sb-icon-search');
    let submitInput = $('.sb-search-input');
    let searchBox = $('.sb-search');
    let isOpen = false;

    $(document).mouseup(() => {
        if (isOpen) {
            submitInput.val('');
            $('.sb-search-submit').css('z-index', '-999');
            submitIcon.click();
        }
    });

    submitIcon.click(() => {
        if ($(window).width() > SMALL_SCREEN_MAX_WIDTH_IN_PX) {
            if (!isOpen) {
                searchBox.removeClass('sb-search-close');
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                searchBox.addClass('sb-search-close');
                isOpen = false;
            }
        }
    });

    // Prevents the input from hiding
    submitIcon.mouseup(() => false);
    searchBox.mouseup(() => false);

    let $sbSearch = $('#sb-search');
    let $topNav = $('.topnav');

    function changeHeaderBasedOnResolution() {
        if ($(window).width() <= SMALL_SCREEN_MAX_WIDTH_IN_PX) {
            $sbSearch.addClass('sb-search-open');
            $sbSearch.css({ display: 'none' });
        } else {
            $sbSearch.removeClass('sb-search-open');
            $sbSearch.css({ display: 'block' });
        }
    }

    changeHeaderBasedOnResolution();
    $(window).resize(() => changeHeaderBasedOnResolution());

    $topNav.on('click', (ev) => {
        let $target = $(ev.target);

        if (!$topNav.hasClass('responsive')) {
            $topNav.addClass('responsive');
            $sbSearch.css({ display: 'block' });
        } else if ($target.parents('.icon').length ||
            $target.hasClass('icon')) {
            $topNav.removeClass('responsive');
            $sbSearch.css({ display: 'none' });
        } else if (!$target.parents('.topnav').length &&
            !$target.hasClass('topnav')) {
            $topNav.removeClass('responsive');
            $sbSearch.css({ display: 'none' });
        }
    });

    let $responsiveMenuBtn = $('li.icon');
    $responsiveMenuBtn.on('click', () => {
        if ($topNav.hasClass('responsive')) {
            $sbSearch.css({ display: 'block' });
        } else {
            $sbSearch.css({ display: 'none' });
        }
    });
});