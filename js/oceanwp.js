function oceanwpCustomSelects() {
    "use strict";
    $j(oceanwpLocalize.customSelects).customSelect({
        customClass: "theme-select"
    })
}! function(e) {
    var t;
    if ("function" == typeof define && define.amd) define(["jquery"], e);
    else if ("object" == typeof exports) {
        try {
            t = require("jquery")
        } catch (e) {}
        module.exports = e(t)
    } else {
        var i = window.Cookies,
            o = window.Cookies = e(window.jQuery);
        o.noConflict = function() {
            return window.Cookies = i, o
        }
    }
}(function(e) {
    var o = /\+/g;

    function f(e) {
        return y.raw ? e : encodeURIComponent(e)
    }

    function m(e, t) {
        var i = y.raw ? e : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")), y.json ? JSON.parse(e) : e
            } catch (e) {}
        }(e);
        return g(t) ? t(i) : i
    }

    function v() {
        for (var e, t, i = 0, o = {}; i < arguments.length; i++)
            for (e in t = arguments[i]) o[e] = t[e];
        return o
    }

    function g(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
    var y = function(e, t, i) {
        if (1 < arguments.length && !g(t)) {
            if ("number" == typeof(i = v(y.defaults, i)).expires) {
                var o = i.expires,
                    n = i.expires = new Date;
                n.setMilliseconds(n.getMilliseconds() + 864e5 * o)
            }
            return document.cookie = [f(e), "=", (s = t, f(y.json ? JSON.stringify(s) : String(s))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var s, r, a = e ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], d = 0, c = l.length; d < c; d++) {
            var u = l[d].split("="),
                p = (r = u.shift(), y.raw ? r : decodeURIComponent(r)),
                h = u.join("=");
            if (e === p) {
                a = m(h, t);
                break
            }
            e || void 0 === (h = m(h)) || (a[p] = h)
        }
        return a
    };
    return y.get = y.set = y, y.defaults = {}, y.remove = function(e, t) {
        return y(e, "", v(t, {
            expires: -1
        })), !y(e)
    }, e && (e.cookie = y, e.removeCookie = y.remove), y
}),
function(a) {
    "use strict";
    a.fn.extend({
        customSelect: function(e) {
            if (void 0 === document.body.style.maxHeight) return this;

            function n(e, t) {
                var i = e.find(":selected"),
                    o = t.children(":first"),
                    n = i.html() || "&nbsp;";
                o.html(n), i.attr("disabled") ? t.addClass(r("DisabledOption")) : t.removeClass(r("DisabledOption")), setTimeout(function() {
                    t.removeClass(r("Open")), a(document).off("mouseup.customSelect")
                }, 60)
            }
            var s = (e = a.extend({
                    customClass: "customSelect",
                    mapClass: !0,
                    mapStyle: !0
                }, e)).customClass,
                r = function(e) {
                    return s + e
                };
            return this.each(function() {
                var t = a(this),
                    i = a("<span />").addClass(r("Inner")),
                    o = a("<span />");
                t.after(o.append(i)), o.addClass(s), e.mapClass && o.addClass(t.attr("class")), e.mapStyle && o.attr("style", t.attr("style")), t.addClass("hasCustomSelect").on("render.customSelect", function() {
                    n(t, o), t.css("width", "");
                    parseInt(t.outerWidth(), 10), parseInt(o.outerWidth(), 10), parseInt(o.width(), 10);
                    o.css({
                        display: "inline-block"
                    });
                    var e = o.outerHeight();
                    t.attr("disabled") ? o.addClass(r("Disabled")) : o.removeClass(r("Disabled")), i.css({
                        display: "inline-block"
                    }), t.css({
                        "-webkit-appearance": "menulist-button",
                        width: o.outerWidth(),
                        position: "absolute",
                        opacity: 0,
                        height: e,
                        fontSize: o.css("font-size")
                    })
                }).on("change.customSelect", function() {
                    o.addClass(r("Changed")), n(t, o)
                }).on("keyup.customSelect", function(e) {
                    o.hasClass(r("Open")) ? 13 != e.which && 27 != e.which || n(t, o) : (t.trigger("blur.customSelect"), t.trigger("focus.customSelect"))
                }).on("mousedown.customSelect", function() {
                    o.removeClass(r("Changed"))
                }).on("mouseup.customSelect", function(e) {
                    o.hasClass(r("Open")) || (0 < a("." + r("Open")).not(o).length && "undefined" != typeof InstallTrigger ? t.trigger("focus.customSelect") : (o.addClass(r("Open")), e.stopPropagation(), a(document).one("mouseup.customSelect", function(e) {
                        e.target != t.get(0) && a.inArray(e.target, t.find("*").get()) < 0 ? t.trigger("blur.customSelect") : n(t, o)
                    })))
                }).on("focus.customSelect", function() {
                    o.removeClass(r("Changed")).addClass(r("Focus"))
                }).on("blur.customSelect", function() {
                    o.removeClass(r("Focus") + " " + r("Open"))
                }).on("mouseenter.customSelect", function() {
                    o.addClass(r("Hover"))
                }).on("mouseleave.customSelect", function() {
                    o.removeClass(r("Hover"))
                }).trigger("render.customSelect")
            })
        }
    })
}(jQuery),
function(n) {
    "use strict";
    n.fn.fitVids = function(e) {
        var i = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var t = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', t.appendChild(o.childNodes[1])
        }
        return e && n.extend(i, e), this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var o = ".fitvidsignore";
            i.ignore && (o = o + ", " + i.ignore);
            var t = n(this).find(e.join(","));
            (t = (t = t.not("object object")).not(o)).each(function() {
                var e = n(this);
                if (!(0 < e.parents(o).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                    var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("name")) {
                        var i = "fitvid" + n.fn.fitVids._count;
                        e.attr("name", i), n.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }, n.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(t, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function(e, t) {
    "use strict";
    var u = Array.prototype.slice,
        i = e.console,
        p = void 0 === i ? function() {} : function(e) {
            i.error(e)
        };

    function o(d, n, c) {
        (c = c || t || e.jQuery) && (n.prototype.option || (n.prototype.option = function(e) {
            c.isPlainObject(e) && (this.options = c.extend(!0, this.options, e))
        }), c.fn[d] = function(e) {
            if ("string" != typeof e) return o = e, this.each(function(e, t) {
                var i = c.data(t, d);
                i ? (i.option(o), i._init()) : (i = new n(t, o), c.data(t, d, i))
            }), this;
            var t, s, r, a, l, o, i = u.call(arguments, 1);
            return r = i, l = "$()." + d + '("' + (s = e) + '")', (t = this).each(function(e, t) {
                var i = c.data(t, d);
                if (i) {
                    var o = i[s];
                    if (o && "_" != s.charAt(0)) {
                        var n = o.apply(i, r);
                        a = void 0 === a ? n : a
                    } else p(l + " is not a valid method")
                } else p(d + " not initialized. Cannot call methods, i.e. " + l)
            }), void 0 !== a ? a : t
        }, s(c))
    }

    function s(e) {
        !e || e && e.bridget || (e.bridget = o)
    }
    return s(t || e.jQuery), o
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                o = i[e] = i[e] || [];
            return -1 == o.indexOf(t) && o.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var o = i.indexOf(t);
            return -1 != o && i.splice(o, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
                var s = i[n];
                o && o[s] && (this.off(e, s), delete o[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";

    function g(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }
    var i = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        w = y.length;

    function b(e) {
        var t = getComputedStyle(e);
        return t || i("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }
    var $, C = !1;

    function S(e) {
        if (! function() {
                if (!C) {
                    C = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                    var t = document.body || document.documentElement;
                    t.appendChild(e);
                    var i = b(e);
                    $ = 200 == Math.round(g(i.width)), S.isBoxSizeOuter = $, t.removeChild(e)
                }
            }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = b(e);
            if ("none" == t.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; t < w; t++) {
                    e[y[t]] = 0
                }
                return e
            }();
            var i = {};
            i.width = e.offsetWidth, i.height = e.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == t.boxSizing, n = 0; n < w; n++) {
                var s = y[n],
                    r = t[s],
                    a = parseFloat(r);
                i[s] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight,
                d = i.paddingTop + i.paddingBottom,
                c = i.marginLeft + i.marginRight,
                u = i.marginTop + i.marginBottom,
                p = i.borderLeftWidth + i.borderRightWidth,
                h = i.borderTopWidth + i.borderBottomWidth,
                f = o && $,
                m = g(t.width);
            !1 !== m && (i.width = m + (f ? 0 : l + p));
            var v = g(t.height);
            return !1 !== v && (i.height = v + (f ? 0 : d + h)), i.innerWidth = i.width - (l + p), i.innerHeight = i.height - (d + h), i.outerWidth = i.width + c, i.outerHeight = i.height + u, i
        }
    }
    return S
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var i = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var o = t[i] + "MatchesSelector";
            if (e[o]) return o
        }
    }();
    return function(e, t) {
        return e[i](t)
    }
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector)
}(window, function(d, s) {
    var c = {
            extend: function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        t = Array.prototype.slice;
    c.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
    }, c.removeFrom = function(e, t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, c.getParent = function(e, t) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, s(e, t)) return e
    }, c.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, c.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.filterFindElements = function(e, o) {
        e = c.makeArray(e);
        var n = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement)
                if (o) {
                    s(e, o) && n.push(e);
                    for (var t = e.querySelectorAll(o), i = 0; i < t.length; i++) n.push(t[i])
                } else n.push(e)
        }), n
    }, c.debounceMethod = function(e, t, o) {
        o = o || 100;
        var n = e.prototype[t],
            s = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[s];
            clearTimeout(e);
            var t = arguments,
                i = this;
            this[s] = setTimeout(function() {
                n.apply(i, t), delete i[s]
            }, o)
        }
    }, c.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, c.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    };
    var u = d.console;
    return c.htmlInit = function(a, l) {
        c.docReady(function() {
            var e = c.toDashed(l),
                n = "data-" + e,
                t = document.querySelectorAll("[" + n + "]"),
                i = document.querySelectorAll(".js-" + e),
                o = c.makeArray(t).concat(c.makeArray(i)),
                s = n + "-options",
                r = d.jQuery;
            o.forEach(function(t) {
                var e, i = t.getAttribute(n) || t.getAttribute(s);
                try {
                    e = i && JSON.parse(i)
                } catch (e) {
                    return void(u && u.error("Error parsing " + n + " on " + t.className + ": " + e))
                }
                var o = new a(t, e);
                r && r.data(t, l, o)
            })
        })
    }, c
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
    "use strict";
    var i = document.documentElement.style,
        o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
        n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        s = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [o],
        r = {
            transform: n,
            transition: o,
            transitionDuration: o + "Duration",
            transitionProperty: o + "Property",
            transitionDelay: o + "Delay"
        };

    function a(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var l = a.prototype = Object.create(e.prototype);
    l.constructor = a, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, l.getSize = function() {
        this.size = t(this.element)
    }, l.css = function(e) {
        var t = this.element.style;
        for (var i in e) {
            t[r[i] || i] = e[i]
        }
    }, l.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = e[t ? "left" : "right"],
            n = e[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size; - 1 != o.indexOf("%") && (s = s / 100 * a.width), -1 != n.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= t ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, l.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + e[n];
        t[s] = this.getXValue(a), t[r] = "";
        var l = o ? "paddingTop" : "paddingBottom",
            d = o ? "top" : "bottom",
            c = o ? "bottom" : "top",
            u = this.position.y + e[l];
        t[d] = this.getYValue(u), t[c] = "", this.css(t), this.emitEvent("layout", [this])
    }, l.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, l.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, l._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), !n || this.isTransitioning) {
            var s = e - i,
                r = t - o,
                a = {};
            a.transform = this.getTranslate(s, r), this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, l.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, l._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, l.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
            for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var d = "opacity," + n.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    });
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(s, this, !1)
        }
    }, l.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, l.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = c[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[i], function(e) {
                    for (var t in e) return !1;
                    return !null
                }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function(e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t)
    };
    var u = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(u)
    }, l.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function() {
        o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), this.hide()) : this.removeElem()
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, a
}),
function(n, s) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(e, t, i, o) {
        return s(n, e, t, i, o)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(e, t, n, s, o) {
    "use strict";

    function i() {}
    var r = e.console,
        a = e.jQuery,
        l = 0,
        d = {};

    function c(e, t) {
        var i = s.getQueryElement(e);
        if (i) {
            this.element = i, a && (this.$element = a(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t);
            var o = ++l;
            this.element.outlayerGUID = o, (d[o] = this)._create(), this._getOption("initLayout") && this.layout()
        } else r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
    }
    c.namespace = "outlayer", c.Item = o, c.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = c.prototype;

    function p(e) {
        function t() {
            e.apply(this, arguments)
        }
        return (t.prototype = Object.create(e.prototype)).constructor = t
    }
    s.extend(u, t.prototype), u.option = function(e) {
        s.extend(this.options, e)
    }, u._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, c.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, o = [], n = 0; n < t.length; n++) {
            var s = new i(t[n], this);
            o.push(s)
        }
        return o
    }, u._filterFindItemElements = function(e) {
        return s.filterFindElements(e, this.options.itemSelector)
    }, u.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element
        })
    }, u.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function() {
        this.getSize()
    }, u.getSize = function() {
        this.size = n(this.element)
    }, u._getMeasurement = function(e, t) {
        var i, o = this.options[e];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[e] = i ? n(i)[t] : o) : this[e] = 0
    }, u.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, u._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored
        })
    }, u._layoutItems = function(e, i) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var o = [];
            e.forEach(function(e) {
                var t = this._getItemLayoutPosition(e);
                t.item = e, t.isInstant = i || e.isLayoutInstant, o.push(t)
            }, this), this._processLayoutQueue(o)
        }
    }, u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, u._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach(function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, u.updateStagger = function() {
        var e = this.options.stagger;
        if (null != e) return this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                o = t && t[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = h[o] || 1;
            return i * n
        }(e), this.stagger;
        this.stagger = 0
    }, u._positionItem = function(e, t, i, o, n) {
        o ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
    }, u._postLayout = function() {
        this.resizeContainer()
    }, u.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, u._getContainerSize = i, u._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, u._emitCompleteOnItems = function(t, e) {
        var i = this;

        function o() {
            i.dispatchEvent(t + "Complete", null, [e])
        }
        var n = e.length;
        if (e && n) {
            var s = 0;
            e.forEach(function(e) {
                e.once(t, r)
            })
        } else o();

        function r() {
            ++s == n && o()
        }
    }, u.dispatchEvent = function(e, t, i) {
        var o = t ? [t].concat(i) : i;
        if (this.emitEvent(e, o), a)
            if (this.$element = this.$element || a(this.element), t) {
                var n = a.Event(t);
                n.type = e, this.$element.trigger(n, i)
            } else this.$element.trigger(e, i)
    }, u.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, u.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, u.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, u.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            s.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, u._find = function(e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = s.makeArray(e)
    }, u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, u._manageStamp = i, u._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(e);
        return {
            left: t.left - i.left - o.marginLeft,
            top: t.top - i.top - o.marginTop,
            right: i.right - t.right - o.marginRight,
            bottom: i.bottom - t.bottom - o.marginBottom
        }
    }, u.handleEvent = s.handleEvent, u.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function() {
        this.resize()
    }, s.debounceMethod(c, "onresize", 100), u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function() {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, u.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, u.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, u.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
        }
    }, u.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var i = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * i), e.reveal()
            })
        }
    }, u.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var i = this.updateStagger();
            e.forEach(function(e, t) {
                e.stagger(t * i), e.hide()
            })
        }
    }, u.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, u.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, u.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i
        }
    }, u.getItems = function(e) {
        e = s.makeArray(e);
        var i = [];
        return e.forEach(function(e) {
            var t = this.getItem(e);
            t && i.push(t)
        }, this), i
    }, u.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
            e.remove(), s.removeFrom(this.items, e)
        }, this)
    }, u.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
            e.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete d[t], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace)
    }, c.data = function(e) {
        var t = (e = s.getQueryElement(e)) && e.outlayerGUID;
        return t && d[t]
    }, c.create = function(e, t) {
        var i = p(c);
        return i.defaults = s.extend({}, c.defaults), s.extend(i.defaults, t), i.compatOptions = s.extend({}, c.compatOptions), i.namespace = e, i.data = c.data, i.Item = p(o), s.htmlInit(i, e), a && a.bridget && a.bridget(e, i), i
    };
    var h = {
        ms: 1,
        s: 1e3
    };
    return c.Item = o, c
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var i = t.prototype = Object.create(e.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                t = this.layout._sorters;
            for (var i in e) {
                var o = t[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(t, i) {
    "use strict";

    function o(e) {
        (this.isotope = e) && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var n = o.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
        n[e] = function() {
            return i.prototype[e].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(e, t) {
        var i = e + t,
            o = "outer" + t;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + t]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, o.modes = {}, o.create = function(e, t) {
        function i() {
            o.apply(this, arguments)
        }
        return (i.prototype = Object.create(n)).constructor = i, t && (i.options = t), o.modes[i.prototype.namespace = e] = i
    }, o
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, d) {
    var t = e.create("masonry");
    t.compatOptions.fitWidth = "isFitWidth";
    var i = t.prototype;
    return i._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, i.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                t = e && e.element;
            this.columnWidth = t && d(t).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            n = o / i,
            s = i - o % i;
        n = Math[s && s < 1 ? "round" : "floor"](n), this.cols = Math.max(n, 1)
    }, i.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            t = d(e);
        this.containerWidth = t && t.innerWidth
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e), n = {
                x: this.columnWidth * o.col,
                y: o.y
            }, s = o.y + e.size.outerHeight, r = i + o.col, a = o.col; a < r; a++) this.colYs[a] = s;
        return n
    }, i._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        }
    }, i._getTopColGroup = function(e) {
        if (e < 2) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, o = 0; o < i; o++) t[o] = this._getColGroupY(o, e);
        return t
    }, i._getColGroupY = function(e, t) {
        if (t < 2) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i)
    }, i._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < e && i + e > this.cols ? 0 : i;
        var o = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = o ? i + e : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, e)
        }
    }, i._manageStamp = function(e) {
        var t = d(e),
            i = this._getElementOffset(e),
            o = this._getOption("originLeft") ? i.left : i.right,
            n = o + t.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var r = Math.floor(n / this.columnWidth);
        r -= n % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
        for (var a = (this._getOption("originTop") ? i.top : i.bottom) + t.outerHeight, l = s; l <= r; l++) this.colYs[l] = Math.max(a, this.colYs[l])
    }, i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, i._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, i.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
    "use strict";
    var i = e.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in t.prototype) n[s] || (o[s] = t.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("fitRows"),
        i = t.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
    "use strict";
    var t = e.create("vertical", {
            horizontalAlignment: 0
        }),
        i = t.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += e.size.outerHeight, {
            x: t,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, t
}),
function(r, a) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(e, t, i, o, n, s) {
        return a(r, e, t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode)
}(window, function(e, i, t, o, s, n, r) {
    var a = e.jQuery,
        l = String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        d = i.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = n, d.LayoutMode = r;
    var c = d.prototype;
    c._create = function() {
        for (var e in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(e)
    }, c.reloadItems = function() {
        this.itemGUID = 0, i.prototype.reloadItems.call(this)
    }, c._itemize = function() {
        for (var e = i.prototype._itemize.apply(this, arguments), t = 0; t < e.length; t++) {
            e[t].id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, c._initLayoutMode = function(e) {
        var t = r.modes[e],
            i = this.options[e] || {};
        this.options[e] = t.options ? s.extend(t.options, i) : i, this.modes[e] = new t(this)
    }, c.layout = function() {
        this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
    }, c._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, c.arrange = function(e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, c._init = c.arrange, c._hideReveal = function(e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, c._getIsInstant = function() {
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t
    }, c._bindArrangeComplete = function() {
        var e, t, i, o = this;

        function n() {
            e && t && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        this.once("layoutComplete", function() {
            e = !0, n()
        }), this.once("hideComplete", function() {
            t = !0, n()
        }), this.once("revealComplete", function() {
            i = !0, n()
        })
    }, c._filter = function(e) {
        var t = this.options.filter;
        t = t || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(t), r = 0; r < e.length; r++) {
            var a = e[r];
            if (!a.isIgnored) {
                var l = s(a);
                l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, c._getFilterTest = function(t) {
        return a && this.options.isJQueryFiltering ? function(e) {
            return a(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, c.updateSortData = function(e) {
        var t;
        t = e ? (e = s.makeArray(e), this.getItems(e)) : this.items, this._getSorters(), this._updateItemsSortData(t)
    }, c._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) {
            var i = e[t];
            this._sorters[t] = u(i)
        }
    }, c._updateItemsSortData = function(e) {
        for (var t = e && e.length, i = 0; t && i < t; i++) {
            e[i].updateSortData()
        }
    };
    var u = function(e) {
        if ("string" != typeof e) return e;
        var t = l(e).split(" "),
            i = t[0],
            o = i.match(/^\[(.+)\]$/),
            n = function(t, i) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(e) {
                    var t = e.querySelector(i);
                    return t && t.textContent
                }
            }(o && o[1], i),
            s = d.sortDataParsers[t[1]];
        return e = s ? function(e) {
            return e && s(n(e))
        } : function(e) {
            return e && n(e)
        }
    };
    d.sortDataParsers = {
        parseInt: function(e) {
            return parseInt(e, 10)
        },
        parseFloat: function(e) {
            return parseFloat(e)
        }
    }, c._sort = function() {
        if (this.options.sortBy) {
            var e = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var r, a, t = (r = this.sortHistory, a = this.options.sortAscending, function(e, t) {
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        n = e.sortData[o],
                        s = t.sortData[o];
                    if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
                }
                return 0
            });
            this.filteredItems.sort(t)
        }
    }, c._getIsSameSortBy = function(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t] != this.sortHistory[t]) return !1;
        return !0
    }, c._mode = function() {
        var e = this.options.layoutMode,
            t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t
    }, c._resetLayout = function() {
        i.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }, c._manageStamp = function(e) {
        this._mode()._manageStamp(e)
    }, c._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, c.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, c.appended = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, c.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
        }
    }, c._filterRevealAdded = function(e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, c.insert = function(e) {
        var t = this.addItems(e);
        if (t.length) {
            var i, o, n = t.length;
            for (i = 0; i < n; i++) o = t[i], this.element.appendChild(o.element);
            var s = this._filter(t).matches;
            for (i = 0; i < n; i++) t[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete t[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var p = c.remove;
    return c.remove = function(e) {
        e = s.makeArray(e);
        var t = this.getItems(e);
        p.call(this, e);
        for (var i = t && t.length, o = 0; i && o < i; o++) {
            var n = t[o];
            s.removeFrom(this.filteredItems, n)
        }
    }, c.shuffle = function() {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, c._noTransition = function(e, t) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = e.apply(this, t);
        return this.options.transitionDuration = i, o
    }, c.getFilteredItemElements = function() {
        return this.filteredItems.map(function(e) {
            return e.element
        })
    }, d
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(l) {
    function d(e) {
        return parseFloat(e) || 0
    }

    function c(e) {
        var t = l(e),
            o = null,
            n = [];
        return t.each(function() {
            var e = l(this),
                t = e.offset().top - d(e.css("margin-top")),
                i = 0 < n.length ? n[n.length - 1] : null;
            null === i ? n.push(e) : Math.floor(Math.abs(o - t)) <= 1 ? n[n.length - 1] = i.add(e) : n.push(e), o = t
        }), n
    }

    function u(e) {
        var t = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? t.byRow = e : "remove" === e && (t.remove = !0), t)
    }
    var o = -1,
        n = -1,
        p = l.fn.matchHeight = function(e) {
            var t = u(e);
            if (t.remove) {
                var i = this;
                return this.css(t.property, ""), l.each(p._groups, function(e, t) {
                    t.elements = t.elements.not(i)
                }), this
            }
            return this.length <= 1 && !t.target || (p._groups.push({
                elements: this,
                options: t
            }), p._apply(this, t)), this
        };
    p.version = "0.7.2", p._groups = [], p._throttle = 80, p._maintainScroll = !1, p._beforeUpdate = null, p._afterUpdate = null, p._rows = c, p._parse = d, p._parseOptions = u, p._apply = function(e, t) {
        var s = u(t),
            i = l(e),
            o = [i],
            n = l(window).scrollTop(),
            r = l("html").outerHeight(!0),
            a = i.parents().filter(":hidden");
        return a.each(function() {
            var e = l(this);
            e.data("style-cache", e.attr("style"))
        }), a.css("display", "block"), s.byRow && !s.target && (i.each(function() {
            var e = l(this),
                t = e.css("display");
            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: t,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), o = c(i), i.each(function() {
            var e = l(this);
            e.attr("style", e.data("style-cache") || "")
        })), l.each(o, function(e, t) {
            var i = l(t),
                n = 0;
            if (s.target) n = s.target.outerHeight(!1);
            else {
                if (s.byRow && i.length <= 1) return void i.css(s.property, "");
                i.each(function() {
                    var e = l(this),
                        t = e.attr("style"),
                        i = e.css("display");
                    "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                    var o = {
                        display: i
                    };
                    o[s.property] = "", e.css(o), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "")
                })
            }
            i.each(function() {
                var e = l(this),
                    t = 0;
                s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (t += d(e.css("border-top-width")) + d(e.css("border-bottom-width")), t += d(e.css("padding-top")) + d(e.css("padding-bottom"))), e.css(s.property, n - t + "px"))
            })
        }), a.each(function() {
            var e = l(this);
            e.attr("style", e.data("style-cache") || null)
        }), p._maintainScroll && l(window).scrollTop(n / r * l("html").outerHeight(!0)), this
    }, p._applyDataApi = function() {
        var i = {};
        l("[data-match-height], [data-mh]").each(function() {
            var e = l(this),
                t = e.attr("data-mh") || e.attr("data-match-height");
            i[t] = t in i ? i[t].add(e) : e
        }), l.each(i, function() {
            this.matchHeight(!0)
        })
    };

    function s(e) {
        p._beforeUpdate && p._beforeUpdate(e, p._groups), l.each(p._groups, function() {
            p._apply(this.elements, this.options)
        }), p._afterUpdate && p._afterUpdate(e, p._groups)
    }
    p._update = function(e, t) {
        if (t && "resize" === t.type) {
            var i = l(window).width();
            if (i === o) return;
            o = i
        }
        e ? -1 === n && (n = setTimeout(function() {
            s(t), n = -1
        }, p._throttle)) : s(t)
    }, l(p._applyDataApi);
    var e = l.fn.on ? "on" : "bind";
    l(window)[e]("load", function(e) {
        p._update(!1, e)
    }), l(window)[e]("resize orientationchange", function(e) {
        p._update(!0, e)
    })
}),
function() {
    "use strict";
    var t = {};

    function o(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    t.classCallCheck = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    };
    var e, i, n, s, r, a, l = {
            moving: !(t.createClass = function(e, t, i) {
                return t && o(e.prototype, t), i && o(e, i), e
            }),
            opened: !1
        },
        d = {
            isUrl: function(e) {
                return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
            },
            addPrefixes: function(e) {
                this.addPrefix(e, "id"), this.addPrefix(e, "class"), e.removeAttr("style")
            },
            addPrefix: function(e, t) {
                var i = e.attr(t);
                "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr(t, i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-" + t + "-$1"))
            },
            transitions: (s = (document.body || document.documentElement).style, r = !1, a = "transition", a in s ? r = !0 : (e = ["moz", "webkit", "o", "ms"], n = i = void 0, a = a.charAt(0).toUpperCase() + a.substr(1), r = function() {
                for (n = 0; n < e.length; n++)
                    if ((i = e[n]) + a in s) return !0;
                return !1
            }(), a = r ? "-" + i.toLowerCase() + "-" + a.toLowerCase() : null), {
                supported: r,
                property: a
            })
        },
        c = jQuery,
        u = "sidr-animating",
        p = "open",
        h = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        f = (t.createClass(m, [{
            key: "getAnimation",
            value: function(e, t) {
                var i = {},
                    o = this.side;
                return i[o] = "open" === e && "body" === t ? this.menuWidth + "px" : "close" === e && "menu" === t ? "-" + this.menuWidth + "px" : 0, i
            }
        }, {
            key: "prepareBody",
            value: function(e) {
                var t = "open" === e ? "hidden" : "";
                if (this.body.is("body")) {
                    var i = c("html"),
                        o = i.scrollTop();
                    i.css("overflow-x", t).scrollTop(o)
                }
            }
        }, {
            key: "openBody",
            value: function() {
                if (this.displace) {
                    var e = d.transitions,
                        t = this.body;
                    if (e.supported) t.css(e.property, this.side + " " + this.speed / 1e3 + "s " + this.timing).css(this.side, 0).css({
                        width: t.width(),
                        position: "absolute"
                    }), t.css(this.side, this.menuWidth + "px");
                    else {
                        var i = this.getAnimation(p, "body");
                        t.css({
                            width: t.width(),
                            position: "absolute"
                        }).animate(i, {
                            queue: !1,
                            duration: this.speed
                        })
                    }
                }
            }
        }, {
            key: "onCloseBody",
            value: function() {
                var e = d.transitions,
                    t = {
                        width: "",
                        position: "",
                        right: "",
                        left: ""
                    };
                e.supported && (t[e.property] = ""), this.body.css(t).unbind(h)
            }
        }, {
            key: "closeBody",
            value: function() {
                var e = this;
                if (this.displace)
                    if (d.transitions.supported) this.body.css(this.side, 0).one(h, function() {
                        e.onCloseBody()
                    });
                    else {
                        var t = this.getAnimation("close", "body");
                        this.body.animate(t, {
                            queue: !1,
                            duration: this.speed,
                            complete: function() {
                                e.onCloseBody()
                            }
                        })
                    }
            }
        }, {
            key: "moveBody",
            value: function(e) {
                e === p ? this.openBody() : this.closeBody()
            }
        }, {
            key: "onOpenMenu",
            value: function(e) {
                var t = this.name;
                l.moving = !1, l.opened = t, this.item.unbind(h), this.body.removeClass(u).addClass(this.openClass), this.onOpenEndCallback(), "function" == typeof e && e(t)
            }
        }, {
            key: "openMenu",
            value: function(e) {
                var t = this,
                    i = this.item;
                if (d.transitions.supported) i.css(this.side, 0).one(h, function() {
                    t.onOpenMenu(e)
                });
                else {
                    var o = this.getAnimation(p, "menu");
                    i.css("display", "block").animate(o, {
                        queue: !1,
                        duration: this.speed,
                        complete: function() {
                            t.onOpenMenu(e)
                        }
                    })
                }
            }
        }, {
            key: "onCloseMenu",
            value: function(e) {
                this.item.css({
                    left: "",
                    right: ""
                }).unbind(h), c("html").css("overflow-x", ""), l.moving = !1, l.opened = !1, this.body.removeClass(u).removeClass(this.openClass), this.onCloseEndCallback(), "function" == typeof e && e(name)
            }
        }, {
            key: "closeMenu",
            value: function(e) {
                var t = this,
                    i = this.item;
                if (d.transitions.supported) i.css(this.side, "").one(h, function() {
                    t.onCloseMenu(e)
                });
                else {
                    var o = this.getAnimation("close", "menu");
                    i.animate(o, {
                        queue: !1,
                        duration: this.speed,
                        complete: function() {
                            t.onCloseMenu()
                        }
                    })
                }
            }
        }, {
            key: "moveMenu",
            value: function(e, t) {
                this.body.addClass(u), e === p ? this.openMenu(t) : this.closeMenu(t)
            }
        }, {
            key: "move",
            value: function(e, t) {
                l.moving = !0, this.prepareBody(e), this.moveBody(e), this.moveMenu(e, t)
            }
        }, {
            key: "open",
            value: function(e) {
                var t = this;
                l.opened === this.name || l.moving || (!1 === l.opened ? (this.move("open", e), this.onOpenCallback()) : new m(l.opened).close(function() {
                    t.open(e)
                }))
            }
        }, {
            key: "close",
            value: function(e) {
                l.opened !== this.name || l.moving || (this.move("close", e), this.onCloseCallback())
            }
        }, {
            key: "toggle",
            value: function(e) {
                l.opened === this.name ? this.close(e) : this.open(e)
            }
        }]), m);

    function m(e) {
        t.classCallCheck(this, m), this.name = e, this.item = c("#" + e), this.openClass = "sidr" === e ? "sidr-open" : "sidr-open " + e + "-open", this.menuWidth = this.item.outerWidth(!0), this.speed = this.item.data("speed"), this.side = this.item.data("side"), this.displace = this.item.data("displace"), this.timing = this.item.data("timing"), this.method = this.item.data("method"), this.onOpenCallback = this.item.data("onOpen"), this.onCloseCallback = this.item.data("onClose"), this.onOpenEndCallback = this.item.data("onOpenEnd"), this.onCloseEndCallback = this.item.data("onCloseEnd"), this.body = c(this.item.data("body"))
    }
    var v, g = jQuery;

    function y(i) {
        return function(e, t) {
            e = "function" == typeof e ? (t = e, "sidr") : e || "sidr",
                function(e, t, i) {
                    var o = new f(t);
                    switch (e) {
                        case "open":
                            o.open(i);
                            break;
                        case "close":
                            o.close(i);
                            break;
                        case "toggle":
                            o.toggle(i);
                            break;
                        default:
                            g.error("Method " + e + " does not exist on jQuery.sidr")
                    }
                }(i, e, t)
        }
    }
    var w, b = jQuery,
        $ = ["open", "close", "toggle"],
        C = {};
    for (v = 0; v < $.length; v++) C[w = $[v]] = y(w);

    function S(e) {
        return "status" === e ? l : C[e] ? C[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? void b.error("Method " + e + " does not exist on jQuery.sidr") : C.toggle.apply(this, arguments)
    }
    var k = jQuery;
    jQuery.sidr = S, jQuery.fn.sidr = function(e) {
        var t = d.transitions,
            o = k.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                timing: "ease",
                method: "toggle",
                bind: "touchstart click",
                onOpen: function() {},
                onClose: function() {},
                onOpenEnd: function() {},
                onCloseEnd: function() {}
            }, e),
            n = o.name,
            i = k("#" + n);
        return 0 === i.length && (i = k("<div />").attr("id", n).insertAfter(k("#site-header"))), t.supported && i.css(t.property, o.side + " " + o.speed / 1e3 + "s " + o.timing), i.addClass("sidr").addClass(o.side).data({
            speed: o.speed,
            side: o.side,
            body: o.body,
            displace: o.displace,
            timing: o.timing,
            method: o.method,
            onOpen: o.onOpen,
            onClose: o.onClose,
            onOpenEnd: o.onOpenEnd,
            onCloseEnd: o.onCloseEnd
        }), i = function(t, e) {
            if ("function" == typeof e.source) {
                var i = e.source(name);
                t.html(i)
            } else if ("string" == typeof e.source && d.isUrl(e.source)) k.get(e.source, function(e) {
                t.html(e)
            });
            else if ("string" == typeof e.source) {
                var o = "",
                    n = e.source.split(",");
                if (k.each(n, function(e, t) {
                        o += '<div class="sidr-inner">' + k(t).html() + "</div>"
                    }), e.renaming) {
                    var s = k("<div />").html(o);
                    s.find("*").each(function(e, t) {
                        var i = k(t);
                        d.addPrefixes(i)
                    }), o = s.html()
                }
                t.html(o)
            } else null !== e.source && k.error("Invalid Sidr Source");
            return t
        }(i, o), this.each(function() {
            var e = k(this),
                t = e.data("sidr"),
                i = !1;
            t || (l.moving = !1, l.opened = !1, e.data("sidr", n), e.bind(o.bind, function(e) {
                e.preventDefault(), i || (i = !0, S(o.method, n), setTimeout(function() {
                    i = !1
                }, 100))
            }))
        })
    }
}(),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(d) {
    "use strict";
    var n, r = window.Slick || {};
    n = 0, (r = function(e, t) {
        var i, o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: d(e),
            appendDots: d(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return d('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, d.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = d(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, i = d(e).data("slick") || {}, o.options = d.extend({}, o.defaults, t, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = d.proxy(o.autoPlay, o), o.autoPlayClear = d.proxy(o.autoPlayClear, o), o.autoPlayIterator = d.proxy(o.autoPlayIterator, o), o.changeSlide = d.proxy(o.changeSlide, o), o.clickHandler = d.proxy(o.clickHandler, o), o.selectHandler = d.proxy(o.selectHandler, o), o.setPosition = d.proxy(o.setPosition, o), o.swipeHandler = d.proxy(o.swipeHandler, o), o.dragHandler = d.proxy(o.dragHandler, o), o.keyHandler = d.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var o = this;
        if ("boolean" == typeof t) i = t, t = null;
        else if (t < 0 || t >= o.slideCount) return !1;
        o.unload(), "number" == typeof t ? 0 === t && 0 === o.$slides.length ? d(e).appendTo(o.$slideTrack) : i ? d(e).insertBefore(o.$slides.eq(t)) : d(e).insertAfter(o.$slides.eq(t)) : !0 === i ? d(e).prependTo(o.$slideTrack) : d(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, t) {
            d(t).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, r.prototype.animateSlide = function(e, t) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, t) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, t) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), d({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate(" + e + "px, 0px)" : i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), t && setTimeout(function() {
            o.disableTransition(), t.call()
        }, o.options.speed))
    }, r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = d(e).not(this.$slider)), e
    }, r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = d(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, r.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(d("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var e, t, i, o, n, s, r, a = this;
        if (o = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; e < n; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = e * r + (t * a.options.slidesPerRow + i);
                        s.get(c) && d.appendChild(s.get(c))
                    }
                    l.appendChild(d)
                }
                o.appendChild(l)
            }
            a.$slider.empty().append(o), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(e, t) {
        var i, o, n, s = this,
            r = !1,
            a = s.$slider.width(),
            l = window.innerWidth || d(window).width();
        if ("window" === s.respondTo ? n = l : "slider" === s.respondTo ? n = a : "min" === s.respondTo && (n = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? n < s.breakpoints[i] && (o = s.breakpoints[i]) : n > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint && o === s.activeBreakpoint && !t || (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = o), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }, r.prototype.changeSlide = function(e, t) {
        var i, o, n = this,
            s = d(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, t);
                break;
            case "next":
                o = 0 == i ? n.options.slidesToScroll : i, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, t);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || s.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(r), !1, t), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }, r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
    }, r.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            d(this).attr("style", d(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var t = d(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            o = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++o;
            else
                for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) o = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return o - 1
    }, r.prototype.getLeft = function(e) {
        var t, i, o, n = this,
            s = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (s = e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (e - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * i * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (e + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (s = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * i * -1 + s, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (n.$list.width() - o.outerWidth()) / 2)), t
    }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, r.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            o = 0,
            n = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) n.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var i, o, n = this;
        return o = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - o + d(t).outerWidth() / 2 > -1 * n.swipeLeft) return i = t, !1
        }), Math.abs(d(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, r.prototype.init = function(e) {
        var t = this;
        d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, r.prototype.initADA = function() {
        var i = this;
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
            d(this).attr("role", "option");
            var t = i.options.centerMode ? e : Math.floor(e / i.options.slidesToShow);
            !0 === i.options.dots && d(this).attr("aria-describedby", "slick-slide" + i.instanceUid + t)
        }), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(e) {
            d(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + i.instanceUid + e,
                id: "slick-slide" + i.instanceUid + e
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), i.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && d("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
    }, r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
    }, r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
    }, r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        var e, t, i, s = this;

        function o(e) {
            d("img[data-lazy]", e).each(function() {
                var e = d(this),
                    t = d(this).attr("data-lazy"),
                    i = d(this).attr("data-srcset"),
                    o = d(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (e.attr("srcset", i), o && e.attr("sizes", o)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, t])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                }, n.src = t
            })
        }
        if (!0 === s.options.centerMode ? i = !0 === s.options.infinite ? (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (t = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (t = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, i = Math.ceil(t + s.options.slidesToShow), !0 === s.options.fade && (0 < t && t--, i <= s.slideCount && i++)), e = s.$slider.find(".slick-slide").slice(t, i), "anticipated" === s.options.lazyLoad)
            for (var n = t - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) n < 0 && (n = s.slideCount - 1), e = (e = e.add(a.eq(n))).add(a.eq(r)), n--, r++;
        o(e), s.slideCount <= s.options.slidesToShow ? o(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? o(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, o, n, s, r = this,
            a = d("img[data-lazy]", r.$slider);
        a.length ? (t = a.first(), i = t.attr("data-lazy"), o = t.attr("data-srcset"), n = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            o && (t.attr("srcset", o), n && t.attr("sizes", n)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
        }, s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
        }, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, r.prototype.refresh = function(e) {
        var t, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), t = o.currentSlide, o.destroy(!0), d.extend(o, o.initials, {
            currentSlide: t
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var e, t, i, o = this,
            n = o.options.responsive || null;
        if ("array" === d.type(n) && n.length) {
            for (e in o.respondTo = o.options.respondTo || "window", n)
                if (i = o.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === t && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(t), o.breakpointSettings[t] = n[e].settings
                } o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, r.prototype.resize = function() {
        var e = this;
        d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var o = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
        o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, r.prototype.setCSS = function(e) {
        var t, i, o = this,
            n = {};
        !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, !1 === o.transformsEnabled || (!(n = {}) === o.cssTransitions ? n[o.animType] = "translate(" + t + ", " + i + ")" : n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)"), o.$slideTrack.css(n)
    }, r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, r.prototype.setFade = function() {
        var i, o = this;
        o.$slides.each(function(e, t) {
            i = o.slideWidth * e * -1, !0 === o.options.rtl ? d(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : d(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, o, n, s = this,
            r = !1;
        if ("object" === d.type(arguments[0]) ? (i = arguments[0], r = arguments[1], n = "multiple") : "string" === d.type(arguments[0]) && (o = arguments[1], r = arguments[2], "responsive" === (i = arguments[0]) && "array" === d.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) s.options[i] = o;
        else if ("multiple" === n) d.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === n)
            for (t in o)
                if ("array" !== d.type(s.options.responsive)) s.options.responsive = [o[t]];
                else {
                    for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === o[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(o[t])
                } r && (s.unload(), s.reinit())
    }, r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, r.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, r.prototype.setSlideClasses = function(e) {
        var t, i, o, n, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var e, t, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (t = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) t = e - 1, d(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1) t = e, d(o.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                d(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, r.prototype.selectHandler = function(e) {
        var t = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
            i = parseInt(t.attr("data-slick-index"));
        i = i || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, r.prototype.slideHandler = function(e, t, i) {
        var o, n, s, r, a, l, d = this;
        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
            if (!1 === t && d.asNavFor(e), o = e, a = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                d.postSlide(o)
            }) : d.postSlide(o));
            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
            d.postSlide(o)
        }) : d.postSlide(o));
        else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), s = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(n, function() {
                d.postSlide(n)
            })) : d.postSlide(n), void d.animateHeight();
            !0 !== i ? d.animateSlide(a, function() {
                d.postSlide(n)
            }) : d.postSlide(n)
        }
    }, r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var e, t, i, o, n = this;
        return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && 0 <= o ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && 315 <= o ? !1 === n.options.rtl ? "left" : "right" : 135 <= o && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? 35 <= o && o <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(e) {
        var t, i, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;
        if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (i = o.swipeDirection()) {
                case "left":
                case "down":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, r.prototype.swipeMove = function(e) {
        var t, i, o, n, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + o * n : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, r.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.unload = function() {
        var e = this;
        d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, d.fn.slick = function() {
        var e, t, i = this,
            o = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new r(i[e], o) : t = i[e].slick[o].apply(i[e].slick, n), void 0 !== t) return t;
        return i
    }
}),
function() {
    var d, a, l, s, i = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            fixedBackground: !0,
            excluded: ""
        },
        v = i,
        c = !1,
        u = !1,
        r = {
            x: 0,
            y: 0
        },
        p = !1,
        h = document.documentElement,
        f = [],
        m = /^Mac/.test(navigator.platform),
        g = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        y = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };

    function w() {
        if (!p && document.body) {
            p = !0;
            var e = document.body,
                t = document.documentElement,
                i = window.innerHeight,
                o = e.scrollHeight;
            if (h = 0 <= document.compatMode.indexOf("CSS") ? t : e, d = e, v.keyboardSupport && M("keydown", k), top != self) u = !0;
            else if (J && i < o && (e.offsetHeight <= i || t.offsetHeight <= i)) {
                var n, s = document.createElement("div");
                s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + h.scrollHeight + "px", document.body.appendChild(s), l = function() {
                    n = n || setTimeout(function() {
                        c || (s.style.height = "0", s.style.height = h.scrollHeight + "px", n = null)
                    }, 500)
                }, setTimeout(l, 10), M("resize", l);
                if ((a = new F(l)).observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), h.offsetHeight <= i) {
                    var r = document.createElement("div");
                    r.style.clear = "both", e.appendChild(r)
                }
            }
            v.fixedBackground || c || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
        }
    }
    var b = [],
        $ = !1,
        C = Date.now();

    function S(u, p, h) {
        var e, t;
        if (e = 0 < (e = p) ? 1 : -1, t = 0 < (t = h) ? 1 : -1, r.x === e && r.y === t || (r.x = e, r.y = t, b = [], C = 0), 1 != v.accelerationMax) {
            var i = Date.now() - C;
            if (i < v.accelerationDelta) {
                var o = (1 + 50 / i) / 2;
                1 < o && (o = Math.min(o, v.accelerationMax), p *= o, h *= o)
            }
            C = Date.now()
        }
        if (b.push({
                x: p,
                y: h,
                lastX: p < 0 ? .99 : -.99,
                lastY: h < 0 ? .99 : -.99,
                start: Date.now()
            }), !$) {
            var n = B(),
                f = u === n || u === document.body;
            null == u.$scrollBehavior && function(e) {
                var t = T(e);
                if (null == z[t]) {
                    var i = getComputedStyle(e, "")["scroll-behavior"];
                    z[t] = "smooth" == i
                }
                return z[t]
            }(u) && (u.$scrollBehavior = u.style.scrollBehavior, u.style.scrollBehavior = "auto");
            var m = function(e) {
                for (var t = Date.now(), i = 0, o = 0, n = 0; n < b.length; n++) {
                    var s = b[n],
                        r = t - s.start,
                        a = r >= v.animationTime,
                        l = a ? 1 : r / v.animationTime;
                    v.pulseAlgorithm && (l = N(l));
                    var d = s.x * l - s.lastX >> 0,
                        c = s.y * l - s.lastY >> 0;
                    i += d, o += c, s.lastX += d, s.lastY += c, a && (b.splice(n, 1), n--)
                }
                f ? window.scrollBy(i, o) : (i && (u.scrollLeft += i), o && (u.scrollTop += o)), p || h || (b = []), b.length ? q(m, u, 1e3 / v.frameRate + 1) : ($ = !1, null != u.$scrollBehavior && (u.style.scrollBehavior = u.$scrollBehavior, u.$scrollBehavior = null))
            };
            q(m, u, 0), $ = !0
        }
    }

    function e(e) {
        p || w();
        var t = e.target;
        if (e.defaultPrevented || e.ctrlKey) return !0;
        if (D(d, "embed") || D(t, "embed") && /\.pdf/i.test(t.src) || D(d, "object") || t.shadowRoot) return !0;
        var i = -e.wheelDeltaX || e.deltaX || 0,
            o = -e.wheelDeltaY || e.deltaY || 0;
        m && (e.wheelDeltaX && P(e.wheelDeltaX, 120) && (i = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && P(e.wheelDeltaY, 120) && (o = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), i || o || (o = -e.wheelDelta || 0), 1 === e.deltaMode && (i *= 40, o *= 40);
        var n = O(t);
        return n ? !! function(e) {
            if (!e) return;
            f.length || (f = [e, e, e]);
            e = Math.abs(e), f.push(e), f.shift(), clearTimeout(s), s = setTimeout(function() {
                try {
                    localStorage.SS_deltaBuffer = f.join(",")
                } catch (e) {}
            }, 1e3);
            var t = 120 < e && W(e);
            return !W(120) && !W(100) && !t
        }(o) || (1.2 < Math.abs(i) && (i *= v.stepSize / 120), 1.2 < Math.abs(o) && (o *= v.stepSize / 120), S(n, i, o), e.preventDefault(), void _()) : !u || !X || (Object.defineProperty(e, "target", {
            value: window.frameElement
        }), parent.wheel(e))
    }

    function k(e) {
        var t = e.target,
            i = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== g.spacebar;
        document.body.contains(d) || (d = document.activeElement);
        var o = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || D(t, "input") && !o.test(t.type) || D(d, "video") || function(e) {
                var t = e.target,
                    i = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do {
                        if (i = t.classList && t.classList.contains("html5-video-controls")) break
                    } while (t = t.parentNode);
                return i
            }(e) || t.isContentEditable || i) return !0;
        if ((D(t, "button") || D(t, "input") && o.test(t.type)) && e.keyCode === g.spacebar) return !0;
        if (D(t, "input") && "radio" == t.type && y[e.keyCode]) return !0;
        var n = 0,
            s = 0,
            r = O(d);
        if (!r) return !u || !X || parent.keydown(e);
        var a = r.clientHeight;
        switch (r == document.body && (a = window.innerHeight), e.keyCode) {
            case g.up:
                s = -v.arrowScroll;
                break;
            case g.down:
                s = v.arrowScroll;
                break;
            case g.spacebar:
                s = -(e.shiftKey ? 1 : -1) * a * .9;
                break;
            case g.pageup:
                s = .9 * -a;
                break;
            case g.pagedown:
                s = .9 * a;
                break;
            case g.home:
                r == document.body && document.scrollingElement && (r = document.scrollingElement), s = -r.scrollTop;
                break;
            case g.end:
                var l = r.scrollHeight - r.scrollTop - a;
                s = 0 < l ? 10 + l : 0;
                break;
            case g.left:
                n = -v.arrowScroll;
                break;
            case g.right:
                n = v.arrowScroll;
                break;
            default:
                return !0
        }
        S(r, n, s), e.preventDefault(), _()
    }

    function t(e) {
        d = e.target
    }
    var o, n, T = (o = 0, function(e) {
            return e.uniqueID || (e.uniqueID = o++)
        }),
        j = {},
        x = {},
        z = {};

    function _() {
        clearTimeout(n), n = setInterval(function() {
            j = x = z = {}
        }, 1e3)
    }

    function I(e, t, i) {
        for (var o = i ? j : x, n = e.length; n--;) o[T(e[n])] = t;
        return t
    }

    function O(e) {
        var t = [],
            i = document.body,
            o = h.scrollHeight;
        do {
            var n = (!1 ? j : x)[T(e)];
            if (n) return I(t, n);
            if (t.push(e), o === e.scrollHeight) {
                var s = L(h) && L(i) || H(h);
                if (u && E(h) || !u && s) return I(t, B())
            } else if (E(e) && H(e)) return I(t, e)
        } while (e = e.parentElement)
    }

    function E(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function L(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }

    function H(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function M(e, t, i) {
        window.addEventListener(e, t, i || !1)
    }

    function A(e, t, i) {
        window.removeEventListener(e, t, i || !1)
    }

    function D(e, t) {
        return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) try {
        f = localStorage.SS_deltaBuffer.split(",")
    } catch (e) {}

    function P(e, t) {
        return Math.floor(e / t) == e / t
    }

    function W(e) {
        return P(f[0], e) && P(f[1], e) && P(f[2], e)
    }
    var R, q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, i) {
            window.setTimeout(e, i || 1e3 / 60)
        },
        F = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        B = (R = document.scrollingElement, function() {
            if (!R) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var t = document.body.scrollTop;
                document.documentElement.scrollTop, window.scrollBy(0, 3), R = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
            }
            return R
        });

    function U(e) {
        var t;
        return ((e *= v.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * v.pulseNormalize
    }

    function N(e) {
        return 1 <= e ? 1 : e <= 0 ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= U(1)), U(e))
    }
    var Q = window.navigator.userAgent,
        Y = /Edge/.test(Q),
        X = /chrome/i.test(Q) && !Y,
        G = /safari/i.test(Q) && !Y,
        V = /mobile/i.test(Q),
        K = /Windows NT 6.1/i.test(Q) && /rv:11/i.test(Q),
        J = G && (/Version\/8/i.test(Q) || /Version\/9/i.test(Q)),
        Z = (X || G || K) && !V,
        ee = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                ee = !0
            }
        }))
    } catch (e) {}
    var te = !!ee && {
            passive: !1
        },
        ie = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    function oe(e) {
        for (var t in e) i.hasOwnProperty(t) && (v[t] = e[t])
    }
    ie && Z && (M(ie, e, te), M("mousedown", t), M("load", w)), oe.destroy = function() {
        a && a.disconnect(), A(ie, e), A("mousedown", t), A("keydown", k), A("resize", l), A("load", w)
    }, window.SmoothScrollOptions && oe(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
        return oe
    }) : "object" == typeof exports ? module.exports = oe : window.SmoothScroll = oe
}(),
function(s, e) {
    "use strict";
    var t, i, r, n, o, a, l, d, c, u = (r = "sf-breadcrumb", n = "sf-js-enabled", o = "sf-with-ul", a = "sf-arrows", (i = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent)) && s("html").css("cursor", "pointer").on("click", s.noop), l = i, d = "behavior" in (t = document.documentElement.style) && "fill" in t && /iemobile/i.test(navigator.userAgent), c = !!e.PointerEvent, {
        hide: function(e) {
            if (this.length) {
                var t = v(this);
                if (!t) return this;
                var i = !0 === t.retainPath ? t.$path : "",
                    o = this.find("li." + t.hoverClass).add(this).not(i).removeClass(t.hoverClass).children(t.popUpSelector),
                    n = t.speedOut;
                if (e && (o.show(), n = 0), (t.retainPath = !1) === t.onBeforeHide.call(o)) return this;
                o.stop(!0, !0).animate(t.animationOut, n, function() {
                    var e = s(this);
                    t.onHide.call(e)
                })
            }
            return this
        },
        show: function() {
            var e = v(this);
            if (!e) return this;
            var t = this.addClass(e.hoverClass).children(e.popUpSelector);
            return !1 === e.onBeforeShow.call(t) || t.stop(!0, !0).animate(e.animation, e.speed, function() {
                e.onShow.call(t)
            }), this
        },
        destroy: function() {
            return this.each(function() {
                var e, t = s(this),
                    i = t.data("sfOptions");
                if (!i) return !1;
                e = t.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), p(t, i), h(e), f(t), t.off(".superfish").off(".hoverIntent"), e.children(i.popUpSelector).attr("style", function(e, t) {
                    return t.replace(/display[^;]+;?/g, "")
                }), i.$path.removeClass(i.hoverClass + " " + r).addClass(i.pathClass), t.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(t), t.removeData("sfOptions")
            })
        },
        init: function(n) {
            return this.each(function() {
                var e = s(this);
                if (e.data("sfOptions")) return !1;
                var t, i = s.extend({}, s.fn.superfish.defaults, n),
                    o = e.find(i.popUpSelector).parent("li");
                i.$path = (t = i, e.find("li." + t.pathClass).slice(0, t.pathLevels).addClass(t.hoverClass + " " + r).filter(function() {
                        return s(this).children(t.popUpSelector).hide().show().length
                    }).removeClass(t.pathClass)), e.data("sfOptions", i), p(e, i, !0), h(o, !0), f(e),
                    function(e, t) {
                        var i = "li:has(" + t.popUpSelector + ")";
                        s.fn.hoverIntent && !t.disableHI ? e.hoverIntent(g, w, i) : e.on("mouseenter.superfish", i, g).on("mouseleave.superfish", i, w);
                        var o = "MSPointerDown.superfish";
                        c && (o = "pointerdown.superfish"), l || (o += " touchend.superfish"), d && (o += " mousedown.superfish"), e.on("focusin.superfish", "li", g).on("focusout.superfish", "li", w).on(o, "a", t, b)
                    }(e, i), o.not("." + r).superfish("hide", !0), i.onInit.call(this)
            })
        }
    });

    function p(e, t, i) {
        var o = n;
        t.cssArrows && (o += " " + a), e[i ? "addClass" : "removeClass"](o)
    }

    function h(e, t) {
        var i = t ? "addClass" : "removeClass";
        e.children("a")[i](o)
    }

    function f(e) {
        var t = e.css("ms-touch-action"),
            i = e.css("touch-action");
        i = "pan-y" === (i = i || t) ? "auto" : "pan-y", e.css({
            "ms-touch-action": i,
            "touch-action": i
        })
    }

    function m(e) {
        return e.closest("." + n)
    }

    function v(e) {
        return m(e).data("sfOptions")
    }

    function g() {
        var e = s(this),
            t = v(e);
        clearTimeout(t.sfTimer), e.siblings().superfish("hide").end().superfish("show")
    }

    function y(e) {
        e.retainPath = -1 < s.inArray(this[0], e.$path), this.superfish("hide"), this.parents("." + e.hoverClass).length || (e.onIdle.call(m(this)), e.$path.length && s.proxy(g, e.$path)())
    }

    function w() {
        var e = s(this),
            t = v(e);
        l ? s.proxy(y, e, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(s.proxy(y, e, t), t.delay))
    }

    function b(e) {
        var t = s(this),
            i = v(t),
            o = t.siblings(e.data.popUpSelector);
        if (!1 === i.onHandleTouch.call(o)) return this;
        0 < o.length && o.is(":hidden") && (t.one("click.superfish", !1), "MSPointerDown" === e.type || "pointerdown" === e.type ? t.trigger("focus") : s.proxy(g, t.parent("li"))())
    }
    s.fn.superfish = function(e, t) {
        return u[e] ? u[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? s.error("Method " + e + " does not exist on jQuery.fn.superfish") : u.init.apply(this, arguments)
    }, s.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: s.noop,
        onBeforeShow: s.noop,
        onShow: s.noop,
        onBeforeHide: s.noop,
        onHide: s.noop,
        onIdle: s.noop,
        onDestroy: s.noop,
        onHandleTouch: s.noop
    }
}(jQuery, window), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpCustomSelects()
});
var $window = ($j = jQuery.noConflict())(window);

function oceanwpDropDownMobile() {
    "use strict";
    if ($j("body").hasClass("dropdown-mobile")) {
        $j(".mobile-menu").on("click", function() {
            return $j("#mobile-dropdown").slideToggle(500), $j(this).toggleClass("opened"), $j(".mobile-menu > .hamburger").toggleClass("is-active"), !1
        });
        var e = function(e) {
                $j("#mobile-dropdown").slideUp(200), $j(".mobile-menu").removeClass("opened"), $j(".mobile-menu > .hamburger").removeClass("is-active")
            },
            t = $j(".mobile-menu > .hamburger"),
            i = !1;
        t.on("click", function() {
            i = !i, t.attr("aria-expanded", i)
        });
        var o = $j("#mobile-dropdown .menu-item-has-children");
        o.children("a").append('<span class="dropdown-toggle"></span>');
        var n = $j(".dropdown-toggle");
        "link" == oceanwpLocalize.sidrDropdownTarget && (n = $j("#mobile-dropdown li.menu-item-has-children > a")), n.on("tap click", function() {
            if ("link" == oceanwpLocalize.sidrDropdownTarget) var e = $j(this).parent("li");
            else e = $j(this).parent("a").parent("li");
            var t = e.parents("li");
            e.children("ul");
            return e.hasClass("active") ? e.removeClass("active").children("ul").slideUp("fast") : (o.not(t).removeClass("active").children("ul").slideUp("fast"), e.addClass("active").children("ul").slideDown("fast")), !1
        }), $j(document).on("click", function() {
            e()
        }).on("click", "#mobile-dropdown", function(e) {
            e.stopPropagation()
        }), $window.resize(function() {
            960 <= $window.width() && e()
        }), $j('#mobile-dropdown li a[href*="#"]:not([href="#"])').on("click", function() {
            e()
        })
    }
}

function oceanwpDropDownSearch() {
}

function oceanwpInitFitVids(e) {
    "use strict";
    $j(".responsive-video-wrap, .responsive-audio-wrap", e).fitVids()
}
$j(document).ready(function() {
    "use strict";
    oceanwpDropDownMobile()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpDropDownSearch()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpInitFitVids()
});
var $j = jQuery.noConflict(),
    $lastWindowWidth = ($window = $j(window)).width(),
    $lastWindowHeight = $window.height();

function oceanwpFixedFooter() {
    "use strict";
    if ($j("body").hasClass("has-fixed-footer")) {
        var e = $j("#main").outerHeight(),
            t = $j("html").height(),
            i = 0,
            o = $j("#wpadminbar");
        o.length && (i = o.outerHeight());
        var n = e + ($window.height() - t - i);
        $j("#main").css("min-height", n)
    }
}

function oceanwpFullScreenMenu() {
    "use strict";
    var i = $j("#site-header.full_screen-header"),
        o = $j("#site-header.full_screen-header #full-screen-menu"),
        n = $j("#site-header.full_screen-header .menu-bar"),
        s = $j("#site-logo.has-full-screen-logo");
    if (n.length) {
        var t = function() {
            i.removeClass("nav-open"), n.removeClass("exit"), s.removeClass("opened"), o.removeClass("active"), o.fadeOut(200), $j("html").css({
                overflow: "",
                "margin-right": ""
            }), $j("#full-screen-menu #site-navigation ul > li.dropdown").removeClass("open-sub"), $j("#full-screen-menu #site-navigation ul.sub-menu").slideUp(200)
        };
        n.on("click", function(e) {
            e.preventDefault(), $j(this).hasClass("exit") ? t() : function() {
                i.addClass("nav-open"), n.addClass("exit"), s.addClass("opened"), o.addClass("active"), o.fadeIn(200);
                var e = $j("html").innerWidth();
                $j("html").css("overflow", "hidden");
                var t = $j("html").innerWidth();
                $j("html").css("margin-right", t - e)
            }()
        }), $j('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]').on("tap click", function() {
            return $j(this).closest("li.dropdown").find("> ul.sub-menu").is(":visible") ? ($j(this).closest("li.dropdown").removeClass("open-sub"), $j(this).closest("li.dropdown").find("> ul.sub-menu").slideUp(200)) : ($j(this).closest("li.dropdown").addClass("open-sub"), $j(this).closest("li.dropdown").find("> ul.sub-menu").slideDown(200)), !1
        }), $j('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
            t()
        })
    }
}
$window.on("load", function() {
    "use strict";
    oceanwpFixedFooter()
}), $window.resize(function() {
    "use strict";
    var e = $window.width(),
        t = $window.height();
    $lastWindowWidth === e && $lastWindowHeight === t || oceanwpFixedFooter()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpFullScreenMenu()
});
$window = ($j = jQuery.noConflict())(window);

function oceanwpFullScreenMobile() {
    "use strict";
    if ($j("body").hasClass("fullscreen-mobile")) {
        var i = $j("#mobile-fullscreen"),
            t = $j(".mobile-menu"),
            o = function(e) {
                t.removeClass("exit"), i.removeClass("active").fadeOut(200), $j("html").css({
                    overflow: "",
                    "margin-right": ""
                }), $j("#mobile-fullscreen nav ul > li.dropdown").removeClass("open-sub"), $j("#mobile-fullscreen nav ul.sub-menu").slideUp(200), $j(".mobile-menu > .hamburger").removeClass("is-active")
            };
        t.on("click", function() {
            $j(this).addClass("exit"), i.addClass("active").fadeIn(200), $j(".mobile-menu > .hamburger").addClass("is-active");
            var e = $j("html").innerWidth();
            $j("html").css("overflow", "hidden");
            var t = $j("html").innerWidth();
            return $j("html").css("margin-right", t - e), !1
        }), $j("#mobile-fullscreen .menu-item-has-children").children("a").append('<span class="dropdown-toggle"></span>'), $j('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').on("tap click", function() {
            return $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").is(":visible") ? ($j(this).closest("li.menu-item-has-children").removeClass("open-sub"), $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").slideUp(200)) : ($j(this).closest("li.menu-item-has-children").addClass("open-sub"), $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").slideDown(200)), !1
        }), $j("#mobile-fullscreen a.close").on("click", function(e) {
            e.preventDefault(), o()
        }), $j('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"])').on("click", function() {
            o()
        }), $window.resize(function() {
            960 <= $window.width() && o()
        })
    }
}

function oceanwpHeaderReplaceSearch() {
}

function oceanwpHeaderSearchForm() {
}
$j(document).ready(function() {
    "use strict";
    oceanwpFullScreenMobile()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpHeaderReplaceSearch()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpHeaderSearchForm()
});
$j = jQuery.noConflict();

function oceanwpInfiniteScrollInit() {
    "use strict";
    var s = $j(".infinite-scroll-wrap");
    s.infiniteScroll({
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: !1
    }), s.on("load.infiniteScroll", function(e, t, i, o) {
        var n = $j(t).find(".item-entry");
        n.imagesLoaded(function() {
            n.animate({
                opacity: 1
            }), n.find("img").each(function(e, t) {
                t.outerHTML = t.outerHTML
            }), s.hasClass("blog-masonry-grid") && (s.isotope("appended", n), n.css("opacity", 0)), $j("body").hasClass("no-carousel") || oceanwpInitCarousel(n), $j("body").hasClass("no-lightbox") || oceanwpInitLightbox(n), $j("body").hasClass("no-fitvids") || oceanwpInitFitVids(n), $j("body").hasClass("no-matchheight") || $j(".blog-equal-heights .blog-entry-inner").matchHeight({
                property: "min-height"
            }), $j(".gallery-format").parent(".thumbnail") && $j(".blog-masonry-grid").length && setTimeout(function() {
                $j(".blog-masonry-grid").isotope("layout")
            }, 601)
        })
    })
}

function oceanwpMasonryGrids() {
    "use strict";
    $j(".blog-masonry-grid").each(function() {
        var e = $j(this);
        e.imagesLoaded(function() {
            e.isotope({
                itemSelector: ".isotope-entry",
                transformsEnabled: !0,
                isOriginLeft: !oceanwpLocalize.isRTL,
                transitionDuration: "0.0s"
            })
        })
    })
}

function oceanwpInitMatchHeight() {
    "use strict";
    $j(".match-height-grid .match-height-content").matchHeight({
        property: "min-height"
    }), $j(".blog-equal-heights .blog-entry-inner").matchHeight({
        property: "min-height"
    })
}($window = $j(window)).on("load", function() {
    "use strict";
    void 0 !== $j.fn.infiniteScroll && $j("div.infinite-scroll-nav").length && oceanwpInfiniteScrollInit()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpMasonryGrids()
}), $j(window).on("orientationchange", function() {
    "use strict";
    oceanwpMasonryGrids()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpInitMatchHeight()
});
$window = ($j = jQuery.noConflict())(window);

function oceanwpMegaMenu() {
    "use strict";
    $j("#top-bar-nav .megamenu-li.full-mega").hover(function() {
        var e = $j("#top-bar"),
            t = e.width(),
            i = e.offset(),
            o = $j(this).offset(),
            n = o.left - i.left + 1;
        $j("body").hasClass("boxed-layout") && (n = o.left - i.left + 1, n -= 30), $j(this).find(".megamenu").css({
            left: "-" + n + "px",
            width: t
        })
    }), $j("#site-navigation .megamenu-li.full-mega").hover(function() {
        var e = $j("#site-header-inner"),
            t = e.width(),
            i = e.offset(),
            o = $j(this).offset(),
            n = o.left - i.left + 1;
        $j("#site-header").hasClass("medium-header") && (t = (e = $j("#site-navigation-wrap > .container")).width(), i = e.offset(), n = o.left - i.left + 1), $j("body").hasClass("boxed-layout") && (n = o.left - i.left + 1, n -= 30), $j(this).find(".megamenu").css({
            left: "-" + n + "px",
            width: t
        })
    }), $j(".navigation .megamenu-li.auto-mega .megamenu").each(function() {
        var e = $j(this).parent(),
            t = e.offset().left,
            i = (e.offset().top, $j(this).parent().width()),
            o = i / 2,
            n = $j(this).outerWidth();
        if (t - n / 2 < 0) {
            var s = t - 10;
            o = 0
        } else s = n / 2;
        oceanwpLocalize.isRTL ? $j(this).css({
            right: -s,
            marginRight: o
        }) : $j(this).css({
            left: -s,
            marginLeft: o
        }), $window.width() - (t - s + n + o) < 0 && $j(this).css({
            left: "auto",
            right: -($window.width() - t - i - 10)
        })
    })
}

function oceanwpNavNoClick() {
    "use strict";
    $j("li.nav-no-click > a").on("click", function() {
        return !1
    })
}

function oceanwpOverlaySearch() {
}

function oceanwpParallaxFooter() {
    "use strict";
    $j("body").hasClass("has-parallax-footer") && setTimeout(function() {
        $j("#main").css("margin-bottom", $j(".parallax-footer").outerHeight())
    }, 1)
}
$j(document).ready(function() {
    "use strict";
    oceanwpMegaMenu()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpNavNoClick()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpOverlaySearch()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpParallaxFooter()
}), $j(window).on("resize", function() {
    "use strict";
    oceanwpParallaxFooter()
});
$window = ($j = jQuery.noConflict())(window);

function oceanwpScrollEffect() {
    "use strict";
    $j("body").hasClass("single-product") || $j("body").hasClass("no-local-scroll") || $j('a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').on("click", function() {
        if (!($j(this).hasClass("omw-open-modal") || $j(this).parent().hasClass("omw-open-modal") || $j(this).parent().parent().parent().hasClass("omw-open-modal") || $j(this).parent().hasClass("opl-link"))) {
            var e, t = $j(this).attr("href"),
                i = t.substr(t.indexOf("#")).slice(1),
                o = $j("#" + i),
                n = oceanwpGetAdminbarHeight() + oceanwpGetTopbarHeight() + oceanwpGetStickyHeaderHeight();
            if (o.length && "" !== i) return e = o.offset().top - n, $j("html, body").stop().animate({
                scrollTop: Math.round(e)
            }, 1e3), !1
        }
    })
}

function oceanwpGetAdminbarHeight() {
    "use strict";
    var e = 0,
        t = $j("#wpadminbar");
    return t.length && (e = t.outerHeight()), e
}

function oceanwpGetTopbarHeight() {
    "use strict";
    var e = 0,
        t = $j("#top-bar-wrap");
    return t.hasClass("top-bar-sticky") && t.length && (e = t.outerHeight()), e
}

function oceanwpGetStickyHeaderHeight() {
    "use strict";
    var e = 0,
        t = $j("#site-header");
    if (t.length) return t.hasClass("fixed-scroll") && (e = t.data("height")), $window.width() <= 960 && !t.hasClass("has-sticky-mobile") && (e = e), t.hasClass("medium-header") && (e = $j("#site-header .bottom-header-wrap").hasClass("fixed-scroll") ? $j("#site-header .bottom-header-wrap").outerHeight() : $j(".is-sticky #site-header-inner").outerHeight()), t.hasClass("vertical-header") && (e = e), e
}
$j(document).ready(function() {
    "use strict";
    oceanwpScrollEffect()
});
$window = ($j = jQuery.noConflict())(window);

function oceanwpScrollTop() {
    "use strict";
    $window.on("scroll", function() {
        100 < $j(this).scrollTop() ? $j("#scroll-top").fadeIn() : $j("#scroll-top").fadeOut()
    }), $j.each({
        scrollTop: "#scroll-top",
        topLink: 'a[href="#go-top"]',
        slashTopLink: 'body.home a[href="/#go-top"]'
    }, function(e, t) {
        $j(t).on("click", function(e) {
            e.preventDefault(), $j("html, body").animate({
                scrollTop: 0
            }, 400), $j(this).parent().removeClass("sfHover")
        })
    })
}
$j(document).ready(function() {
    "use strict";
    oceanwpScrollTop()
});
$window = ($j = jQuery.noConflict())(window);

function oceanwpMobileMenu(e) {
    "use strict";
    if (void 0 !== oceanwpLocalize.sidrSource && $j("body").hasClass("sidebar-mobile")) {
        var n = !0;
        $j(".mobile-menu").sidr({
            name: "sidr",
            source: oceanwpLocalize.sidrSource,
            side: oceanwpLocalize.sidrSide,
            displace: oceanwpLocalize.sidrDisplace,
            speed: 300,
            renaming: !0,
            bind: "click",
            onOpen: function() {
                if ($j(".mobile-menu > .hamburger").addClass("is-active"), 1 == n) {
                    var o = $j(".sidr-class-menu-item-has-children"),
                        e = $j(".mobile-menu > .hamburger"),
                        t = !1;
                    e.on("click", function() {
                        t = !t, e.attr("aria-expanded", t)
                    }), o.children("a").append('<span class="sidr-class-dropdown-toggle"></span>');
                    var i = $j(".sidr-class-dropdown-toggle");
                    "link" == oceanwpLocalize.sidrDropdownTarget && (i = $j("li.sidr-class-menu-item-has-children > a")), i.on("click", function(e) {
                        if ("link" == oceanwpLocalize.sidrDropdownTarget) var t = $j(this).parent("li");
                        else t = $j(this).parent("a").parent("li");
                        var i = t.parents("li");
                        t.children("ul");
                        return t.hasClass("active") ? t.removeClass("active").children("ul").slideUp("fast") : (o.not(i).removeClass("active").children("ul").slideUp("fast"), t.addClass("active").children("ul").slideDown("fast")), !1
                    }), n = !1
                }
                $j("#site-header").after('<div class="oceanwp-sidr-overlay"></div>'), $j(".oceanwp-sidr-overlay").fadeIn(300), $j(".oceanwp-sidr-overlay").on("click", function() {
                    return $j.sidr("close", "sidr"), !1
                }), $window.resize(function() {
                    960 <= $window.width() && ($j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active"))
                })
            },
            onClose: function() {
                $j(".mobile-menu > .hamburger").removeClass("is-active"), $j(".sidr-class-menu-item-has-children.active").removeClass("active").children("ul").hide(), $j(".oceanwp-sidr-overlay").fadeOut(300, function() {
                    $j(this).remove()
                })
            }
        }), $j('#sidr [class*="sidr-class-fa"]').attr("class", function(e, t) {
            return t = (t = t.replace("sidr-class-fa", "fa")).replace("sidr-class-fa-", "fa-")
        }), $j('#sidr [class*="sidr-class-icon"]').attr("class", function(e, t) {
            return t = t.replace("sidr-class-icon-", "icon-")
        }), $j("a.sidr-class-toggle-sidr-close").on("click", function() {
            return $j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active"), !1
        }), $j('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])').on("click", function() {
            $j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active")
        }), $j("li.sidr-class-nav-no-click > a").on("click", function() {
            return !1
        })
    }
}

function oceanwpInitCarousel(e) {
    "use strict";
    var t = $j(".gallery-format, .product-entry-slider", e);
    if ($j("body").hasClass("rtl")) var i = !0;
    else i = !1;
    if (t.hasClass("woo-entry-image")) var o = !1;
    else o = !0;
    t.imagesLoaded(function() {
        t.slick({
            autoplay: o,
            autoplaySpeed: 7e3,
            prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
            rtl: i
        })
    })
}

function oceanwpSuperFish() {
    "use strict";
    $j("#site-header").hasClass("vertical-header") || $j("ul.sf-menu").superfish({
        delay: 600,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "fast",
        speedOut: "fast",
        cssArrows: !1,
        disableHI: !1
    })
}

function oceanwpVerticalHeader() {
    "use strict";
    if ($j("#site-header").hasClass("vertical-header")) {
        var i = $j("#site-header.vertical-header #site-header-inner"),
            o = $j("#site-header.vertical-header li.menu-item-has-children");
        o.children("a").append('<span class="dropdown-toggle"></span>');
        var e = $j(".dropdown-toggle");
        "link" == oceanwpLocalize.verticalHeaderTarget && (e = $j("#site-header.vertical-header li.menu-item-has-children > a")), e.on("tap click", function() {
            if ("link" == oceanwpLocalize.verticalHeaderTarget) var e = $j(this).parent("li");
            else e = $j(this).parent("a").parent("li");
            var t = e.parents("li");
            e.children("ul");
            return e.hasClass("active") ? e.removeClass("active").children("ul").slideUp("fast", function() {
                i.getNiceScroll().resize()
            }) : (o.not(t).removeClass("active").children("ul").slideUp("fast"), e.addClass("active").children("ul").slideDown("fast", function() {
                i.getNiceScroll().resize()
            })), !1
        }), i.length && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && i.niceScroll({
            autohidemode: !1,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            cursorwidth: 0,
            horizrailenabled: !1,
            mousescrollstep: 40,
            scrollspeed: 60,
            zindex: 100005
        }), $j("a.vertical-toggle").on("click", function(e) {
            e.preventDefault(), $j("body").hasClass("vh-opened") ? ($j("body").removeClass("vh-opened"), $j(this).find(".hamburger").removeClass("is-active")) : ($j("body").addClass("vh-opened"), $j(this).find(".hamburger").addClass("is-active"))
        })
    }
}
$j(document).ready(function() {
    "use strict";
    oceanwpMobileMenu()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpInitCarousel()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpSuperFish()
}), ($j = jQuery.noConflict())(document).ready(function() {
    "use strict";
    oceanwpVerticalHeader()
});