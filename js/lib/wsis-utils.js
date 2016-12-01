define(['jquery', 'hogan', 'fi.dialog'], function ($, _, Dialog) {
    'use strict';


    var wsisUtils = function (el) {
        this.$el = el;
        this.$el.find(".view-list").on('click', $.proxy(this._openPopup, this));
    };

    wsisUtils.prototype = {
        _openPopup: function (ev) {
            if (ev) ev.preventDefault();
            var index = $(ev.target).parent().find('.cat-title span').text();
            this._initDialog('category' + index + 'Dialog', $("#cat" + index).find(".dialog-body").html());
        },
        _initDialog: function (dialogId, body) {
            if (!this[dialogId]) {
                this[dialogId] = new Dialog({
                    showCaption: false,
                    showShare: false,
                    showHeader: true,
                    showClose: true,
                    closeClassName: 'icon icon-48 icon-close-g'
                });
                this[dialogId].$dlgBody.append(body);
            }
            this[dialogId].open();
            $('html, body').animate({ scrollTop: 0 }, 500);
        },
        defaultOptions: {
            templates: {
            }
        }
    };

    $.fn.WsisUtils = function () {
        return this.each(function () {
            var el = $(this);
            new wsisUtils(el);
        });
    };

    $(function () {
        $('[data-toggle="wsis-utils"]').WsisUtils();
    });
});