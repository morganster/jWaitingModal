/**
 * Plugin for displaying modal for loading dialogs in jQuery
 * @author Carlos Eduardo Jaramillo Londoño <cejl397@gmail.com>
 */


(function($) {
    var body = document.getElementById('wm-modal');
    $.fn.showWmModal = function(message) {
        if (message === undefined) {
            message = "Loading";
        }
        var modalHtml = '' +
            '<div class="wm-modal-content">' +
            '<div class="wm-loader"></div>' +
            '<p class="wm-message">' + message + '</p>' +
            '</div>';

        $(this).append(modalHtml);
        $(this).fadeIn('fast');

    };

    $.fn.hideWmModal = function() {
        $(this).fadeOut('fast', function() {
            $(".wm-modal-content").remove();
        });
    };
}(jQuery));