/* 自封装jQuery（后续扩展，模块化开发，module.export->amd,common.js,sea.js） */

(function () {
    let jQuery = function (selector) {
        function _jQuery() {
            this.node = getDom.call(this, selector);
            function getDom() {
                let arr = document.querySelectorAll(selector);
                for (let i = 0; i < arr.length; i++) {
                    this[i] = arr[i];
                }
                return arr;
            }
        }

        _jQuery.prototype = {
            css() {
                if (arguments.length == 2) {
                    for (let i = 0; i < this.node.length; i++) {
                        this.node[i].style[arguments[0]] = arguments[1];
                    }
                } else if (arguments.length == 1) {
                    if (typeof arguments[0] == "string") {
                        return _getStyle(this.node[0], arguments[0]);
                    } else if (typeof arguments[0] == "object") {
                        for (let key in arguments[0]) {
                            _setStyleArr(this.node, key, arguments[0][key]);
                        }
                    }
                }
            },
            html() { },
            attr() { }
        }

        function _getStyle(element, property) {
            let obj = element.currentStyle ? element.currentStyle : document.defaultView.getComputedStyle(element, null);
            return obj.property;
        }

        function _setStyle(element, property, value) {
            element.style[property] = value;
        }

        function _setStyleArr(arr, property, value) {
            for (let i = 0; i < arr.length; i++) {
                _setStyle(arr[i], property, value);
            }

        }

        return new _jQuery(selector);
    }

    jQuery.ajax = function () { }
    jQuery.extend = function (obj) {
        for (let key in obj) {
            jQuery[key] = obj[key];
        }
    }
    jQuery.fn = jQuery.prototype;
    jQuery.fn.extend = function (obj) {
        for (let key in obj) {
            jQuery.prototype[key] = obj[key];
        }
    }

    window.$ = window.jQuery = jQuery;
})();