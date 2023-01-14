(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ba(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        fa = {},
        ha = {};

    function ja(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (ea && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                ta = {};
            try {
                ta.__proto__ = ra;
                qa = ta.a;
                break a
            } catch (a) {}
            qa = !1
        }
        ma = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ua = ma;

    function va(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (ua) ua(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ag = b.prototype
    }
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        va(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new fa.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var t = this || self;

    function xa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ya(a) {
        var b = xa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ka(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ma(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ma = Ea : Ma = Ka;
        return Ma.apply(null, arguments)
    }

    function Na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Pa() {
        return Date.now()
    }

    function Qa(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ra(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ag = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Xj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Sa(a) {
        return a
    };
    var Ta = {
        dj: 0,
        cj: 1,
        bj: 2
    };

    function Ua(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ra(Ua, Error);
    Ua.prototype.name = "CustomError";
    var Wa;

    function Xa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ua.call(this, c + a[d])
    }
    Ra(Xa, Ua);
    Xa.prototype.name = "AssertionError";

    function Ya(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ab(a) {
        if (!bb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(cb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(db, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(eb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(fb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(gb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(hb, "&#0;"));
        return a
    }
    var cb = /&/g,
        db = /</g,
        eb = />/g,
        fb = /"/g,
        gb = /'/g,
        hb = /\x00/g,
        bb = /[\x00&<>"']/;

    function ib(a, b) {
        return -1 != a.indexOf(b)
    }

    function jb(a) {
        var b = kb();
        let c = 0;
        b = Ya(String(b)).split(".");
        a = Ya(String(a)).split(".");
        const d = Math.max(b.length, a.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = b[g] || "",
                f = a[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = lb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || lb(0 == e[2].length, 0 == f[2].length) || lb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function lb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function mb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function u(a) {
        return ib(mb(), a)
    };

    function nb() {
        return u("Opera")
    }

    function ob() {
        return u("Trident") || u("MSIE")
    }

    function pb() {
        return u("Firefox") || u("FxiOS")
    }

    function qb() {
        return u("Safari") && !(rb() || u("Coast") || nb() || u("Edge") || u("Edg/") || u("OPR") || pb() || u("Silk") || u("Android"))
    }

    function rb() {
        return (u("Chrome") || u("CriOS")) && !u("Edge") || u("Silk")
    }

    function sb() {
        return u("Android") && !(rb() || pb() || nb() || u("Silk"))
    }

    function tb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function kb() {
        var a = mb();
        if (ob()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = tb(b);
        return nb() ? a(["Version", "Opera"]) :
            u("Edge") ? a(["Edge"]) : u("Edg/") ? a(["Edg"]) : u("Silk") ? a(["Silk"]) : rb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function ub(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function yb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function zb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ab(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Bb(a, b, c) {
        let d = c;
        yb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Cb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Db(a, b) {
        return 0 <= ub(a, b)
    }

    function Eb(a, b) {
        b = ub(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Fb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Gb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Hb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ib(a, b, c) {
        c = c || Jb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function Kb(a, b) {
        if (!ya(a) || !ya(b) || a.length != b.length) return !1;
        const c = a.length,
            d = Lb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Jb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Lb(a, b) {
        return a === b
    }

    function Mb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Mb.apply(null, Hb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Ob(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Pb(a) {
        Pb[" "](a);
        return a
    }
    Pb[" "] = function() {};

    function Qb(a, b) {
        try {
            return Pb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Rb = nb(),
        Sb = ob(),
        Tb = u("Edge"),
        Ub = Tb || Sb,
        Vb = u("Gecko") && !(ib(mb().toLowerCase(), "webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Wb = ib(mb().toLowerCase(), "webkit") && !u("Edge");

    function Xb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Yb;
    a: {
        var Zb = "",
            $b = function() {
                var a = mb();
                if (Vb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Tb) return /Edge\/([\d\.]+)/.exec(a);
                if (Sb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Wb) return /WebKit\/(\S+)/.exec(a);
                if (Rb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();$b && (Zb = $b ? $b[1] : "");
        if (Sb) {
            var ac = Xb();
            if (null != ac && ac > parseFloat(Zb)) {
                Yb = String(ac);
                break a
            }
        }
        Yb = Zb
    }
    var ec = Yb,
        fc;
    if (t.document && Sb) {
        var gc = Xb();
        fc = gc ? gc : parseInt(ec, 10) || void 0
    } else fc = void 0;
    var hc = fc;
    sb();
    rb();
    qb();
    var ic = {},
        jc = null;

    function kc(a, b) {
        void 0 === b && (b = 0);
        lc();
        b = ic[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function mc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return kc(b, 3)
    }

    function nc(a) {
        var b = [];
        oc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function pc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : ib("=.", a[b - 1]) && (c = ib("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        oc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function oc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = jc[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        lc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function lc() {
        if (!jc) {
            jc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                ic[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === jc[f] && (jc[f] = e)
                }
            }
        }
    };
    var qc = "undefined" !== typeof Uint8Array;

    function vc(a) {
        return qc && null != a && a instanceof Uint8Array
    }
    let wc;
    var xc = {};
    let yc;

    function zc(a) {
        if (a !== xc) throw Error("illegal external caller");
    }

    function Ac() {
        return yc || (yc = new Bc(null, xc))
    }
    var Bc = class {
        constructor(a, b) {
            zc(b);
            this.O = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.O
        }
    };
    const Cc = Symbol();

    function Dc(a, b) {
        if (Cc) return a[Cc] |= b;
        if (void 0 !== a.ya) return a.ya |= b;
        Object.defineProperties(a, {
            ya: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Ec(a, b) {
        Cc ? a[Cc] && (a[Cc] &= ~b) : void 0 !== a.ya && (a.ya &= ~b)
    }

    function Fc(a) {
        let b;
        Cc ? b = a[Cc] : b = a.ya;
        return null == b ? 0 : b
    }

    function Gc(a, b) {
        Cc ? a[Cc] = b : void 0 !== a.ya ? a.ya = b : Object.defineProperties(a, {
            ya: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Hc(a) {
        Dc(a, 1);
        return a
    }

    function Ic(a) {
        return !!(Fc(a) & 2)
    }

    function Jc(a) {
        Dc(a, 16);
        return a
    }

    function Kc(a, b) {
        Gc(b, (a | 0) & -51)
    }

    function Lc(a, b) {
        Gc(b, (a | 18) & -41)
    };
    var Mc = {};

    function Nc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Oc;

    function Pc(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Bc(a, xc) : Ac();
            else if (a.constructor !== Bc)
            if (vc(a)) a = a.length ? new Bc(new Uint8Array(a), xc) : Ac();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Qc;
    const Rc = [];
    Gc(Rc, 23);
    Qc = Object.freeze(Rc);

    function Sc(a) {
        if (Ic(a.P)) throw Error("Cannot mutate an immutable Message");
    }

    function Tc(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Nc(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function Uc(a) {
        return a
    }

    function Vc(a) {
        return a
    }

    function Wc(a) {
        return a
    }

    function Xc(a) {
        return a
    }

    function Yc(a) {
        return a
    }

    function Zc(a, b, c = !1) {
        if (Array.isArray(a)) return new b(c ? Jc(a) : a)
    };
    let $c;

    function ad(a, b) {
        $c = b;
        a = new a(b);
        $c = void 0;
        return a
    };

    function bd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (Fc(a) & 128)) return a = Array.prototype.slice.call(a), Tc(a), a
                    } else {
                        if (vc(a)) return kc(a);
                        if (a instanceof Bc) {
                            const b = a.O;
                            return null == b ? "" : "string" === typeof b ? b : a.O = kc(b)
                        }
                    }
        }
        return a
    };

    function cd(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = dd(a, b, c, void 0 !== d);
            else if (Nc(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = cd(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function dd(a, b, c, d) {
        const e = Fc(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = cd(a[f], b, c, d);
        c(e, a);
        return a
    }

    function ed(a) {
        return a.Zb === Mc ? a.toJSON() : bd(a)
    }

    function fd(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (vc(a)) return new Uint8Array(a);
            if (a.Zb === Mc) return gd(a)
        }
        return a
    }

    function hd(a, b) {
        a & 128 && Tc(b)
    };

    function id(a) {
        return a.l || (a.l = a.P[a.A + a.Ia] = {})
    }

    function v(a, b, c) {
        return -1 === b ? null : b >= a.A ? a.l ? a.l[b] : void 0 : c && a.l && (c = a.l[b], null != c) ? c : a.P[b + a.Ia]
    }

    function x(a, b, c, d) {
        Sc(a);
        return jd(a, b, c, d)
    }

    function jd(a, b, c, d) {
        a.C && (a.C = void 0);
        if (b >= a.A || d) return id(a)[b] = c, a;
        a.P[b + a.Ia] = c;
        (c = a.l) && b in c && delete c[b];
        return a
    }

    function kd(a, b) {
        return null != v(a, b, !1)
    }

    function ld(a, b, c) {
        return void 0 !== md(a, b, c, !1)
    }

    function nd(a, b, c, d, e) {
        let f = v(a, b, d);
        Array.isArray(f) || (f = Qc);
        const g = Fc(f);
        g & 1 || Hc(f);
        if (e) g & 2 || Dc(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Ec(f, 16) : (f = Hc(Array.prototype.slice.call(f)), jd(a, b, f, d))
        }
        return f
    }

    function od(a, b) {
        return nd(a, b, 0, !1, Ic(a.P))
    }

    function pd(a, b) {
        a = v(a, b);
        return null == a ? a : +a
    }

    function y(a, b) {
        a = v(a, b);
        return null == a ? a : !!a
    }

    function qd(a, b, c, d) {
        const e = Ic(a.P);
        let f = nd(a, b, 1, d, e);
        const g = Fc(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Hc(f.slice()), jd(a, b, f, d));
            let h = 0,
                k = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            Dc(f, 5);
            e && (Dc(f, 2), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), Dc(f, 5), rd(a, b, f, d));
        return f
    }

    function sd(a, b) {
        a = v(a, b);
        return null == a ? 0 : a
    }

    function td(a, b, c, d) {
        if (null == c) return x(a, b, Qc);
        const e = Fc(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (let f = 0; f < c.length; f++) c[f] = d(c[f]);
            Gc(c, e | 5)
        }
        return x(a, b, c)
    }

    function rd(a, b, c, d) {
        if (null == c) c = Qc;
        else {
            const e = Fc(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), Gc(c, e | 1))
        }
        return x(a, b, c, d)
    }

    function z(a, b, c, d) {
        Sc(a);
        c !== d ? jd(a, b, c) : jd(a, b, void 0, !1);
        return a
    }

    function wd(a, b, c, d) {
        Sc(a);
        (c = xd(a, c)) && c !== b && null != d && jd(a, c, void 0, !1);
        return jd(a, b, d)
    }

    function xd(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != v(a, e) && (0 !== c && jd(a, c, void 0, !1), c = e)
        }
        return c
    }

    function md(a, b, c, d) {
        const e = v(a, c, d); {
            let g = !1;
            var f = null == e || "object" !== typeof e || (g = Array.isArray(e)) || e.Zb !== Mc ? g ? new b(e) : void 0 : e
        }
        f !== e && null != f && (jd(a, c, f, d), Dc(f.P, Fc(a.P) & 18));
        return f
    }

    function A(a, b, c) {
        b = md(a, b, c, !1);
        if (null == b) return b;
        if (!Ic(a.P)) {
            var d = yd(b);
            d !== b && (b = d, jd(a, c, b, !1))
        }
        return b
    }

    function zd(a, b, c, d, e, f) {
        a.ga || (a.ga = {});
        let g = a.ga[c],
            h = nd(a, c, 3, d, f);
        if (g) f || (Object.isFrozen(g) ? e || (g = Array.prototype.slice.call(g), a.ga[c] = g) : e && Object.freeze(g));
        else {
            g = [];
            const k = !!(Fc(a.P) & 16),
                l = Ic(h);
            !f && l && (h = Hc(Array.prototype.slice.call(h)), jd(a, c, h, d));
            d = l;
            for (let m = 0; m < h.length; m++) {
                const n = h[m],
                    q = Zc(n, b, k);
                void 0 !== q && (d = d || Ic(n), g.push(q), l && Dc(q.P, 2))
            }
            a.ga[c] = g;
            a = h;
            Object.isFrozen(a) || (b = Fc(a) | 33, Gc(a, d ? b & -9 : b | 8));
            (f || e && l) && Dc(g, 2);
            (f || e) && Object.freeze(g)
        }
        return g
    }

    function C(a, b, c, d) {
        var e = Ic(a.P);
        b = zd(a, b, c, d, e, e);
        a = nd(a, c, 3, d, e);
        if (!(e || Fc(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = yd(c), c !== d && (b[e] = d, a[e] = b[e].P);
            Dc(a, 8)
        }
        return b
    }

    function Ad(a, b, c) {
        Sc(a);
        null == c && (c = void 0);
        return jd(a, b, c)
    }

    function Bd(a, b, c, d) {
        Sc(a);
        null == d && (d = void 0);
        return wd(a, b, c, d)
    }

    function Cd(a, b, c, d) {
        Sc(a);
        let e;
        if (null != c) {
            e = Hc([]);
            let f = !1;
            for (let g = 0; g < c.length; g++) e[g] = c[g].P, f = f || Ic(e[g]);
            a.ga || (a.ga = {});
            a.ga[b] = c;
            c = e;
            f ? Ec(c, 8) : Dc(c, 8)
        } else a.ga && (a.ga[b] = void 0), e = Qc;
        return jd(a, b, e, d)
    }

    function Dd(a, b, c, d) {
        Sc(a);
        const e = zd(a, c, b, void 0, !1, !1);
        c = null != d ? d : new c;
        b = nd(a, b, 2, void 0, !1);
        e.push(c);
        b.push(c.P);
        Ic(c.P) && Ec(b, 8);
        return a
    }

    function Ed(a, b) {
        return Fd(v(a, b), 0)
    }

    function Gd(a, b) {
        return v(a, b)
    }

    function Fd(a, b) {
        return null == a ? b : a
    }

    function E(a, b) {
        return Fd(v(a, b), "")
    }

    function J(a, b, c = !1) {
        return Fd(y(a, b), c)
    }

    function Hd(a, b) {
        return Fd(v(a, b), 0)
    }

    function Id(a, b, c, d) {
        c = xd(a, d) === c ? c : -1;
        return A(a, b, c)
    }

    function Jd(a, b, c) {
        return z(a, b, c, !1)
    }

    function Kd(a, b, c) {
        return z(a, b, c, 0)
    };

    function Ld(a) {
        const b = Fc(a);
        if (b & 2) return a;
        a = Ab(a, Md);
        Lc(b, a);
        Object.freeze(a);
        return a
    }

    function Nd(a, b, c = Lc) {
        if (null != a) {
            if (qc && a instanceof Uint8Array) return a.length ? new Bc(new Uint8Array(a), xc) : Ac();
            if (Array.isArray(a)) {
                const d = Fc(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Gc(a, d | 2), a;
                a = dd(a, Nd, c, !0);
                b = Fc(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Zb === Mc ? Md(a) : a
        }
    }

    function Md(a) {
        if (Ic(a.P)) return a;
        a = Od(a, !0);
        Dc(a.P, 2);
        return a
    }

    function Od(a, b) {
        const c = a.P;
        var d = Jc([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (Fc(c) & 128) && Tc(d);
        b = b || Ic(a.P) ? Lc : Kc;
        d = ad(a.constructor, d);
        a.xb && (d.xb = a.xb.slice());
        e = !!(Fc(c) & 16);
        for (let n = 0; n < c.length; n++) {
            var f = c[n];
            if (n === c.length - 1 && Nc(f))
                for (const q in f) {
                    var g = +q;
                    if (Number.isNaN(g)) id(d)[g] = f[g];
                    else {
                        var h = d,
                            k = f[q],
                            l = e,
                            m = b;
                        const r = a.ga && a.ga[g];
                        r ? Cd(h, g, Ld(r), !0) : x(h, g, Nd(k, l, m), !0)
                    }
                } else h = d, g = n - a.Ia, k = e, l = b, (m = a.ga && a.ga[g]) ? Cd(h, g, Ld(m), !1) : x(h, g, Nd(f, k, l), !1)
        }
        return d
    }

    function yd(a) {
        if (!Ic(a.P)) return a;
        const b = Od(a, !1);
        b.C = a;
        return b
    };

    function Pd(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        return ad(a, Jc(b))
    }

    function gd(a) {
        var b = dd(a.P, fd, Kc);
        Jc(b);
        $c = b;
        b = new a.constructor(b);
        $c = void 0;
        Qd(b, a);
        return b
    }

    function Rd(a) {
        Oc = !0;
        try {
            return JSON.stringify(a.toJSON(), Sd)
        } finally {
            Oc = !1
        }
    }
    var L = class {
        constructor(a, b, c) {
            null == a && (a = $c);
            $c = void 0;
            var d = this.constructor.j || 0,
                e = 0 < d,
                f = this.constructor.messageId,
                g = !1;
            if (null == a) {
                a = f ? [f] : [];
                var h = !0;
                Gc(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (f && f !== a[0]) throw Error();
                const k = Dc(a, 0);
                let l = k;
                if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
                if (e)
                    if (128 & l) d = 0;
                    else {
                        if (0 < a.length) {
                            const m = a[a.length - 1];
                            if (Nc(m) && "g" in m) {
                                d = 0;
                                l |= 128;
                                delete m.g;
                                let n = !0;
                                for (let q in m) {
                                    n = !1;
                                    break
                                }
                                n && a.pop()
                            }
                        }
                    }
                else if (128 & l) throw Error();
                k !== l && Gc(a, l)
            }
            this.Ia = (f ?
                0 : -1) - d;
            this.ga = void 0;
            this.P = a;
            a: {
                f = this.P.length;d = f - 1;
                if (f && (f = this.P[d], Nc(f))) {
                    this.l = f;
                    this.A = d - this.Ia;
                    break a
                }
                void 0 !== b && -1 < b ? (this.A = Math.max(b, d + 1 - this.Ia), this.l = void 0) : this.A = Number.MAX_VALUE
            }
            if (!e && this.l && "g" in this.l) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !g && !0;
                e = this.A;
                let k;
                for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.Ia, (d = a[g]) ? Td(d, b) : a[g] = Qc) : (k || (k = id(this)), (d = k[g]) ? Td(d, b) : k[g] = Qc)
            }
        }
        toJSON() {
            const a = this.P;
            return Oc ?
                a : dd(a, ed, hd)
        }
    };

    function Td(a, b) {
        if (Array.isArray(a)) {
            var c = Fc(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Gc(a, c | d)
        }
    }
    L.prototype.Zb = Mc;

    function Sd(a, b) {
        return bd(b)
    }

    function Qd(a, b) {
        b.xb && (a.xb = b.xb.slice());
        const c = b.ga;
        if (c) {
            b = b.l;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = C(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) Qd(d[e], g[e])
                    } else throw Error("unexpected object: type: " + xa(g) + ": " + g);
                }
            }
        }
    };
    const Ud = a => null !== a && void 0 !== a;
    let Vd = void 0;

    function Wd(a, b) {
        const c = Vd;
        Vd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Xd(a, b) {
        this.j = a === Yd && b || "";
        this.l = Zd
    }
    Xd.prototype.ra = !0;
    Xd.prototype.la = function() {
        return this.j
    };

    function $d(a) {
        return a instanceof Xd && a.constructor === Xd && a.l === Zd ? a.j : "type_error:Const"
    }

    function ae(a) {
        return new Xd(Yd, a)
    }
    var Zd = {},
        Yd = {};
    var be = ae("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function ce() {
        return !1
    }

    function de() {
        return !0
    }

    function ee(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function le(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function me(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ne(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function oe(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function pe(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var qe = {
            passive: !0
        },
        re = me(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function se(a) {
        return a ? a.passive && re() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, se(d)), !0) : !1
    }

    function te(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, se(d)), !0) : !1
    };

    function ue(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function ve(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function we(a) {
        var b = xe;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function ye(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function ze(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ae = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Be(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ae.length; f++) c = Ae[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ce = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var De;

    function Ee() {
        if (void 0 === De) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Sa,
                        createScript: Sa,
                        createScriptURL: Sa
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                De = a
            } else De = a
        }
        return De
    };
    const Fe = {};

    function Ge(a) {
        return a instanceof He && a.constructor === He ? a.j : "type_error:SafeScript"
    }
    class He {
        constructor(a, b) {
            this.j = b === Fe ? a : "";
            this.ra = !0
        }
        toString() {
            return this.j.toString()
        }
        la() {
            return this.j.toString()
        }
    };
    var Je = class {
        constructor(a, b) {
            this.j = b === Ie ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    Je.prototype.ra = !0;
    Je.prototype.la = function() {
        return this.j.toString()
    };

    function Ke(a, b) {
        a = Le.exec(Me(a).toString());
        var c = a[3] || "";
        return Ne(a[1] + Oe("?", a[2] || "", b) + Oe("#", c))
    }

    function Me(a) {
        return a instanceof Je && a.constructor === Je ? a.j : "type_error:TrustedResourceUrl"
    }

    function Pe(a, b) {
        var c = $d(a);
        if (!Qe.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Re, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Xd ? $d(d) : encodeURIComponent(String(d))
        });
        return Ne(a)
    }
    var Re = /%{(\w+)}/g,
        Qe = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Le = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ie = {};

    function Ne(a) {
        const b = Ee();
        a = b ? b.createScriptURL(a) : a;
        return new Je(a, Ie)
    }

    function Oe(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Te = class {
        constructor(a, b) {
            this.j = b === Se ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    Te.prototype.ra = !0;
    Te.prototype.la = function() {
        return this.j.toString()
    };

    function Ue(a) {
        return a instanceof Te && a.constructor === Te ? a.j : "type_error:SafeUrl"
    }
    var Ve = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        We = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Xe(a) {
        if (a instanceof Te) return a;
        a = "object" == typeof a && a.ra ? a.la() : String(a);
        We.test(a) ? a = new Te(a, Se) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Ve) ? new Te(a, Se) : null);
        return a
    }
    var Se = {},
        Ye = new Te("about:invalid#zClosurez", Se);
    const Ze = {};

    function $e(a) {
        return a instanceof af && a.constructor === af ? a.j : "type_error:SafeStyle"
    }

    function bf(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(cf).join(" ") : cf(d), b += `${c}:${d};`)
            }
        return b ? new af(b, Ze) : df
    }
    class af {
        constructor(a, b) {
            this.j = b === Ze ? a : "";
            this.ra = !0
        }
        la() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var df = new af("", Ze);

    function cf(a) {
        if (a instanceof Te) return 'url("' + Ue(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Xd) a = $d(a);
        else {
            a = String(a);
            var b = a.replace(ef, "$1").replace(ef, "$1").replace(ff, "url");
            if (gf.test(b)) {
                if (b = !hf.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && jf(a)
                }
                a = b ? kf(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Xa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function jf(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const gf = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        ff = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        ef = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        hf = /\/\*/;

    function kf(a) {
        return a.replace(ff, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (Xe(d) || Ye).la();
            return c + f + b + f + e
        })
    };
    const lf = {};

    function mf(a) {
        return a instanceof nf && a.constructor === nf ? a.j : "type_error:SafeStyleSheet"
    }
    class nf {
        constructor(a, b) {
            this.j = b === lf ? a : "";
            this.ra = !0
        }
        toString() {
            return this.j.toString()
        }
        la() {
            return this.j
        }
    };
    const of = {};

    function pf(a) {
        return a instanceof qf && a.constructor === qf ? a.j : "type_error:SafeHtml"
    }

    function rf(a) {
        return a instanceof qf ? a : sf(ab("object" == typeof a && a.ra ? a.la() : String(a)))
    }

    function sf(a) {
        const b = Ee();
        a = b ? b.createHTML(a) : a;
        return new qf(a, of )
    }

    function tf(a, b, c) {
        var d = String(a);
        if (!uf.test(d)) throw Error("");
        if (d.toUpperCase() in vf) throw Error("");
        return wf(String(a), b, c)
    }

    function wf(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!uf.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof Xd) e = $d(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!Aa(e)) throw Error("");
                            e instanceof af || (e = bf(e));
                            e = $e(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in xf)
                                if (e instanceof Je) e = Me(e).toString();
                                else if (e instanceof Te) e = Ue(e);
                            else if ("string" === typeof e) e = (Xe(e) || Ye).la();
                            else throw Error("");
                        }
                        e.ra && (e = e.la());
                        f = `${f}="` +
                            ab(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ce[a.toLowerCase()] ? b += ">" : (c = yf(c), b += ">" + pf(c).toString() + "</" + a + ">");
        return sf(b)
    }

    function zf(a) {
        const b = rf(Af),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = rf(e), c.push(pf(e).toString()))
            };
        a.forEach(d);
        return sf(c.join(pf(b).toString()))
    }

    function yf(a) {
        return zf(Array.prototype.slice.call(arguments))
    }
    class qf {
        constructor(a, b) {
            this.j = b === of ? a : "";
            this.ra = !0
        }
        la() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const uf = /^[a-zA-Z0-9-]+$/,
        xf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        vf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Pf = sf("<!DOCTYPE html>"),
        Af = new qf(t.trustedTypes && t.trustedTypes.emptyHTML || "", of ),
        Qf = sf("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Rf(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function Sf(a) {
        var b = Tf(Uf) || Ye;
        b = b instanceof Te ? Ue(b) : Rf(b);
        void 0 !== b && (a.href = b)
    };

    function Vf(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Wf = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Xf(a, b, c) {
        if (b instanceof Je) a.href = Me(b).toString();
        else {
            if (-1 === Wf.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof Te ? Ue(b) : Rf(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function Yf(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Zf(a, b) {
        a.src = Me(b);
        Yf(a)
    };
    class $f {
        constructor(a) {
            this.tf = a
        }
    }

    function ag(a) {
        return new $f(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Uf = [ag("data"), ag("http"), ag("https"), ag("mailto"), ag("ftp"), new $f(a => /^[^:]*([/?#]|$)/.test(a))];

    function Tf(a = Uf) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof $f && c.tf("#")) return new Te("#", Se)
        }
    };

    function bg(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Zf(f, a);
            "complete" !== b.document.readyState ? M(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function cg(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.ib}`;
        let c = void 0;
        try {
            c = await dg(b)
        } catch (g) {}
        if (c) {
            b = a.yb || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Pe: c.bg_hash_basename,
                Oe: c.bg_binary,
                uf: a.j + "_" + a.l,
                yb: b,
                ib: a.ib,
                Xb: d,
                nc: e,
                Vb: f
            }
        }
    }
    let dg = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function eg(a) {
        var b = await cg(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Pe,
                _bgp_: b.Oe,
                _li_: b.uf,
                _jk_: b.yb,
                _st_: b.ib,
                _rc_: b.Xb,
                _dl_: b.nc,
                _g2_: b.Vb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Pe(be, {
                basename: "sodar2"
            });
            bg(a)
        }
    };

    function fg(a, b) {
        return Ad(a, 5, b)
    }

    function gg(a, b) {
        return z(a, 3, b, "")
    }
    var hg = class extends L {
        constructor() {
            super()
        }
    };

    function ig(a, b) {
        return z(a, 1, b, "")
    }
    var jg = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return E(this, 1)
        }
    };

    function kg(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var lg = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.yb = a.yb;
                this.win = a.T();
                this.ib = a.ib;
                this.Xb = a.Xb;
                this.nc = a.nc;
                this.Vb = a.Vb;
                this.A = a.j
            }
        },
        mg = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.ib = "env";
                this.Xb = "n";
                this.nc = "0";
                this.Vb = "1";
                this.j = !0
            }
            T() {
                return this.win
            }
            build() {
                return new lg(this)
            }
        };
    var og = class extends L {
            constructor(a) {
                super(a, -1, ng)
            }
        },
        ng = [2, 3];

    function pg(a, b) {
        return x(a, 1, b)
    }

    function qg(a, b) {
        return x(a, 2, b)
    }

    function rg(a, b) {
        return x(a, 3, b)
    }

    function sg(a, b) {
        return x(a, 4, b)
    }
    var tg = class extends L {
        constructor() {
            super()
        }
        getVersion() {
            return v(this, 5)
        }
    };
    var ug = window;
    var vg = {
        lg: "google_adtest",
        pg: "google_ad_client",
        qg: "google_ad_format",
        sg: "google_ad_height",
        Fg: "google_ad_width",
        wg: "google_ad_layout",
        xg: "google_ad_layout_key",
        yg: "google_ad_output",
        zg: "google_ad_region",
        Cg: "google_ad_slot",
        Dg: "google_ad_type",
        Eg: "google_ad_url",
        Gg: "google_allow_expandable_ads",
        Yg: "google_analytics_domain_name",
        Zg: "google_analytics_uacct",
        rh: "google_container_id",
        Ch: "google_gl",
        Wh: "google_enable_ose",
        gi: "google_full_width_responsive",
        gj: "google_rl_filtering",
        fj: "google_rl_mode",
        hj: "google_rt",
        ej: "google_rl_dest_url",
        Mi: "google_max_radlink_len",
        Ri: "google_num_radlinks",
        Si: "google_num_radlinks_per_unit",
        og: "google_ad_channel",
        Li: "google_max_num_ads",
        Ni: "google_max_responsive_height",
        kh: "google_color_border",
        Vh: "google_enable_content_recommendations",
        zh: "google_content_recommendation_ui_type",
        yh: "google_source_type",
        xh: "google_content_recommendation_rows_num",
        wh: "google_content_recommendation_columns_num",
        uh: "google_content_recommendation_ad_positions",
        Ah: "google_content_recommendation_use_square_imgs",
        mh: "google_color_link",
        lh: "google_color_line",
        qh: "google_color_url",
        mg: "google_ad_block",
        Bg: "google_ad_section",
        ng: "google_ad_callback",
        hh: "google_captcha_token",
        oh: "google_color_text",
        Sg: "google_alternate_ad_url",
        vg: "google_ad_host_tier_id",
        ih: "google_city",
        tg: "google_ad_host",
        ug: "google_ad_host_channel",
        Tg: "google_alternate_color",
        jh: "google_color_bg",
        Xh: "google_encoding",
        ei: "google_font_face",
        Fh: "google_cust_ch",
        Ih: "google_cust_job",
        Hh: "google_cust_interests",
        Gh: "google_cust_id",
        Jh: "google_cust_u_url",
        ii: "google_hints",
        zi: "google_image_size",
        Oi: "google_mtl",
        Jj: "google_cpm",
        th: "google_contents",
        Qi: "google_native_settings_key",
        Bh: "google_country",
        Bj: "google_targeting",
        fi: "google_font_size",
        Mh: "google_disable_video_autoplay",
        Vj: "google_video_product_type",
        Uj: "google_video_doc_id",
        Tj: "google_cust_gender",
        wj: "google_cust_lh",
        vj: "google_cust_l",
        Ij: "google_tfs",
        Pi: "google_native_ad_template",
        Ei: "google_kw",
        yj: "google_tag_for_child_directed_treatment",
        zj: "google_tag_for_under_age_of_consent",
        jj: "google_region",
        Eh: "google_cust_criteria",
        Ag: "google_safe",
        Dh: "google_ctr_threshold",
        kj: "google_resizing_allowed",
        mj: "google_resizing_width",
        lj: "google_resizing_height",
        Sj: "google_cust_age",
        LANGUAGE: "google_language",
        Fi: "google_kw_type",
        Xi: "google_pucrd",
        Wi: "google_page_url",
        Aj: "google_tag_partner",
        qj: "google_restrict_data_processing",
        hg: "google_adbreak_test",
        rg: "google_ad_frequency_hint",
        jg: "google_admob_interstitial_slot",
        kg: "google_admob_rewarded_slot",
        ig: "google_admob_ads_only",
        Ki: "google_max_ad_content_rating",
        aj: "google_ad_public_floor",
        Yi: "google_ad_private_floor",
        Rj: "google_traffic_source",
        uj: "google_shadow_mode"
    };
    var wg = me(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = pf(Af);
        return !b.parentElement
    });

    function xg(a, b) {
        if (wg())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = pf(b)
    }
    var yg = /^[\w+/_-]+[=]{0,2}$/;

    function zg(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && yg.test(a) ? a : "" : ""
    };

    function Ag(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Bg(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Cg(a) {
        return Bg.apply(null, arguments) / arguments.length
    };

    function Dg(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Dg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Dg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Dg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Eg(a, b) {
        this.width = a;
        this.height = b
    }

    function Fg(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = Eg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Gg(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Hg, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = sf(e + " "), xg(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Hg = /&([^;\s<&]+);?/g;

    function Ig(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Jg(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Kg(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Lg(a) {
        return a ? new Mg(Ng(a)) : Wa || (Wa = new Mg)
    }

    function Og(a, b) {
        ue(b, function(c, d) {
            c && "object" == typeof c && c.ra && (c = c.la());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Pg.hasOwnProperty(d) ? a.setAttribute(Pg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Pg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Qg(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Eg(a.clientWidth, a.clientHeight)
    }

    function Rg(a) {
        var b = a.scrollingElement ? a.scrollingElement : Wb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Sb && a.pageYOffset != b.scrollTop ? new Dg(b.scrollLeft, b.scrollTop) : new Dg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Sg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Tg(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ya(f) || Aa(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Aa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                yb(g ? Gb(f) : f, e)
            }
        }
    }

    function Ug(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Vg(a, b) {
        var c = Ug(a, "DIV");
        Sb ? (b = yf(Qf, b), xg(c, b), c.removeChild(c.firstChild)) : xg(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Wg(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Ng(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Xg = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Yg = {
            IMG: " ",
            BR: "\n"
        };

    function Zg(a) {
        var b = [];
        $g(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function $g(a, b, c) {
        if (!(a.nodeName in Xg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Yg) b.push(Yg[a.nodeName]);
        else
            for (a = a.firstChild; a;) $g(a, b, c), a = a.nextSibling
    }

    function ah(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return bh(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Db(e.className.split(/\s+/), c))
        })
    }

    function bh(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Mg(a) {
        this.j = a || t.document || document
    }
    p = Mg.prototype;
    p.jf = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.gg = Mg.prototype.jf;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.ia = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = Ug(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Og(g, f));
        2 < e.length && Tg(d, g, e, 2);
        return g
    };
    p.createElement = function(a) {
        return Ug(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function ch(a, b) {
        return Vg(a.j, b)
    }
    p.T = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        Tg(Ng(a), a, arguments, 1)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.ff = Wg;

    function dh() {
        return !eh() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function eh() {
        return u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var fh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function gh(a) {
        try {
            return !!a && null != a.location.href && Qb(a, "foo")
        } catch {
            return !1
        }
    }

    function hh(a, b = !1, c = !1, d = t) {
        c = c ? ih(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !gh(c) || !a(c));) c = ih(c)
    }

    function ih(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function jh(a) {
        return gh(a.top) ? a.top : null
    }

    function kh(a, b) {
        const c = lh("SCRIPT", a);
        Zf(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function mh(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function nh() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function oh(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ph(a) {
        const b = [];
        oh(a, function(c) {
            b.push(c)
        });
        return b
    }

    function qh(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var sh = me(() => Cb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], rh) || 1E-4 > Math.random());
    const rh = a => ib(mb(), a);
    var th = /^([0-9.]+)px$/,
        uh = /^(-?[0-9.]{1,30})$/;

    function vh(a) {
        if (!uh.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function wh(a) {
        return /^true$/.test(a)
    }

    function xh(a) {
        return (a = th.exec(a)) ? +a[1] : null
    }

    function yh() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var zh = {
        Hg: "allow-forms",
        Ig: "allow-modals",
        Jg: "allow-orientation-lock",
        Kg: "allow-pointer-lock",
        Lg: "allow-popups",
        Mg: "allow-popups-to-escape-sandbox",
        Ng: "allow-presentation",
        Og: "allow-same-origin",
        Pg: "allow-scripts",
        Qg: "allow-top-navigation",
        Rg: "allow-top-navigation-by-user-activation"
    };
    const Ah = me(() => ph(zh));

    function Bh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Ah();
        return a.length ? zb(b, c => !Db(a, c)) : b
    }

    function Ch() {
        const a = lh("IFRAME"),
            b = {};
        yb(Ah(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Dh = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Eh = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (Dh(a, b)) return a;
                if (!(a = ih(a))) break
            }
            return null
        },
        Fh = me(() => dh() ? 2 : eh() ? 1 : 0),
        N = (a, b) => {
            oh(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const Gh = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Hh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Ih = /.*domain\.test$/,
        Jh = /\.prod\.google\.com(:\d+)?$/;
    var Kh = a => Gh[a] || Hh.test(a) || Ih.test(a) || Jh.test(a);
    let Lh = [];
    const Mh = () => {
        const a = Lh;
        Lh = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Nh = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ma(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ma(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function Oh(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Wg(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        hh(f => {
            if (!f.parent || !gh(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? Sg(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    Oh(f.parent, g[l], c, d);
                    break
                }
            }
            catch {}
            return !1
        }, !1, !1, a)
    }
    var Ph = (a, b) => {
            Oh(Sg(Ng(a)), a, b)
        },
        Qh = (a, b) => {
            "complete" === a.document.readyState ? (Lh.push(b), 1 == Lh.length && (window.Promise ? Promise.resolve().then(Mh) : window.setImmediate ? setImmediate(Mh) : setTimeout(Mh, 0))) : a.addEventListener("load", b)
        },
        Rh = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function lh(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Sh = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, gh(a) && (b = a);
        return b
    };

    function Th(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = Th.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function Uh(a) {
        return new Th(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof Th ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Vh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Wh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Xh(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Wh(c, e, d - c, a - e)
        }
        return null
    }

    function Yh(a, b) {
        var c = Xh(a, b);
        if (!c || !c.height || !c.width) return [new Wh(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Wh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Wh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Wh(a.left, d, b.left - a.left, e));
        h < f && c.push(new Wh(h, d, f - h, e));
        return c
    }
    Wh.prototype.contains = function(a) {
        return a instanceof Dg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Wh.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Wh.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Wh.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Zh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function $h(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function ai(a = $h()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function bi(a = $h()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Zh[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function ti() {
        var a = $h();
        return a && a.initialIntersection
    }

    function ui() {
        const a = ti();
        return a && Aa(a.rootBounds) ? new Eg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function vi(a = $h()) {
        return a ? gh(a.master) ? a.master : null : null
    }

    function wi(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Eb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || kh(a.document, g ? Pe(ae("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Ne($d(ae("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, M(a, "message", f), d = () => {
            te(a, "message", f)
        });
        return e
    };

    function O(a, ...b) {
        if (0 === b.length) return Ne(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ne(c.join(""))
    }

    function xi(a, b) {
        let c = Me(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ne(c)
    };

    function yi(a) {
        a = a[0];
        const b = Ee();
        a = b ? b.createScript(a) : a;
        return new He(a, Fe)
    };

    function zi(a) {
        return new nf(a[0], lf)
    };

    function Ai(a, b, c) {
        if ("string" === typeof b)(b = Bi(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Bi(c, d);
                f && (c.style[f] = e)
            }
    }
    var Ci = {};

    function Bi(a, b) {
        var c = Ci[b];
        if (!c) {
            var d = Jg(b);
            c = d;
            void 0 === a.style[d] && (d = (Wb ? "Webkit" : Vb ? "Moz" : Sb ? "ms" : null) + Kg(d), void 0 !== a.style[d] && (c = d));
            Ci[b] = c
        }
        return c
    }

    function Di(a, b) {
        var c = Ng(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Ei(a, b) {
        return Di(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Fi(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Gi(a) {
        var b = Ng(a),
            c = new Dg(0, 0);
        var d = b ? Ng(b) : document;
        d = !Sb || 9 <= Number(hc) || "CSS1Compat" == Lg(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Fi(a);
        b = Rg(Lg(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Hi(a) {
        var b = Ii;
        if ("none" != Ei(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Ii(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Wb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Fi(a), new Eg(a.right - a.left, a.bottom - a.top)) : new Eg(b, c)
    }

    function Ji(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Ki(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ji(a, b) : 0
    }
    var Li = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Mi(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Li ? Li[b] : Ji(a, b)
    };
    var Ni = a => "number" === typeof a && 0 < a,
        Pi = (a, b) => {
            a = Oi(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Oi = a => Object.entries(Qi(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Qi = a => {
            const b = {};
            oh(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Ri = () => {
            try {
                return ug.history.length
            } catch (a) {
                return 0
            }
        },
        Si = a => {
            a = vi($h(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Ti = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        Ui = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = Ri();
            a.u_h = ug.screen ? .height;
            a.u_w = ug.screen ? .width;
            a.u_ah = ug.screen ? .availHeight;
            a.u_aw = ug.screen ? .availWidth;
            a.u_cd = ug.screen ? .colorDepth
        },
        Vi = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName &&
                a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Wi = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Xi = () => {
            if (!ug) return !1;
            try {
                return !(!ug.navigator.standalone && !ug.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Yi = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Zi = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2],
                                        10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class $i {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const aj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var bj = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        cj = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Nd = !!c;
                this.depth = null
            }
        };

    function dj(a, b, c = null, d = !1) {
        ej(a, b, c, d)
    }

    function ej(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = lh("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && Eb(a.google_image_requests, e);
                te(e, "load", f);
                te(e, "error", f)
            };
            M(e, "load", f);
            M(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var gj = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            oh(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            fj(c)
        },
        fj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : dj(b, a, void 0, !1)
        };

    function hj(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function ij(a, b, c, d, e) {
        const f = [];
        oh(a, function(g, h) {
            (g = jj(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function jj(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(jj(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ij(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function kj(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function lj(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = kj(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = ij(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class mj {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function nj() {
        var a = oj,
            b = t.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function pj(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof mj ? f = c : (f = new mj, oh(c, (h, k) => {
                var l = f;
                const m = l.B++;
                h = hj(k, h);
                l.j.push(m);
                l.l[m] = h
            }));
            const g = lj(f, "/pagead/gen_204?id=" + b + "&");
            g && dj(t, g)
        } catch (f) {}
    }
    class qj {
        constructor() {
            this.j = Math.random()
        }
    };
    let rj = null;

    function sj() {
        if (null === rj) {
            rj = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    rj = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return rj
    };

    function tj() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Pa()
    }

    function uj() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    class vj {
        constructor(a, b) {
            var c = uj() || tj();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const wj = t.performance,
        xj = !!(wj && wj.mark && wj.measure && wj.clearMarks),
        yj = me(() => {
            var a;
            if (a = xj) a = sj(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function zj(a) {
        a && wj && yj() && (wj.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), wj.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Aj() {
        var a = Bj;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (yj() && yb(a.j, zj), a.j.length = 0)
    }

    function Cj(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw zj(c), e;
        }
        a.end(c);
        return d
    }
    class Dj {
        constructor(a) {
            this.j = [];
            this.A = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = yj() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new vj(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            wj && yj() && wj.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (uj() || tj()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                wj && yj() && wj.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function Ej(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Fj(a.stack, b));
        return b
    }

    function Fj(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class Gj {
        constructor(a = null) {
            this.B = oj;
            this.j = null;
            this.D = this.ma;
            this.l = a;
            this.A = !1
        }
        na() {
            return this.B
        }
        ke(a) {
            this.j = a
        }
        C(a) {
            this.A = a
        }
        Bb(a, b, c) {
            let d, e;
            try {
                this.l && this.l.l ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    zj(e), b = this.D(a, new $i(f, {
                        message: Ej(f)
                    }), void 0, c)
                } catch (g) {
                    this.ma(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        sa(a, b, c, d) {
            return (...e) => this.Bb(a, () => b.apply(c, e), d)
        }
        ma(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const G = new mj;
                var g = G;
                g.j.push(1);
                g.l[1] = hj("context", a);
                b.error && b.meta && b.id || (b = new $i(b, {
                    message: Ej(b)
                }));
                if (b.msg) {
                    g = G;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = hj("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (pa) {}
                if (d) try {
                    d(b)
                } catch (pa) {}
                d = G;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = t;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (gh(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new cj(m || "", l));
                    try {
                        d = l.parent
                    } catch (pa) {
                        d = null
                    }
                } while (d && l != d);
                for (let pa = 0, Va = k.length - 1; pa <= Va; ++pa) k[pa].depth = Va -
                    pa;
                l = t;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Nd = !0)
                    }
                var q = k;
                let ia = new cj(t.location.href, t, !1);
                l = null;
                const Ja = q.length - 1;
                for (n = Ja; 0 <= n; --n) {
                    var r = q[n];
                    !l && aj.test(r.url) && (l = r);
                    if (r.url && !r.Nd) {
                        ia = r;
                        break
                    }
                }
                r = null;
                const sa = q.length && q[Ja].url;
                0 != ia.depth && sa && (r = q[Ja]);
                f = new bj(ia, r);
                if (f.l) {
                    q = G;
                    var w = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = hj("top", w)
                }
                var F = {
                    url: f.j.url ||
                        ""
                };
                if (f.j.url) {
                    var D = f.j.url.match(fh),
                        B = D[1],
                        I = D[3],
                        K = D[4];
                    w = "";
                    B && (w += B + ":");
                    I && (w += "//", w += I, K && (w += ":" + K));
                    var H = w
                } else H = "";
                B = G;
                F = [F, {
                    url: H
                }];
                B.j.push(5);
                B.l[5] = F;
                pj(this.B, e, G, this.A, c)
            } catch (G) {
                try {
                    pj(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ej(G),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (ia) {}
            }
            return !0
        }
        za(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ma(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var Hj = a => "string" === typeof a,
        Ij = a => void 0 === a;

    function Jj() {
        var a = Kj;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var Lj;
    Lj = {
        Zi: 0,
        ue: 3,
        ve: 4,
        xe: 5
    };
    var Mj = Lj.ue,
        Nj = Lj.ve,
        Oj = Lj.xe;
    var Pj = class extends L {
        constructor() {
            super()
        }
    };

    function Qj(a) {
        var b = new Rj;
        return x(b, 1, a)
    }
    var Rj = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Sj = class extends L {
        constructor() {
            super()
        }
    };

    function Tj(a, b) {
        return x(a, 1, b)
    }

    function Uj(a, b) {
        return x(a, 2, b)
    }

    function Vj(a, b) {
        return x(a, 3, b)
    }

    function Wj(a, b) {
        return x(a, 4, b)
    }

    function Xj(a, b) {
        return x(a, 5, b)
    }

    function Yj(a, b) {
        return x(a, 8, b)
    }

    function Zj(a, b) {
        return x(a, 9, b)
    }
    var ak = class extends L {
        constructor() {
            super()
        }
    };
    var bk = class extends L {
        constructor() {
            super()
        }
    };

    function ck(a, b) {
        return td(a, 1, b, Xc)
    }

    function dk(a, b) {
        return td(a, 12, b, Wc)
    }

    function ek() {
        var a = new fk;
        Sc(a);
        nd(a, 2, 2, !1, !1).push("irr");
        return a
    }

    function gk(a, b) {
        return x(a, 3, b)
    }

    function hk(a, b) {
        return x(a, 4, b)
    }

    function ik(a, b) {
        return x(a, 5, b)
    }

    function jk(a, b) {
        return x(a, 7, b)
    }

    function kk(a, b) {
        return x(a, 8, b)
    }

    function lk(a, b) {
        return x(a, 9, b)
    }

    function mk(a, b) {
        return Cd(a, 10, b)
    }

    function nk(a, b) {
        return td(a, 11, b, Uc)
    }
    var fk = class extends L {
            constructor() {
                super(void 0, -1, ok)
            }
        },
        ok = [1, 12, 2, 10, 11];

    function pk(a) {
        var b = qk();
        Ad(a, 1, b)
    }

    function rk(a, b) {
        return x(a, 2, b)
    }

    function sk(a, b) {
        return Cd(a, 3, b)
    }

    function tk(a, b) {
        return Cd(a, 4, b)
    }

    function uk(a, b) {
        return Dd(a, 4, Rj, b)
    }

    function vk(a, b) {
        return Cd(a, 5, b)
    }

    function wk(a, b) {
        return td(a, 6, b, Xc)
    }

    function xk(a, b) {
        return x(a, 7, b)
    }

    function yk(a, b) {
        Ad(a, 9, b)
    }

    function zk(a, b) {
        return x(a, 10, b)
    }

    function Ak(a, b) {
        return x(a, 11, b)
    }

    function Bk(a, b) {
        return x(a, 12, b)
    }
    var Dk = class extends L {
            constructor() {
                super(void 0, -1, Ck)
            }
            G(a) {
                return x(this, 8, a)
            }
        },
        Ck = [3, 4, 5, 6];

    function Ek(a, b) {
        return x(a, 1, b)
    }

    function Fk(a, b) {
        return rd(a, 2, b)
    }
    var Hk = class extends L {
            constructor() {
                super(void 0, -1, Gk)
            }
        },
        Gk = [2];
    var Ik = class extends L {
        constructor() {
            super()
        }
    };
    var Jk = class extends L {
        constructor() {
            super()
        }
    };
    var Kk = class extends L {
        constructor() {
            super()
        }
        getContentUrl() {
            return E(this, 1)
        }
    };
    var Mk = class extends L {
            constructor() {
                super(void 0, -1, Lk)
            }
        },
        Lk = [1];
    var Nk = class extends L {
        constructor() {
            super()
        }
    };
    var Ok = class extends L {
        constructor() {
            super()
        }
    };
    var Pk = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Qk = [1, 2, 3, 5, 6, 7, 8];
    var Sk = class extends L {
            constructor() {
                super(void 0, -1, Rk)
            }
        },
        Rk = [1];
    var Tk = class extends L {
        constructor() {
            super()
        }
    };

    function Uk(a) {
        var b = new Vk;
        return Kd(b, 1, a)
    }

    function Wk(a, b) {
        return z(a, 2, b, "")
    }

    function Xk(a, b) {
        return z(a, 3, b, "")
    }

    function Yk(a, b) {
        return z(a, 4, b, "")
    }

    function Zk(a, b) {
        return z(a, 5, b, 0)
    }
    var Vk = class extends L {
            constructor() {
                super(void 0, -1, $k)
            }
        },
        al = class extends L {
            constructor() {
                super()
            }
        },
        cl = class extends L {
            constructor() {
                super(void 0, -1, bl)
            }
        },
        $k = [9],
        bl = [2];
    var el = class extends L {
            constructor() {
                super(void 0, -1, dl)
            }
        },
        dl = [2];
    var fl = class extends L {
            constructor() {
                super()
            }
        },
        gl = [4, 5];
    var hl = class extends L {
        constructor() {
            super()
        }
    };
    var il = class extends L {
        constructor() {
            super()
        }
    };
    var jl = class extends L {
        constructor() {
            super()
        }
    };
    var kl = class extends L {
        constructor() {
            super()
        }
    };
    var ll = class extends L {
            constructor() {
                super()
            }
        },
        ml = class extends L {
            constructor() {
                super()
            }
        },
        nl = class extends L {
            constructor() {
                super()
            }
        },
        ol = [2, 3];
    var pl = class extends L {
            constructor() {
                super()
            }
        },
        ql = [3, 4, 5, 6, 7, 8, 9];

    function rl(a, b) {
        return Bd(a, 9, sl, b)
    }
    var tl = class extends L {
            constructor() {
                super()
            }
            Na(a) {
                return x(this, 2, a)
            }
        },
        sl = [4, 8, 5, 6, 9];

    function ul(a, ...b) {
        vl(a, ...b.map(c => ({
            cg: 7,
            message: c
        })))
    };

    function wl(a) {
        return JSON.stringify([a.map(b => [{
            [b.cg]: b.message.toJSON()
        }])])
    };
    var xl = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function yl(a) {
        a && "function" == typeof a.Ba && a.Ba()
    };

    function zl() {
        this.C = this.C;
        this.I = this.I
    }
    zl.prototype.C = !1;
    zl.prototype.Ba = function() {
        this.C || (this.C = !0, this.l())
    };

    function Al(a, b) {
        a.C ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    zl.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function vl(a, ...b) {
        a.A && 65536 <= wl(a.j.concat(b)).length && Bl(a);
        a.j.push(...b);
        100 <= a.j.length && Bl(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Bl(a)
        }, 100))
    }

    function Bl(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = wl(a.j);
            a.B("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Cl = class {
            constructor(a) {
                this.B = xl;
                this.A = a;
                this.j = [];
                this.l = null
            }
        },
        Dl = class extends Cl {
            constructor(a = !1) {
                super(a && !0)
            }
        };
    var P = a => {
        var b = "Gc";
        if (a.Gc && a.hasOwnProperty(b)) return a.Gc;
        b = new a;
        return a.Gc = b
    };
    class El {
        constructor(a) {
            this.methodName = a
        }
    }
    var Fl = new El(15),
        Gl = new El(2),
        Hl = new El(3),
        Il = new El(5),
        Jl = new El(6),
        Kl = new El(7),
        Ll = new El(8),
        Ml = new El(14),
        Nl = (a, b, c) => b[a.methodName] || c || (() => {});

    function Ol(a, b) {
        a.l = c => Nl(Gl, b, () => [])(c, 1);
        a.j = () => Nl(Hl, b, () => [])(1)
    }
    class Yl {
        constructor() {
            this.l = () => [];
            this.j = () => []
        }
    };
    let oj, Zl;
    const Bj = new Dj(t);
    (a => {
        oj = a || new qj;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        nj();
        Zl = new Gj(Bj);
        Zl.C(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || Aj() : Bj.l && M(t, "load", () => {
            t.google_measure_js_timing || Aj()
        })
    })();
    var $l = (a, b, c) => Zl.Bb(a, b, c),
        am = (a, b) => Zl.sa(a, b),
        bm = (a, b, c) => {
            const d = P(Yl).j();
            !b.eid && d.length && (b.eid = d.toString());
            pj(oj, a, b, !0, c)
        },
        cm = (a, b) => Zl.ma(a, b, void 0, void 0);
    var dm = (a, b) => {
        const c = yh();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    Ne($d(ae("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var em = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            M(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = te(a, "message", e));
                return g
            }
        },
        fm = (a, b, c, d = null) => {
            const e = em(a, b, ee(c, () => e()), d);
            return e
        },
        gm = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && gm(a[f], b, c, d, --e)
        };

    function hm(a, b, c, d) {
        Kh(d.origin) && "expandable-xpc-ready" == c.notify && im(a, b)
    }

    function im(a, b) {
        var c = a.Fc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ta,
            f: a.Lf,
            g: a.Fe,
            h: a.sf,
            i: void 0
        });
        t.setTimeout(am(220, Wi(() => {
            kh(c.document, Ne(Me(b).toString()))
        })), 0)
    };
    var km = class extends L {
            constructor() {
                super(void 0, -1, jm)
            }
        },
        jm = [15];
    var lm = class extends L {
        constructor() {
            super()
        }
        getCorrelator() {
            return Ed(this, 1)
        }
        setCorrelator(a) {
            return z(this, 1, a, 0)
        }
    };
    var mm = class extends L {
        constructor() {
            super()
        }
    };
    let nm = null,
        om = null;
    var pm = () => {
            if (null != nm) return nm;
            nm = !1;
            try {
                const a = jh(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (nm = !0);
                t.localStorage.getItem("google_logging") && (nm = !0)
            } catch (a) {}
            return nm
        },
        qm = () => {
            if (null != om) return om;
            om = !1;
            try {
                const a = jh(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) om = !0
            } catch (a) {}
            return om
        },
        rm = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && pm() && kh(t.document,
                Ne($d(ae("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let sm = (new Date).getTime();
    var tm = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var um = {
        vi: 0,
        ui: 1,
        ri: 2,
        ki: 3,
        si: 4,
        li: 5,
        ti: 6,
        ni: 7,
        oi: 8,
        ji: 9,
        mi: 10
    };
    var vm = {
        xi: 0,
        yi: 1,
        wi: 2
    };

    function wm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function xm(a) {
        a = Ab(a, b => new Th(b.top, b.right, b.bottom, b.left));
        a = ym(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function ym(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Bb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Uh(a[0]))
    };
    var xe = {
        ij: 0,
        Yh: 1,
        bi: 2,
        Zh: 3,
        ai: 4,
        hi: 8,
        tj: 9,
        Ii: 10,
        Ji: 11,
        pj: 16,
        Lh: 17,
        Kh: 24,
        Gi: 25,
        bh: 26,
        ah: 27,
        we: 30,
        Bi: 32,
        Di: 40,
        xj: 41
    };
    var zm = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Am = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function Bm(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new Cm;
        return a.google_reactive_ads_global_state
    }
    class Cm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Dm;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var Dm = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Em = 728 * 1.38,
        Fm = (a, b = 420) => (a = R(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Gm = a => {
            var b = R(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Im = a => Math.max(0, Hm(a, !0) - R(a).clientHeight),
        R = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Hm = (a, b) => {
            const c = R(a);
            return b ? c.scrollHeight == R(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Km = (a, b) => Jm(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Lm = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Mm = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Nm = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Om = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Pm = (a, b, c, d) => {
            pj(c, b, {
                c: d.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Jm = a => 26 === a || 27 === a || 40 === a || 41 === a;

    function Qm(a, b) {
        Rm(a).forEach(b, void 0)
    }

    function Rm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Sm(a, b) {
        return void 0 !== a.j[Tm(b)]
    }

    function Um(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Vm(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Wm = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Tm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Tm(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Tm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        vb() {
            return Um(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Tm(a) {
        return a instanceof Object ? String(Ba(a)) : a + ""
    };
    const Xm = class {
        constructor(a) {
            this.j = new Wm;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Sm(this.j, a)
        }
    };
    const Ym = new Xm("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Zm(a) {
        a.j.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function $m(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var an = class extends zl {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.j = b
        }
        l() {
            Zm(this);
            super.l()
        }
    };

    function bn(a, b) {
        const c = new cn({
            first: a.O,
            second: b.O
        });
        a.Z(() => S(c, {
            first: a.O,
            second: b.O
        }));
        b.Z(() => S(c, {
            first: a.O,
            second: b.O
        }));
        return c
    }

    function dn(...a) {
        const b = [...a],
            c = () => b.every(f => f.O),
            d = new cn(c()),
            e = () => {
                S(d, c())
            };
        b.forEach(f => f.Z(e));
        return en(d)
    }

    function fn(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.O),
            d = new cn(c()),
            e = () => {
                S(d, c())
            };
        b.forEach(f => f.Z(e));
        return en(d)
    }

    function S(a, b) {
        a.O = b;
        a.j.forEach(c => {
            c(a.O)
        })
    }

    function en(a, b = gn) {
        var c = a.O;
        const d = new cn(a.O);
        a.Z(e => {
            b(e, c) || (c = e, S(d, e))
        });
        return d
    }

    function hn(a, b) {
        return a.Z(b, !0)
    }

    function jn(a, b, c) {
        return hn(a, d => {
            d === b && c()
        })
    }

    function kn(a, b) {
        if (!1 === a.O) b();
        else {
            var c = {
                Lb: null
            };
            c.Lb = jn(a, !1, () => {
                c.Lb && (c.Lb(), c.Lb = null);
                b()
            })
        }
    }

    function ln(a, b, c) {
        en(a).Z(d => {
            d === b && c()
        })
    }

    function mn(a, b) {
        a.l && a.l();
        a.l = b.Z(c => S(a, c), !0)
    }
    class cn {
        constructor(a) {
            this.O = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        Z(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.O);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new cn(a(this.O));
            this.Z(c => S(b, a(c)));
            return b
        }
    }

    function gn(a, b) {
        return a == b
    };

    function nn(a, b) {
        yb(a.j, c => {
            c(b)
        })
    }
    var on = class {
        constructor() {
            this.j = []
        }
    };
    class pn {
        constructor(a) {
            this.j = a
        }
        Z(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new on;
            this.Z(c => nn(b, a(c)));
            return new pn(b)
        }
    }

    function qn(...a) {
        const b = new on;
        a.forEach(c => {
            c.Z(d => {
                nn(b, d)
            })
        });
        return new pn(b)
    };

    function rn(a) {
        return en(bn(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : sn(c, b)
        }))
    }
    var un = class {
        constructor(a) {
            this.l = a;
            this.j = new cn(null);
            this.A = new cn(null);
            this.B = new on;
            this.F = b => {
                null == this.j.O && 1 == b.touches.length && S(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.O;
                null != c && (b = tn(c, b.changedTouches), null != b && (S(this.j, null), S(this.A, null), nn(this.B, sn(c, b))))
            };
            this.D = b => {
                var c = this.j.O;
                null != c && (c = tn(c, b.changedTouches), null != c && (S(this.A, c), b.preventDefault()))
            }
        }
    };

    function sn(a, b) {
        return {
            se: b.pageX - a.pageX,
            te: b.pageY - a.pageY
        }
    }

    function tn(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function vn(a) {
        return en(bn(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : wn(c, b)
        }))
    }
    var xn = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new cn(null);
            this.l = new cn(null);
            this.A = new on;
            this.G = c => {
                S(this.j, c)
            };
            this.D = c => {
                const d = this.j.O;
                null != d && (S(this.j, null), S(this.l, null), nn(this.A, wn(d, c)))
            };
            this.F = c => {
                null != this.j.O && (S(this.l, c), c.preventDefault())
            }
        }
    };

    function wn(a, b) {
        return {
            se: b.screenX - a.screenX,
            te: b.screenY - a.screenY
        }
    };
    var An = (a, b) => {
        const c = new yn(a, b);
        return () => zn(c)
    };

    function zn(a) {
        if (a.j) return !1;
        if (null == a.l) return Bn(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Bn(a), !0;
        Cn(a, b);
        return !0
    }

    function Bn(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function Cn(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            Bn(a)
        }, b)
    }
    class yn {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function Dn(a) {
        return En(vn(a.j), rn(a.l))
    }

    function Fn(a) {
        return qn(new pn(a.j.A), new pn(a.l.B))
    }
    var Gn = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function En(a, b) {
        return bn(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Hn(a, b) {
        return new In(a, b)
    }

    function Jn(a) {
        a.win.requestAnimationFrame(() => {
            a.C || S(a.A, new Eg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Kn(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return en(a.A, Fg)
    }
    var In = class extends zl {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new cn(new Eg(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                Jn(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function Ln(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class Mn {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Nn(a, b) {
        a = a.getBoundingClientRect();
        return new On(a.top + Mm(b), a.bottom - a.top)
    }

    function Pn(a) {
        return new On(Math.round(a.j), Math.round(a.l))
    }
    class On {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Qn(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Rn {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = An(a, () => {
                if (null != this.C) {
                    var b = Hm(this.j, !0) - this.C;
                    1E3 < b && Qn(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = Hm(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        Ba() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function Sn(a) {
        return new Tn(a, new an(a, a.document.body), new an(a, a.document.documentElement), new an(a, a.document.documentElement))
    }

    function Un(a) {
        $m(a.A, "scroll-behavior", "auto");
        const b = Vn(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        $m(a.j, "position", "fixed");
        $m(a.j, "top", `${-b.previousWindowScroll}px`);
        $m(a.j, "width", "100%");
        $m(a.j, "overflow-x", "hidden");
        $m(a.j, "overflow-y", "hidden");
        $m(a.l, "overflow-x", "hidden");
        $m(a.l, "overflow-y", "hidden")
    }

    function Wn(a) {
        Zm(a.j);
        Zm(a.l);
        const b = Vn(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Zm(a.A)
    }
    var Tn = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.A = d
        }
    };

    function Vn(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };
    var Xn = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Yn {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Zn(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new $n(d)
    }

    function ao(a, b = 1) {
        a = a.j.slice(0);
        const c = new Yn(b);
        Ob(a, () => c.next());
        return new $n(a)
    }
    const $n = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new $n(zb(this.j, a))
        }
        apply(a) {
            return new $n(a(this.j.slice(0)))
        }
        sort(a) {
            return new $n(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new $n(b)
        }
    };
    class bo {
        constructor(a) {
            this.j = new Xm(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function co(a) {
        return new eo({
            value: a
        }, null)
    }

    function fo(a) {
        return new eo(null, Error(a))
    }

    function go(a) {
        try {
            return co(a())
        } catch (b) {
            return new eo(null, b)
        }
    }

    function ho(a) {
        return null != a.j ? a.j.value : null
    }

    function io(a, b) {
        null != a.j && b(a.j.value)
    }

    function jo(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class eo {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof eo ? a : co(a)) : this
        }
    };
    class ko {
        constructor() {
            this.j = new Wm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Xm, this.j.set(a, c));
            c.add(b)
        }
    };

    function lo(a) {
        return !a
    };
    var no = class extends L {
            constructor(a) {
                super(a, -1, mo)
            }
            getId() {
                return v(this, 3)
            }
        },
        mo = [4];
    class oo {
        constructor(a, {
            hd: b,
            Be: c,
            qf: d,
            ge: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new $n(b || []);
            this.l = e;
            this.j = d
        }
    };
    var po = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Wm;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        ro = a => {
            var b = qo(a);
            a = [];
            for (let c of b) b = String(c.lb), a.push(c.Oa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const qo = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                Oa: "a",
                lb: so(c)
            });
            null != a.A && b.push({
                Oa: "as",
                lb: a.A
            });
            null != a.j && b.push({
                Oa: "i",
                lb: String(a.j)
            });
            null != a.l && b.push({
                Oa: "rp",
                lb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Oa.localeCompare(e.Oa)
            });
            b.unshift({
                Oa: "t",
                lb: to(a.C)
            });
            return b
        },
        to = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        so = a => {
            a = a.j.slice(0).map(uo);
            a = JSON.stringify(a);
            return qh(a)
        },
        uo = a => {
            const b = {};
            null != v(a, 7) && (b.q = v(a, 7));
            kd(a,
                2) && (b.o = v(a, 2));
            kd(a, 5) && (b.p = v(a, 5));
            return b
        };

    function vo() {
        var a = new wo;
        return x(a, 2, 1)
    }
    var wo = class extends L {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return x(this, 1, a)
        }
    };

    function xo(a) {
        const b = [].slice.call(arguments).filter(le(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.od || []);
            d = Object.assign(d, e.wb())
        });
        return new yo(c, d)
    }

    function zo(a) {
        switch (a) {
            case 1:
                return new yo(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new yo(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new yo(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new yo(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Ao(a) {
        return null == a ? null : new yo(null, {
            google_ml_rank: a
        })
    }

    function Bo(a) {
        return null == a ? null : new yo(null, {
            google_placement_id: ro(a)
        })
    }

    function Co({
        Ve: a,
        bf: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new yo(null, a)
    }
    class yo {
        constructor(a, b) {
            this.od = a;
            this.j = b
        }
        wb() {
            return this.j
        }
    };

    function Do() {
        var a = new Eo;
        a = x(a, 1, 1);
        var b = new Fo;
        b = x(b, 2, !0);
        a = Ad(a, 2, b);
        b = new Go;
        var c = new Ho;
        c = x(c, 1, 1);
        b = Dd(b, 1, Ho, c);
        c = new Io;
        c = x(c, 1, !0);
        b = Ad(b, 2, c);
        return Ad(a, 3, b)
    }
    var Eo = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Fo = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Go = class extends L {
            constructor(a) {
                super(a, -1, Jo)
            }
            j() {
                return A(this, Io, 2)
            }
        },
        Ho = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Io = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Ko = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return E(this, 2)
            }
        },
        Jo = [1];
    var Lo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return Ed(this, 1)
        }
    };
    var Mo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return E(this, 1)
        }
        B() {
            return E(this, 2)
        }
    };
    var Po = class extends L {
            constructor(a) {
                super(a, -1, No)
            }
            B() {
                return A(this, Oo, 3)
            }
            j() {
                return A(this, Lo, 5)
            }
        },
        Oo = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return sd(this, 1)
            }
        },
        No = [6];
    var Qo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return Ed(this, 3)
        }
        F() {
            return J(this, 4)
        }
        G() {
            return J(this, 7)
        }
        D() {
            return A(this, Mo, 5)
        }
        B() {
            return A(this, Lo, 6)
        }
    };
    var Uo = class extends L {
            constructor(a) {
                super(a, -1, Ro)
            }
            G() {
                return v(this, 2)
            }
            F() {
                return v(this, 5)
            }
            j() {
                return C(this, So, 3)
            }
            B() {
                return v(this, 4)
            }
            D() {
                return pd(this, 6)
            }
            I() {
                return ld(this, To, 7)
            }
        },
        So = class extends L {
            constructor(a) {
                super(a)
            }
        },
        To = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Ro = [3];
    var Wo = class extends L {
            constructor(a) {
                super(a, -1, Vo)
            }
        },
        Vo = [2];
    var Xo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Zo = class extends L {
            constructor(a) {
                super(a, -1, Yo)
            }
        },
        Yo = [1];
    var $o = class extends L {
        constructor(a) {
            super(a)
        }
        Y() {
            return A(this, no, 1)
        }
        j() {
            return v(this, 2)
        }
    };
    var ap = class extends L {
            constructor(a) {
                super(a)
            }
            getName() {
                return v(this, 4)
            }
        },
        bp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        cp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        dp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        ep = [1, 2, 3];
    var fp = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return v(this, 1)
        }
    };
    var ip = class extends L {
            constructor(a) {
                super(a, -1, gp)
            }
            j() {
                return C(this, hp, 1)
            }
        },
        hp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        gp = [1];
    var jp = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var lp = class extends L {
            constructor(a) {
                super(a, -1, kp)
            }
        },
        kp = [3, 4];
    var mp = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var op = class extends L {
            constructor(a) {
                super(a, -1, np)
            }
            Y() {
                return A(this, no, 1)
            }
            j() {
                return v(this, 2)
            }
        },
        np = [6, 7, 9, 10, 11];
    var qp = class extends L {
            constructor(a) {
                super(a, -1, pp)
            }
        },
        pp = [4];
    var sp = class extends L {
            constructor(a) {
                super(a, -1, rp)
            }
        },
        tp = class extends L {
            constructor() {
                super()
            }
        },
        rp = [6];
    var wp = class extends L {
            constructor(a) {
                super(a, -1, up)
            }
            j() {
                return qd(this, 1, Yc, !1)
            }
            B() {
                return A(this, vp, 3)
            }
        },
        zp = class extends L {
            constructor(a) {
                super(a, -1, xp)
            }
            j() {
                return C(this, yp, 1)
            }
        },
        yp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        vp = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return A(this, Ap, 3)
            }
        },
        Ap = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return Id(this, Bp, 2, Cp)
            }
        },
        Bp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Dp = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return Ed(this, 1)
            }
        },
        up = [1, 4],
        xp = [1],
        Cp = [1,
            2
        ];
    var Ep = class extends L {
        constructor(a) {
            super(a)
        }
    };

    function Fp(a) {
        return A(a, Gp, 13)
    }
    var Jp = class extends L {
            constructor(a) {
                super(a, -1, Hp)
            }
            j() {
                return A(this, Ip, 15)
            }
        },
        Kp = class extends L {
            constructor() {
                super()
            }
        },
        Lp = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return v(this, 1)
            }
        },
        Np = class extends L {
            constructor(a) {
                super(a, -1, Mp)
            }
        },
        Op = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Pp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Gp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Qp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Ip = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return J(this, 18, !1)
            }
            D() {
                x(this, 18, !1)
            }
            B() {
                return J(this, 21, !1)
            }
        },
        Rp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Sp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Hp = [1, 2, 5, 7],
        Mp = [2, 5, 6, 11];
    var Tp = class extends L {
        constructor(a) {
            super(a)
        }
    };

    function Up(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Pd(Tp, b) : null
        } catch (b) {
            return null
        }
    }

    function Vp(a, b) {
        if (void 0 !== a.Bc) {
            let c = Up(b);
            c || (c = new Tp);
            void 0 !== a.Bc && x(c, 2, a.Bc);
            x(c, 1, Pa() + 864E5);
            a = Rd(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Up(b)) && v(a, 1) < Pa()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function Wp(a) {
        var b = [];
        Qm(a.getElementsByTagName("p"), function(c) {
            100 <= Xp(c) && b.push(c)
        });
        return b
    }

    function Xp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Qm(a.childNodes, function(c) {
            b += Xp(c)
        });
        return b
    }

    function Yp(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Zp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const $p = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = Gb(b);
            a = Zp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Wp(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function aq(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function bq(a) {
        return Rm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var T = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        U = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        cq = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var dq = new T(1082, !0),
        eq = new T(1221),
        fq = new T(1220),
        gq = new T(1214),
        hq = new U(1130, 100),
        iq = new T(1150),
        jq = new U(1126, 1E4),
        kq = new U(1032, 200),
        lq = new cq(14),
        mq = new U(1159, 500),
        nq = new T(1217),
        oq = new T(1122, !0),
        pq = new T(1196),
        qq = new T(1160),
        rq = new T(316),
        sq = new T(1218),
        tq = new T(334),
        uq = new U(54),
        vq = new T(313),
        wq = new U(66, -1),
        xq = new U(65, -1),
        yq = new T(369),
        zq = new T(368),
        Aq = new U(1169, 61440),
        Bq = new T(1171),
        Cq = new T(1151),
        Dq = new U(1072, .75),
        Eq = new U(1168, 61440),
        Fq = new T(290),
        Gq = new T(1147),
        Hq = new T(1219),
        Iq =
        new T(1210),
        Jq = new T(483374575),
        Kq = new T(380254521, !0),
        Lq = new cq(1166),
        Mq = new T(1E4),
        Nq = new U(472785970, 500),
        Oq = new T(447540098, !0),
        Pq = new T(447540095, !0),
        Qq = new T(447540099),
        Rq = new T(447540096, !0),
        Sq = new T(83),
        Tq = new class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        }(472572701),
        Uq = new T(439828594),
        Vq = new T(483962503),
        Wq = new T(77),
        Xq = new T(78),
        Yq = new T(309),
        Zq = new T(80),
        $q = new T(76),
        ar = new T(1957),
        br = new T(380025941),
        cr = new T(84),
        dr = new T(1973),
        er = new T(188),
        fr = new T(1971, !0),
        gr = new T(1974),
        hr = new T(1162),
        ir = new T(1120),
        jr = new U(1142, 8),
        kr = new U(1158),
        lr = new U(1157),
        mr = new U(1195, 1),
        nr = new U(1119, 300),
        or = new U(1193, 100),
        pr = new U(1103),
        qr = new U(1114, 1),
        rr = new U(1116, 300),
        sr = new T(488901563),
        tr = new U(1110, 5),
        ur = new U(1111, 5),
        vr = new U(1112, 5),
        wr = new U(1113, 5),
        xr = new U(1104),
        yr = new U(1108),
        zr = new U(1106),
        Ar = new U(1107),
        Br = new U(1105),
        Cr = new T(487784571),
        Dr = new T(491815314),
        Er = new T(1203),
        Fr = new U(1115, -1),
        Gr = new T(1121),
        Hr = new U(1194, 1),
        Ir = new T(471262996),
        Jr = new T(469675169),
        Kr = new T(472491850),
        Lr = new U(469675170, 3E4),
        Mr = new T(471682731),
        Nr = new T(477209535),
        Or = new T(1928),
        Pr = new T(1941),
        Qr = new T(370946349),
        Rr = new T(392736476),
        Sr = new U(406149835),
        Tr = new T(432946749),
        Ur = new T(432938498),
        Vr = new U(1935),
        Wr = new T(485990406);
    var Xr = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        V = a => P(Xr).A(a.j, a.defaultValue),
        W = a => P(Xr).B(a.j, a.defaultValue);

    function Yr(a, b) {
        a = (new Mg(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Zr(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        aq(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function $r(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            aq(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var bs = (a, b, c, d = 0) => {
            var e = as(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Pb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.hc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Zr(a, e.anchor, e.position)
        },
        cs = (a, b, c, d = 0) => {
            V(vq) ? bs(a, b, c, d) : Zr(a, b, c)
        };

    function as(a, b, c) {
        const d = f => {
                f = ds(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = ds(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: es(a.previousSibling, d),
                    Pb: f => es(f.previousSibling, d),
                    hc: 0
                };
            case 2:
                return {
                    init: es(a.lastChild, d),
                    Pb: f => es(f.previousSibling, d),
                    hc: 0
                };
            case 3:
                return {
                    init: es(a.nextSibling, e),
                    Pb: f => es(f.nextSibling, e),
                    hc: 3
                };
            case 1:
                return {
                    init: es(a.firstChild, e),
                    Pb: f => es(f.nextSibling, e),
                    hc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function ds(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function es(a, b) {
        return a && b(a) ? a : null
    };
    var fs = (a, b = !1) => {
        try {
            return b ? (new Eg(a.innerWidth, a.innerHeight)).round() : Qg(a || window).round()
        } catch (c) {
            return new Eg(-12245933, -12245933)
        }
    };

    function gs(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function hs(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Dg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function is(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function js(a) {
        -1 === a.l && (a.l = Bb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class ks {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var ls = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function ms(a, b) {
        oh(a, (c, d) => {
            b[d] = c
        })
    }
    var ns = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                Ic: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                Ic: c
            }
        },
        os = a => {
            if (a == a.top) return 0;
            for (; a && a != a.top && gh(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var ps = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        qs = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        rs = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const ss = (a, b, c) => {
        a = ps(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var ts = (a, b) => {
            b = b.parentElement;
            return b ? (a = mh(b, a)) ? a.direction : "" : ""
        },
        us = (a, b, c) => {
            if (0 === ss(a, b, c)) return !1;
            rs(b, c, "0px");
            const d = ss(a, b, c);
            rs(b, c, -1 * d + "px");
            a = ss(a, b, c);
            0 !== a && a !== d && rs(b, c, d / (a - d) * d + "px");
            return !0
        };
    const vs = RegExp("(^| )adsbygoogle($| )");

    function ws(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Jg(d.Oc);
            a[e] = d.value
        }
    }

    function xs(a, b, c, d, e, f) {
        a = ys(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        zs(a, b, c, f);
        return a
    }

    function As(a, b, c = null) {
        a = ys(a, {});
        zs(a, b, null, c);
        return a
    }

    function zs(a, b, c, d) {
        var e = [];
        if (d = d && d.od) a.Va.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function ys(a, b) {
        const c = Yr(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.ec && ws(d, b.ec);
        a = (new Mg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Vc && (d.marginTop = b.Vc);
        b.vc && (d.marginBottom = b.vc);
        b.jb && ws(d, b.jb);
        c.appendChild(a);
        return {
            Va: c,
            va: a
        }
    }

    function Bs(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.wb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Cs(a) {
        const b = bq(a.document);
        yb(b, function(c) {
            const d = Ds(a, c);
            var e;
            if (e = d) e = ps(c, a), e = !((e ? e.y : 0) < R(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Bs(a, c))
        })
    }

    function Ds(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in vg) a[vg[c]] && (b[vg[c]] = a[vg[c]]);
        return b
    };
    class Es {
        constructor() {
            var a = O `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.ma;
            this.D = a
        }
        ke(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        ma(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new $i(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (kh(t.document, this.D), t.error_rep_loaded = !0);
            return !1
        }
        Bb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        sa(a, b, c, d) {
            return (...e) => this.Bb(a, () => b.apply(c, e), d)
        }
        za(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ma(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const Fs = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Gs = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = uj();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Fs({
                        label: a.toString(),
                        value: g,
                        duration: (uj() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        Hs = (a, b) => Gs(754,
            a, (c, d) => {
                (new Es).ma(c, d)
            }, b);

    function Is(a, b, c) {
        return Gs(a, b, void 0, c).apply()
    }

    function Js(a, b) {
        return Hs(a, b).apply()
    }

    function Ks(a) {
        if (!a) return null;
        var b = v(a, 7);
        if (v(a, 1) || a.getId() || 0 < qd(a, 4, Yc, !1).length) {
            b = qd(a, 4, Yc, !1);
            var c = v(a, 3),
                d = v(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Yp(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Yp(b[c]);
            a = (b = e) ? new $p(b, v(a, 2), v(a, 5), Ls(v(a, 6))) : null
        } else a = b ? new $p(b, v(a, 2), v(a, 5), Ls(v(a, 6))) : null;
        return a
    }
    var Ms = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ls(a) {
        return null == a ? a : Ms[a]
    }

    function Ns(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = v(a[c], 1),
                e = v(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Oc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Os(a, b) {
        var c = {};
        a && (c.Vc = v(a, 1), c.vc = v(a, 2), c.clearBoth = !!y(a, 3));
        b && (c.ec = Ns(C(b, jp, 3)), c.jb = Ns(C(b, jp, 4)));
        return c
    }
    var Ps = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Qs = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var Rs = {
            Ca: "ama_success",
            ta: .1,
            xa: !0
        },
        Ss = {
            Ca: "ama_failure",
            ta: .1,
            xa: !0
        },
        Ts = {
            Ca: "ama_inf_scr",
            ta: .1,
            xa: !0
        },
        Us = {
            Ca: "ama_inf_scr",
            ta: .1,
            xa: !0
        },
        Vs = {
            Ca: "ama_coverage",
            ta: .1,
            xa: !0
        },
        Ws = {
            Ca: "ama_inf_scr",
            ta: 1,
            xa: !0
        },
        Xs = {
            Ca: "ama_opt",
            ta: .1,
            xa: !0
        },
        Ys = {
            Ca: "ama_aud_sen",
            ta: 1,
            xa: !0
        },
        Zs = {
            Ca: "ama_improv",
            ta: .1,
            xa: !0
        };

    function $s(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function at(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class bt {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.I = 0
        }
        Na(a) {
            this.F.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = ze(this.F);
            0 < this.I && (b.t = this.I);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && Fj(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function ct(a, b, c) {
        !b.xa || "pvc" in c || (c.pvc = Nh(a.j));
        bm(b.Ca, c, b.ta)
    }

    function dt(a, b, c) {
        c = c.B(a.j);
        b.xa && (c.pvc = Nh(a.j));
        0 < b.ta && (c.r = b.ta, ct(a, b, c))
    }
    var et = class {
        constructor(a) {
            this.j = a
        }
    };

    function ft(a, b, c) {
        var d = a.A,
            e = R(a.j).clientHeight,
            f = A(a.l, Ko, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        ct(d, Ys, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var gt = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c
        }
    };
    const ht = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return xs(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const it = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < C(this.j, lp, 9).length ? C(this.j, lp, 9)[0] : null,
                f = Os(A(this.j, mp, 3), e);
            if (!e) return null;
            if (e = v(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Mg(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ec && ws(c.style, f.ec);
                d = (new Mg(d)).createElement("INS");
                f.jb && ws(d.style, f.jb);
                c.appendChild(d);
                f = {
                    Va: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                zs(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < C(this.j, lp, 9).length ? C(this.j, lp, 9)[0] : null;
            if (!a) return null;
            a = C(a, jp, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == v(c, 1) && 0 < parseInt(v(c, 2), 10)) return parseInt(v(c, 2), 10)
            }
            return null
        }
    };
    const jt = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        Oc: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    jb: g
                }
            } else c = {};
            a = xs(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        wb() {
            return this.j
        }
    };
    class kt {
        constructor(a) {
            this.l = a
        }
        j() {
            return new yo([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const lt = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.A
        }
        l(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function mt(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.Y();
            if (k) {
                var l = Ks(k);
                if (l) {
                    var m = Ps[v(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = A(e, mp, 3)) ? y(m, 3) : null;
                        l = new lt(l, n);
                        n = od(e, 10).slice(0);
                        kd(k, 5) && n.push(1);
                        var q = h ? h : {};
                        h = v(e, 12);
                        k = ld(e, wo, 4) ? A(e, wo, 4) : null;
                        1 == v(e, 8) ? (q = q.Ne || null, e = new nt(l, new ht(Os(A(e, mp, 3), null)), q, m, 0, n, k, g, f, h, e)) : e = 2 == v(e, 8) ? new nt(l, new it(e), q.rf || new kt("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !== e &&
                d.push(e)
        }
        return d
    }

    function ot(a) {
        return a.C
    }

    function pt(a) {
        return a.ua
    }

    function qt(a) {
        return V(pq) ? (a.M || (a.M = a.I.l(a.A)), a.M) : a.I.l(a.A)
    }

    function rt(a) {
        var b = a.J;
        a = a.A.document.createElement("div");
        V(pq) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function st(a) {
        return a.F instanceof jt ? a.F.wb() : null
    }

    function tt(a, b, c) {
        Sm(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function ut(a, b) {
        a.C = !0;
        V(pq) && (a.l && $r(a.l), a.l = null);
        null != b && a.U.push(b)
    }

    function vt(a) {
        return Yr(a.A.document, a.J || !1)
    }

    function wt(a) {
        return a.F.A(a.A)
    }

    function xt(a, b = null, c = null) {
        return new nt(a.I, b || a.F, c || a.N, a.J, a.Ya, a.Jc, a.mc, a.A, a.ba, a.G, a.B, a.D, a.W)
    }
    class nt {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.I = a;
            this.F = b;
            this.N = c;
            this.J = d;
            this.Ya = e;
            this.Jc = f;
            this.mc = g ? g : new wo;
            this.A = h;
            this.ba = k;
            this.G = l;
            this.B = m;
            (a = !m) || (a = !(m.Y() && null != v(m.Y(), 5)));
            this.ua = !a;
            this.D = n;
            this.W = q;
            this.U = [];
            this.C = !1;
            this.K = new Wm;
            this.M = this.l = null
        }
        T() {
            return this.A
        }
        j() {
            return this.I.j()
        }
    };
    var yt = a => a ? .google_ad_slot ? co(new oo(1, {
            Be: a.google_ad_slot
        })) : fo("Missing dimension when creating placement id"),
        At = a => {
            switch (a.Ya) {
                case 0:
                case 1:
                    var b = a.B;
                    null == b ? a = null : (a = b.Y(), null == a ? a = null : (b = b.j(), a = null == b ? null : new oo(0, {
                        hd: [a],
                        ge: b
                    })));
                    return null != a ? co(a) : fo("Missing dimension when creating placement id");
                case 2:
                    return a = zt(a), null != a ? co(a) : fo("Missing dimension when creating placement id");
                default:
                    return fo("Invalid type: " + a.Ya)
            }
        };
    const zt = a => {
        if (null == a || null == a.D) return null;
        const b = A(a.D, no, 1),
            c = A(a.D, no, 2);
        if (null == b || null == c) return null;
        const d = a.W;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new oo(0, {
            hd: [b, c],
            qf: d,
            ge: Qs[a]
        })
    };

    function Bt(a) {
        const b = st(a.V);
        return (b ? yt(b) : At(a.V)).map(c => ro(c))
    }

    function Ct(a) {
        a.j = a.j || Bt(a);
        return a.j
    }

    function Dt(a, b) {
        if (a.V.C) throw Error("AMA:AP:AP");
        cs(b, a.Y(), a.V.j());
        ut(a.V, b)
    }
    const Et = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.aa = c;
            this.j = null
        }
        Y() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.F.l(a, b, this.l, c.A)) && Dt(this, a.Va);
            return a
        }
    };
    const Ft = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = ib(b, "&") ? Gg(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Ym.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Ft(a, b[c])) return !0
        }
        return !1
    };
    var Gt = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Ht = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return xs(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Gt(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class It {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Gt(a);
            return new yo(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Jt = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.B
        }
        j() {
            return this.A
        }
    };
    const Kt = {
        TABLE: {
            pb: new bo([1, 2])
        },
        THEAD: {
            pb: new bo([0, 3, 1, 2])
        },
        TBODY: {
            pb: new bo([0, 3, 1, 2])
        },
        TR: {
            pb: new bo([0, 3, 1, 2])
        },
        TD: {
            pb: new bo([0, 3])
        }
    };

    function Lt(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = ub(e, f), 0 > c || b.push(new Mt(a, [f], c, f, 3, Zg(f).trim(), d));
        return b
    }

    function Nt(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new Mt(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Zg(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Mt(a, d, h, b, 2, k, c));
        return e
    }

    function Ot(a, b) {
        return a.j - b.j
    }

    function Pt(a) {
        const b = vo();
        return new nt(new Jt(a.qc, a.rc), new ht({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class Mt {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.mb = b.slice(0);
            this.j = c;
            this.qc = d;
            this.rc = e;
            this.B = f;
            this.l = g
        }
        T() {
            return this.l
        }
    };

    function Qt(a) {
        return Fb(a.C ? Nt(a.l, a.j, a.A) : [], a.B ? Lt(a.l, a.B, a.j, a.A) : []).filter(b => {
            var c = b.qc.tagName;
            c ? (c = Kt[c.toUpperCase()], b = null != c && c.pb.contains(b.rc)) : b = !1;
            return !b
        })
    }
    class Rt {
        constructor(a, b, c) {
            this.j = a;
            this.B = b.Mb;
            this.C = b.Bd;
            this.l = b.articleStructure;
            this.A = c
        }
    };

    function St(a, b) {
        return Js(() => {
            if (V(pq)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = qt(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.C) {
                            var k = h;
                            var l = h,
                                m = null;
                            try {
                                var n = qt(l);
                                if (n) {
                                    m = rt(l);
                                    cs(m, n, l.j());
                                    var q = m
                                } else q = null
                            } catch (F) {
                                throw $r(m), F;
                            }
                            k.l = q
                        }(h = h.l) && d.push({
                            Jf: f,
                            anchorElement: g,
                            df: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = Mm(b), n = Nm(b), e = 0; e < d.length; e++) {
                        const {
                            Jf: F,
                            anchorElement: D,
                            df: B
                        } = d[e];
                        f = Tt(B, n, q);
                        c.push(new Et(F, D, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const F = [];
                    for (let D = 0; D < a.length; D++) {
                        var r = a[D],
                            w = qt(r);
                        w && F.push({
                            be: r,
                            anchorElement: w
                        })
                    }
                    for (w = 0; w < F.length; w++) {
                        r = n;
                        g = r.push; {
                            k = F[w];
                            l = k.anchorElement;
                            m = k.be;
                            const D = rt(m);
                            try {
                                cs(D, l, m.j()), h = D
                            } catch (B) {
                                throw $r(D), B;
                            }
                        }
                        g.call(r, h)
                    }
                    c = Mm(b);
                    d = Nm(b);
                    for (g = 0; g < n.length; g++) e = Tt(n[g], d, c), f = F[g], q.push(new Et(f.be, f.anchorElement, e))
                } finally {
                    for (c = 0; c < n.length; c++) $r(n[c])
                }
            }
            return q
        }, b)
    }

    function Tt(a, b, c) {
        a = a.getBoundingClientRect();
        return new Mn(a.left + b, a.top + c, a.right - a.left)
    };

    function Ut(a, b) {
        const c = Qt(b);
        c.sort(Ot);
        return new Vt(a, b, c)
    }

    function Wt(a, b, c) {
        return new nt(new Jt(b, c), new ht({}), null, !0, 2, [], null, a.j, null, null, null, a.C.l, null)
    }
    var Vt = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].mb[0];
                        Aa(b) && 1 == b.nodeType ? a = Wt(this, b, 0) : (a = this.j.document.createElement("div"), N(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Wt(this, a, 3))
                    }
                    a = St([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var Xt = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const Yt = {
            1: "0.5vp",
            2: "300px"
        },
        Zt = {
            1: 700,
            2: 1200
        },
        $t = {
            [1]: {
                pe: "3vp",
                Tc: "1vp",
                ne: "0.3vp"
            },
            [2]: {
                pe: "900px",
                Tc: "300px",
                ne: "90px"
            }
        };

    function au(a, b, c) {
        var d = bu(a),
            e = R(a).clientHeight || Zt[d],
            f = void 0;
        c && (f = (c = (c = cu(C(c, Uo, 2), d)) ? A(c, To, 7) : void 0) ? du(c, e) : void 0);
        c = f;
        f = bu(a);
        a = R(a).clientHeight || Zt[f];
        const g = eu($t[f].Tc, a);
        a = null === g ? fu(f, a) : new gu(g, g, hu(g, g, 8), 8, .3, c);
        c = eu($t[d].pe, e);
        f = eu($t[d].Tc, e);
        e = eu($t[d].ne, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new gu(d, b, hu(d, b, a.l), a.l, a.B, a.j)
    }

    function mu(a, b) {
        const c = bu(a);
        a = R(a).clientHeight || Zt[c];
        if (b = cu(C(b, Uo, 2), c))
            if (b = nu(b, a)) return b;
        return fu(c, a)
    }

    function ou(a) {
        const b = bu(a);
        return fu(b, R(a).clientHeight || Zt[b])
    }

    function pu(a, b) {
        let c = {
            ac: a.A,
            eb: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Sc);
        return c
    }

    function qu(a, b, c) {
        var d = y(b, 2);
        b = A(b, Uo, 1);
        const e = R(c).clientHeight || Zt[bu(c)];
        c = eu(b ? .G(), e) ? ? a.A;
        const f = eu(b ? .F(), e) ? ? a.C;
        d = d ? [] : ru(b ? .j(), e) ? ? a.D;
        const g = b ? .B() ? ? a.l,
            h = b ? .D() ? ? a.B;
        a = (b ? .I() ? du(A(b, To, 7), e) : null) ? ? a.j;
        return new gu(c, f, d, g, h, a)
    }
    class gu {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function cu(a, b) {
        for (let c of a)
            if (v(c, 1) == b) return c;
        return null
    }

    function ru(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = v(d, 1);
            const e = eu(v(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Sc: {
                    ac: e,
                    eb: eu(v(d, 3), b)
                }
            })
        }
        return c
    }

    function nu(a, b) {
        const c = eu(v(a, 2), b),
            d = eu(v(a, 5), b);
        if (null === c) return null;
        const e = v(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = ru(f, b);
        if (null === f) return null;
        const g = A(a, To, 7);
        return new gu(c, d, f, e, pd(a, 6), g ? du(g, b) : void 0)
    }

    function fu(a, b) {
        a = eu(Yt[a], b);
        return new gu(null === a ? Infinity : a, null, [], 3, null)
    }

    function eu(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function bu(a) {
        a = 900 <= R(a).clientWidth;
        return dh() && !a ? 1 : 2
    }

    function hu(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Sc: {
                ac: 2 * a,
                eb: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Sc: {
                ac: 3 * a,
                eb: 3 * b
            }
        }]
    }

    function du(a, b) {
        return {
            Td: eu(v(a, 2), b) || 0,
            Sd: v(a, 3) || 1,
            kb: eu(v(a, 1), b) || 0
        }
    };

    function su(a, b, c) {
        return wm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function tu(a) {
        if (!a.length) return null;
        const b = xm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new uu(b, a)
    }
    class uu {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function vu(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var Bu = (a, b) => {
        const c = Gb(b.document.querySelectorAll(".google-auto-placed")),
            d = wu(b),
            e = xu(b),
            f = yu(b),
            g = zu(b),
            h = Gb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Gb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Gb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Gb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Gb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.Qb, c],
                [a.Xa, d],
                [a.nf, e],
                [a.Rb, f],
                [a.Sb, g],
                [a.lf, h],
                [a.mf, k],
                [a.pf, l]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = Au(m);
        b = Au(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Cu = a => {
            const b = vu(a);
            return b ? zb(Ab(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        wu = a => Gb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        xu = a => Gb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        yu = a => (Cu(a) || Gb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Gb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        zu = a => Gb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Au = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Du = Zl.sa(453, Bu),
        Eu;
    Eu = Zl.sa(454, (a, b) => {
        const c = Gb(b.document.querySelectorAll(".google-auto-placed")),
            d = wu(b),
            e = xu(b),
            f = yu(b),
            g = zu(b),
            h = Gb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Gb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Gb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Au([].concat(!0 === a.Qb ? c : [], !0 === a.Xa ? d : [], !0 === a.nf ? e : [], !0 === a.Rb ? f : [], !0 === a.Sb ? g : [], !0 === a.lf ? h : [], !0 === a.mf ? k : [], !0 === a.pf ? b : []))
    });

    function Fu(a, b, c) {
        const d = Gu(a);
        b = Hu(d, b, c);
        return new Iu(a, d, b)
    }

    function Ju(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Ku(a) {
        return a.j.map(b => b.box)
    }

    function Lu(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Iu {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Gu(a) {
        const b = Du({
                Xa: !1
            }, a),
            c = Nm(a),
            d = Mm(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && ib(e.className, "google-auto-placed")) || Ju(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Wj: e ? 1 : 0
            } : null
        }).filter(le(e => null === e))
    }

    function Hu(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Mu(a, b) : Ab(a, d => new uu(d.box, 1))
    }

    function Mu(a, b) {
        a = Ab(a, d => new uu(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (su(d, a[f], b)) {
                        d = tu([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Nu(a, b, c) {
        const d = Ln(c, b);
        return !Cb(a, e => wm(e, d))
    }

    function Ou(a, b, c, d, e) {
        e = e.aa;
        const f = Ln(e, b),
            g = Ln(e, c),
            h = Ln(e, d);
        return !Cb(a, k => wm(k, g) || wm(k, f) && !wm(k, h))
    }

    function Pu(a, b, c, d) {
        const e = Ku(a);
        if (Nu(e, b, d.aa)) return !0;
        if (!Ou(e, b, c.Td, c.kb, d)) return !1;
        const f = new uu(Ln(d.aa, 0), 1);
        a = zb(a.B, g => su(g, f, c.kb));
        b = Bb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Sd ? !1 : !0
    };
    var Qu = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Ru(a, b) {
        const c = new ko,
            d = new Xm;
        b.forEach(e => {
            if (Id(e, bp, 1, ep)) {
                e = Id(e, bp, 1, ep);
                if (A(e, $o, 1) && A(e, $o, 1).Y() && A(e, $o, 2) && A(e, $o, 2).Y()) {
                    const g = Su(a, A(e, $o, 1).Y()),
                        h = Su(a, A(e, $o, 2).Y());
                    if (g && h)
                        for (var f of Qu({
                                anchor: g,
                                position: A(e, $o, 1).j()
                            }, {
                                anchor: h,
                                position: A(e, $o, 2).j()
                            })) c.set(Ba(f.anchor), f.position)
                }
                A(e, $o, 3) && A(e, $o, 3).Y() && (f = Su(a, A(e, $o, 3).Y())) && c.set(Ba(f), A(e, $o, 3).j())
            } else Id(e, cp, 2, ep) ? Tu(a, Id(e, cp, 2, ep), c) : Id(e, dp, 3, ep) && Uu(a, Id(e, dp, 3, ep), d)
        });
        return new Vu(c, d)
    }
    class Vu {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Tu = (a, b, c) => {
            A(b, $o, 2) ? (b = A(b, $o, 2), (a = Su(a, b.Y())) && c.set(Ba(a), b.j())) : A(b, no, 1) && (a = Wu(a, A(b, no, 1))) && a.forEach(d => {
                d = Ba(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Uu = (a, b, c) => {
            A(b, no, 1) && (a = Wu(a, A(b, no, 1))) && a.forEach(d => {
                c.add(Ba(d))
            })
        },
        Su = (a, b) => (a = Wu(a, b)) && 0 < a.length ? a[0] : null,
        Wu = (a, b) => (b = Ks(b)) ? b.query(a) : null;

    function Xu(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Yu(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Zu(a) {
        a = $u(a);
        return a.has("all") || a.has("after")
    }

    function av(a) {
        a = $u(a);
        return a.has("all") || a.has("before")
    }

    function $u(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Yu(a) {
        const b = $u(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var bv = class {
        constructor() {
            this.j = new Set
        }
    };

    function cv(a) {
        return function(b) {
            return St(b, a)
        }
    }

    function dv(a) {
        const b = R(a).clientHeight;
        return b ? Na(ev, b + Mm(a)) : ce
    }

    function fv(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ce;
        const d = Ku(c || Fu(b));
        return e => Nu(d, a, e.aa)
    }

    function gv(a, b, c, d) {
        if (0 > a || 0 > b.Td || 0 > b.Sd || 0 > b.kb) throw Error("ama::ead:nd");
        return Infinity === a ? ce : e => Pu(d || Fu(c, b.kb), a, b, e)
    }

    function hv(a) {
        if (!a.length) return ce;
        const b = new bo(a);
        return c => b.contains(c.Ya)
    }

    function iv(a) {
        return function(b) {
            for (let c of b.Jc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function jv(a) {
        return a.length ? function(b) {
            const c = b.Jc;
            return a.some(d => -1 < c.indexOf(d))
        } : de
    }

    function kv(a, b) {
        if (0 >= a) return de;
        const c = R(b).scrollHeight - a;
        return function(d) {
            return d.aa.j <= c
        }
    }

    function lv(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[v(c.mc, 2) || 0]
        }
    }

    function mv(a) {
        return a.length ? b => a.includes(v(b.mc, 1) || 0) : de
    }

    function nv(a, b) {
        const c = Ru(a, b);
        return function(d) {
            var e = d.Y();
            d = Qs[d.V.j()];
            var f = Ba(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(Ba(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(Ba(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function ov() {
        const a = new bv;
        return function(b) {
            var c = b.Y();
            b = Qs[b.V.j()];
            a: switch (b) {
                case 1:
                    var d = Zu(c.previousElementSibling) || av(c);
                    break a;
                case 4:
                    d = Zu(c) || av(c.nextElementSibling);
                    break a;
                case 2:
                    d = av(c.firstElementChild);
                    break a;
                case 3:
                    d = Zu(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Xu(a, c, b))
        }
    }
    const ev = (a, b) => b.aa.j >= a,
        pv = (a, b, c) => {
            c = c.aa.l;
            return a <= c && c <= b
        };
    var qv = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = dv(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var rv = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new op;
            var b = A(this.A.l, no, 1);
            a = Ad(a, 1, b);
            a = x(x(a, 2, 2), 8, 1);
            a = mt([a], this.l);
            return St(a, this.l)[0] || null
        }
    };
    var sv = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        tv = a => {
            const b = R(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function uv(a, b) {
        if (!b) return !1;
        const c = Ba(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = uv(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function vv(a, b) {
        return Cb(b.mb, c => uv(a, c))
    }
    class wv {
        constructor(a) {
            this.j = new Wm;
            this.l = a
        }
    };
    class xv {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var zv = (a, {
            bk: b = !1,
            ck: c = 3,
            Yf: d = null
        } = {}) => {
            a = Qt(a);
            return yv(a, b, c, d)
        },
        yv = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Ot);
            a = [];
            b = new xv(b, d);
            for (const l of e) {
                d = b;
                e = {
                    ic: l,
                    Tb: 51 > l.B.length ? !1 : null != d.A ? !vv(d.A, l) : !0
                };
                if (d.B || e.Tb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].ic;
                        b: {
                            var g = f.T();
                            var h = f.mb[f.mb.length - 1];f = e.ic.mb[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Ft(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Tb && d.l.push(e.ic)) : (d.j = [e], d.l = e.Tb ? [e.ic] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Tb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Bv = (a, b) => {
            a = Av(a, b);
            const c = new wv(b);
            return Xn(a, d => zv(d, {
                Yf: c
            }))
        },
        Av = (a, b) => {
            const c = new Wm;
            a.forEach(d => {
                var e = Ks(A(d, no, 1));
                if (e) {
                    const f = e.toString();
                    Sm(c, f) || c.set(f, {
                        articleStructure: d,
                        Ee: e,
                        Mb: null,
                        Bd: !1
                    });
                    e = c.get(f);
                    (d = (d = A(d, no, 2)) ? v(d, 7) : null) ? e.Mb = e.Mb ? e.Mb + "," + d : d: e.Bd = !0
                }
            });
            return Vm(c).map(d => {
                const e = d.Ee.query(b.document);
                return e.length ? new Rt(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Cv = (a, b) => {
        b = Av(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => sv(c)(d.j)).filter(d => tv(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var Ev = (a, b, c) => {
        if (J(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new op;
                var e = new no;
                e = x(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = Ad(d, 1, e);
                d = x(x(d, 2, 2), 8, 1);
                d = mt([d], a);
                d = St(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = Dv(c);b = Cv(a, b);
            for (const f of b) {
                b: switch (b = a, d = f, e = c, e) {
                    case 1:
                        b = new rv(b, d);
                        break b;
                    case 2:
                        b = new Xt(Ut(b, d));
                        break b;
                    case 3:
                        b = new qv(b, Ut(b, d));
                        break b;
                    default:
                        throw Error(`Unknown position: ${e}`);
                }
                if (b = b.j()) {
                    a =
                        b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function Dv(a) {
        if (J(a, 2)) return 3;
        switch (sd(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${sd(a,1)}`);
        }
    };
    var Fv = class {
            constructor(a) {
                this.j = a
            }
        },
        Iv = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return fo("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            N(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = yi `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = Ge(k);
            Yf(h);
            g.appendChild(h);
            Gv(f, g, ae("https://www.google-analytics.com/analytics.js"));
            Gv(f, g, ae("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            e && (kd(e, 1) && 0 != sd(e, 1) && f.setAttribute("data-docking-begin-trigger", Hv[sd(e, 1)]), null != v(e, 2) && f.setAttribute("data-experiment", e.j()));
            g.appendChild(f);
            Dt(b, g);
            return co(new Fv(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const Gv = (a, b, c) => {
            a = a.createElement("script");
            Zf(a, Ne($d(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        Hv = {
            [1]: "out-of-view"
        };
    class Jv {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function Kv() {
        const {
            promise: a,
            resolve: b
        } = new Jv;
        return {
            promise: a,
            resolve: b
        }
    };

    function Lv(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = Kv();
        b[a] = d;
        c();
        return d
    }

    function Mv(a, b, c) {
        return Lv(a, b, () => {
            kh(b.document, c)
        }).promise
    };

    function Nv(a, b, c, d) {
        a = Mv(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: kd(d, 1) && J(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        Zl.za(915, a);
        return new Ov(a)
    }

    function Pv(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        Zl.za(956, a)
    }
    var Ov = class {
        constructor(a) {
            this.j = a
        }
    };

    function Qv(a) {
        const b = a.A.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                Pv(a.B, () => {
                    b.play();
                    ft(a.j, "preroll", {
                        Yj: performance.now() - c
                    })
                });
                ft(a.j, "play", {})
            }
        })
    }
    var Rv = class {
        constructor(a, b, c) {
            this.A = a;
            this.B = b;
            this.j = c;
            this.l = !1
        }
    };

    function Sv(a, b, c, d, e, f, g) {
        return 0 == d.length ? fo("No ArticleStructure found") : A(c, Fo, 2) ? co(new Tv(a, b, d, c, e, f, g ? g : "en")) : fo("No AudioSenseConfig.PlacementConfig found")
    }

    function Uv(a) {
        const b = Ev(a.B, a.G, A(a.l, Fo, 2));
        if (b) {
            var c = !!a.C.Db && Vv(a);
            c && (a.D = Nv(a.B, a.F, a.C.Db, A(a.l, Go, 3) ? .j() || new Io));
            var d = Iv(a.B, b, a.C, a.I, A(a.l, Ko, 4) || void 0);
            null != d.j ? (a.A = d.j.value, a.A.j.addEventListener("firstview", () => {
                ft(a.j, "view", {})
            }), c && Qv(new Rv(a.A, a.D, a.j)), ft(a.j, "place", {
                sts: "ok",
                pp: b.aa.j
            })) : ft(a.j, "place", {
                sts: "wf"
            })
        } else ft(a.j, "place", {
            sts: "pf"
        })
    }

    function Vv(a) {
        return (a = A(a.l, Go, 3)) ? C(a, Ho, 1).some(b => 1 === sd(b, 1)) : !1
    }
    var Tv = class {
        constructor(a, b, c, d, e, f, g) {
            this.B = a;
            this.j = new gt(a, b, d);
            this.G = c;
            this.l = d;
            this.C = e;
            this.F = f;
            this.I = g;
            this.A = this.D = null
        }
    };
    var Wv = {},
        Xv = {},
        Yv = {},
        Zv = {},
        $v = {};

    function aw() {
        throw Error("Do not instantiate directly");
    }
    aw.prototype.qd = null;
    aw.prototype.Da = function() {
        return this.content
    };
    aw.prototype.toString = function() {
        return this.content
    };

    function bw(a) {
        if (a.rd !== Wv) throw Error("Sanitized content was not of kind HTML.");
        return sf(a.toString())
    }

    function cw() {
        aw.call(this)
    }
    Ra(cw, aw);
    cw.prototype.rd = Wv;

    function dw(a, b) {
        return null != a && a.rd === b
    };

    function ew(a) {
        if (null != a) switch (a.qd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function fw(a) {
        return dw(a, Wv) ? a : a instanceof qf ? gw(pf(a).toString()) : a instanceof qf ? gw(pf(a).toString()) : gw(String(String(a)).replace(hw, iw), ew(a))
    }
    var gw = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.qd = d);
            return c
        }
    }(cw);

    function jw(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function kw(a) {
        return dw(a, Wv) ? String(String(a.Da()).replace(lw, "").replace(mw, "&lt;")).replace(nw, iw) : String(a).replace(hw, iw)
    }

    function ow(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function pw(a) {
        if (null == a) return " null ";
        if (dw(a, Xv)) return a.Da();
        if (a instanceof He || a instanceof He) return Ge(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(qw, rw) + "'"
        }
    }

    function X(a) {
        dw(a, $v) ? a = jw(a.Da()) : null == a ? a = "" : a instanceof af ? a = jw($e(a)) : a instanceof af ? a = jw($e(a)) : a instanceof nf ? a = jw(mf(a)) : a instanceof nf ? a = jw(mf(a)) : (a = String(a), a = sw.test(a) ? a : "zSoyz");
        return a
    }
    const tw = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function iw(a) {
        return tw[a]
    }
    const uw = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function rw(a) {
        return uw[a]
    }
    const vw = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function ww(a) {
        return vw[a]
    }
    const hw = /[\x00\x22\x26\x27\x3c\x3e]/g,
        nw = /[\x00\x22\x27\x3c\x3e]/g,
        qw = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        xw = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        sw = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        yw =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function zw(a) {
        return String(a).replace(xw, ww)
    }
    const lw = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        mw = /</g;
    var Aw = void 0;

    function Bw() {
        void 0 === Aw && (Aw = 18);
        return Aw
    }
    var Cw = void 0;

    function Dw() {
        void 0 === Cw && (Cw = 18);
        return Cw
    }

    function Ew() {
        return gw('<svg width="' + kw(Dw()) + '" height="' + kw(Bw()) + '" viewBox="0 0 ' + kw(Bw()) + " " + kw(Dw()) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill="white"/></svg>')
    };
    var Fw = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        init() {
            if (2 === this.j ? .B() ? .j()) {
                var a = {
                    host: "iDropnews.com"
                };
                var b = a.host;
                var c = a.Cf;
                a = a.Bf;
                c = void 0 === c ? 24 : c;
                b = "<style>.autoprose-searchbox {background: #000; border: 1px solid #dcdcdc; border-radius: 8px; bottom: " + X(void 0 === a ? 24 : a) + "px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); height: " + X(56) + "px; position: fixed; right: " + X(c) + "px; width: 292px;}.autoprose-searchbox-text-bg {background: #fff; border: 1px solid #e0e0e0; border-radius: " + X(16) + "px; box-sizing: border-box; height: " +
                    X(32) + "px; left: 56px; position: absolute; top: calc(50% - " + X(32) + "px / 2); width: 224px;}.autoprose-searchbox-text {color: #3c4043; font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 14px; left: 24px; letter-spacing: 0.2px; line-height: " + X(20) + "px; position: relative; top: calc(50% - " + X(20) + "px / 2);}.autoprose-search-icon {left: 19px; position: relative; top: calc(50% - " + X(Bw()) + 'px / 2);}</style><div class="autoprose-searchbox"><div class="autoprose-search-icon">' + Ew() +
                    '</div><div class="autoprose-searchbox-text-bg"><div class="autoprose-searchbox-text">Search ' + fw(b) + "</div></div></div>";
                b = gw(b);
                b = bw(b)
            } else c = c || {}, b = c.Cf, c = c.Bf, b = void 0 === b ? 16 : b, c = void 0 === c ? 16 : c, b = "<style>.autoprose-search-button {background: #000; border-radius: " + X(24) + "px; bottom: " + X(c) + "px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); height: " + X(48) + "px; position: fixed; right: " + X(b) + "px; width: 48px;}.autoprose-search-icon {left: " + X((48 - Dw()) / 2) + "px; position: relative; top: " + X((48 - Bw()) /
                2) + 'px;}</style><div class="autoprose-search-button"><div class="autoprose-search-icon">' + Ew() + "</div></div>", b = gw(b), b = bw(b);
            this.l.appendChild(Vg(document, b))
        }
    };

    function Gw(a) {
        A(a.j, Po, 31) ? .j() ? .j();
        const b = a.l.document,
            c = b.createElement("div");
        c.classList.add("auto-prose-wrapper");
        b.body.appendChild(c);
        (new Fw(c, A(a.j, Po, 31))).init()
    }
    var Hw = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };
    const Iw = ["-webkit-text-fill-color"];

    function Jw(a) {
        if (Ub) {
            {
                const c = mh(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Kw(a)
                } else a = Lw()
            }
        } else a = Lw();
        return a
    }
    var Lw = () => {
        const a = {
            all: "initial"
        };
        yb(Iw, b => {
            a[b] = "unset"
        });
        return a
    };

    function Kw(a) {
        yb(Iw, b => {
            delete a[b]
        });
        return a
    };
    var Mw = class {
        constructor(a) {
            this.j = a
        }
        Da(a) {
            const b = a.document.createElement("div");
            N(b, Jw(a));
            N(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            N(c, Jw(a));
            N(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Nw = (a, b) => (b = A(b, ip, 6)) ? Bv(b.j(), a).map(c => Pt(c)) : [];

    function Ow(a, b, c) {
        a.Fa.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var Pw = class {
        constructor(a, b, c, d, e, f) {
            this.Fa = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Fa.setAttribute("id", "prose-iframe");
            this.Fa.setAttribute("width", "100%");
            this.Fa.setAttribute("height", "100%");
            var a = this.Fa,
                b = bf({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = $e(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Xe(a) || Ye;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = gw;
            dw(c, Yv) || dw(c, Zv) ? c = zw(c) : c instanceof Te ? c = zw(Ue(c)) : c instanceof Te ? c = zw(Ue(c)) : c instanceof Je ? c = zw(Me(c).toString()) : c instanceof Je ? c = zw(Me(c).toString()) : (c = String(c), c = yw.test(c) ? c.replace(xw, ww) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                kw(c) + '" alt="' + kw(b) + ' icon"><p class="cse-header"><strong>' + fw(e) + '</strong></p><div class="gcse-search" data-gname="' + kw("auto-rs-prose") + '" data-adclient="' + kw(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + kw(b) + '" data-gl="' + kw(d) + '" data-personalizedAds="false"></div>');
            a = bw(a);
            b = {
                style: bf({
                    margin: 0
                })
            };
            d = {
                src: Pe(ae("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = wf("script", f);
            g = tf("body", b, [a, g]);
            this.Fa.srcdoc = pf(g)
        }
    };

    function Qw(a, b) {
        return new Rw(a, b)
    }

    function Sw(a) {
        const b = Tw(a);
        yb(a.j.maxZIndexListeners, c => c(b))
    }

    function Tw(a) {
        a = ph(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Uw {
        constructor(a) {
            this.j = Bm(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(Tw(this))
        }
    }

    function Vw(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Sw(b);
            a.j = d
        }
    }

    function Ww(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Sw(b);
            a.j = null
        }
    }
    class Rw {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function Xw(a) {
        M(a.l, "click", () => Yw(a));
        M(a.G, "click", () => void Yw(a));
        const b = a.width / a.win.innerWidth;
        M(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function Yw(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        Pb(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.F) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var Zw = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.F = [];
            this.C = !0;
            b = new Mg(a.document);
            this.l = b.ia("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.G = b.ia("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ia("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ia("DIV", {
                "class": "adpub-drawer"
            }, this.G, this.j);
            this.A = b.ia("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ia("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            const f = this.width,
                g = a.innerWidth;
            e = gw("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                X(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + X(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + X(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + X(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                X(e) + "px; overflow-y: auto; padding-top: " + X(5) + "px; width: " + X(f) + "px;}</style>");
            d.call(c, ch(b, bw(e)));
            c.appendChild(this.A);
            N(this.D, Jw(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            Xw(this)
        }
        W(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        ba(a) {
            this.F.push(a)
        }
    };

    function $w(a) {
        M(a.J, "click", () => ax(a));
        M(a.B, "mousedown", () => {
            const d = f => {
                    bx(a, f.movementY)
                },
                e = () => {
                    cx(a);
                    te(a.B, "mousemove", d);
                    te(a.B, "mouseup", e);
                    te(a.B, "mouseleave", e)
                };
            M(a.B, "mousemove", d);
            M(a.B, "mouseup", e);
            M(a.B, "mouseleave", e)
        });
        M(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const k = h.touches[0];
                    0 === dx(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var l = 0 === dx(a) && a.l.scrollTop;
                        const m = k.target === a.B || k.target.parentElement === a.B;
                        if (!l || m) l = k.screenY - e.screenY,
                            bx(a, l), l = 0 < l && 0 === a.l.scrollTop, l = a.I && !l, h.cancelable && !l && h.preventDefault()
                    }
                    e = k
                },
                g = () => {
                    cx(a);
                    te(a.j, "touchmove", f);
                    te(a.j, "touchend", g);
                    te(a.j, "touchcancel", g)
                };
            M(a.j, "touchmove", f, {
                passive: !1
            });
            M(a.j, "touchend", g);
            M(a.j, "touchcancel", g)
        });
        M(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.F / a.A;
        M(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.F = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.F;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.K ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function ex(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, l, m) => {
                try {
                    const n = m.map(q => new Touch(q));
                    k.dispatchEvent(new TouchEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: n
                    }))
                } catch {
                    l = new UIEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const n of m) k.dispatchEvent(Object.assign(l, {
                        touches: [n]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const l of d) M(k, l, m => {
                    m = [...m.touches].map(n => ({
                        clientX: n.clientX,
                        clientY: n.clientY,
                        force: n.force,
                        identifier: n.identifier,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        radiusX: n.radiusX,
                        radiusY: n.radiusY,
                        rotationAngle: n.rotationAngle,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        target: a.l
                    }));
                    e(a.j, l, m)
                })
            },
            g = k => {
                if ((void 0 === c || c.includes(k.origin)) && d.includes(k.data ? .type) && Array.isArray(k.data ? .touches)) {
                    var l = k.data.type;
                    k = k.data.touches.map(m => ({ ...m,
                        target: a.l
                    }));
                    e(a.j, l, k)
                }
            },
            h = k => {
                k.contentWindow ? M(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        "complete" === b.contentDocument ? .readyState && (h(b), f(b));
        M(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function fx(a, b, c) {
        a.U.set(b, a.win.document.documentElement.style.getPropertyValue(b) ? ? "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function gx(a, b) {
        const c = a.U.get(b) ? ? "";
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function ax(a) {
        a.K = !0;
        a.I = !1;
        gx(a, "position");
        gx(a, "width");
        gx(a, "transform");
        gx(a, "overflow");
        gx(a, "touch-action");
        null != a.G && (a.win.document.documentElement.scrollTop = a.G, a.win.document.body.scrollTop = a.G);
        gx(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        Pb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.N) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function bx(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(dx(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        Pb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function cx(a) {
        const b = dx(a);
        if (a.I) 50 < b ? ax(a) : 0 !== b && hx(a, 0);
        else {
            const c = a.A - a.F;
            b < c - 50 ? hx(a, 0) : b > c + 50 ? ax(a) : b !== c && hx(a, a.A - a.F)
        }
    }

    function dx(a) {
        return Number(((new DOMMatrix(a.j.style.transform ? ? null)).f - a.D).toFixed(1))
    }

    function hx(a, b) {
        a.K = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var ix = class {
        constructor(a, b, c) {
            this.win = a;
            this.F = b;
            this.A = c;
            this.N = [];
            this.U = new Map;
            this.I = !1;
            this.K = !0;
            this.G = null;
            b = new Mg(a.document);
            this.J = b.ia("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ia("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ia("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ia("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ia("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ia("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.M = b.ia("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.M.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            const f = this.D;
            e = gw("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + X(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                X(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + X(20) + "px " + X(20) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; margin-top: " + X(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + X(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, ch(b, bw(e)));
            c.appendChild(this.C);
            N(this.M, Jw(a))
        }
        init() {
            this.win.document.body.appendChild(this.M);
            $w(this)
        }
        W(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.G = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            fx(this, "transform", `translateY(${-this.G}px)`);
            fx(this, "position", "fixed");
            fx(this, "width", "100%");
            fx(this, "overflow", "hidden");
            fx(this, "touch-action", "none");
            fx(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.G}px)`;
            hx(this, this.A - this.F)
        }
        ba(a) {
            this.N.push(a)
        }
    };

    function jx(a, b) {
        const c = a.document.createElement("div");
        N(c, Jw(a));
        a.document.body.appendChild(c);
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            me: c,
            shadowRoot: a
        }
    }

    function kx(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function lx(a, b) {
        const c = new cn(b.O);
        ln(b, !0, () => void S(c, !0));
        ln(b, !1, () => {
            a.setTimeout(() => {
                b.O || S(c, !1)
            }, 700)
        });
        return en(c)
    };
    var mx = void 0;

    function nx(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new ox(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function px(a, b) {
        return b ? b.googNavStackId === a.A ? b : null : null
    }

    function qx(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.L.requestAnimationFrame(() => void b[c].Uf({
                isFinal: d
            }))
        }
    }

    function rx(a, b) {
        b = Ib(a.stack, b, (c, d) => c - d.Jd.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class ox extends zl {
        constructor(a, b) {
            super();
            this.L = a;
            this.j = b;
            this.stack = [];
            this.A = 1E9 * Math.random() >>> 0;
            this.D = 0;
            this.B = c => {
                (c = px(this, c.state)) ? qx(this, rx(this, c.googNavStackStateId + .5)): qx(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.A,
                    googNavStackStateId: this.D++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Uf: c,
                        Jd: a
                    })
                });
            this.j.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = rx(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].Jd;
                        const e = px(this, this.j.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.j.go(-c.length);
                    qx(this, c)
                }
            }
        }
        init() {
            this.L.addEventListener("popstate", this.B)
        }
        l() {
            this.L.removeEventListener("popstate", this.B);
            super.l()
        }
    };

    function sx(a) {
        return (a = nx(a)) ? new tx(a) : null
    }

    function ux(a) {
        if (!a.j) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.B.pushEvent();
            a.j = c;
            b.then(() => {
                a.j && !a.C && (a.j = null, nn(a.A))
            })
        }
    }
    var tx = class extends zl {
        constructor(a) {
            super();
            this.B = a;
            this.A = new on;
            this.j = null
        }
    };

    function vx(a, b, c) {
        var d = Qw(new Uw(a), c.zIndex - 1);
        const e = jx(a, c.Ac),
            f = e.shadowRoot;
        var g = f.appendChild,
            h = new Mg(a.document);
        var k = c.Dd;
        var l = c.Ad || !1,
            m = c.pd,
            n = c.zIndex;
        if (c.ek ? ? !0) {
            void 0 === mx && (mx = 20);
            var q = mx
        } else q = 0;
        k = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(n) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(k) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + X(q) + "px; transition: transform " + X(.5) + "s ease-in-out;" + (l ? "left: 0; border-top-right-radius: " + X(q) + "px; border-bottom-right-radius: " + X(q) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(q) + "px; border-bottom-left-radius: " + X(q) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (l ? "text-align: left;" :
                "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + kw(m) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        k = gw(k);
        g.call(f, ch(h, bw(k)));
        g = kx("hd-content-container", f);
        g.appendChild(b);
        Pb(a.document.body.offsetHeight);
        b = {
            qb: kx("hd-drawer-container", f),
            Mc: kx("hd-modal-background", f),
            xc: g,
            Re: kx("hd-close-button", f),
            Qc: e
        };
        d = new wx(a, b, Sn(a), d);
        d.init();
        c.Cc && (a = sx(a)) && xx(d, a);
        return d
    }

    function xx(a, b) {
        ln(a.j, !0, () => {
            ux(b)
        });
        ln(a.j, !1, () => {
            b.j && (b.j(), b.j = null)
        });
        (new pn(b.A)).Z(() => void a.collapse());
        Al(a, Na(yl, b))
    }

    function yx(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function zx(a) {
        const {
            Mc: b,
            Re: c
        } = yx(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var wx = class extends zl {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.j = new cn(!1);
            this.A = lx(a, this.j);
            ln(this.A, !0, () => {
                Un(c);
                Vw(d)
            });
            ln(this.A, !1, () => {
                Wn(c);
                Ww(d)
            })
        }
        show({
            wd: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            yx(this).qb.classList.add("hd-revealed");
            S(this.j, !0);
            a && ln(this.A, !1, () => {
                this.Ba()
            })
        }
        collapse() {
            yx(this).qb.classList.remove("hd-revealed");
            S(this.j, !1)
        }
        isVisible() {
            return this.A
        }
        init() {
            zx(this)
        }
        l() {
            const a = this.B.Qc.me,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var Ax = void 0;

    function Bx() {
        void 0 === Ax && (Ax = 20);
        return Ax
    }
    var Cx = void 0;

    function Dx() {
        void 0 === Cx && (Cx = 30);
        return Cx
    }

    function Ex(a) {
        return gw('<div class="ved-handle" id="' + kw(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function Fx(a) {
        return Dn(a.j).map(b => b ? Gx(a, b) : 0)
    }

    function Gx(a, b) {
        switch (a.direction) {
            case 0:
                return Hx(-b.te);
            case 1:
                return Hx(-b.se);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function Ix(a) {
        return Fn(a.j).map(b => Gx(a, b))
    }
    var Jx = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function Hx(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function Kx(a) {
        const {
            ea: b,
            Ha: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || Lx(a);
        Y(a).qb.classList.add("ved-revealed");
        S(a.j, !0)
    }

    function Mx(a) {
        return lx(a.win, a.j)
    }

    function Nx(a, b) {
        const c = new cn(b());
        (new pn(a.G)).Z(() => void S(c, b()));
        return en(c)
    }

    function Ox(a) {
        const {
            ea: b,
            dc: c
        } = Y(a);
        return Nx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Px(a) {
        const {
            ea: b,
            dc: c
        } = Y(a);
        return Nx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function Qx(a) {
        const {
            ea: b
        } = Y(a);
        return Nx(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function Rx(a) {
        return fn(Ox(a), Qx(a))
    }

    function Sx(a) {
        const {
            ea: b,
            Ha: c
        } = Y(a);
        return Nx(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function Lx(a) {
        Y(a).Ha.classList.add("ved-snap-point-top");
        var b = Tx(a, Y(a).Ha);
        Y(a).ea.scrollTop = b;
        Ux(a)
    }

    function Vx(a) {
        jn(Ox(a), !0, () => {
            const {
                Cd: b,
                Cb: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        jn(Ox(a), !1, () => {
            const {
                Cd: b,
                Cb: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function Wx(a) {
        const b = Hn(a.win, Y(a).xc);
        hn(Kn(b), () => void Xx(a));
        Al(a, Na(yl, b))
    }

    function Yx(a) {
        jn(Zx(a), !0, () => {
            Y(a).Yd.classList.remove("ved-hidden")
        });
        jn(Zx(a), !1, () => {
            Y(a).Yd.classList.add("ved-hidden")
        })
    }

    function $x(a) {
        const b = () => void nn(a.F),
            {
                Mc: c,
                Ha: d,
                hf: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        ln(ay(a), !0, b)
    }

    function by(a) {
        ln(Mx(a), !1, () => {
            Lx(a)
        })
    }

    function Ux(a) {
        kn(a.A, () => void nn(a.G))
    }

    function Xx(a) {
        if (!a.A.O) {
            var {
                ud: b,
                xc: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(cy(a), d);
            S(a.A, !0);
            var e = dy(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    S(a.A, !1)
                })
            })
        }
    }

    function Zx(a) {
        const {
            ea: b,
            Ha: c
        } = Y(a);
        return Nx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function ay(a) {
        return dn(a.B.map(lo), ey(a))
    }

    function ey(a) {
        return Nx(a, () => 0 === Y(a).ea.scrollTop)
    }

    function Tx(a, b) {
        ({
            Cb: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function fy(a, b) {
        S(a.B, !0);
        const {
            Cb: c,
            ea: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void gy(a, b)
    }

    function gy(a, b) {
        const {
            Cb: c,
            ea: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).ea.scrollTop = b;
        Ux(a);
        S(a.B, !1)
    }

    function dy(a) {
        const b = Y(a).ea.scrollTop;
        fy(a, b);
        return () => void gy(a, b)
    }

    function cy(a) {
        const {
            ea: b,
            dc: c,
            ud: d,
            Ha: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var hy = class extends zl {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.D = b;
            this.J = c;
            this.F = new on;
            this.G = new on;
            this.j = new cn(!1);
            this.B = new cn(!1);
            this.A = new cn(!1)
        }
        init() {
            Lx(this);
            Vx(this);
            Wx(this);
            Yx(this);
            $x(this);
            by(this);
            Y(this).ea.addEventListener("scroll", () => void Ux(this))
        }
        l() {
            const a = this.D.Qc.me,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function iy(a, b, c) {
        var d = Qw(new Uw(a), c.zIndex - 1),
            e = jx(a, c.Ac),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new Mg(a.document);
        var k = 100 * c.Zd;
        var l = 100 * c.Ed;
        k = gw("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(l) + "%; transition: transform " + X(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + X(Bx()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(k / l * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((l - k) / l * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(k / l * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(k / l * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(Dx() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(Bx()) + "px " + X(Bx()) + "px 0 0; background: white; display: flex; height: " + X(Dx()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            Ex("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + Ex("ved-fixed-handle") + "</div></div></div>");
        g.call(f, ch(h, bw(k)));
        g = kx("ved-content-container", f);
        g.appendChild(b);
        Pb(a.document.body.offsetHeight);
        b = {
            qb: kx("ved-drawer-container", f),
            Mc: kx("ved-modal-background", f),
            qe: kx("ved-ui-revealer", f),
            ea: kx("ved-scroller",
                f),
            Cb: kx("ved-scrolled-stack", f),
            hf: kx("ved-fully-closed-anchor", f),
            Ha: kx("ved-partially-extended-anchor", f),
            ud: kx("ved-content-sizer", f),
            xc: g,
            dk: kx("ved-moving-handle", f),
            dc: kx("ved-moving-handle-holder", f),
            gf: kx("ved-fixed-handle", f),
            Cd: kx("ved-fixed-handle-holder", f),
            Yd: kx("ved-over-scroll-block", f),
            Qc: e
        };
        e = b.gf;
        e = new Gn(new xn(a, e), new un(e));
        f = e.j;
        f.C.addEventListener("mousedown", f.G);
        f.B.addEventListener("mouseup", f.D);
        f.B.addEventListener("mousemove", f.F, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.F);
        f.l.addEventListener("touchend", f.C);
        f.l.addEventListener("touchmove", f.D, {
            passive: !1
        });
        b = new hy(a, b, new Jx(e));
        b.init();
        d = new jy(a, b, Sn(a), d);
        Al(d, Na(yl, b));
        d.init();
        c.Cc && (a = sx(a)) && ky(d, a);
        return d
    }

    function ky(a, b) {
        ln(a.j.j, !0, () => {
            ux(b)
        });
        ln(a.j.j, !1, () => {
            b.j && (b.j(), b.j = null)
        });
        (new pn(b.A)).Z(() => void a.collapse());
        Al(a, Na(yl, b))
    }

    function ly(a) {
        ln(dn(Rx(a.j), Sx(a.j)), !0, () => {
            Y(a.j).Ha.classList.remove("ved-snap-point-top")
        });
        jn(Px(a.j), !0, () => {
            Y(a.j).ea.classList.add("ved-no-snap")
        });
        jn(Px(a.j), !1, () => {
            Y(a.j).ea.classList.remove("ved-no-snap")
        });
        ln(Px(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).dc;
            c = fy(b, Tx(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function my(a) {
        const b = a.j.J;
        Fx(b).Z(c => {
            c = -c;
            if (0 < c) {
                const {
                    qe: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                qe: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        Ix(b).Z(c => {
            30 < -c && a.collapse()
        })
    }
    var jy = class extends zl {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            ln(Mx(b), !0, () => {
                Un(c);
                Vw(d)
            });
            ln(Mx(b), !1, () => {
                Wn(c);
                Ww(d)
            })
        }
        show({
            wd: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            Kx(this.j);
            a && ln(Mx(this.j), !1, () => {
                this.Ba()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).qb.classList.remove("ved-revealed");
            S(a.j, !1)
        }
        isVisible() {
            return Mx(this.j)
        }
        init() {
            (new pn(this.j.F)).Z(() => {
                this.collapse()
            });
            ly(this);
            my(this);
            Pb(this.win.document.body.offsetHeight)
        }
    };

    function ny(a) {
        if (a.A instanceof ix || a.A instanceof Zw) a.A.init(), a.A.W(a.B), a.A instanceof ix && ex(a.A, a.B), a.A.ba(() => void Ww(a.K)), Is(1075, () => a.F.init(), a.j)
    }

    function oy(a) {
        let b;
        a.l.id = "cse-overlay-div";
        N(a.l, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.C.createElement("DIV");
        b.id = "cse-overlay-close-button";
        N(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.D.classList.add("gsc-modal-background-image");
        a.D.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.l);
        a.j.document.body.appendChild(a.D);
        const c = () => {
            "flex" === a.l.style.display && (a.l.style.display = "none");
            a.D.classList.remove("gsc-modal-background-image-visible");
            Ww(a.K)
        };
        b.onclick = c;
        a.D.onclick =
            c;
        a.l.appendChild(b);
        a.l.appendChild(a.B);
        Is(1075, () => a.F.init(), a.j)
    }

    function py(a) {
        const b = a.C.createElement("SCRIPT");
        var c = O `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
        c = xi(c, new Map([
            ["language", a.J]
        ]));
        Zf(b, c);
        a.j.document.head.appendChild(b)
    }

    function qy(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.U.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.N,
            styleId: "5134551505",
            hl: a.J,
            fexp: a.M,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.ba.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var ry = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.U = b;
            this.J = d ? .j() || "en";
            this.W = d ? .B() || "Search results from ${website}";
            this.I = e;
            this.G = f;
            this.M = g;
            this.N = c.replace("ca", "partner");
            this.K = Qw(new Uw(a), 1E5);
            this.C = new Mg(a.document);
            this.l = this.C.createElement("DIV");
            this.D = this.C.createElement("DIV");
            this.B = this.C.createElement("IFRAME");
            this.F = new Pw(this.B, this.N, a.location.host, this.J, this.W, this.M);
            f ? (a = this.B, a = this.G ? 2 === Fh() ? iy(this.j, a, {
                Zd: .95,
                Ed: .95,
                zIndex: 100001
            }) : vx(this.j, a, {
                Dd: "80vw",
                pd: "",
                Ad: !1,
                zIndex: 100001
            }) : null) : this.I ? 2 === Fh() ? (a = Math.round(.95 * this.j.innerHeight) - 30, a = new ix(this.j, a, a)) : a = new Zw(this.j, Math.round(.8 * this.j.innerWidth)) : a = null;
            this.A = a
        }
        init() {
            0 === this.U.length || !this.I && this.j.document.querySelector('script[src*="cse.google.com/cse"]') || (this.G ? Is(1075, () => this.F.init(), this.j) : this.I ? ny(this) : (oy(this), py(this)), Is(1076, () => {
                    const a = this.C.createElement("SCRIPT");
                    Zf(a, O `https://www.google.com/adsense/search/async-ads.js`);
                    this.j.document.head.appendChild(a)
                },
                this.j), qy(this))
        }
        ba(a, b) {
            this.G || Vw(this.K);
            this.I || this.G ? (Ow(this.F, a, b), (() => {
                const c = new ResizeObserver(async e => {
                        this.B.height = 0;
                        await new Promise(f => this.j.requestAnimationFrame(f));
                        this.B.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        const e = this.B.contentDocument ? .documentElement;
                        e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.A.show()
            })()) : (this.D.classList.add("gsc-modal-background-image-visible"), this.l.style.display = "flex", Ow(this.F, a, b))
        }
    };

    function sy(a) {
        const b = vt(a.A.V),
            c = a.C.Da(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ze: b,
            Ue: c
        }
    }
    class ty {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new cn(null)
        }
        init() {
            const a = sy(this);
            this.j = a.Ze;
            Dt(this.A, this.j);
            S(this.l, a.Ue)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            S(this.l, null)
        }
        F() {
            return this.l
        }
    };

    function uy(a) {
        var b = Nw(a.l, a.j);
        b = vy(a.l, b);
        const c = wy(b, a.l),
            d = A(a.j, Qo, 28) ? .B() ? .j() || A(a.j, Qo, 28) ? .j() || 0,
            e = A(a.j, Qo, 28) ? .F() || !1,
            f = A(a.j, Qo, 28) ? .G() || !1;
        Is(1074, () => (new ry(a.l, c, a.A, A(a.j, Qo, 28) ? .D(), e, f, d)).init(), a.l)
    }
    var xy = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function vy(a, b) {
        a = St(b, a).sort(yy);
        return 0 == a.length ? [] : [a[Math.floor(a.length / 2)]]
    }

    function yy(a, b) {
        return a.aa.j - b.aa.j
    }

    function wy(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new ty(b, e, new Mw(g))).init();
            c.push(f)
        }
        return c
    };
    var zy = {
            eh: "google_ads_preview",
            Nh: "google_mc_lab",
            di: "google_anchor_debug",
            ci: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Ai: "google_scr_debug",
            Ci: "google_ia_debug_allow_onclick",
            Vi: "googleads",
            we: "google_pedestal_debug",
            oj: "google_responsive_slot_preview",
            nj: "google_responsive_dummy_ad",
            Ug: "google_audio_sense",
            Vg: "google_auto_gallery",
            Xg: "google_auto_storify_swipeable",
            Wg: "google_auto_storify_scrollable"
        },
        Ay = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var By = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        sj: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Cy(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Dy(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Dy(a) {
        let b = "";
        oh(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function Ey() {
        var a = t.location;
        let b = !1;
        oh(zy, c => {
            Cy(a, c) && (b = !0)
        });
        return b
    }

    function Fy(a, b) {
        switch (a) {
            case 1:
                return Cy(b, "google_ia_debug");
            case 2:
                return Cy(b, "google_bottom_anchor_debug");
            case 3:
                return Cy(b, "google_anchor_debug") || Cy(b, "googleads");
            case 4:
                return Cy(b, "google_scr_debug")
        }
    };
    var Gy = (a, b, c) => {
        const d = [];
        A(a, qp, 18) && d.push(2);
        b.da && d.push(0);
        A(a, Qo, 28) && 1 == sd(A(a, Qo, 28), 1) && d.push(1);
        A(a, Po, 31) && 1 == sd(A(a, Po, 31), 1) && d.push(5);
        (A(a, Eo, 27) && 1 == sd(A(a, Eo, 27), 1) || Cy(c, "google_audio_sense")) && d.push(3);
        A(a, sp, 29) && d.push(4);
        A(a, Ep, 30) && d.push(6);
        return d
    };

    function Hy(a, b) {
        const c = Lg(a).createElement("IMG");
        Iy(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        N(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Jy(a, b) {
        const c = b.document.createElement("button");
        Iy(b, c);
        N(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Ky(a, b, c) {
        const d = Lg(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.B);
        Iy(b, d);
        N(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Ly(a) {
        const b = a.document.createElement("ins");
        Iy(a, b);
        N(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class My {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new cn(!1)
        }
        Da(a, b, c, d) {
            const e = Hy(a, d),
                f = Hy(a),
                g = Jy(this, a),
                h = Ky(this, a, c);
            a = Ly(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.Z(k => {
                N(e, {
                    display: k ? "none" : "inline"
                });
                N(f, {
                    display: k ? "inline" : "none"
                });
                k ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Hd() {
            return 40
        }
        Wd() {
            S(this.j, !1);
            return 0
        }
        Xd() {
            S(this.j, !0)
        }
    }

    function Iy(a, b) {
        N(b, Jw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Ny(a, b) {
        const c = b.document.createElement("button");
        Oy(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        N(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Py(a, b, c, d) {
        const e = b.document.createElement("div");
        N(e, Jw(b));
        N(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        N(f, Jw(b));
        N(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (N(e, {
                    "flex-direction": "row"
                }), a.j && N(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), N(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                N(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (N(e, {
                border: "0",
                "flex-direction": "column"
            }), N(f, {
                "margin-left": "0",
                "text-align": "center"
            }), N(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && N(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Oy(a, b, c) {
        N(c, Jw(b));
        N(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Qy {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.G = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        Da(a) {
            const b = a.document.createElement("div");
            Oy(this, a, b);
            N(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = Lg(a).createElement("IMG");
                c.src = this.B;
                Oy(this, a, c);
                N(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Oy(this, a, c);
            N(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Ny(this, a);
            c.appendChild(b);
            return this.A ? Py(this, a, c, this.A) : c
        }
    };
    var Ry = (a, b) => {
        b = b.filter(c => 5 == v(A(c, wo, 4), 1) && 1 == v(c, 8));
        b = mt(b, a);
        a = St(b, a);
        a.sort((c, d) => d.aa.j - c.aa.j);
        return a[0] || null
    };

    function Sy({
        L: a,
        Lc: b,
        Kc: c,
        nd: d,
        na: e,
        Qe: f
    }) {
        let g = 0;
        try {
            g |= a != a.top ? 512 : 0;
            const h = Math.min(a.screen.width || 0, a.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= a.navigator && Ty(a.navigator.userAgent) ? 1048576 : 0;
            g = b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8);
            g |= Fm(a, c);
            g |= Gm(a)
        } catch {
            g |= 32
        }
        switch (d) {
            case 2:
                Uy(a, e) && (g |= 16777216);
                break;
            case 1:
                Vy(a, e) && (g |= 16777216)
        }
        f && Wy(a, e) && (g |= 16777216);
        return g
    }

    function Ty(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var Uy = (a, b = null) => {
            const c = Xy(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Yy) + 15, 3);
            return Zy(a, c, b)
        },
        Vy = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Yy) + 15,
                f = Xy(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Zy(a, f, b)
        };

    function Wy(a, b = null) {
        return null != $y(a, b)
    }

    function $y(a, b = null) {
        var c = a.innerWidth;
        const d = a.innerHeight,
            e = W(kr);
        c = Xy(c, 10, d - e, d, 10);
        return az(a, c, b)
    }

    function bz(a, b) {
        const c = V(Hq) ? 9 : 3;
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let g = f;
            for (; g > b;) {
                var d = Xy(e, c, g - b, g, c);
                d = az(a, d);
                if (!d) {
                    a = f - g;
                    break a
                }
                g = d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function Zy(a, b, c = null) {
        return null != az(a, b, c)
    }

    function az(a, b, c = null) {
        for (const d of b)
            if (b = cz(a, d, c)) return b;
        return null
    }

    function cz(a, b, c = null) {
        const d = dz(a.document, b.x, b.y);
        return d ? ez(d, a, b, c) || fz(d, a, b, c) || null : null
    }

    function dz(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function fz(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a !== e.body; a = a.offsetParent) {
            const f = ez(a, b, c, d);
            if (f) return f
        }
        return null
    }

    function Xy(a, b, c, d, e) {
        const f = [];
        for (let l = 0; l < e; l++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    k = e - 1;
                g.push.call(g, {
                    x: (0 === h ? 0 : m / h) * a,
                    y: c + (0 === k ? 0 : l / k) * (d - c)
                })
            }
        return f
    }

    function ez(a, b, c, d = null) {
        if ("fixed" !== Ei(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Hi(a).width && 1 >= Hi(a).height ? !0 : !1;
        d && pj(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id") ? ? "",
            cls: a.getAttribute("class") ? ? "",
            ign: String(e),
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Yy = 90 * 1.38;

    function gz(a) {
        if (a.G) {
            const b = Mm(a.j);
            if (b > a.l + 100 || b < a.l - 100) hz(a), a.l = Im(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => iz(a), 200)
    }

    function iz(a) {
        var b = Im(a.j);
        a.l && a.l > b && (a.l = b);
        b = Mm(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), jz(a))
    }

    function kz(a) {
        a.j.removeEventListener("scroll", a.K)
    }

    function hz(a) {
        a.G = !1;
        const b = a.C.Wd();
        switch (b) {
            case 0:
                S(a.B, a.D);
                break;
            case 1:
                a.A && (N(a.A, {
                    display: "none"
                }), S(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function jz(a) {
        a.A || (a.A = lz(a));
        N(a.A, {
            display: "block"
        });
        a.G = !0;
        a.C.Xd();
        S(a.B, a.D)
    }

    function lz(a) {
        var b = bz(a.j, a.C.Hd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        N(c, Jw(a.j));
        N(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.Da(a.j, () => a.remove(), () => {
            kz(a);
            hz(a)
        }, () => {
            kz(a);
            jz(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class mz {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new cn(null);
            this.J = c || null;
            this.A = null;
            this.G = !1;
            this.l = 0;
            this.I = null;
            this.K = () => gz(this)
        }
        init() {
            this.j.addEventListener("scroll", this.K);
            this.l = Im(this.j);
            iz(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            kz(this);
            S(this.B, null)
        }
        F() {
            return this.B
        }
    };

    function nz(a) {
        S(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function oz(a) {
        a.l = new mz(a.C, a.J, a.G);
        a.l.init();
        mn(a.B, a.l.F());
        S(a.D, 2)
    }
    class pz {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.K = c;
            this.J = d;
            this.G = e;
            this.D = new cn(0);
            this.B = new cn(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new ty(this.C, this.I, this.K, this.G), this.A.init(), mn(this.B, this.A.F()), S(this.D, 1), null == this.j && (this.j = new Rn(this.C), this.j.init(2E3)), this.j.addListener(() => {
                nz(this);
                oz(this)
            })) : oz(this)
        }
        remove() {
            nz(this);
            this.j && (this.j.Ba(), this.j = null)
        }
        F() {
            return this.B
        }
    };
    var qz = (a, b, c, d, e) => {
        a = new pz(a, Ry(a, e), new Qy(b, d, "#FFF", "#4A4A4A", "normal"), new My(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var rz = a => a.googlefc = a.googlefc || {},
        sz = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function tz(a) {
        var b = sz(a.j);
        if (uz(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = qz(a.j, c, b, () => vz(a), a.B))
        }
    }

    function wz(a) {
        const b = rz(a.j);
        sz(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => tz(a)
        })
    }

    function vz(a) {
        Vw(a.A);
        sz(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Ww(a.A)
        })
    }
    class xz {
        constructor(a, b, c) {
            this.j = a;
            this.A = Qw(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function uz(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function yz(a) {
        const b = a.document.createElement("ins");
        zz(a, b);
        N(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Az(a, b, c, d) {
        const e = Lg(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        zz(a, e);
        N(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Bz(a, b) {
        const c = b.document.createElement("span");
        zz(b, c);
        N(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Cz(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        N(c, Jw(b));
        N(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Dz(a) {
        const b = a.document.createElement("div");
        N(b, Jw(a));
        N(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Ez {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new cn(!1)
        }
        Da(a, b, c, d) {
            c = yz(a);
            const e = Az(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Az(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Bz(this, a),
                h = Az(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            N(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = Cz(this, a);
            a = Dz(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.Z(l => {
                N(e, {
                    display: l ? "none" : "inline"
                });
                N(f, {
                    display: l ? "inline" : "none"
                });
                l ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), N(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), N(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Hd() {
            return 71
        }
        Wd() {
            S(this.j, !1);
            return 0
        }
        Xd() {
            S(this.j, !0)
        }
    }

    function zz(a, b) {
        N(b, Jw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Fz(a) {
        Gz(a.l, b => {
            var c = a.B,
                d = b.Vf,
                e = b.Se,
                f = b.Ge;
            b = b.showRevocationMessage;
            (new pz(c, Ry(c, a.A), new Qy(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Ez(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Ww(a.j)
        })
    }
    class Hz {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = Qw(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var Iz = a => {
        if (!a || !kd(a, 1)) return !1;
        a = v(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Jz(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Iz(a.j) && (b = new Hz(a.l, a.C, a.B || C(a.j, op, 4), a.A), Vw(b.j), Fz(b), b = !0);
            var c;
            a: if ((c = a.j) && kd(c, 3)) switch (c = v(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (wz(new xz(a.l, a.C, a.B || C(a.j, op, 4))), b = !0);
            if (c = (c = a.j) ? !0 === y(c, 5) : !1) c = ((c = a.j) ? !0 === y(c, 6) : !1) || V(Cq);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Kz {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Lz = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = lh("SCRIPT", g);
                h.async = !0;
                Zf(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Lz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Mz = (a, b, c = () => {}, d = () => {}) => {
            Lz(Lg(a), b, 0, !1, c, d)
        };
    var Nz = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    ye(um).map(a => Number(a));
    ye(vm).map(a => Number(a));
    var Oz = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = lh("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const Pz = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Qz(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Pz(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (gj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Rz(a) {
        return Qz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? Sz(a, "1") : !0 : !1
    }

    function Sz(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function Tz(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => Sz(a, c))
    }

    function Uz(a) {
        if (a.j) return a.j;
        a.j = Eh(a.A, "__tcfapiLocator");
        return a.j
    }

    function Vz(a) {
        return "function" === typeof a.A.__tcfapi || null != Uz(a)
    }

    function Wz(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.A.__tcfapi) a = a.A.__tcfapi, a(b, 2, c, d);
        else if (Uz(a)) {
            Xz(a);
            const e = ++a.J;
            a.F[e] = c;
            a.j && a.j.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Yz(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.D
        };
        const d = ne(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        Wz(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Pz(c), c.internalBlockOnErrors = a.D, Qz(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Wz(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function Xz(a) {
        a.B || (a.B = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, M(a.A, "message", a.B))
    }
    class Zz extends zl {
        constructor(a, b = 500, c = !1) {
            super();
            this.A = a;
            this.j = null;
            this.F = {};
            this.J = 0;
            this.G = b;
            this.D = c;
            this.B = null
        }
        l() {
            this.F = {};
            this.B && (te(this.A, "message", this.B), delete this.B);
            delete this.F;
            delete this.A;
            delete this.j;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.D
            };
            const c = ne(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Pz(b), b.internalBlockOnErrors =
                    this.D, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Wz(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Wz(this, "removeEventListener", null, a.listenerId)
        }
    };

    function Gz(a, b, c) {
        const d = Nz(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Nz(a.j),
                    f = new Zz(a.j);
                Vz(f) && Yz(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Vf: e.getDefaultConsentRevocationText(),
                        Se: e.getDefaultConsentRevocationCloseText(),
                        Ge: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function $z(a) {
        const b = Pe(ae("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Mz(a.j, b, () => {}, () => {})
    }
    class aA {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                Oz(this.j, "googlefcPresent"), $z(this)
            } catch (a) {}
        }
    };
    var bA = (a, b, c) => {
        const d = A(a, ip, 6);
        if (!d) return [];
        c = Bv(d.j(), c);
        return (a = a.j()) && y(a, 11) ? c.map(e => Pt(e)) : c.map(e => {
            const f = vo();
            return new nt(new Jt(e.qc, e.rc), new Ht, new It(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var dA = class extends L {
        constructor() {
            super(void 0, -1, cA)
        }
    };

    function eA(a, b) {
        return x(a, 1, b)
    }

    function fA(a, b) {
        return Cd(a, 2, b)
    }
    var hA = class extends L {
            constructor(a) {
                super(a, -1, gA)
            }
        },
        iA = class extends L {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return Hd(this, 2)
            }
        },
        cA = [5],
        gA = [2];
    var jA = class extends L {
            constructor() {
                super()
            }
        },
        kA = [1, 2];

    function lA(a) {
        return new yo(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class mA {
        j(a) {
            return lA(Math.floor(a.l))
        }
    };

    function nA(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = Bm(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var oA = class extends L {
        constructor() {
            super()
        }
    };

    function pA(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.sc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                Aa(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                Ni(a.B) && Ni(a.l) || bm("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.G(b)
    }
    class qA {
        constructor() {
            this.D = this.H = this.A = this.sc = null;
            this.l = this.B = 0
        }
        G() {
            return !0
        }
    };

    function rA(a, b = []) {
        const c = Date.now();
        return zb(b, d => c - d < 1E3 * a)
    }

    function sA(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Cb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = rA(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function tA(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : sA(a, b)
    };
    var uA = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Gm(a);
            d |= Fm(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = tA(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            V(br) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class vA extends qA {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        G(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Pd(Jp, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    const wA = {};

    function xA(a, b, c) {
        let d = yA(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Ab && d.Ab.length;) {
            const h = d.Ab.shift();
            var g = wt(h.V);
            const k = h.aa.j,
                l = !!c.A.Rc || !!c.A.Wc || c.Ga() || !!c.A.vd || k > e;
            g = !g || g <= d.Ib;
            if (l && g && zA(c, h, {
                    Yb: d.Ib
                })) {
                e = k;
                if (d.Hb.j.length + 1 >= f) return !0;
                d = yA(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const yA = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = Fu(b.T(), f.j ? f.j.kb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = R(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Lu(f)) : e = void 0;
        a = null == e || 50 <= e ? AA(b, f, {
            types: a
        }, c) : null;
        return {
            Hb: f,
            Ib: e,
            Ab: a
        }
    };
    wA[2] = Na(function(a, b) {
        a = AA(b, Fu(b.T()), {
            types: a,
            Ra: ou(b.T())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (zA(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    wA[5] = Na(xA, [0], 5);
    wA[10] = Na(function(a, b) {
        a = [];
        const c = b.ba;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !V(qq) && a.push(1);
        return xA(a, 10, b)
    }, 10);
    wA[3] = function(a) {
        if (!a.B) return !1;
        var b = AA(a, Fu(a.T()), {
            types: [0],
            Ra: ou(a.T())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (zA(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const BA = a => {
            var b;
            a.A.re ? b = new gu(0, null, [], 3, null) : b = ou(a.T());
            return {
                types: [0],
                Ra: b
            }
        },
        DA = a => {
            const b = a.T().document.body.getBoundingClientRect().width;
            CA(a, lA(b))
        },
        FA = (a, b) => {
            var c = BA(a);
            c.Sf = [5];
            c = AA(a, Fu(a.T()), c, 8);
            EA(a, c.reverse(), b)
        },
        EA = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.aa), zA(a, d, {
                        tc: b
                    })) return !0;
            return !1
        };
    wA[8] = function(a) {
        var b = a.T().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => wA[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Wb()) return !0;
        b = BA(a);
        b.Pc = [2, 4, 5];
        b = AA(a, Fu(a.T()), b, 8);
        const c = new mA;
        if (EA(a, b, c)) return !0;
        if (a.A.yd) switch (a.A.ae || 0) {
            case 1:
                FA(a, c);
                break;
            default:
                DA(a)
        }
        return !0
    };
    wA[6] = Na(xA, [2], 6);
    wA[7] = Na(xA, [1], 7);
    wA[9] = function(a) {
        const b = yA([0, 2], a, 9);
        if (!b || !b.Ab) return a.C.push(17), nA(a.T()), a.B;
        for (const e of b.Ab) {
            var c = e;
            var d = a.A.Dc || null;
            null == d ? c = null : (d = xt(c.V, new GA, new HA(d, a.T())), c = new Et(d, c.Y(), c.aa));
            if (c && !(wt(c.V) > b.Ib) && zA(a, c, {
                    Yb: b.Ib,
                    wc: !0
                })) return a = c.V.U, ut(e.V, 0 < a.length ? a[0] : null), !0
        }
        a.C.push(17);
        nA(a.T());
        return a.B
    };
    class GA {
        l(a, b, c, d) {
            return As(d.document, a, b)
        }
        A(a) {
            return R(a).clientHeight || 0
        }
    };
    var IA = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Hb = c
        }
        ja(a) {
            return this.j ? gv(this.l, this.j, a, this.Hb) : fv(this.l, a, this.Hb)
        }
        ka() {
            return this.j ? 16 : 9
        }
    };
    var JA = class {
        constructor(a) {
            this.uc = a
        }
        ja(a) {
            return nv(a.document, this.uc)
        }
        ka() {
            return 11
        }
    };
    var KA = class {
        constructor(a) {
            this.eb = a
        }
        ja(a) {
            return kv(this.eb, a)
        }
        ka() {
            return 13
        }
    };
    var LA = class {
        ja(a) {
            return dv(a)
        }
        ka() {
            return 12
        }
    };
    var MA = class {
        constructor(a) {
            this.sb = a
        }
        ja() {
            return iv(this.sb)
        }
        ka() {
            return 2
        }
    };
    var NA = class {
        constructor(a) {
            this.j = a
        }
        ja() {
            return lv(this.j)
        }
        ka() {
            return 3
        }
    };
    var OA = class {
        ja() {
            return ov()
        }
        ka() {
            return 17
        }
    };
    var PA = class {
        constructor(a) {
            this.j = a
        }
        ja() {
            return hv(this.j)
        }
        ka() {
            return 1
        }
    };
    var QA = class {
        ja() {
            return le(ot)
        }
        ka() {
            return 7
        }
    };
    var RA = class {
        constructor(a) {
            this.Pc = a
        }
        ja() {
            return jv(this.Pc)
        }
        ka() {
            return 6
        }
    };
    var SA = class {
        constructor(a) {
            this.j = a
        }
        ja() {
            return mv(this.j)
        }
        ka() {
            return 5
        }
    };
    var TA = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ja() {
            return Na(pv, this.minWidth, this.maxWidth)
        }
        ka() {
            return 10
        }
    };
    var UA = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function VA(a) {
        var b = new WA;
        b.C = a;
        b.l.push(new PA(a));
        return b
    }

    function XA(a, b) {
        a.l.push(new RA(b));
        return a
    }

    function YA(a, b) {
        a.l.push(new MA(b));
        return a
    }

    function ZA(a, b) {
        a.l.push(new SA(b));
        return a
    }

    function $A(a, b) {
        a.l.push(new NA(b));
        return a
    }

    function aB(a) {
        a.l.push(new QA);
        return a
    }

    function bB(a) {
        a.j.push(new LA);
        return a
    }

    function cB(a, b = 0, c, d) {
        a.j.push(new IA(b, c, d));
        return a
    }

    function dB(a, b = 0, c = Infinity) {
        a.j.push(new TA(b, c));
        return a
    }

    function eB(a) {
        a.j.push(new OA);
        return a
    }

    function fB(a, b = 0) {
        a.j.push(new KA(b));
        return a
    }

    function gB(a, b) {
        a.A = b;
        return a
    }
    var WA = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new UA(this)
        }
    };
    class HA {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.sc;
            c.google_ad_height = R(b).clientHeight || 0;
            c.google_ad_width = R(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new oA;
            x(b, 1, a.C);
            a.j && Ad(b, 2, a.j);
            a.F && x(b, 3, !0);
            c.google_rasc = Rd(b);
            a.A && (c.google_adtest = "on");
            return new yo(["fsi_container"], c)
        }
    };
    var hB = ro(new oo(0, {})),
        iB = ro(new oo(1, {})),
        jB = a => a === hB || a === iB;

    function kB(a, b, c) {
        Sm(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class lB {
        constructor() {
            this.j = new Wm
        }
    };

    function mB(a, b) {
        b && (a.j.apv = v(b, 4), ld(b, Lp, 23) && (a.j.sat = "" + A(b, Lp, 23).j()));
        return a
    }

    function nB(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class oB extends bt {
        constructor(a) {
            super(a);
            this.j = {}
        }
        G(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            Be(a, this.j);
            return a
        }
    }

    function pB(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function qB(a, b) {
        a.l.op = rB(b)
    }

    function sB(a, b, c) {
        30 >= c.length ? a.l[b] = tB(c) : (a.l[b] = tB(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function uB(a, b, c) {
        sB(a, "fap", b);
        a.l.fad = rB(c)
    }

    function vB(a, b, c) {
        sB(a, "fmp", b);
        a.l.fmd = rB(c)
    }

    function wB(a, b, c) {
        sB(a, "vap", b);
        a.l.vad = rB(c)
    }

    function xB(a, b, c) {
        sB(a, "vmp", b);
        a.l.vmd = rB(c)
    }

    function yB(a, b, c) {
        sB(a, "pap", b);
        a.l.pad = rB(c)
    }

    function zB(a, b, c) {
        sB(a, "pmp", b);
        a.l.pmd = rB(c)
    }

    function AB(a, b) {
        sB(a, "psq", b)
    }
    var BB = class extends oB {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function tB(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function rB(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function CB(a, b, c) {
        const d = b.V;
        Sm(a.j, d) || a.j.set(d, new DB(ho(Ct(b)) ? ? ""));
        c(a.j.get(d))
    }

    function EB(a, b) {
        CB(a, b, c => {
            c.j = !0
        })
    }

    function FB(a, b) {
        CB(a, b, c => {
            c.l = !0
        })
    }

    function GB(a, b) {
        CB(a, b, c => {
            c.A = !0
        });
        a.K.push(b.V)
    }

    function HB(a, b, c) {
        CB(a, b, d => {
            d.bb = c
        })
    }

    function IB(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) jB(f.bb ? ? "") ? ++e : (b = a.l.get(f.bb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            cb: e
        }
    }

    function JB(a, b) {
        qB(b, a.l.vb());
        var c = Vm(a.j).filter(f => 0 === (f.Ma.startsWith(hB) ? 0 : 1)),
            d = Vm(a.j).filter(f => 1 === (f.Ma.startsWith(hB) ? 0 : 1)),
            e = IB(a, f => f.j, c);
        uB(b, e.list, e.cb);
        e = IB(a, f => f.j, d);
        vB(b, e.list, e.cb);
        e = IB(a, f => f.l, c);
        wB(b, e.list, e.cb);
        e = IB(a, f => f.l, d);
        xB(b, e.list, e.cb);
        c = IB(a, f => f.A, c);
        yB(b, c.list, c.cb);
        d = IB(a, f => f.A, d);
        zB(b, d.list, d.cb);
        AB(b, a.K.map(f => a.j.get(f) ? .bb).map(f => a.l.get(f) ? ? null))
    }

    function qk() {
        var a = P(KB);
        if (!a.C) return ek();
        const b = nk(mk(lk(kk(jk(ik(hk(gk(dk(ck(new fk, a.C ? ? []), a.J ? ? []), a.D), a.G), a.I), a.M), a.N), a.F ? ? 0), Vm(a.j).map(c => {
            var d = new bk;
            d = x(d, 1, c.Ma);
            var e = a.l.get(c.bb ? ? "", -1);
            d = x(d, 2, e);
            d = x(d, 3, c.j);
            return x(d, 4, c.l)
        })), a.K.map(c => a.j.get(c) ? .bb).map(c => a.l.get(c) ? ? null));
        null != a.A && x(b, 6, a.A);
        null != a.B && x(b, 13, a.B);
        return b
    }
    var KB = class {
        constructor() {
            this.B = this.J = this.C = null;
            this.I = this.G = !1;
            this.A = null;
            this.N = this.D = this.M = !1;
            this.F = null;
            this.l = new Wm;
            this.j = new Wm;
            this.K = []
        }
    };
    class DB {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.bb = null;
            this.Ma = a
        }
    };
    class LB {
        constructor(a = 0) {
            this.j = a
        }
    };
    class MB {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function NB(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function OB(a, b) {
        const c = a.J.filter(d => Um(d.Nb).every(e => d.Nb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Nb.vb() > e.Nb.vb() ? d : e, c[0])
    }

    function PB(a, b) {
        b = Ct(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Sm(a.A, b)) return a.A.get(b);
        var c = po(b);
        c = OB(a, c);
        a.A.set(b, c);
        return c
    }

    function QB(a, b) {
        return V(sq) ? PB(a, b) ? .de ? ? Number.MAX_VALUE : PB(a, b) ? .de || Number.MAX_VALUE
    }
    var RB = class {
        constructor(a) {
            this.j = a;
            this.A = new Wm;
            this.J = (A(a, zp, 2) ? .j() || []).map(b => {
                const c = po(E(b, 1)),
                    d = Ed(b, 2);
                return {
                    Nb: c,
                    de: d,
                    Ma: E(b, 1)
                }
            });
            this.l = []
        }
        I() {
            const a = P(KB);
            var b = this.D();
            a.C = b;
            b = this.C();
            a.J = b;
            b = this.B();
            null != b && (a.B = b);
            b = !!this.j.B() ? .j() ? .j();
            a.I = b;
            b = new Wm;
            for (const c of A(this.j, zp, 2) ? .j() ? ? []) b.set(E(c, 1), Ed(c, 2));
            a.l = b
        }
        F() {
            return [...this.l]
        }
        D() {
            return [...this.j.j()]
        }
        C() {
            return [...qd(this.j, 4, Vc)]
        }
        B() {
            return A(this.j, Dp, 5) ? .j() ? ? null
        }
        G(a) {
            const b = PB(this, a);
            null != b ? .Ma && HB(P(KB),
                a, b.Ma)
        }
        K(a) {
            const b = W(Dq) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new $n(a)).filter(d => {
                d = PB(this, d) ? .Ma || "";
                return "" != d && !(d === hB || d === iB)
            });
            return b <= c.j.length / a.length
        }
    };

    function SB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => QB(a.j, c) - QB(a.j, d))
    }

    function TB(a, b) {
        var c = b.aa.j,
            d = Math,
            e = d.min;
        const f = b.Y(),
            g = b.V.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? NB(f.parentElement) : NB(f));
        d = a.A;
        0 > d.j && (d.j = R(d.l).scrollHeight || 0);
        d = d.j - b.aa.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Y();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function UB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => TB(a, c) - TB(a, d))
    }

    function VB(a, b) {
        return b.sort((c, d) => {
            const e = c.V.G,
                f = d.V.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? TB(a, c) - TB(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class WB {
        constructor(a, b = 0, c = null) {
            this.A = new MB(a);
            this.l = new LB(b);
            this.j = c && new RB(c)
        }
    };

    function XB(a, b, c = 0) {
        var d = a.l;
        for (var e of b.B) d = Zn(d, e.ja(a.A), YB(e.ka(), c));
        e = d = d.apply(cv(a.A));
        for (const f of b.l) e = Zn(e, f.ja(a.A), ZB(f.ka(), c));
        switch (b.A) {
            case 1:
                e = UB(a.j, e);
                break;
            case 2:
                e = VB(a.j, e);
                break;
            case 3:
                const f = P(KB);
                e = SB(a.j, e);
                d.forEach(g => {
                    EB(f, g);
                    a.j.j ? .G(g)
                });
                e.forEach(g => FB(f, g))
        }
        b.C && (e = ao(e, Ig(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        1 === b.j ? .length && kB(a.B, b.j[0], {
            Ie: d.j.length,
            dg: e.j.length
        });
        return e.j.slice(0)
    }
    class $B {
        constructor(a, b, c = 0, d = null) {
            this.l = new $n(a);
            this.j = new WB(b, c, d);
            this.A = b;
            this.B = new lB
        }
        C() {
            this.l.forEach(a => {
                a.l && $r(a.l);
                a.l = null
            })
        }
    }
    const YB = (a, b) => c => tt(c, b, a),
        ZB = (a, b) => c => tt(c.V, b, a);

    function aC(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = bC(cC(c), a);
                    break a;
                case 3:
                    a = bC(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = bC(e ? 1 == e.nodeType ? e : cC(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !dC(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !aq(b) && 0 >= b.offsetWidth);
        return d
    }

    function bC(a, b) {
        if (!a) return !1;
        a = mh(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function cC(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function dC(a) {
        return !!a.nextSibling || !!a.parentNode && dC(a.parentNode)
    };
    var eC = !Sb && !qb();

    function fC(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (eC && a.dataset) {
            if (sb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var gC = (a, b, c) => {
            if (!b) return null;
            const d = Ug(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = R(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        hC = a => {
            const b = a.document.body;
            var c = gC(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (let l = 0; l < k.children.length; l++) {
                            const m = k.children[l];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? gC(a, c.parentNode || b, c) : null
        },
        jC = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, dh() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), iC(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        iC = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == fC(a[b])) return !0;
            return !1
        };

    function kC(a) {
        const b = Hm(a, !0),
            c = R(a).scrollWidth,
            d = R(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Mm(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            w = 0,
            F = Infinity,
            D = Infinity,
            B = null;
        var I = Bu({
            Xa: !1
        }, a);
        for (var K of I) {
            I = K.getBoundingClientRect();
            const ia = b - (I.bottom + f);
            var H = void 0,
                G = void 0;
            if (K.className && ib(K.className, "adsbygoogle-ablated-ad-slot")) {
                H = K.getAttribute("google_element_uid");
                G = a.google_sv_map;
                if (!H || !G || !G[H]) continue;
                H = (G = Zi(G[H])) ? G.height : 0;
                G = G ? G.width : 0
            } else if (H = I.bottom - I.top, G = I.right - I.left, 1 >= H || 1 >= G) continue;
            g.push(H);
            k.push(G);
            l.push(H * G);
            K.className && ib(K.className, "google-auto-placed") ? (w += 1, K.className && ib(K.className, "pedestal_container") && (B = H)) : (F = Math.min(F, ia), n.push(I), r += 1, h.push(H), m.push(H * G));
            D = Math.min(D, ia);
            q.push(I)
        }
        F = Infinity === F ? null : F;
        D = Infinity === D ? null : D;
        f = lC(n);
        q = lC(q);
        h = mC(b, h);
        n = mC(b, g);
        m = mC(b * c, m);
        K = mC(b * c, l);
        return new nC(a, {
            Ye: e,
            Nc: b,
            Gf: c,
            Ff: d,
            wf: r,
            He: w,
            Ke: oC(g),
            Le: oC(k),
            Je: oC(l),
            Af: f,
            zf: q,
            yf: F,
            xf: D,
            zc: h,
            yc: n,
            De: m,
            Ce: K,
            Hf: B
        })
    }

    function pC(a, b, c, d) {
        const e = dh() && !(900 <= R(a.l).clientWidth);
        d = zb(d, f => Db(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Ye,
            pg_h: qC(a.j.Nc),
            pg_w: qC(a.j.Gf),
            pg_hs: qC(a.j.Ff),
            c: qC(a.j.wf),
            aa_c: qC(a.j.He),
            av_h: qC(a.j.Ke),
            av_w: qC(a.j.Le),
            av_a: qC(a.j.Je),
            s: qC(a.j.Af),
            all_s: qC(a.j.zf),
            b: qC(a.j.yf),
            all_b: qC(a.j.xf),
            d: qC(a.j.zc),
            all_d: qC(a.j.yc),
            ard: qC(a.j.De),
            all_ard: qC(a.j.Ce),
            pd_h: qC(a.j.Hf),
            dt: e ? "m" : "d"
        }
    }
    class nC {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function oC(a) {
        return Cg.apply(null, zb(a, b => 0 < b)) || null
    }

    function mC(a, b) {
        return 0 >= a ? null : Bg.apply(null, b) / a
    }

    function lC(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function qC(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function rC(a, b) {
        b = (R(b).clientHeight || 0) - Mm(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Ju(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function sC(a) {
        const b = {};
        var c = Du({
            Xa: !1,
            Qb: !1,
            Rb: !1,
            Sb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Ju);
        b.Yc = c.length;
        c = Eu({
            Rb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ju);
        b.xd = c.length;
        c = Eu({
            Sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ju);
        b.Ud = c.length;
        c = Eu({
            Qb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Ju);
        b.gd = c.length;
        c = (R(a).clientHeight || 0) - Mm(a);
        c = Du({
            Xa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Ju).filter(Ma(tC, null, c));
        b.Zc = c.length;
        a = kC(a);
        c = null != a.j.zc ? a.j.zc :
            null;
        null != c && (b.Qd = c);
        a = null != a.j.yc ? a.j.yc : null;
        null != a && (b.bd = a);
        return b
    }

    function zA(a, b, {
        Yb: c,
        tc: d,
        wc: e
    } = {}) {
        return Is(997, () => uC(a, b, {
            Yb: c,
            tc: d,
            wc: e
        }), a.j)
    }

    function AA(a, b, c, d) {
        var e = c.Ra ? c.Ra : a.D;
        const f = pu(e, b.j.length);
        e = a.A.cd ? e.j : void 0;
        const g = eB(fB(bB(dB(cB(aB(ZA($A(XA(YA(VA(c.types), a.U), c.Pc || []), a.N), c.Sf || [])), f.ac || void 0, e, b), c.minWidth, c.maxWidth)), f.eb || void 0));
        a.M && g.j.push(new JA(a.M));
        b = 1;
        a.A.Wc ? b = 2 : a.Ga() && (b = 3);
        gB(g, b);
        a.A.Rc && (g.B = !0);
        return Is(995, () => XB(a.l, g.build(), d), a.j)
    }

    function CA(a, b) {
        const c = hC(a.j);
        if (c) {
            const d = xo(a.J, b),
                e = xs(a.j.document, a.F, null, null, {}, d);
            e && (cs(e.Va, c, 2, 256), Is(996, () => vC(a, e, d), a.j))
        }
    }

    function wC(a) {
        return a.G ? a.G : a.G = a.j.google_ama_state
    }

    function uC(a, b, {
        Yb: c,
        tc: d,
        wc: e
    } = {}) {
        const f = b.V;
        if (f.C) return !1;
        var g = b.Y();
        if (!aC(a.j, f.j(), g, a.B)) return !1;
        c = null == c ? null : new yo(null, {
            google_max_responsive_height: c
        });
        g = zo(v(f.mc, 2) || 0);
        const h = Ao(f.G),
            k = xC(a, f),
            l = yC(a),
            m = xo(a.J, f.N ? f.N.j(b.aa) : null, c, d || null, g, h, k, l),
            n = b.fill(a.F, m);
        if (e && !zC(a, n, m) || !Is(996, () => vC(a, n, m), a.j)) return !1;
        rm(9, [f.G, f.Ya]);
        a.Ga() && GB(P(KB), b);
        return !0
    }

    function xC(a, b) {
        return ho(jo(At(b).map(Bo), () => {
            a.C.push(18)
        }))
    }

    function yC(a) {
        if (!a.Ga()) return null;
        var b = a.l.j.j ? .C();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .B() ? ? null;
        return Co({
            Ve: b,
            bf: a
        })
    }

    function zC(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.va;
        c = c && c.wb() || {};
        if (d !== d.top) var g = jh(d) ? 3 : 16;
        else if (488 > R(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = R(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = R(d).clientWidth; h; h = h.parentElement) {
                            const k = mh(h, d);
                            if (!k) continue;
                            const l = xh(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = mh(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = R(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.va;
            if (f = ts(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", rs(b, f, "0px"), b.style.width = R(a).clientWidth + "px", us(a, b, f), b.style.zIndex = 30;
            return !0
        }
        $r(b.Va);
        return !1
    }

    function vC(a, b, c) {
        if (!b) return !1;
        try {
            Bs(a.j, b.va, c)
        } catch (d) {
            return $r(b.Va), a.C.push(6), !1
        }
        return !0
    }
    class AC {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.F = b;
            this.j = c;
            this.D = d.Ra;
            this.U = d.sb || [];
            this.J = d.cf || null;
            this.N = d.Xe || [];
            this.M = d.uc || [];
            this.A = e;
            this.B = !1;
            this.K = [];
            this.C = [];
            this.I = this.G = void 0;
            this.ba = f
        }
        W() {
            return this.l
        }
        T() {
            return this.j
        }
        wa(a) {
            this.K.push(a)
        }
        Ga() {
            if (0 == (this.l.j.j ? .D().length ? ? 0)) return !1;
            if (0 == (W(Dq) || 0)) return !0;
            if (void 0 === this.I) {
                const a = gB(bB(aB(VA([0, 1, 2]))), 1).build(),
                    b = Is(995, () => XB(this.l, a), this.j);
                this.I = this.l.j.j ? .K(b) || !1
            }
            return this.I
        }
        Hc() {
            return !!this.A.he
        }
        Wb() {
            return !iC(this.j)
        }
    }
    const tC = (a, b) => b.top <= a;

    function BC(a, b, c, d, e, f = 0, g = 0) {
        this.Aa = a;
        this.kc = f;
        this.jc = g;
        this.errors = b;
        this.Pa = c;
        this.j = d;
        this.l = e
    };
    var CC = (a, {
        Wb: b = !1,
        Hc: c = !1,
        Wf: d = !1,
        Ga: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !V(qq);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !V(qq) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function DC(a, b, c) {
        a = CC(a, {
            Wb: b.Wb(),
            Hc: b.Hc(),
            Wf: !!b.A.Dc,
            Ga: b.Ga()
        });
        return new EC(a, b, c)
    }

    function FC(a, b) {
        const c = wA[b];
        return c ? Is(998, () => c(a.j), a.C) : (a.j.wa(12), !0)
    }

    function GC(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(FC(a, b))
            })
        })
    }

    function HC(a) {
        a.j.B = !0;
        return Promise.all(a.l.map(b => GC(a, b))).then(b => {
            b.includes(!1) && a.j.wa(5);
            a.l.splice(0, a.l.length)
        })
    }
    class EC {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = Eb(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const IC = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function JC(a) {
        return HC(a).then(() => {
            var b = a.j.l.l.filter(ot).j.length;
            var c = a.j.K.slice(0);
            var d = a.j;
            d = [...d.C, ...(d.l.j.j ? .F() || [])];
            b = new BC(b, c, d, a.j.l.l.j.length, a.j.l.B.j, a.j.l.l.filter(ot).filter(pt).j.length, a.j.l.l.filter(pt).j.length);
            return new IC(b)
        })
    };
    class KC {
        j() {
            return new yo([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class LC {
        j() {
            return new yo(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function MC(a) {
        return bq(a.j.document).map(b => {
            const c = new Jt(b, 3);
            b = new jt(Ds(a.j, b));
            return new nt(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class NC {
        constructor(a) {
            var b = new LC;
            this.j = a;
            this.l = b || null
        }
    };
    const OC = {
        Vc: "10px",
        vc: "10px"
    };

    function PC(a) {
        return Rm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new nt(new Jt(b, 1), new ht(OC), a.l, !1, 0, [], null, a.j, null))
    }
    class QC {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function RC(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function SC(a, b, c) {
        const d = RC(c.Ob, "gapsMeasurementWindow") || RC(c.ub, "gapsPerMeasurementWindow") || RC(c.zb, "maxGapsToReport");
        return null != d ? fo(d) : c.ed || -1 != c.ub || -1 != c.zb ? co(new TC(a, b, c)) : fo("ShouldHaveLimits")
    }

    function UC(a) {
        return wC(a.A) && wC(a.A).placed || []
    }

    function VC(a) {
        return UC(a).map(b => Pn(Nn(b.element, a.j)))
    }

    function WC(a) {
        return UC(a).map(b => b.index)
    }

    function XC(a, b) {
        const c = b.V;
        return !a.D && c.B && kd(c.B, 8) && 1 == v(c.B, 8) ? [] : c.C ? (c.U || []).map(d => Pn(Nn(d, a.j))) : [Pn(new On(b.aa.j, 0))]
    }

    function YC(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new On(c, f - c)), c = d)
        }
        return b
    }

    function ZC(a, b) {
        b = b.map(c => {
            var d = new iA;
            d = x(d, 1, c.j);
            c = c.getHeight();
            return x(d, 2, c)
        });
        return fA(eA(new hA, a), b)
    }

    function $C(a) {
        const b = C(a, iA, 2).map(c => `G${Hd(c,1)}~${c.getHeight()}`);
        return `W${Hd(a,1)}${b.join("")}`
    }

    function aD(a, b) {
        const c = [];
        let d = 0;
        for (const e of Um(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(ZC(e, f));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }

    function bD(a) {
        const b = C(a, hA, 5).map(c => $C(c));
        return `M${Hd(a,1)}H${Hd(a,2)}C${Hd(a,3)}B${Number(!!J(a,4))}${b.join("")}`
    }

    function cD(a) {
        var b = St(a.A.l.l.j.slice(0), a.j),
            c = VC(a),
            d = new Xm(WC(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = XC(a, b[e]);
                c.push(...f)
            }
        c.push(new On(0, 0));
        c.push(Pn(new On(R(a.j).scrollHeight, 0)));
        b = YC(c);
        c = new Wm;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.B), Sm(c, f) || c.set(f, []), c.get(f).push(e);
        b = aD(a, c);
        c = new dA;
        c = x(c, 1, a.l);
        c = x(c, 2, a.B);
        c = x(c, 3, a.C);
        a = x(c, 4, a.D);
        return Cd(a, 5, b)
    }

    function dD(a) {
        a = cD(a);
        return bD(a)
    }
    var TC = class {
        constructor(a, b, c) {
            this.G = -1 == c.Ob;
            this.B = c.Ob;
            this.I = -1 == c.ub;
            this.C = c.ub;
            this.F = -1 == c.zb;
            this.l = c.zb;
            this.D = c.Md;
            this.A = b;
            this.j = a
        }
    };
    const eD = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        fD = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var gD = (a, b) => {
        a = od(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const iD = (a, b) => {
            a = fD(eD(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = qh(a),
                d = hD(a);
            return b.find(e => {
                const f = ld(e, Op, 7) ? v(A(e, Op, 7), 1) : v(e, 1);
                e = ld(e, Op, 7) ? v(A(e, Op, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        hD = a => {
            const b = {};
            for (;;) {
                b[qh(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const jD = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var kD = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            bm("ama", b, .01)
        },
        lD = a => {
            const b = {};
            oh(jD, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var mD = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                kD(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            kD(a, {
                lserr: 1
            })
        }
    };

    function nD(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function oD(a, b) {
        a = nD(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function pD() {
        if (qD) return qD;
        const a = vi() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? qD = b : a.google_persistent_state_async = qD = new rD
    }

    function sD(a, b, c) {
        b = tD[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Z(a, b, c) {
        return sD(a, b, () => c)
    }

    function uD(a, b, c) {
        return a.S[tD[b] || "google_ps_" + b] = c
    }

    function vD(a, b) {
        return uD(a, b, Z(a, b, 0) + 1)
    }

    function wD() {
        var a = pD();
        return Z(a, 20, {})
    }

    function xD() {
        var a = pD();
        const b = Z(a, 31, !1);
        b || uD(a, 31, !0);
        return !b
    }

    function yD() {
        var a = pD();
        return Z(a, 26)
    }

    function zD() {
        var a = pD();
        return Z(a, 28, [])
    }

    function AD(a) {
        return !!Z(pD(), 30, a)
    }
    class rD {
        constructor() {
            this.S = {}
        }
    }
    var qD = null;
    const tD = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var BD = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt",
            aspe: "aspe",
            asro: "asro",
            ascet: "easct"
        },
        CD = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        DD = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        ED = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    async function FD(a, b, c) {
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function GD(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = Nh(a.win)
    }

    function HD(a) {
        var b = a.state.wpc;
        if (null === b || "" === b) {
            b = a.state;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = nD(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Xi() ? CD : DD;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = ED(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function ID(a, b) {
        var c = new tl,
            d = GD(a);
        c = x(c, 1, d).Na(HD(a));
        c = x(c, 3, a.state.sd);
        return x(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function JD(a, b, c) {
        if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await FD(a.win, () => !(!GD(a) || !HD(a)), 10);
            ul(a.na, rl(ID(a, d), Fk(Ek(new Hk, b), c)))
        }
    }

    function KD(a, b) {
        if (V(eq)) {
            if (a.j) {
                var c = a.na;
                a = ID(a);
                a = Bd(a, 5, sl, b);
                ul(c, a)
            }
        } else c = ID(a), b = Bd(c, 5, sl, b), a.j && !a.state.le.includes(2) && (a.state.le.push(2), ul(a.na, b))
    }
    var LD = class {
        constructor(a) {
            this.win = vi() || window;
            this.na = a ? ? new Dl(V(fq));
            if (V(gq)) this.state = sD(pD(), 33, () => {
                const b = W(hq);
                return {
                    sd: b,
                    ssp: 0 < b && nh() < 1 / b,
                    pc: null,
                    wpc: null,
                    le: [],
                    lgdp: []
                }
            });
            else {
                a = W(hq);
                const b = AD(0 < a && nh() < 1 / a);
                this.state = {
                    sd: a,
                    ssp: b,
                    pc: null,
                    wpc: null,
                    le: [],
                    lgdp: []
                }
            }
        }
        get j() {
            return this.state.ssp
        }
    };
    var ND = (a, b, c, d, e, f, g = null, h = null, k) => {
            MD(a, new et(a), b, c, d, e, f, g, new Rn(a), h, k)
        },
        MD = (a, b, c, d, e, f, g, h = null, k = null, l = null, m) => {
            if (c)
                if (d) {
                    var n = Gy(d, e, a.location);
                    try {
                        const q = new OD(a, b, c, d, e, n, f, g, h, k, l, m);
                        Is(990, () => PD(q), a)
                    } catch (q) {
                        qm() && rm(15, [q]), dt(b, Ss, at(nB(mB((new oB(0)).Na(c), d), n).wa(1), q)), KD(P(LD), uk(new Dk, Qj(1)))
                    }
                } else dt(b, Ss, (new oB(0)).Na(c).wa(8)), KD(P(LD), uk(new Dk, Qj(8)));
            else dt(b, Ss, (new oB(0)).wa(9)), KD(P(LD), uk(new Dk, Qj(9)))
        };

    function PD(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    Is(991, () => QD(a), a.l);
                    break;
                case 1:
                    Is(1073, () => {
                        uy(new xy(a.l, a.j, a.C))
                    }, a.l);
                    break;
                case 5:
                    Gw(new Hw(a.l, a.j));
                    break;
                case 2:
                    RD(a);
                    break;
                case 3:
                    SD(a);
                    break;
                case 4:
                    TD(a);
                    break;
                case 6:
                    a.runStorify()
            }
        })
    }

    function QD(a) {
        (a.j ? .j() ? .j() ? ? !1) && UD(a, "p", VD(a));
        if (Fp(a.j) && 1 === v(Fp(a.j), 1)) {
            var b = A(Fp(a.j), Qp, 6);
            b && 2 === v(b, 1) && (Cs(a.l), a.G = "b")
        }
        var c = a.B.Kf;
        b = mu(a.l, c);
        if (a.B.da && ld(a.B.da, Pp, 10)) {
            var d = pd(A(a.B.da, Pp, 10), 1);
            null !== d && void 0 !== d && (b = au(a.l, d, c))
        }
        ld(a.j, Sp, 26) && (b = qu(b, A(a.j, Sp, 26), a.l));
        c = a.B.da ? od(a.B.da, 6) : [];
        d = a.B.da ? C(a.B.da, ap, 5) : [];
        const e = a.B.da ? od(a.B.da, 2) : [],
            f = Is(993, () => {
                var g = a.j,
                    h = C(g, op, 1);
                const k = a.B.da && gD(a.B.da, 1) ? "text_image" : "text";
                var l = new KC;
                let m = mt(h, a.l, {
                    Ne: l,
                    rf: new kt(k)
                });
                h.length != m.length && a.J.push(13);
                m = m.concat(PC(new QC(a.l, l)));
                h = 0;
                l = V(yq);
                var n = !1;
                if (Fp(g) && 1 === v(Fp(g), 1)) {
                    var q = A(Fp(g), Qp, 6);
                    q && (h = v(q, 2) || 0, 1 === v(q, 1) && (n = !0))
                }
                q = A(g, wp, 24) ? .B() ? .j() ? .j() || !1;
                if (l || n || q) l = MC(new NC(a.l)), n = P(KB), m = m.concat(l), n.M = !0, n.F = l.length, "n" === a.G && (a.G = A(g, wp, 24) ? .j() ? .length ? "o" : "p");
                m = m.concat(bA(g, k, a.l));
                g = A(g, wp, 24);
                return new $B(m, a.l, h, g)
            }, a.l);
        a.A = new AC(f, a.C, a.l, {
            Ra: b,
            cf: a.U,
            sb: a.B.sb,
            Xe: c,
            uc: d
        }, WD(a), e);
        wC(a.A) ? .optimization ? .ablatingThisPageview &&
            !a.A.Ga() && (Cs(a.l), P(KB).D = !0, a.G = "f");
        a.I = DC(e, a.A, a.l);
        Is(992, () => JC(a.I), a.l).then(Is(994, () => a.Ea.bind(a), a.l), a.ua.bind(a))
    }

    function RD(a) {
        const b = A(a.j, qp, 18);
        b && Jz(new Kz(a.l, new aA(a.l, a.C), b, new Uw(a.l), C(a.j, op, 1)))
    }

    function SD(a) {
        const b = Cy(a.l.location, "google_audio_sense") ? Do() : A(a.j, Eo, 27);
        if (b) {
            const c = A(a.j, ip, 6) ? .j() || [];
            io(Sv(a.l, a.D, b, c, a.W, {
                google_ad_client: a.C
            }, A(a.j, fp, 22) ? .j() || null), d => Uv(d))
        }
    }

    function TD(a) {
        const b = A(a.j, sp, 29);
        b && XD(a.ba, {
            win: a.l,
            webPropertyCode: a.C,
            Fd: b,
            jd: A(a.j, ip, 6) ? .j() ? ? []
        })
    }

    function WD(a) {
        const b = V(zq);
        if (!a.j.j()) return {
            Rc: b,
            Wc: !1,
            vd: !1,
            re: !1,
            yd: !1,
            he: !1,
            If: 0,
            ae: 0,
            cd: YD(a),
            Dc: a.N
        };
        const c = a.j.j();
        return {
            Rc: b || J(c, 14, !1),
            Wc: J(c, 2, !1),
            vd: J(c, 3, !1),
            re: J(c, 4, !1),
            yd: J(c, 5, !1),
            he: J(c, 6, !1),
            If: Fd(pd(c, 8), 0),
            ae: v(c, 10),
            cd: YD(a),
            Dc: a.N
        }
    }

    function YD(a) {
        return a.B.da && ld(a.B.da, Pp, 10) ? .5 <= (pd(A(a.B.da, Pp, 10), 1) || 0) : !0
    }

    function ZD(a, b) {
        for (var c = $s($s(new oB(b.Aa), b.errors), a.J), d = b.Pa, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.jc;
        c.j.ppp = b.kc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.nb;
        c.j.eatfAbg = b.ob;
        c.j.reatf = b.Wa;
        c.j.a = a.I.B.slice(0).join(",");
        c = nB(mB(c, a.j), a.F).Na(a.C);
        if (d = b.qa) c.j.as_count = d.Yc, c.j.d_count = d.xd, c.j.ng_count = d.Ud, c.j.am_count = d.gd, c.j.atf_count = d.Zc, c.j.mdns = pB(d.Qd), c.j.alldns = pB(d.bd);
        c = c.G(b.gb);
        if (d = b.ef) {
            e = [];
            for (var h of Um(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.Ie, f.dg].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Nc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.Id;
        c.j.rr = a.G;
        void 0 !== b.exception && at(c, b.exception).wa(1);
        return c
    }

    function $D(a, b) {
        var c = ZD(a, b);
        dt(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.M ? Us : Ss : 0 < a.M ? Ts : Rs, c);
        if (A(a.j, wp, 24)) {
            a.A.l.j.j ? .I();
            b = wC(a.A);
            var d = P(KB);
            d.A = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.N = !!b ? .optimization ? .availableAbg;
            b = P(KB);
            c = new BB(c);
            b.C ? (c.l.sl = (b.C ? ? []).join("~"), c.l.daaos = (b.J ? ? []).join("~"), c.l.ab = rB(b.G), c.l.rr = rB(b.M), c.l.oab = rB(b.I), null != b.A && (c.l.sab = rB(b.A)), b.D && (c.l.fb = rB(b.D)), c.l.ls = rB(b.N), qB(c, b.l.vb()),
                null != b.F && (c.l.rp = rB(b.F)), null != b.B && (c.l.expl = rB(b.B)), JB(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            dt(a.D, Xs, c)
        }
    }

    function aE(a, b) {
        const c = P(LD);
        if (c.j) {
            var d = new Dk,
                e = b.Pa.filter(g => null !== g),
                f = a.J.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            yk(wk(Bk(Ak(zk(xk(rk(tk(vk(sk(d, a.I.B.slice(0).map(g => {
                var h = new Pj;
                return x(h, 1, g)
            })), e.map(g => {
                var h = new Sj;
                return x(h, 1, g)
            })), f.map(g => Qj(g))), A(a.j, Lp, 23) ? .j()), b.Aa).G(b.gb), b.Wa), b.nb), b.ob), a.F.map(g => g.toString())), Zj(Yj(Xj(Wj(Vj(Uj(Tj(new ak, b.qa ? .Yc), b.qa ? .xd), b.qa ? .Ud), b.qa ? .gd), b.qa ? .Zc), b.qa ? .Qd), b.qa ? .bd));
            A(a.j, wp, 24) && pk(d);
            KD(c, d)
        }
    }

    function bE(a) {
        return Fp(a.j) && 1 === v(Fp(a.j), 1) ? !(A(Fp(a.j), Qp, 6) && 1 <= (v(A(Fp(a.j), Qp, 6), 3) || 0)) : !1
    }

    function cE(a) {
        if (bE(a)) {
            a = a.A;
            var b = Eu({
                Rb: !0,
                Sb: !0
            }, a.j);
            a = 0 < rC(b, a.j)
        } else a = a.A.j, b = Du({
            Xa: !1,
            Qb: !1
        }, a), a = 0 < rC(b, a);
        return a
    }

    function dE(a, b) {
        try {
            V(pq) && a.A ? .W() ? .C()
        } catch (c) {
            dt(a.D, Zs, at(nB(mB((new oB(b)).Na(a.C), a.j), a.F).wa(14), c))
        }
    }

    function eE(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = VD(a);
            a.K.init(null == b ? void 0 : b, () => {
                UD(a, "s", b)
            });
            a.K.addListener(c => {
                UD(a, "d", VD(a), c);
                a.K.Ba();
                if (a.j ? .j() ? .B()) {
                    a.j ? .j() ? .D();
                    try {
                        a.F ? .includes(0) && (a.M++, QD(a), UD(a, "r", VD(a), c))
                    } catch (d) {
                        UD(a, "f", VD(a), c), dt(a.D, Us, at(nB(mB((new oB(0)).Na(a.C), a.j), a.F).wa(1), d))
                    }
                }
            })
        }
    }

    function fE(a, b, c) {
        {
            var d = wC(a.A),
                e = b.j;
            const f = e.j,
                g = e.jc;
            let h = e.Aa,
                k = e.kc,
                l = e.errors.slice(),
                m = e.Pa.slice(),
                n = b.exception;
            const q = nD(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.I.A && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Aa: h,
                jc: g,
                kc: k,
                gb: f,
                errors: e.errors.slice(),
                Pa: m,
                exception: n,
                Wa: c,
                nb: !!d.eatf,
                ob: !!d.eatfAbg,
                Id: q
            }) : (m.push(12), a.I.A && m.push(13), c = {
                Aa: h,
                jc: g,
                kc: k,
                gb: f,
                errors: l,
                Pa: m,
                exception: n,
                Wa: c,
                nb: !1,
                ob: !1,
                Id: q
            })
        }
        c.qa = sC(a.A.j);
        if (b = b.j.l) c.ef = b;
        c.Nc = R(a.l).scrollHeight;
        if (qm()) {
            d = a.A.l.l.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of Um(e)) d[g] = e.get(g);
                d = {
                    anchorElement: qt(f),
                    position: f.j(),
                    clearBoth: f.J,
                    locationType: f.Ya,
                    placed: f.C,
                    placementProto: f.B ? f.B.toJSON() : null,
                    articleStructure: f.D ? f.D.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            rm(14, [{
                placementIdentifiers: b
            }, a.A.F, c.qa])
        }
        return c
    }

    function gE(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.gb;
        c.numAutoAdsPlaced = b.Aa;
        c.hasAtfAd = b.Wa;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = SC(a.l, a.A, {
            Ob: -1,
            ub: -1,
            zb: -1,
            Md: !0,
            ed: !0
        }), null != a.j ? (c.placementPositionDiffs = dD(a.j.value), b = cD(a.j.value), a = new jA, a = Bd(a, 2, kA, b), c.placementPositionDiffsReport = Rd(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new jA, a = wd(a, 1, kA, b), c.placementPositionDiffsReport = Rd(a)))
    }

    function hE(a, b) {
        $D(a, {
            Aa: 0,
            gb: void 0,
            errors: [],
            Pa: [],
            exception: b,
            Wa: void 0,
            nb: void 0,
            ob: void 0,
            qa: void 0
        });
        aE(a, {
            Aa: 0,
            gb: void 0,
            errors: [],
            Pa: [],
            exception: b,
            Wa: void 0,
            nb: void 0,
            ob: void 0,
            qa: void 0
        })
    }

    function UD(a, b, c, d) {
        b = {
            r: b,
            pg_h: R(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        ct(a.D, Ws, b)
    }

    function VD(a) {
        let b = null;
        a.j.j() && null != Gd(a.j.j(), 19) && (b = Gd(a.j.j(), 19));
        return b
    }
    class OD {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.F = f;
            this.U = k || null;
            this.J = [];
            this.K = l;
            this.N = m;
            this.ba = g;
            this.Qa = h;
            this.M = 0;
            this.W = n ? n : {
                url: a.location.href,
                Db: void 0
            };
            this.G = "n"
        }
        runStorify() {
            const a = A(this.j, Ep, 30);
            if (a) {
                var b = A(this.j, ip, 6) ? .j() ? ? [];
                this.Qa.runStorify(this.l, Rd(a), this.C, b.map(c => Rd(c)))
            }
        }
        Ea(a) {
            try {
                dE(this, a.j.Aa);
                const b = cE(this) || bE(this) ? cE(this) : void 0;
                Vp({
                    Bc: b
                }, this.l);
                eE(this);
                const c = fE(this, a, cE(this));
                ld(this.j, Rp, 25) && y(A(this.j,
                    Rp, 25), 1) && gE(this, c);
                $D(this, c);
                aE(this, c);
                am(753, () => {
                    if (V(tq) && null != this.A) {
                        var d = SC(this.l, this.A, {
                                Ob: W(xq),
                                ub: W(wq),
                                zb: W(uq),
                                Md: !0,
                                ed: !1
                            }),
                            e = ze(c);
                        null != d.j ? (d = dD(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = ZD(this, e);
                        dt(this.D, Vs, e)
                    }
                })()
            } catch (b) {
                hE(this, b)
            }
        }
        ua(a) {
            dE(this, 0);
            hE(this, a)
        }
    };
    var iE = class extends L {
        constructor(a) {
            super(a)
        }
    };

    function jE(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? go(() => Pd(iE, c)) : co(null)
    };

    function kE(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = kE.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.fk, g = c.Xf || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Rd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ya(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Rd: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.vb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ya(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function lE(a, b = window) {
        if (y(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function mE(a) {
        return "null" !== a.origin
    }

    function nE(a, b, c) {
        b = y(b, 5) && mE(c) ? c.document.cookie : null;
        return null === b ? null : (new kE({
            cookie: b
        })).get(a) || ""
    };

    function oE(a, b) {
        return x(a, 5, b)
    }
    var pE = class extends L {
        constructor() {
            super()
        }
        j() {
            return y(this, 6)
        }
    };
    var sE = ({
        win: a,
        Ub: b,
        Kd: c = !1,
        Ld: d = !1
    }) => {
        if (!qE({
                win: a,
                Ub: b,
                Kd: c,
                Ld: d
            })) return rE(a, oE(new pE, !0));
        (b = Z(pD(), 24)) ? (b = oE(new pE, Rz(b)), a = rE(a, b)) : a = new eo(null, Error("tcunav"));
        return a
    };

    function qE({
        win: a,
        Ub: b,
        Kd: c,
        Ld: d
    }) {
        if (!(d = !d && Vz(new Zz(a)))) {
            if (c = !c) {
                if (b) {
                    a = jE(a);
                    if (null != a.j)
                        if ((a = a.j.value) && kd(a, 1)) b: switch (a = v(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else cm(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function rE(a, b) {
        return (a = lE(b, a)) ? co(a) : new eo(null, Error("unav"))
    };
    var tE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    class uE {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function XD(a, {
        win: b,
        webPropertyCode: c,
        Fd: d,
        jd: e
    }) {
        a = Mv(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Rd(d),
            serializedArticleStructures: e.map(g => Rd(g))
        }));
        Zl.za(927, a)
    }
    var vE = class {
        constructor(a) {
            this.j = a
        }
    };

    function wE({
        win: a,
        webPropertyCode: b,
        tb: c
    }) {
        if (Cy(a.location, "google_auto_gallery")) {
            var d = new sp;
            var e = new tp;
            e = x(e, 1, !0);
            d = Ad(d, 3, e);
            XD(new vE(c), {
                win: a,
                webPropertyCode: b,
                Fd: d,
                jd: []
            })
        }
    };
    var xE = "a".charCodeAt(),
        yE = ye(um),
        zE = ye(vm);

    function AE(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function BE(a) {
        return String.fromCharCode(xE + AE(a, 6)) + String.fromCharCode(xE + AE(a, 6))
    }

    function CE(a) {
        let b = AE(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!AE(a, 1),
                e = AE(a, 16);
            if (d)
                for (d = AE(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function DE(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (AE(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function EE(a) {
        const b = AE(a, 16);
        return !0 === !!AE(a, 1) ? (a = CE(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : DE(a, b)
    }
    class FE {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var HE = (a, b) => {
        try {
            var c = nc(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new FE(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = AE(d, 12);
            c.cmpVersion = AE(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = AE(d, 6);
            c.isServiceSpecific = !!AE(d, 1);
            c.useNonStandardStacks = !!AE(d, 1);
            c.specialFeatureOptins = GE(DE(d, 12, zE), zE);
            c.purpose = {
                consents: GE(DE(d, 24, yE), yE),
                legitimateInterests: GE(DE(d, 24, yE), yE)
            };
            c.purposeOneTreatment = !!AE(d, 1);
            c.publisherCC = BE(d);
            c.vendor = {
                consents: GE(EE(d), b),
                legitimateInterests: GE(EE(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const GE = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var IE = class {
        constructor() {
            this.j = {}
        }
    };
    var JE = class extends L {
            constructor() {
                super()
            }
        },
        KE = class extends L {
            constructor() {
                super()
            }
        };
    var LE = class extends L {
            constructor() {
                super()
            }
        },
        ME = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 25, 26];
    var NE = class {};
    var PE = class extends L {
            constructor(a) {
                super(a, -1, OE)
            }
        },
        QE = class extends L {
            constructor(a) {
                super(a)
            }
        },
        RE = class extends L {
            constructor(a) {
                super(a)
            }
        },
        OE = [7];
    var SE = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var TE = class extends IE {
            constructor() {
                super();
                var a = t.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        UE;

    function VE(a) {
        return (a = WE(a)) ? A(a, QE, 4) : null
    }

    function WE(a) {
        if (a = (new kE(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                XE(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? Pd(PE, b) : null
        } catch (c) {
            return XE(2), null
        }
    }

    function XE(a) {
        new NE;
        var b = new KE;
        a = x(b, 7, a);
        b = new JE;
        a = Ad(b, 1, a);
        b = new LE;
        Bd(b, 22, ME, a);
        UE || (UE = new TE);
        a = UE.j[SE.key];
        if ("proto" === SE.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };

    function YE(a) {
        a.__tcfapiPostMessageReady || ZE(new $E(a))
    }

    function ZE(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var $E = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function aF(a) {
        var b = V(Bq);
        a.__uspapi || a.frames.__uspapiLocator || (a = new bF(a), cF(a), b && dF(a))
    }

    function cF(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Oz(a.j, "__uspapiLocator"), Qa("__uspapi", (...b) => eF(a, ...b)))
    }

    function dF(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", Oz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Qa("__tcfapi", (...b) => fF(a, ...b)), YE(a.j))
    }

    function eF(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function fF(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(gF(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(gF(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function gF(a, b, c) {
        if (!a.A) return null;
        b = HE(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class bF {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = WE(this.l)) ? A(a, RE, 5) || null : null) ? v(a, 2) : null;
            this.A = (a = VE(this.l)) && null != v(a, 1) ? v(a, 1) : null;
            this.B = (a = VE(this.l)) && null != v(a, 2) ? v(a, 2) : null
        }
    };

    function hF(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function iF(a, b) {
        a = hF(a);
        b = hF(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var jF = Promise;
    class kF {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class lF {
        constructor(a) {
            this.data = a
        }
    };

    function mF(a, b) {
        nF(a, b);
        return new oF(a)
    }
    class oF {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            nF(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new jF(c => {
                this.l(a, c, b)
            })
        }
    }

    function nF(a, b) {
        b && (a.onmessage = c => {
            b(new lF(c.data, mF(c.ports[0])))
        })
    };
    var rF = ({
        destination: a,
        Fa: b,
        origin: c,
        Ta: d = "ZNWN1d",
        onMessage: e,
        Vd: f
    }) => pF({
        destination: a,
        kf: () => b.contentWindow,
        Ef: qF(c),
        Ta: d,
        onMessage: e,
        Vd: f
    });
    const pF = ({
            destination: a,
            kf: b,
            Ef: c,
            ik: d,
            Ta: e,
            onMessage: f,
            Vd: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new kF(new jF((k, l) => {
                const m = n => {
                    if (n.source && n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const q = c.join(", ");
                            l(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?q:`one of [${q}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (k(mF(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        qF = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var sF = class {
        constructor(a) {
            this.oc = a
        }
        runStorify(a, b, c, d) {
            const e = Mv(11, a, this.oc).then(f => {
                f.runStorify(a, b, c, d)
            });
            Zl.za(1021, e)
        }
    };

    function tF(a, b, c, d, e, f, g, h = null, k) {
        try {
            var l = a.localStorage
        } catch (w) {
            l = null
        }
        if (l) {
            if (V(rq)) var m = null;
            else try {
                m = l.getItem("google_ama_config")
            } catch (w) {
                m = null
            }
            try {
                var n = m ? Pd(Jp, m) : null
            } catch (w) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var q = Pd(Jp, d);
                break a
            } catch (w) {
                kD(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            q = null
        }
        if (d = q) {
            if (e) {
                q = new Kp;
                Ad(d, 3, q);
                m = d.j() && Gd(d.j(), 13) ? Gd(d.j(), 13) : 1;
                x(q, 1, Date.now() + 864E5 * m);
                q = gd(d);
                d.j() && (m = new Ip, n = d.j(), n = y(n, 23), m = x(m, 23, null == n ? void 0 : n), n = J(d.j(), 12, !1), m = x(m, 12, n), n = J(d.j(), 15, !1),
                    m = x(m, 15, n), Ad(q, 15, m));
                m = C(q, op, 1);
                for (n = 0; n < m.length; n++) x(m[n], 11, Qc);
                x(q, 22, void 0, !1);
                if (V(rq)) mD(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Rd(q))
                } catch (w) {
                    kD(a, {
                        lserr: 1
                    })
                }
            }
            e = iD(a, C(d, Np, 7));
            a: {
                if (e && (q = v(e, 3), m = A(d, Zo, 9), q && m)) {
                    b: {
                        m = C(m, Xo, 1);
                        for (r of m)
                            if (v(r, 1) == q) {
                                var r = A(r, Wo, 2) || null;
                                break b
                            }
                        r = null
                    }
                    if (r) break a
                }
                r = A(d, Wo, 8) || new Wo
            }
            r = {
                Kf: r
            };
            e && (r.da = e);
            e && gD(e, 3) && (r.sb = [1]);
            if (7 === c.google_pgb_reactive && (e = r.da, !e || !y(e, 8))) return !1;
            oD(a, 2) && (rm(5, [d.toJSON()]), c = lD(c),
                f = new vE(f), g = new sF(g), e = r.da, c.google_package = e && v(e, 4) || "", ND(a, b, d, r, f, g, new yo(["google-auto-placed"], c), h, {
                    url: a.location.href,
                    Db: k
                }));
            return !0
        }
        m && (kD(a, {
            cfg: 1,
            cl: 1
        }), mD(a));
        return !1
    };
    var vF = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!ug.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = uF(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = uF(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = uF(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = uF(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = uF(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = uF(a, b.google_color_line, c))
    };

    function uF(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function wF(a, b) {
        var c = Zl,
            d;
        var e;
        d = (e = (e = $h()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Wh(d.left, d.top, d.width, d.height) : null) ? new Dg(e.left, e.top) : (d = ti()) && Aa(d.rootBounds) ? new Dg(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Dg(0, 0),
                g = Sg(Ng(b));
            if (Qb(g, "parent")) {
                do {
                    if (g == a) var h = Gi(b);
                    else {
                        var k = Fi(b);
                        h = new Dg(k.left, k.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.ma(888, l), new Dg(-12245933, -12245933)
        }
    };
    var xF = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return J(this, 5)
        }
        B() {
            return J(this, 6)
        }
        D() {
            return J(this, 7)
        }
    };
    var zF = class extends L {
            constructor(a) {
                super(a, -1, yF)
            }
            j() {
                return qd(this, 1, Yc, !1)
            }
        },
        yF = [1];

    function AF(a) {
        return C(a, BF, 2)
    }

    function CF(a, b) {
        return Cd(a, 2, b)
    }
    var EF = class extends L {
            constructor(a) {
                super(a, -1, DF)
            }
        },
        FF = class extends L {
            constructor(a) {
                super(a)
            }
        },
        BF = class extends L {
            constructor(a) {
                super(a, -1, GF)
            }
        },
        DF = [2],
        GF = [2];
    var IF = class extends L {
            constructor(a) {
                super(a, -1, HF)
            }
        },
        HF = [19],
        JF = [13, 14];

    function KF(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var LF = class {
            constructor() {
                this.j = null;
                this.l = {
                    [Mj]: {},
                    [Nj]: {},
                    [Oj]: {}
                };
                const a = b => this.j ? qh(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[Nj] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        MF;
    let NF = void 0;

    function OF() {
        Wd(NF, Ud);
        return NF
    };

    function PF(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : ve(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };
    var QF = (a = t) => a.ggeac || (a.ggeac = {});

    function RF(a = document) {
        return !!a.featurePolicy ? .allowedFeatures().includes("browsing-topics")
    };
    class SF {
        constructor() {
            this.j = () => {}
        }
    };
    var UF = (a = QF()) => {
            Ol(P(Yl), a);
            TF(a);
            P(SF).j = Nl(Ml, a);
            P(Xr).l()
        },
        TF = a => {
            const b = P(Xr);
            b.A = (c, d) => Nl(Il, a, () => !1)(c, d, 1);
            b.B = (c, d) => Nl(Jl, a, () => 0)(c, d, 1);
            b.j = (c, d) => Nl(Kl, a, () => "")(c, d, 1);
            b.C = (c, d) => Nl(Ll, a, () => [])(c, d, 1);
            b.l = () => {
                Nl(Fl, a)(1)
            }
        };

    function VF(a) {
        var b = P(Yl).l(a);
        JD(P(LD), a, b)
    }
    var WF = a => {
        const b = P(Yl).j();
        a = nD(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function XF(a, b, c) {
        return c ? nE(b, c, a.j) : null
    }

    function YF(a, b, c, d) {
        if (d) {
            var e = {
                Rd: v(c, 2) - Date.now() / 1E3,
                path: v(c, 3),
                domain: v(c, 4),
                Xf: !1
            };
            a = a.j;
            y(d, 5) && mE(a) && (new kE(a.document)).set(b, v(c, 1), e)
        }
    }

    function ZF(a, b, c) {
        if (c && nE(b, c, a.j))
            for (const e of $F(a.j.location.hostname)) {
                var d = a.j;
                y(c, 5) && mE(d) && (new kE(d.document)).remove(b, "/", e)
            }
    }
    var aG = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function $F(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function bG(a, b, c) {
        return am(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = sg(rg(qg(pg(new tg, g), h), k), e);
                switch (d) {
                    case 1:
                        YF(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        V(Kq) && YF(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function cG(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (XF(a, "__gads", b)) var e = !0;
            else if (e = a.j, y(b, 5) && mE(e) && (new kE(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === nE("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                y(b, 5) && mE(f) && (new kE(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = bG(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function dG(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = XF(b, "__gads", a);
        e && (d.cookie = e);
        V(Kq) && ((e = XF(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = Ke(Ne($d(ae("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = cG(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            kh(c.document, f)
        }) : Promise.resolve()
    }
    var eG = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new aG(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : dG(a, d, b, c)
        } else Promise.resolve();
        a = XF(d, "__gads", a) || "";
        MF || (MF = new LF);
        b = MF;
        KF(b, a);
        a = b.l;
        P(SF).j(a);
        VF(20);
        VF(17)
    };

    function fG(a) {
        V(ir) && (a.easpi = V(ir), V(hr) && (a.easpa = !0), a.asntp = W(xr), a.asntpv = W(Br), a.asntpl = W(zr), a.asntpm = W(Ar), a.asntpc = W(yr), a.asna = W(tr), a.asnd = W(ur), a.asnp = W(vr), a.asns = W(wr), a.asmat = W(qr), a.asptt = W(Fr), a.aspe = !0, a.asro = V(Gr), V(Dr) && (a.ascet = !0))
    };

    function gG(a, b) {
        return Sy({
            L: a,
            Kc: 3E3,
            Lc: a.innerWidth > Em ? 650 : 0,
            na: oj,
            nd: b
        })
    };
    var hG = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Fm(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var iG = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Fm(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var jG = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        kG = (a, b, c) => {
            let d = 0;
            try {
                d |= Fm(a, 2500);
                if (V(Yq)) {
                    const g = R(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= Gm(a);
                var e;
                if (e = 0 < b) {
                    var f = tA(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function lG(a, b, c = null) {
        if (!V(ar)) return 32;
        let d = a != a.top ? 512 : 0;
        Ty(a.navigator ? .userAgent) && (d |= 1048576);
        const e = a.innerWidth;
        1200 > e && (d |= 65536);
        const f = a.innerHeight;
        650 > f && (d |= 2097152);
        c && 0 === d && (mG({
            L: a,
            Od: b,
            je: 1,
            position: 3 === c ? "left" : "right",
            R: e,
            X: f,
            Ka: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (d |= 16));
        return d
    }

    function nG(a) {
        if (0 !== lG(a, !0)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = mG({
                L: a,
                Od: !0,
                je: 1,
                position: e,
                R: c,
                X: d,
                Ka: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function oG(a, b) {
        return null !== bh(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function pG(a, b) {
        return bh(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function qG(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function rG(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function sG(a) {
        return `${a.position}-${rG(a.R)}x${rG(a.X)}-${rG(a.scrollY+a.hb)}Y`
    }

    function tG(a) {
        return `f-${sG({position:a.position,hb:a.hb,scrollY:0,R:a.R,X:a.X})}`
    }

    function uG(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function vG(a, b, c) {
        const d = Bm(c.L).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.X),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var k = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = tG({
                            position: "left",
                            hb: f,
                            R: c.R,
                            X: c.X
                        });
                        b.set(l, uG(b.get(l), h))
                    }
                    if (h < c.R && e > c.R - k) {
                        l = tG({
                            position: "right",
                            hb: f,
                            R: c.R,
                            X: c.X
                        });
                        const m = c.R - e;
                        b.set(l, uG(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function mG(a) {
        var b = Bm(a.L).sideRailAvailableSpace;
        if (!a.Od) {
            var c = {
                    L: a.L,
                    R: a.R,
                    X: a.X,
                    Ka: a.Ka
                },
                d = `f-${rG(c.R)}x${rG(c.X)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                Bm(c.L).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.L.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Ka]);
                for (var e of qG(c.L)) oG(e, d) || vG(e, b, c)
            }
        }
        c = [];
        d = .9 * a.X;
        var f = Mm(a.L),
            g = e = (a.X - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    w = {
                        L: a.L,
                        R: a.R,
                        X: a.X,
                        Ka: a.Ka
                    };
                const D =
                    tG({
                        position: q,
                        hb: n,
                        R: w.R,
                        X: w.X
                    }),
                    B = sG({
                        position: q,
                        hb: n,
                        scrollY: f,
                        R: w.R,
                        X: w.X
                    });
                if (r.has(B)) {
                    n = uG(r.get(D), r.get(B));
                    break a
                }
                const I = "left" === q ? 20 : w.R - 20;
                let K = I;q = .3 * w.R / 5 * ("left" === q ? 1 : -1);
                for (let H = 0; 6 > H; H++) {
                    const G = dz(w.L.document, Math.round(K), Math.round(n));
                    var F = oG(G, w.Ka);
                    const ia = pG(G, w.L);
                    if (!F && null !== ia) {
                        vG(ia, r, w);
                        r.delete(B);
                        break
                    }
                    F || (F = G.offsetHeight >= .25 * w.X, F = G.offsetWidth >= .9 * w.R && F);
                    if (F) r.set(B, Math.round(Math.abs(K - I) + 20));
                    else if (K !== I) K -= q, q /= 2;
                    else {
                        r.set(B, 0);
                        break
                    }
                    K += q
                }
                n =
                uG(r.get(D), r.get(B))
            }
            m.call(l, n);
            g += h
        }
        b = a.je;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    hk: e + h[k] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const wG = {
        [27]: 512,
        [26]: 128
    };
    var xG = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === gG(a, c);
                case 3:
                case 4:
                    return 0 === lG(a, !1, c);
                case 8:
                    return b = "on" === b.google_adtest || Cy(a.location, "google_ia_debug") ? -1 : 3600, 0 == (jG(a) | kG(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || Cy(a.location, "google_scr_debug")), !uA(a, b, d);
                case 30:
                    return 0 == jC(a);
                case 26:
                    return 0 == iG(a);
                case 27:
                    return 0 === hG(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        yG = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return gG(a, c);
                case 3:
                case 4:
                    return lG(a, !0, c);
                case 8:
                    return b = "on" === b.google_adtest || Cy(a.location, "google_ia_debug") ? -1 : 3600, jG(a) | kG(a, b, d);
                case 9:
                    return uA(a, !("on" === b.google_adtest || Cy(a.location, "google_scr_debug")), d);
                case 16:
                    return qs(b, a) ? 0 : 8388608;
                case 30:
                    return jC(a);
                case 26:
                    return iG(a);
                case 27:
                    return hG(a);
                default:
                    return 32
            }
        },
        zG = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!we(d)) return !1;
            a = jh(a);
            if (!a || !xG(a, b, d, c)) return !1;
            b = Bm(a);
            if (Km(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        BG = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && AG(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        CG = a => {
            if (!a.hash) return null;
            let b = null;
            oh(zy, c => {
                !b && Cy(a, c) && (b = Ay[c])
            });
            return b
        },
        EG = (a, b) => {
            const c = Bm(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && oh(By, d => {
                !c.debugCardRequested && "number" === typeof d && Fy(d, a.location) && (c.debugCardRequested = !0, DG(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        GG = (a, b, c) => {
            if (!b) return null;
            const d = Bm(b);
            let e = 0;
            oh(xe, f => {
                const g = wG[f];
                g && 0 === FG(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        HG = (a, b, c) => {
            const d = [];
            oh(xe, e => {
                if (V(ar) || 3 !== e && 4 !== e) {
                    var f = FG(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        IG = a => {
            const b = [],
                c = {};
            oh(a, (d, e) => {
                if ((e = zm[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        JG = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        FG = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Bm(b),
                g = Km(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            oh(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            h && CG(b.location) !== c && (e |= 128);
            return e | yG(b, a, c, d)
        },
        KG = (a, b) => {
            if (a) {
                var c = Bm(a),
                    d = {};
                oh(b, (e, f) => {
                    (f = zm[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                oh(xe, e => {
                    d[Am[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        LG = (a, b, c) => {
            b = Zl.sa(b, c);
            return Mv(1, window, Ke(a, P(Xr).j(lq.j, lq.defaultValue) ? {
                bust: P(Xr).j(lq.j, lq.defaultValue)
            } : {})).then(b)
        },
        DG = (a, b, c) => {
            c = Zl.sa(212, c);
            Mv(3, a, b).then(c)
        };
    const MG = a => {
        a.adsbygoogle || (a.adsbygoogle = [], kh(a.document, O `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`))
    };
    var NG = (a, b) => {
            M(a, "load", () => {
                MG(a);
                a.adsbygoogle.push(b)
            })
        },
        OG = a => {
            a = a.google_reactive_ad_format;
            return we(a) ? "" + a : null
        },
        AG = a => !!OG(a) || null != a.google_pgb_reactive,
        PG = a => {
            a = OG(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function QG(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function RG(a, b, c) {
        const d = b.L || b.pubWin,
            e = b.H;
        e.google_reactive_plat = HG(d, e, c);
        var f = IG(a);
        f && (e.google_reactive_plaf = f);
        (f = JG(a)) && (e.google_reactive_fba = f);
        (f = nG(d)) && (e.google_plas = f);
        SG(a, e);
        f = CG(b.pubWin.location);
        TG(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        fG(e);
        V(Gq) && (e.fsapi = !0);
        ui() || fs(b.pubWin.top);
        f = fm(b.pubWin, "rsrai", am(429, (g, h) => UG(b, d, e.google_ad_client, a, g, h, c)), am(430, (g, h) => Pm(b.pubWin, "431", oj, h)));
        b.A.push(f);
        Bm(d).wasReactiveTagRequestSent = !0;
        VG(b,
            a, c)
    }

    function VG(a, b, c) {
        const d = a.H,
            e = Aa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = fm(a.pubWin, "apcnf", am(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.ca.tb,
                m = a.ca.oc,
                n = a.ca.Db;
            return Kh(g.origin) ? tF(h, k, e, f.config, c, l, m, null, n) : !1
        }), am(353, (f, g) => Pm(a.pubWin, "353", oj, g)));
        a.A.push(b)
    }

    function UG(a, b, c, d, e, f, g) {
        if (!Kh(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!oD(b, 1)) return !0;
        f && rm(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = Bm(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const q = f[n],
                r = q.adFormat;
            l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = n;
                if (9 === r && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, WG(d, q));
                    const w = new vA;
                    if (pA(w, q)) {
                        m = w;
                        continue
                    }
                }
                h.push(q);
                k.push(r)
            }
        }
        h.length && (bm("rasra::pm", {
            rt: k.join(","),
            c
        }, .1), LG(a.ca.ee, 522, n => {
            XG(h, b, c, n, d, g)
        }));
        e && tF(b, c, d, e, g, a.ca.tb, a.ca.oc, m);
        return !0
    }

    function WG(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Aa(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function XG(a, b, c, d, e, f) {
        const g = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = d.configProcessorForAdFormat(l);
            l && n && m ? (k.pubVars = WG(e, k), delete k.google_reactive_sra_index, g.push(l), $l(466, () => n.verifyAndProcessConfig(b, k, f))) : bm("rasra::ivc", {
                af: l,
                ak: String(m),
                c
            }, .1)
        }
        bm("rasra::pr", {
            rt: g.join(","),
            c
        }, .1)
    }

    function SG(a, b) {
        const c = [];
        let d = !1;
        oh(zm, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function TG(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    Pb("script");
    var YG = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function ZG(a, b) {
        if (!qs(b, a)) return () => {};
        a = $G(b, a);
        if (!a) return () => {};
        const c = zD();
        b = ze(b);
        const d = {
            La: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Eb(c, d)
    }

    function $G(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id + (V(Iq) ? "_host" : ""));
        if (!a) return null;
        for (a = a.parentElement; a && !vs.test(a.className);) a = a.parentElement;
        return a
    }

    function aH(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = xh(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function bH(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function cH(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = zD();
            for (const d of a)
                if (d.La.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.La.offsetWidth, $l(467, () => {
                    var e = d.La,
                        f = d.H;
                    const g = aH(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = aH(e, f);
                    !h && g && 1 == e.childNodes.length ? (bH(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", MG(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (bH(g, !1), bH(h, !0)) : bm("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var dH = class extends zl {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = pD();
            if (!Z(b, 27, !1)) {
                uD(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => cH(this, a);
                M(a, "resize", c);
                Al(this, () => {
                    te(a, "resize", c)
                })
            }
        }
    };
    var eH = class {
        constructor(a, b, c) {
            this.L = a;
            this.La = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && t.clearInterval(this.j);
            var a = ts(this.L, this.La);
            a = us(this.L, this.La, a);
            const b = ps(this.La, this.L);
            null != b && 0 === b.x || t.clearInterval(this.j);
            a && (this.l++, bm("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: WF(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };
    var Kj = {
        Qj: 0,
        Nj: 1,
        Lj: 2,
        Mj: 3,
        Pj: 5,
        Oj: 7
    };
    var fH = class {
        constructor(a) {
            this.L = a.L;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.ha = a.ha;
            this.ca = a.ca;
            this.Za = a.Za;
            this.innerInsElement = a.innerInsElement;
            this.outerInsElement = V(nq) ? this.innerInsElement : a.outerInsElement;
            this.C = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.G = 0;
            this.A = [];
            this.rb = this.F = "";
            this.B = this.D = null
        }
    };

    function gH(a, b) {
        var c = oE(a, Rz(b));
        c = x(c, 2, b.tcString);
        c = x(c, 4, b.addtlConsent || "");
        x(c, 7, b.internalErrorState);
        c = !Tz(b);
        x(a, 9, c);
        null != b.gdprApplies && x(a, 3, b.gdprApplies)
    }

    function hH(a) {
        const b = new Zz(a.pubWin, -1, V(fr));
        if (!Vz(b)) return Promise.resolve(null);
        const c = pD(),
            d = Z(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 25, []);
            g.push(f);
            uD(c, 25, g)
        });
        d || null === d || (uD(c, 24, null), b.addEventListener(f => {
            if (Qz(f)) {
                uD(c, 24, f);
                gH(a.l, f);
                for (const g of Z(c, 25, [])) g.resolve(f);
                uD(c, 25, [])
            } else uD(c, 24, null)
        }));
        return e
    };

    function iH(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var kH = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => jH(d));
        return fm(a, "adpnt", (e, f) => {
            if (Lm(f, c.contentWindow)) {
                e = Om(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && bm("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function jH(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function lH(a, b, c) {
        try {
            if (!Kh(c.origin) || a.j && !Lm(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Qa[d]) && a.U.Bb(168, () => {
            e.call(a, b, c)
        })
    }
    class mH extends zl {
        constructor(a, b) {
            var c = Zl,
                d = oj;
            super();
            this.A = a;
            this.j = b;
            this.U = c;
            this.na = d;
            this.Qa = {};
            this.ze = this.U.sa(168, (e, f) => void lH(this, e, f));
            this.Me = this.U.sa(169, (e, f) => Pm(this.A, "ras::xsf", this.na, f));
            this.ba = [];
            this.ua(this.Qa);
            this.ba.push(em(this.A, "sth", this.ze, this.Me))
        }
        l() {
            for (const a of this.ba) a();
            this.ba.length = 0;
            super.l()
        }
    };
    class nH extends mH {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var oH = class extends nH {
        constructor(a, b) {
            super(a, b);
            this.B = () => {};
            this.j && M(this.j, "load", this.B)
        }
        l() {
            this.j && te(this.j, "load", this.B);
            super.l();
            this.j = null
        }
        ua(a) {
            a["adsense-labs"] = b => {
                if (b = Om(b).settings) try {
                    var c = new og(JSON.parse(b));
                    if (null != v(c, 1)) {
                        var d = this.A,
                            e = v(c, 1) || "";
                        if (V(dq) ? null != sE({
                                win: d,
                                Ub: OF()
                            }).j : 1) {
                            if (V(dq)) {
                                const g = sE({
                                    win: d,
                                    Ub: OF()
                                });
                                var f = null != g.j ? PF(g.j.value) : {}
                            } else f = PF(d.localStorage);
                            null !== c && (f[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (g) {}
                        }
                    }
                } catch (g) {}
            }
        }
    };

    function pH(a) {
        a.B = a.F;
        a.J.style.transition = "height 500ms";
        a.D.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        qH(a)
    }

    function rH(a, b) {
        a.j.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function qH(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.G.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.G.setAttribute("height", a.B);
        a.G.style.height = a.B + "px";
        a.D.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function sH(a, b) {
        b = vh(b.r_nh);
        a.F = null == b ? 0 : b;
        if (0 >= a.F) return "1";
        a.M = Gi(a.J).y;
        a.K = Mm(a.A);
        if (a.M + a.B < a.K) return "2";
        if (a.M > Hm(a.A) - a.A.innerHeight) return "3";
        b = a.K;
        a.j.setAttribute("height", a.F);
        a.j.style.height = a.F + "px";
        a.G.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.D.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.M, a.B);
        Ai(a.D, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        Ai(a.j, {
            clip: b
        });
        Ai(a.G, {
            clip: b
        });
        return "0"
    }

    function tH(a, b = {}) {
        a.W && (b.eid = a.W);
        b.qid = a.Eb;
        bm("eoscrl", b, tm(String(a.Fb)))
    }
    class uH extends nH {
        constructor(a, b) {
            super(a.L, b);
            this.G = a.innerInsElement;
            this.D = a.outerInsElement;
            this.J = this.D.parentElement && this.D.parentElement.classList.contains("adsbygoogle") ? this.D.parentElement : this.D;
            this.B = parseInt(this.D.style.height, 10);
            this.W = null;
            this.Gb = this.Xc = !1;
            this.Eb = "";
            this.Ea = this.K = this.F = 0;
            this.Ae = this.B / 5;
            this.M = Gi(this.J).y;
            this.Fb = null;
            this.ye = pe(am(651, () => {
                this.M = Gi(this.J).y;
                var c = this.K;
                this.K = Mm(this.A);
                this.B < this.F ? (c = this.K - c, 0 < c && (this.Ea += c, this.Ea >= this.Ae ?
                    (pH(this), rH(this, this.F)) : (this.B = Math.min(this.F, this.B + c), rH(this, c), qH(this)))) : te(this.A, "scroll", this.N)
            }), this);
            this.N = () => {
                var c = this.ye;
                ug.requestAnimationFrame ? ug.requestAnimationFrame(c) : c()
            }
        }
        ua(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Om(b);
                this.W = b.i_expid;
                this.Eb = b.qid;
                this.Fb = b.gen204_fraction;
                this.Xc || (this.Xc = !0, b = sH(this, b), "0" === b && M(this.A, "scroll", this.N, qe), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), tH(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Gb || (this.Gb = !0, pH(this), te(this.A, "scroll", this.N))
            }
        }
        l() {
            this.N && te(this.A, "scroll", this.N, qe);
            super.l()
        }
    };

    function vH(a) {
        const b = a.K.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class wH extends zl {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.D = b;
            this.K = c;
            this.F = 0;
            this.B = vH(this);
            this.J = oe(this.G, this);
            this.j = am(433, () => {
                var d = this.J;
                ug.requestAnimationFrame ? ug.requestAnimationFrame(d) : d()
            });
            M(this.A, "scroll", this.j, qe)
        }
        G() {
            const a = vH(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.D.contentWindow;
                c && (gm(c, "ig", b, "*", 2), 10 <= ++this.F && this.j && te(this.A, "scroll", this.j, qe))
            }
            this.B = a
        }
    };

    function xH(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function yH(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function zH(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function AH(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Oc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Ai(a, "transition", b.join(","))
    }
    var BH = me(function() {
        if (Sb) return !0;
        var a = Ug(document, "DIV"),
            b = Wb ? "-webkit" : Vb ? "-moz" : Sb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = tf("div", {
            style: c
        });
        xg(a, b);
        a = a.firstChild;
        b = a.style[Jg("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Bi(a, "transition")] || "")
    });

    function CH(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function DH(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function EH(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function FH(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(GH, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function HH(a) {
        var b = FH(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var IH = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function JH(a) {
        let b = a.W;
        a.J = function() {};
        KH(a, a.G, b);
        let c = a.G.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : mh(c, b)
            } catch (g) {
                EH(a.j, "c")
            }
            const f = LH(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.U = !0);
            if (d && !f && MH(e)) {
                DH(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && NH(a, e)) break;
            c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" ===
                c.parentNode.toString() ? c = c.parentNode.host : c = c.parentElement;
            if (!c) {
                if (b === a.Fb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !gh(b)) {
                        DH(a.j, "c");
                        break
                    }
                } catch (g) {
                    DH(a.j, "c");
                    break
                }
            }
        }
        a.I && a.B && OH(a);
        return a.j
    }

    function PH(a) {
        function b() {
            QH(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) Ai(h, m[n], "0px")
                };
                l(RH);
                l(SH)
            }
        }
        const c = a.G;
        c.style.overflow = a.Eb ? "visible" : "hidden";
        a.I && (a.K ? (AH(c, TH), AH(a.K, TH)) : AH(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.N && (c.style.opacity = a.N);
        const d = null != a.F && null != a.A && (a.ua || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.ua || a.l > a.D) ? a.l : null;
        if (a.M) {
            const l = a.M.length;
            for (let m = 0; m < l; m++) QH(a.M[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            k = a.U;
        a.I ? t.setTimeout(b, 1E3) : b()
    }

    function UH(a) {
        if (a.B && !a.Qa || null == a.A && null == a.l && null == a.N && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        JH(a);
        a.B = b;
        if (!b || null != a.ba && !FH(a.j, a.ba, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        PH(a);
        return JH(a)
    }

    function NH(a, b) {
        let c = !1;
        "none" == b.display && (DH(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || DH(a.j, "v");
        "hidden" == b.overflow && DH(a.j, "o");
        "absolute" == b.position ? (DH(a.j, "a"), c = !0) : "fixed" == b.position && (DH(a.j, "f"), c = !0);
        return c
    }

    function KH(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = VH(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && CH(a.j, 0, "o"), d & 4 && CH(a.j, 1, "o"));
        return !(d & 1)
    }

    function LH(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (F) {
            EH(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = vh(f),
            h = c.getAttribute("height"),
            k = vh(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = KH(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            w = xh(m) == a.F && xh(n) == a.D;
        m = w ? m : q;
        r = w ? n : r;
        q = xh(m);
        w = xh(r);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        w = null !== a.D && (null !== w && a.D >= w || null !== k && a.D >= k);
        k = !b && MH(d);
        w = b || w || k || !(f || m || d && (!WH(String(d.minWidth)) || !XH(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!WH(String(d.minHeight)) || !XH(String(d.maxHeight))));
        YH(a, 0, w, c, "width", f, a.F, a.A);
        ZH(a, 0, "d", w, e, d, "width", m, a.F, a.A);
        ZH(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        ZH(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        a.Gb ? (c = /^html|body$/i.test(c.nodeName), f = xh(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !WH(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !XH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (YH(a, 1, l, c, "height", h, a.D, a.l), ZH(a, 1, "d", l, e, d, "height", r, a.D, a.l), ZH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.D, a.l), ZH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function OH(a) {
        function b() {
            if (0 < c) {
                var l = mh(e, d) || {};
                const m = xh(l.width);
                l = xh(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.G,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        t.setTimeout(function() {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function VH(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = mh(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function YH(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = vh(f);
                null == f && (EH(a.j, "n"), CH(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else CH(a.j, b, "d")
        }
    }

    function ZH(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? WH(f) : XH(f)) || (f = xh(f), null == f ? DH(a.j, "p") : null != k && DH(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? WH(h) : XH(h)) return;
                h = xh(h);
                null == h && (EH(a.j, "p"), CH(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else CH(a.j, b, c)
        }
    }
    var dI = class {
        constructor(a, b, c, d, e, f, g) {
            this.Fb = a;
            this.M = c;
            this.G = b;
            this.W = (a = this.G.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new $H(this.G);
            this.B = g;
            this.Qa = aI(this.C, d.Uc, d.height, d.ie);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = bI(d.width);
            this.l = bI(d.height);
            this.N = this.B ? bI(d.opacity) : null;
            this.ba =
                d.check;
            this.I = "animate" == d.Uc && !cI(this.C, this.l, this.Ea) && BH();
            this.Eb = !!d.dd;
            this.j = new IH;
            cI(this.C, this.l, this.Ea) && DH(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && DH(this.j, "b");
            this.K = this.J = null;
            this.U = !1;
            this.ua = !!d.Rf;
            this.Gb = !!d.Tf;
            this.Ea = !!d.ie
        }
    };

    function cI(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, bI(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var $H = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && jh(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && xH(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function aI(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return cI(a, c, d)
        }
    }

    function MH(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function eI(a, b, c, d) {
        return UH(new dI(a, b, d, c, null, null, !0))
    }
    var fI = new IH("s", ""),
        GH = RegExp("[lonvafrbpEe]", "g");

    function XH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function WH(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function QH(a, b, c) {
        null !== b && null !== vh(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== vh(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var RH = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        SH = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let gI = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        hI = RH;
    for (let a = 0; a < hI.length; a++) gI += ", " + hI[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    hI = SH;
    for (let a = 0; a < hI.length; a++) gI += ", " + hI[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var TH = gI;

    function bI(a) {
        return "string" === typeof a ? vh(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function iI(a, b, c) {
        const d = {
            scrl: Mm(a.A || window),
            adk: a.F,
            adf: a.D,
            fmt: a.B
        };
        b && (d.str = cI(b, vh(c.r_nh), wh(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        oh(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function jI(a, b, c) {
        const d = tm(String(b.gen204_fraction));
        b = iI(a, c, b);
        b.url = a.A.document.URL;
        bm("resize", b, d)
    }
    var kI = class extends nH {
        constructor(a, b, c) {
            super(a, b);
            this.F = String(c.google_ad_unit_key || "");
            this.D = String(c.google_ad_dom_fingerprint || "");
            this.B = String(c.google_ad_format || "")
        }
        ua(a) {
            a["resize-me"] = (b, c) => {
                b = Om(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = vh(b.r_nw),
                        f = vh(b.r_nh),
                        g = vh(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = wh(b.r_ao),
                            m = wh(b.r_ifr),
                            n = wh(b.r_cab);
                        const r = window;
                        if (this.j && r)
                            if ("no_rsz" === h) b.err = "7", jI(this, b, null), f = !0;
                            else if (g = new $H(this.j), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (aI(g, h, f, n)) {
                                const w = this.j.ownerDocument.getElementById(this.j.id + "_host");
                                q = w || this.j;
                                d = eI(r, q, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    Uc: h,
                                    dd: l,
                                    Rf: m,
                                    ie: n
                                }, w ? [this.j] : null);
                                b.r_cui && wh(b.r_cui.toString()) && N(q, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = HH(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                jI(this, b, g);
                                f = !0
                            } else b.err = "1", jI(this, b, g), f = !1
                        } else b.err = "3", jI(this,
                            b, null), f = !1;
                        else b.err = "2", jI(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const lI = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const mI = /^blogger$/,
        nI = /^wordpress(.|\s|$)/i,
        oI = /^joomla!/i,
        pI = /^drupal/i,
        qI = /\/wp-content\//,
        rI = /\/wp-content\/plugins\/advanced-ads/,
        sI = /\/wp-content\/themes\/genesis/,
        tI = /\/wp-content\/plugins\/genesis/;

    function uI(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (rI.test(e)) return 5;
                if (tI.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", sI.test(e) || tI.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (mI.test(f)) return 1;
                if (nI.test(f)) return 2;
                if (oI.test(f)) return 3;
                if (pI.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", qI.test(d))) return 2;
        return 0
    };
    let vI = navigator;
    var wI = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        xI = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return wI(a.toLowerCase())
        };
    const yI = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        zI = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        AI = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var BI = () => {
        const a = new ks;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = Ch();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return js(a)
    };
    var CI = new Map([
        [".google.com", a => O `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => O `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => O `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => O `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => O `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => O `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => O `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => O `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => O `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => O `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => O `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => O `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => O `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => O `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => O `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => O `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => O `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => O `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => O `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => O `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => O `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => O `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => O `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => O `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => O `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => O `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => O `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => O `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => O `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => O `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => O `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => O `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => O `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => O `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => O `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => O `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => O `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => O `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => O `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => O `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => O `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => O `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => O `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => O `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => O `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => O `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => O `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => O `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => O `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => O `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => O `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => O `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => O `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => O `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => O `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => O `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => O `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => O `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => O `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => O `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => O `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => O `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => O `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => O `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => O `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => O `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => O `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => O `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => O `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => O `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => O `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => O `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => O `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => O `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => O `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => O `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => O `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => O `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => O `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => O `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => O `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => O `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => O `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => O `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => O `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => O `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => O `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => O `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => O `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => O `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => O `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => O `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => O `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => O `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => O `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => O `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => O `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => O `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => O `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => O `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => O `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => O `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => O `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => O `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => O `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => O `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => O `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => O `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => O `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => O `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => O `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => O `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => O `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => O `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => O `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => O `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => O `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => O `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => O `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => O `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => O `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => O `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => O `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => O `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => O `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => O `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => O `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => O `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => O `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => O `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => O `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => O `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => O `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => O `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => O `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => O `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => O `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => O `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.rw", a => O `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => O `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => O `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => O `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => O `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => O `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => O `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => O `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => O `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => O `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => O `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => O `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => O `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => O `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => O `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => O `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => O `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => O `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => O `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => O `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => O `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => O `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => O `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => O `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => O `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => O `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => O `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => O `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => O `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => O `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => O `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => O `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => O `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => O `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => O `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => O `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => O `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => O `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => O `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => O `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => O `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => O `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => O `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => O `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a,
        b
    ]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function DI(a, b, c) {
        const d = lh("LINK", a);
        try {
            if (d.rel = "preload", ib("preload", "stylesheet")) {
                d.href = Me(b).toString();
                const h = zg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                h && d.setAttribute("nonce", h)
            } else {
                if (b instanceof Je) var e = Me(b).toString();
                else {
                    if (b instanceof Te) var f = Ue(b);
                    else {
                        if (b instanceof Te) var g = b;
                        else b = "object" == typeof b && b.ra ? b.la() : String(b), We.test(b) || (b = "about:invalid#zClosurez"), g = new Te(b, Se);
                        f = Ue(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as =
            "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let EI = t;
    const GI = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        FI[3] >= Pa() && b.set("adsid", FI[1]);
        return xi(CI.get(a).js, b)
    };
    let FI, HI;
    const II = () => {
        EI = t;
        FI = EI.googleToken = EI.googleToken || {};
        const a = Pa();
        FI[1] && FI[3] > a && 0 < FI[2] || (FI[1] = "", FI[2] = -1, FI[3] = -1, FI[4] = "", FI[6] = "");
        HI = EI.googleIMState = EI.googleIMState || {};
        CI.has(HI[1]) || (HI[1] = ".google.com");
        Array.isArray(HI[5]) || (HI[5] = []);
        "boolean" !== typeof HI[6] && (HI[6] = !1);
        Array.isArray(HI[7]) || (HI[7] = []);
        "number" !== typeof HI[8] && (HI[8] = 0)
    };
    var JI = a => {
        II();
        CI.has(a) && (HI[1] = a)
    };
    const KI = {
        Ec: () => 0 < HI[8],
        Of: () => {
            HI[8]++
        },
        Pf: () => {
            0 < HI[8] && HI[8]--
        },
        Qf: () => {
            HI[8] = 0
        },
        gk: () => !1,
        Gd: () => HI[5],
        kd: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        fe: () => {
            if (!KI.Ec()) {
                var a = t.document,
                    b = e => {
                        e = GI(e);
                        a: {
                            try {
                                var f = zg("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        DI(a, e.toString(), f);
                        f = lh("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        Zf(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), KI.Of()
                        } catch (g) {}
                    },
                    c = HI[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function LI(a) {
        II();
        const b = EI.googleToken[5] || 0;
        a && (0 != b || FI[3] >= Pa() ? KI.kd(a) : (KI.Gd().push(a), KI.fe()));
        FI[3] >= Pa() && FI[2] >= Pa() || KI.fe()
    }
    var NI = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => MI(b, c));
        LI(a)
    };
    const MI = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        II();
        1 == b ? KI.Qf() : KI.Pf();
        var h = EI.googleToken = EI.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !KI.Ec() && (!(FI[3] >= Pa()) || "NT" == FI[1]);
        var l = !(FI[3] >= Pa()) && 0 != b;
        if (k || d || l) d = Pa(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && dj(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, II();
        if (k || !KI.Ec()) {
            b = KI.Gd();
            for (c = 0; c < b.length; c++) KI.kd(b[c]);
            b.length = 0
        }
    };
    const OI = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        PI = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function QI(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return OI.get(b.type) ? ? null
        } catch {}
        return PI.get(a.performance ? .navigation ? .type) ? ? null
    };
    var RI = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        SI = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function TI() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function UI(a = window) {
        return !a.PeriodicSyncManager
    }

    function VI(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = a ? .get(RI.issuerOrigin)) && e.push(d);
        c && (d = a ? .get(SI.issuerOrigin)) && e.push(d);
        return e
    }

    function WI(a) {
        return V(Tr) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function XI(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function YI(a, b) {
        a = V(Tr) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: V(Tr) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !V(Tr) && b && 0 < Object.keys(b).length && (a.additionalSigningData = mc(JSON.stringify(b)));
        return a
    }

    function ZI(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function $I() {
        const a = `${RI.issuerOrigin}${RI.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: RI.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        ZI(RI.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            ZI(RI.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? ZI(RI.issuerOrigin, 6, !0) : ZI(RI.issuerOrigin, 5)
        })
    }

    function aJ() {
        const a = `${RI.issuerOrigin}${RI.issuancePath}`;
        ZI(RI.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            ZI(RI.issuerOrigin, 10);
            return $I()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return ZI(RI.issuerOrigin, 10), $I();
            ZI(RI.issuerOrigin, 9)
        })
    }

    function bJ() {
        ZI(RI.issuerOrigin, 13);
        return document.hasTrustToken(RI.issuerOrigin).then(a => a ? $I() : aJ())
    }

    function cJ() {
        ZI(SI.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(SI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${SI.issuerOrigin}${SI.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            ZI(SI.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                ZI(SI.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) ZI(SI.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    ZI(SI.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(SI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${SI.issuerOrigin}${SI.getStatePath}`;
                ZI(SI.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [SI.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    ZI(SI.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Nh(window);
            return a.then(e => {
                const f = `${SI.issuerOrigin}${SI.issuancePath}`;
                return e && e.srqt && e.cs ? (ZI(SI.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    ZI(SI.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return ZI(SI.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    ZI(SI.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                ZI(SI.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        ZI(SI.issuerOrigin, e.state);
                        const f = W(Sr);
                        Math.random() <= f && gj({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function dJ(a) {
        if (document.hasTrustToken && !V(Qr) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === RI.issuerOrigin)) {
                    let d = b.get(RI.issuerOrigin);
                    d || (d = bJ(), b.set(RI.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === SI.issuerOrigin) && (a = b.get(SI.issuerOrigin), a || (a = cJ(), b.set(SI.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var eJ = class extends zl {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && TI() && this.j.push(RI);
            c && this.j.push(SI);
            if (document.hasTrustToken && !V(Qr)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function fJ(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const gJ = /[+, ]/;

    function hJ(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Sh(d);
        var h = ls(d, c.google_ad_width, c.google_ad_height);
        var k = ns(g).Ic;
        var l = d.top == d ? 0 : gh(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = os(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (q) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && gh(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = $h()) && d.referrer || "";
        e.google_referrer_url = d;
        ms(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in lI), 2 <= e.length && (d = d || e[e.length - 2] in lI), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = iJ(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && jJ.test(f) &&
            (g = "/pagead/lopri?");
        a = Pi(b, `https://${e}${g}` + (J(a.ha, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function kJ(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + Oi({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function lJ(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = Sg(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && gh(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function mJ(a, b) {
        b.eid = WF(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function nJ(a, b) {
        a = (a = jh(a.pubWin)) && a.document ? hs(a.document, a) : new Dg(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function oJ(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function pJ(a) {
        const b = sj();
        b && (a.debug_experiment_id = b);
        a.creatives = oJ(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = oJ(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function qJ(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.L,
            g = Sh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = $h(e)) && Aa(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = ns(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Ic || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.rb && (b.etu = a.rb);
        0 <= a.C && (b.eae = a.C);
        (c = GG(d, f, f ? lE(c, f) : null)) && (b.fc = c);
        if (!Yi(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new Mg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const Q = h.contentWindow.document;
                    Q.open();
                    Q.write(pf(Pf));
                    Q.close();
                    g += Q.documentMode
                } catch (Q) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, q, r, w, F, D;
        try {
            var B = e.screenX;
            k = e.screenY
        } catch (Q) {}
        try {
            l = e.outerWidth,
                m = e.outerHeight
        } catch (Q) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (Q) {}
        try {
            r = e.screenLeft, w = e.screenTop
        } catch (Q) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (Q) {}
        try {
            F = e.screen.availWidth, D = e.screen.availTop
        } catch (Q) {}
        b.brdim = [r, w, B, k, F, D, l, m, n, q].join();
        B = 0;
        void 0 === t.postMessage && (B |= 1);
        0 < B && (b.osd = B);
        b.vis = xH(e.document);
        B = a.innerInsElement;
        e = AG(d) ? fI : UH(new dI(e, B, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = HH(e);
        if (!AG(d) && (e = Zi(d), null != e)) {
            B = 0;
            a: {
                try {
                    {
                        var I =
                            d.google_async_iframe_id;
                        const Q = window.document;
                        if (I) var K = Q.getElementById(I + (V(Iq) ? "_host" : ""));
                        else {
                            var H = Q.getElementsByTagName("script"),
                                G = H[H.length - 1];
                            K = G && G.parentNode || null
                        }
                    }
                    if (I = K) {
                        K = [];
                        H = 0;
                        for (var ia = Date.now(); 100 >= ++H && 50 > Date.now() - ia && (I = lJ(I));) 1 === I.nodeType && K.push(I);
                        var Ja = K;
                        b: {
                            for (ia = 0; ia < Ja.length; ia++) {
                                c: {
                                    var sa = Ja[ia];
                                    try {
                                        if (sa.parentNode && 0 < sa.offsetWidth && 0 < sa.offsetHeight && sa.style && "none" !== sa.style.display && "hidden" !== sa.style.visibility && (!sa.style.opacity || 0 !== Number(sa.style.opacity))) {
                                            const Q =
                                                sa.getBoundingClientRect();
                                            var pa = 0 < Q.right && 0 < Q.bottom;
                                            break c
                                        }
                                    } catch (Q) {}
                                    pa = !1
                                }
                                if (!pa) {
                                    var Va = !1;
                                    break b
                                }
                            }
                            Va = !0
                        }
                        if (Va) {
                            b: {
                                const Q = Date.now();Va = /^html|body$/i;pa = /^fixed/i;
                                for (sa = 0; sa < Ja.length && 50 > Date.now() - Q; sa++) {
                                    const Nb = Ja[sa];
                                    if (!Va.test(Nb.tagName) && pa.test(Nb.style.position || Ei(Nb, "position"))) {
                                        var ca = Nb;
                                        break b
                                    }
                                }
                                ca = null
                            }
                            break a
                        }
                    }
                } catch {}
                ca = null
            }
            ca && ca.offsetWidth * ca.offsetHeight <= 4 * e.width * e.height && (B = 1);
            b.pfx = B
        }
        a: {
            if (.05 > Math.random() && f) try {
                const Q = f.document.getElementsByTagName("head")[0];
                var wa = Q ? uI(Q) : 0;
                break a
            } catch (Q) {}
            wa = 0
        }
        f = wa;
        0 !== f && (b.cms = f);
        d.google_lrv !== E(a.ha, 2) && (b.alvm = d.google_lrv || "none")
    }

    function rJ(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : hh(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function sJ(a, b) {
        const c = Z(b, 8, {});
        b = Z(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function tJ(a, b, c) {
        const d = a.H;
        var e = a.H;
        b.dt = sm;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (G) {}
            g = null
        }(e = (e = g) ? iH(e, t.Date.now() - sm, 1E6) : null) && (b.bdt = e);
        b.idt = iH(a.I, sm);
        e = a.H;
        b.shv = E(a.ha, 2);
        a.Za && (b.mjsv = a.Za);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = $h(a.pubWin)) b.is_amp = 1, b.amp_v = ai(e), (e = bi(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new aG(a.pubWin), (g = XF(e, "__gads", c)) && (b.cookie = g), V(Kq) && (g = XF(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), "1" === XF(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = pD();
        f = Z(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Z(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        sJ(d, e);
        g = Z(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = $h(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Sh(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Z(e, 7, g);
        V(Sq) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Z(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(gJ);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f =
                Z(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(gJ);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var q = l[n];
                    "" !== q && (f[k][q] ? m += "+" + q : f[k][q] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = Sh(window),
                w = r.google_prev_clients;
            w || (w = r.google_prev_clients = {});
            if (e in w) var F = 1;
            else w[e] = !0, F = 2
        } catch {
            F = 0
        }
        b.pv =
            F;
        w = a.pubWin.document;
        F = a.H;
        e = a.pubWin;
        r = w.domain;
        e = (y(c, 5) && mE(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = w.referrer;
        m = Ri();
        if ($h()) var D = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = F.google_analytics_domain_name;
            c = "undefined" == typeof f ? xI("auto", r) : xI(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (r = (vi() || window).gaGlobal) || (r = {}, (vi() || window).gaGlobal = r);
            w = !1;
            if (n) {
                var B = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? r.sid = B[3] : r.sid ||
                    (r.sid = g + "");
                r.vid = B[0] + "." + B[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    w = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = vI.appName;
                    q = vI.version;
                    var I = vI.language ? vI.language : vI.browserLanguage,
                        K = vI.platform,
                        H = vI.userAgent;
                    try {
                        B = vI.javaEnabled()
                    } catch (G) {
                        B = !1
                    }
                    B = [n, q, I, K, H, B ? 1 : 0].join("");
                    h ? B += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), B += h.screen.width + "x" + h.screen.height);
                    B = B + e + (k || "");
                    for (h = B.length; 0 < m;) B += m-- ^ h++;
                    r.vid = (l ^ wI(B) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, B = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, B = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = yI.exec(e[f]) || zI.exec(e[f]) || AI.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == B) {
                            D = h[2];
                            break b
                        }
                        k < g && (g = k, D = h[2])
                    }w && D && -1 != D.search(/^\d+\.\d+$/) ? (r.vid = D, r.from_cookie = !0) : D != r.vid && (r.cid = D)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            D = r
        }
        b.ga_vid = D.vid;
        b.ga_sid = D.sid;
        b.ga_hid = D.hid;
        b.ga_fc = D.from_cookie;
        b.ga_cid = D.cid;
        b.ga_wpids = F.google_analytics_uacct;
        rJ(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= YG[a] && (b.rplot = YG[a])
    }

    function uJ(a, b) {
        a = a.l;
        if (a ? .j() || yD()) b.npa = 1;
        if (a) {
            kd(a, 3) && (b.gdpr = y(a, 3) ? "1" : "0");
            var c = v(a, 1);
            c && (b.us_privacy = c);
            (c = v(a, 2)) && (b.gdpr_consent = c);
            (c = v(a, 4)) && (b.addtl_consent = c);
            (a = v(a, 7)) && (b.tcfe = a)
        }
    }

    function vJ(a, b) {
        const c = a.H;
        uJ(a, b);
        oh(BD, (d, e) => {
            b[d] = c[e]
        });
        AG(c) && (a = OG(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = yt(c), null != a.j && (a = ro(a.j.value), b.pi = a))
    }

    function wJ(a, b) {
        var c = ui() || fs(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = fs(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function xJ(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = fs(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = qh(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function yJ(a, b) {
        (a = wD()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function zJ(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function AJ(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = mc(a))
    }

    function BJ(a, b) {
        const c = V(UI(window) ? Pr : Or),
            d = V(Rr);
        (a = VI(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = mc(JSON.stringify(a)))
    }

    function CJ(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function DJ(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function EJ(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(Ta).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function FJ(a, b) {
        V(Wr) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function iJ(a, b) {
        const c = {};
        vJ(a, c);
        II();
        c.adsid = FI[1];
        II();
        c.pucrd = FI[6];
        AJ(a, c);
        BJ(a, c);
        tJ(a, c, b);
        Ui(c);
        c.u_sd = gs(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        $l(889, () => {
            if (null == a.L) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = wF(a.L, a.innerInsElement);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                is(a.innerInsElement) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        wJ(a, c);
        xJ(a, c);
        nJ(a, c);
        mJ(a, c);
        a.G && (c.oid = a.G);
        yJ(a, c);
        c.pvsid = Nh(a.pubWin,
            Zl);
        zJ(a, c);
        CJ(a, c);
        c.uas = fJ(a.pubWin);
        const d = QI(a.pubWin);
        d && (c.nvt = d);
        a.F && (c.scar = a.F);
        a.B && (c.topics = a.B instanceof Uint8Array ? kc(a.B, 3) : a.B);
        qJ(a, c, b);
        c.fu = a.j;
        c.bc = BI();
        II();
        c.jar = FI[4];
        J(a.ha, 9) && pJ(c);
        pm() && (c.atl = !0);
        DJ(a, c);
        EJ(a, c);
        FJ(a, c);
        null == P(Xr).j(Lq.j, Lq.defaultValue) || !1 !== a.H.google_video_play_muted && !0 !== V(Mq) || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format || (c.sdkv = P(Xr).j(Lq.j, Lq.defaultValue));
        return c
    }
    const jJ = /YtLoPri/;
    var GJ = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var HJ = class {
        constructor(a) {
            this.j = a
        }
        pa() {
            return this.j.now()
        }
    };
    const IJ = [255, 255, 255];

    function JJ(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function KJ(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = JJ(b.backgroundColor);
        var c = LJ(b);
        if (c) return c;
        a = (a = a.parentElement) ? KJ(a) : IJ;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function LJ(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var NJ = class {
        constructor() {
            var a = W(Hr),
                b = W(mr);
            this.B = a;
            this.A = b;
            this.l = new MJ;
            this.j = 0
        }
    };
    class MJ {
        constructor() {
            this.j = new Map;
            this.l = 0
        }
        get A() {
            return this.l
        }
    };

    function OJ(a) {
        N(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function PJ(a, b, c, d, e, f, g, h) {
        d = {
            wp: h.D,
            c: h.F,
            e: W(pr),
            m: d,
            q: e,
            v: Math.round(f - g)
        };
        pj(h.na, "adfil-clk", d, !0, 1);
        d = new hl;
        e = z(d, 4, e, "");
        a = x(e, 1, a);
        b = x(a, 2, b);
        c = x(b, 3, c);
        h = h.A;
        b = QJ(h, 4);
        c = Bd(b, 8, ql, c);
        return RJ(h, c)
    };
    const SJ = [{
        lc: "1907259590",
        cc: 480,
        Sa: 220
    }, {
        lc: "2837189651",
        cc: 400,
        Sa: 180
    }, {
        lc: "9211025045",
        cc: 360,
        Sa: 160
    }, {
        lc: "6584860439",
        cc: -Infinity,
        Sa: 150
    }];

    function TJ(a) {
        return SJ.find(b => b.cc <= a)
    };
    const UJ = new class {
        constructor() {
            this.j = []
        }
    };
    let VJ = !1;

    function WJ(a) {
        return XJ(a.j, 1065, a.win, () => {
            if (!a.l) {
                var b = new ll;
                b = z(b, 1, a.A, 0);
                var c = new ml;
                b = Bd(b, 2, ol, c);
                YJ(a.j.A, b)
            }
        }, 1E4)
    }
    class ZJ {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.A = c;
            this.l = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function $J(a, b, c, d) {
        const e = TJ(a.document.body.clientWidth),
            f = b.j ? aK(a, b, d, e) : bK(a, b, d, e);
        ln(f.isVisible(), !1, () => {
            VJ = !1;
            for (const k of UJ.j) k();
            UJ.j.length = 0
        });
        f.show({
            wd: !0
        });
        VJ = !0;
        const g = new ZJ(a, b, c),
            h = WJ(g);
        UJ.j.push(() => {
            var k = b.A;
            var l = new ll;
            l = z(l, 1, c, 0);
            var m = new nl;
            l = Bd(l, 3, ol, m);
            YJ(k, l);
            g.l = !0
        });
        cK.push(() => {
            f.isVisible().O && f.collapse();
            g.cancel(h)
        })
    }

    function aK(a, b, c, d) {
        b = dK(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        return iy(a, b, {
            Zd: .75,
            Ed: .95,
            zIndex: 100001,
            Cc: !0,
            Ac: "adpub-drawer-root"
        })
    }

    function bK(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                const g = d.Sa * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = dK(a, b, c, d, f, "600px", "24px", "24px", "start");
        return vx(a, c, {
            Dd: `${f}px`,
            Ad: eK(b),
            pd: E(b.B, 14),
            zIndex: 100001,
            Cc: !0,
            Ac: "adpub-drawer-root"
        })
    }

    function dK(a, b, c, d, e, f, g, h, k) {
        var l = b.B,
            m = !!b.l,
            n = E(l, 10),
            q = n.indexOf("TERM"),
            r = W(jr);
        e = Math.max(Math.floor((e - Math.floor(e / d.Sa) * d.Sa) / 2), 5);
        var w = b.J ? "on" : "",
            F = E(l, 3),
            D = `${W(pr)}`;
        const B = E(l, 7),
            I = E(l, 6),
            K = b.D,
            H = n.substring(0, q);
        n = n.substring(q + 4);
        d = d.lc;
        m = !m;
        q = !!J(l, 13);
        c = gw('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            kw(X(g)) + " " + kw(X(h)) + "; text-align: " + kw(X(k)) + ';">' + (m ? '<div style="max-width: ' + kw(X(f)) + '">' + fw(F) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + fw(I) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + kw(X(g)) + "; text-align: " + kw(X(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            fw(H) + "</span>" + fw(c) + '<span style="color:#80868b">' + fw(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + kw(X(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + ow(pw("pub-adfiliates-rockskipper")) + ", 'styleId': " + ow(pw(d)) + ", 'disableCarousel': true, 'query': " + ow(pw(c)) + ", 'hl': " + ow(pw(B)) + ", 'personalizedAds': 'false', 'fexp': " + ow(pw(D)) + ", 'adfiliateWp': " +
            ow(pw(K)) + ", 'adtest': " + ow(pw(w)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + ow(pw(r)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + ow(pw("ads")) + ", pageOptions, adBlock);\x3c/script>" + (q ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        l = tf("body", {
            dir: eK(b) ? "rtl" : "ltr",
            lang: E(l, 7),
            style: bf({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, bw(c));
        c = a.document.createElement("IFRAME");
        N(c, {
            border: "0",
            width: "100%"
        });
        fK(a, b, c);
        c.srcdoc = pf(l);
        return c
    }

    function fK(a, b, c) {
        function d(g) {
            const h = new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            });
            h.observe(g);
            const k = gK(b, a, () => {
                const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                l && (c.height = `${l}px`)
            });
            cK.push(() => {
                h.disconnect();
                a.clearInterval(k)
            })
        }

        function e() {
            if (!f) {
                const g = c.contentDocument ? .body || c.contentWindow ? .document ? .body;
                g && (f = !0, d(g))
            }
            return f
        }
        let f = !1;
        c.onload = () => void e();
        b.za(1066, FD(a, () => e(), 100))
    }
    const cK = [];

    function hK(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function iK(a) {
        a = JJ(a);
        var b = new Tk;
        b = z(b, 1, a[0], 0);
        b = z(b, 2, a[1], 0);
        b = z(b, 3, a[2], 0);
        return z(b, 4, a[3], 0)
    };
    class jK {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.sa(264, c => {
                this.j && (kK || (c = Date.now()), this.A(c), kK ? lK.call(t, this.l) : t.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, kK ? lK.call(t, this.l) : this.l(0))
        }
    }
    var lK = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        kK = !!lK && !/'iPhone'/.test(t.navigator.userAgent);

    function mK(a) {
        return a * a * a
    }

    function nK(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class oK {
        constructor(a, b, c) {
            this.l = a;
            this.F = b;
            this.J = 100;
            this.progress = 0;
            this.j = null;
            this.I = !1;
            this.A = [];
            this.B = null;
            this.C = new jK(Ma(this.K, this), c)
        }
        K(a) {
            if (this.I) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.J;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.F[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.G())
            }
        }
        G() {}
        D() {}
        play() {
            this.I = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.F = b;
            this.J = c;
            this.progress = 0
        }
    };
    var pK = class {
        constructor(a, b, c, d, e, f) {
            this.K = a;
            this.M = b;
            this.D = c;
            this.I = d;
            this.J = e;
            this.F = f
        }
        get j() {
            return this.K
        }
        get B() {
            return this.M
        }
        get A() {
            return this.D
        }
        get G() {
            return this.I
        }
        get l() {
            return this.J
        }
        get C() {
            return this.F
        }
    };

    function qK(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        OJ(c);
        N(c, b);
        c.className = "google-material-icons";
        return c
    };

    function rK(a, b, c) {
        return Sy({
            L: a,
            Kc: 3E3,
            Lc: a.innerWidth > Em ? 650 : 0,
            na: c,
            nd: b
        })
    }

    function sK(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function tK(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = uK(a, b);
        c.appendChild(d);
        vK(b, 1064, c, e => {
            const f = eK(b),
                g = (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
            wK(b, sK(a), 0, g, mK).play();
            const h = xK(b);
            h.appendChild(qK(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            vK(b, 1064, h, k => {
                const l =
                    (b.j ? f : !f) ? a.innerWidth : -a.innerWidth;
                wK(b, sK(a), l, 0, nK).play();
                a.document.body.removeChild(h);
                k.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function uK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = eK(b);
        b = b.j ? d : !d;
        N(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function yK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = eK(b);
        d = b.j ? d : !d;
        N(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : eK(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function xK(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = eK(a);
        a = a.j ? c : !c;
        N(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    }

    function zK(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && N(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function AK(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    }

    function BK(a, b, c) {
        var d = E(c.B, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c = c.A;
        d = new Jk;
        d = x(d, 1, a.A);
        a = z(d, 4, a.j, "");
        d = QJ(c, 7);
        a = Bd(d, 6, ql, a);
        return RJ(c, a)
    }

    function CK(a, b, c, d, e, f) {
        if (a.j !== e || a.A !== d || a.B !== f) {
            if (null !== a.l) {
                var g = a.l,
                    h = c.A,
                    k = new Ik;
                g = z(k, 1, g, 0);
                k = QJ(h, 8);
                g = Bd(k, 7, ql, g);
                RJ(h, g)
            }
            a.j = e;
            a.A = d;
            a.B = f;
            (d = sK(b)) ? a.l = BK(a, d, c): (Wy(b) ? b = null : (d = b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), N(b.document.body, {
                "padding-bottom": (d && d.length ? Number(d[0]) + 45 : 45) + "px"
            }), zK(b), d = document.createElement("div"), d.id = "google-anno-sa", d.dir = eK(c) ? "rtl" : "ltr", N(d, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": "1000"
            }), d.appendChild(tK(b, c)), d.appendChild(DK(a, b, c)), d.appendChild(EK(a, b, c)), c = BK(a, d, c), b.document.body.appendChild(d), b = c), a.l = b)
        }
    }

    function DK(a, b, c) {
        const d = document.createElement("SPAN");
        OJ(d);
        N(d, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var e = eK(c);
        c.j || N(d, {
            "justify-content": ""
        });
        d.appendChild(qK(b, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": e ? "8px" : "",
            "margin-right": e ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        e = document.createElement("SPAN");
        e.className = "google-anno-sa-qtx";
        N(e, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const f = c.pa(2);
        vK(c, 999, d, g => FK(a, b, c, g, f));
        d.appendChild(e);
        return d
    }

    function EK(a, b, c) {
        const d = document.createElement("DIV");
        d.id = "google-anno-ea";
        c.j || N(d, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const e = yK(b, c);
        d.appendChild(e);
        const f = c.pa(2);
        vK(c, 999, d, g => FK(a, b, c, g, f));
        return d
    }

    function FK(a, b, c, d, e) {
        e = PJ(a.A, null, a.l, a.B, a.j, c.pa(4), e, c);
        $J(b, c, e, a.j);
        d.preventDefault();
        return !1
    }
    var GK = class {
        constructor() {
            this.j = "";
            this.A = null;
            this.B = "";
            this.l = null
        }
    };

    function HK(a) {
        if (a.A >= a.l.length) {
            if (!V(Kr)) {
                a.j = !0;
                return
            }
            a.A = 0
        }
        if (VJ) UJ.j.push(() => void HK(a));
        else {
            var b = a.l[a.A++];
            a.j = !1;
            CK(a.C, a.win, a.B, null, b.j, b.l);
            XJ(a.B, 898, a.win, () => void HK(a), a.D)
        }
    }
    var IK = class {
        constructor(a, b, c, d) {
            this.D = a;
            this.win = b;
            this.B = c;
            this.C = d;
            this.l = [];
            this.j = !0;
            this.A = 0
        }
    };
    class JK {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const KK = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function LK(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || KK.test(a)
        }
    }

    function MK(a, b, c, d) {
        return LK(a.charAt(b - 1), d) && LK(a.charAt(c + 1), d)
    };
    var PK = class {
        constructor(a, b) {
            this.l = a;
            this.j = new NK(b);
            for (var c of this.l) {
                var d = E(c, 1);
                for (var e of C(c, FF, 2)) {
                    a = this.j;
                    b = E(e, 1);
                    var f = d,
                        g = a.B.has(f) ? a.B.get(f) : a.D++;
                    a.B.set(f, g);
                    a.A.set(g, f);
                    f = 0;
                    for (let h = 0; h < b.length; h++) {
                        const k = b.charCodeAt(h);
                        a.j[f].contains(k) || (a.j.push(new OK), a.j[a.size].D = f, a.j[a.size].G = k, a.j[f].A.set(k, a.size), a.size++);
                        f = a.j[f].A.get(k)
                    }
                    a.j[f].C = !0;
                    a.j[f].B = g;
                    a.j[f].F = a.l.length;
                    a.l.push(b.length)
                }
            }
            c = this.j;
            e = [];
            for (e.push(0); 0 < e.length;) {
                d = e.shift();
                a = c;
                b = d;
                g = a.j[b];
                if (0 === b) g.j = 0, g.l = 0;
                else if (0 === g.D) g.j = 0, g.l = g.C ? b : a.j[a.j[b].j].l;
                else {
                    g = a.j[a.j[b].D].j;
                    for (f = a.j[b].G;;) {
                        if (a.j[g].contains(f)) {
                            a.j[b].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[b].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[b].l = a.j[b].C ? b : a.j[a.j[b].j].l
                }
                for (const h of c.j[d].childNodes) e.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class NK {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.j = [new OK];
            this.l = [];
            this.B = new Map;
            this.A = new Map;
            this.D = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.A.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].F];
                    const g = f;
                    MK(a, e, g, this.C) && c.push(new QK(e, g, this.A.get(this.j[d].B)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class OK {
        constructor() {
            this.A = new Map;
            this.K = !1;
            this.W = this.J = this.I = this.U = this.M = this.N = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set D(a) {
            this.N = a
        }
        get D() {
            return this.N
        }
        set G(a) {
            this.M = a
        }
        get G() {
            return this.M
        }
        set C(a) {
            this.K = a
        }
        get C() {
            return this.K
        }
        set B(a) {
            this.J = a
        }
        get B() {
            return this.J
        }
        set j(a) {
            this.U = a
        }
        get j() {
            return this.U
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set F(a) {
            this.W = a
        }
        get F() {
            return this.W
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var QK = class {
            constructor(a, b, c) {
                this.C = a;
                this.B = b;
                this.D = c
            }
            get l() {
                return this.C
            }
            get A() {
                return this.B
            }
            get j() {
                return this.D
            }
            get length() {
                return this.B - this.C
            }
        },
        RK = class {
            constructor(a) {
                this.j = a;
                this.matches = []
            }
        };
    const SK = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function TK(a, b, c, d, e, f, g, h) {
        if (c.pa(5) >= c.I) return !1;
        for (let fe = 0; fe < b.childNodes.length; fe++) {
            const rc = b.childNodes[fe];
            if (rc.nodeType === Node.TEXT_NODE && "" !== rc.textContent) {
                a: {
                    var k = a,
                        l = c,
                        m = b,
                        n = rc.textContent,
                        q = d,
                        r = e,
                        w = f,
                        F = g,
                        D = h;
                    const sc = [];b: {
                        var B = n;
                        switch (l.C) {
                            case 1:
                                var I = B;
                                const Oa = Array(I.length);
                                let na = 0;
                                for (let vb = 0; vb < I.length; vb++) KK.test(I[vb]) || na++, Oa[vb] = na;
                                var K = Oa;
                                break b;
                            default:
                                var H = B;
                                const Fa = Array(H.length);
                                let Za = 0,
                                    Ga = 0;
                                for (; Ga < H.length;) {
                                    for (;
                                        /\s/.test(H[Ga]);) Fa[Ga] = Za,
                                        Ga++;
                                    let vb = !1;
                                    for (; Ga < H.length && !/\s/.test(H[Ga]);) vb = !0, Fa[Ga] = Za, Ga++;
                                    vb && (Za++, Fa[Ga - 1] = Za)
                                }
                                K = Fa
                        }
                    }
                    const bc = K;
                    if (n.includes("\u00bb")) var G = [];
                    else {
                        const Oa = r.match(n),
                            na = new Map;
                        for (const Fa of Oa) {
                            const Za = Fa.l;
                            if (na.has(Za)) {
                                const Ga = na.get(Za);
                                Fa.length > Ga.length && na.set(Za, Fa)
                            } else na.set(Za, Fa)
                        }
                        G = Array.from(na.values())
                    }
                    const ci = G,
                        di = !!l.l;
                    let Bf = -1;
                    for (const Oa of ci) {
                        const na = Oa.l,
                            Fa = Oa.A;
                        var ia;
                        if (!(ia = !MK(n, na, Fa, l.C))) {
                            var Ja = w,
                                sa = Oa.j,
                                pa = Ja.l;
                            const tc = Ja.j + bc[na] - W(or);
                            for (const La of pa.j.keys()) {
                                const cc =
                                    pa.j.get(La);
                                let wb = 0;
                                for (; wb < cc.length && cc[wb] < tc;) wb++;
                                pa.l -= wb;
                                0 < wb && pa.j.set(La, cc.slice(wb))
                            }
                            var Va = Ja,
                                ca = Va.l,
                                wa = sa;
                            ia = !((ca.j.has(wa) ? ca.j.get(wa).length : 0) < Va.B && Ja.l.A < Ja.A)
                        }
                        if (ia) continue;
                        var Q;
                        if (Q = !di) {
                            const tc = k.getComputedStyle(m),
                                La = tc.fontSize.match(/\d+/);
                            Q = !(La && 12 <= Number(La[0]) && 22 >= Number(La[0]) && Db(SK, tc.display))
                        }
                        if (Q) {
                            w.j += bc[bc.length - 1];
                            var Nb = [];
                            break a
                        }
                        D && V(Er) && !q.entries.length && CK(D, k, l, null, Oa.j, n.substring(na, Fa + 1));
                        const Za = Bf + 1;
                        Za < na && sc.push(k.document.createTextNode(n.substring(Za,
                            na)));
                        const Ga = n.substring(na, Fa + 1),
                            vb = hK(n, na, Fa + 1);
                        if (di) {
                            var ei = Ga,
                                Cf = vb,
                                fi = Oa.j,
                                gi = bc[na];
                            var Df = Zk(Yk(Xk(Wk(Uk(1), ei), Cf), fi), gi)
                        } else {
                            var hi = k,
                                ge = m,
                                ii = Ga,
                                he = vb,
                                ji = Oa.j,
                                Ef = bc[na];
                            const tc = ge.getBoundingClientRect();
                            var xb = Zk(Yk(Xk(Wk(Uk(2), ii), he), ji), Ef);
                            var ki = z(xb, 6, Math.round(tc.x), 0);
                            var Ff = z(ki, 7, Math.round(tc.y), 0);
                            const La = hi.getComputedStyle(ge);
                            var li = new al;
                            var Pl = z(li, 1, La.fontFamily, "");
                            var Ql = iK(La.color);
                            var Gf = Ad(Pl, 7, Ql);
                            var uc = iK(La.backgroundColor);
                            var Rl = Ad(Gf, 8, uc);
                            const cc =
                                La.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var ie = z(Rl, 4, cc ? Math.round(Number(cc[1])) : 0, 0);
                            const wb = Math.round(Number(La.fontWeight));
                            isNaN(wb) || 400 === wb || z(ie, 5, wb, 0);
                            "none" !== La.textDecorationLine && z(ie, 6, La.textDecorationLine, "");
                            var Sl = Ad(Ff, 8, ie);
                            const mi = [];
                            let ud = ge;
                            for (; ud;) {
                                var ni = mi,
                                    Tl = ni.push,
                                    Hf = ud,
                                    Ul = new cl;
                                const oi = z(Ul, 1, Hf.tagName, "");
                                "" !== Hf.className && td(oi, 2, Hf.className.split(" "), Xc);
                                Tl.call(ni, oi);
                                if ("BODY" === ud.tagName) break;
                                ud = ud.parentElement
                            }
                            var If = mi.reverse();
                            Df = Cd(Sl, 9, If)
                        }
                        const Vl =
                            UK(q, Df);
                        var pi = sc,
                            qi = pi.push,
                            je = k,
                            Jf = l,
                            Kf = Vl,
                            ri = Oa.j,
                            si = Ga;
                        var Wl = D ? VK(je, Jf, Kf, ri, si, F, D) : WK(je, Jf, Kf, ri, si);
                        qi.call(pi, Wl);
                        var ke = w.l,
                            Lf = Oa.j,
                            Xl = w.j + bc[na];
                        let Mf = [];
                        ke.j.has(Lf) && (Mf = ke.j.get(Lf));
                        Mf.push(Xl);
                        ke.l++;
                        ke.j.set(Lf, Mf);
                        Bf = Fa
                    }
                    const Nf = Bf + 1;0 !== Nf && Nf < n.length && sc.push(k.document.createTextNode(n.substring(Nf)));w.j += bc[bc.length - 1];Nb = sc
                }
                const Of = Nb;
                if (0 < Of.length && !V(Gr)) {
                    for (const sc of Of) b.insertBefore(sc, rc), XK(sc);
                    b.removeChild(rc);
                    fe += Of.length - 1
                }
            }
            else if (YK(rc, c) && !TK(a, rc,
                    c, d, e, f, g, h)) return !1
        }
        return !0
    }

    function XK(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = LJ(JJ(getComputedStyle(a.parentElement).color)),
                    c = LJ(JJ(getComputedStyle(a).color));
                var d = KJ(a);
                if (d = b && c && d ? iF(c, d) < Math.min(iF(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    N(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) XK(a.children[b])
        }
    }

    function YK(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip") || !a.offsetHeight) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.l;
            default:
                return !!b.l || !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }

    function VK(a, b, c, d, e, f, g) {
        const h = a.document.createElement("SPAN");
        h.appendChild(a.document.createTextNode(e));
        ZK(b, 898, k => {
            k.forEach(l => {
                l.isIntersecting && l.target.textContent && (V(Jr) ? (f.l.push(new JK(d, e)), f.j && HK(f)) : CK(g, a, b, c, d, e))
            })
        }).observe(h);
        return h
    }
    class $K {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function WK(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        aL(f);
        f.appendChild(a.document.createTextNode(e));
        const g = a.document.createElement("A");
        OJ(g);
        N(g, {
            "text-decoration": "none"
        });
        Sf(g);
        g.className = "google-anno";
        g.appendChild(qK(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        g.appendChild(a.document.createTextNode("\u00a0"));
        g.appendChild(f);
        const h = bL(b,
                c, g),
            k = b.pa(2);
        vK(b, 999, g, l => {
            try {
                const m = PJ(c, h.l, null, e, d, b.pa(4), k, b);
                $J(a, b, m, d);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return g
    }

    function bL(a, b, c) {
        const d = new $K;
        ZK(a, 1065, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.A;
                    var g = new kl;
                    f = z(g, 1, f, 0);
                    g = QJ(e, 5);
                    f = Bd(g, 4, ql, f);
                    e = RJ(e, f);
                    d.j = e
                } else if (e = d, e.j) {
                f = a.A;
                g = new jl;
                g = z(g, 1, e.j, 0);
                var h = QJ(f, 6);
                g = Bd(h, 5, ql, g);
                RJ(f, g);
                e.j = null
            }
        }).observe(c);
        return d
    }

    function aL(a) {
        OJ(a);
        N(a, {
            "text-decoration": "underline"
        });
        N(a, {
            "text-decoration-style": "dotted"
        });
        N(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };

    function UK(a, b) {
        a.B.add(E(b, 4));
        a.entries.push(gd(b));
        return a.entries.length - 1
    }

    function cL(a, b, c, d) {
        const e = new Pk;
        switch (a) {
            case "se":
                return b = new Ok, Bd(e, 1, Qk, b);
            case "sw":
                return b = new Ok, Bd(e, 2, Qk, b);
            case "si":
                return b = new Ok, Bd(e, 3, Qk, b);
            case "sl":
                return b = new Ok, Bd(e, 5, Qk, b);
            case "l":
                return b = new Ok, Bd(e, 6, Qk, b)
        }
        if (c && b) {
            if (b.l) return a = new Nk, b = z(a, 1, b.l, 0), Bd(e, 7, Qk, b);
            if (c.l && b.A && (!d || !b.B)) return b = new Ok, Bd(e, 8, Qk, b)
        }
        return null
    }
    var dL = class {
        constructor() {
            this.entries = [];
            this.B = new Set;
            this.j = 0;
            this.l = this.A = null
        }
    };
    var eL = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.A = c
        }
        get window() {
            return this.win
        }
        get j() {
            return this.l
        }
        get D() {
            return this.A
        }
    };
    var fL = class {
        constructor(a, b) {
            this.A = a;
            this.j = b
        }
        get l() {
            return this.A
        }
    };

    function YJ(a, b) {
        var c = QJ(a, 9);
        b = Bd(c, 9, ql, b);
        RJ(a, b)
    }

    function RJ(a, b) {
        for (const c of a.j) c(b);
        return Ed(b, 1)
    }

    function QJ(a, b) {
        var c = new pl;
        var d = a.C++;
        c = z(c, 1, d, 0);
        b = z(c, 2, Math.round(a.l.pa(b) - a.A), 0);
        return Ad(b, 10, a.B)
    }
    var gL = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.B = c;
            this.C = 1;
            this.j = [...d]
        }
    };

    function hL(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function iL(a) {
        return new Set(a.map(hL).filter(b => b.length))
    };
    var jL = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.B = c
        }
        get l() {
            return this.A
        }
        get C() {
            return this.B
        }
    };
    class kL extends oK {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.M = a;
            this.B = e || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            Ai(this.M, a)
        }
        G() {}
    };

    function XJ(a, b, c, d, e) {
        return c.setTimeout(lL(a, b, d), e)
    }

    function eK(a) {
        return 2 === sd(a.B, 12)
    }

    function gK(a, b, c) {
        return b.setInterval(lL(a, 1066, c), 1E3)
    }

    function vK(a, b, c, d) {
        c.addEventListener("click", lL(a, b, d))
    }

    function wK(a, b, c, d, e) {
        return new kL(b, c, d, a.G, e)
    }

    function ZK(a, b, c) {
        return new IntersectionObserver(lL(a, b, c), {
            threshold: .98
        })
    }

    function lL(a, b, c) {
        return a.G.sa(b, c, void 0, d => {
            d.e = `${W(pr)}`;
            d.c = `${a.F}`
        })
    }
    var nL = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m = !1) {
            this.D = a;
            this.j = b;
            this.B = c;
            this.F = d;
            this.I = e;
            this.l = f;
            this.G = g;
            this.A = h;
            this.na = k;
            this.K = l;
            this.J = m;
            this.C = Db(mL, E(c, 7)) ? 1 : 0
        }
        za(a, b) {
            this.G.za(a, b, c => {
                c.e = `${W(pr)}`;
                c.c = `${this.F}`
            })
        }
        pa(a) {
            return this.K.pa(a)
        }
    };
    const mL = ["ja", "zh_CN", "zh_TW"];

    function oL(a, b, c, d, e, f) {
        var g = Zl,
            h = oj;
        try {
            Pb(a.document)
        } catch (k) {
            return
        }
        f = (f = XF(new aG(a), "__gads", f)) ? (f = qh(f + "t2Z7mVic")) ? f % 20 : null : null;
        f || (f = sh() ? null : Math.floor(20 * nh()));
        null != f && pL(a, b, c, new fL(!1, f), g, d, h, e)
    }

    function qL(a, b, c, d, e, f, g, h) {
        V(hr) && b && !b.j && (a = $y(a)) && Ph(a, () => {
            pL(c.window, c.j, c.D, new fL(!0, d.j), e, f, g, h)
        })
    }

    function pL(a, b, c, d, e, f, g, h) {
        const k = b.j;
        if (k) {
            var l = h.pa(1),
                m = l + W(nr);
            if (!V(Gr) && 0 < AF(k).length) {
                var n = a.document;
                const $a = n.createElement("LINK"),
                    dc = O `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                Xf($a, dc, "stylesheet");
                n.head.appendChild($a)
            }
            var q = 488 > R(a).clientWidth;
            if (V(hr) || AK(a)) {
                var r = AF(b.j).length;
                var w = new jL(b.B, b.A, r)
            } else w = null;
            var F = new eL(a, b, c);
            if (V(hr) || AK(a)) {
                var D = w;
                if (AK(a)) var B = new pK(!0, !1, !1, d.l, 0, q);
                else {
                    var I = Sy({
                        L: a,
                        Kc: 3E3,
                        Lc: W(lr),
                        na: g,
                        Qe: !0
                    });
                    var K = rK(a, 2, g),
                        H = rK(a, 1, g);
                    B = new pK(0 < I || !D.j || 0 === D.C ? !1 : !D.l || 0 < H || q && 0 === K, 0 === K, 0 === H, d.l, I, q)
                }
            } else B = null;
            var G = B,
                ia = new il,
                Ja = W(pr);
            var sa = z(ia, 1, Ja, 0);
            var pa = z(sa, 2, d.j, 0);
            var Va = new gL(h, l, pa, f);
            qL(a, G, F, d, e, f, g, h);
            var ca = new dL; {
                var wa = new nL(c, q, k, d.j, m, G, e, Va, g, h, b.l);
                const $a = a.document.body;
                if ($a && rL($a)) {
                    var Q = V(Cr) ? $a.innerText || "" : $a.textContent || "";
                    b: switch (wa.C) {
                        case 1:
                            let dc = 0;
                            for (let Ha = Q.length - 1; 0 <= Ha; Ha--) KK.test(Q[Ha]) || dc++;
                            var Nb = dc;
                            break b;
                        default:
                            const za =
                                Q.trim();
                            Nb = "" === za ? 0 : za.split(/\s+/).length
                    }
                    ca.j = Nb;
                    var ei = hL(E(wa.B, 7)); {
                        const dc = a.document.documentElement,
                            za = hL(dc.lang) || hL(dc.getAttribute("xml:lang"));
                        if ("" !== za) var Cf = new Set([za]);
                        else {
                            var fi = a.location;
                            const Ha = fi.host.match(/^[a-z]{2}\./i),
                                Ia = Ha ? [Ha[0]] : [];
                            for (const oa of fi.pathname.split("/")) 2 === oa.length && Ia.push(oa);
                            var gi = iL(Ia);
                            if (gi.size) var Df = gi;
                            else {
                                const oa = a.navigator;
                                Df = iL(oa.languages ? .length ? oa.languages : [oa.language])
                            }
                            Cf = Df
                        }
                    }
                    ca.A = ei;
                    ca.l = new Set(Cf);
                    if (Nb < W(rr)) var hi =
                        "sw";
                    else {
                        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var ge = "si";
                        else {
                            if (Cf.has(ei)) {
                                if (wa.pa(5) >= wa.I) var ii = "l";
                                else {
                                    {
                                        const dc = wa.B;
                                        if (0 === AF(dc).length || wa.l && !wa.l.j) var he = !0;
                                        else {
                                            if (!wa.l) {
                                                var ji = a.document;
                                                const za = ji.createElement("style");
                                                za.textContent = mf(zi `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`);
                                                ji.head.appendChild(za)
                                            }
                                            var Ef = new PK(AF(dc), wa.C);
                                            c: {
                                                var xb = Ef.j;
                                                let za = 0;
                                                for (let Ha = 0; Ha < Q.length; Ha++) {
                                                    for (;;) {
                                                        const oa =
                                                            Q.charCodeAt(Ha);
                                                        if (xb.j[za].contains(oa)) {
                                                            za = xb.j[za].A.get(oa);
                                                            break
                                                        }
                                                        if (0 === za) break;
                                                        za = xb.j[za].j
                                                    }
                                                    let Ia = za;
                                                    for (;;) {
                                                        Ia = xb.j[Ia].l;
                                                        if (0 === Ia) break;
                                                        const oa = Ha + 1 - xb.l[xb.j[Ia].F],
                                                            vd = Ha;
                                                        if (MK(Q, oa, vd, xb.C)) {
                                                            var ki = new QK(oa, vd, xb.A.get(xb.j[Ia].B));
                                                            break c
                                                        }
                                                        Ia = xb.j[Ia].j
                                                    }
                                                }
                                                ki = void 0
                                            }
                                            if (ki) {
                                                var Ff = V(hr) || AK(a) ? new GK : null,
                                                    li = Ff && V(Jr) ? new IK(W(Lr), a, wa, Ff) : null;
                                                if (wa.l && V(Er) && V(Jr)) {
                                                    var Pl = wa.C;
                                                    const za = Ef.match(Q),
                                                        Ha = new Map;
                                                    for (const Ia of za) {
                                                        const oa = Ia.j;
                                                        if (Ha.has(oa)) Ha.get(oa).matches.push(Ia);
                                                        else {
                                                            const vd = new RK(oa);
                                                            vd.matches.push(Ia);
                                                            Ha.set(oa, vd)
                                                        }
                                                    }
                                                    var Ql = Array.from(Ha.values());
                                                    for (const Ia of Ql) {
                                                        let oa = null;
                                                        for (const vd of Ia.matches) {
                                                            c: {
                                                                var Gf = Q,
                                                                    uc = vd,
                                                                    Rl = ca;
                                                                if (!MK(Gf, uc.l, uc.A, Pl)) {
                                                                    var ie = null;
                                                                    break c
                                                                }
                                                                const iu = Gf.substring(uc.l, uc.A + 1);
                                                                var Sl = Rl,
                                                                    ni = iu,
                                                                    Tl = hK(Gf, uc.l, uc.A + 1),
                                                                    Hf = uc.j;
                                                                var Ul = Zk(Yk(Xk(Wk(Uk(1), ni), Tl), Hf), null);UK(Sl, Ul);ie = iu
                                                            }
                                                            const ju = ie;null != ju && (oa = ju)
                                                        }
                                                        if (null != oa) {
                                                            var If = li;
                                                            If.l.push(new JK(Ia.j, oa));
                                                            If.j && HK(If)
                                                        }
                                                    }
                                                    he = !0
                                                } else {
                                                    var pi = new NJ;
                                                    he = TK(a, a.document.body,
                                                        wa, ca, Ef, pi, li, Ff)
                                                }
                                            } else he = !0
                                        }
                                    }
                                    ii = he ? "a" : "p"
                                }
                                var qi = ii
                            } else qi = "sl";
                            ge = qi
                        }
                        hi = ge
                    }
                    var je = hi
                } else je = "se"
            }
            var Jf = h.pa(3) - l;
            if (!V(Gr) && ca.entries.length && !J(k, 13)) {
                var Kf = a.document;
                const $a = Kf.createElement("LINK");
                Xf($a, O `https://www.google.com/adsense/search/ads.js`, "prefetch");
                $a.as = "script";
                $a.fetchPriority = "low";
                Kf.head.appendChild($a)
            }
            var ri = je,
                si = w,
                Wl = d.j,
                ke = W(pr),
                Lf = a.location ? .hostname || "",
                Xl = Array.from(ca.l ? ? []).sort().join(","),
                fe = ca.A || "";
            let ku = 0;
            for (const $a of AF(k)) ku += C($a, FF, 2).length;
            const RL = {
                wp: c,
                c: Wl,
                e: ke,
                h: Lf,
                ld: Xl,
                lx: fe,
                m: ku,
                n: ca.entries.length,
                o: ri,
                p: AF(k).length,
                t: ca.B.size,
                w: ca.j,
                x: Math.round(Jf)
            };
            pj(g, "adfil-imp", { ...RL,
                ...(G ? {
                    sap: Number(G.j),
                    tap: Number(G.B),
                    bap: Number(G.A),
                    nsr: G.l,
                    im: Number(G.C),
                    mo: Number(G.G),
                    hesa: Number(si.j)
                } : {})
            }, !0, 1);
            var rc = b.C,
                Of = a.location.hostname,
                sc = b.D,
                bc = w,
                ci = je,
                di = new fl,
                Bf = new Kk;
            var Nf = z(Bf, 1, rc, "");
            var Oa = z(Nf, 2, Of, "");
            var na = Jd(Oa, 3, q);
            var Fa = x(na, 4, ca.j);
            var Za = Ad(di, 1, Fa);
            var Ga = new Mk,
                vb = Array.from(ca.l ? ? []).sort();
            var Vl = td(Ga, 1,
                vb, Xc);
            var Mf = z(Vl, 2, ca.A, "");
            var tc = z(Mf, 3, sc, "");
            var La = Ad(Za, 2, tc);
            var cc = z(La, 3, Math.round(Jf), 0);
            const lu = cL(ci, G, bc, q);
            if (lu) {
                var wb = new Sk;
                var mi = Dd(wb, 1, Pk, lu);
                Bd(cc, 5, gl, mi)
            } else {
                var ud = new el;
                var oi = Jd(ud, 1, "p" === ci);
                var SL = Cd(oi, 2, ca.entries);
                var TL = AF(k).length;
                var UL = z(SL, 3, TL, 0);
                Bd(cc, 4, gl, UL)
            }
            var VL = QJ(Va, 3);
            var WL = Bd(VL, 3, ql, cc);
            RJ(Va, WL)
        }
    }

    function rL(a) {
        try {
            Pb(new ResizeObserver(() => {})), Pb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };

    function sL(a, b, c, d, e) {
        if (!Z(pD(), 29, !1)) {
            uD(pD(), 29, !0);
            var f = a.performance;
            f ? .now && oL(a, c, d, [g => {
                var h = b.na;
                var k = ID(b);
                k = x(k, 3, 1);
                g = Bd(k, 6, sl, g);
                ul(h, g)
            }], new HJ(f), e)
        }
    };
    var uL = class {
        constructor(a, b, c, d, e, f) {
            this.C = b;
            this.B = c;
            this.A = d;
            this.D = e;
            this.l = f;
            this.j = V(sr) ? tL(a) : a
        }
    };

    function tL(a) {
        if (!a) return null;
        const b = new Set;
        for (const d of AF(a))
            for (const e of C(d, FF, 2)) b.add(E(e, 1));
        const c = [];
        b.forEach(d => {
            var e = c.push;
            var f = new BF;
            f = x(f, 1, d);
            var g = new FF;
            d = x(g, 1, d);
            d = Dd(f, 2, FF, d);
            return void e.call(c, d)
        });
        return CF(gd(a), c)
    };

    function vL(a) {
        Zl.ke(b => {
            b.shv = String(a);
            b.mjsv = "m202212050101";
            b.eid = WF(t)
        })
    }

    function wL(a) {
        vL(E(a, 2));
        a = J(a, 6);
        Wd(NF, Ij);
        NF = a
    };

    function xL({
        Te: a,
        Zf: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var yL = "undefined" === typeof sttc ? void 0 : sttc;

    function zL(a) {
        var b = Zl;
        try {
            return Wd(a, Hj), new IF(JSON.parse(a))
        } catch (c) {
            b.ma(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new IF
    };

    function AL(a) {
        if (a.j) return a.j;
        a.M && a.M(a.A) ? a.j = a.A : a.j = Eh(a.A, "__uspapiLocator");
        return a.j ? ? null
    }

    function BL(a) {
        a.B || (a.B = b => {
            try {
                var c = a.J ? a.J(b) : void 0;
                if (c) {
                    var d = c.ce,
                        e = a.F.get(d);
                    if (e) {
                        a.F.delete(d);
                        var f = a.D.get(c.ce);
                        a.D.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {}
        }, M(a.A, "message", a.B))
    }

    function CL(a, b) {
        if (AL(a))
            if (a.j === a.A) {
                var c = a.K.get("getDataWithCallback");
                c && c(a.j, b)
            } else if ((c = a.G.get("getDataWithCallback")) && c.Pd) {
            BL(a);
            var d = ++a.N;
            a.F.set(d, c.Df);
            a.D.set(d, c.vf(b));
            a.j.postMessage(c.Pd(b, d), "*")
        }
    }
    var EL = class extends zl {
        constructor(a, b) {
            var c = DL;
            super();
            this.M = b;
            this.J = c;
            this.K = new Map;
            this.N = 0;
            this.G = new Map;
            this.F = new Map;
            this.D = new Map;
            this.B = void 0;
            this.A = a
        }
        l() {
            delete this.j;
            this.K.clear();
            this.G.clear();
            this.F.clear();
            this.D.clear();
            this.B && (te(this.A, "message", this.B), delete this.B);
            delete this.A;
            delete this.J;
            super.l()
        }
    };
    const FL = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.md({
                    consentData: c ? ? void 0,
                    zd: d ? void 0 : 2
                })
            })
        },
        GL = {
            vf: a => a.md,
            Pd: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Df: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    zd: b.success ? void 0 : 2
                })
            }
        };

    function DL(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ce: b.__uspapiReturn.callId
        }
    }
    var HL = class extends zl {
        constructor(a) {
            super();
            this.caller = new EL(a, b => "function" === typeof b.__uspapi);
            this.caller.K.set("getDataWithCallback", FL);
            this.caller.G.set("getDataWithCallback", GL)
        }
        l() {
            this.caller.Ba();
            super.l()
        }
        F(a) {
            let b = {};
            if (AL(this.caller)) {
                var c = ne(() => {
                    a(b)
                });
                CL(this.caller, {
                    md: d => {
                        d.zd || (b = d.consentData);
                        c()
                    }
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };

    function IL(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Qg(a.j.T() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = JL(a, b, c, a.j.j.elementsFromPoint(Ag(c.left + c.width / 2, c.left, c.right - 1), Ag(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = JL(a, b, c, a.j.j.elementsFromPoint(Ag(c.left + c.width / 2, c.left, c.right - 1), Ag(c.top + 2, c.top, c.bottom - 1)), 2, e.Ja),
            g = JL(a, b, c, a.j.j.elementsFromPoint(Ag(c.left + 2, c.left, c.right - 1), Ag(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ja, ...f.Ja]);
        const h = JL(a, b, c, a.j.j.elementsFromPoint(Ag(c.right - 1 - 2, c.left, c.right - 1), Ag(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ja, ...f.Ja, ...g.Ja]);
        var k = KL(a, b, c),
            l = n => Db(a.A, n.overlapType) && Db(a.B, n.overlapDepth) && Db(a.l, n.overlapDetectionPoint);
        e = zb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = zb(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Rg(a.j.j);
        const m = new Wh(c.left, c.top, c.width, c.height);
        e = [...Ab(e, n => new Wh(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Mb(Ab(l, n => Yh(m, n.elementRect))), ...zb(Yh(m, new Wh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? LL(m, e) : ML(c, e)
        }
    }

    function NL(a, b) {
        const c = a.j.T(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Dj,
                                        m = Cj(l, () => IL(a, k));
                                    m && (l.j.length && (m.executionTime = Math.round(Number(l.j[0].duration))), h.disconnect(), e(m))
                                }, OL);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function JL(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ja: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (Db(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(PL(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(PL(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const D = k.j.ff(l, m);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: B,
                    Ua: I
                } = QL(k, l, D, m) || {},
                {
                    suspectAncestor: K,
                    Ua: H
                } = QL(k, m, D, l) || {};k = B && I && K && H ? I <= H ? {
                    suspectAncestor: B,
                    overlapType: XL[I]
                } : {
                    suspectAncestor: K,
                    overlapType: YL[H]
                } : B && I ? {
                    suspectAncestor: B,
                    overlapType: XL[I]
                } : K && H ? {
                    suspectAncestor: K,
                    overlapType: YL[H]
                } : null
            }
            const {
                suspectAncestor: w,
                overlapType: F
            } = k || {};
            w && F ? g.push(PL(a, c, q, r, F, e, w)) : g.push(PL(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Ja: h
        }
    }

    function KL(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = mh(b, a.j.T());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(PL(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(PL(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(PL(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function LL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Xh(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function ML(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function PL(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Db(a.A, e) && Db(a.l, f)) {
            b = new Th(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = ZL(a, c)) && Vh(b, a)) c = 4;
            else {
                a = $L(c, d);
                if (Sb) {
                    e = Ki(c, "paddingLeft");
                    f = Ki(c, "paddingRight");
                    var k = Ki(c, "paddingTop"),
                        l = Ki(c, "paddingBottom");
                    e = new Th(k, f, l, e)
                } else e = Di(c, "paddingLeft"), f = Di(c, "paddingRight"), k = Di(c, "paddingTop"), l = Di(c, "paddingBottom"), e = new Th(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Vh(b, new Th(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = $L(c, d), c = Vh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function QL(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.T();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = mh(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Ua: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Ua: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Ua: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = aM(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Ua: 4
                    }
                }
            }
        }
        return (a = aM(a, e, b)) ? {
                suspectAncestor: a,
                Ua: 5
            } :
            null
    }

    function aM(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = mh(f, a.j.T());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function ZL(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Th(a.top, a.right, a.bottom, a.left)
    }

    function $L(a, b) {
        if (!Sb || 9 <= Number(hc)) {
            var c = Di(a, "borderLeftWidth");
            d = Di(a, "borderRightWidth");
            e = Di(a, "borderTopWidth");
            a = Di(a, "borderBottomWidth");
            c = new Th(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Mi(a, "borderLeft");
            var d = Mi(a, "borderRight"),
                e = Mi(a, "borderTop");
            a = Mi(a, "borderBottom");
            c = new Th(e, d, a, c)
        }
        return new Th(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class bM {
        constructor(a) {
            var b = cM;
            this.j = Lg(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const XL = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        YL = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    zb(ph({
        Th: 1,
        Uh: 2,
        Dj: 3,
        Ej: 4,
        Gj: 5,
        Ph: 6,
        Qh: 7,
        Sh: 8,
        Ti: 9,
        Fj: 10,
        Rh: 11,
        Cj: 12,
        Oh: 13
    }), a => !Db([1, 2], a));
    ph({
        fh: 1,
        Ui: 2,
        sh: 3,
        Hj: 4
    });
    const cM = ph({
            gh: 1,
            Kj: 2,
            Hi: 3,
            rj: 4
        }),
        OL = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function dM(a, b, c, d) {
        const e = new Jv;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (te(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return M(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * nh())), M(a, "message", g), b(c, f), e.promise) : null
    }

    function eM(a) {
        return dM(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };

    function fM(a) {
        if (a.A) return a.A;
        a.A = Eh(a.j, "__uspapiLocator");
        return a.A
    }

    function gM(a, b) {
        if ("function" === typeof a.j ? .__uspapi) a = a.j.__uspapi, a("getUSPData", 1, b);
        else if (fM(a)) {
            hM(a);
            const c = ++a.G;
            a.D[c] = b;
            a.A && a.A.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function hM(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                a.D ? .[c.callId](c.returnValue, c.success)
            } catch {}
        }, M(a.j, "message", a.B))
    }
    var iM = class extends zl {
        constructor(a) {
            super();
            this.j = a;
            this.A = null;
            this.D = {};
            this.G = 0;
            this.B = null
        }
        l() {
            this.B && te(this.j, "message", this.B);
            super.l()
        }
        F(a) {
            let b = {};
            if ("function" === typeof this.j ? .__uspapi || null != fM(this)) {
                var c = ne(() => a(b));
                gM(this, (d, e) => {
                    e && (b = d);
                    c()
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };
    var jM = class extends L {
        constructor(a) {
            super(a)
        }
    };

    function kM(a) {
        if (!a.F) {
            if (!a.j) {
                var b = Eh(a.B, "googlefcPresent");
                a.j = b ? b : null
            }
            a.F = !0
        }
        return !!a.j
    }

    function lM(a) {
        a.A || (a.A = b => {
            try {
                const c = Pd(jM, b.data.__fciReturn);
                (0, a.D[v(c, 1)])(c)
            } catch (c) {}
        }, M(a.B, "message", a.A))
    }

    function mM(a) {
        return new Promise(b => {
            if (kM(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(Pd(jM, d))
                    })
                } else lM(a), c = a.G++, a.D[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var nM = class extends zl {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.D = {};
            this.G = 0;
            this.F = !1
        }
    };
    const oM = (a, b) => {
        try {
            const g = void 0 === J(b, 6) ? !0 : J(b, 6);
            a: switch (sd(b, 4)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new mg(kg(sd(b, 2)), E(b, 3), c),
                e = A(b, jg, 5) ? .j() ? ? "";
            d.yb = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            eg(f)
        } catch {}
    };

    function pM(a, b, c = oM) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : M(a, "load", () => void c(a, b)))
    };

    function qM(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function rM(a) {
        if (a === a.top || gh(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && qM(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new Jv;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                rb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var sM = class extends L {
            constructor(a) {
                super(a)
            }
        },
        tM = [1, 3];
    const uM = O `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function vM(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = lh("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Me(uM).toString();
            const f = (new URL(uM.toString())).origin,
                g = rF({
                    destination: a,
                    Fa: e,
                    origin: f,
                    Ta: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function wM(a, b, c, d, e, f, g = !1) {
        function h(n, q) {
            g && gj({
                timeMs: String((b.performance.now() - n).toFixed(2)),
                useCache: q ? "1" : "0"
            }, "topics_stats")
        }
        const k = g ? b.performance.now() : 0,
            {
                Kb: l,
                Jb: m
            } = xM(f);
        c = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        c.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics"
        }).then(n => {
            let q = m;
            if (n instanceof Uint8Array) q || (q = !(l instanceof Uint8Array && Kb(n, l)));
            else if (Jj()(n)) q || (q = n !== l);
            else return e.ma(989, Error(JSON.stringify(n))), 7;
            if (q && f) try {
                var r = new sM;
                var w = x(r, 2, tj());
                n instanceof Uint8Array ? wd(w, 1, tM, Pc(n, !1)) : wd(w, 3, tM, n);
                f.setItem("goog:cached:topics", Rd(w))
            } catch {}
            return n
        }), c.getTopicsPromise = a);
        return l && !m ? (h(k, !0), Promise.resolve(l)) : c.getTopicsPromise.then(n => {
            h(k, !1);
            return n
        })
    }

    function xM(a) {
        if (!a) return {
            Kb: null,
            Jb: !0
        };
        try {
            const h = a.getItem("goog:cached:topics");
            if (!h) return {
                Kb: null,
                Jb: !0
            };
            const k = Pd(sM, h);
            let l;
            const m = xd(k, tM);
            switch (m) {
                case 0:
                    l = null;
                    break;
                case 1:
                    var b, c = 1 === xd(k, tM) ? 1 : -1;
                    a = k;
                    const q = v(a, c),
                        r = Pc(q, !0);
                    null != r && r !== q && jd(a, c, r);
                    var d = r;
                    var e = null == d ? Ac() : d;
                    zc(xc);
                    var f = e.O;
                    var g = null == f || vc(f) ? f : "string" === typeof f ? pc(f) : null;
                    l = (b = null == g ? g : e.O = g) ? new Uint8Array(b) : wc || (wc = new Uint8Array(0));
                    break;
                case 3:
                    l = sd(k, 3 === xd(k, tM) ? 3 : -1);
                    break;
                default:
                    Vf(m, void 0)
            }
            const n =
                Ed(k, 2) + 6048E5 < tj();
            return {
                Kb: l,
                Jb: n
            }
        } catch {
            return {
                Kb: null,
                Jb: !0
            }
        }
    };

    function yM(a, b) {
        if (rb()) {
            var c = a.document.documentElement.lang;
            zM(a) ? AM(b, Nh(a), !0, "", c) : (new MutationObserver((d, e) => {
                zM(a) && (AM(b, Nh(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function zM(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    }

    function AM(a, b, c, d, e) {
        gj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function BM(a) {
        const b = a.innerInsElement;
        a = a.outerInsElement;
        if (!b || !a) throw Error("no_ins_in_loader_provided_slot");
        return {
            innerInsElement: b,
            outerInsElement: a
        }
    }
    async function CM({
        ha: a,
        ca: b,
        Za: c,
        slot: d
    }) {
        const e = d.vars,
            f = jh(d.pubWin),
            {
                innerInsElement: g,
                outerInsElement: h
            } = BM(d),
            k = new fH({
                L: f,
                pubWin: d.pubWin,
                H: e,
                ha: a,
                ca: b,
                Za: c,
                innerInsElement: g,
                outerInsElement: h
            });
        k.I = Date.now();
        rm(1, [k.H]);
        $l(1032, () => {
            if (f && V(dr)) {
                var l = k.H;
                Z(pD(), 32, !1) || (uD(pD(), 32, !0), yM(f, "sa" === l.google_loader_used ? 5 : 9))
            }
        });
        try {
            await DM(k)
        } catch (l) {
            if (!cm(159, l)) throw l;
        }
        $l(639, () => {
            {
                var l = k.H;
                const n = k.L;
                if (n && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(l.google_async_iframe_id + (V(Iq) ? "_host" : ""))) ? ah(m, "INS", "adsbygoogle") : null) ? (l = new eH(n, m, l), l.j = t.setInterval(Ma(l.B, l), 500), l.B(), l = !0) : l = !1
                } else l = !1
            }
            return l
        });
        em(k.pubWin, "affa", l => {
            $l(1008, () => {
                e.google_ad_client && f && !ob() && EM(f, e, Pd(GJ, l.config), k.l, E(a, 8))
            }, FM)
        });
        e.google_ad_client && f && !ob() && f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) && EM(f, e, GM(), k.l, E(a, 8));
        return k
    }

    function FM(a) {
        a.e = `${W(pr)}`
    }

    function EM(a, b, c, d, e) {
        if (A(c, EF, 1) || V(Ir)) {
            var f = P(LD);
            var g = b.google_page_url;
            g = "string" === typeof g ? g : "";
            var h = "on" === b.google_adtest;
            const m = A(c, xF, 2);
            try {
                const n = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (n) {
                    var k = decodeURIComponent(n[1]);
                    var l = Pd(EF, k)
                } else l = null
            } catch (n) {
                l = null
            }
            l || (l = V(ir) ? A(c, EF, 1) ? ? null : null);
            c = new uL(l, g, !!m ? .j(), !(!m ? .B() || !(488 > R(a).clientWidth) && m ? .D()), e, h);
            sL(a, f, c, b.google_ad_client, d)
        }
    }

    function GM() {
        const a = new GJ;
        if (V(hr)) {
            var b = new xF;
            b = Jd(b, 5, !0);
            b = Jd(b, 8, !0);
            Ad(a, 2, b)
        }
        return a
    }

    function DM(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        VF(13);
        VF(11);
        var b = P(Xr).C(Tq.j, Tq.defaultValue);
        if (b.length) {
            var c = document;
            if (b.length && c.head)
                for (var d of b)
                    if ((b = d) && c.head) {
                        var e = lh("META");
                        c.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = b
                    }
        }
        c = pD();
        (d = Z(c, 23, !1)) || uD(c, 23, !0);
        if (!d) {
            c = a.H.google_ad_client;
            d = a.ha;
            c = void 0 !== md(d, xF, 13 === xd(d, JF) ? 13 : -1) ? A(Id(d, xF, 13, JF), tE, 2) : Kb(Id(d, zF, 14, JF) ? .j() ? ? [], [c]) ? A(A(Id(d, zF, 14, JF), xF, 2), tE, 2) : new tE;
            c = new uE(a.pubWin,
                a.H.google_ad_client, c, J(a.ha, 6));
            c.l = !0;
            b = A(c.C, qp, 1);
            if (c.l && (d = c.j, c.B && !Iz(b) ? (e = new iE, e = x(e, 1, 1)) : e = null, e)) {
                e = Rd(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (f) {}
            }
            b && Jz(new Kz(c.j, new aA(c.j, c.A), b, new Uw(c.j)))
        }
        c = !$h() && !nb();
        return !c || c && !HM(a) ? IM(a) : Promise.resolve()
    }

    function JM(a, b, c = !1) {
        b = wF(a.L, b);
        const d = ui() || fs(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = hs(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function HM(a) {
        return KM(a) || LM(a)
    }

    function KM(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                bm("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = am(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                HM(a) || IM(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function LM(a) {
        const b = a.pubWin.document,
            c = MM();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.innerInsElement,
            e = yH(b);
        if (!e) return !1;
        if (!zH(b)) return NM(a, c.visible, d);
        const f = 3 === xH(b);
        if (JM(a, d) <= c.hidden && !f) return !1;
        let g = am(332, () => {
            !zH(b) && g && (te(b, e, g), NM(a, c.visible, d) || IM(a), g = null)
        });
        return M(b, e, g)
    }

    function MM() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        dh() && (a.visible *= 2);
        return a
    }

    function NM(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!Jm(d.google_reactive_ad_format) && (AG(d) || d.google_reactive_ads_config) || !is(c) || JM(a, c) <= b) return !1;
        var e = pD(),
            f = Z(e, 8, {});
        e = Z(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                yb(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            $l(294, () => {
                IM(a)
            })
        });
        return !0
    }

    function IM(a) {
        $l(326, () => {
            if (1 === Ti(a.H)) {
                var c = V(er),
                    d = c || V(cr),
                    e = a.pubWin;
                if (d && e === a.L) {
                    var f = new lm;
                    d = new mm;
                    f.setCorrelator(Nh(a.pubWin));
                    var g = WF(a.pubWin);
                    z(f, 5, g, "");
                    Kd(f, 2, 1);
                    g = Ad(d, 1, f);
                    f = new km;
                    f = Jd(f, 10, !0);
                    var h = V(Wq);
                    f = Jd(f, 8, h);
                    h = V(Xq);
                    f = Jd(f, 12, h);
                    h = V($q);
                    f = Jd(f, 7, h);
                    h = V(Zq);
                    f = Jd(f, 13, h);
                    Ad(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    kh(e.document, J(a.ha, 9) && c ? a.ca.Mf : a.ca.Nf)
                } else Aj()
            }
        });
        a.H.google_ad_channel = OM(a, a.H.google_ad_channel);
        a.H.google_tag_partner = PM(a, a.H.google_tag_partner);
        QM(a);
        var b = a.H.google_start_time;
        "number" === typeof b && (sm = b, a.H.google_start_time = null);
        vF(a);
        RM(a);
        xD() && wE({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            tb: a.ca.tb
        });
        AG(a.H) && (Ey() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        SM(a.L);
        b = "function" === typeof a.pubWin.document.browsingTopics && RF(a.pubWin.document);
        if (V(Pq) && (b || V(Jq))) try {
            a.D = vM(a.pubWin)
        } catch (c) {
            cm(984, c)
        }
        return TM(a)
    }

    function RM(a) {
        a.L && (EG(a.L, a.ca.We), CG(a.L.location) && NG(a.L, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function OM(a, b) {
        return (b ? [b] : []).concat(nD(a.H).ad_channels || []).join("+")
    }

    function PM(a, b) {
        return (b ? [b] : []).concat(nD(a.H).tag_partners || []).join("+")
    }

    function UM(a) {
        const b = lh("IFRAME");
        oh(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function VM(a, b, c) {
        return 9 === a.H.google_reactive_ad_format && ah(a.outerInsElement, null, "fsi_container") ? (a.innerInsElement.appendChild(b), Promise.resolve(b)) : LG(a.ca.ee, 525, d => {
            a.innerInsElement.appendChild(b);
            d.createAdSlot(a.L, a.H, b, a.outerInsElement.parentElement, lE(c, a.pubWin));
            return b
        })
    }

    function WM(a, b, c) {
        pM(a.pubWin, Jd(gg(Kd(Kd(fg(new hg, ig(new jg, String(Nh(a.pubWin)))), 4, 1), 2, 1), E(a.ha, 2)), 6, !0), V(Mr) ? () => {} : void 0);
        const d = a.L;
        a.H.google_acr && a.H.google_acr(b);
        M(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? nD(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || f) && d && d === a.pubWin && XM(d, a, a.outerInsElement, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.Ba()
            })
        };
        YM(a, b);
        ZM(a, b);
        !d || AG(a.H) && !PG(a.H) || (a.outerInsElement || bm("shadowroot_nullcheck", {
            "var": "sth_init",
            ctxSize: Object.keys(a).length,
            isExp: V(Iq) ? 1 : 0
        }, .05), e(new kI(d, b, a.H)), e(new uH(a, b)), e(d.IntersectionObserver ? null : new wH(d, b, a.innerInsElement)));
        d && (e(new oH(d, b)), a.A.push(ZG(d, a.H)), P(dH).init(d), a.A.push(kH(d, a.outerInsElement, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.outerInsElement;
            const f = e.parentElement;
            (f && vs.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.outerInsElement;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label",
            "Advertisement");
        $M(a)
    }

    function YM(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = wD();
        let f = null;
        const g = em(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function aN(a, b) {
        var c = XF(a, "__gpi_opt_out", b.l);
        c && (c = sg(rg(qg(pg(new tg, c), 2147483647), "/"), b.pubWin.location.hostname), YF(a, "__gpi_opt_out", c, b.l))
    }

    function ZM(a, b) {
        const c = em(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = sg(rg(qg(pg(new tg, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new aG(a.pubWin);
                YF(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) ZF(f, "__gads", a.l), ZF(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function $M(a) {
        const b = $h(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                M(a.pubWin, "message", Zl.sa(616, c));
                a.A.push(() => {
                    te(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function XM(a, b, c, d) {
        NL(new bM(a), c).then(e => {
            rm(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && vs.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Ab(e.entries, D => `${D.overlapType}:${D.overlapDepth}:${D.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                w = Vi(e.target),
                F = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            bm("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: WF(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: q,
                slot: b.H.google_ad_slot,
                sp: r,
                tgt: w,
                tr: F,
                url: b.H.google_page_url,
                vp: e,
                pvc: Nh(a)
            }, 1)
        }).catch(e => {
            rm(8, ["Error:", e.message, c]);
            bm("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function bN(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function cN(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = QG(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = Ch();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = Bh().join(" ")
        }
        V(oq) && !1 === e.google_video_play_muted && bN("autoplay", l);
        n = b;
        b = dN(b);
        q = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = q;
            b = dm(b, m);
            dm(n, m)
        } else b = q;
        e.dash && (l.srcdoc = e.dash);
        n = V(UI(window) ? Pr : Or);
        q = V(Rr);
        n = VI(a.pubWin, n, q);
        q = e.google_trust_token_additional_signing_data;
        n && WI(n) && (n = YI(n, q)) && (l.trustToken = JSON.stringify(n));
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && bN("attribution-reporting", l);
        V(Uq) && (n = a.pubWin, void 0 !== n.credentialless && (V(Vq) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) {
            l.src = b;
            var w = UM(l);
            w = VM(a, w, d)
        } else {
            d = {};
            d.dtd = iH((new Date).getTime(),
                sm);
            d = Pi(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = UM(l);
            d && a.A.push(wi(a.pubWin, l));
            d = (d = a.H.google_shadow_mode) && "string" === typeof d && "open" === d ? "open" : "closed";
            a: {
                k = a.innerInsElement;
                try {
                    if (V(Iq) && k) {
                        w = k.attachShadow({
                            mode: d
                        });
                        break a
                    }
                } catch (F) {}
                w = void 0
            }
            a.innerInsElement.style.visibility = "visible";
            w = w || a.innerInsElement;
            for (d = l; k = w.firstChild;) w.removeChild(k);
            w.appendChild(d);
            w = Promise.resolve(l)
        }
        c && (c = a.ca.eg, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Ta: m,
            Lf: a.pubWin,
            Fe: f,
            Zj: "google_expandable_ad_slot" + Ti(e),
            sf: c.toString(),
            Fc: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ta || !e.Fc ? void 0 : em(e.Fc, "ct", Na(hm, e, c)), e && a.A.push(e));
        return w
    }

    function dN(a) {
        var b = W(u("Edge") ? Aq : Eq);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            bm("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function eN(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        V(Kq) && y(d, 5) && aN(new aG(a.pubWin), a);
        var e = lE(d, a.pubWin);
        if (!y(d, 5)) return Promise.resolve();
        y(d, 5) && eG(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (KG(a.L, f), RG(f, a, lE(d)), f = f.page_level_pubvars, Aa(f) && Be(a.H, f));
        y(d, 5) && await fN();
        V(Jq) && a.D && y(d, 5) && !Z(pD(), 34, !1) && (uD(pD(), 34, !0), f = a.D.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: Nh(a.pubWin)
            })
        }), Zl.za(1069, f));
        if (V(Rq) && a.D)
            if (gN(a)) {
                a.B = 1;
                const g = lE(a.l, a.pubWin);
                f = a.D.then(async k => {
                    await wM(k, a.pubWin, V(Oq), V(Qq), Zl, g, V(Nr)).then(l => {
                        a.B = l
                    })
                });
                const h = W(Nq);
                0 < h ? await Promise.race([f, Rh(h)]) : await f
            } else a.B = 5;
        if (!XI(a.pubWin, OF(), E(a.ha, 8))) {
            const g = W(Vr);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        QG(b) ? (f = a.ca.fg.toString() + "#" + kJ(b), sJ(b, pD()), hN(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !BG(b) || zG(c, b, e)) && hN(b) && (f = hJ(a, d));
        rm(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Si(c);
        e = Ti(b);
        b = a.pubWin === a.L ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Pa()).toString(36)}`;
        c = 0 < JM(a, a.innerInsElement, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = pD(), e.btvi = Z(c, 21, 1), vD(c, 21));
        f = Pi(e, f);
        d = cN(a, f, 0 === a.C, d);
        f = dN(f);
        a.H.rpe && eI(a.pubWin, a.innerInsElement, {
            height: a.H.google_ad_height,
            Uc: "force",
            dd: !0,
            Tf: !0,
            sc: a.H.google_ad_client
        });
        d = await d;
        try {
            WM(a, d, b)
        } catch (g) {
            cm(223, g)
        }
    }

    function fN() {
        return (qb() ? 0 <= jb(11) : pb() && 0 <= jb(65)) ? new Promise(a => {
            NI(a.bind(null, !0))
        }) : (NI(null), Promise.resolve(!1))
    }

    function iN(a) {
        const b = V(gr) ? new HL(a) : new iM(a);
        return new Promise(c => {
            b.F(d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function jN(a) {
        var b = Dh(t.top, "googlefcPresent");
        t.googlefc && !b && bm("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function kN(a) {
        return kM(a) ? mM(a) : Promise.resolve(null)
    }

    function lN(a, b) {
        const c = b.bg;
        b = b.uspString;
        c ? gH(a, c) : oE(a, !0);
        b && x(a, 1, b)
    }

    function mN(a) {
        const b = W(kq),
            c = V(iq);
        if (0 >= b && !c) return null;
        const d = tj(),
            e = eM(a.pubWin);
        if (!e) return null;
        a.F = "0";
        return (c ? e : Promise.race([e, Rh(b, "0")])).then(f => {
            bm("adsense_paw", {
                time: tj() - d
            });
            f ? .length > W(jq) ? cm(809, Error(`ML:${f.length}`)) : a.F = f
        }).catch(f => {
            cm(809, f)
        })
    }

    function nN(a) {
        const b = tj();
        return Promise.race([$l(832, () => rM(a)), Rh(200)]).then(c => {
            bm("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: tj() - b,
                tms: 200
            });
            return c ? .rb
        })
    }

    function oN(a) {
        var b = W(mq);
        return Promise.race([am(779, () => {
            const c = V(UI(window) ? Pr : Or),
                d = V(Rr);
            return dJ(new eJ(a, c, d))
        })(), Rh(b)])
    }
    async function pN(a) {
        const b = mN(a),
            c = $l(868, () => nN(a.pubWin));
        JI(E(a.ha, 8));
        aF(a.pubWin);
        jN(a.H.google_ad_client);
        var d = new nM(a.pubWin);
        await kN(d);
        a.l = new pE;
        d = [hH(a), iN(a.pubWin)];
        d = await Promise.all(d);
        lN(a.l, {
            bg: d[0],
            uspString: d[1]
        });
        XI(a.pubWin, OF(), E(a.ha, 8)) && (d = oN(!!y(a.l, 5)), V(Ur) ? Zl.za(962, d) : await d);
        V(iq) || await b;
        a.rb = await c || "";
        await eN(a)
    }

    function gN(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!y(b, 5) && !b.j() && !yD() && !y(b, 9)
    }

    function TM(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const l = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                        k = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            ls(a.pubWin, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.C = f;
        0 === a.C || (a.H.google_allow_expandable_ads = !1);
        Sh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === xH(a.pubWin.document) && (a.j |= 32);
        if (b = a.L) b = a.L, b = !(R(b).scrollWidth <= R(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.G = 2;
        return pN(a)
    }

    function hN(a) {
        const b = pD(),
            c = a.google_ad_section;
        AG(a) && vD(b, 15);
        if (Yi(a)) {
            if (100 < vD(b, 5)) return !1
        } else if (100 < vD(b, 6) - Z(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function QM(a) {
        const b = a.L;
        if (b && !nD(b).ads_density_stats_processed && !$h(b) && (nD(b).ads_density_stats_processed = !0, V(Fq) || .01 > nh())) {
            const c = () => {
                if (b) {
                    var d = pC(kC(b), a.H.google_ad_client, b.location.hostname, WF(a.H).split(","));
                    bm("ama_stats", d, 1)
                }
            };
            Qh(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function SM(a) {
        a && !nD(a).host_pinged_back && (nD(a).host_pinged_back = !0, bm("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        $l(843, () => {
            if (!t.google_sa_impl) {
                var d = zL(a);
                wL(d);
                rm(16, [3, d.toJSON()]);
                var e = xL({
                        Te: b,
                        Zf: E(d, 2)
                    }),
                    f = c(e, d);
                t.google_sa_impl = h => CM({
                    ha: d,
                    ca: f,
                    Za: e,
                    slot: h
                });
                UF(QF(t));
                t.google_process_slots ? .();
                var g = (t.Prototype || {}).Version;
                null != g && bm("prtpjs", {
                    version: g
                })
            }
        })
    })(yL, "m202212050101", function(a, b) {
        const c = 2012 < Hd(b, 1) ? `_fy${Hd(b,1)}` : "",
            d = E(b, 3);
        b = E(b, 2);
        return {
            Nf: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Mf: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            ee: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            We: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            eg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            fg: O `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Db: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            tb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            oc: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/storify${c}.js`
        }
    });
}).call(this, "[2021,\"r20230111\",\"r20110914\",null,null,null,null,\".google.com.kh\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759876,44759927,44759842,44777877]]");