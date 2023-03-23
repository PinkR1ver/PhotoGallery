! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function i() {
        var e, t, n = {},
            i = JSON.parse(r.byId("json-data").innerHTML),
            l = navigator.userAgent,
            d = navigator.appName,
            f = "" + parseFloat(navigator.appVersion);
        parseInt(navigator.appVersion, 10);
        (e = l.indexOf("Safari")) != -1 && (d = "Safari", f = l.substring(e + 7), (e = l.indexOf("Version")) != -1 && (f = l.substring(e + 8)), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)), (t = f.indexOf(";")) != -1 && (f = f.substring(0, t)), (t = f.indexOf(" ")) != -1 && (f = f.substring(0, t));
        var h = i.image_fade && "transition" in document.createElement("_").style ? c : u;
        h = "Safari" === d && "13" === f.substr(0, 2) ? u : h;
        var p = [h];
        return "none" !== i.thumbs && (p.push(s), n = s.props(i.thumbs)), a.mount(i, o.extend(h.props, n), p)
    }
    n(1).polyfill(), n(4);
    var r = n(5),
        o = n(7),
        a = n(39),
        s = n(40),
        u = n(44),
        c = n(9);
    n(45)(i)
}, function (e, t, n) {
    (function (t) {
        for (var i = n(2), r = "undefined" == typeof window ? t : window, o = ["moz", "webkit"], a = "AnimationFrame", s = r["request" + a], u = r["cancel" + a] || r["cancelRequest" + a], c = 0; !s && c < o.length; c++) s = r[o[c] + "Request" + a], u = r[o[c] + "Cancel" + a] || r[o[c] + "CancelRequest" + a];
        if (!s || !u) {
            var l = 0,
                d = 0,
                f = [],
                h = 1e3 / 60;
            s = function (e) {
                if (0 === f.length) {
                    var t = i(),
                        n = Math.max(0, h - (t - l));
                    l = n + t, setTimeout(function () {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled) try {
                                e[t].callback(l)
                            } catch (e) {
                                setTimeout(function () {
                                    throw e
                                }, 0)
                            }
                    }, Math.round(n))
                }
                return f.push({
                    handle: ++d,
                    callback: e,
                    cancelled: !1
                }), d
            }, u = function (e) {
                for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
            }
        }
        e.exports = function (e) {
            return s.call(r, e)
        }, e.exports.cancel = function () {
            u.apply(r, arguments)
        }, e.exports.polyfill = function () {
            r.requestAnimationFrame = s, r.cancelAnimationFrame = u
        }
    }).call(t, function () {
        return this
    }())
}, function (e, t, n) {
    (function (t) {
        (function () {
            var n, i, r;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                return performance.now()
            } : "undefined" != typeof t && null !== t && t.hrtime ? (e.exports = function () {
                return (n() - r) / 1e6
            }, i = t.hrtime, n = function () {
                var e;
                return e = i(), 1e9 * e[0] + e[1]
            }, r = n()) : Date.now ? (e.exports = function () {
                return Date.now() - r
            }, r = Date.now()) : (e.exports = function () {
                return (new Date).getTime() - r
            }, r = (new Date).getTime())
        }).call(this)
    }).call(t, n(3))
}, function (e) {
    function t() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === t || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (l === clearTimeout) return clearTimeout(e);
        if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
        try {
            return l(e)
        } catch (t) {
            try {
                return l.call(null, e)
            } catch (t) {
                return l.call(this, e)
            }
        }
    }

    function o() {
        p && f && (p = !1, f.length ? h = f.concat(h) : m = -1, h.length && a())
    }

    function a() {
        if (!p) {
            var e = i(o);
            p = !0;
            for (var t = h.length; t;) {
                for (f = h, h = []; ++m < t;) f && f[m].run();
                m = -1, t = h.length
            }
            f = null, p = !1, r(e)
        }
    }

    function s(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, l, d = e.exports = {};
    ! function () {
        try {
            c = "function" == typeof setTimeout ? setTimeout : t
        } catch (e) {
            c = t
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
            l = n
        }
    }();
    var f, h = [],
        p = !1,
        m = -1;
    d.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new s(e, t)), 1 !== h.length || p || i(a)
    }, s.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function () {
        throw new Error("process.binding is not supported")
    }, d.cwd = function () {
        return "/"
    }, d.chdir = function () {
        throw new Error("process.chdir is not supported")
    }, d.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(5),
        r = /\S+/g,
        o = {
            toArray: function (e) {
                return (e || "").match(r) || []
            },
            filter: function (e, t) {
                return o.toArray(e).filter(function (e) {
                    return e !== t
                })
            }
        };
    "classList" in document.createElement("_") || (i.addClass = function (e, t) {
        e.className = o.filter(e.className, t).concat(t).join(" ")
    }, i.removeClass = function (e, t) {
        e.className = o.filter(e.className, t).join(" ")
    }, i.hasClass = function (e, t) {
        return o.toArray(e.className).indexOf(t) > -1
    })
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        for (var n = 0, i = e.attributes.length; n < i; n++) {
            var r = e.attributes[n];
            if (r.name === t) return r
        }
        return {
            value: ""
        }
    }

    function o(e, t) {
        return t = t || u, t.querySelectorAll(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(6),
        s = i(a),
        u = document;
    o.byId = function (e, t) {
        return t = t || u, t.getElementById(e)
    }, o.width = function (e) {
        return e.offsetWidth
    }, o.height = function (e) {
        return e.offsetHeight
    }, o.size = function (e) {
        return {
            width: o.width(e),
            height: o.height(e)
        }
    }, o.attr = function (e, t, n) {
        if (void 0 === n) return e.getAttribute(t);
        var i = r(e, t);
        return i.value = n, i.value
    }, o.getStyle = function (e, t) {
        return ("getComputedStyle" in window ? getComputedStyle(e) : e.currentStyle)[t]
    }, o.addClass = function (e, t) {
        e.classList.add(t)
    }, o.hasClass = function (e, t) {
        return e.classList.contains(t)
    }, o.removeClass = function (e, t) {
        e.classList.remove(t)
    }, o.text = function (e, t) {
        var n = "textContent" in e ? "textContent" : "innerText";
        return "string" == typeof t && (e[n] = t), e[n]
    }, o.offset = function (e) {
        var t = e.getBoundingClientRect();
        return {
            top: t.top + u.body.scrollTop,
            left: t.left + u.body.scrollLeft
        }
    }, o.rect = function (e) {
        var t = o.offset(e),
            n = o.size(e);
        return t.width = n.width, t.height = n.height, t
    }, o.closest = function (e, t, n) {
        for (n = n || document; e && e !== n;) {
            if ((0, s["default"])(e, t)) return e;
            e = e.parentElement
        }
    }, t["default"] = o, e.exports = t["default"]
}, function (e, t) {
    "use strict";

    function n(e) {
        for (var t = this.parentNode.querySelectorAll(e), n = t.length, i = 0; i < n; i++)
            if (t[i] === this) return !0;
        return !1
    }

    function i(e, t) {
        return r.call(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = i;
    var r, o = document.documentElement;
    r = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector || n, e.exports = t["default"]
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return (0, a.each)(function (t) {
            (0, a.eachObj)(function (t, n) {
                e[t] = n
            }, t)
        }, s.call(arguments, 1)), e
    }

    function r(e) {
        var t = {},
            n = Array.prototype.concat.apply(Array.prototype, s.call(arguments, 1));
        return (0, a.each)(function (n) {
            n in e && (t[n] = e[n])
        }, n), t
    }

    function o(e) {
        var t, n = Object.keys(e),
            i = n.length;
        return function (r) {
            if (r === e) return !0;
            for (var o = 0; o < i; o++)
                if (t = n[o], r[t] !== e[t]) return !1;
            return !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.extend = i, t.pick = r, t.where = o;
    var a = n(8),
        s = Array.prototype.slice
}, function (e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0, i = t.length; n < i; n++) e(t[n], n)
    }

    function i(e, t) {
        return a(function (t, n) {
            return e(n) === !0 ? t.concat(n) : t
        }, [], t)
    }

    function r(e, t, n) {
        for (var i = 0, r = n.length; i < r; i++) {
            var o = n[i];
            if (t(o) === !0) return e(o, i)
        }
        return e(void 0, -1)
    }

    function o(e, t) {
        n(function (n) {
            e(n, t[n], t)
        }, Object.keys(t))
    }

    function a(e, t, i) {
        return n(function (n, i) {
            t = e(t, n, i)
        }, i), t
    }

    function s(e, t) {
        return a(function (t, n, i) {
            return t.concat(e(n, i))
        }, [], t)
    }

    function u(e) {
        return e ? e[0] : void 0
    }

    function c(e) {
        var t = e ? e.length : 0;
        return t ? e[t - 1] : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.each = n, t.filter = i, t.eachObj = o, t.reduce = a, t.map = s, t.first = u, t.last = c;
    t.find = r.bind(null, function (e) {
        return e
    }), t.findIndex = r.bind(null, function (e, t) {
        return t
    })
}, function (e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        e(c.updateTransitionState(u.TRANSITIONING)), i.transition_binding = s(n, "transitionend", function () {
            i.transition_binding.release(), i.transition_binding = {}, e(c.updateTransitionState(u.ACTIVATED))
        }), a.removeClass(n, "not-active"), n.offsetHeight, setTimeout(function () {
            a.addClass(n, "active")
        }, 0), e(c.activatedSlide(t))
    }

    function r(e, t, n, i) {
        e(c.updateTransitionState(u.TRANSITIONING)), i.transition_binding = s(n, "transitionend", function () {
            i.transition_binding.release(), i.transition_binding = {}, a.addClass(n, "not-active"), e(c.updateTransitionState(u.DEACTIVATED))
        }), a.removeClass(n, "active"), e(c.deactivatedSlide(t))
    }

    function o(e) {
        var t = {};
        return t[u.UPDATE_TRANSITION_STATE] = function (t) {
            var n;
            switch (t.transition_state) {
                case u.DEACTIVATED:
                    t.current !== t.active && (n = t.current, i(e, n, t.slides[n].el, t));
                    break;
                case u.ACTIVATED:
                    t.current !== t.active && (n = t.active, r(e, n, t.slides[n].el, t))
            }
        }, t[u.DISPLAY_SLIDE] = function (t) {
            var n;
            switch (t.transition_state) {
                case u.ACTIVATED:
                    return n = t.active, r(e, n, t.slides[n].el, t);
                case u.DEACTIVATED:
                    return n = t.current, i(e, n, t.slides[n].el, t);
                case u.TRANSITIONING:
            }
        }, t
    }
    var a = n(5),
        s = n(10),
        u = n(11),
        c = n(13);
    e.exports = {
        actions: o,
        props: {
            transition_state: u.DEACTIVATED,
            transition_binding: {}
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e) {
        return "target" in e || (e.target = e.srcElement), e.preventDefault = e.preventDefault || function () {
            e.returnValue = !1
        }, e.stopPropagation = e.stopPropagation || function () {
            this.cancelBubble = !0
        }, e.stopImmediatePropagation = e.stopImmediatePropagation || e.stopPropagation, e
    }

    function o(e) {
        return e.addEventListener = e.addEventListener || function (t, n) {
            e.attachEvent("on" + t, n)
        }, e.removeEventListener = e.removeEventListener || function (t, n) {
            e.detachEvent("on" + t, n)
        }, e
    }

    function a(e) {
        return function (t, n) {
            var i = n.relatedTarget;
            i && (i === t || t.contains(i)) || e.call(this, t, n)
        }
    }

    function s(e, t) {
        return function (n, i) {
            for (var r = i.target; r && r !== n;) {
                if ((0, l["default"])(r, e)) return t.call(this, r, i);
                r = r.parentElement
            }
        }
    }

    function u(e, t, n, i) {
        function u(t) {
            return c.call(this, e, r(t))
        }
        "mouseenter" !== t && "mouseleave" !== t || (t = "mouse" + ("mouseenter" === t ? "over" : "out"), i = a(i));
        var c = 3 === arguments.length ? n : s(n, i);
        return e = o(e), e.addEventListener(t, u), {
            release: function () {
                e.removeEventListener(t, u)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = u;
    var c = n(6),
        l = i(c);
    e.exports = t["default"]
}, function (e, t, n) {
    "use strict";
    var i = n(12),
        r = {
            Selectors: {
                THUMBS_CONTAINER: ".thumbnail-bar"
            },
            HOT_CORNER: {
                SPEED: 1.4,
                SIZE: 50
            },
            SLIDE_BUFFER: 9,
            SPEED_FACTOR: 10,
            SCROLL_DELTA: 3
        };
    e.exports = ["INIT", "RESIZE", "ON_MOUSE_MOVE", "SCROLL_THUMBS", "PLACE_IMG", "DISPLAY_SLIDE", "NEXT_SLIDE", "PREVIOUS_SLIDE", "SWAP_SLIDE", "UPDATE_TRANSITION_STATE", "TRANSITIONING", "ACTIVATED", "DEACTIVATED", "ACTIVATED_SLIDE", "DEACTIVATED_SLIDE", "START_AUTO_PLAY", "STOP_AUTO_PLAY", "ENTER_FULL_SCREEN", "EXIT_FULL_SCREEN", "SHOW_CONTEXT", "HIDE_CONTEXT", "OPEN_SHARE_PANEL", "CLOSE_SHARE_PANEL", "DISPLAY_DESCRIPTION", "COLLAPSE_DESCRIPTON", "DISPLAY_CAPTIONS", "CLAMP_CAPTIONS"].reduce(i, r)
}, function (e) {
    "use strict";
    e.exports = function (e, t) {
        return e[t] = t, e
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return function () {
            return {
                type: e
            }
        }
    }
    var r = n(11);
    e.exports = {
        resize: i(r.RESIZE),
        init: i(r.INIT),
        nextSlide: i(r.NEXT_SLIDE),
        previousSlide: i(r.PREVIOUS_SLIDE),
        deactivatedSlide: i(r.DEACTIVATED_SLIDE),
        startAutoPlay: i(r.START_AUTO_PLAY),
        stopAutoPlay: i(r.STOP_AUTO_PLAY),
        enterFullScreen: i(r.ENTER_FULL_SCREEN),
        exitFullScreen: i(r.EXIT_FULL_SCREEN),
        showContext: i(r.SHOW_CONTEXT),
        hideContext: i(r.HIDE_CONTEXT),
        openSharePanel: i(r.OPEN_SHARE_PANEL),
        closeSharePanel: i(r.CLOSE_SHARE_PANEL),
        displayDescription: i(r.DISPLAY_DESCRIPTION),
        collapseDescription: i(r.COLLAPSE_DESCRIPTON),
        displayCaptions: i(r.DISPLAY_CAPTIONS),
        clampCaptions: i(r.CLAMP_CAPTIONS),
        scrollThumbs: function (e) {
            return {
                type: r.SCROLL_THUMBS,
                speed: e
            }
        },
        onMouseMove: function (e) {
            return {
                type: r.ON_MOUSE_MOVE,
                ev: e
            }
        },
        displaySlide: function (e) {
            return {
                type: r.DISPLAY_SLIDE,
                current: e
            }
        },
        activatedSlide: function (e) {
            return {
                type: r.ACTIVATED_SLIDE,
                active: e
            }
        },
        updateTransitionState: function (e) {
            return {
                type: r.UPDATE_TRANSITION_STATE,
                state: e
            }
        },
        placeImg: function (e, t) {
            return {
                type: r.PLACE_IMG,
                src: e.src,
                img: t
            }
        }
    }
}, , , , , , , , , , function (e, t, n) {
    "use strict";

    function i(e) {
        return e
    }

    function r(e) {
        return "object" === ("undefined" == typeof e ? "undefined" : s(e))
    }

    function o(e, t) {
        var n = this.reducer(t, e);
        return !!r(n) && (e = u.extend(e, n), (this.channels[t.type] || []).slice().forEach(function (t) {
            t(e)
        }), !0)
    }

    function a(e) {
        this.channels = {}, this.reducer = e || i, this.dispatch = o.bind(this)
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        u = n(7);
    a.prototype = {
        register: function (e) {
            Object.keys(e).forEach(function (t) {
                this.channels[t] = this.channels[t] || [], this.channels[t].push(e[t])
            }, this)
        }
    }, e.exports = {
        create: function (e) {
            return new a(e)
        },
        id: i,
        isObj: r
    }
}, function (e) {
    "use strict";
    e.exports = function () {
        return window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3
    }
}, function (e) {
    "use strict";

    function t() {
        return (new Date).getTime()
    }
    e.exports = function (e, n) {
        function i() {
            if (!a) {
                var s = t();
                s - r > n && (e(), r = s), o = requestAnimationFrame(i)
            }
        }
        var r, o, a = !1;
        return n = n || 25, r = t(), o = requestAnimationFrame(i),
            function () {
                cancelAnimationFrame(o), a = !0
            }
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        return t.call(this, e)
    }

    function r(e) {
        var t = a.call(arguments, 1);
        return function () {
            var n = e.apply(this, a.call(arguments));
            return (0, o.reduce)(i, n, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = r;
    var o = n(8),
        a = Array.prototype.slice;
    e.exports = t["default"]
}, , function (e, t, n) {
    "use strict";

    function i(e) {
        e.stopImmediatePropagation(), e.stopPropagation()
    }

    function r(e, t) {
        i(t)
    }

    function o() {
        d.push(c.apply(null, arguments))
    }
    var a = n(29),
        s = n(26),
        u = n(5),
        c = n(10),
        l = n(13),
        d = [];
    e.exports = {
        unmount: function () {
            d.forEach(function (e) {
                e.release()
            })
        },
        mount: function (e) {
            o(document.body, "click", "figcaption p .-display-caption", s(r, l.displayCaptions, e)), o(document.body, "click", "figcaption h3", r), o(document.body, "click", "figcaption p", r);
            var t = s(l.stopAutoPlay, e),
                n = s(t, l.nextSlide, e),
                c = s(t, l.previousSlide, e);
            o(document.body, "click", ".-open-download-page", r), o(document.body, "click", ".-open-share-panel.open", s(r, l.closeSharePanel, e)), o(document.body, "click", ".-open-share-panel", s(r, l.openSharePanel, e)), o(document.body, "click", ".-display-description", s(r, l.displayDescription, e)), o(document.body, "click", ".-collapse-description", s(r, l.collapseDescription, e)), o(document.body, "click", ".-clamp-captions", s(r, l.clampCaptions, e)), o(document.body, "click", ".arrow", s(function (e, t) {
                return t.preventDefault(), u.hasClass(e, "forward") ? n() : c(), t
            }, i)), o(document.body, "click", "[data-index]", s(function (t, n) {
                return e(l.displaySlide(Number(u.attr(t, "data-index")))), n
            }, i)), o(document.body, "click", ".viewer", n), o(document.body, "click", ".-toggle-auto-play.-is-playing", s(r, l.stopAutoPlay, e)), o(document.body, "click", ".-toggle-auto-play", s(r, l.startAutoPlay, e)), o(document.body, "keydown", function (e, t) {
                switch (t.which) {
                    case 37:
                        return c();
                    case 39:
                        return n()
                }
            }), a && document.addEventListener(a.raw.fullscreenchange, function () {
                a.isFullscreen || e(l.exitFullScreen())
            }), o(document.body, "click", ".-enter-fullscreen", s(r, l.enterFullScreen, e)), o(document.body, "click", ".-exit-fullscreen", s(r, l.exitFullScreen, e)), o(document.body, "mousemove", s(function (e, t) {
                return t
            }, l.onMouseMove, e)), o(window, "resize", s(l.resize, e));
            var d = {
                    sX: 0,
                    sY: 0,
                    eX: 0,
                    eY: 0
                },
                f = 30,
                h = 30,
                p = 50,
                m = 60,
                g = "";
            o(document.body, "touchstart", ".slide", function (e, t) {
                var n = t.touches[0];
                d.sX = n.screenX, d.sY = n.screenY
            }), o(document.body, "touchmove", ".slide", function (e, t) {
                var n = t.touches[0];
                d.eX = n.screenX, d.eY = n.screenY
            }), o(document.body, "touchend", ".slide", function () {
                (d.eX - f > d.sX || d.eX + f < d.sX) && d.eY < d.sY + m && d.sY > d.eY - m && d.eX > 0 ? g = d.eX > d.sX ? "r" : "l" : (d.eY - p > d.sY || d.eY + p < d.sY) && d.eX < d.sX + h && d.sX > d.eX - h && d.eY > 0 && (g = d.eY > d.sY ? "d" : "u"), "" != g && ("r" == g ? n() : "l" == g && c()), g = "", d.sX = 0, d.sY = 0, d.eX = 0, d.eY = 0
            })
        }
    }
}, function (e) {
    ! function () {
        "use strict";
        var t = "undefined" != typeof window && "undefined" != typeof window.document ? window.document : {},
            n = "undefined" != typeof e && e.exports,
            i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            r = function () {
                for (var e, n = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], i = 0, r = n.length, o = {}; i < r; i++)
                    if (e = n[i], e && e[1] in t) {
                        for (i = 0; i < e.length; i++) o[n[0][i]] = e[i];
                        return o
                    } return !1
            }(),
            o = {
                change: r.fullscreenchange,
                error: r.fullscreenerror
            },
            a = {
                request: function (e) {
                    return new Promise(function (n) {
                        var o = r.requestFullscreen,
                            a = function () {
                                this.off("change", a), n()
                            }.bind(this);
                        e = e || t.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? e[o]() : e[o](i ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", a)
                    }.bind(this))
                },
                exit: function () {
                    return new Promise(function (e) {
                        var n = function () {
                            this.off("change", n), e()
                        }.bind(this);
                        t[r.exitFullscreen](), this.on("change", n)
                    }.bind(this))
                },
                toggle: function (e) {
                    return this.isFullscreen ? this.exit() : this.request(e)
                },
                onchange: function (e) {
                    this.on("change", e)
                },
                onerror: function (e) {
                    this.on("error", e)
                },
                on: function (e, n) {
                    var i = o[e];
                    i && t.addEventListener(i, n, !1)
                },
                off: function (e, n) {
                    var i = o[e];
                    i && t.removeEventListener(i, n, !1)
                },
                raw: r
            };
        return r ? (Object.defineProperties(a, {
            isFullscreen: {
                get: function () {
                    return Boolean(t[r.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function () {
                    return t[r.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function () {
                    return Boolean(t[r.fullscreenEnabled])
                }
            }
        }), void(n ? e.exports = a : window.screenfull = a)) : void(n ? e.exports = !1 : window.screenfull = !1)
    }()
}, , , , function (e, t, n) {
    "use strict";

    function i(e) {
        return e.slides[e.current]
    }

    function r(e) {
        var t = e.active;
        return t !== -1 ? t : e.current
    }
    var o = n(26),
        a = n(5),
        s = n(10),
        u = n(34),
        c = n(35),
        l = n(8).each;
    e.exports = {
        current: i,
        clampCaptions: function (e) {
            var t, n = r(e);
            return l(function (e) {
                a.addClass(e, "hidden")
            }, a(".-clamp-captions")), l(function (i, r) {
                r === n && (a.addClass(i.el, "-transform-height"), t = s(i.cap, "transitionend", function () {
                    t.release(), a.removeClass(i.el, "-transform-height"), l(function (e) {
                        u.reclamp(e.cap)
                    }, e.slides)
                })), i.cap.style.height = null, i.el.style.paddingBottom = null
            }, e.slides), e
        },
        displayCaptions: function (e) {
            var t, n = r(e);
            return l(function (i, r) {
                r === n && (a.addClass(i.el, "-transform-height"), t = s(i.cap, "transitionend", function () {
                    t.release(), a.removeClass(i.el, "-transform-height"), l(function (t) {
                        t.style.bottom = e.caption_max_height + "px", a.removeClass(t, "hidden")
                    }, a(".-clamp-captions"))
                })), i.el.style.paddingBottom = e.caption_max_height + e.caption_space + "px", i.cap.style.height = e.caption_max_height + "px", u.unclamp(i.cap)
            }, e.slides), e
        },
        updateCounter: function (e, t) {
            l(function (n) {
                n.textContent = c(t + 1, String(e).length) + " / " + e
            }, a(".counter"))
        },
        showContext: o(i, function (e) {
            a.addClass(e.el, "-show-context")
        }),
        hideContext: function () {
            l(function (e) {
                a.removeClass(e, "-show-context")
            }, a(".-show-context"))
        },
        displayDescription: function (e) {
            var t = e.description_height;
            l(function (e) {
                var n = s(e, "transitionend", function () {
                    n.release(), l(function (e) {
                        a.removeClass(e, "hidden")
                    }, a(".-collapse-description"))
                });
                a.removeClass(e, "-collapsed"), e.style.height = t + "px"
            }, a(".gallery-text.-collapsed")), l(function (e) {
                e.style.marginTop = t + "px"
            }, a("footer"))
        },
        collapseDescription: function () {
            l(function (e) {
                a.addClass(e, "hidden")
            }, a(".-collapse-description")), l(function (e) {
                a.addClass(e, "-collapsed");
                var t = s(e, "transitionend", function () {
                    t.release(), l(function (e) {
                        e.style.marginTop = null
                    }, a("footer"))
                });
                e.style.height = null
            }, a(".gallery-text"))
        },
        openSharePanel: o(i, function (e) {
            l(function (e) {
                a.addClass(e, "open")
            }, a(".-open-share-panel", e.el))
        }),
        closeSharePanel: function () {
            l(function (e) {
                a.removeClass(e, "open")
            }, a(".-open-share-panel"))
        },
        startAutoPlay: function () {
            l(function (e) {
                a.addClass(e, "-is-playing")
            }, a(".-toggle-auto-play"))
        },
        stopAutoPlay: function () {
            l(function (e) {
                a.removeClass(e, "-is-playing")
            }, a(".-toggle-auto-play.-is-playing"))
        },
        enterFullScreen: function (e) {
            e.gallery_module.style.backgroundColor = e.full_screen_background_color, l(function (e) {
                a.removeClass(e, "-enter-fullscreen"), a.addClass(e, "-exit-fullscreen")
            }, a(".-enter-fullscreen"))
        },
        exitFullScreen: function (e) {
            return l(function (t) {
                e.gallery_module.style.backgroundColor = "transparent", a.removeClass(t, "-exit-fullscreen"), a.addClass(t, "-enter-fullscreen")
            }, a(".-exit-fullscreen")), e
        }
    }
}, function (e, t, n) {
    "use strict";

    function i() {
        return "u-" + ++l
    }

    function r(e, t) {
        var n, i = document.createElement("div");
        return s.addClass(i, "cap-buffer"), (t || document.body).appendChild(i), n = s.rect(i), ["fontSize", "fontFamily", "lineHeight"].forEach(function (t) {
            i.style[t] = e.style[t] || s.getStyle(e, t)
        }), {
            el: i,
            height: n.height
        }
    }

    function o(e, t) {
        var n, r, o, a, l, h, p = "",
            m = e.height;
        if (u.each(function (t) {
                e.el.appendChild(t.cloneNode(!0))
            }, t.children), l = u.reduce(function (e, t) {
                return e + t.getBoundingClientRect().height
            }, 0, e.el.children), l < m) return e.el.innerHTML = "";
        t.children.length > 1 && (m -= e.el.children[0].getBoundingClientRect().height), n = t.children[t.children.length - 1], r = e.el.children[e.el.children.length - 1], r.innerHTML = "", o = s.text(n), a = o.split(d);
        for (var g = 0; g < a.length && (r.innerHTML = p + a[g] + f, !(r.getBoundingClientRect().height > m)); g++) p += a[g];
        h = i(), c[h] = {
            el: n,
            height: l,
            content: n.innerHTML,
            clamped: p.trim() + f
        }, n.innerHTML = c[h].clamped, t.setAttribute("data-clamp-id", h), e.el.innerHTML = ""
    }
    var a, s = n(5),
        u = n(8),
        c = {},
        l = 0,
        d = /(\s)/,
        f = ' <span class="-display-caption readmore hi-lite">&hellip;more</span>';
    String.prototype.trim = String.prototype.trim || function (e) {
        return this.replace(e, "")
    }.bind(null, /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g), e.exports = {
        maxHeight: function () {
            return u.reduce(function (e, t) {
                var n = c[t];
                return n.height > e ? n.height : e
            }, 0, Object.keys(c))
        },
        unclamp: function (e) {
            var t = s.attr(e, "data-clamp-id");
            t && c[t] && c[t].el && (c[t].el.innerHTML = c[t].content)
        },
        reclamp: function (e) {
            var t, n = s.attr(e, "data-clamp-id");
            n && (t = c[n]) && (t.el.innerHTML = t.clamped)
        },
        clamp: function (e, t) {
            a = a || r(e, t), o(a, e)
        }
    }
}, function (e) {
    "use strict";
    e.exports = function (e, t) {
        return ("000000000" + e).substr(-t)
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        var n = 320 * Math.ceil(t / 320);
        return "?fit=max&dpr=" + e + (n > 1280 ? "" : "&w=" + n)
    }
    var r = n(5),
        o = n(11),
        a = n(37),
        s = n(38);
    e.exports = {
        normalize: s.normalize,
        load: function (e, t, n) {
            a.load(s.slice(n, o.SLIDE_BUFFER, e.length).reduce(function (n, i) {
                var r = e[i];
                return n.concat({
                    src: r.src,
                    onload: t
                })
            }, []))
        },
        update_src: function (e, t) {
            var n = i(t.dpr, e.width, e.height);
            e.width > t.canvas.width || e.height > t.canvas.height;
            return t.slides.map(function (e) {
                return e.src = e.data_src + n, e
            })
        },
        update_figure: function (e, t) {
            var n = e.width,
                i = .5;
            if (t.ratio > e.ratio) {
                if ("true" == t.has_title && "false" == t.has_description) {
                    var r = e.full_height - e.caption_height * i;
                    t.cap && (t.cap.style.height = e.caption_height * i - e.caption_space + "px")
                } else if ("true" == t.has_title || "true" == t.has_description) var r = e.height;
                else var r = e.full_height;
                n = r * (1 / t.ratio)
            }
            t.fig.style.width = Math.min(t.max_width, Math.min(n, e.width)) + "px"
        },
        placeImg: function (e) {
            e.loaded && (e.img.src !== e.src && (e.img.src = e.src), e.img.removeAttribute("srcset"), r.removeClass(e.fig, "loading"))
        },
        collect_data: function (e, t, n) {
            var i = {
                el: t,
                fig: r(".fig-img", t)[0],
                img: r("img", t)[0],
                stretcher: r(".fig-img > div", t)[0],
                data_src: r.attr(t, "data-src"),
                has_title: r.attr(t, "data-has-title"),
                has_description: r.attr(t, "data-has-description"),
                ratio: parseFloat(r.attr(t, "data-ratio")),
                max_width: Math.round(Number(r.attr(t, "data-max-width"))),
                index: n
            };
            return e && (i.cap = r("figcaption", t)[0]), i
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e.reduce(function (e, t) {
            return e + t
        }, 0) / e.length
    }

    function r(e) {
        h.length < p && !d(v, h) && i(e) < 1e3 && h.push({
            state: "IDLE"
        })
    }

    function o(e, t, n) {
        void 0 !== n && (g.push(Date.now() - n), r(g)), this.state = "IDLE", this.src = null, clearTimeout(this.timeout), t(e)
    }

    function a(e, t, n) {
        e.state = "LOADING";
        var i = document.createElement("img");
        i.onload = o.bind(e, i, n, Date.now()), i.onerror = o.bind(e, null, n), e.timeout = setInterval(o.bind(e, null, n), m), i.src = e.src = t
    }

    function s(e) {
        if (f[e.src]) return e.onload(e, f[e.src]), !0;
        if (d(l.where({
                src: e.src
            }), h)) return !0;
        var t = d(l.where({
            state: "IDLE"
        }), h);
        return !!t && (a(t, e.src, function (t) {
            t && (f[e.src] = t), e.onload(e, t), u()
        }), !0)
    }

    function u() {
        c.length && s(c[0]) && (c.shift(), u())
    }
    var c, l = n(7),
        d = n(8).find,
        f = {},
        h = [],
        p = 6,
        m = 1e4,
        g = [],
        v = l.where({
            state: "IDLE"
        });
    h.push({
        state: "IDLE"
    }), e.exports = {
        load: function (e) {
            c = e.slice(), u()
        }
    }
}, function (e) {
    "use strict";

    function t(e, t) {
        return (t + e) % t
    }

    function n(e, n, i) {
        var r, o, a, s, u = [t(e, i)];
        for (s = a = r = 0; r < n; r++) r % 2 ? (o = ++a, u.push(t(e - o, i))) : (o = ++s, u.push(t(e + o, i)));
        return u.slice(0, Math.min(n + 1, i))
    }
    e.exports = {
        slice: n,
        normalize: t
    }
}, function (e, t, n) {
    "use strict";

    function i() {}

    function r(e) {
        var t = _(".viewer.-with-captions").length > 0,
            n = {
                current: 0,
                active: 0,
                interval: 1e3 * (e.interval || 3),
                auto_start: e.auto_play,
                auto_playing: !1,
                dpr: p() ? window.devicePixelRatio || 2 : 1,
                slides: y.map(S.collect_data.bind(T, t), _("figure.slide")),
                container: _(".slide-container")[0],
                gallery_module: _.byId("slideshow-gallery-module"),
                canvas: {
                    width: 0,
                    height: 0,
                    full_height: 0
                },
                captions: t,
                captions_clamped: !0,
                caption_height: 0,
                caption_max_height: 0,
                caption_space: 0,
                description: T,
                description_collapsed: !0,
                description_height: 0,
                full_screen: !1,
                full_screen_background_color: e.full_screen_background_color,
                show_context: !1,
                show_share_panel: !1
            };
        return t && (n.caption_height = parseFloat(_.getStyle(n.slides[0].el, "paddingBottom")), n.caption_space = n.caption_height - parseFloat(_.getStyle(n.slides[0].cap, "height")), C(function (e) {
            A.clamp(e.cap, n.gallery_module)
        }, n.slides), n.caption_max_height = A.maxHeight()), n.description = _.hasClass(n.gallery_module, "-with-title") && _(".gallery-text > p").length > 0, n.description && (n.description_height = y.reduce(function (e, t) {
            return _.height(t) + _.height(_("p", t)[0])
        }, 0, _(".gallery-text"))), n
    }

    function o(e) {
        var t = 0,
            n = e.container;
        return t = _.height(n), t -= parseFloat(_.getStyle(n, "paddingBottom")), t -= e.captions_clamped === !1 ? e.caption_max_height + 14.3 : e.caption_height, {
            width: _.width(n),
            height: Math.floor(t),
            full_height: _.height(n),
            caption_height: e.caption_height,
            caption_space: e.caption_space
        }
    }

    function a(e) {
        function t(t) {
            C(S.update_figure.bind(T, v.extend({
                ratio: t.canvas.height / t.canvas.width
            }, t.canvas)), t.slides), S.load(t.slides, g(x.placeImg, e), t.current || 0)
        }
        var n = {};
        return n[w.INIT] = function (t) {
            f || y.each(function (e) {
                e.parentNode.removeChild(e)
            }, _(".-enter-fullscreen")), e(x.displaySlide(t.current)), t.auto_start && e(x.startAutoPlay())
        }, n[w.ON_MOUSE_MOVE] = function (t) {
            var n = t.mouse_position.x,
                i = t.mouse_position.y,
                r = !1;
            if (t.active !== -1) {
                var o = _.rect(t.slides[t.active].fig);
                r = n > o.left && n < o.left + o.width && i > o.top && i < o.top + o.height
            }
            r !== t.show_context && (r || g(x.closeSharePanel, e)(), g(x[r ? "showContext" : "hideContext"], e)())
        }, n[w.NEXT_SLIDE] = n[w.PREVIOUS_SLIDE] = function (t) {
            e(x.displaySlide(t.current))
        }, n[w.DISPLAY_SLIDE] = function (t) {
            S.load(t.slides, g(x.placeImg, e), t.current), E.updateCounter(t.slides.length, t.current)
        }, n[w.RESIZE] = t, n[w.PLACE_IMG] = function (e) {
            C(S.placeImg, e.slides)
        }, n[w.START_AUTO_PLAY] = g(function (t) {
            t.auto_repeat = m(g(x.nextSlide, e), t.interval)
        }, E.startAutoPlay), n[w.STOP_AUTO_PLAY] = g(function (e) {
            e.auto_repeat()
        }, E.stopAutoPlay), n[w.ENTER_FULL_SCREEN] = f ? g(function (e) {
            return f.request(e.gallery_module), e
        }, E.enterFullScreen) : i, n[w.EXIT_FULL_SCREEN] = f ? g(function (e) {
            return f.exit(), e
        }, E.exitFullScreen, g(x.resize, e)) : i, n[w.SHOW_CONTEXT] = E.showContext, n[w.HIDE_CONTEXT] = E.hideContext, n[w.OPEN_SHARE_PANEL] = E.openSharePanel, n[w.CLOSE_SHARE_PANEL] = E.closeSharePanel, n[w.DISPLAY_DESCRIPTION] = E.displayDescription, n[w.COLLAPSE_DESCRIPTON] = E.collapseDescription, n[w.DISPLAY_CAPTIONS] = g(E.displayCaptions, x.resize, e), n[w.CLAMP_CAPTIONS] = g(E.clampCaptions, x.resize, e), n
    }

    function s(e, t) {
        var n = {};
        return n[e] = t, n
    }

    function u(e, t) {
        if (e[t] !== !0) return s(t, !0)
    }

    function c(e, t) {
        if (e[t] !== !1) return s(t, !1)
    }

    function l(e, t) {
        switch (e.type) {
            case w.INIT:
                return {};
            case w.SCROLL_THUMBS:
                return {
                    scroll_speed: e.speed
                };
            case w.START_AUTO_PLAY:
                return u(t, "auto_playing");
            case w.STOP_AUTO_PLAY:
                return c(t, "auto_playing");
            case w.ENTER_FULL_SCREEN:
                return u(t, "full_screen");
            case w.EXIT_FULL_SCREEN:
                return c(t, "full_screen") || {};
            case w.SHOW_CONTEXT:
                return u(t, "show_context");
            case w.HIDE_CONTEXT:
                return c(t, "show_context");
            case w.OPEN_SHARE_PANEL:
                return u(t, "show_share_panel");
            case w.CLOSE_SHARE_PANEL:
                return c(t, "show_share_panel");
            case w.DISPLAY_DESCRIPTION:
                return c(t, "description_collapsed");
            case w.COLLAPSE_DESCRIPTON:
                return u(t, "description_collapsed");
            case w.DISPLAY_CAPTIONS:
                return c(t, "captions_clamped");
            case w.CLAMP_CAPTIONS:
                return u(t, "captions_clamped");
            case w.NEXT_SLIDE:
                if (1 === t.slides.length) return;
                return {
                    current: S.normalize(t.current + 1, t.slides.length)
                };
            case w.PREVIOUS_SLIDE:
                if (1 === t.slides.length) return;
                return {
                    current: S.normalize(t.current - 1, t.slides.length)
                };
            case w.UPDATE_TRANSITION_STATE:
                return {
                    transition_state: e.state
                };
            case w.ACTIVATED_SLIDE:
                return {
                    active: e.active
                };
            case w.DEACTIVATED_SLIDE:
                return {
                    active: -1
                };
            case w.DISPLAY_SLIDE:
                return {
                    current: e.current
                };
            case w.RESIZE:
                var n = o(t);
                return {
                    slides: S.update_src(n, t), canvas: n
                };
            case w.ON_MOUSE_MOVE:
                return {
                    mouse_position: {
                        x: e.ev.pageX,
                        y: e.ev.pageY
                    }
                };
            case w.PLACE_IMG:
                if (e.img) {
                    var i = y.find(v.where({
                        src: e.src
                    }), t.slides);
                    if (i) {
                        var r = "url(" + i.src + ")";
                        if (r !== i.fig.style.backgroundImage) return i.loaded = !0, {}
                    }
                }
        }
    }

    function d(e, t, n) {
        var i = h.create(l),
            o = i.dispatch.bind(i, v.extend(t, r({
                auto_play: e.slideshow_autoplay,
                interval: e.slideshow_interval,
                full_screen_background_color: e.background_color
            })));
        return b.mount(o), i.register(a(o)), C(function (e) {
            i.register(e.actions(o))
        }, n), o(x.resize()), o(x.init()), o
    }
    var f = n(29),
        h = n(23),
        p = n(24),
        m = n(25),
        g = n(26),
        v = n(7),
        y = n(8),
        _ = n(5),
        b = n(28),
        w = n(11),
        x = n(13),
        E = n(33),
        S = n(36),
        A = n(34),
        C = y.each,
        T = null;
    e.exports = {
        actions: a,
        mount: d,
        props: r,
        reducer: l
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t, n) {
        return e > n.x && t > n.y && e < n.x + n.width && t < n.y + n.height
    }

    function r(e, t) {
        return e === -t.min || e === t.max
    }

    function o(e, t) {
        return e > t.max ? t.max : e < -t.min ? -t.min : e
    }

    function a(e) {
        e.offset = o(e.offset + e.scroll_speed, e.bounds), E[e.orientation].move(e.offset, e.scroll_el), e.currentArea.pivot && r(e.offset, e.bounds) && e.currentArea.pivot()
    }

    function s(e, t) {
        if (!(t.bounds.min <= 0)) {
            var n = t.mouse_position.x,
                r = t.mouse_position.y,
                o = i.bind(null, n, r),
                a = t.areas.reduce(function (e, t) {
                    return o(t) ? t : e
                });
            t.currentArea.id !== a.id && (t.currentArea.detach(), a.attach(m(b.scrollThumbs, e), t.mouse_position), t.currentArea = a, t.idle = !1), t.currentArea.onMouseMove && t.currentArea.onMouseMove(t.mouse_position)
        }
    }

    function u(e) {
        E[e.orientation].move(0, e.scroll_el), e.rect = g.rect(e.container_el), e.bounds = E.bounds(e.orientation, e.rect, g.rect(e.lastChild)), e.bounds.min > 0 && (e.areas = _(e.orientation, e.rect, w.HOT_CORNER.SIZE), e.currentArea = e.areas[0], y.each(function (e) {
            v.extend(e, g.offset(e.el))
        }, e.thumbs))
    }

    function c(e, t, n) {
        var i = Date.now() - t.time,
            r = i / n.duration;
        r >= 1 ? e.offset = t.offset + n.delta : (e.offset = t.offset + r * n.delta, requestAnimationFrame(c.bind(null, e, t, n))), E[e.orientation].move(e.offset, e.scroll_el)
    }

    function l(e, t) {
        var n = 0,
            i = e.rect.height / 2;
        t.top - e.rect.top > i && (n = o(-(t.top - e.rect.top - i), e.bounds)), e.offset !== n && requestAnimationFrame(c.bind(null, e, {
            time: Date.now(),
            offset: e.offset
        }, {
            delta: n - e.offset,
            duration: 750
        }))
    }

    function d(e, t) {
        var n = t.top + e.offset;
        return n < e.rect.top || n + t.height > e.rect.top + e.rect.height
    }

    function f(e) {
        var t = e.thumbs[e.current];
        d(e, t) && (e.auto_playing || l(e, t)), y.each(function (t, n) {
            e.current === n ? g.addClass(t.el, "active") : g.removeClass(t.el, "active")
        }, e.thumbs)
    }

    function h(e, t) {
        if (t = t || document.createElement("img"), e.length) {
            var n, i = e.shift();
            n = h.bind(this, e, t), t.onload = function () {
                i.el.style.backgroundImage = "url(" + i.src + ")", requestAnimationFrame(n)
            }, t.onerror = n, t.src = i.src
        }
    }

    function p(e) {
        var t = {};
        return t[w.INIT] = function () {
            h(y.map(function (e) {
                var t = "portrait" === g.attr(e, "data-orientation") ? "w=80" : "h=80";
                return {
                    src: g.attr(e, "data-background-src") + "?" + t,
                    el: e
                }
            }, g(w.Selectors.THUMBS_CONTAINER + " [data-background-src]")))
        }, t[w.ON_MOUSE_MOVE] = s.bind(x, e), t[w.RESIZE] = u, t[w.SCROLL_THUMBS] = a, t[w.DISPLAY_SLIDE] = f, t
    }
    var m = n(26),
        g = n(5),
        v = n(7),
        y = n(8),
        _ = n(41),
        b = n(13),
        w = n(11),
        x = null,
        E = {
            horizontal: {
                minimum: function (e, t) {
                    return t.left + t.width - (e.left + e.width)
                },
                move: function (e, t) {
                    t.style.marginLeft = e + "px"
                }
            },
            vertical: {
                minimum: function (e, t) {
                    return t.top + t.height - (e.top + e.height)
                },
                move: function (e, t) {
                    t.style.marginTop = e + "px"
                }
            },
            bounds: function (e, t, n) {
                return {
                    max: 0,
                    min: E[e].minimum(t, n)
                }
            }
        };
    e.exports = {
        actions: p,
        props: function e(t) {
            var e = {};
            return e.idle = !0, e.current_region = 0, e.speed = 0, e.offset = 0, e.orientation = ["left", "right"].indexOf(t) > -1 ? "vertical" : "horizontal",
                e.container_el = g(w.Selectors.THUMBS_CONTAINER)[0] || document.createElement("div"), e.thumbs = y.map(function (e) {
                    return v.extend({
                        el: e
                    }, g.rect(e))
                }, g("li", e.container_el)), e.scroll_el = g("ul", e.container_el)[0], e.lastChild = (e.thumbs[e.thumbs.length - 1] || {}).el, e
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        return [u, o.extend({
            id: "top",
            x: e.left,
            y: e.top,
            width: e.width,
            height: t
        }, a(1)), o.extend({
            id: "center",
            x: e.left,
            y: e.top + t,
            width: e.width,
            height: e.height - 2 * t
        }, s.Vertical), o.extend({
            id: "bottom",
            x: e.left,
            y: e.top + e.height - t,
            width: e.width,
            height: t
        }, a(-1))]
    }

    function r(e, t) {
        return [u, o.extend({
            id: "left",
            x: e.left,
            y: e.top,
            width: t,
            height: e.height
        }, a(1)), o.extend({
            id: "center",
            x: e.left + t,
            y: e.top,
            width: e.width - 2 * t,
            height: e.height
        }, s.Horizontal), o.extend({
            id: "right",
            x: e.left + e.width - t,
            y: e.top,
            width: t,
            height: e.height
        }, a(-1))]
    }
    var o = n(7),
        a = (n(11), n(42)),
        s = n(43),
        u = {
            id: "",
            attach: function () {},
            detach: function () {}
        };
    e.exports = function (e, t, n) {
        return "horizontal" === e ? r(t, n) : i(t, n)
    }
}, function (e, t, n) {
    "use strict";

    function i() {
        o && o()
    }

    function r(e, t) {
        var n = 0,
            i = e * s.HOT_CORNER.SPEED;
        o = a(function () {
            t(n += i)
        })
    }
    var o, a = n(25),
        s = n(11);
    e.exports = function (e) {
        return {
            detach: i,
            attach: r.bind(null, e)
        }
    }
}, function (e, t, n) {
    "use strict";

    function i() {
        u = (c - l) / m.SPEED_FACTOR
    }

    function r(e, t) {
        return Math.abs(t - e) > m.SCROLL_DELTA
    }

    function o(e) {
        g = "SCROLLING", c = e, d = p(function () {
            f(u)
        })
    }

    function a() {
        d && d(), g = "IDLE"
    }

    function s() {
        c = l
    }
    var u, c, l, d, f, h, p = n(25),
        m = n(11),
        g = "IDLE",
        v = {
            IDLE: function (e) {
                h(e) && o(e)
            },
            SCROLLING: function (e) {
                l = e, i()
            }
        };
    e.exports = {
        Horizontal: {
            pivot: s,
            detach: a,
            attach: function (e, t) {
                f = e, h = r.bind(null, t.x)
            },
            onMouseMove: function (e) {
                v[g](e.x)
            }
        },
        Vertical: {
            pivot: s,
            detach: a,
            attach: function (e, t) {
                f = e, h = r.bind(null, t.y)
            },
            onMouseMove: function (e) {
                v[g](e.y)
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        a.removeClass(e, "not-active"), a.addClass(e, "active")
    }

    function r(e) {
        a.removeClass(e, "active"), a.addClass(e, "not-active")
    }

    function o(e) {
        var t = {};
        return t[s.DISPLAY_SLIDE] = function (t) {
            r(t.slides[t.active].el), e(u.deactivatedSlide(t.active)), i(t.slides[t.current].el), e(u.activatedSlide(t.current)), "swapSlides" in u && e(u.swapSlides())
        }, t
    }
    var a = n(5),
        s = n(11),
        u = n(13);
    e.exports = {
        props: {},
        actions: o
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r() {
        (0, a.each)(function (e) {
            e()
        }, l), l = [], (0, a.each)(function (e) {
            e.release()
        }, d), d = []
    }

    function o(e) {
        return "loading" !== document.readyState ? requestAnimationFrame(e) : (l.push(e), void(c || (c = !0, d.push((0, u["default"])(document, "DOMContentLoaded", r)), d.push((0, u["default"])(window, "load", r)))))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = o;
    var a = n(8),
        s = n(10),
        u = i(s),
        c = !1,
        l = [],
        d = [];
    e.exports = t["default"]
}]);