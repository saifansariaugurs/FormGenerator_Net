/*!
* jQuery formBuilder: https://formbuilder.online/
* Version: 3.1.2
* Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
! function(e) {
    "use strict";
    ! function(e) {
        var t = {};

        function r(o) {
            if (t[o]) return t[o].exports;
            var n = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        r.m = e, r.c = t, r.d = function(e, t, o) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (r.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) r.d(o, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return o
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 48)
    }([function(e, t, r) {
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                !o && l.return && l.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            i = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            a = r(1),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(2));
        var s = function() {
            function e(t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.rawConfig = jQuery.extend({}, t), t = jQuery.extend({}, t), this.preview = r, delete t.isPreview, this.preview && delete t.required;
                var o = ["label", "description", "subtype", "required", "disabled"],
                    n = Array.isArray(o),
                    i = 0;
                for (o = n ? o : o[Symbol.iterator]();;) {
                    var a;
                    if (n) {
                        if (i >= o.length) break;
                        a = o[i++]
                    } else {
                        if ((i = o.next()).done) break;
                        a = i.value
                    }
                    var l = a;
                    this[l] = t[l], delete t[l]
                }
                t.id || (t.name ? t.id = t.name : t.id = "control-" + Math.floor(1e7 * Math.random() + 1)), this.id = t.id, this.type = t.type, this.description && (t.title = this.description), e.controlConfig || (e.controlConfig = {});
                var s = this.subtype ? this.type + "." + this.subtype : this.type;
                this.classConfig = jQuery.extend({}, e.controlConfig[s] || {}), this.subtype && (t.type = this.subtype), this.required && (t.required = "required", t["aria-required"] = "true"), this.disabled && (t.disabled = "disabled"), this.config = t, this.configure()
            }
            return e.register = function(t, r, o) {
                var n = o ? o + "." : "";
                e.classRegister || (e.classRegister = {}), Array.isArray(t) || (t = [t]);
                var i = t,
                    a = Array.isArray(i),
                    l = 0;
                for (i = a ? i : i[Symbol.iterator]();;) {
                    var s;
                    if (a) {
                        if (l >= i.length) break;
                        s = i[l++]
                    } else {
                        if ((l = i.next()).done) break;
                        s = l.value
                    }
                    var u = s; - 1 === u.indexOf(".") ? e.classRegister[n + u] = r : e.error("Ignoring type " + u + ". Cannot use the character '.' in a type name.")
                }
            }, e.getRegistered = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = Object.keys(e.classRegister);
                return r.length ? r.filter(function(e) {
                    return t ? e.indexOf(t + ".") > -1 : -1 == e.indexOf(".")
                }) : r
            }, e.getRegisteredSubtypes = function() {
                var t = {};
                for (var r in e.classRegister)
                    if (e.classRegister.hasOwnProperty(r)) {
                        var o = r.split("."),
                            i = n(o, 2),
                            a = i[0],
                            l = i[1];
                        if (!l) continue;
                        t[a] || (t[a] = []), t[a].push(l)
                    }
                return t
            }, e.getClass = function(t, r) {
                var o = r ? t + "." + r : t,
                    n = e.classRegister[o] || e.classRegister[t];
                return n || e.error("Invalid control type. (Type: " + t + ", Subtype: " + r + "). Please ensure you have registered it, and imported it correctly.")
            }, e.loadCustom = function(t) {
                var r = [];
                if (t && (r = r.concat(t)), window.fbControls && (r = r.concat(window.fbControls)), !this.fbControlsLoaded) {
                    var o = r,
                        n = Array.isArray(o),
                        i = 0;
                    for (o = n ? o : o[Symbol.iterator]();;) {
                        var a;
                        if (n) {
                            if (i >= o.length) break;
                            a = o[i++]
                        } else {
                            if ((i = o.next()).done) break;
                            a = i.value
                        }
                        a(e, e.classRegister)
                    }
                    this.fbControlsLoaded = !0
                }
            }, e.mi18n = function(e, t) {
                var r = this.definition,
                    n = r.i18n || {};
                n = n[l.default.locale] || n.default || n;
                var i = this.camelCase(e),
                    a = "object" == (void 0 === n ? "undefined" : o(n)) ? n[i] || n[e] : n;
                if (a) return a;
                var s = r.mi18n;
                return "object" === (void 0 === s ? "undefined" : o(s)) && (s = s[i] || s[e]), s || (s = i), l.default.get(s, t)
            }, e.active = function(e) {
                return !Array.isArray(this.definition.inactive) || -1 == this.definition.inactive.indexOf(e)
            }, e.label = function(e) {
                return this.mi18n(e)
            }, e.icon = function(e) {
                var t = this.definition;
                return t && "object" === o(t.icon) ? t.icon[e] : t.icon
            }, e.prototype.configure = function() {}, e.prototype.build = function() {
                var e = this.config,
                    t = e.label,
                    r = e.type,
                    o = function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(e, ["label", "type"]);
                return this.markup(r, (0, a.parsedHtml)(t), o)
            }, e.prototype.on = function(e) {
                var t = this,
                    r = {
                        prerender: function(e) {},
                        render: function(e) {
                            var r = function() {
                                t.onRender && t.onRender()
                            };
                            t.css && (0, a.getStyles)(t.css), t.js && !(0, a.isCached)(t.js) ? (0, a.getScripts)(t.js).done(r) : r()
                        }
                    };
                return e ? r[e] : r
            }, e.error = function(e) {
                throw new Error(e)
            }, e.prototype.markup = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.element = (0, a.markup)(e, t, r), this.element
            }, e.prototype.parsedHtml = function(e) {
                return (0, a.parsedHtml)(e)
            }, e.camelCase = function(e) {
                return (0, a.camelCase)(e)
            }, i(e, null, [{
                key: "definition",
                get: function() {
                    return {}
                }
            }]), e
        }();
        t.default = s
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                !o && l.return && l.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();

        function l(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }
        window.fbLoaded = {
            js: [],
            css: []
        }, window.fbEditors = {
            quill: {},
            tinymce: {}
        };
        var s = r.trimObj = function(e) {
                var t = [null, void 0, "", !1, "false"];
                for (var r in e) t.includes(e[r]) ? delete e[r] : Array.isArray(e[r]) && (e[r].length || delete e[r]);
                return e
            },
            u = r.validAttr = function(e) {
                return !["values", "enableOther", "other", "label", "subtype"].includes(e)
            },
            f = (r.xmlAttrString = function(e) {
                return Object.entries(e).map(function(e) {
                    var t = a(e, 2),
                        r = t[0],
                        o = t[1];
                    return p(r) + '="' + o + '"'
                }).join(" ")
            }, r.attrString = function(e) {
                return Object.entries(e).map(function(e) {
                    var t = a(e, 2),
                        r = t[0],
                        o = t[1];
                    return u(r) && Object.values(c(r, o)).join("")
                }).filter(Boolean).join(" ")
            }),
            c = r.safeAttr = function(e, t) {
                e = d(e);
                var r = void 0;
                return t && (Array.isArray(t) ? r = k(t.join(" ")) : ("boolean" == typeof t && (t = t.toString()), r = k(t.trim()))), {
                    name: e,
                    value: t = t ? '="' + r + '"' : ""
                }
            },
            d = (r.flattenArray = function e(t) {
                return t.reduce(function(t, r) {
                    return t.concat(Array.isArray(r) ? e(r) : r)
                }, [])
            }, r.safeAttrName = function(e) {
                return {
                    className: "class"
                }[e] || p(e)
            }),
            p = r.hyphenCase = function(e) {
                return (e = (e = e.replace(/[^\w\s\-]/gi, "")).replace(/([A-Z])/g, function(e) {
                    return "-" + e.toLowerCase()
                })).replace(/\s/g, "-").replace(/^-+/g, "")
            },
            m = r.camelCase = function(e) {
                return e.replace(/-([a-z])/g, function(e, t) {
                    return t.toUpperCase()
                })
            },
            b = r.bindEvents = function(e, t) {
                if (t) {
                    var r = function(r) {
                        t.hasOwnProperty(r) && e.addEventListener(r, function(e) {
                            return t[r](e)
                        })
                    };
                    for (var o in t) r(o)
                }
            },
            h = r.nameAttr = function(e) {
                var t = (new Date).getTime();
                return (e.type || p(e.label)) + "_" + t
            },
            g = r.getContentType = function(e) {
                return void 0 === e ? e : [
                    ["array", function(e) {
                        return Array.isArray(e)
                    }],
                    ["node", function(e) {
                        return e instanceof window.Node || e instanceof window.HTMLElement
                    }],
                    ["component", function() {
                        return e && e.dom
                    }],
                    [void 0 === e ? "undefined" : i(e), function() {
                        return !0
                    }]
                ].find(function(t) {
                    return t[1](e)
                })[0]
            },
            v = function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = g(r),
                    i = o.events,
                    a = l(o, ["events"]),
                    s = document.createElement(t),
                    u = {
                        string: function(e) {
                            s.innerHTML += e
                        },
                        object: function(t) {
                            var r = t.tag,
                                o = t.content,
                                n = l(t, ["tag", "content"]);
                            return s.appendChild(e(r, o, n))
                        },
                        node: function(e) {
                            return s.appendChild(e)
                        },
                        array: function(e) {
                            for (var t = 0; t < e.length; t++) n = g(e[t]), u[n](e[t])
                        },
                        function: function(e) {
                            e = e(), n = g(e), u[n](e)
                        },
                        undefined: function() {}
                    };
                for (var f in a)
                    if (a.hasOwnProperty(f)) {
                        var c = d(f),
                            p = Array.isArray(a[f]) ? j(a[f].join(" ").split(" ")).join(" ") : a[f];
                        s.setAttribute(c, p)
                    }
                return r && u[n](r), b(s, i), s
            };
        r.markup = v;
        var y = r.parseAttrs = function(e) {
                var t = e.attributes,
                    r = {};
                return E(t, function(e) {
                    var o = t[e].value || "";
                    o.match(/false|true/g) ? o = "true" === o : o.match(/undefined/g) && (o = void 0), o && (r[m(t[e].name)] = o)
                }), r
            },
            w = r.parseOptions = function(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var o = n({}, y(e[r]), {
                        label: e[r].textContent
                    });
                    t.push(o)
                }
                return t
            },
            x = r.parseXML = function(e) {
                var t = (new window.DOMParser).parseFromString(e, "text/xml"),
                    r = [];
                if (t)
                    for (var o = t.getElementsByTagName("field"), n = 0; n < o.length; n++) {
                        var i = y(o[n]),
                            a = o[n].getElementsByTagName("option");
                        a && a.length && (i.values = w(a)), r.push(i)
                    }
                return r
            },
            A = r.parsedHtml = function(e) {
                var t = document.createElement("textarea");
                return t.innerHTML = e, t.textContent
            },
            O = r.escapeHtml = function(e) {
                var t = document.createElement("textarea");
                return t.textContent = e, t.innerHTML
            },
            k = r.escapeAttr = function(e) {
                var t = {
                    '"': "&quot;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;"
                };
                return "string" == typeof e ? e.replace(/["&<>]/g, function(e) {
                    return t[e] || e
                }) : e
            },
            q = r.escapeAttrs = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (e[t] = k(e[t]));
                return e
            },
            E = r.forEach = function(e, t, r) {
                for (var o = 0; o < e.length; o++) t.call(r, o, e[o])
            },
            j = r.unique = function(e) {
                return e.filter(function(e, t, r) {
                    return r.indexOf(e) === t
                })
            },
            C = r.removeFromArray = function(e, t) {
                var r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            },
            S = r.getScripts = function(e, t) {
                var r, o = jQuery,
                    n = [];
                return Array.isArray(e) || (e = [e]), T(e) || (n = jQuery.map(e, function(e) {
                    var r = {
                        dataType: "script",
                        cache: !0,
                        url: (t || "") + e
                    };
                    return jQuery.ajax(r).done(function() {
                        return window.fbLoaded.js.push(e)
                    })
                })), n.push(jQuery.Deferred(function(e) {
                    return o(e.resolve)
                })), (r = jQuery).when.apply(r, n)
            },
            T = r.isCached = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "js",
                    r = !1,
                    o = window.fbLoaded[t];
                return r = Array.isArray(e) ? e.every(function(e) {
                    return o.includes(e)
                }) : o.includes(e), r
            },
            L = r.getStyles = function(t, r) {
                Array.isArray(t) || (t = [t]), t.forEach(function(t) {
                    var o = "href",
                        n = t,
                        a = "";
                    if ("object" == (void 0 === t ? "undefined" : i(t)) && (o = t.type || (t.style ? "inline" : "href"), a = t.id, t = "inline" == o ? t.style : t.href, n = a || t.href || t.style), !T(n, "css")) {
                        if ("href" == o) {
                            var l = document.createElement("link");
                            l.type = "text/css", l.rel = "stylesheet", l.href = (r || "") + t, document.head.appendChild(l)
                        } else e('<style type="text/css">' + t + "</style>").attr("id", a).appendTo(e(document.head));
                        window.fbLoaded.css.push(n)
                    }
                })
            },
            N = r.capitalize = function(e) {
                return e.replace(/\b\w/g, function(e) {
                    return e.toUpperCase()
                })
            },
            D = r.merge = function e(t, r) {
                var o = Object.assign({}, t, r);
                for (var n in r) o.hasOwnProperty(n) && (Array.isArray(r[n]) ? o[n] = Array.isArray(t[n]) ? j(t[n].concat(r[n])) : r[n] : "object" === i(r[n]) ? o[n] = e(t[n], r[n]) : o[n] = r[n]);
                return o
            },
            M = r.addEventListeners = function(e, t, r) {
                return t.split(" ").forEach(function(t) {
                    return e.addEventListener(t, r, !1)
                })
            },
            R = r.closest = function(e, t) {
                for (var r = t.replace(".", "");
                    (e = e.parentElement) && !e.classList.contains(r););
                return e
            },
            B = r.mobileClass = function() {
                var e = "";
                return function(t) {
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && (e = "fb-mobile")
                }(navigator.userAgent || navigator.vendor || window.opera), e
            },
            F = r.safename = function(e) {
                return e.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "")
            },
            I = r.forceNumber = function(e) {
                return e.replace(/[^0-9]/g, "")
            },
            P = r.subtract = function(e, t) {
                return t.filter(function(e) {
                    return !~this.indexOf(e)
                }, e)
            },
            z = (r.insertStyle = function(e) {
                var t = (e = Array.isArray(e) ? e : [e]).map(function(e) {
                    var t = e.src,
                        r = e.id;
                    return new Promise(function(e, o) {
                        if (window.fbLoaded.css.includes(t)) return e(t);
                        var n = v("link", null, {
                            href: t,
                            rel: "stylesheet",
                            id: r
                        });
                        document.head.insertBefore(n, document.head.firstChild)
                    })
                });
                return Promise.all(t)
            }, r.removeStyle = function(e) {
                var t = document.getElementById(e);
                return t.parentElement.removeChild(t)
            }, {
                addEventListeners: M,
                attrString: f,
                camelCase: m,
                capitalize: N,
                closest: R,
                getContentType: g,
                escapeAttr: k,
                escapeAttrs: q,
                escapeHtml: O,
                forceNumber: I,
                forEach: E,
                getScripts: S,
                getStyles: L,
                hyphenCase: p,
                isCached: T,
                markup: v,
                merge: D,
                mobileClass: B,
                nameAttr: h,
                parseAttrs: y,
                parsedHtml: A,
                parseOptions: w,
                parseXML: x,
                removeFromArray: C,
                safeAttr: c,
                safeAttrName: d,
                safename: F,
                subtract: P,
                trimObj: s,
                unique: j,
                validAttr: u
            });
        r.default = z
    }, function(e, t) {
        /*!
        * mi18n - https://github.com/Draggable/mi18n
        * Version: 0.4.7
        * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
        */
        e.exports = function(e) {
            var t = {};

            function r(o) {
                if (t[o]) return t[o].exports;
                var n = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
            }
            return r.m = e, r.c = t, r.d = function(e, t, o) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            }, r.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (r.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var n in e) r.d(o, n, function(t) {
                        return e[t]
                    }.bind(null, n));
                return o
            }, r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 7)
        }([function(e, t, r) {
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = r(2),
                i = r(10),
                a = Object.prototype.toString;

            function l(e) {
                return "[object Array]" === a.call(e)
            }

            function s(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : o(e))
            }

            function u(e) {
                return "[object Function]" === a.call(e)
            }

            function f(e, t) {
                if (null !== e && void 0 !== e)
                    if ("object" !== (void 0 === e ? "undefined" : o(e)) && (e = [e]), l(e))
                        for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
                    else
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
            }
            e.exports = {
                isArray: l,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === a.call(e)
                },
                isBuffer: i,
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: s,
                isUndefined: function(e) {
                    return void 0 === e
                },
                isDate: function(e) {
                    return "[object Date]" === a.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === a.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === a.call(e)
                },
                isFunction: u,
                isStream: function(e) {
                    return s(e) && u(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: f,
                merge: function e() {
                    var t = {};

                    function r(r, n) {
                        "object" === o(t[n]) && "object" === (void 0 === r ? "undefined" : o(r)) ? t[n] = e(t[n], r) : t[n] = r
                    }
                    for (var n = 0, i = arguments.length; n < i; n++) f(arguments[n], r);
                    return t
                },
                extend: function(e, t, r) {
                    return f(t, function(t, o) {
                        e[o] = r && "function" == typeof t ? n(t, r) : t
                    }), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        }, function(e, t, r) {
            (function(t) {
                var o = r(0),
                    n = r(13),
                    i = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function a(e, t) {
                    !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var l = {
                    adapter: function() {
                        var e;
                        return "undefined" != typeof XMLHttpRequest ? e = r(3) : void 0 !== t && (e = r(3)), e
                    }(),
                    transformRequest: [function(e, t) {
                        return n(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                o.forEach(["delete", "get", "head"], function(e) {
                    l.headers[e] = {}
                }), o.forEach(["post", "put", "patch"], function(e) {
                    l.headers[e] = o.merge(i)
                }), e.exports = l
            }).call(this, r(12))
        }, function(e, t, r) {
            e.exports = function(e, t) {
                return function() {
                    for (var r = new Array(arguments.length), o = 0; o < r.length; o++) r[o] = arguments[o];
                    return e.apply(t, r)
                }
            }
        }, function(e, t, r) {
            var o = r(0),
                n = r(14),
                i = r(16),
                a = r(17),
                l = r(18),
                s = r(4),
                u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(19);
            e.exports = function(e) {
                return new Promise(function(t, f) {
                    var c = e.data,
                        d = e.headers;
                    o.isFormData(c) && delete d["Content-Type"];
                    var p = new XMLHttpRequest,
                        m = "onreadystatechange",
                        b = !1;
                    if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || l(e.url) || (p = new window.XDomainRequest, m = "onload", b = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                        var h = e.auth.username || "",
                            g = e.auth.password || "";
                        d.Authorization = "Basic " + u(h + ":" + g)
                    }
                    if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[m] = function() {
                            if (p && (4 === p.readyState || b) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                                    o = {
                                        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                        status: 1223 === p.status ? 204 : p.status,
                                        statusText: 1223 === p.status ? "No Content" : p.statusText,
                                        headers: r,
                                        config: e,
                                        request: p
                                    };
                                n(t, f, o), p = null
                            }
                        }, p.onerror = function() {
                            f(s("Network Error", e, null, p)), p = null
                        }, p.ontimeout = function() {
                            f(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                        }, o.isStandardBrowserEnv()) {
                        var v = r(20),
                            y = (e.withCredentials || l(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                        y && (d[e.xsrfHeaderName] = y)
                    }
                    if ("setRequestHeader" in p && o.forEach(d, function(e, t) {
                            void 0 === c && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                        }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                        p.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType) throw t
                    }
                    "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                        p && (p.abort(), f(e), p = null)
                    }), void 0 === c && (c = null), p.send(c)
                })
            }
        }, function(e, t, r) {
            var o = r(15);
            e.exports = function(e, t, r, n, i) {
                var a = new Error(e);
                return o(a, t, r, n, i)
            }
        }, function(e, t, r) {
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        }, function(e, t, r) {
            function o(e) {
                this.message = e
            }
            o.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, o.prototype.__CANCEL__ = !0, e.exports = o
        }, function(e, t, r) {
            t.__esModule = !0, t.I18N = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                i = r(8),
                a = {
                    extension: ".lang",
                    location: "assets/lang/",
                    langs: ["en-US"],
                    locale: "en-US",
                    override: {}
                },
                l = t.I18N = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.langs = Object.create(null), this.loaded = [], this.processConfig(t)
                    }
                    return e.prototype.processConfig = function(e) {
                        var t = this,
                            r = Object.assign({}, a, e),
                            o = r.location,
                            n = function(e, t) {
                                var r = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                                return r
                            }(r, ["location"]),
                            i = o.replace(/\/?$/, "/");
                        this.config = Object.assign({}, {
                            location: i
                        }, n);
                        var l = this.config,
                            s = l.override,
                            u = l.preloaded,
                            f = void 0 === u ? {} : u,
                            c = Object.entries(this.langs).concat(Object.entries(s || f));
                        this.langs = c.reduce(function(e, r) {
                            var o = r[0],
                                n = r[1];
                            return e[o] = t.applyLanguage.call(t, o, n), e
                        }, {}), this.locale = this.config.locale || this.config.langs[0]
                    }, e.prototype.init = function(e) {
                        return this.processConfig.call(this, Object.assign({}, this.config, e)), this.setCurrent(this.locale)
                    }, e.prototype.addLanguage = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t = "string" == typeof t ? this.processFile.call(this, t) : t, this.applyLanguage.call(this, e, t), this.config.langs.push("locale")
                    }, e.prototype.getValue = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
                        return this.langs[t] && this.langs[t][e] || this.getFallbackValue(e)
                    }, e.prototype.getFallbackValue = function(e) {
                        var t = Object.values(this.langs).find(function(t) {
                            return t[e]
                        });
                        return t && t[e]
                    }, e.prototype.makeSafe = function(e) {
                        var t = {
                            "{": "\\{",
                            "}": "\\}",
                            "|": "\\|"
                        };
                        return e = e.replace(/\{|\}|\|/g, function(e) {
                            return t[e]
                        }), new RegExp(e, "g")
                    }, e.prototype.put = function(e, t) {
                        return this.current[e] = t
                    }, e.prototype.get = function(e, t) {
                        var r = this.getValue(e);
                        if (r) {
                            var n = r.match(/\{[^}]+?\}/g),
                                i = void 0;
                            if (t && n)
                                if ("object" === (void 0 === t ? "undefined" : o(t)))
                                    for (var a = 0; a < n.length; a++) i = n[a].substring(1, n[a].length - 1), r = r.replace(this.makeSafe(n[a]), t[i] || "");
                                else r = r.replace(/\{[^}]+?\}/g, t);
                            return r
                        }
                    }, e.prototype.fromFile = function(e) {
                        for (var t, r = e.split("\n"), o = {}, n = 0; n < r.length; n++)(t = r[n].match(/^(.+?) *?= *?([^\n]+)/)) && (o[t[1]] = t[2].replace(/^\s+|\s+$/, ""));
                        return o
                    }, e.prototype.processFile = function(e) {
                        return this.fromFile(e.replace(/\n\n/g, "\n"))
                    }, e.prototype.loadLang = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = this;
                        return new Promise(function(o, n) {
                            if (-1 !== r.loaded.indexOf(e) && t) return r.applyLanguage.call(r, r.langs[e]), o(r.langs[e]);
                            var a = [r.config.location, e, r.config.extension].join("");
                            return (0, i.get)(a).then(function(t) {
                                var n = t.data,
                                    i = r.processFile(n);
                                return r.applyLanguage.call(r, e, i), r.loaded.push(e), o(r.langs[e])
                            }).catch(function() {
                                var t = r.applyLanguage.call(r, e);
                                o(t)
                            })
                        })
                    }, e.prototype.applyLanguage = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = this.config.override[e] || {},
                            o = this.langs[e] || {};
                        return this.langs[e] = Object.assign({}, o, t, r), this.langs[e]
                    }, e.prototype.setCurrent = function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                        return this.loadLang(t).then(function() {
                            return e.locale = t, e.current = e.langs[t], e.current
                        })
                    }, n(e, [{
                        key: "getLangs",
                        get: function() {
                            return this.config.langs
                        }
                    }]), e
                }();
            t.default = new l
        }, function(e, t, r) {
            e.exports = r(9)
        }, function(e, t, r) {
            var o = r(0),
                n = r(2),
                i = r(11),
                a = r(1);

            function l(e) {
                var t = new i(e),
                    r = n(i.prototype.request, t);
                return o.extend(r, i.prototype, t), o.extend(r, t), r
            }
            var s = l(a);
            s.Axios = i, s.create = function(e) {
                return l(o.merge(a, e))
            }, s.Cancel = r(6), s.CancelToken = r(26), s.isCancel = r(5), s.all = function(e) {
                return Promise.all(e)
            }, s.spread = r(27), e.exports = s, e.exports.default = s
        }, function(e, t, r) {
            /*!
            * Determine if an object is a Buffer
            *
            * @author   Feross Aboukhadijeh <https://feross.org>
            * @license  MIT
            */
            function o(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            e.exports = function(e) {
                return null != e && (o(e) || function(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && o(e.slice(0, 0))
                }(e) || !!e._isBuffer)
            }
        }, function(e, t, r) {
            var o = r(1),
                n = r(0),
                i = r(21),
                a = r(22);

            function l(e) {
                this.defaults = e, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            l.prototype.request = function(e) {
                "string" == typeof e && (e = n.merge({
                    url: arguments[0]
                }, arguments[1])), (e = n.merge(o, {
                    method: "get"
                }, this.defaults, e)).method = e.method.toLowerCase();
                var t = [a, void 0],
                    r = Promise.resolve(e);
                for (this.interceptors.request.forEach(function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }), this.interceptors.response.forEach(function(e) {
                        t.push(e.fulfilled, e.rejected)
                    }); t.length;) r = r.then(t.shift(), t.shift());
                return r
            }, n.forEach(["delete", "get", "head", "options"], function(e) {
                l.prototype[e] = function(t, r) {
                    return this.request(n.merge(r || {}, {
                        method: e,
                        url: t
                    }))
                }
            }), n.forEach(["post", "put", "patch"], function(e) {
                l.prototype[e] = function(t, r, o) {
                    return this.request(n.merge(o || {}, {
                        method: e,
                        url: t,
                        data: r
                    }))
                }
            }), e.exports = l
        }, function(e, t, r) {
            var o, n, i = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function l() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (o === setTimeout) return setTimeout(e, 0);
                if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
                try {
                    return o(e, 0)
                } catch (t) {
                    try {
                        return o.call(null, e, 0)
                    } catch (t) {
                        return o.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    o = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    o = a
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : l
                } catch (e) {
                    n = l
                }
            }();
            var u, f = [],
                c = !1,
                d = -1;

            function p() {
                c && u && (c = !1, u.length ? f = u.concat(f) : d = -1, f.length && m())
            }

            function m() {
                if (!c) {
                    var e = s(p);
                    c = !0;
                    for (var t = f.length; t;) {
                        for (u = f, f = []; ++d < t;) u && u[d].run();
                        d = -1, t = f.length
                    }
                    u = null, c = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === l || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function b(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                f.push(new b(e, t)), 1 !== f.length || c || s(m)
            }, b.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }, function(e, t, r) {
            var o = r(0);
            e.exports = function(e, t) {
                o.forEach(e, function(r, o) {
                    o !== t && o.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[o])
                })
            }
        }, function(e, t, r) {
            var o = r(4);
            e.exports = function(e, t, r) {
                var n = r.config.validateStatus;
                r.status && n && !n(r.status) ? t(o("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
            }
        }, function(e, t, r) {
            e.exports = function(e, t, r, o, n) {
                return e.config = t, r && (e.code = r), e.request = o, e.response = n, e
            }
        }, function(e, t, r) {
            var o = r(0);

            function n(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, r) {
                if (!t) return e;
                var i;
                if (r) i = r(t);
                else if (o.isURLSearchParams(t)) i = t.toString();
                else {
                    var a = [];
                    o.forEach(t, function(e, t) {
                        null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function(e) {
                            o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), a.push(n(t) + "=" + n(e))
                        }))
                    }), i = a.join("&")
                }
                return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
            }
        }, function(e, t, r) {
            var o = r(0),
                n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, r, i, a = {};
                return e ? (o.forEach(e.split("\n"), function(e) {
                    if (i = e.indexOf(":"), t = o.trim(e.substr(0, i)).toLowerCase(), r = o.trim(e.substr(i + 1)), t) {
                        if (a[t] && n.indexOf(t) >= 0) return;
                        a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r
                    }
                }), a) : a
            }
        }, function(e, t, r) {
            var o = r(0);
            e.exports = o.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    r = document.createElement("a");

                function n(e) {
                    var o = e;
                    return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
                        href: r.href,
                        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                        host: r.host,
                        search: r.search ? r.search.replace(/^\?/, "") : "",
                        hash: r.hash ? r.hash.replace(/^#/, "") : "",
                        hostname: r.hostname,
                        port: r.port,
                        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                    }
                }
                return e = n(window.location.href),
                    function(t) {
                        var r = o.isString(t) ? n(t) : t;
                        return r.protocol === e.protocol && r.host === e.host
                    }
            }() : function() {
                return !0
            }
        }, function(e, t, r) {
            function o() {
                this.message = "String contains an invalid character"
            }
            o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
                for (var t, r, n = String(e), i = "", a = 0, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; n.charAt(0 | a) || (l = "=", a % 1); i += l.charAt(63 & t >> 8 - a % 1 * 8)) {
                    if ((r = n.charCodeAt(a += .75)) > 255) throw new o;
                    t = t << 8 | r
                }
                return i
            }
        }, function(e, t, r) {
            var o = r(0);
            e.exports = o.isStandardBrowserEnv() ? {
                write: function(e, t, r, n, i, a) {
                    var l = [];
                    l.push(e + "=" + encodeURIComponent(t)), o.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), o.isString(n) && l.push("path=" + n), o.isString(i) && l.push("domain=" + i), !0 === a && l.push("secure"), document.cookie = l.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }, function(e, t, r) {
            var o = r(0);

            function n() {
                this.handlers = []
            }
            n.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, n.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, n.prototype.forEach = function(e) {
                o.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }, e.exports = n
        }, function(e, t, r) {
            var o = r(0),
                n = r(23),
                i = r(5),
                a = r(1),
                l = r(24),
                s = r(25);

            function u(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return u(e), e.baseURL && !l(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                    delete e.headers[t]
                }), (e.adapter || a.adapter)(e).then(function(t) {
                    return u(e), t.data = n(t.data, t.headers, e.transformResponse), t
                }, function(t) {
                    return i(t) || (u(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                })
            }
        }, function(e, t, r) {
            var o = r(0);
            e.exports = function(e, t, r) {
                return o.forEach(r, function(r) {
                    e = r(e, t)
                }), e
            }
        }, function(e, t, r) {
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        }, function(e, t, r) {
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        }, function(e, t, r) {
            var o = r(6);

            function n(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise(function(e) {
                    t = e
                });
                var r = this;
                e(function(e) {
                    r.reason || (r.reason = new o(e), t(r.reason))
                })
            }
            n.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, n.source = function() {
                var e;
                return {
                    token: new n(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }, e.exports = n
        }, function(e, t, r) {
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        }])
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o(0));
        var a = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.build = function() {
                var e = this.config,
                    t = e.value,
                    r = void 0 === t ? "" : t,
                    o = function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(e, ["value"]);
                return this.field = this.markup("textarea", this.parsedHtml(r), o), this.field
            }, r.prototype.onRender = function() {
                this.config.userData && e("#" + this.config.name).val(this.config.userData[0])
            }, r.prototype.on = function(r) {
                var o = this;
                return "prerender" == r && this.preview ? function(t) {
                    o.field && (t = o.field), e(t).on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                } : t.prototype.on.call(this, r)
            }, n(r, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            textarea: "textArea"
                        }
                    }
                }
            }]), r
        }(i.default);
        r.default = a, i.default.register("textarea", a), i.default.register("textarea", a, "textarea")
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            n = a(r(0)),
            i = a(r(2));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.register = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                t.customRegister = {}, t.def || (t.def = {
                    icon: {},
                    i18n: {}
                }), t.templates = e;
                var o = i.default.locale;
                t.def.i18n[o] || (t.def.i18n[o] = {}), n.default.register(Object.keys(e), t);
                var a = r,
                    l = Array.isArray(a),
                    s = 0;
                for (a = l ? a : a[Symbol.iterator]();;) {
                    var u;
                    if (l) {
                        if (s >= a.length) break;
                        u = a[s++]
                    } else {
                        if ((s = a.next()).done) break;
                        u = s.value
                    }
                    var f = u,
                        c = f.type;
                    if (f.attrs = f.attrs || {}, !c) {
                        if (!f.attrs.type) {
                            this.error("Ignoring invalid custom field definition. Please specify a type property.");
                            continue
                        }
                        c = f.attrs.type
                    }
                    var d = f.subtype || c;
                    if (!e[c]) {
                        var p = n.default.getClass(c, f.subtype);
                        if (!p) {
                            this.error("Error while registering custom field: " + c + (f.subtype ? ":" + f.subtype : "") + ". Unable to find any existing defined control or template for rendering.");
                            continue
                        }
                        d = f.datatype ? f.datatype : c + "-" + Math.floor(9e3 * Math.random() + 1e3), t.customRegister[d] = jQuery.extend(f, {
                            type: c,
                            class: p
                        })
                    }
                    t.def.i18n[o][d] = f.label, t.def.icon[d] = f.icon
                }
            }, t.getRegistered = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? n.default.getRegistered(e) : Object.keys(t.customRegister)
            }, t.lookup = function(e) {
                return t.customRegister[e]
            }, t.prototype.build = function() {
                var e = t.templates[this.type];
                if (!e) return this.error("Invalid custom control type. Please ensure you have registered it correctly as a template option.");
                var r = Object.assign(this.config),
                    o = ["label", "description", "subtype", "id", "isPreview", "required", "title", "aria-required", "type"],
                    n = Array.isArray(o),
                    i = 0;
                for (o = n ? o : o[Symbol.iterator]();;) {
                    var a;
                    if (n) {
                        if (i >= o.length) break;
                        a = o[i++]
                    } else {
                        if ((i = o.next()).done) break;
                        a = i.value
                    }
                    var l = a;
                    r[l] = this.config[l] || this[l]
                }
                return (e = (e = e.bind(this))(r)).js && (this.js = e.js), e.css && (this.css = e.css), this.onRender = e.onRender, {
                    field: e.field,
                    layout: e.layout
                }
            }, o(t, null, [{
                key: "definition",
                get: function() {
                    return t.def
                }
            }]), t
        }(n.default);
        t.default = l, l.customRegister = {}
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = t.instanceDom = {},
            n = t.defaultSubtypes = {
                text: ["text", "password", "email", "color", "tel"],
                header: ["h1", "h2", "h3"],
                button: ["button", "submit", "reset"],
                paragraph: ["p", "address", "blockquote", "canvas", "output"],
                textarea: ["textarea", "quill"]
            },
            i = (t.remove = function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }, t.empty = function(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return e
            }),
            a = t.filter = function(e, t) {
                var r = [],
                    o = ["none", "block"];
                (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (o = o.reverse());
                for (var n = e.length - 1; n >= 0; n--) {
                    -1 !== e[n].textContent.toLowerCase().indexOf(t.toLowerCase()) ? (e[n].style.display = o[0], r.push(e[n])) : e[n].style.display = o[1]
                }
                return r
            },
            l = t.optionFields = ["select", "checkbox-group", "checkbox", "radio-group", "autocomplete"],
            s = t.optionFieldsRegEx = new RegExp("(" + l.join("|") + ")"),
            u = function() {
                function e(t) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.optionFields = l, this.optionFieldsRegEx = s, this.subtypes = n, this.empty = i, this.filter = a, o[t] = this, o[t]
                }
                return e.prototype.onRender = function(e, t) {
                    var r = this;
                    e.parentElement ? t(e) : window.requestAnimationFrame(function() {
                        return r.onRender(e, t)
                    })
                }, e
            }();
        t.default = u
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o(0));
        var a = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.build = function() {
                var e = this.config.name;
                e = this.config.multiple ? e + "[]" : e;
                var t = Object.assign({}, this.config, {
                    name: e
                });
                return this.dom = this.markup("input", null, t), this.dom
            }, r.prototype.onRender = function() {
                this.config.userData && e(this.dom).val(this.config.userData[0])
            }, n(r, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            date: "dateField",
                            file: "fileUpload"
                        }
                    }
                }
            }]), r
        }(i.default);
        r.default = a, i.default.register(["text", "file", "date", "number"], a), i.default.register(["text", "password", "email", "color", "tel"], a, "text")
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var r = t.protocol + "//" + t.host,
                o = r + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var n, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? r + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
            })
        }
    }, function(e, t, r) {
        var o = {},
            n = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            i = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var r = function(e) {
                            return document.querySelector(e)
                        }.call(this, e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                        t[e] = r
                    }
                    return t[e]
                }
            }(),
            a = null,
            l = 0,
            s = [],
            u = r(7);

        function f(e, t) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    i = o[n.id];
                if (i) {
                    i.refs++;
                    for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++) i.parts.push(h(n.parts[a], t))
                } else {
                    var l = [];
                    for (a = 0; a < n.parts.length; a++) l.push(h(n.parts[a], t));
                    o[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: l
                    }
                }
            }
        }

        function c(e, t) {
            for (var r = [], o = {}, n = 0; n < e.length; n++) {
                var i = e[n],
                    a = t.base ? i[0] + t.base : i[0],
                    l = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                o[a] ? o[a].parts.push(l) : r.push(o[a] = {
                    id: a,
                    parts: [l]
                })
            }
            return r
        }

        function d(e, t) {
            var r = i(e.insertInto);
            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var o = s[s.length - 1];
            if ("top" === e.insertAt) o ? o.nextSibling ? r.insertBefore(t, o.nextSibling) : r.appendChild(t) : r.insertBefore(t, r.firstChild), s.push(t);
            else if ("bottom" === e.insertAt) r.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var n = i(e.insertInto + " " + e.insertAt.before);
                r.insertBefore(t, n)
            }
        }

        function p(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = s.indexOf(e);
            t >= 0 && s.splice(t, 1)
        }

        function m(e) {
            var t = document.createElement("style");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), d(e, t), t
        }

        function b(e, t) {
            Object.keys(t).forEach(function(r) {
                e.setAttribute(r, t[r])
            })
        }

        function h(e, t) {
            var r, o, n, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function() {};
                e.css = i
            }
            if (t.singleton) {
                var s = l++;
                r = a || (a = m(t)), o = v.bind(null, r, s, !1), n = v.bind(null, r, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), d(e, t), t
            }(t), o = function(e, t, r) {
                var o = r.css,
                    n = r.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && n;
                (t.convertToAbsoluteUrls || i) && (o = u(o));
                n && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
                var a = new Blob([o], {
                        type: "text/css"
                    }),
                    l = e.href;
                e.href = URL.createObjectURL(a), l && URL.revokeObjectURL(l)
            }.bind(null, r, t), n = function() {
                p(r), r.href && URL.revokeObjectURL(r.href)
            }) : (r = m(t), o = function(e, t) {
                var r = t.css,
                    o = t.media;
                o && e.setAttribute("media", o);
                if (e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }.bind(null, r), n = function() {
                p(r)
            });
            return o(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        o(e = t)
                    } else n()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = n()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var r = c(e, t);
            return f(r, t),
                function(e) {
                    for (var n = [], i = 0; i < r.length; i++) {
                        var a = r[i];
                        (l = o[a.id]).refs--, n.push(l)
                    }
                    e && f(c(e, t), t);
                    for (i = 0; i < n.length; i++) {
                        var l;
                        if (0 === (l = n[i]).refs) {
                            for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                            delete o[l.id]
                        }
                    }
                }
        };
        var g = function() {
            var e = [];
            return function(t, r) {
                return e[t] = r, e.filter(Boolean).join("\n")
            }
        }();

        function v(e, t, r, o) {
            var n = r ? "" : o.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, n);
            else {
                var i = document.createTextNode(n),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var r = function(e, t) {
                        var r = e[1] || "",
                            o = e[3];
                        if (!o) return r;
                        if (t && "function" == typeof btoa) {
                            var n = function(e) {
                                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                                }(o),
                                i = o.sources.map(function(e) {
                                    return "/*# sourceURL=" + o.sourceRoot + e + " */"
                                });
                            return [r].concat(i).concat([n]).join("\n")
                        }
                        return [r].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }, t.i = function(e, r) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var o = {}, n = 0; n < this.length; n++) {
                    var i = this[n][0];
                    "number" == typeof i && (o[i] = !0)
                }
                for (n = 0; n < e.length; n++) {
                    var a = e[n];
                    "number" == typeof a[0] && o[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), t.push(a))
                }
            }, t
        }
    }, function(e, t, r) {
        t.__esModule = !0, t.config = t.defaultI18n = t.styles = t.defaultOptions = void 0,
            function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(2)).default.addLanguage("en-US", {
                NATIVE_NAME: "English (US)",
                ENGLISH_NAME: "English",
                addOption: "Add Option +",
                allFieldsRemoved: "All fields were removed.",
                allowMultipleFiles: "Allow users to upload multiple files",
                autocomplete: "Autocomplete",
                button: "Button",
                cannotBeEmpty: "This field cannot be empty",
                checkboxGroup: "Checkbox Group",
                checkbox: "Checkbox",
                checkboxes: "Checkboxes",
                className: "Class",
                clearAllMessage: "Are you sure you want to clear all fields?",
                clear: "Clear",
                close: "Close",
                content: "Content",
                copy: "Copy To Clipboard",
                copyButton: "&#43;",
                copyButtonTooltip: "Copy",
                dateField: "Date Field",
                description: "Help Text",
                descriptionField: "Description",
                devMode: "Developer Mode",
                editNames: "Edit Names",
                editorTitle: "Form Elements",
                editXML: "Edit XML",
                enableOther: "Enable &quot;Other&quot;",
                enableOtherMsg: "Let users to enter an unlisted option",
                fieldDeleteWarning: "false",
                fieldVars: "Field Variables",
                fieldNonEditable: "This field cannot be edited.",
                fieldRemoveWarning: "Are you sure you want to remove this field?",
                fileUpload: "File Upload",
                formUpdated: "Form Updated",
                getStarted: "Drag a field from the right to this area",
                header: "Header",
                hide: "Edit",
                hidden: "Hidden Input",
                inline: "Inline",
                inlineDesc: "Display {type} inline",
                label: "Label",
                labelEmpty: "Field Label cannot be empty",
                limitRole: "Limit access to one or more of the following roles:",
                mandatory: "Mandatory",
                maxlength: "Max Length",
                minOptionMessage: "This field requires a minimum of 2 options",
                minSelectionRequired: "Minimum {min} selections required",
                multipleFiles: "Multiple Files",
                name: "Name",
                no: "No",
                noFieldsToClear: "There are no fields to clear",
                number: "Number",
                off: "Off",
                on: "On",
                option: "Option",
                optionCount: "Option {count}",
                options: "Options",
                optional: "optional",
                optionLabelPlaceholder: "Label",
                optionValuePlaceholder: "Value",
                optionEmpty: "Option value required",
                other: "Other",
                paragraph: "Paragraph",
                placeholder: "Placeholder",
                "placeholders.value": "Value",
                "placeholders.label": "Label",
                "placeholders.email": "Enter you email",
                "placeholders.className": "space separated classes",
                "placeholders.password": "Enter your password",
                preview: "Preview",
                radioGroup: "Radio Group",
                radio: "Radio",
                removeMessage: "Remove Element",
                removeOption: "Remove Option",
                remove: "&#215;",
                required: "Required",
                requireValidOption: "Only accept a pre-defined Option",
                richText: "Rich Text Editor",
                roles: "Access",
                rows: "Rows",
                save: "Save",
                selectOptions: "Options",
                select: "Select",
                selectColor: "Select Color",
                selectionsMessage: "Allow Multiple Selections",
                size: "Size",
                "size.xs": "Extra Small",
                "size.sm": "Small",
                "size.m": "Default",
                "size.lg": "Large",
                style: "Style",
                "styles.btn.default": "Default",
                "styles.btn.danger": "Danger",
                "styles.btn.info": "Info",
                "styles.btn.primary": "Primary",
                "styles.btn.success": "Success",
                "styles.btn.warning": "Warning",
                subtype: "Type",
                text: "Text Field",
                textArea: "Text Area",
                toggle: "Toggle",
                warning: "Warning!",
                value: "Value",
                viewJSON: "[{&hellip;}]",
                viewXML: "&lt;/&gt;",
                yes: "Yes"
            });
        t.defaultOptions = {
            actionButtons: [],
            allowStageSort: !0,
            append: !1,
            controlOrder: ["autocomplete", "button", "checkbox-group", "checkbox", "date", "file", "header", "hidden", "number", "paragraph", "radio-group", "select", "text", "textarea"],
            controlPosition: "right",
            dataType: "json",
            defaultFields: [],
            disabledActionButtons: [],
            disabledAttrs: [],
            disabledFieldButtons: {},
            disabledSubtypes: {},
            disableFields: [],
            disableHTMLLabels: !1,
            disableInjectedStyle: !1,
            editOnAdd: !1,
            fields: [],
            fieldRemoveWarn: !1,
            fieldEditContainer: null,
            inputSets: [],
            notify: {
                error: console.error,
                success: console.log,
                warning: console.warn
            },
            onAddField: function(e, t) {
                return e
            },
            onClearAll: function() {
                return null
            },
            onCloseFieldEdit: function() {
                return null
            },
            onOpenFieldEdit: function() {
                return null
            },
            onSave: function(e, t) {
                return null
            },
            prepend: !1,
            replaceFields: [],
            roles: {
                1: "Administrator"
            },
            scrollToFieldOnAdd: !0,
            showActionButtons: !0,
            sortableControls: !1,
            stickyControls: {
                enable: !0,
                offset: {
                    top: 5,
                    bottom: "auto",
                    right: "auto"
                }
            },
            subtypes: {},
            templates: {},
            typeUserAttrs: {},
            typeUserDisabledAttrs: {},
            typeUserEvents: {}
        }, t.styles = {
            btn: ["default", "danger", "info", "primary", "success", "warning"]
        }, t.defaultI18n = {
            location: "https://formbuilder.online/assets/lang/"
        }, t.config = {}
    }, function(e, t, r) {
        function o(e) {
            var t = void 0;
            return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0), t
        }
        t.__esModule = !0;
        var n = {
            loaded: o("loaded"),
            viewData: o("viewData"),
            userDeclined: o("userDeclined"),
            modalClosed: o("modalClosed"),
            modalOpened: o("modalOpened"),
            formSaved: o("formSaved"),
            fieldAdded: o("fieldAdded"),
            fieldRemoved: o("fieldRemoved"),
            fieldRendered: o("fieldRendered"),
            fieldEditOpened: o("fieldEditOpened"),
            fieldEditClosed: o("fieldEditClosed")
        };
        t.default = n
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(3));
        var n = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.configure = function() {
                this.js = "//cdn.quilljs.com/1.2.4/quill.js", this.css = "//cdn.quilljs.com/1.2.4/quill.snow.css"
            }, t.prototype.build = function() {
                var e = this.config,
                    t = (e.value, function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(e, ["value"]));
                return this.field = this.markup("div", null, t), this.field
            }, t.prototype.onRender = function(e) {
                var t = this.config.value || "",
                    r = window.Quill.import("delta");
                window.fbEditors.quill[this.id] = {};
                var o = window.fbEditors.quill[this.id];
                o.instance = new window.Quill(this.field, {
                    modules: {
                        toolbar: [
                            [{
                                header: [1, 2, !1]
                            }],
                            ["bold", "italic", "underline"],
                            ["code-block"]
                        ]
                    },
                    placeholder: this.config.placeholder || "",
                    theme: "snow"
                }), o.data = new r, t && o.instance.setContents(window.JSON.parse(this.parsedHtml(t))), o.instance.on("text-change", function(e) {
                    o.data = o.data.compose(e)
                })
            }, t
        }(o.default);
        t.default = n, o.default.register("quill", n, "textarea")
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(3));
        var n = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.configure = function() {
                if (this.js = ["https://cdn.tinymce.com/4/tinymce.min.js"], this.classConfig.js) {
                    var e = this.classConfig.js;
                    Array.isArray(e) || (e = new Array(e)), this.js.concat(e), delete this.classConfig.js
                }
                this.classConfig.css && (this.css = this.classConfig.css), this.editorOptions = {
                    height: 250,
                    paste_data_images: !0,
                    plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste code"],
                    toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table"
                }
            }, t.prototype.build = function() {
                var e = this.config,
                    t = e.value,
                    r = void 0 === t ? "" : t,
                    o = function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(e, ["value"]);
                return this.field = this.markup("textarea", this.parsedHtml(r), o), o.disabled && (this.editorOptions.readonly = !0), this.field
            }, t.prototype.onRender = function(e) {
                window.tinymce.editors[this.id] && window.tinymce.editors[this.id].remove();
                var t = jQuery.extend(this.editorOptions, this.classConfig);
                t.target = this.field, window.tinymce.init(t), this.config.userData && window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0]))
            }, t
        }(o.default);
        t.default = n, o.default.register("tinymce", n, "textarea")
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o(6));
        var a = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.configure = function() {
                var t = this;
                this.js = this.classConfig.js || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js", this.css = [this.classConfig.css || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css", {
                    type: "inline",
                    id: "fineuploader-inline",
                    style: "\n          .qq-uploader .qq-error-message {\n            position: absolute;\n            left: 20%;\n            top: 20px;\n            width: 60%;\n            color: #a94442;\n            background: #f2dede;\n            border: solid 1px #ebccd1;\n            padding: 15px;\n            line-height: 1.5em;\n            text-align: center;\n            z-index: 99999;\n          }\n          .qq-uploader .qq-error-message span {\n            display: inline-block;\n            text-align: left;\n          }"
                }], this.handler = this.classConfig.handler || "/upload", ["js", "css", "handler"].forEach(function(e) {
                    return delete t.classConfig[e]
                });
                var r = this.classConfig.template || '\n      <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">\n        <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">\n          <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>\n        </div>\n        <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>\n          <span class="qq-upload-drop-area-text-selector"></span>\n        </div>\n        <div class="qq-upload-button-selector qq-upload-button">\n          <div>Upload a file</div>\n        </div>\n        <span class="qq-drop-processing-selector qq-drop-processing">\n          <span>Processing dropped files...</span>\n          <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>\n        </span>\n        <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">\n          <li>\n            <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>\n            <div class="qq-progress-bar-container-selector qq-progress-bar-container">\n              <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>\n            </div>\n            <span class="qq-upload-spinner-selector qq-upload-spinner"></span>\n            <div class="qq-thumbnail-wrapper">\n              <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>\n            </div>\n            <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>\n            <button type="button" class="qq-upload-retry-selector qq-upload-retry">\n              <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>\n              Retry\n            </button>\n            <div class="qq-file-info">\n              <div class="qq-file-name">\n                <span class="qq-upload-file-selector qq-upload-file"></span>\n                <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>\n              </div>\n              <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">\n              <span class="qq-upload-size-selector qq-upload-size"></span>\n              <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">\n                <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">\n                <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">\n                <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <dialog class="qq-alert-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Close</button>\n          </div>\n        </dialog>\n        <dialog class="qq-confirm-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">No</button>\n            <button type="button" class="qq-ok-button-selector">Yes</button>\n          </div>\n        </dialog>\n        <dialog class="qq-prompt-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <input type="text">\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Cancel</button>\n            <button type="button" class="qq-ok-button-selector">Ok</button>\n          </div>\n        </dialog>\n      </div>';
                this.fineTemplate = e("<div/>").attr("id", "qq-template").html(r)
            }, r.prototype.build = function() {
                return this.input = this.markup("input", null, {
                    type: "hidden",
                    name: this.config.name,
                    id: this.config.name
                }), this.wrapper = this.markup("div", "", {
                    id: this.config.name + "-wrapper"
                }), [this.input, this.wrapper]
            }, r.prototype.onRender = function() {
                var t = e(this.wrapper),
                    r = e(this.input),
                    o = jQuery.extend(!0, {
                        request: {
                            endpoint: this.handler
                        },
                        deleteFile: {
                            enabled: !0,
                            endpoint: this.handler
                        },
                        chunking: {
                            enabled: !0,
                            concurrent: {
                                enabled: !0
                            },
                            success: {
                                endpoint: this.handler + (-1 == this.handler.indexOf("?") ? "?" : "&") + "done"
                            }
                        },
                        resume: {
                            enabled: !0
                        },
                        retry: {
                            enableAuto: !0,
                            showButton: !0
                        },
                        callbacks: {
                            onError: function(r, o, n, i) {
                                "." != n.slice(-1) && (n += ".");
                                var a = e("<div />").addClass("qq-error-message").html("<span>Error processing upload: <b>" + o + "</b>.<br />Reason: " + n + "</span>").prependTo(t.find(".qq-uploader"));
                                setTimeout(function() {
                                    a.fadeOut(function() {
                                        a.remove()
                                    })
                                }, 6e3)
                            },
                            onStatusChange: function(e, o, n) {
                                var i = [],
                                    a = t.fineUploader("getUploads"),
                                    l = Array.isArray(a),
                                    s = 0;
                                for (a = l ? a : a[Symbol.iterator]();;) {
                                    var u;
                                    if (l) {
                                        if (s >= a.length) break;
                                        u = a[s++]
                                    } else {
                                        if ((s = a.next()).done) break;
                                        u = s.value
                                    }
                                    var f = u;
                                    "upload successful" == f.status && i.push(f.name)
                                }
                                r.val(i.join(", "))
                            }
                        },
                        template: this.fineTemplate
                    }, this.classConfig);
                t.fineUploader(o)
            }, n(r, null, [{
                key: "definition",
                get: function() {
                    return {
                        i18n: {
                            default: "Fine Uploader"
                        }
                    }
                }
            }]), r
        }(i.default);
        r.default = a, i.default.register("file", i.default, "file"), i.default.register("fineuploader", a, "file")
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o(0));

        function a(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }
        var l = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.build = function() {
                var e = [],
                    t = this.config,
                    r = t.values,
                    o = t.value,
                    n = t.placeholder,
                    i = t.type,
                    l = t.inline,
                    s = t.other,
                    u = t.toggle,
                    f = a(t, ["values", "value", "placeholder", "type", "inline", "other", "toggle"]),
                    c = i.replace("-group", ""),
                    d = "select" === i;
                if ((f.multiple || "checkbox-group" === i) && (f.name = f.name + "[]"), "checkbox-group" === i && f.required && (this.onRender = this.groupRequired), delete f.title, r) {
                    n && d && e.push(this.markup("option", n, {
                        disabled: null,
                        selected: null
                    }));
                    for (var p = 0; p < r.length; p++) {
                        var m = r[p];
                        "string" == typeof m && (m = {
                            label: m,
                            value: m
                        });
                        var b = m,
                            h = b.label,
                            g = void 0 === h ? "" : h;
                        if ((q = a(b, ["label"])).id = f.id + "-" + p, q.selected && !n || delete q.selected, void 0 !== o && q.value === o && (q.selected = !0), d) {
                            var v = this.markup("option", document.createTextNode(g), q);
                            e.push(v)
                        } else {
                            var y = [g],
                                w = "fb-" + c;
                            l && (w += "-inline"), q.type = c, q.selected && (q.checked = "checked", delete q.selected);
                            var x = this.markup("input", null, Object.assign({}, f, q)),
                                A = {
                                    for: q.id
                                },
                                O = [x, this.markup("label", y, A)];
                            u && (A.className = "kc-toggle", y.unshift(x, this.markup("span")), O = this.markup("label", y, A));
                            var k = this.markup("div", O, {
                                className: w
                            });
                            e.push(k)
                        }
                    }
                    if (!d && s) {
                        var q, E = {
                                id: f.id + "-other",
                                className: f.className + " other-option",
                                value: ""
                            },
                            j = "fb-" + c;
                        l && (j += "-inline"), (q = Object.assign({}, f, E)).type = c;
                        var C = {
                                type: "text",
                                events: {
                                    input: function(e) {
                                        var t = e.target;
                                        t.parentElement.previousElementSibling.value = t.value
                                    }
                                },
                                id: E.id + "-value",
                                className: "other-val"
                            },
                            S = this.markup("input", null, q),
                            T = [document.createTextNode("Other"), this.markup("input", null, C)],
                            L = this.markup("label", T, {
                                for: q.id
                            }),
                            N = this.markup("div", [S, L], {
                                className: j
                            });
                        e.push(N)
                    }
                }
                return this.dom = "select" == i ? this.markup(c, e, f) : this.markup("div", e, {
                    className: i
                }), this.dom
            }, r.prototype.groupRequired = function() {
                for (var e = this.element.getElementsByTagName("input"), t = function(e, t) {
                        [].forEach.call(e, function(e) {
                            t ? e.removeAttribute("required") : e.setAttribute("required", "required"),
                                function(e, t) {
                                    var r = i.default.mi18n("minSelectionRequired", 1);
                                    t ? e.setCustomValidity("") : e.setCustomValidity(r)
                                }(e, t)
                        })
                    }, r = function() {
                        var r = [].some.call(e, function(e) {
                            return e.checked
                        });
                        t(e, r)
                    }, o = e.length - 1; o >= 0; o--) e[o].addEventListener("change", r);
                r()
            }, r.prototype.onRender = function() {
                if (this.config.userData) {
                    var t = this.config.userData.slice();
                    "select" === this.config.type ? e(this.dom).val(t).prop("selected", !0) : this.config.type.endsWith("-group") && this.dom.querySelectorAll("input").forEach(function(e) {
                        if (!e.classList.contains("other-val")) {
                            for (var r = 0; r < t.length; r++)
                                if (e.value === t[r]) {
                                    e.setAttribute("checked", !0), t.splice(r, 1);
                                    break
                                }
                            if (e.id.endsWith("-other")) {
                                var o = document.getElementById(e.id + "-value");
                                if (0 === t.length) return;
                                e.setAttribute("checked", !0), o.value = e.value = t[0], o.style.display = "inline-block"
                            }
                        }
                    })
                }
            }, n(r, null, [{
                key: "definition",
                get: function() {
                    return {
                        inactive: ["checkbox"],
                        mi18n: {
                            minSelectionRequired: "minSelectionRequired"
                        }
                    }
                }
            }]), r
        }(i.default);
        r.default = l, i.default.register(["select", "checkbox-group", "radio-group", "checkbox"], l)
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = i(r(0)),
            n = i(r(1));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.build = function() {
                var e = this.config,
                    t = e.type,
                    r = function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(e, ["type"]),
                    o = t,
                    i = {
                        paragraph: "p",
                        header: this.subtype
                    };
                return i[t] && (o = i[t]), {
                    field: this.markup(o, n.default.parsedHtml(this.label), r),
                    layout: "noLabel"
                }
            }, t
        }(o.default);
        t.default = a, o.default.register(["paragraph", "header"], a), o.default.register(["p", "address", "blockquote", "canvas", "output"], a, "paragraph"), o.default.register(["h1", "h2", "h3", "h4"], a, "header")
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o(0));
        var i = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.build = function() {
                return {
                    field: this.markup("input", null, this.config),
                    layout: "hidden"
                }
            }, r.prototype.onRender = function() {
                this.config.userData && e("#" + this.config.name).val(this.config.userData[0])
            }, r
        }(n.default);
        r.default = i, n.default.register("hidden", i)
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(0));
        var n = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.build = function() {
                return {
                    field: this.markup("button", this.label, this.config),
                    layout: "noLabel"
                }
            }, t
        }(o.default);
        t.default = n, o.default.register("button", n), o.default.register(["button", "submit", "reset"], n, "button")
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, r, o) {
                    return r && e(t.prototype, r), o && e(t, o), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o(0)),
            a = o(5);
        var l = function(t) {
            function r() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, t), r.prototype.build = function() {
                var e = this,
                    t = this.config,
                    r = t.values,
                    o = t.type,
                    n = function(e, t) {
                        var r = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
                        return r
                    }(t, ["values", "type"]),
                    i = function(t) {
                        var r = t.target.nextSibling.nextSibling,
                            o = t.target.nextSibling,
                            n = e.getActiveOption(r),
                            i = new Map([
                                [38, function() {
                                    var t = e.getPreviousOption(n);
                                    t && e.selectOption(r, t)
                                }],
                                [40, function() {
                                    var t = e.getNextOption(n);
                                    t && e.selectOption(r, t)
                                }],
                                [13, function() {
                                    n ? (t.target.value = n.innerHTML, o.value = n.getAttribute("value"), "none" === r.style.display ? e.showList(r, n) : e.hideList(r)) : e.config.requireValidOption && (e.isOptionValid(r, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "")), t.preventDefault()
                                }],
                                [27, function() {
                                    e.hideList(r)
                                }]
                            ]).get(t.keyCode);
                        return i || (i = function() {
                            return !1
                        }), i()
                    },
                    l = {
                        focus: function(t) {
                            var r = t.target.nextSibling.nextSibling,
                                o = (0, a.filter)(r.querySelectorAll("li"), t.target.value);
                            if (t.target.addEventListener("keydown", i), t.target.value.length > 0) {
                                var n = o.length > 0 ? o[o.length - 1] : null;
                                e.showList(r, n)
                            }
                        },
                        blur: function(t) {
                            if (t.target.removeEventListener("keydown", i), setTimeout(function() {
                                    t.target.nextSibling.nextSibling.style.display = "none"
                                }, 200), e.config.requireValidOption) {
                                var r = t.target.nextSibling.nextSibling;
                                e.isOptionValid(r, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "")
                            }
                        },
                        input: function(t) {
                            var r = t.target.nextSibling.nextSibling;
                            t.target.nextSibling.value = t.target.value;
                            var o = (0, a.filter)(r.querySelectorAll("li"), t.target.value);
                            if (0 == o.length) e.hideList(r);
                            else {
                                var n = e.getActiveOption(r);
                                n || (n = o[o.length - 1]), e.showList(r, n)
                            }
                        }
                    },
                    s = Object.assign({}, n, {
                        id: n.id + "-input",
                        autocomplete: "off",
                        events: l
                    }),
                    u = Object.assign({}, n, {
                        type: "hidden"
                    });
                delete s.name;
                var f = [this.markup("input", null, s), this.markup("input", null, u)],
                    c = r.map(function(t) {
                        var r = t.label,
                            o = {
                                events: {
                                    click: function(r) {
                                        var o = r.target.parentElement,
                                            n = o.previousSibling.previousSibling;
                                        n.value = t.label, n.nextSibling.value = t.value, e.hideList(o)
                                    }
                                },
                                value: t.value
                            };
                        return e.markup("li", r, o)
                    });
                return f.push(this.markup("ul", c, {
                    id: n.id + "-list",
                    className: "fb-" + o + "-list"
                })), f
            }, r.prototype.hideList = function(e) {
                this.selectOption(e, null), e.style.display = "none"
            }, r.prototype.showList = function(e, t) {
                this.selectOption(e, t), e.style.display = "block", e.style.width = e.parentElement.offsetWidth + "px"
            }, r.prototype.getActiveOption = function(e) {
                var t = e.getElementsByClassName("active-option")[0];
                return t && "none" !== t.style.display ? t : null
            }, r.prototype.getPreviousOption = function(e) {
                var t = e;
                do {
                    t = t ? t.previousSibling : null
                } while (null != t && "none" === t.style.display);
                return t
            }, r.prototype.getNextOption = function(e) {
                var t = e;
                do {
                    t = t ? t.nextSibling : null
                } while (null != t && "none" === t.style.display);
                return t
            }, r.prototype.selectOption = function(e, t) {
                for (var r = e.querySelectorAll("li"), o = 0; o < r.length; o++) r[o].classList.remove("active-option");
                t && t.classList.add("active-option")
            }, r.prototype.isOptionValid = function(e, t) {
                for (var r = e.querySelectorAll("li"), o = !1, n = 0; n < r.length; n++)
                    if (r[n].innerHTML === t) {
                        o = !0;
                        break
                    }
                return o
            }, r.prototype.onRender = function(t) {
                if (this.config.userData) {
                    var r = e("#" + this.config.name),
                        o = r.next(),
                        n = this.config.userData[0],
                        i = null;
                    if (o.find("li").each(function() {
                            e(this).attr("value") !== n || (i = e(this).get(0))
                        }), null === i) return this.config.requireValidOption ? void 0 : void r.prev().val(this.config.userData[0]);
                    r.prev().val(i.innerHTML), r.val(i.getAttribute("value"));
                    var a = r.next().get(0);
                    "none" === a.style.display ? this.showList(a, i) : this.hideList(a)
                }
            }, n(r, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            requireValidOption: "requireValidOption"
                        }
                    }
                }
            }]), r
        }(i.default);
        r.default = l, i.default.register("autocomplete", l)
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = m(r(19)),
            n = m(r(18)),
            i = m(r(4)),
            a = m(r(17)),
            l = m(r(16)),
            s = m(r(15)),
            u = m(r(6)),
            f = m(r(14)),
            c = m(r(3)),
            d = m(r(13)),
            p = m(r(12));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            controlAutocomplete: o.default,
            controlButton: n.default,
            controlCustom: i.default,
            controlHidden: a.default,
            controlParagraph: l.default,
            controlSelect: s.default,
            controlText: u.default,
            controlFineUploader: f.default,
            controlTextarea: c.default,
            controlTinymce: d.default,
            controlQuill: p.default
        }
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(1));
        var i = function() {
            function e(t, r) {
                var o = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.preview = r, this.templates = {
                    label: null,
                    help: null,
                    default: function(e, t, r, n) {
                        r && t.appendChild(r);
                        var i = n.id ? "fb-" + n.type + " form-group field-" + n.id : "";
                        if (n.className) {
                            var a = n.className.split(" ").filter(function(e) {
                                return /^col-(xs|sm|md|lg)-([^\s]+)/.test(e) || e.startsWith("row-")
                            });
                            if (a && a.length > 0) {
                                i += " " + a.join(" ");
                                for (var l = 0; l < a.length; l++) {
                                    var s = a[l];
                                    e.classList.remove(s)
                                }
                            }
                        }
                        return o.markup("div", [t, e], {
                            className: i
                        })
                    },
                    noLabel: function(e, t, r, n) {
                        var i = n.id ? "fb-" + n.type + " form-group field-" + n.id : "";
                        return o.markup("div", e, {
                            className: i
                        })
                    },
                    hidden: function(e, t, r, o) {
                        return e
                    }
                }, t && (this.templates = jQuery.extend(this.templates, t)), this.configure()
            }
            return e.prototype.configure = function() {}, e.prototype.build = function(e, t, r) {
                this.preview && (t.name ? t.name = t.name + "-preview" : t.name = n.default.nameAttr(t) + "-preview"), t.id = t.name, this.data = jQuery.extend({}, t);
                var i = new e(t, this.preview),
                    a = i.build();
                "object" === (void 0 === a ? "undefined" : o(a)) && a.field || (a = {
                    field: a
                });
                var l = this.label(),
                    s = this.help(),
                    u = void 0;
                u = r && this.isTemplate(r) ? r : this.isTemplate(a.layout) ? a.layout : "default";
                var f = this.processTemplate(u, a.field, l, s);
                return i.on("prerender")(f), f.addEventListener("fieldRendered", i.on("render")), f
            }, e.prototype.label = function() {
                var e = this.data.label || "",
                    t = [n.default.parsedHtml(e)];
                return this.data.required && t.push(this.markup("span", "*", {
                    className: "fb-required"
                })), this.isTemplate("label") ? this.processTemplate("label", t) : this.markup("label", t, {
                    for: this.data.id,
                    className: "fb-" + this.data.type + "-label"
                })
            }, e.prototype.help = function() {
                return this.data.description ? this.isTemplate("help") ? this.processTemplate("help", this.data.description) : this.markup("span", "?", {
                    className: "tooltip-element",
                    tooltip: this.data.description
                }) : null
            }, e.prototype.isTemplate = function(e) {
                return "function" == typeof this.templates[e]
            }, e.prototype.processTemplate = function(e) {
                for (var t, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) o[n - 1] = arguments[n];
                var i = (t = this.templates)[e].apply(t, o.concat([this.data]));
                return i.jquery && (i = i[0]), i
            }, e.prototype.markup = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return n.default.markup(e, t, r)
            }, e
        }();
        t.default = i
    }, function(e, t) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    }, function(e, t, r) {
        t.__esModule = !0;
        var o = t.instanceData = {};
        t.Data = function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.formData = {}, this.formID = t, this.layout = "", o[t] = this
        }, t.availablefields = {}
    }, function(e, t, r) {
        var o = r(25).Symbol;
        e.exports = o
    }, function(e, t, r) {
        var o = r(42),
            n = "object" == typeof self && self && self.Object === Object && self,
            i = o || n || Function("return this")();
        e.exports = i
    }, , , , , , , , function(e, t, r) {
        t.__esModule = !0, r(20);
        var o = l(r(0)),
            n = l(r(4)),
            i = r(1),
            a = r(5);

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function() {
            function e(t, r) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.opts = t, this.dom = r.controls, this.custom = n.default, this.getClass = o.default.getClass, this.getRegistered = o.default.getRegistered, o.default.controlConfig = t.controlConfig || {}, this.init()
            }
            return e.prototype.init = function() {
                this.setupControls(), this.appendControls()
            }, e.prototype.setupControls = function() {
                var e = this,
                    t = this.opts;
                o.default.loadCustom(t.controls), Object.keys(t.fields).length && n.default.register(t.templates, t.fields);
                var r = o.default.getRegistered();
                this.registeredControls = r;
                var a = n.default.getRegistered();
                a && jQuery.merge(r, a), t.sortableControls && this.dom.classList.add("sort-enabled"), this.controlList = [], this.allControls = {};
                for (var l = 0; l < r.length; l++) {
                    var s = r[l],
                        u = n.default.lookup(s),
                        f = void 0;
                    if (u) f = u.class;
                    else if (u = {}, !(f = o.default.getClass(s)) || !f.active(s)) continue;
                    var c = u.icon || f.icon(s),
                        d = u.label || f.label(s),
                        p = c ? "" : u.iconClassName || "icon-" + s.replace(/-[\d]{4}$/, "");
                    c && (d = '<span class="control-icon">' + c + "</span>" + d);
                    var m = (0, i.markup)("li", (0, i.markup)("span", d), {
                        className: p + " input-control input-control-" + l
                    });
                    m.dataset.type = s, this.controlList.push(s), this.allControls[s] = m
                }
                t.inputSets.length && t.inputSets.forEach(function(t, r) {
                    var o = t.name,
                        n = t.label;
                    o = o || (0, i.hyphenCase)(n), t.icon && (n = '<span class="control-icon">' + t.icon + "</span>" + n);
                    var a = (0, i.markup)("li", n, {
                        className: "input-set-control input-set-" + r
                    });
                    a.dataset.type = o, e.controlList.push(o), e.allControls[o] = a
                })
            }, e.prototype.orderFields = function(e) {
                var t = this.opts,
                    r = t.controlOrder.concat(e),
                    o = void 0;
                return window.sessionStorage && (t.sortableControls ? o = window.sessionStorage.getItem("fieldOrder") : window.sessionStorage.removeItem("fieldOrder")), o ? (o = window.JSON.parse(o), o = (0, i.unique)(o.concat(e)), o = Object.keys(o).map(function(e) {
                    return o[e]
                })) : o = (0, i.unique)(r), o.forEach(function(e) {
                    var t = new RegExp("-[\\d]{4}$");
                    if (e.match(t)) {
                        var r = o.indexOf(e.replace(t, "")); - 1 !== r && (o.splice(o.indexOf(e), 1), o.splice(r + 1, o.indexOf(e), e))
                    }
                }), t.disableFields.length && (o = o.filter(function(e) {
                    return -1 == t.disableFields.indexOf(e)
                })), o.filter(Boolean)
            }, e.prototype.appendControls = function() {
                var e = this;
                (0, a.empty)(this.dom), this.orderFields(this.controlList).forEach(function(t) {
                    var r = e.allControls[t];
                    r && e.dom.appendChild(r)
                })
            }, e
        }();
        t.default = s
    }, function(t, r, o) {
        r.__esModule = !0;
        var n = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                !o && l.return && l.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return r
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            i = p(o(2)),
            a = o(5),
            l = o(23),
            s = o(1),
            u = p(o(11)),
            f = o(10),
            c = p(o(0)),
            d = p(o(4));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function m(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }
        var b = function() {
            function t(e, r, o) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.data = l.instanceData[e], this.d = a.instanceDom[e], this.doCancel = !1, this.layout = r, this.handleKeyDown = this.handleKeyDown.bind(this), this.formBuilder = o
            }
            return t.prototype.startMoving = function(e, t) {
                t.item.show().addClass("moving"), this.doCancel = !0, this.from = t.item.parent()
            }, t.prototype.stopMoving = function(t, r) {
                r.item.removeClass("moving"), this.doCancel && (r.sender && e(r.sender).sortable("cancel"), this.from.sortable("cancel")), this.save(), this.doCancel = !1
            }, t.prototype.beforeStop = function(e, t) {
                var r = f.config.opts,
                    o = this.d.stage.childNodes.length - 1,
                    n = [];
                this.stopIndex = t.placeholder.index() - 1, !r.sortableControls && t.item.parent().hasClass("frmb-control") && n.push(!0), r.prepend && n.push(0 === this.stopIndex), r.append && n.push(this.stopIndex + 1 === o), this.doCancel = n.some(function(e) {
                    return !0 === e
                })
            }, t.prototype.getTypes = function(t) {
                var r = {
                        type: t.attr("type")
                    },
                    o = e(".fld-subtype", t).val();
                return o !== r.type && (r.subtype = o), r
            }, t.prototype.fieldOptionData = function(t) {
                var r = [],
                    o = e(".sortable-options li", t);
                return o.each(function(t) {
                    var n = e(o[t]),
                        i = e(".option-selected", n).is(":checked"),
                        a = {
                            label: e(".option-label", n).val(),
                            value: e(".option-value", n).val()
                        };
                    i && (a.selected = i), r.push(a)
                }), r
            }, t.prototype.xmlSave = function(e) {
                var t = this.prepData(e),
                    r = new XMLSerializer,
                    o = ["<fields>"];
                t.forEach(function(e) {
                    var t = e.values,
                        r = m(e, ["values"]),
                        n = ["<field " + (0, s.xmlAttrString)(r) + ">"];
                    if (a.optionFields.includes(e.type)) {
                        var i = t.map(function(e) {
                            return (0, s.markup)("option", e.label, e).outerHTML
                        });
                        n = n.concat(i)
                    }
                    n.push("</field>"), o.push(n)
                }), o.push("</fields>");
                var n = (0, s.markup)("form-template", (0, s.flattenArray)(o).join(""));
                return r.serializeToString(n)
            }, t.prototype.prepData = function(t) {
                var r = [],
                    o = this.d,
                    n = this;
                return 0 !== t.childNodes.length && (0, s.forEach)(t.childNodes, function(t, i) {
                    var a = e(i);
                    if (!a.hasClass("disabled-field")) {
                        var l = n.getTypes(a),
                            u = e(".roles-field:checked", i),
                            f = u.map(function(e) {
                                return u[e].value
                            }).get();
                        if ((l = Object.assign({}, l, n.getAttrVals(i))).subtype)
                            if ("quill" === l.subtype) {
                                var c = l.name + "-preview";
                                if (window.fbEditors.quill[c]) {
                                    var d = window.fbEditors.quill[c].instance.getContents();
                                    l.value = window.JSON.stringify(d.ops)
                                }
                            } else if ("tinymce" === l.subtype && window.tinymce) {
                            var p = l.name + "-preview";
                            if (window.tinymce.editors[p]) {
                                var m = window.tinymce.editors[p];
                                l.value = m.getContent()
                            }
                        }
                        if (f.length && (l.role = f.join(",")), l.className = l.className || l.class, l.className) {
                            var b = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(l.className);
                            b && (l.style = b[1])
                        }(l = (0, s.trimObj)(l)).type && l.type.match(o.optionFieldsRegEx) && (l.values = n.fieldOptionData(a)), r.push(l)
                    }
                }), r
            }, t.prototype.getData = function(e) {
                var t = this.data;
                if (e || (e = f.config.opts.formData), !e) return !1;
                var r = {
                    xml: function(e) {
                        return Array.isArray(e) ? e : (0, s.parseXML)(e)
                    },
                    json: function(e) {
                        return "string" == typeof e ? window.JSON.parse(e) : e
                    }
                };
                return t.formData = r[f.config.opts.dataType](e) || [], t.formData
            }, t.prototype.save = function(e) {
                var t = this,
                    r = this.data,
                    o = this.d.stage,
                    n = {
                        xml: function(e) {
                            return t.xmlSave(o, e)
                        },
                        json: function(e) {
                            return window.JSON.stringify(t.prepData(o), null, e && "  ")
                        }
                    };
                return r.formData = n[f.config.opts.dataType](e), document.dispatchEvent(u.default.formSaved), r.formData
            }, t.prototype.incrementId = function(e) {
                var t = e.lastIndexOf("-"),
                    r = parseInt(e.substring(t + 1)) + 1;
                return e.substring(0, t) + "-" + r
            }, t.prototype.getAttrVals = function(t) {
                var r = Object.create(null),
                    o = t.querySelectorAll('[class*="fld-"]');
                return (0, s.forEach)(o, function(t) {
                    var i = o[t],
                        a = (0, s.camelCase)(i.getAttribute("name")),
                        l = [
                            [i.attributes.contenteditable, function() {
                                return "xml" === f.config.opts.dataType ? (0, s.escapeHtml)(i.innerHTML) : i.innerHTML
                            }],
                            ["checkbox" === i.type, function() {
                                return i.checked
                            }],
                            [i.attributes.multiple, function() {
                                return e(i).val()
                            }],
                            [!0, function() {
                                return i.value
                            }]
                        ].find(function(e) {
                            return !!n(e, 1)[0]
                        })[1]();
                    r[a] = l
                }), r
            }, t.prototype.updatePreview = function(t) {
                var r = this.d,
                    o = t.attr("class"),
                    n = t[0];
                if (!o.includes("input-control")) {
                    var i = t.attr("type"),
                        l = e(".prev-holder", n),
                        f = Object.assign({}, this.getAttrVals(n, f), {
                            type: i
                        }),
                        p = e(".btn-style", n).val();
                    p && (f.style = p), i.match(r.optionFieldsRegEx) && (f.values = [], f.multiple = e('[name="multiple"]', n).is(":checked"), e(".sortable-options li", n).each(function(t, r) {
                        var o = {
                            selected: e(".option-selected", r).is(":checked"),
                            value: e(".option-value", r).val(),
                            label: e(".option-label", r).val()
                        };
                        f.values.push(o)
                    })), (f = (0, s.trimObj)(f)).className = this.classNames(n, f), t.data("fieldData", f);
                    var m = d.default.lookup(f.type),
                        b = m ? m.class : c.default.getClass(f.type, f.subtype),
                        h = this.layout.build(b, f);
                    (0, a.empty)(l[0]), l[0].appendChild(h), h.dispatchEvent(u.default.fieldRendered)
                }
            }, t.prototype.disabledTT = function(e) {
                var t = e.querySelectorAll(".disabled-field");
                (0, s.forEach)(t, function(e) {
                    var r = t[e],
                        o = i.default.get("fieldNonEditable");
                    if (o) {
                        var n = (0, s.markup)("p", o, {
                            className: "frmb-tt"
                        });
                        r.appendChild(n), r.addEventListener("mousemove", function(e) {
                            return function(e, t) {
                                var r = t.field.getBoundingClientRect(),
                                    o = e.clientX - r.left - 21,
                                    n = e.clientY - r.top - t.tt.offsetHeight - 12;
                                t.tt.style.transform = "translate(" + o + "px, " + n + "px)"
                            }(e, {
                                tt: n,
                                field: r
                            })
                        })
                    }
                })
            }, t.prototype.classNames = function(t, r) {
                var o = t.querySelector(".fld-className");
                if (o) {
                    var n = r.type,
                        i = r.style,
                        a = o.multiple ? e(o).val() : o.value.split(" "),
                        l = {
                            button: "btn",
                            submit: "btn"
                        }[n];
                    if (l) {
                        if (i) {
                            for (var u = 0; u < a.length; u++) {
                                var f = new RegExp("(?:^|\\s)" + l + "-(.*?)(?:\\s|$)+", "g");
                                a[u].match(f) && a.splice(u, 1)
                            }
                            a.push(l + "-" + i)
                        }
                        a.push(l)
                    }
                    return (0, s.unique)(a).join(" ").trim()
                }
            }, t.prototype.closeConfirm = function(e, t) {
                e || (e = document.getElementsByClassName("form-builder-overlay")[0]), e && (0, a.remove)(e), t || (t = document.getElementsByClassName("form-builder-dialog")[0]), t && (0, a.remove)(t), document.removeEventListener("keydown", this.handleKeyDown, !1), document.dispatchEvent(u.default.modalClosed)
            }, t.prototype.handleKeyDown = function(e) {
                27 === (e.keyCode || e.which) && (e.preventDefault(), this.closeConfirm.call(this))
            }, t.prototype.editorLayout = function(e) {
                return {
                    left: {
                        stage: "pull-right",
                        controls: "pull-left"
                    },
                    right: {
                        stage: "pull-left",
                        controls: "pull-right"
                    }
                }[e] || ""
            }, t.prototype.showOverlay = function() {
                var e = this,
                    t = (0, s.markup)("div", null, {
                        className: "form-builder-overlay"
                    });
                return document.body.appendChild(t), t.classList.add("visible"), t.addEventListener("click", function(t) {
                    var r = t.target;
                    return e.closeConfirm(r)
                }, !1), document.addEventListener("keydown", this.handleKeyDown, !1), t
            }, t.prototype.confirm = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    n = this,
                    a = i.default.current,
                    l = n.showOverlay(),
                    u = (0, s.markup)("button", a.yes, {
                        className: "yes btn btn-success btn-sm"
                    }),
                    f = (0, s.markup)("button", a.no, {
                        className: "no btn btn-danger btn-sm"
                    });
                f.onclick = function() {
                    n.closeConfirm(l)
                }, u.onclick = function() {
                    t(), n.closeConfirm(l)
                };
                var c = (0, s.markup)("div", [f, u], {
                    className: "button-wrap"
                });
                o = "form-builder-dialog " + o;
                var d = (0, s.markup)("div", [e, c], {
                    className: o
                });
                if (r) d.classList.add("positioned");
                else {
                    var p = document.documentElement;
                    r = {
                        pageX: Math.max(p.clientWidth, window.innerWidth || 0) / 2,
                        pageY: Math.max(p.clientHeight, window.innerHeight || 0) / 2
                    }, d.style.position = "fixed"
                }
                return d.style.left = r.pageX + "px", d.style.top = r.pageY + "px", document.body.appendChild(d), u.focus(), d
            }, t.prototype.dialog = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = document.documentElement.clientWidth,
                    n = document.documentElement.clientHeight;
                this.showOverlay(), r = "form-builder-dialog " + r;
                var i = (0, s.markup)("div", e, {
                    className: r
                });
                return t ? i.classList.add("positioned") : (t = {
                    pageX: Math.max(o, window.innerWidth || 0) / 2,
                    pageY: Math.max(n, window.innerHeight || 0) / 2
                }, i.style.position = "fixed"), i.style.left = t.pageX + "px", i.style.top = t.pageY + "px", document.body.appendChild(i), document.dispatchEvent(u.default.modalOpened), -1 !== r.indexOf("data-dialog") && document.dispatchEvent(u.default.viewData), i
            }, t.prototype.confirmRemoveAll = function(t) {
                var r = this,
                    o = t.target.id.match(/frmb-\d{13}/)[0],
                    n = document.getElementById(o),
                    a = i.default.current,
                    l = e("li.form-field", n),
                    s = t.target.getBoundingClientRect(),
                    u = document.body.getBoundingClientRect(),
                    c = {
                        pageX: s.left + s.width / 2,
                        pageY: s.top - u.top - 12
                    };
                l.length ? r.confirm(a.clearAllMessage, function() {
                    r.removeAllFields.call(r, n), f.config.opts.notify.success(a.allFieldsRemoved), f.config.opts.onClearAll()
                }, c) : r.dialog(a.noFieldsToClear, c)
            }, t.prototype.removeAllFields = function(e) {
                var t = this,
                    r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = i.default.current,
                    n = f.config.opts,
                    l = e.querySelectorAll("li.form-field"),
                    u = [];
                if (!l.length) return !1;
                if (n.prepend && u.push(!0), n.append && u.push(!0), u.some(function(e) {
                        return !0 === e
                    }) || (e.classList.add("empty"), e.dataset.content = o.getStarted), r) {
                    e.classList.add("removing");
                    var c = 0;
                    (0, s.forEach)(l, function(e) {
                        return c += l[e].offsetHeight + 3
                    }), l[0].style.marginTop = -c + "px", setTimeout(function() {
                        (0, a.empty)(e).classList.remove("removing"), t.save()
                    }, 400)
                } else(0, a.empty)(e), this.save()
            }, t.prototype.setFieldOrder = function(t) {
                if (!f.config.opts.sortableControls) return !1;
                var r = window,
                    o = r.sessionStorage,
                    n = r.JSON,
                    i = [];
                return t.children().each(function(t, r) {
                    var o = e(r).data("type");
                    o && i.push(o)
                }), o && o.setItem("fieldOrder", n.stringify(i)), i
            }, t.prototype.closeAllEdit = function() {
                var t = e("> li.editing", this.d.stage),
                    r = e(".toggle-form", this.d.stage),
                    o = e(".frm-holder", t);
                r.removeClass("open"), t.removeClass("editing"), e(".prev-holder", t).show(), o.hide()
            }, t.prototype.toggleEdit = function(t) {
                var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = document.getElementById(t),
                    n = e(".frm-holder", o),
                    i = e(".prev-holder", o);
                o.classList.toggle("editing"), e(".toggle-form", o).toggleClass("open"), r ? (i.slideToggle(250), n.slideToggle(250)) : (i.toggle(), n.toggle()), this.updatePreview(e(o)), o.classList.contains("editing") ? (this.formBuilder.currentEditPanel = n[0], f.config.opts.onOpenFieldEdit(n[0]), document.dispatchEvent(u.default.fieldEditOpened)) : (f.config.opts.onCloseFieldEdit(n[0]), document.dispatchEvent(u.default.fieldEditClosed))
            }, t.prototype.getStyle = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = void 0;
                return window.getComputedStyle ? r = window.getComputedStyle(e, null) : e.currentStyle && (r = e.currentStyle), t ? r[t] : r
            }, t.prototype.stickyControls = function() {
                var t = this.d,
                    r = t.controls,
                    o = t.stage,
                    n = e(r).parent(),
                    i = r.getBoundingClientRect(),
                    a = o.getBoundingClientRect().top;
                e(window).scroll(function(t) {
                    var l = e(t.target).scrollTop(),
                        s = {
                            top: 5,
                            bottom: "auto",
                            right: "auto",
                            left: i.left
                        },
                        u = Object.assign({}, s, f.config.opts.stickyControls.offset);
                    if (l > a) {
                        var c = Object.assign({
                                position: "sticky"
                            }, u),
                            d = r.getBoundingClientRect(),
                            p = o.getBoundingClientRect(),
                            m = d.top + d.height,
                            b = p.top + p.height,
                            h = m === b && d.top > l;
                        m > b && d.top !== p.top && n.css({
                            position: "absolute",
                            top: "auto",
                            bottom: 0,
                            right: 0,
                            left: "auto"
                        }), (m < b || h) && n.css(c)
                    } else r.parentElement.removeAttribute("style")
                })
            }, t.prototype.showData = function() {
                var e = this.getFormData(f.config.opts.dataType, !0);
                "xml" === f.config.opts.dataType && (e = (0, s.escapeHtml)(e));
                var t = (0, s.markup)("code", e, {
                    className: "formData-" + f.config.opts.dataType
                });
                this.dialog((0, s.markup)("pre", t), null, "data-dialog")
            }, t.prototype.removeField = function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
                    o = !1,
                    n = this,
                    a = this.d.stage,
                    l = a.getElementsByClassName("form-field");
                if (!l.length) return f.config.opts.notify.warning("No fields to remove"), !1;
                if (!t) {
                    var s = [].slice.call(l).map(function(e) {
                        return e.id
                    });
                    f.config.opts.notify.warning("fieldID required to remove specific fields."), f.config.opts.notify.warning("Removing last field since no ID was supplied."), f.config.opts.notify.warning("Available IDs: " + s.join(", ")), t = a.lastChild.id
                }
                var c = document.getElementById(t),
                    d = e(c);
                if (!c) return f.config.opts.notify.warning("Field not found"), !1;
                d.slideUp(r, function() {
                    d.removeClass("deleting"), d.remove(), o = !0, n.save(), a.childNodes.length || (a.classList.add("empty"), a.dataset.content = i.default.current.getStarted)
                });
                var p = f.config.opts.typeUserEvents[c.type];
                return p && p.onremove && p.onremove(c), document.dispatchEvent(u.default.fieldRemoved), o
            }, t.prototype.processActionButtons = function(e) {
                var t = e.label,
                    r = e.events,
                    o = m(e, ["label", "events"]),
                    n = t,
                    a = this.data;
                n = n ? i.default.current[n] || n : o.id ? i.default.current[o.id] || (0, s.capitalize)(o.id) : "", o.id ? o.id = a.formID + "-" + o.id + "-action" : o.id = a.formID + "-action-" + Math.round(1e3 * Math.random());
                var l = (0, s.markup)("button", n, o);
                if (r) {
                    var u = function(e) {
                        r.hasOwnProperty(e) && l.addEventListener(e, function(t) {
                            return r[e](t)
                        })
                    };
                    for (var f in r) u(f)
                }
                return l
            }, t.prototype.processSubtypes = function(e) {
                var t = f.config.opts.disabledSubtypes;
                for (var r in e) e.hasOwnProperty(r) && c.default.register(e[r], c.default.getClass(r), r);
                var o = c.default.getRegisteredSubtypes(),
                    i = Object.entries(o).reduce(function(e, r) {
                        var o = n(r, 2),
                            i = o[0],
                            a = o[1];
                        return e[i] = t[i] && (0, s.subtract)(t[i], a) || a, e
                    }, {}),
                    a = {};
                for (var l in i)
                    if (i.hasOwnProperty(l)) {
                        var u = [],
                            d = i[l],
                            p = Array.isArray(d),
                            m = 0;
                        for (d = p ? d : d[Symbol.iterator]();;) {
                            var b;
                            if (p) {
                                if (m >= d.length) break;
                                b = d[m++]
                            } else {
                                if ((m = d.next()).done) break;
                                b = m.value
                            }
                            var h = b,
                                g = c.default.getClass(l, h),
                                v = g.mi18n("subtype." + h) || g.mi18n(h) || h;
                            u.push({
                                label: v,
                                value: h
                            })
                        }
                        a[l] = u
                    }
                return a
            }, t.prototype.editorUI = function(e) {
                var t = this.d,
                    r = this.data,
                    o = e || r.formID;
                t.editorWrap = (0, s.markup)("div", null, {
                    id: r.formID + "-form-wrap",
                    className: "form-wrap form-builder " + (0, s.mobileClass)()
                }), t.stage = (0, s.markup)("ul", null, {
                    id: o,
                    className: "frmb stage-wrap " + r.layout.stage
                }), t.controls = (0, s.markup)("ul", null, {
                    id: o + "-control-box",
                    className: "frmb-control"
                });
                var n = this.formActionButtons();
                t.formActions = (0, s.markup)("div", n, {
                    className: "form-actions btn-group"
                })
            }, t.prototype.formActionButtons = function() {
                var e = this,
                    t = f.config.opts;
                return t.actionButtons.map(function(r) {
                    if (r.id && -1 === t.disabledActionButtons.indexOf(r.id)) return e.processActionButtons(r)
                }).filter(Boolean)
            }, t.prototype.processOptions = function(e) {
                var t = this,
                    r = e.actionButtons,
                    o = e.replaceFields,
                    n = m(e, ["actionButtons", "replaceFields"]),
                    i = n.fieldEditContainer;
                "string" == typeof n.fieldEditContainer && (i = document.querySelector(n.fieldEditContainer));
                var a = [{
                    type: "button",
                    id: "clear",
                    className: "clear-all btn btn-danger",
                    events: {
                        click: t.confirmRemoveAll.bind(t)
                    }
                }, {
                    type: "button",
                    label: "viewJSON",
                    id: "data",
                    className: "btn btn-default get-data",
                    events: {
                        click: t.showData.bind(t)
                    }
                }, {
                    type: "button",
                    id: "save",
                    className: "btn btn-primary save-template",
                    events: {
                        click: function(e) {
                            t.save(), f.config.opts.onSave(e, t.data.formData)
                        }
                    }
                }].concat(r);
                return n.fields = n.fields.concat(o), n.disableFields = n.disableFields.concat(o.map(function(e) {
                    var t = e.type;
                    return t && t
                })), "xml" === n.dataType && (n.disableHTMLLabels = !0), f.config.opts = Object.assign({}, {
                    actionButtons: a
                }, {
                    fieldEditContainer: i
                }, n), f.config.opts
            }, t.prototype.input = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, s.markup)("input", null, e)
            }, t.prototype.getFormData = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "js",
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = this;
                return {
                    js: function() {
                        return r.prepData(r.d.stage)
                    },
                    xml: function() {
                        return r.xmlSave(r.d.stage)
                    },
                    json: function(e) {
                        return window.JSON.stringify(r.prepData(r.d.stage), null, e && "  ")
                    }
                }[e](t)
            }, t
        }();
        r.default = b
    }, function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    }, function(e, t) {
        var r = Object.prototype.toString;
        e.exports = function(e) {
            return r.call(e)
        }
    }, function(e, t, r) {
        var o = r(24),
            n = Object.prototype,
            i = n.hasOwnProperty,
            a = n.toString,
            l = o ? o.toStringTag : void 0;
        e.exports = function(e) {
            var t = i.call(e, l),
                r = e[l];
            try {
                e[l] = void 0;
                var o = !0
            } catch (e) {}
            var n = a.call(e);
            return o && (t ? e[l] = r : delete e[l]), n
        }
    }, function(e, t, r) {
        var o = r(24),
            n = r(37),
            i = r(36),
            a = "[object Null]",
            l = "[object Undefined]",
            s = o ? o.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? l : a : s && s in Object(e) ? n(e) : i(e)
        }
    }, function(e, t, r) {
        var o = r(38),
            n = r(35),
            i = "[object Symbol]";
        e.exports = function(e) {
            return "symbol" == typeof e || n(e) && o(e) == i
        }
    }, function(e, t, r) {
        var o = r(22),
            n = r(39),
            i = NaN,
            a = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i,
            u = /^0o[0-7]+$/i,
            f = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e) return e;
            if (n(e)) return i;
            if (o(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var r = s.test(e);
            return r || u.test(e) ? f(e.slice(2), r ? 2 : 8) : l.test(e) ? i : +e
        }
    }, function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function(e, t, r) {
        (function(t) {
            var r = "object" == typeof t && t && t.Object === Object && t;
            e.exports = r
        }).call(this, r(41))
    }, function(e, t, r) {
        var o = r(25);
        e.exports = function() {
            return o.Date.now()
        }
    }, function(e, t, r) {
        var o = r(22),
            n = r(43),
            i = r(40),
            a = "Expected a function",
            l = Math.max,
            s = Math.min;
        e.exports = function(e, t, r) {
            var u, f, c, d, p, m, b = 0,
                h = !1,
                g = !1,
                v = !0;
            if ("function" != typeof e) throw new TypeError(a);

            function y(t) {
                var r = u,
                    o = f;
                return u = f = void 0, b = t, d = e.apply(o, r)
            }

            function w(e) {
                var r = e - m;
                return void 0 === m || r >= t || r < 0 || g && e - b >= c
            }

            function x() {
                var e = n();
                if (w(e)) return A(e);
                p = setTimeout(x, function(e) {
                    var r = t - (e - m);
                    return g ? s(r, c - (e - b)) : r
                }(e))
            }

            function A(e) {
                return p = void 0, v && u ? y(e) : (u = f = void 0, d)
            }

            function O() {
                var e = n(),
                    r = w(e);
                if (u = arguments, f = this, m = e, r) {
                    if (void 0 === p) return function(e) {
                        return b = e, p = setTimeout(x, t), h ? y(e) : d
                    }(m);
                    if (g) return p = setTimeout(x, t), y(m)
                }
                return void 0 === p && (p = setTimeout(x, t)), d
            }
            return t = i(t) || 0, o(r) && (h = !!r.leading, c = (g = "maxWait" in r) ? l(i(r.maxWait) || 0, t) : c, v = "trailing" in r ? !!r.trailing : v), O.cancel = function() {
                void 0 !== p && clearTimeout(p), b = 0, u = m = f = p = void 0
            }, O.flush = function() {
                return void 0 === p ? d : A(n())
            }, O
        }
    }, function(e, t, r) {
        var o = r(44),
            n = r(22),
            i = "Expected a function";
        e.exports = function(e, t, r) {
            var a = !0,
                l = !0;
            if ("function" != typeof e) throw new TypeError(i);
            return n(r) && (a = "leading" in r ? !!r.leading : a, l = "trailing" in r ? !!r.trailing : l), o(e, t, {
                leading: a,
                maxWait: t,
                trailing: l
            })
        }
    }, function(e, t, r) {
        (e.exports = r(9)(!1)).push([e.i, '@font-face{font-family:fb-icons;src:url("data:application/octet-stream;base64,d09GRgABAAAAABucAA8AAAAAMXwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IFOTY21hcAAAAdgAAACqAAACbnpHyFBjdnQgAAAChAAAABMAAAAgBtX/BGZwZ20AAAKYAAAFkAAAC3CKkZBZZ2FzcAAACCgAAAAIAAAACAAAABBnbHlmAAAIMAAAEA4AAByklMHRx2hlYWQAABhAAAAAMgAAADYRnnjNaGhlYQAAGHQAAAAdAAAAJAc8A2VobXR4AAAYlAAAACEAAABMRoz//2xvY2EAABi4AAAAKAAAAChJjFGYbWF4cAAAGOAAAAAgAAAAIAKGDJhuYW1lAAAZAAAAAYQAAALNmU1ky3Bvc3QAABqEAAAAmwAAAN59hsARcHJlcAAAGyAAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZN7OOIGBlYGBqYppDwMDQw+EZnzAYMjIBBRlYGVmwAoC0lxTGBxeMHzyZQ76n8UQxRzEMA0ozAiSAwABCQw7AHic7ZHLFYJADEXvAOIP5FOCC1e2ws6CXFlr1jSgL5OUYTiXScIMcHKBA9CKp+igfCh4vNUttd9yqf2Ol+qTrgZstGXfvl9l2BRZjaLndx41a3S20xd6juqe9Z4rAyM3JmYWVm3q+cdQ75bVGmktZcCSOvXEjVni1ixxm5Zo6lii+WOJTGCJnGCJW7ZEnrDE/84SuZP5QBZlPsDXOcDXJZBj9i1g/QFjZzHOAAB4nGNgQAMSEMgc9D8LhAESbAPdAHicrVZpd9NGFB15SZyELCULLWphxMRpsEYmbMGACUGyYyBdnK2VoIsUO+m+8Ynf4F/zZNpz6Dd+Wu8bLySQtOdwmpOjd+fN1czbZRJaktgL65GUmy/F1NYmjew8CemGTctRfCg7eyFlisnfBVEQrZbatx2HREQiULWusEQQ+x5ZmmR86FFGy7akV03KLT3pLlvjQb1V334aOsqxO6GkZjN0aD2yJVUYVaJIpj1S0qZlqPorSSu8v8LMV81QwohOImm8GcbQSN4bZ7TKaDW24yiKbLLcKFIkmuFBFHmU1RLn5IoJDMoHzZDyyqcR5cP8iKzYo5xWsEu20/y+L3mndzk/sV9vUbbkQB/Ijuzg7HQlX4RbW2HctJPtKFQRdtd3QmzZ7FT/Zo/ymkYDtysyvdCMYKl8hRArP6HM/iFZLZxP+ZJHo1qykRNB62VO7Es+gdbjiClxzRhZ0N3RCRHU/ZIzDPaYPh788d4plgsTAngcy3pHJZwIEylhczRJ2jByYCVliyqp9a6YOOV1WsRbwn7t2tGXzmjjUHdiPFsPHVs5UcnxaFKnmUyd2knNoykNopR0JnjMrwMoP6JJXm1jNYmVR9M4ZsaERCICLdxLU0EsO7GkKQTNoxm9uRumuXYtWqTJA/Xco/f05la4udNT2g70s0Z/VqdiOtgL0+lp5C/xadrlIkXp+ukZfkziQdYCMpEtNsOUgwdv/Q7Sy9eWHIXXBtju7fMrqH3WRPCkAfsb0B5P1SkJTIWYVYhWQGKta1mWydWsFqnI1HdDmla+rNMEinIcF8e+jHH9XzMzlpgSvt+J07MjLj1z7UsI0xx8m3U9mtepxXIBcWZ5TqdZlu/rNMfyA53mWZ7X6QhLW6ejLD/UaYHlRzodY3lBC5p038GQizDkAg6QMISlA0NYXoIhLBUMYbkIQ1gWYQjLJRjC8mMYwnIZhrC8rGXV1FNJ49qZWAZsQmBijh65zEXlaiq5VEK7aFRqQ54SbpVUFM+qf2WgXjzyhjmwFkiXyJpfMc6Vj0bl+NYVLW8aO1fAsepvH472OfFS1ouFPwX/1dZUJb1izcOTq/Abhp5sJ6o2qXh0TZfPVT26/l9UVFgL9BtIhVgoyrJscGcihI86nYZqoJVDzGzMPLTrdcuan8P9NzFCFlD9+DcUGgvcg05ZSVnt4KzV19uy3DuDcjgTLEkxN/P6VvgiI7PSfpFZyp6PfB5wBYxKZdhqA60VvNknMQ+Z3iTPBHFbUTZI2tjOBIkNHPOAefOdBCZh6qoN5E7hhg34BWFuwXknXKJ6oyyH7kXs8yik/Fun4kT2qGiMwLPZG2Gv70LKb3EMJDT5pX4MVBWhqRg1FdA0Um6oBl/G2bptQsYO9CMqdsOyrOLDxxb3lZJtGYR8pIjVo6Of1l6iTqrcfmYUl++dvgXBIDUxf3vfdHGQyrtayTJHbQNTtxqVU9eaQ+NVh+rmUfW94+wTOWuabronHnpf06rbwcVcLLD2bQ7SUiYX1PVhhQ2iy8WlUOplNEnvuAcYFhjQ71CKjf+r+th8nitVhdFxJN9O1LfR52AM/A/Yf0f1A9D3Y+hyDS7P95oTn2704WyZrqIX66foNzBrrblZugbc0HQD4iFHrY64yg18pwZxeqS5HOkh4GPdFeIBwCaAxeAT3bWM5lMAo/mMOT7A58xh0GQOgy3mMNhmzhrADnMY7DKHwR5zGHzBnHWAL5nDIGQOg4g5DJ4wJwB4yhwGXzGHwdfMYfANc+4DfMscBjFzGCTMYbCv6dYwzC1e0F2gtkFVoANTT1jcw+JQU2XI/o4Xhv29Qcz+wSCm/qjp9pD6Ey8M9WeDmPqLQUz9VdOdIfU3Xhjq7wYx9Q+DmPpMvxjLZQa/jHyXCgeUXWw+5++J9w/bxUC5AAEAAf//AA94nM1ZW3Bbx3nef88VwMEBDnAO7iAuBxcRoEQKV0qkAEiiREqkJJKmJFKyQNY0HVc0TSlJq9ox7TZynKgvrmcqT6dR22EznXGcTOvIE+fB6kynkpt6PHamje126pdOXyq/+KHNS2EB6r+40KwkZ9xkPJPF2QvP7v5nd//b9y+Jk5C757nb3CzhiERsxEHcxEuCJEJMkiZZMkmmyRyZJ8/Q0cnX9On52ks8UHOHSVesICcTSTmxRhKZZCKzGoOIZ8ATWSED0ejAsu7WOEdYDTtWDJeTU/v61OUQ+PrBpD5ziexID9kHeYnskOoCR4nNQkEkUE8pVCRJWUzWd0FmZ5Z6IhnPYi6+m4uSsCMaXgyC3x84RQIBZYL09XkXiNdr9x4JTr5m4ML+uLuwHWufs7KBtQcvLaz2rX5pa6u9/IWW5RmIrm6tS1378he2sFA7f/LkzIzPpyhP/96l3/2dr3/tqxfXzz/+lcdWHl1+5LeWFuvnzp6cPzl/+tTM3MzcQ7PTJ45PHRk/fGjs4IH9tcpwMTeUzfTvSKeSCTMei0b6wiFf0BcM+L0eQ3e7NKfiUBwujSVnXghmIW+YadPIlzHjU8TH9GJOY4PrtllmnWDoKmRB00UzFk8VtUIF8rGiWYwZphHL9QHXD0YsWWRkTAMKKTOmmdidb+dYXAyD7sm3B7NJuVIRLlWrG5UKPo1qu6pWb+Cb9oMN+HEg64/EQ01XyMQWvLwBezbgtD8beLN1pXWFftJ8EYfR11xq6/s4v1JpnVc1Te2NU100wMhXqt2y2ny32k70jxr+TKD1nVA8HqI/Q3o4uxrINt+/8SkjA++rrtZPqxX8udSGquHUiqYSgjrIdHLzgTqZJ2UyQqrkBPka+ZPa1f1JGnYd2Zng3GE6HovQsNsSnguC2++1cxbZbVn0eRRONjSJE3hZqOtOkeMdNo4DwkM9AC5X33wU+vqUCdVKOUJC8yQUsoeOfPXC2vmvPLa8dO7sqYeOTR0aq1b2jY7s3TNcLhULuwf70z2eI8N9XY53kzMuhLM9bqa31XBPzRULKaQjSobuKedzJdg2vtzt83b7yp/JQmkEiqzIecI4o9OSjHzOM765+db162/1Svju669/eP06/HBz88PXX7+liAnJCp3yu+1XH25uuqyyKSmApWz9l4HQnU/CmUx4ooBKWviwlDCTJRgPZ05sbm4mrl+/nths3tpssCJxHYY229Q22exWCvs2N1e3vRpoFhkp+k44U0oWCslSp8wgbyny9h+5/6B/T3TST3K1wfYBuonEURjXAQ4RIJQDuoS8J9wc4Tg0vtieKo6UC7zgY3qhAh7GLuhqRs7jLUsWEJJFpgpx0dCY+KPYc1Mozc33UO6wprlY3vryB633W+9BDgY0tfme6nKpNKdqNNBSeoOwzsRO/3frKrz86BsKE/POOCLjul95oJ94srYaBl6IgIX3g2wJgigbIInCeB8IAbB4QOQOe0Eaw4kU7VbdCgLhLQJfJxYiixa5TkQbjpfO4OnAKQKgkCOKIss9K6LaZZtsYwLmVAR/VouhIcAsYKFhs4htB6S9bqmTudt3fCzDJZpvvsvyxrV6/Vo3c3rlzcqbHRVtVG/Uo8/CG/XoBvwYC9zV/XuMIpeKpIJ+cA6Ejgc8Q2xUoLaVILgsrgtsWzbclk+hgh14q8AvecFKHKLVsUREImmihIrmJJrq1Jb8oBK3rLqXQjqVDQ+1uGTL0rZ9B2tnO8SFtS+B+kLtwLGpWrVcymbiMUN3Omemp+aOzR0+VJ2sTY7sLVXKldxQppgtppKx/nh/MKBHjajT7dzSbmcYlXuLAe1sMA4YHIojCiMaZxTOdFzUPblSIdV9i8qpi/e+vHdoj2t76MXmi738UVssc23ZRFkMoTh2BDVdLqfxRdDlst83pM3iRpX9qvBGINPuy2UCGy7sDLla32wPL84WN3C0oRutF7vzsXi2MwbPzOjKgr5N0juW9yAZR2k4QR4ip8lZskgukW+Q58hl8m1u/+RrFpSPPyOj0og0unIYhsuiOLyyDwgpFUmpjoJUyBQL9fzuwZ18tj8RDfkEymXp4o5DyYOx/eGq38Klx8wDkVqw4rXwAsfXU/G+gEcQDLfmsAs2RbDVc0O7BviM7nKqvGLNKHViJRbZaqmjhkqjslTHNe7dM7K3TvaQ8vCeMmoXgDhLRBEWCIhwDNGSFRf5l79skQO4SJLJ0szsr7tUbqC70oFfaaU2XOmfb19peVhc+w07z9pfdBY4svYbusIFxHp/9cwzc3PT01NTExNjY7Xa6OjwMCXffuFbz1/+5h/8/jPPPfPcsxvfePqpHg68sP7k2hOr53+7gwYZFnz47JmF+bnTc6dPnZx+aPqh2ZmpE1Mnjh+bmJyYPHpkbHwMkWHtYA2x4Wh1FMHC8MgwwgWGFvK53UODu3YO3IsWtyEHp1UiDuoYF/QsbPdfWiElIGw0MEOMWZ32L4+w776cNMx9NG94H1j1oCGCROP+3KYKXUeSxsy9eudqyDRD3CritjtP5TBxq3eu9nLu3OzpmfpkfaY+0FyfnH1lZub7k5N/MzPzh2xgrj4zz7omz3XnNF0dW7bRUuAXnB4PM5BphugnIfN5l93dvEIH7G7Fbd9KEbfbjlbtvjKKhV1UesmvuJtXGYCtVAlxbvktBds68ZEQ+q0E2UEGyBApkGEy2rFbUOx4sMeCYOMUzrZCFJ5Xlv1eaggewVgJ+KhHFD3LcV1z8HZJlewrbhaJyLK6bAG+L0QhzMNiImJyYSIYYaHOfJBdlBZjgABBJueswHH0VBQoVTj0Zk90P6Ss4Zc4hV/tfcqz1v6W4BFXP/uYutb5mqTKq7/C5xZqJ5ls79xpoPHeLpPVyhZ4RXHcObQTJfJBAmn4DJTJtkgi6sDDVNyFpODBkGB3TyTzWtvldd2eG8WKiaiGudzLKFPJbX9DOi90BRX5fjEUb9w5/ZmPa9y4cefnLFboRSOtK702fFC9dOd/kMHcbEcgaR6GKzfevIFz6MUb1Urz3Uo3NdolXDjUYKTwkHq+q4djWOTwkw7v9xOE/jxZUQCsPFhXiayCTZRt7bPlEE70cJqd4TTCcJrVYrHOEqvVskAsVgtavAMdGrD2qxNZqKWiURm5GDWjyIK+oMeNZ64wqGe1IHrkkQKnOQQjW8aDTqJehiG2D/Dg3dr/xbmcFtNuwC9aymen+mY89JkOV+5c/R47Ihb+4Zkx1euqIWdF9fyEoWty9z+52/SD7q3H2do8w+AIxKHOq5TYwWoj1rrioDbE2aJNWJJBlCRxFitROkUQvB6NRoEwcepsJ9CzbQ6rzDaD4XoEIs62hWOWiNm0zg5GwGgHssWuxQMUsX7Q0Ao11+uN+rVgwgxdwwZ9KRQ37zx9jf6suU5fovMslEz5WldCJgsbzRBc8qVak3CpdQUuIXzBQyd3f8Qdo3eRIzrxozV4oebtAyqEPaqE6/FzGO/hHjEQHJ98zYWCkSYCFdZx43Sdnf064kYgy+hLeB5msQL+NOP6ZLCWun8kWb9/4EINgVQs6vM6HRYZlyHqErLTW05jvIZxuxmXQDT0fK4MpbQXzCLoiOPLpVwEPO/kLucnYFER+NY/8XaBh0Gu73Zr6DZ3TD93+5w+4rmsS/nL+dFxKip86595LGEXf/F2a/Bj+NOwce7jhw3jsoedA9fWhVdRF3g0GA5yqHbACvwhWaS8wK8TgQjrEnprZBBXR34DnSWUMsBM4ajFAsTisDC5tDE24iDclwW5mGQIWELth7LX1EwNPmhluVerGxvNC43GtRvf+/TTjQq80Wi0fgp7COks5Dad/5w7tsGtqH47tvy72t/2220WSeAk2KFYZZGn6CeB1HG+qjnUOtGI060560jNZbhddcSsOkbMdaTt8Xs9deS6L+j31bPppBmLhKVgIBCc3fojGDiVSSXi0b6QFAgGjqJjn0O3Po1OfQpd+kTvqmd75P8FfHkvUBjAQMG97V7n3iz8kvx5c9zd24POHc49D7Oi3KtYn7qn/nnPnm5/qp0BNFDZnjaqG9vy9gSXKi2lytgIrKB/Ta+jj+2rBX2aleMpgXFmLcg6Bu70Md2ne1mkXixUIZ0qMIFGqfagdKNzEeODGOzGU4GbNwOFw4FbN/0TOf/Nm/7chP/mLf9E/kwiwOqc/9Yt9u7WzUCnP4+fle6TIx+JkQG6+yeZdIKzyDDewfbHJeAQJHLWNQ2sCrEu20GRibLsANViE9QVFmLaULOpYKHCKtsSh2LlRJ9qUVnEKPC8MEsEgemxgArfweFjW1TtisZZZaTrUNEiIq2VB9KyPZiW9qWskFmw6QdTlVfbZC2qbe3/T9eNdGfuoaus/tqEa7NfiKbFRle/MNEFlmpmwI/ql+3fkUqa8b6wPxZgob5P8/VU0yWEsm6Gc/OaiXU/YC304vA0i9XjKLTevFHOS14zbZgVBmXZvWYH0lYqzX+Np9MH0+nY0J49S3v3vh15bMfFp/rXIqhObRd0FPVlMXcqh4+/9kQNH35p6fzTTz7Z0R/0S29xNvIsOV6bXJgrcKLgRWsrs3uvcRntq0QFkRfY9QZQEZasQFHj5rCiZJ5jajb19FMX1ldXlhbnT544fnTs6559SzbUNyGeiotmPFUuVGi5tA8KaYYTHKCj38t5vLoodQcU2wOKaa1cShUGYRekd4GI00rlHB5CPoemTIyLkmh4GcDokNpFi/f3u7dIcz/wP5J7xG93gisQtbhAMlrf8UhgWOJ9OiiOwOO76z676vL0YR86GcpTWZDjPg8oauDxoSWPqroCIasOkgNeUCVwW3eFVNX36OCST1V1X1zSwW2JhlygnOB5n93lpKJoO/hvisBx/35CEXmnS/UB69GcPC/ZD0bgHxx2FQlanVTgabc7wLoF5fgtim7z+nFFpIpnW4f9WPO/DiAxDDR9HT7Rt5FPWbKrlg3LFHk0joePDFhhuOFJBjH4OcLz7IKSJ1P78u5hUxD8WcDjQefODkjTxSywe1tzq5VK44+dZYldXdK3dTVEVR489lFVn3Y5sZwtH04mlg9WfgA2Vacf9zsTwKliX3ND1XWVvtKcZzUYUiB2cP/0w99Cl9e9Vz3PrWIMxPzqeG2MR3FxOO2cIBKhripUREslyQhN2eKVCSvIsl0+QghzYDhny4dpWwldGBTNsim1s5Fv53y5nfE9vs5zq9ciG5EG5o/eifxwW/taI9KAjzYamDYa3arRYOb77t3u/9sYKh8hz9ccJvBCFkWdWAAkDm24gjZnAFWaE/gVBmBEjrQv+xB0otIL8jyRZWUC4Rl6AkrtFAOtnZ3h3NoXGr9QU4qxlO4ulrymBbcpbIPUXgSi7u59e1pDQ4BcQiPAbuRxhNSFrKhl2Mc4yG0qYnNTtlpluihZJwrJ5mayAKUEXUwWPpywys3OvfiZM4kSFJL4trSPLrLhnQ66wsZ3OqDwozNn2qMZwYkOjQL5XxyYz4kAAHicY2BkYGAA4nwdO954fpuvDNzML4AiDNd9pKbB6P///2cxv2AOAnI5GJhAogAu1AvVAAB4nGNgZGBgDvqfBSRf/AcC5hcMQBEUIAwAtq0HpgAAAHicY37BwMAMwgugNC4ciWAzrUNinwLS2SD2//8Ae2MRwgAAAAAAAAABygK4AxQDhgSMBuIH6giCCOwJcAmyCpgK1gw4DQwNZA24DlIAAQAAABMAiAAWAAAAAAACAI4AngBzAAABWwtwAAAAAHicdZDfSgJBFMa/yT+VQkVBt81VKOH6BwIRBMHQm7qR8DbWdf/JuiOzo+Br9A49TC/Rs/S5jhFGu8zO73znO2fODoBrfEFg/zxy7VngjNGeT3CKvuUC9SfLRfKz5RKqeLVcpv5muYIHhJaruME7O4jiOaMFPiwLXIlLyye4EHeWC9QblovkvuUSbsWL5TJ1z3IFU5FZruJefA7VaqvjMDKyNqzLTqvdlbOtVJTi1E2kuzaR0pkcyEClxk8S5XhqGcwasafSbOKH68TVh/CwT32dxSqVbad1kMZ+6mvX+PNd92wTdowJZKDVUo5sX7nSauF7xomMWfWazd/nYQiFFbbQiHlVEQwkalTr3DtooY0uaUaHpHPvipHCRULFxZoVUZ7JGA+4AkYpVZ+OhOzA43dJfYYGa708n2FCR8j6hF30n+xxPKV7d0acx5JzOZzu2DWmK82dbj7B/Gf2DBue1qFqWLWbUudTSYyO5pW8j11uQcWj7uS3Yqj20OT7z/99A+gqgcN4nG3IWw7CIBBGYX5FbK133YaLmg6jECkQpInu3mjjm+fpy1EzNbVS/zthhjk0FjBYokGLFTqsscEWO+xxwBEnnNWaxpo4DTlIFW2pSsNO+N6n5/aHy62kMXeFrE+T2+LZXao8q3lIEK7Nx1SE9HdmieyDvvogxnlrJRqmyBJMP9aaonFCVkqbqdCtUHYmjkMvRXPKL6Xep1o2rQB4nGPw3sFwIihiIyNjX+QGxp0cDBwMyQUbGVidNjEwMmiBGJu5mBg5ICw+BjCLzWkX0wGgNCeQze60i8EBwmZmcNmowtgRGLHBoSNiI3OKy0Y1EG8XRwMDI4tDR3JIBEhJJBBs5mFi5NHawfi/dQNL70YmBhcADHYj9AAA") format("woff")}[class*=" icon-"]:before,[class^=icon-]:before{font-family:fb-icons;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em}.icon-autocomplete:before{content:"\\E800"}.icon-date:before{content:"\\E801"}.icon-checkbox:before{content:"\\E802"}.icon-checkbox-group:before{content:"\\E803"}.icon-radio-group:before{content:"\\E804"}.icon-rich-text:before{content:"\\E805"}.icon-select:before{content:"\\E806"}.icon-textarea:before{content:"\\E807"}.icon-text:before{content:"\\E808"}.icon-pencil:before{content:"\\E809"}.icon-file:before{content:"\\E80A"}.icon-hidden:before{content:"\\E80B"}.icon-cancel:before{content:"\\E80C"}.icon-button:before{content:"\\E80D"}.icon-header:before{content:"\\E80F"}.icon-paragraph:before{content:"\\E810"}.icon-number:before{content:"\\E811"}.icon-copy:before{content:"\\F24D"}.form-wrap.form-builder{position:relative}.form-wrap.form-builder *{box-sizing:border-box}.form-wrap.form-builder input{line-height:normal}.form-wrap.form-builder textarea{overflow:auto}.form-wrap.form-builder button,.form-wrap.form-builder input,.form-wrap.form-builder select,.form-wrap.form-builder textarea{font-family:inherit;font-size:inherit;line-height:inherit}.form-wrap.form-builder .btn-group{position:relative;display:inline-block;vertical-align:middle}.form-wrap.form-builder .btn-group>.btn{position:relative;float:left}.form-wrap.form-builder .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.form-wrap.form-builder .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.form-wrap.form-builder .btn-group .btn+.btn,.form-wrap.form-builder .btn-group .btn+.btn-group,.form-wrap.form-builder .btn-group .btn-group+.btn,.form-wrap.form-builder .btn-group .btn-group+.btn-group{margin-left:-1px}.form-wrap.form-builder .btn-group .input-group-addon:last-child,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .btn-group .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .btn-group .input-group-btn:last-child>.dropdown-toggle,.form-wrap.form-builder .btn-group .input-group .form-control:last-child,.form-wrap.form-builder .btn-group>.btn:last-child:not(:first-child),.form-wrap.form-builder .btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .btn-group>.btn.active,.form-wrap.form-builder .btn-group>.btn:active,.form-wrap.form-builder .btn-group>.btn:focus,.form-wrap.form-builder .btn-group>.btn:hover{z-index:2}.form-wrap.form-builder .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px}.form-wrap.form-builder .btn.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-wrap.form-builder .btn.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.form-wrap.form-builder .btn.active,.form-wrap.form-builder .btn.btn-active,.form-wrap.form-builder .btn:active{background-image:none}.form-wrap.form-builder .input-group-addon:last-child,.form-wrap.form-builder .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.form-wrap.form-builder .input-group-btn:first-child>.btn:not(:first-child),.form-wrap.form-builder .input-group-btn:last-child>.btn,.form-wrap.form-builder .input-group-btn:last-child>.btn-group>.btn,.form-wrap.form-builder .input-group-btn:last-child>.dropdown-toggle,.form-wrap.form-builder .input-group .form-control:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.form-wrap.form-builder .input-group-addon,.form-wrap.form-builder .input-group-btn,.form-wrap.form-builder .input-group .form-control{display:table-cell}.form-wrap.form-builder .input-group-lg>.form-control,.form-wrap.form-builder .input-group-lg>.input-group-addon,.form-wrap.form-builder .input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333}.form-wrap.form-builder .input-group{position:relative;display:table;border-collapse:separate}.form-wrap.form-builder .input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.form-wrap.form-builder .form-control,.form-wrap.form-builder output{font-size:14px;line-height:1.42857143;display:block}.form-wrap.form-builder textarea.form-control{height:auto}.form-wrap.form-builder .form-control{height:34px;display:block;width:100%;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px}.form-wrap.form-builder .form-control:focus{outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-wrap.form-builder .form-group{margin-left:0;margin-bottom:15px}.form-wrap.form-builder .btn,.form-wrap.form-builder .form-control{background-image:none}.form-wrap.form-builder .pull-right{float:right}.form-wrap.form-builder .pull-left{float:left}.form-wrap.form-builder .fb-required,.form-wrap.form-builder .required-asterisk{color:#c10000}.form-wrap.form-builder .fb-checkbox-group input[type=checkbox],.form-wrap.form-builder .fb-checkbox-group input[type=radio],.form-wrap.form-builder .fb-radio-group input[type=checkbox],.form-wrap.form-builder .fb-radio-group input[type=radio]{margin:0 4px 0 0}.form-wrap.form-builder .fb-checkbox-inline,.form-wrap.form-builder .fb-radio-inline{margin-right:8px;display:inline-block;vertical-align:middle;padding-left:0}.form-wrap.form-builder .fb-checkbox-inline label input[type=text],.form-wrap.form-builder .fb-radio-inline label input[type=text]{margin-top:0}.form-wrap.form-builder .fb-checkbox-inline:first-child,.form-wrap.form-builder .fb-radio-inline:first-child{padding-left:0}.form-wrap.form-builder .fb-autocomplete-list{background-color:#fff;display:none;list-style:none;padding:0;border:1px solid #ccc;border-width:0 1px 1px;position:absolute;z-index:20;max-height:200px;overflow-y:auto}.form-wrap.form-builder .fb-autocomplete-list li{display:none;cursor:default;padding:5px;margin:0;transition:background-color .2s ease-in-out}.form-wrap.form-builder .fb-autocomplete-list li.active-option,.form-wrap.form-builder .fb-autocomplete-list li:hover{background-color:rgba(0,0,0,.075)}.form-wrap.form-builder .cb-wrap{width:26%;transition:transform .25s}.form-wrap.form-builder .cb-wrap.pull-left .form-actions{float:left}.form-wrap.form-builder .cb-wrap h4{margin-top:0;color:#666}@media (max-width:481px){.form-wrap.form-builder .cb-wrap{width:64px}.form-wrap.form-builder .cb-wrap h4{display:none}}.form-wrap.form-builder .frmb-control{margin:0;padding:0;border-radius:5px}.form-wrap.form-builder .frmb-control li{cursor:move;list-style:none;margin:0 0 -1px;padding:10px;text-align:left;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;box-shadow:inset 0 0 0 1px #c5c5c5}.form-wrap.form-builder .frmb-control li .control-icon{width:16px;height:auto;margin-right:10px;margin-left:.2em;display:inline-block}.form-wrap.form-builder .frmb-control li .control-icon img,.form-wrap.form-builder .frmb-control li .control-icon svg{max-width:100%;height:auto}.form-wrap.form-builder .frmb-control li:first-child{border-radius:5px 5px 0 0;margin-top:0}.form-wrap.form-builder .frmb-control li:last-child{border-radius:0 0 5px 5px}.form-wrap.form-builder .frmb-control li:before{margin-right:10px;font-size:16px}.form-wrap.form-builder .frmb-control li:hover{background-color:#f2f2f2}.form-wrap.form-builder .frmb-control li.ui-sortable-helper{border-radius:5px;transition:box-shadow .25s;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff}.form-wrap.form-builder .frmb-control li.ui-state-highlight{width:0;overflow:hidden;padding:0;margin:0;border:0 none}.form-wrap.form-builder .frmb-control li.moving{opacity:.6}.form-wrap.form-builder .frmb-control li.fb-separator{background-color:transparent;box-shadow:none;padding:0;cursor:default}.form-wrap.form-builder .frmb-control li.fb-separator hr{margin:10px 0}@media (max-width:481px){.form-wrap.form-builder .frmb-control li:before{font-size:30px}.form-wrap.form-builder .frmb-control li span{display:none}}.form-wrap.form-builder .frmb-control.sort-enabled li.ui-state-highlight{box-shadow:none;height:0;width:100%;background:radial-gradient(ellipse at center,#545454 0,transparent 75%);border:0 none;-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);visibility:visible;overflow:hidden;margin:1px 0 3px;animation:PLACEHOLDER .25s forwards}.form-wrap.form-builder .fb-mobile .form-actions{width:100%}.form-wrap.form-builder .fb-mobile .form-actions button{width:100%;font-size:.85em!important;display:block!important;border-radius:0!important;margin-top:-1px;margin-left:0!important}.form-wrap.form-builder .fb-mobile .form-actions button:first-child{border-radius:5px 5px 0 0!important;margin-top:0!important;border-bottom:0 none}.form-wrap.form-builder .fb-mobile .form-actions button:last-child{border-radius:0 0 5px 5px!important}.form-wrap.form-builder .form-actions{float:right;margin-top:5px}.form-wrap.form-builder .form-actions button{border:0 none}.form-wrap.form-builder .stage-wrap{position:relative;padding:0;margin:0;width:calc(74% - 5px)}@media (max-width:481px){.form-wrap.form-builder .stage-wrap{width:calc(100% - 64px)}}.form-wrap.form-builder .stage-wrap.empty{border:3px dashed #ccc;background-color:hsla(0,0%,100%,.25)}.form-wrap.form-builder .stage-wrap.empty:after{content:attr(data-content);position:absolute;text-align:center;top:50%;left:0;width:100%;margin-top:-1em}.form-wrap.form-builder .frmb{list-style-type:none;min-height:200px;transition:background-color .5s ease-in-out}.form-wrap.form-builder .frmb .fb-required{color:#c10000}.form-wrap.form-builder .frmb.removing{overflow:hidden}.form-wrap.form-builder .frmb>li:hover{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 0 8px rgba(102,175,233,.6)}.form-wrap.form-builder .frmb>li:hover .field-actions{opacity:1}.form-wrap.form-builder .frmb>li:hover li :hover{background:#fefefe}.form-wrap.form-builder .frmb li{position:relative;padding:6px;clear:both;margin-left:0;margin-bottom:3px;background-color:#fff;transition:background-color .25s ease-in-out,margin-top .4s}.form-wrap.form-builder .frmb li.hidden-field{background-color:hsla(0,0%,100%,.6)}.form-wrap.form-builder .frmb li:first-child{border-top-right-radius:5px;border-top-left-radius:5px}.form-wrap.form-builder .frmb li:first-child .field-actions .btn:last-child{border-radius:0 5px 0 0}.form-wrap.form-builder .frmb li:last-child{border-bottom-right-radius:5px;border-bottom-left-radius:5px}.form-wrap.form-builder .frmb li.no-fields label{font-weight:400}@keyframes PLACEHOLDER{0%{height:0}to{height:15px}}.form-wrap.form-builder .frmb li.frmb-placeholder,.form-wrap.form-builder .frmb li.ui-state-highlight{height:0;padding:0;background:radial-gradient(ellipse at center,#545454 0,transparent 75%);border:0 none;-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);visibility:visible;overflow:hidden;margin-bottom:3px;animation:PLACEHOLDER .25s forwards}.form-wrap.form-builder .frmb li.moving,.form-wrap.form-builder .frmb li.ui-sortable-helper{transition:box-shadow .5s ease-in-out;box-shadow:2px 2px 6px 0 #666;border:1px solid #fff;border-radius:5px}.form-wrap.form-builder .frmb li.disabled-field{z-index:1;position:relative;overflow:visible}.form-wrap.form-builder .frmb li.disabled-field:hover .frmb-tt{display:inline-block}.form-wrap.form-builder .frmb li.disabled-field [type=checkbox]{float:left;margin-right:10px}.form-wrap.form-builder .frmb li.disabled-field h2{border-bottom:0 none}.form-wrap.form-builder .frmb li.disabled-field label{font-size:12px;font-weight:400;color:#666}.form-wrap.form-builder .frmb li.disabled-field .prev-holder{cursor:default;line-height:28px;padding-left:5px}.form-wrap.form-builder .frmb li .close-field{position:absolute;color:#666;left:50%;bottom:6px;background:#fff;border-top:1px solid #c5c5c5;border-left:1px solid #c5c5c5;border-right:1px solid #c5c5c5;transform:translateX(-50%);padding:0 5px;border-top-right-radius:3px;border-top-left-radius:3px;cursor:pointer;transition:background-color .25s ease-in-out}.form-wrap.form-builder .frmb li .close-field:hover{text-decoration:none}.form-wrap.form-builder .frmb li.button-field .prev-holder,.form-wrap.form-builder .frmb li.button-field address,.form-wrap.form-builder .frmb li.button-field blockquote,.form-wrap.form-builder .frmb li.button-field canvas,.form-wrap.form-builder .frmb li.button-field h1,.form-wrap.form-builder .frmb li.button-field h2,.form-wrap.form-builder .frmb li.button-field h3,.form-wrap.form-builder .frmb li.button-field output,.form-wrap.form-builder .frmb li.button-field p,.form-wrap.form-builder .frmb li.header-field .prev-holder,.form-wrap.form-builder .frmb li.header-field address,.form-wrap.form-builder .frmb li.header-field blockquote,.form-wrap.form-builder .frmb li.header-field canvas,.form-wrap.form-builder .frmb li.header-field h1,.form-wrap.form-builder .frmb li.header-field h2,.form-wrap.form-builder .frmb li.header-field h3,.form-wrap.form-builder .frmb li.header-field output,.form-wrap.form-builder .frmb li.header-field p,.form-wrap.form-builder .frmb li.paragraph-field .prev-holder,.form-wrap.form-builder .frmb li.paragraph-field address,.form-wrap.form-builder .frmb li.paragraph-field blockquote,.form-wrap.form-builder .frmb li.paragraph-field canvas,.form-wrap.form-builder .frmb li.paragraph-field h1,.form-wrap.form-builder .frmb li.paragraph-field h2,.form-wrap.form-builder .frmb li.paragraph-field h3,.form-wrap.form-builder .frmb li.paragraph-field output,.form-wrap.form-builder .frmb li.paragraph-field p{margin:0}.form-wrap.form-builder .frmb li.button-field .field-label,.form-wrap.form-builder .frmb li.header-field .field-label,.form-wrap.form-builder .frmb li.paragraph-field .field-label{display:none}.form-wrap.form-builder .frmb li.button-field.editing .field-label,.form-wrap.form-builder .frmb li.header-field.editing .field-label,.form-wrap.form-builder .frmb li.paragraph-field.editing .field-label{display:block}.form-wrap.form-builder .frmb li.paragraph-field .fld-label{min-height:150px;overflow-y:auto}.form-wrap.form-builder .frmb li.checkbox-field .field-label{display:none}.form-wrap.form-builder .frmb li.delete:hover,.form-wrap.form-builder .frmb li.delete:hover .close-field,.form-wrap.form-builder .frmb li.deleting,.form-wrap.form-builder .frmb li.deleting .close-field,.form-wrap.form-builder .frmb li:hover li.delete:hover,.form-wrap.form-builder .frmb li:hover li.delete:hover .close-field{background-color:#fdd}.form-wrap.form-builder .frmb li.deleting{z-index:20;pointer-events:none}.form-wrap.form-builder .frmb.disabled-field{padding:0 5px}.form-wrap.form-builder .frmb.disabled-field :hover{border-color:transparent}.form-wrap.form-builder .frmb.disabled-field .form-element{float:none;margin-bottom:10px;overflow:visible;padding:5px 0;position:relative}.form-wrap.form-builder .frmb .frm-holder{display:none}.form-wrap.form-builder .frmb .tooltip{left:20px}.form-wrap.form-builder .frmb .prev-holder{display:block}.form-wrap.form-builder .frmb .prev-holder .form-group{margin:0}.form-wrap.form-builder .frmb .prev-holder .ql-editor{min-height:125px}.form-wrap.form-builder .frmb .prev-holder .form-group>label:not([class=fb-checkbox-label]){display:none}.form-wrap.form-builder .frmb .prev-holder input[type=number],.form-wrap.form-builder .frmb .prev-holder input[type=text],.form-wrap.form-builder .frmb .prev-holder select,.form-wrap.form-builder .frmb .prev-holder textarea{background-color:#fff;border:1px solid #ccc;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.form-wrap.form-builder .frmb .prev-holder input[type=date]{width:auto}.form-wrap.form-builder .frmb .prev-holder select[multiple]{height:auto}.form-wrap.form-builder .frmb .prev-holder label{font-weight:400}.form-wrap.form-builder .frmb .prev-holder input[type=number]{width:auto}.form-wrap.form-builder .frmb .prev-holder input[type=color]{width:60px;padding:2px;display:inline-block}.form-wrap.form-builder .frmb .required-asterisk{display:none}.form-wrap.form-builder .frmb .field-label,.form-wrap.form-builder .frmb .legend{color:#666;margin-bottom:5px;line-height:27px;font-size:16px;font-weight:400}.form-wrap.form-builder .frmb .disabled-field .field-label{display:block}.form-wrap.form-builder .frmb .other-option:checked+label input{display:inline-block}.form-wrap.form-builder .frmb .other-val{margin-left:5px;display:none}.form-wrap.form-builder .frmb .field-actions{position:absolute;top:0;right:0;opacity:0}.form-wrap.form-builder .frmb .field-actions a:before{margin:0}.form-wrap.form-builder .frmb .field-actions a:hover{text-decoration:none;color:#000}.form-wrap.form-builder .frmb .field-actions .btn{display:inline-block;width:32px;height:32px;padding:0 6px;border-radius:0;border-color:#c5c5c5;background-color:#fff;color:#c5c5c5;line-height:32px;font-size:16px;border-width:0 0 1px 1px}.form-wrap.form-builder .frmb .field-actions .btn:first-child{border-bottom-left-radius:5px}.form-wrap.form-builder .frmb .field-actions .toggle-form:hover{background-color:#65aac6;color:#fff}.form-wrap.form-builder .frmb .field-actions .copy-button:hover{background-color:#6fc665;color:#fff}.form-wrap.form-builder .frmb .field-actions .del-button:hover{background-color:#c66865;color:#fff}.form-wrap.form-builder .frmb .option-actions{text-align:right;margin-top:10px;width:100%;margin-left:2%}.form-wrap.form-builder .frmb .option-actions a,.form-wrap.form-builder .frmb .option-actions button{background:#fff;padding:5px 10px;border:1px solid #c5c5c5;font-size:14px;border-radius:5px;cursor:default}.form-wrap.form-builder .frmb .sortable-options-wrap{width:81.33333333%;display:inline-block}.form-wrap.form-builder .frmb .sortable-options-wrap label{font-weight:400}@media (max-width:481px){.form-wrap.form-builder .frmb .sortable-options-wrap{display:block;width:100%}}.form-wrap.form-builder .frmb .sortable-options{display:inline-block;width:100%;margin-left:2%;background:#c5c5c5;margin-bottom:0;border-radius:5px;list-style:none;padding:0}.form-wrap.form-builder .frmb .sortable-options>li{cursor:move;margin:1px}.form-wrap.form-builder .frmb .sortable-options>li:first-child .remove,.radio-group-field .form-wrap.form-builder .frmb .sortable-options>li:nth-child(2) .remove{display:none}.form-wrap.form-builder .frmb .sortable-options>li .remove{position:absolute;opacity:1;right:14px;height:18px;width:18px;top:14px;font-size:12px;padding:0;color:#c10000}.form-wrap.form-builder .frmb .sortable-options>li .remove:before{margin:0}.form-wrap.form-builder .frmb .sortable-options>li .remove:hover{background-color:#c10000;text-decoration:none;color:#fff}.form-wrap.form-builder .frmb .sortable-options .option-selected{margin:0;width:5%}.form-wrap.form-builder .frmb .sortable-options input[type=text]{width:calc(44.5% - 17px);margin:0 1%;float:none}.form-wrap.form-builder .frmb .form-field .form-group{width:100%;clear:left;float:none}.form-wrap.form-builder .frmb .col-md-6 .form-elements,.form-wrap.form-builder .frmb .col-md-8 .form-elements{width:100%}.form-wrap.form-builder .frmb .field-options .add-area .add{clear:both}.form-wrap.form-builder .frmb .style-wrap button.selected{border:1px solid #000;margin-top:0;margin-right:1px;box-shadow:inset 0 0 0 1px #fff;padding:1px 5px}.form-wrap.form-builder .frmb .form-elements{padding:10px 5px;background:#f7f7f7;border-radius:3px;margin:0;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements .input-wrap{width:81.33333333%;margin-left:2%;float:left}.form-wrap.form-builder .frmb .form-elements .input-wrap>input[type=checkbox]{margin-top:8px}.form-wrap.form-builder .frmb .form-elements .add{clear:both}.form-wrap.form-builder .frmb .form-elements [contenteditable],.form-wrap.form-builder .frmb .form-elements select[multiple]{height:auto}.form-wrap.form-builder .frmb .form-elements [contenteditable].form-control,.form-wrap.form-builder .frmb .form-elements input[type=color],.form-wrap.form-builder .frmb .form-elements input[type=date],.form-wrap.form-builder .frmb .form-elements input[type=number],.form-wrap.form-builder .frmb .form-elements input[type=text],.form-wrap.form-builder .frmb .form-elements select,.form-wrap.form-builder .frmb .form-elements textarea{transition:background .25s ease-in-out;padding:6px 12px;border:1px solid #c5c5c5;background-color:#fff}@media (max-width:481px){.form-wrap.form-builder .frmb .form-elements .input-wrap{width:100%;margin-left:0;float:none}}.form-wrap.form-builder .frmb .form-elements input[type=number]{width:auto}.form-wrap.form-builder .frmb .form-elements .btn-group{margin-left:2%}.col-md-6 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-6 .form-wrap.form-builder .frmb .form-elements label,.col-md-8 .form-wrap.form-builder .frmb .form-elements .false-label,.col-md-8 .form-wrap.form-builder .frmb .form-elements label{display:block}.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{width:16.66666667%;padding-top:7px;margin-bottom:0;text-align:right;font-weight:700;float:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}@media (max-width:481px){.form-wrap.form-builder .frmb .form-elements .false-label:first-child,.form-wrap.form-builder .frmb .form-elements label:first-child{display:block;width:auto;float:none;text-align:left}.form-wrap.form-builder .frmb .form-elements .false-label:first-child.empty-label,.form-wrap.form-builder .frmb .form-elements label:first-child.empty-label{display:none}}.form-wrap.form-builder .frmb .form-elements .false-label.multiple,.form-wrap.form-builder .frmb .form-elements .false-label.other-label,.form-wrap.form-builder .frmb .form-elements .false-label.required-label,.form-wrap.form-builder .frmb .form-elements .false-label.roles-label,.form-wrap.form-builder .frmb .form-elements .false-label.toggle-label,.form-wrap.form-builder .frmb .form-elements label.multiple,.form-wrap.form-builder .frmb .form-elements label.other-label,.form-wrap.form-builder .frmb .form-elements label.required-label,.form-wrap.form-builder .frmb .form-elements label.roles-label,.form-wrap.form-builder .frmb .form-elements label.toggle-label{text-align:left;float:none;margin-bottom:-3px;font-weight:400;width:calc(81.3333% - 23px)}.form-wrap.form-builder .frmb .form-elements input.error{border:1px solid #c10000}.form-wrap.form-builder .frmb .form-elements input.fld-maxlength{width:75px}.form-wrap.form-builder .frmb .form-elements input.field-error{background:#fefefe;border:1px solid #c5c5c5}.form-wrap.form-builder .frmb .form-elements label em{display:block;font-weight:400;font-size:.75em}.form-wrap.form-builder .frmb .form-elements label.maxlength-label{line-height:1em}.form-wrap.form-builder .frmb .form-elements .available-roles{display:none;padding:10px;margin:10px 0;background:#e6e6e6;box-shadow:inset 0 0 2px 0 #b3b3b3}@media (max-width:481px){.form-wrap.form-builder .frmb .form-elements .available-roles{margin-left:0}}.form-wrap.form-builder .frmb .form-elements .available-roles label{font-weight:400;width:auto;float:none;display:inline}.form-wrap.form-builder .frmb .form-elements .available-roles input{display:inline;top:auto}.form-wrap.form-builder .autocomplete-field .sortable-options .option-selected{display:none}.form-wrap.form-builder .fb-mobile .field-actions{opacity:1}.form-wrap.form-builder [tooltip]{position:relative}.form-wrap.form-builder [tooltip]:hover:after{background:rgba(0,0,0,.9);border-radius:5px 5px 5px 0;bottom:23px;color:#fff;content:attr(tooltip);padding:10px 5px;position:absolute;z-index:98;left:2px;width:230px;text-shadow:none;font-size:12px;line-height:1.5em;cursor:default}.form-wrap.form-builder [tooltip]:hover:before{border:solid;border-color:#222 transparent;border-width:6px 6px 0;bottom:17px;content:"";left:2px;position:absolute;z-index:99;cursor:default}.form-wrap.form-builder .tooltip-element{visibility:visible;color:#fff;background:#000;width:16px;height:16px;border-radius:8px;display:inline-block;text-align:center;line-height:16px;margin:0 5px;font-size:12px;cursor:default}.form-wrap.form-builder .kc-toggle{padding-left:0!important}.form-wrap.form-builder .kc-toggle span{position:relative;width:48px;height:24px;background:#e6e6e6;display:inline-block;border-radius:4px;border:1px solid #ccc;padding:2px;overflow:hidden;float:left;margin-right:5px;will-change:transform}.form-wrap.form-builder .kc-toggle span:after,.form-wrap.form-builder .kc-toggle span:before{position:absolute;display:inline-block;top:0}.form-wrap.form-builder .kc-toggle span:after{position:relative;content:"";width:50%;height:100%;left:0;border-radius:3px;background:linear-gradient(180deg,#fff 0,#ccc);border:1px solid #999;transition:transform .1s;transform:translateX(0)}.form-wrap.form-builder .kc-toggle span:before{border-radius:4px;top:2px;left:2px;content:"";width:calc(100% - 4px);height:18px;box-shadow:inset 0 0 1px 1px #b3b3b3;background-color:transparent}.form-wrap.form-builder .kc-toggle input{height:0;overflow:hidden;width:0;opacity:0;pointer-events:none;margin:0}.form-wrap.form-builder .kc-toggle input:checked+span:after{transform:translateX(100%)}.form-wrap.form-builder .kc-toggle input:checked+span:before{background-color:#6fc665}.form-wrap.form-builder:after{content:"";display:table;clear:both}.cb-wrap,.stage-wrap{vertical-align:top}.cb-wrap.pull-right,.stage-wrap.pull-right{float:right}.cb-wrap.pull-left,.stage-wrap.pull-left{float:left}.form-elements,.form-group,.multi-row span,textarea{display:block}.form-elements:after,.form-group:after{content:".";display:block;height:0;clear:both;visibility:hidden}.form-elements .field-options div:hover,.frmb .legend,.frmb .prev-holder{cursor:move}.frmb-tt{display:none;position:absolute;top:0;left:0;border:1px solid #262626;background-color:#666;border-radius:5px;padding:5px;color:#fff;z-index:20;text-align:left;font-size:12px;pointer-events:none}.frmb-tt:before{border-color:#262626 transparent;bottom:-11px}.frmb-tt:after,.frmb-tt:before{content:"";position:absolute;border-style:solid;border-width:10px 10px 0;border-color:#666 transparent;display:block;width:0;z-index:1;margin-left:-10px;bottom:-10px;left:20px}.frmb-tt a{text-decoration:underline;color:#fff}.fb-mobile .frmb li .del-button,.fb-mobile .frmb li .toggle-form,.frmb li:hover .del-button,.frmb li:hover .toggle-form{opacity:1}.frmb-xml .ui-dialog-content{white-space:pre-wrap;word-wrap:break-word;font-size:12px;padding:0 30px;margin-top:0}.toggle-form{opacity:0}.toggle-form:hover{border-color:#ccc}.toggle-form:before{margin:0}.formb-field-vars .copy-var{display:inline-block;width:24px;height:24px;background:#b3b3b3;text-indent:-9999px}.ui-button .ui-button-text{line-height:0}.form-builder-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:none;z-index:10}.form-builder-overlay.visible{display:block}.form-builder-dialog{position:absolute;border-radius:5px;background:#fff;z-index:20;transform:translate(-50%,-50%);top:0;left:0;padding:10px;box-shadow:0 3px 10px #000;min-width:166px;max-height:80%;overflow-y:scroll}.form-builder-dialog h3{margin-top:0}.form-builder-dialog.data-dialog{width:65%;background-color:#23241f}.form-builder-dialog.data-dialog pre{background:none;border:0 none;box-shadow:none;margin:0;color:#f2f2f2}.form-builder-dialog.positioned{transform:translate(-50%,-100%)}.form-builder-dialog.positioned .button-wrap:before{content:"";width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-top:10px solid #fff;position:absolute;left:50%;top:100%;transform:translate(-50%,10px)}.form-builder-dialog .button-wrap{position:relative;margin-top:10px;text-align:right;clear:both}.form-builder-dialog .button-wrap .btn{margin-left:10px}', ""])
    }, function(e, t, r) {
        var o = r(46);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var n = {
            attrs: {
                class: "formBuilder-injected-style"
            },
            sourceMap: !1,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        r(8)(o, n);
        o.locals && (e.exports = o.locals)
    }, function(t, r, o) {
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        o(47);
        var a = g(o(45)),
            l = o(5),
            s = g(l),
            u = o(23),
            f = g(o(2)),
            c = g(o(11)),
            d = g(o(21)),
            p = g(o(34)),
            m = o(10),
            b = g(o(33)),
            h = o(1);

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            var r = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }
        var y = function(t, r) {
            var o = this,
                g = this,
                y = f.default.current,
                w = "frmb-" + (new Date).getTime(),
                x = new u.Data(w),
                A = new s.default(w);
            t.layout || (t.layout = d.default);
            var O = new t.layout(t.layoutTemplates, !0),
                k = new p.default(w, O, g),
                q = h.markup;
            t = k.processOptions(t), x.layout = k.editorLayout(t.controlPosition), k.editorUI(w), x.formID = w, x.lastID = x.formID + "-fld-1";
            var E = new b.default(t, A),
                j = m.config.subtypes = k.processSubtypes(t.subtypes),
                C = e(A.stage),
                S = e(A.controls);
            C.sortable({
                cursor: "move",
                opacity: .9,
                revert: 150,
                beforeStop: function(e, t) {
                    return k.beforeStop.call(k, e, t)
                },
                start: function(e, t) {
                    return k.startMoving.call(k, e, t)
                },
                stop: function(e, t) {
                    return k.stopMoving.call(k, e, t)
                },
                cancel: ["input", "select", "textarea", ".disabled-field", ".form-elements", ".btn", "button", ".is-locked"].join(", "),
                placeholder: "frmb-placeholder"
            }), t.allowStageSort || C.sortable("disable"), S.sortable({
                helper: "clone",
                opacity: .9,
                connectWith: C,
                cancel: ".fb-separator",
                cursor: "move",
                scroll: !1,
                placeholder: "ui-state-highlight",
                start: function(e, t) {
                    return k.startMoving.call(k, e, t)
                },
                stop: function(e, t) {
                    return k.stopMoving.call(k, e, t)
                },
                revert: 150,
                beforeStop: function(e, t) {
                    return k.beforeStop.call(k, e, t)
                },
                distance: 3,
                update: function(e, r) {
                    if (k.doCancel) return !1;
                    r.item.parent()[0] === A.stage ? (k.doCancel = !0, T(r.item)) : (k.setFieldOrder(S), k.doCancel = !t.sortableControls)
                }
            });
            var T = function(e) {
                    if (e[0].classList.contains("input-set-control")) {
                        var r = [],
                            o = t.inputSets.find(function(t) {
                                return (0, h.hyphenCase)(t.name || t.label) === e[0].dataset.type
                            });
                        if (o && o.showHeader) {
                            var n = {
                                type: "header",
                                subtype: "h2",
                                id: o.name,
                                label: o.label
                            };
                            r.push(n)
                        }
                        r.push.apply(r, o.fields), r.forEach(function(e) {
                            D(e, !0), (k.stopIndex || 0 === k.stopIndex) && k.stopIndex++
                        })
                    } else D(e, !0)
                },
                L = e(A.editorWrap),
                N = q("div", A.controls, {
                    id: x.formID + "-cb-wrap",
                    className: "cb-wrap " + x.layout.controls
                });
            t.showActionButtons && N.appendChild(A.formActions), L.append(A.stage, N), "textarea" !== r.type ? e(r).append(L) : e(r).replaceWith(L), e(A.controls).on("click", "li", function(t) {
                var r = t.target,
                    o = e(r).closest("li");
                k.stopIndex = void 0, T(o), k.save.call(k)
            });
            var D = function(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {};
                    if (r instanceof jQuery)
                        if (n.type = r[0].dataset.type, n.type) {
                            var i = E.custom.lookup(n.type);
                            if (i) n = Object.assign({}, i);
                            else {
                                var a = E.getClass(n.type);
                                n.label = a.label(n.type)
                            }
                        } else {
                            var l = r[0].attributes;
                            o || (n.values = r.children().map(function(t, r) {
                                return {
                                    label: e(r).text(),
                                    value: e(r).attr("value"),
                                    selected: Boolean(e(r).attr("selected"))
                                }
                            }));
                            for (var s = l.length - 1; s >= 0; s--) n[l[s].name] = l[s].value
                        }
                    else n = Object.assign({}, r);
                    n.name || (n.name = (0, h.nameAttr)(n)), o && ["text", "number", "file", "date", "select", "textarea", "autocomplete"].includes(n.type) && (n.className = n.className || "form-control");
                    var u = /(?:^|\s)btn-(.*?)(?:\s|$)/g.exec(n.className);
                    u && (n.style = u[1]), o && (n = Object.assign({}, n, t.onAddField(x.lastID, n)), setTimeout(function() {
                        return document.dispatchEvent(c.default.fieldAdded)
                    }, 10)), W(n, o), A.stage.classList.remove("empty")
                },
                M = function(r) {
                    (r = k.getData(r)) && r.length ? (r.forEach(function(e) {
                            return D((0, h.trimObj)(e))
                        }), A.stage.classList.remove("empty")) : t.defaultFields && t.defaultFields.length ? (t.defaultFields.forEach(function(e) {
                            return D(e)
                        }), A.stage.classList.remove("empty")) : t.prepend || t.append || (A.stage.classList.add("empty"), A.stage.dataset.content = f.default.get("getStarted")),
                        function() {
                            var r = [],
                                o = function(e) {
                                    return q("li", t[e], {
                                        className: "disabled-field form-" + e
                                    })
                                };
                            return t.prepend && !e(".disabled-field.form-prepend", A.stage).length && (r.push(!0), C.prepend(o("prepend"))), t.append && !e(".disabled-field.form-.append", A.stage).length && (r.push(!0), C.append(o("append"))), k.disabledTT(A.stage), r.some(function(e) {
                                return !0 === e
                            })
                        }() && A.stage.classList.remove("empty"), k.save()
                },
                R = function(e) {
                    var t = e.type,
                        r = e.values,
                        o = e.name,
                        n = void 0,
                        i = [q("a", f.default.get("addOption"), {
                            className: "add add-opt"
                        })],
                        a = [q("label", f.default.get("selectOptions"), {
                            className: "false-label"
                        })],
                        l = e.multiple || "checkbox-group" === t;
                    if (r && r.length) n = r.map(function(e) {
                        return Object.assign({}, {
                            selected: !1
                        }, e)
                    });
                    else {
                        var s = [1, 2, 3];
                        ["checkbox-group", "checkbox"].includes(t) && (s = [1]);
                        var u = (n = s.map(function(e) {
                            return function(e) {
                                var r = {
                                    label: e,
                                    value: (0, h.hyphenCase)(e)
                                };
                                return "autocomplete" !== t && (r.selected = !1), r
                            }("" + f.default.get("optionCount", e))
                        }))[0];
                        u.hasOwnProperty("selected") && "radio-group" !== t && (u.selected = !0)
                    }
                    var c = q("div", i, {
                            className: "option-actions"
                        }),
                        d = q("ol", n.map(function(e) {
                            return J(o, e, l)
                        }), {
                            className: "sortable-options"
                        }),
                        p = q("div", [d, c], {
                            className: "sortable-options-wrap"
                        });
                    return a.push(p), q("div", a, {
                        className: "form-group field-options"
                    }).outerHTML
                },
                B = function(e) {
                    var r = e.type,
                        o = [],
                        i = function(e) {
                            var t = ["required", "label", "description", "placeholder", "className", "name", "access", "value"],
                                r = !["header", "paragraph", "file", "autocomplete"].concat(A.optionFields).includes(e),
                                o = {
                                    autocomplete: t.concat(["options", "requireValidOption"]),
                                    button: ["label", "subtype", "style", "className", "name", "value", "access"],
                                    checkbox: ["required", "label", "description", "toggle", "inline", "className", "name", "access", "other", "options"],
                                    text: t.concat(["subtype", "maxlength"]),
                                    date: t,
                                    file: t.concat(["subtype", "multiple"]),
                                    header: ["label", "subtype", "className", "access"],
                                    hidden: ["name", "value", "access"],
                                    paragraph: ["label", "subtype", "className", "access"],
                                    number: t.concat(["min", "max", "step"]),
                                    select: t.concat(["multiple", "options"]),
                                    textarea: t.concat(["subtype", "maxlength", "rows"])
                                };
                            o["checkbox-group"] = o.checkbox, o["radio-group"] = o.checkbox;
                            var n = o[e];
                            return "radio-group" === e && (0, h.removeFromArray)("toggle", n), ["header", "paragraph", "button"].includes(e) && (0, h.removeFromArray)("description", n), r || (0, h.removeFromArray)("value", n), n || t
                        }(r),
                        a = {
                            required: function() {
                                return Y(e)
                            },
                            toggle: function() {
                                return z("toggle", e, {
                                    first: f.default.get("toggle")
                                })
                            },
                            inline: function() {
                                var t = {
                                    first: f.default.get("inline"),
                                    second: f.default.get("inlineDesc", r.replace("-group", ""))
                                };
                                return z("inline", e, t)
                            },
                            label: function() {
                                return V("label", e)
                            },
                            description: function() {
                                return V("description", e)
                            },
                            subtype: function() {
                                return Q("subtype", e, j[r])
                            },
                            style: function() {
                                return U(e.style)
                            },
                            placeholder: function() {
                                return V("placeholder", e)
                            },
                            rows: function() {
                                return H("rows", e)
                            },
                            className: function(t) {
                                return V("className", e, t)
                            },
                            name: function(t) {
                                return V("name", e, t)
                            },
                            value: function() {
                                return V("value", e)
                            },
                            maxlength: function() {
                                return H("maxlength", e)
                            },
                            access: function() {
                                var r = ['<div class="available-roles" ' + (e.role ? 'style="display:block"' : "") + ">"];
                                for (l in t.roles)
                                    if (t.roles.hasOwnProperty(l)) {
                                        var o = "fld-" + x.lastID + "-roles-" + l,
                                            n = {
                                                type: "checkbox",
                                                name: "roles[]",
                                                value: l,
                                                id: o,
                                                className: "roles-field"
                                            };
                                        s.includes(l) && (n.checked = "checked"), r.push('<label for="' + o + '">'), r.push(k.input(n).outerHTML), r.push(" " + t.roles[l] + "</label>")
                                    }
                                r.push("</div>");
                                var i = {
                                    first: f.default.get("roles"),
                                    second: f.default.get("limitRole"),
                                    content: r.join("")
                                };
                                return z("access", e, i)
                            },
                            other: function() {
                                return z("other", e, {
                                    first: f.default.get("enableOther"),
                                    second: f.default.get("enableOtherMsg")
                                })
                            },
                            options: function() {
                                return R(e)
                            },
                            requireValidOption: function() {
                                return z("requireValidOption", e, {
                                    first: " ",
                                    second: f.default.get("requireValidOption")
                                })
                            },
                            multiple: function() {
                                var t = {
                                    default: {
                                        first: "Multiple",
                                        second: "set multiple attribute"
                                    },
                                    file: {
                                        first: f.default.get("multipleFiles"),
                                        second: f.default.get("allowMultipleFiles")
                                    },
                                    select: {
                                        first: " ",
                                        second: f.default.get("selectionsMessage")
                                    }
                                };
                                return z("multiple", e, t[r] || t.default)
                            }
                        },
                        l = void 0,
                        s = void 0 !== e.role ? e.role.split(",") : [];
                    ["min", "max", "step"].forEach(function(t) {
                        a[t] = function() {
                            return H(t, e)
                        }
                    });
                    var u = ["name", "className"];
                    if (Object.keys(i).forEach(function(e) {
                            var n = i[e],
                                l = [!0],
                                s = t.disabledAttrs.includes(n);
                            if (t.typeUserDisabledAttrs[r]) {
                                var f = t.typeUserDisabledAttrs[r];
                                l.push(!f.includes(n))
                            }
                            if (t.typeUserAttrs[r]) {
                                var c = Object.keys(t.typeUserAttrs[r]);
                                l.push(!c.includes(n))
                            }
                            s && !u.includes(n) && l.push(!1), l.every(Boolean) && o.push(a[n](s))
                        }), t.typeUserAttrs[r]) {
                        var c = function(e, t) {
                            var r = [],
                                o = {
                                    array: P,
                                    string: I,
                                    number: H,
                                    boolean: function(e, r) {
                                        var o;
                                        return z(e, n({}, r, ((o = {})[e] = t[e], o)), {
                                            first: r.label
                                        })
                                    }
                                };
                            for (var i in e)
                                if (e.hasOwnProperty(i)) {
                                    var a = F(i, e[i]),
                                        l = f.default.get(i),
                                        s = e[i],
                                        u = s.value || "";
                                    s.value = t[i] || s.value || "", s.label && (y[i] = s.label), o[a] && r.push(o[a](i, s)), y[i] = l, s.value = u
                                }
                            return r.join("")
                        }(t.typeUserAttrs[r], e);
                        o.push(c)
                    }
                    return o.join("")
                };

            function F(e, t) {
                return [
                    ["array", function(e) {
                        return !!e.options
                    }],
                    [i(t.value), function() {
                        return !0
                    }]
                ].find(function(e) {
                    return e[1](t)
                })[0] || "string"
            }

            function I(e, t) {
                var r = t.class,
                    o = t.className,
                    n = v(t, ["class", "className"]),
                    i = {
                        id: e + "-" + x.lastID,
                        title: n.description || n.label || e.toUpperCase(),
                        name: e,
                        type: n.type || "text",
                        className: ["fld-" + e, (r || o || "").trim()]
                    },
                    a = '<label for="' + i.id + '">' + (y[e] || "") + "</label>";
                return ["checkbox", "checkbox-group", "radio-group"].includes(i.type) || i.className.push("form-control"), i = Object.assign({}, n, i), '<div class="form-group ' + e + '-wrap">' + a + ('<div class="input-wrap">' + ("<input " + (0, h.attrString)(i) + ">") + "</div>") + "</div>"
            }

            function P(e, t) {
                var r = t.multiple,
                    o = t.options,
                    n = t.label,
                    i = t.value,
                    a = t.class,
                    l = t.className,
                    s = v(t, ["multiple", "options", "label", "value", "class", "className"]),
                    u = Object.keys(o).map(function(e) {
                        var t = {
                            value: e
                        };
                        return (Array.isArray(i) ? i.includes(e) : e === i) && (t.selected = null), q("option", o[e], t)
                    }),
                    f = {
                        id: e + "-" + x.lastID,
                        title: s.description || n || e.toUpperCase(),
                        name: e,
                        className: ("fld-" + e + " form-control " + (a || l || "")).trim()
                    };
                r && (f.multiple = !0);
                var c = '<label for="' + f.id + '">' + y[e] + "</label>";
                return Object.keys(s).forEach(function(e) {
                    f[e] = s[e]
                }), '<div class="form-group ' + e + '-wrap">' + c + ('<div class="input-wrap">' + q("select", u, f).outerHTML + "</div>") + "</div>"
            }
            var z = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = function(t) {
                            return q("label", t, {
                                for: e + "-" + x.lastID
                            }).outerHTML
                        },
                        n = {
                            type: "checkbox",
                            className: "fld-" + e,
                            name: e,
                            id: e + "-" + x.lastID
                        };
                    t[e] && (n.checked = !0);
                    var i = [],
                        a = [q("input", null, n).outerHTML];
                    return r.first && i.push(o(r.first)), r.second && a.push(" ", o(r.second)), r.content && a.push(r.content), a = q("div", a, {
                        className: "input-wrap"
                    }).outerHTML, q("div", i.concat(a), {
                        className: "form-group " + e + "-wrap"
                    }).outerHTML
                },
                U = function(e) {
                    var t = "";
                    "undefined" === e && (e = "default");
                    var r = "<label>" + y.style + "</label>";
                    return t += k.input({
                        value: e || "default",
                        type: "hidden",
                        className: "btn-style"
                    }).outerHTML, t += '<div class="btn-group" role="group">', m.styles.btn.forEach(function(r) {
                        var o = ["btn-xs", "btn", "btn-" + r];
                        e === r && o.push("selected");
                        var n = q("button", f.default.get("styles.btn." + r), {
                            value: r,
                            type: "button",
                            className: o.join(" ")
                        }).outerHTML;
                        t += n
                    }), (t = q("div", [r, t += "</div>"], {
                        className: "form-group style-wrap"
                    })).outerHTML
                },
                H = function(e, t) {
                    var r = t.class,
                        o = t.className,
                        n = v(t, ["class", "className"])[e],
                        i = f.default.get(e) || e,
                        a = {
                            type: "number",
                            value: n,
                            name: e,
                            min: "0",
                            placeholder: f.default.get("placeholder." + e),
                            className: ("fld-" + e + " form-control " + (r || o || "")).trim(),
                            id: e + "-" + x.lastID
                        },
                        l = k.input((0, h.trimObj)(a)).outerHTML;
                    return q("div", ['<label for="' + a.id + '">' + i + "</label>", '<div class="input-wrap">' + l + "</div>"], {
                        className: "form-group " + e + "-wrap"
                    }).outerHTML
                },
                Q = function(e, t, r) {
                    var o = r.map(function(r, o) {
                            var n = Object.assign({
                                label: y.option + " " + o,
                                value: void 0
                            }, r);
                            return r.value === t[e] && (n.selected = !0), n = (0, h.trimObj)(n), q("option", n.label, n)
                        }),
                        n = {
                            id: e + "-" + x.lastID,
                            name: e,
                            className: "fld-" + e + " form-control"
                        },
                        i = f.default.get(e) || (0, h.capitalize)(e) || "",
                        a = q("label", i, {
                            for: n.id
                        }),
                        l = q("select", o, n),
                        s = q("div", l, {
                            className: "input-wrap"
                        });
                    return q("div", [a, s], {
                        className: "form-group " + n.name + "-wrap"
                    }).outerHTML
                },
                V = function(e, r) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = r[e] || "",
                        i = f.default.get(e);
                    "label" === e && (["paragraph"].includes(r.type) ? i = f.default.get("content") : n = (0, h.parsedHtml)(n));
                    var a = f.default.get("placeholders." + e) || "",
                        l = "";
                    if (![].some(function(e) {
                            return !0 === e
                        })) {
                        var s = {
                                name: e,
                                placeholder: a,
                                className: "fld-" + e + " form-control",
                                id: e + "-" + x.lastID
                            },
                            u = q("label", i, {
                                for: s.id
                            }).outerHTML;
                        "label" !== e || t.disableHTMLLabels ? (s.value = n, s.type = "text", l += "<input " + (0, h.attrString)(s) + ">") : (s.contenteditable = !0, l += q("div", n, s).outerHTML);
                        var c = '<div class="input-wrap">' + l + "</div>",
                            d = o ? "none" : "block";
                        "value" === e && (d = r.subtype && "quill" === r.subtype && "none"), l = q("div", [u, c], {
                            className: "form-group " + e + "-wrap",
                            style: "display: " + d
                        })
                    }
                    return l.outerHTML
                },
                Y = function(e) {
                    var t = e.type,
                        r = [],
                        o = "";
                    return ["header", "paragraph", "button"].includes(t) && r.push(!0), r.some(function(e) {
                        return !0 === e
                    }) || (o = z("required", e, {
                        first: f.default.get("required")
                    })), o
                },
                W = function(r) {
                    var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = r.type || "text",
                        i = r.label || (o ? y.get(n) || f.default.get("label") : ""),
                        a = t.disabledFieldButtons[n] || r.disabledFieldButtons,
                        l = [q("a", null, {
                            type: "remove",
                            id: "del_" + x.lastID,
                            className: "del-button btn icon-cancel delete-confirm",
                            title: f.default.get("removeMessage")
                        }), q("a", null, {
                            type: "edit",
                            id: x.lastID + "-edit",
                            className: "toggle-form btn icon-pencil",
                            title: f.default.get("hide")
                        }), q("a", null, {
                            type: "copy",
                            id: x.lastID + "-copy",
                            className: "copy-button btn icon-copy",
                            title: f.default.get("copyButtonTooltip")
                        })];
                    a && Array.isArray(a) && (l = l.filter(function(e) {
                        return !a.includes(e.type)
                    }));
                    var s = [q("div", l, {
                        className: "field-actions"
                    })];
                    s.push(q("label", (0, h.parsedHtml)(i), {
                        className: "field-label"
                    })), s.push(q("span", " *", {
                        className: "required-asterisk",
                        style: r.required ? "display:inline" : ""
                    }));
                    var u = {
                        className: "tooltip-element",
                        tooltip: r.description,
                        style: r.description ? "display:inline-block" : "display:none"
                    };
                    s.push(q("span", "?", u)), s.push(q("div", "", {
                        className: "prev-holder"
                    }));
                    var c = q("div", [B(r), q("a", f.default.get("close"), {
                            className: "close-field"
                        })], {
                            className: "form-elements"
                        }),
                        d = q("div", c, {
                            id: x.lastID + "-holder",
                            className: "frm-holder",
                            dataFieldId: x.lastID
                        });
                    g.currentEditPanel = d, s.push(d);
                    var p = q("li", s, {
                            class: n + "-field form-field",
                            type: n,
                            id: x.lastID
                        }),
                        m = e(p);
                    m.data("fieldData", {
                        attrs: r
                    }), void 0 !== k.stopIndex ? e("> li", A.stage).eq(k.stopIndex).before(m) : C.append(m), e(".sortable-options", m).sortable({
                        update: function() {
                            return k.updatePreview(m)
                        }
                    }), k.updatePreview(m), t.typeUserEvents[n] && t.typeUserEvents[n].onadd && t.typeUserEvents[n].onadd(p), o && (t.editOnAdd && (k.closeAllEdit(), k.toggleEdit(x.lastID, !1)), p.scrollIntoView && t.scrollToFieldOnAdd && p.scrollIntoView({
                        behavior: "smooth"
                    })), x.lastID = k.incrementId(x.lastID)
                },
                J = function(e, t, r) {
                    var o = {
                            selected: r ? "checkbox" : "radio"
                        },
                        n = ["value", "label", "selected"],
                        i = [];
                    t = Object.assign({
                        selected: !1,
                        label: "",
                        value: ""
                    }, t);
                    for (var a = n.length - 1; a >= 0; a--) {
                        var l = n[a];
                        if (t.hasOwnProperty(l)) {
                            var s = {
                                type: o[l] || "text",
                                className: "option-" + l,
                                value: t[l],
                                name: e + "-option"
                            };
                            s.placeholder = f.default.get("placeholder." + l) || "", "selected" === l && !0 === t.selected && (s.checked = t.selected), i.push(q("input", null, s))
                        }
                    }
                    var u = {
                        className: "remove btn icon-cancel",
                        title: f.default.get("removeMessage")
                    };
                    return i.push(q("a", null, u)), q("li", i).outerHTML
                },
                Z = [".form-elements input", ".form-elements select", ".form-elements textarea"].join(", ");
            C.on("change blur keyup click", Z, (0, a.default)(function(t) {
                if (t) {
                    if ([function(e) {
                            var t = e.type,
                                r = e.target;
                            return "keyup" === t && "className" === r.name
                        }].some(function(e) {
                            return e(t)
                        })) return !1;
                    k.updatePreview(e(t.target).closest(".form-field")), k.save.call(k)
                }
            }, 333, {
                leading: !1
            })), C.on("click touchstart", ".remove", function(r) {
                var o = e(r.target).parents(".form-field:eq(0)"),
                    n = o[0],
                    i = n.getAttribute("type"),
                    a = e(r.target.parentElement);
                r.preventDefault(), n.querySelector(".sortable-options").childNodes.length <= 2 && !i.includes("checkbox") ? t.notify.error("Error: " + f.default.get("minOptionMessage")) : a.slideUp("250", function() {
                    a.remove(), k.updatePreview(o), k.save.call(k)
                })
            }), C.on("touchstart", "input", function(t) {
                var r = e(o);
                if (!0 === t.handled) return !1;
                if ("checkbox" === r.attr("type")) r.trigger("click");
                else {
                    r.focus();
                    var n = r.val();
                    r.val(n)
                }
            }), C.on("click touchstart", ".toggle-form, .close-field", function(t) {
                if (t.stopPropagation(), t.preventDefault(), !0 === t.handled) return !1;
                var r = e(t.target).parents(".form-field:eq(0)").attr("id");
                k.toggleEdit(r), t.handled = !0
            }), C.on("dblclick", "li.form-field", function(t) {
                if (!["select", "input", "label"].includes(t.target.tagName.toLowerCase()) && "true" !== t.target.contentEditable && (t.stopPropagation(), t.preventDefault(), !0 !== t.handled)) {
                    var r = "li" == t.target.tagName ? e(t.target).attr("id") : e(t.target).closest("li.form-field").attr("id");
                    k.toggleEdit(r), t.handled = !0
                }
            }), C.on("change", '[name="subtype"]', function(t) {
                var r = e(t.target).closest("li.form-field");
                e(".value-wrap", r).toggle("quill" !== t.target.value)
            });
            if (C.on("change", [".prev-holder input", ".prev-holder select", ".prev-holder textarea"].join(", "), function(e) {
                    var t = void 0;
                    if (!e.target.classList.contains("other-option")) {
                        var r = (0, h.closest)(e.target, ".form-field");
                        if (["select", "checkbox-group", "radio-group"].includes(r.type)) {
                            var o = r.getElementsByClassName("option-value");
                            "select" === r.type ? (0, h.forEach)(o, function(t) {
                                o[t].parentElement.childNodes[0].checked = e.target.value === o[t].value
                            }) : (t = document.getElementsByName(e.target.name), (0, h.forEach)(t, function(e) {
                                o[e].parentElement.childNodes[0].checked = t[e].checked
                            }))
                        } else {
                            var n = document.getElementById("value-" + r.id);
                            n && (n.value = e.target.value)
                        }
                        k.save.call(k)
                    }
                }), (0, h.addEventListeners)(A.stage, "keyup change", function(e) {
                    var t = e.target;
                    if (t.classList.contains("fld-label")) {
                        var r = t.value || t.innerHTML;
                        (0, h.closest)(t, ".form-field").querySelector(".field-label").innerHTML = (0, h.parsedHtml)(r)
                    }
                }), C.on("keyup", "input.error", function(t) {
                    var r = t.target;
                    return e(r).removeClass("error")
                }), C.on("keyup", 'input[name="description"]', function(t) {
                    var r = e(t.target).parents(".form-field:eq(0)"),
                        o = e(".tooltip-element", r),
                        n = e(t.target).val();
                    if ("" !== n)
                        if (o.length) o.attr("tooltip", n).css("display", "inline-block");
                        else {
                            var i = '<span class="tooltip-element" tooltip="' + n + '">?</span>';
                            e(".field-label", r).after(i)
                        }
                    else o.length && o.css("display", "none")
                }), C.on("change", ".fld-multiple", function(t) {
                    var r = t.target.checked ? "checkbox" : "radio",
                        o = e(".option-selected", e(t.target).closest(".form-elements"));
                    return o.each(function(e) {
                        return o[e].type = r
                    }), r
                }), C.on("blur", "input.fld-name", function(t) {
                    t.target.value = (0, h.safename)(t.target.value), "" === t.target.value ? e(t.target).addClass("field-error").attr("placeholder", f.default.get("cannotBeEmpty")) : e(t.target).removeClass("field-error")
                }), C.on("blur", "input.fld-maxlength", function(e) {
                    e.target.value = (0, h.forceNumber)(e.target.value)
                }), C.on("click touchstart", ".icon-copy", function(r) {
                    r.preventDefault();
                    var o = e(r.target).parent().parent("li"),
                        n = function(r) {
                            var o = r.attr("id"),
                                n = r.attr("type"),
                                i = n + "-" + (new Date).getTime(),
                                a = r.clone();
                            return e(".fld-name", a).val(i), a.find("[id]").each(function(e, t) {
                                t.id = t.id.replace(o, x.lastID)
                            }), a.find("[for]").each(function(e, t) {
                                var r = t.getAttribute("for").replace(o, x.lastID);
                                t.setAttribute("for", r)
                            }), a.attr("id", x.lastID), a.attr("name", i), a.addClass("cloned"), e(".sortable-options", a).sortable(), t.typeUserEvents[n] && t.typeUserEvents[n].onclone && t.typeUserEvents[n].onclone(a[0]), x.lastID = k.incrementId(x.lastID), a
                        }(o);
                    n.insertAfter(o), k.updatePreview(n), k.save.call(k)
                }), C.on("click touchstart", ".delete-confirm", function(r) {
                    r.preventDefault();
                    var o = r.target.getBoundingClientRect(),
                        n = document.body.getBoundingClientRect(),
                        i = {
                            pageX: o.left + o.width / 2,
                            pageY: o.top - n.top - 12
                        },
                        a = e(r.target).parents(".form-field:eq(0)").attr("id"),
                        l = e(document.getElementById(a));
                    if (document.addEventListener("modalClosed", function() {
                            l.removeClass("deleting")
                        }, !1), t.fieldRemoveWarn) {
                        var s = q("h3", f.default.get("warning")),
                            u = q("p", f.default.get("fieldRemoveWarning"));
                        k.confirm([s, u], function() {
                            return k.removeField(a)
                        }, i), l.addClass("deleting")
                    } else k.removeField(a)
                }), C.on("click", ".style-wrap button", function(t) {
                    var r = e(t.target),
                        o = r.val(),
                        n = r.parent().prev(".btn-style");
                    n.val(o), r.siblings(".btn").removeClass("selected"), r.addClass("selected"), k.updatePreview(n.closest(".form-field")), k.save.call(k)
                }), C.on("click", ".fld-required", function(t) {
                    e(t.target).closest(".form-field").find(".required-asterisk").toggle()
                }), C.on("click", "input.fld-access", function(t) {
                    var r = e(t.target).closest(".form-field").find(".available-roles"),
                        o = e(t.target);
                    r.slideToggle(250, function() {
                        o.is(":checked") || e("input[type=checkbox]", r).removeAttr("checked")
                    })
                }), C.on("click", ".add-opt", function(t) {
                    t.preventDefault();
                    var r = e(t.target).closest(".field-options"),
                        o = e('[name="multiple"]', r),
                        n = e(".option-selected:eq(0)", r),
                        i = !1;
                    i = o.length ? o.prop("checked") : "checkbox" === n.attr("type");
                    var a = n.attr("name").replace(/-option$/, "");
                    e(".sortable-options", r).append(J(a, !1, i))
                }), C.on("mouseover mouseout", ".remove, .del-button", function(t) {
                    return e(t.target).closest("li").toggleClass("delete")
                }), M(), t.disableInjectedStyle) {
                var X = document.getElementsByClassName("formBuilder-injected-style");
                (0, h.forEach)(X, function(e) {
                    return (0, l.remove)(X[e])
                })
            }
            return document.dispatchEvent(c.default.loaded), g.actions = {
                getFieldTypes: function(e) {
                    return e ? (0, h.subtract)(E.getRegistered(), t.disableFields) : E.getRegistered()
                },
                clearFields: function(e) {
                    return k.removeAllFields(A.stage, e)
                },
                showData: k.showData.bind(k),
                save: k.save.bind(k),
                addField: function(e, t) {
                    k.stopIndex = x.formData.length ? t : void 0, D(e)
                },
                removeField: k.removeField.bind(k),
                getData: k.getFormData.bind(k),
                setData: function(e) {
                    k.stopIndex = void 0, k.removeAllFields(A.stage, !1), M(e)
                },
                setLang: function(e) {
                    f.default.setCurrent.call(f.default, e).then(function() {
                        A.stage.dataset.content = f.default.get("getStarted"), E.init(), A.empty(A.formActions), k.formActionButtons().forEach(function(e) {
                            return A.formActions.appendChild(e)
                        })
                    })
                },
                toggleFieldEdit: function(e) {
                    (Array.isArray(e) ? e : [e]).forEach(function(e) {
                        ["number", "string"].includes(void 0 === e ? "undefined" : i(e)) && ("number" == typeof e ? e = A.stage.children[e].id : /^frmb-/.test(e) || (e = A.stage.querySelector(e).id), k.toggleEdit(e))
                    })
                },
                toggleAllFieldEdit: function() {
                    (0, h.forEach)(A.stage.children, function(e) {
                        k.toggleEdit(A.stage.children[e].id)
                    })
                },
                closeAllFieldEdit: k.closeAllEdit.bind(k)
            }, A.onRender(A.controls, function() {
                setTimeout(function() {
                    A.stage.style.minHeight = A.controls.clientHeight + "px", t.stickyControls.enable && k.stickyControls(C)
                }, 0)
            }), g
        };
        ! function(e) {
            var t = {
                init: function(r, o) {
                    var n = jQuery.extend({}, m.defaultOptions, r, !0),
                        i = n.i18n,
                        a = v(n, ["i18n"]);
                    m.config.opts = a;
                    var l = jQuery.extend({}, m.defaultI18n, i, !0);
                    return t.instance = {
                        actions: {
                            getFieldTypes: null,
                            addField: null,
                            clearFields: null,
                            closeAllFieldEdit: null,
                            getData: null,
                            removeField: null,
                            save: null,
                            setData: null,
                            setLang: null,
                            showData: null,
                            toggleAllFieldEdit: null,
                            toggleFieldEdit: null
                        },
                        get formData() {
                            return t.instance.actions.getData && t.instance.actions.getData("json")
                        },
                        promise: new Promise(function(r, n) {
                            f.default.init(l).then(function() {
                                o.each(function(r) {
                                    var n = new y(a, o[r]);
                                    e(o[r]).data("formBuilder", n), Object.assign(t, n.actions), t.instance.actions = n.actions
                                }), delete t.instance.promise, r(t.instance)
                            }).catch(a.notify.error)
                        })
                    }, t.instance
                }
            };
            jQuery.fn.formBuilder = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (t[e]) {
                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) o[n - 1] = arguments[n];
                    return t[e].apply(this, o)
                }
                var i = t.init(e, this);
                return Object.assign(t, i), i
            }
        }(jQuery)
    }])
}(jQuery);