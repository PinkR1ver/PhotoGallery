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
    var i = n(7),
        r = n(11),
        o = n(21),
        a = n(23),
        u = n(24);
    r.ready(function () {
        var e = JSON.parse(i["default"].byId("vertical-grid-json").innerHTML),
            t = [];
        e.overlay_enabled && (t.push(a.bind()), t.push(u.bind())), o["default"](e, t, !1, function (t) {
            e.overlay_enabled && a.bindEvents(t)
        })
    })
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        return function (n, i) {
            for (var r = i.target; r && r !== n;) {
                if (s.matchesSelector(r, e)) return t.call(this, r, i);
                r = r.parentElement
            }
        }
    }

    function r(e, t, n) {
        var i = this,
            r = function (t) {
                return n.call(i, e, t)
            };
        return e.addEventListener(t, r), {
            release: function () {
                return e.removeEventListener(t, r)
            }
        }
    }

    function o(e, t, n) {
        return i = l(t, n), t = i[0], n = i[1], r(e, t, n);
        var i
    }

    function a(e, t, n, o) {
        return a = l(t, o), t = a[0], o = a[1], r(e, t, i(n, o));
        var a
    }
    var u = this,
        s = n(2),
        c = function (e) {
            return function (t, n) {
                var i = n.relatedTarget;
                i && (i === t || t.contains(i)) || e.call(u, t, n)
            }
        },
        l = function (e, t) {
            return "mouseenter" === e || "mouseleave" === e ? ["mouse" + ("mouseenter" === e ? "over" : "out"), c(t)] : [e, t]
        };
    t.addEvent = o, t.mapEvent = a
}, function (e, t) {
    "use strict";
    var n = document.documentElement,
        i = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
    t.matchesSelector = function (e, t) {
        return i.call(e, t)
    }
}, function (e, t, n) {
    "use strict";

    function i() {}
    var r = n(4),
        o = n(5),
        a = n(6),
        u = 1e4,
        s = 6,
        c = function () {
            function e(e) {
                this.load = "", this.timeout = e, this.$state = "IDLE"
            }
            return e.prototype.isReady = function () {
                return "IDLE" == this.$state
            }, e.prototype.loadImg = function (e, t) {
                this.$state = "LOADING";
                var n = document.createElement("img");
                n.onload = this.onLoad.bind(this, n, Date.now(), t), n.onerror = this.onError.bind(this, t), this.observe(t), n.src = this.load = e
            }, e.prototype.cleanup = function () {
                this.$state = "IDLE", clearTimeout(this.wait)
            }, e.prototype.observe = function (e) {
                this.wait = setTimeout(function () {
                    this.cleanup.bind(this), e()
                }.bind(this), this.timeout)
            }, e.prototype.onLoad = function (e, t, n) {
                e.onload = i, e.onerror = i, this.time = Date.now() - t, this.cleanup(), n(e)
            }, e.prototype.onError = function (e) {
                this.cleanup(), e()
            }, e
        }(),
        l = function () {
            function e(e) {
                this.$update = e, this.$store = {}, this.$queue = [], this.$times = [], this.$workers = [], this.addWorker()
            }
            return e.prototype.addWorker = function () {
                this.$workers.push(new c(u))
            }, e.prototype.expandPool = function () {
                r.reduce(function (e, t) {
                    return t.isReady() ? e + 1 : e
                }, 0, this.$workers) < 2 && h(this.$times) < 1e3 && (this.addWorker(), this.$workers.length === s && (this.expandPool = function () {}))
            }, e.prototype.findWorker = function () {
                var e = r.find(function (e) {
                    return e.isReady()
                }, this.$workers);
                if (e instanceof o.Just) return e.value
            }, e.prototype.inStore = function (e) {
                return e in this.$store
            }, e.prototype.inProgress = function (e) {
                return r.find(function (t) {
                    return t.load === e
                }, this.$workers) instanceof o.Just
            }, e.prototype.load = function (e) {
                var t = e.src;
                if (this.inStore(t)) return this.$update(e, this.$store[t]), !0;
                if (this.inProgress(t)) return !0;
                var n = this.findWorker();
                return n instanceof c && (this.loadImg(n, e), !0)
            }, e.prototype.loadImg = function (e, t) {
                var n = this;
                e.loadImg(t.src, function (i) {
                    i && (n.$store[t.src] = i, n.$update(t, i), n.$times.push(e.time), n.expandPool()), n.next()
                })
            }, e.prototype.next = function () {
                this.$queue.length && this.load(this.$queue[0]) && (this.$queue.shift(), setTimeout(this.next.bind(this), 0))
            }, e.prototype.run = function (e) {
                this.$queue = e.slice(), this.next()
            }, e
        }(),
        d = new a["default"],
        f = new l(d.fire.bind(d)),
        h = function (e) {
            return r.reduce(function (e, t) {
                return e + t
            }, 0, e) / e.length
        };
    t.bind = d.bind.bind(d), t.load = f.run.bind(f)
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) e(t[n], n)
    }

    function r(e, t, n) {
        return i(function (n, i) {
            return t = e(t, n, i)
        }, n), t
    }

    function o(e, t) {
        return r(function (t, n) {
            return t.concat(e(n))
        }, [], t)
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            if (1 == e(i)) return [i, n]
        }
    }

    function u(e, t) {
        var n = a(e, t);
        return Array.isArray(n) ? new c.Just(n[1]) : new c.Nothing
    }

    function s(e, t) {
        var n = a(e, t);
        return Array.isArray(n) ? new c.Just(n[0]) : new c.Nothing
    }
    var c = n(5);
    t.each = i, t.reduce = r, t.map = o, t.filter = function (e, t) {
        return r(function (t, n) {
            return e(n) ? t.concat(n) : t
        }, [], t)
    }, t.findIndex = u, t.find = s
}, function (e, t) {
    "use strict";
    var n = function () {
        function e(e) {
            this.value = e
        }
        return e.prototype.bind = function (e) {
            return e(this.value)
        }, e
    }();
    t.Just = n;
    var i = function () {
        function e() {}
        return e.prototype.bind = function () {
            return this
        }, e
    }();
    t.Nothing = i
}, function (e, t, n) {
    "use strict";
    var i = n(4),
        r = {},
        o = 0,
        a = function () {
            function e() {
                this.$bindings = []
            }
            return e.prototype.bind = function (e) {
                var t = "em-" + o++;
                return this.$bindings.push({
                    cid: t,
                    binding: e
                }), {
                    release: this.$release.bind(this, t)
                }
            }, e.prototype.fire = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                i.each(function (t) {
                    var n = t.binding;
                    return n.apply(r, e)
                }, this.$bindings)
            }, e.prototype.$release = function (e) {
                this.$bindings = i.filter(function (t) {
                    return t.cid !== e
                }, this.$bindings)
            }, e
        }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = a
}, function (e, t, n) {
    "use strict";
    var i = n(8),
        r = "getComputedStyle" in window ? "getComputedStyle" : "currentStyle",
        o = document,
        a = {
            $: function (e, t) {
                return void 0 === t && (t = o), t.querySelectorAll(e)
            },
            byId: function (e, t) {
                return void 0 === t && (t = o), t.getElementById(e)
            },
            getStyle: function (e, t) {
                return window[r](e)[t]
            },
            height: function (e) {
                return e.offsetHeight
            },
            width: function (e) {
                return e.offsetWidth
            },
            addClass: function (e, t) {
                return e.classList.add(t)
            },
            hasClass: function (e, t) {
                return e.classList.contains(t)
            },
            removeClass: function (e, t) {
                return e.classList.remove(t)
            }
        };
    a.size = function (e) {
        return {
            width: a.width(e),
            height: a.height(e)
        }
    }, a.offset = function (e) {
        var t = e.getBoundingClientRect(),
            n = document.documentElement;
        return {
            top: t.top + window.pageYOffset - n.clientTop,
            left: t.left + window.pageXOffset - n.clientLeft
        }
    }, a.rect = function (e) {
        return i.extend(a.offset(e), {
            width: a.width(e),
            height: a.height(e)
        })
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = a
}, function (e, t, n) {
    "use strict";

    function i(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return o.each(function (t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, t), e
    }

    function r(e) {
        var t, n = Object.keys(e),
            i = n.length;
        return function (r) {
            if (r === e) return !0;
            for (var o = 0; o < i; o++)
                if (t = n[o], r[t] !== e[t]) return !1;
            return !0
        }
    }
    var o = n(4);
    t.extend = i, t.pick = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return o.reduce(function (t, n) {
            return n in e && (t[n] = e[n]), t
        }, {}, t)
    }, t.where = r
}, function (e, t) {
    "use strict";

    function n(e, n, i) {
        for (var r = [t.normalize(e, i)], o = 0, a = 0, u = 0, s = 0; o < n; o++) o % 2 ? (a = ++u, r.push(t.normalize(e - a, i))) : (a = ++s, r.push(t.normalize(e + a, i)));
        return r.slice(0, Math.min(n + 1, i))
    }
    t.normalize = function (e, t) {
        return (t + e) % t
    }, t.slice = n
}, , function (e, t, n) {
    "use strict";

    function i() {
        a.each(function (e) {
            return e()
        }, s), s = [], a.each(function (e) {
            return e.release()
        }, c), c = []
    }

    function r(e) {
        return "loading" !== document.readyState ? setTimeout(e, 0) : (s.push(e), void(u || (u = !0, c.push(o.addEvent(document, "DOMContentLoaded", i)), c.push(o.addEvent(window, "load", i)))))
    }
    var o = n(1),
        a = n(4),
        u = !1,
        s = [],
        c = [];
    t.ready = r
}, , function (e, t, n) {
    "use strict";

    function i(e, t) {
        e instanceof s && t(e.task()), e instanceof c && e.runTask(t)
    }

    function r(e, t) {
        a.each(function (e) {
            Array.isArray(e) ? a.each(function (e) {
                return i(e, t)
            }, e) : i(e, t)
        }, e)
    }

    function o(e, t) {
        return function n(i) {
            var o = t(e, i),
                a = o[0],
                u = o[1];
            e = a, r(u, n)
        }
    }
    var a = n(4),
        u = function () {
            function e() {}
            return e
        }(),
        s = function () {
            function e(e) {
                this.task = e
            }
            return e
        }(),
        c = function () {
            function e(e) {
                this.task = e
            }
            return e.prototype.runTask = function (e) {
                this.task(e)
            }, e
        }();
    t.noEffect = new u, t.asyncTask = function (e) {
        return new c(e)
    }, t.task = function (e) {
        return new s(e)
    }, t.start = o
}, , , , , , , , function (e, t, n) {
    "use strict";

    function i(e, t, n) {
        var i = [];
        return o.each(function (e) {
            var r = e.update(t[e.id], n),
                o = r[0],
                a = r[1];
            t[e.id] = o, i.push(a)
        }, e), [t, i]
    }

    function r(e, t, n, r) {
        var f = window.pageYOffset,
            h = a["default"].byId("vertical-grid");
        t.unshift(l.bind());
        var p = o.reduce(function (t, i) {
                return i.initialModel(e, h, t, n)
            }, {}, t),
            m = s.start(p, i.bind(d, t));
        c.bind(function (e, t) {
            var n = e.id,
                i = e.src;
            return m({
                ctor: "PlaceImg",
                id: n,
                src: i,
                img: t
            })
        }), r(m), u.addEvent(window, "resize", m.bind(d, {
            ctor: "Resize"
        })), u.addEvent(window, "scroll", function () {
            window.pageYOffset !== f && m({
                ctor: "Scroll"
            }), f = window.pageYOffset
        }), m({
            ctor: "Resize"
        }), m({
            ctor: "Scroll"
        })
    }
    var o = n(4),
        a = n(7),
        u = n(1),
        s = n(13),
        c = n(3),
        l = n(22),
        d = {};
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = r
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e.indexOf(Math.min.apply(Math, e))
    }

    function r(e, t) {
        return e.removeAttribute("srcSet"), e.classList.remove("fouc"), e.classList.remove("-no-srcset"), e.src = t, e.addEventListener("contextmenu", function (e) {
            e.preventDefault()
        }), {
            ctor: "NoOp"
        }
    }

    function o(e, t) {
        var n = c.find(function (e) {
            return e.id == t.id
        }, e.items);
        if (n instanceof l.Just) {
            var i = n.value;
            if (i.img.src !== t.src) return h.task(r.bind(p, i.img, t.src))
        }
        return h.noEffect
    }

    function a(e, t, n, i) {
        for (var r = 0; r < e.columns; r++) m.push(0);
        var o;
        return o = i ? e.spacing > 2 ? Math.pow(2, e.spacing - 4) : e.spacing / 2 : e.spacing > 2 ? Math.pow(2, e.spacing - 1) : e.spacing / 2, n.grid = {
            columns: e.columns,
            spacing: o,
            containerEl: t,
            items: c.reduce(function (e, n) {
                return c.reduce(function (e, t) {
                    return c.reduce(function (e, i) {
                        return c.reduce(function (e, r) {
                            return e.concat(d.extend(n, {
                                el: t,
                                fig: i,
                                img: r
                            }))
                        }, e, s["default"].$("img", i))
                    }, e, s["default"].$("figure", t))
                }, e, s["default"].$('li[data-id="' + n.id + '"]', t))
            }, [], e.items),
            tileSize: 0
        }, n
    }

    function u() {
        return {
            id: "grid",
            update: w,
            initialModel: a
        }
    }
    var s = n(7),
        c = n(4),
        l = n(5),
        d = n(8),
        f = n(3),
        h = n(13),
        p = {},
        m = [],
        g = function (e) {
            var t = Math.round(s["default"].width(e.containerEl) / e.columns),
                n = m.slice();
            e.tileSize = t;
            var r = (100 / e.columns, 2 * e.spacing);
            return c.each(function (e) {
                var o = i(n, r),
                    a = r + Math.round(e.max_height / e.max_width * (t - r));
                e.col = o, e.offset = n[o], e.height = a, e.margin_left = t * o, e.width = t, n[o] += a
            }, e.items), [e, [b(e), h.task(v.bind(p, t, e.spacing, e.items))]]
        },
        v = function (e, t, n) {
            return c.each(function (n) {
                if (n.fig.style.padding = t + "px", n.el.style.width = n.width + "px", n.el.style.marginTop = n.offset + "px", n.el.style.marginLeft = n.margin_left + "px", 1 != n.zoom) {
                    var i = e - 2 * t,
                        r = i / (n.max_width * n.zoom),
                        o = Math.min(n.max_width, n.max_width * r),
                        a = Math.min(n.max_height, n.max_height * r);
                    n.img.style.left = -n.x * (o - i) + "px", n.img.style.top = -n.y * (a - (n.height - 2 * t)) + "px", n.img.width = o, n.img.height = a
                }
            }, n), {
                ctor: "NoOp"
            }
        },
        y = function (e) {
            var t = 100;
            return e + e % t
        },
        _ = function (e, t) {
            var n = window.devicePixelRatio || 1;
            return {
                id: e.id,
                delta: t,
                col: e.col,
                src: [e.src, "&w=" + y(e.width * n)].join("?")
            }
        },
        b = function (e) {
            return h.task(function () {
                var t = window.pageYOffset,
                    n = s["default"].rect(e.containerEl),
                    i = [Math.max(n.top, t), Math.min(t + window.innerHeight, n.top + n.height)],
                    r = i[0],
                    o = i[1];
                return f.load(c.reduce(function (t, i) {
                    var a = i.offset + n.top,
                        u = a + i.height;
                    return a < r && u > r || a >= r && u <= o || a < o && u > o ? t.concat(_(i, Math.abs(r - a), e.tileSize)) : t
                }, [], e.items).sort(function (e, t) {
                    return e.delta == t.delta ? e.col - t.col : e.delta - t.delta
                })), {
                    ctor: "NoOp"
                }
            })
        };
    t.initialModel = a;
    var w = function (e, t) {
        return "Resize" === t.ctor ? g(e) : "Scroll" === t.ctor ? [e, b(e)] : "PlaceImg" === t.ctor ? [e, o(e, t)] : [e, h.noEffect]
    };
    t.bind = u
}, function (e, t, n) {
    "use strict";

    function i() {
        var e = m["default"].$(".slide.active")[0],
            t = m["default"].size(e),
            n = t.height,
            i = t.width,
            r = parseFloat(m["default"].getStyle(e, "paddingBottom"));
        return {
            height: n - r,
            width: i,
            ratio: n / i
        }
    }

    function r(e) {
        return e.canvas = i(), [e, b.task(function () {
            return u(e.canvas, e.items), {
                ctor: "NoOp"
            }
        })]
    }

    function o(e, t) {
        return e.current = t, s(t, e.items), [e, b.task(function () {
            return {
                ctor: "Transition.ShowSlide",
                active: e.current
            }
        })]
    }

    function a(e, t) {
        var n = y.find(function (t) {
            return e.id == t.id
        }, t);
        if (n instanceof v.Just) {
            var i = n.value;
            i.figEl.classList.remove("loading"), i.imgEl.src = e.img.src
        }
        return {
            ctor: "NoOp"
        }
    }

    function u(e, t) {
        y.each(function (t) {
            var n = e.width,
                i = t.max_height / t.max_width;
            i > e.ratio && (n = e.height * (1 / i)), t.figEl.style.width = Math.min(t.max_width, n) + "px"
        }, t)
    }

    function s(e, t) {
        w.load(y.map(function (e) {
            return _.pick(t[e], "id", "src")
        }, x.slice(e, S, t.length)))
    }

    function c(e) {
        var t = e.current,
            n = e.canvas,
            i = e.containerEl,
            r = e.items;
        return i.classList.add("active"), s(t, r), u(n, r), {
            ctor: "Transition.Initialize",
            current: t
        }
    }

    function l(e) {
        return d(), e.active = !1, m["default"].removeClass(e.containerEl, "active"), e
    }

    function d() {
        var e = document.body.style.overflow,
            t = "hidden" === e ? "auto" : "hidden";
        document.body.style.overflow = t
    }

    function f(e, t) {
        d(), e.active = !0;
        var n = y.findIndex(function (e) {
            return e.id == t.id
        }, e.items);
        return n instanceof v.Just && (e.current = n.value), y.each(function (t, n) {
            n == e.current ? E.activateEl(t.slideEl) : E.deactivateEl(t.slideEl)
        }, e.items), e.containerEl.classList.add("active"), e.canvas = i(), [e, b.task(c.bind(A, e))]
    }

    function h(e, t, n) {
        console.log("initialModel");
        var i = m["default"].byId("overlay"),
            r = {
                width: 0,
                height: 0,
                ratio: 0
            };
        return n.overlay = {
            active: !1,
            canvas: r,
            current: 0,
            containerEl: i,
            items: y.map(function (e) {
                return y.reduce(function (t, n) {
                    return y.reduce(function (t, i) {
                        return y.reduce(function (t, r) {
                            return _.extend({
                                slideEl: n,
                                figEl: i,
                                imgEl: r
                            }, _.pick(e, "id", "src", "max_width", "max_height"))
                        }, t, m["default"].$("div.fig > div > img", n))
                    }, t, m["default"].$("div.fig", n))
                }, {}, m["default"].$('li[data-id="' + e.id + '"]', i))
            }, e.items)
        }, n
    }

    function p(e) {
        g.mapEvent(document, "click", "#vertical-grid li[data-id]", function (t) {
            e({
                ctor: "Show",
                id: Number(t.getAttribute("data-id"))
            })
        }), g.mapEvent(document, "click", "#overlay li[data-id]", function () {
            e({
                ctor: "ShowNextSlide"
            })
        }), g.mapEvent(document, "click", "#overlay .close", function () {
            e({
                ctor: "Exit"
            })
        }), g.mapEvent(document, "click", "#overlay .navigation .forward", function (t, n) {
            n.preventDefault(), e({
                ctor: "ShowNextSlide"
            })
        }), g.mapEvent(document, "click", "#overlay .navigation .backward", function (t, n) {
            n.preventDefault(), e({
                ctor: "ShowPreviousSlide"
            })
        }), g.addEvent(document, "keydown", function (t, n) {
            var i = n.which;
            return [37, 39].indexOf(i) > -1 ? e(37 == i ? {
                ctor: "ShowPreviousSlide"
            } : {
                ctor: "ShowNextSlide"
            }) : 27 === i ? e({
                ctor: "Exit"
            }) : void 0
        })
    }
    var m = n(7),
        g = n(1),
        v = n(5),
        y = n(4),
        _ = n(8),
        b = n(13),
        w = n(3),
        x = n(9),
        E = n(24),
        S = 9,
        A = {},
        T = function (e, t, n) {
            return (2 * n + (e + t)) % n
        },
        C = function (e, t) {
            return "Show" === t.ctor ? f(e, t) : e.active === !0 ? "Exit" === t.ctor ? [l(e), b.noEffect] : "ShowPreviousSlide" === t.ctor ? o(e, T(e.current, -1, e.items.length)) : "ShowNextSlide" === t.ctor ? o(e, T(e.current, 1, e.items.length)) : "PlaceImg" === t.ctor ? [e, b.task(a.bind(A, t, e.items))] : "Resize" === t.ctor ? r(e) : [e, b.noEffect] : [e, b.noEffect]
        };
    t.bindEvents = p, t.bind = function () {
        return {
            id: "overlay",
            update: C,
            initialModel: h
        }
    }
}, function (e, t, n) {
    "use strict";

    function i() {}

    function r(e) {
        p["default"].removeClass(e, "not-active"), p["default"].addClass(e, "active")
    }

    function o(e) {
        p["default"].removeClass(e, "active"), p["default"].addClass(e, "not-active")
    }

    function a(e, t) {
        e.state = "TRANSITIONING";
        var n = h.asyncTask(function (n) {
            var i = {
                ctor: "Deactivated",
                el: t
            };
            e.binding = m.addEvent(t, "transitionend", function () {
                return n(i)
            }), p["default"].removeClass(t, "active")
        });
        return [e, n]
    }

    function u(e, t) {
        e.state = "TRANSITIONING";
        var n = h.asyncTask(function (n) {
            var i = {
                ctor: "Activated",
                intended: e.intended,
                el: t
            };
            e.binding = m.addEvent(t, "transitionend", function () {
                return n(i)
            }), p["default"].addClass(t, "active")
        });
        return p["default"].removeClass(t, "not-active"), t.offsetHeight, [e, n]
    }

    function s(e, t) {
        return t.el.classList.add("not-active"), e.binding.release(), e.binding.release = i, u(e, e.slides[e.intended])
    }

    function c(e, t) {
        return e.binding.release(), e.binding.release = i, t.intended !== e.intended ? a(e, t.el) : (e.current = e.intended, e.state = "ACTIVATED", [e, h.noEffect])
    }

    function l(e, t) {
        return e.intended = t.active, e.fade ? "ACTIVATED" === e.state ? a(e, e.slides[e.current]) : [e, h.noEffect] : (o(e.slides[e.current]), r(e.slides[e.intended]), e.current = t.active, [e, h.noEffect])
    }

    function d(e, t) {
        var n = t.current;
        return e.current = n, e.intended = n, e.state = "ACTIVATED", e.binding.release(), e.binding.release = i, [e, h.noEffect]
    }

    function f(e, t, n) {
        return n.transition = {
            current: 0,
            binding: {
                release: i
            },
            fade: e.overlay_transition_enabled,
            intended: 0,
            slides: p["default"].$("#overlay .slide"),
            state: "ACTIVATED"
        }, n
    }
    var h = n(13),
        p = n(7),
        m = n(1);
    t.activateEl = r, t.deactivateEl = o;
    var g = function (e, t) {
        return "Transition.Initialize" === t.ctor ? d(e, t) : "Transition.ShowSlide" === t.ctor ? l(e, t) : "Deactivated" === t.ctor ? s(e, t) : "Activated" === t.ctor ? c(e, t) : [e, h.noEffect]
    };
    t.bind = function () {
        return {
            id: "transition",
            update: g,
            initialModel: f
        }
    }
}]);