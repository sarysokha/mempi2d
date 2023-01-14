(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        n = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
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

    function ka(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
        return ka.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ma(a, b) {
        a = a.split(".");
        var c = n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function na(a) {
        return a
    };
    let oa = (new Date).getTime();

    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function qa(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function sa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function p(a) {
        return -1 != sa().indexOf(a)
    };

    function ta() {
        return p("Trident") || p("MSIE")
    }

    function ua() {
        return (p("Chrome") || p("CriOS")) && !p("Edge") || p("Silk")
    }

    function va(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function wa() {
        var a = sa();
        if (ta()) {
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
        a = va(b);
        return p("Opera") ? a(["Version", "Opera"]) :
            p("Edge") ? a(["Edge"]) : p("Edg/") ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : ua() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function za(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Aa(a, b) {
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

    function Ba(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ca(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Da(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ea(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ha(a, b) {
        return 0 <= xa(a, b)
    }

    function Ia(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ja(a) {
        Ja[" "](a);
        return a
    }
    Ja[" "] = function() {};
    var Ka = ta();
    !p("Android") || ua();
    ua();
    !p("Safari") || ua();
    var La = {},
        Ma = null;

    function Na(a) {
        var b;
        void 0 === b && (b = 0);
        Oa();
        b = La[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function Pa(a) {
        var b = [];
        Qa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Qa(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Ma[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Oa();
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

    function Oa() {
        if (!Ma) {
            Ma = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                La[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ma[f] && (Ma[f] = e)
                }
            }
        }
    };
    var Ra = "undefined" !== typeof Uint8Array,
        Ta = {};
    let Ua;
    var Va = class {
        constructor(a) {
            if (Ta !== Ta) throw Error("illegal external caller");
            this.ta = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.ta
        }
    };
    const Wa = Symbol();

    function Xa(a, b) {
        if (Wa) return a[Wa] |= b;
        if (void 0 !== a.I) return a.I |= b;
        Object.defineProperties(a, {
            I: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Ya(a, b) {
        Wa ? a[Wa] && (a[Wa] &= ~b) : void 0 !== a.I && (a.I &= ~b)
    }

    function q(a) {
        let b;
        Wa ? b = a[Wa] : b = a.I;
        return null == b ? 0 : b
    }

    function Za(a, b) {
        Wa ? a[Wa] = b : void 0 !== a.I ? a.I = b : Object.defineProperties(a, {
            I: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function $a(a) {
        Xa(a, 1);
        return a
    }

    function ab(a) {
        Xa(a, 16);
        return a
    }

    function bb(a, b) {
        Za(b, (a | 0) & -51)
    }

    function db(a, b) {
        Za(b, (a | 18) & -41)
    };
    var eb = {};

    function fb(a) {
        return !!(q(a.A) & 2)
    }

    function gb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let hb;
    var ib;
    const jb = [];
    Za(jb, 23);
    ib = Object.freeze(jb);

    function kb(a) {
        if (fb(a)) throw Error("Cannot mutate an immutable Message");
    }

    function lb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && gb(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function mb(a, b, c = !1) {
        if (Array.isArray(a)) return new b(c ? ab(a) : a)
    };
    let nb;

    function ob(a, b) {
        nb = b;
        a = new a(b);
        nb = void 0;
        return a
    };

    function pb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (q(a) & 128)) return a = Array.prototype.slice.call(a), lb(a), a
                    } else {
                        if (Ra && null != a && a instanceof Uint8Array) return Na(a);
                        if (a instanceof Va) {
                            const b = a.ta;
                            return null == b ? "" : "string" === typeof b ? b : a.ta = Na(b)
                        }
                    }
        }
        return a
    };

    function qb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = rb(a, b, c, void 0 !== d);
            else if (gb(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = qb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function rb(a, b, c, d) {
        const e = q(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = qb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function sb(a) {
        return a.ra === eb ? a.toJSON() : pb(a)
    }

    function tb(a, b) {
        a & 128 && lb(b)
    };

    function ub(a) {
        return a.h || (a.h = a.A[a.j + a.V] = {})
    }

    function r(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.A[b + a.V]
    }

    function t(a, b, c, d) {
        kb(a);
        return vb(a, b, c, d)
    }

    function vb(a, b, c, d) {
        a.v && (a.v = void 0);
        if (b >= a.j || d) return ub(a)[b] = c, a;
        a.A[b + a.V] = c;
        (c = a.h) && b in c && delete c[b];
        return a
    }

    function wb(a, b, c, d, e) {
        let f = r(a, b, d);
        Array.isArray(f) || (f = ib);
        const g = q(f);
        g & 1 || $a(f);
        if (e) g & 2 || Xa(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Ya(f, 16) : (f = $a(Array.prototype.slice.call(f)), vb(a, b, f, d))
        }
        return f
    }

    function xb(a, b) {
        a = r(a, b);
        return null == a ? a : !!a
    }

    function yb(a, b) {
        const c = fb(a);
        let d = wb(a, b, 1, !1, c);
        const e = q(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = $a(d.slice()), vb(a, b, d, !1));
            let f = 0,
                g = 0;
            for (; f < d.length; f++) {
                const h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            Xa(d, 5);
            c && (Xa(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), Xa(d, 5), zb(a, b, d, !1));
        return d
    }

    function w(a, b) {
        a = r(a, b);
        return null == a ? 0 : a
    }

    function zb(a, b, c, d) {
        if (null == c) c = ib;
        else {
            const e = q(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), Za(c, e | 1))
        }
        return t(a, b, c, d)
    }

    function Ab(a, b, c) {
        kb(a);
        0 !== c ? vb(a, b, c) : vb(a, b, void 0, !1);
        return a
    }

    function Bb(a, b, c, d) {
        kb(a);
        (c = Cb(a, c)) && c !== b && null != d && vb(a, c, void 0, !1);
        return vb(a, b, d)
    }

    function Db(a, b, c) {
        return Cb(a, b) === c ? c : -1
    }

    function Cb(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != r(a, e) && (0 !== c && vb(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Eb(a, b, c, d) {
        const e = r(a, c, d); {
            let g = !1;
            var f = null == e || "object" !== typeof e || (g = Array.isArray(e)) || e.ra !== eb ? g ? new b(e) : void 0 : e
        }
        f !== e && null != f && (vb(a, c, f, d), Xa(f.A, q(a.A) & 18));
        return f
    }

    function z(a, b, c) {
        b = Eb(a, b, c, !1);
        if (null == b) return b;
        if (!fb(a)) {
            var d = Fb(b);
            d !== b && (b = d, vb(a, c, b, !1))
        }
        return b
    }

    function Gb(a, b, c, d, e) {
        a.D || (a.D = {});
        let f = a.D[c],
            g = wb(a, c, 3, void 0, e);
        if (f) e || (Object.isFrozen(f) ? d || (f = Array.prototype.slice.call(f), a.D[c] = f) : d && Object.freeze(f));
        else {
            f = [];
            const h = !!(q(a.A) & 16),
                l = !!(q(g) & 2);
            !e && l && (g = $a(Array.prototype.slice.call(g)), vb(a, c, g));
            let k = l;
            for (let m = 0; m < g.length; m++) {
                const u = g[m],
                    v = mb(u, b, h);
                void 0 !== v && (k = k || !!(q(u) & 2), f.push(v), l && Xa(v.A, 2))
            }
            a.D[c] = f;
            a = g;
            Object.isFrozen(a) || (b = q(a) | 33, Za(a, k ? b & -9 : b | 8));
            (e || d && l) && Xa(f, 2);
            (e || d) && Object.freeze(f)
        }
        return f
    }

    function A(a, b, c) {
        var d = fb(a);
        b = Gb(a, b, c, d, d);
        a = wb(a, c, 3, void 0, d);
        if (!(d || q(a) & 8)) {
            for (d = 0; d < b.length; d++) {
                c = b[d];
                const e = Fb(c);
                c !== e && (b[d] = e, a[d] = b[d].A)
            }
            Xa(a, 8)
        }
        return b
    }

    function Hb(a, b, c) {
        kb(a);
        null == c && (c = void 0);
        return vb(a, b, c)
    }

    function Ib(a, b, c, d) {
        kb(a);
        null == d && (d = void 0);
        return Bb(a, b, c, d)
    }

    function Jb(a, b, c, d) {
        kb(a);
        let e;
        if (null != c) {
            e = $a([]);
            let f = !1;
            for (let g = 0; g < c.length; g++) e[g] = c[g].A, f = f || !!(q(e[g]) & 2);
            a.D || (a.D = {});
            a.D[b] = c;
            c = e;
            f ? Ya(c, 8) : Xa(c, 8)
        } else a.D && (a.D[b] = void 0), e = ib;
        return vb(a, b, e, d)
    }

    function B(a, b) {
        return null == a ? b : a
    }

    function C(a, b) {
        return B(r(a, b), "")
    }

    function D(a, b, c = !1) {
        return B(xb(a, b), c)
    }

    function Kb(a, b) {
        a = r(a, b);
        return B(null == a ? a : +a, 0)
    }

    function Lb(a, b, c, d) {
        return z(a, b, Db(a, d, c))
    };

    function Mb(a) {
        const b = q(a);
        if (b & 2) return a;
        a = Ba(a, Nb);
        db(b, a);
        Object.freeze(a);
        return a
    }

    function Ob(a, b, c = db) {
        if (null != a) {
            if (Ra && a instanceof Uint8Array) return a.length ? new Va(new Uint8Array(a)) : Ua || (Ua = new Va(null));
            if (Array.isArray(a)) {
                const d = q(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Za(a, d | 2), a;
                a = rb(a, Ob, c, !0);
                b = q(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.ra === eb ? Nb(a) : a
        }
    }

    function Nb(a) {
        if (fb(a)) return a;
        a = Pb(a, !0);
        Xa(a.A, 2);
        return a
    }

    function Pb(a, b) {
        const c = a.A;
        var d = ab([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (q(c) & 128) && lb(d);
        b = b || fb(a) ? db : bb;
        d = ob(a.constructor, d);
        a.Ja && (d.Ja = a.Ja.slice());
        e = !!(q(c) & 16);
        for (let u = 0; u < c.length; u++) {
            var f = c[u];
            if (u === c.length - 1 && gb(f))
                for (const v in f) {
                    var g = +v;
                    if (Number.isNaN(g)) ub(d)[g] = f[g];
                    else {
                        var h = d,
                            l = f[v],
                            k = e,
                            m = b;
                        const x = a.D && a.D[g];
                        x ? Jb(h, g, Mb(x), !0) : t(h, g, Ob(l, k, m), !0)
                    }
                } else h = d, g = u - a.V, l = e, k = b, (m = a.D && a.D[g]) ? Jb(h, g, Mb(m), !1) : t(h, g, Ob(f, l, k), !1)
        }
        return d
    }

    function Fb(a) {
        if (!fb(a)) return a;
        const b = Pb(a, !1);
        b.v = a;
        return b
    };

    function Qb(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        return ob(a, ab(b))
    }
    var E = class {
        constructor(a, b, c) {
            null == a && (a = nb);
            nb = void 0;
            var d = this.constructor.h || 0,
                e = 0 < d,
                f = this.constructor.messageId,
                g = !1;
            if (null == a) {
                a = f ? [f] : [];
                var h = !0;
                Za(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (f && f !== a[0]) throw Error();
                const l = Xa(a, 0);
                let k = l;
                if (h = 0 !== (16 & k))(g = 0 !== (32 & k)) || (k |= 32);
                if (e)
                    if (128 & k) d = 0;
                    else {
                        if (0 < a.length) {
                            const m = a[a.length - 1];
                            if (gb(m) && "g" in m) {
                                d = 0;
                                k |= 128;
                                delete m.g;
                                let u = !0;
                                for (let v in m) {
                                    u = !1;
                                    break
                                }
                                u && a.pop()
                            }
                        }
                    }
                else if (128 & k) throw Error();
                l !== k && Za(a, k)
            }
            this.V = (f ?
                0 : -1) - d;
            this.D = void 0;
            this.A = a;
            a: {
                f = this.A.length;d = f - 1;
                if (f && (f = this.A[d], gb(f))) {
                    this.h = f;
                    this.j = d - this.V;
                    break a
                }
                void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.V), this.h = void 0) : this.j = Number.MAX_VALUE
            }
            if (!e && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !g && !0;
                e = this.j;
                let l;
                for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.V, (d = a[g]) ? Rb(d, b) : a[g] = ib) : (l || (l = ub(this)), (d = l[g]) ? Rb(d, b) : l[g] = ib)
            }
        }
        toJSON() {
            const a = this.A;
            return hb ?
                a : rb(a, sb, tb)
        }
    };

    function Rb(a, b) {
        if (Array.isArray(a)) {
            var c = q(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Za(a, c | d)
        }
    }
    E.prototype.ra = eb;

    function Sb(a, b) {
        return pb(b)
    };
    const Tb = a => null !== a && void 0 !== a;
    let Ub = void 0;

    function Vb(a, b) {
        const c = Ub;
        Ub = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    var Xb = class extends E {
            constructor(a) {
                super(a, -1, Wb)
            }
        },
        Yb = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Wb = [2, 3];

    function Zb(a, b) {
        this.i = a === $b && b || "";
        this.h = ac
    }
    var ac = {},
        $b = {};

    function bc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function cc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function dc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function ec(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function fc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function gc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function hc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function ic(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function jc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var kc;

    function lc() {
        if (void 0 === kc) {
            var a = null,
                b = n.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    n.console && n.console.error(c.message)
                }
                kc = a
            } else kc = a
        }
        return kc
    };
    const mc = {};
    class nc {
        constructor(a, b) {
            this.h = b === mc ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    var pc = class {
        constructor(a, b) {
            this.h = b === oc ? a : ""
        }
        toString() {
            return this.h + ""
        }
    };

    function qc(a, b) {
        a = rc.exec(sc(a).toString());
        var c = a[3] || "";
        return tc(a[1] + uc("?", a[2] || "", b) + uc("#", c))
    }

    function sc(a) {
        return a instanceof pc && a.constructor === pc ? a.h : "type_error:TrustedResourceUrl"
    }
    var rc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        oc = {};

    function tc(a) {
        const b = lc();
        a = b ? b.createScriptURL(a) : a;
        return new pc(a, oc)
    }

    function uc(a, b, c) {
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

    function vc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function wc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ca(f) || da(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (da(f)) {
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
                za(g ? Ia(f) : f, d)
            }
        }
    }

    function xc(a) {
        this.h = a || n.document || document
    }
    xc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    xc.prototype.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    xc.prototype.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    xc.prototype.append = function(a, b) {
        wc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    xc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function yc() {
        return !Ac() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Ac() {
        return p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Bc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Cc = /#|$/;

    function Dc(a, b) {
        var c = a.search(Cc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Ec(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ja(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Fc(a) {
        return Ec(a.top) ? a.top : null
    }

    function Gc(a, b) {
        const c = Hc("SCRIPT", a);
        c.src = sc(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Ic(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Jc(a, b) {
        if (!Kc() && !Lc()) {
            let c = Math.random();
            if (c < b) return c = Mc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Mc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function F(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Nc(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Lc = cc(() => Ca(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Oc) || 1E-4 > Math.random()),
        Kc = cc(() => -1 != sa().indexOf("MSIE"));
    const Oc = a => -1 != sa().indexOf(a);
    var Pc = /^([0-9.]+)px$/,
        Qc = /^(-?[0-9.]{1,30})$/;

    function Rc(a) {
        if (!Qc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function H(a) {
        return (a = Pc.exec(a)) ? +a[1] : null
    }
    var Sc = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Tc = cc(() => yc() ? 2 : Ac() ? 1 : 0),
        Uc = (a, b) => {
            F(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let Vc = [];
    const Wc = () => {
        const a = Vc;
        Vc = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function Xc(a, b) {
        if (a.length && b.head)
            for (const c of a) a: {
                a = c;
                if (!a || !b.head) break a;
                const d = Hc("META");b.head.appendChild(d);d.httpEquiv = "origin-trial";d.content = a
            }
    }
    var Yc = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        $c = a => {
            var b = Zc;
            "complete" === b.readyState || "interactive" === b.readyState ? (Vc.push(a), 1 == Vc.length && (window.Promise ? Promise.resolve().then(Wc) : window.setImmediate ? setImmediate(Wc) : setTimeout(Wc, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Hc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };
    let ad = null;
    var Zc = document,
        I = window;
    let bd = null;
    var cd = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == bd) {
                bd = !1;
                try {
                    var d = Fc(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (bd = !0);
                    n.localStorage.getItem("google_logging") && (bd = !0)
                } catch (e) {}
            }
            a = bd
        }
        a && (d = n.document, a = new Zb($b, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = tc(a instanceof Zb && a.constructor === Zb && a.h === ac ? a.i : "type_error:Const"), Gc(d, a))
    };

    function dd(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function ed(a = dd()) {
        return a ? Ec(a.master) ? a.master : null : null
    };

    function fd(a, ...b) {
        if (0 === b.length) return tc(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return tc(c.join(""))
    };

    function gd(a) {
        a = a[0];
        const b = lc();
        a = b ? b.createScript(a) : a;
        return new nc(a, mc)
    };
    var hd = a => {
            a = ed(dd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        id = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        jd = () => {
            if (!I) return !1;
            try {
                return !(!I.navigator.standalone && !I.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        kd = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    var ld = {
        Eb: 0,
        Db: 1,
        Ab: 2,
        vb: 3,
        Bb: 4,
        wb: 5,
        Cb: 6,
        yb: 7,
        zb: 8,
        ub: 9,
        xb: 10
    };
    var md = {
        Gb: 0,
        Hb: 1,
        Fb: 2
    };

    function nd(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }
    var qd = class {
        constructor() {
            this.i = new od(this);
            this.h = 0
        }
        resolve(a) {
            nd(this);
            this.h = 1;
            this.l = a;
            pd(this.i)
        }
    };

    function pd(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var od = class {
        constructor(a) {
            this.h = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            pd(this)
        }
    };
    const rd = class {
        constructor(a) {
            this.h = a.slice(0)
        }
        forEach(a) {
            this.h.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new rd(Aa(this.h, a))
        }
        apply(a) {
            return new rd(a(this.h.slice(0)))
        }
        sort(a) {
            return new rd(this.h.slice(0).sort(a))
        }
        get(a) {
            return this.h[a]
        }
        add(a) {
            const b = this.h.slice(0);
            b.push(a);
            return new rd(b)
        }
    };

    function sd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const ud = class {
        constructor() {
            this.h = {};
            this.i = {}
        }
        set(a, b) {
            const c = td(a);
            this.h[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = td(a);
            return void 0 !== this.h[a] ? this.h[a] : b
        }
        clear() {
            this.h = {};
            this.i = {}
        }
    };

    function td(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };

    function vd(a) {
        return new wd({
            value: a
        }, null)
    }

    function xd(a) {
        return new wd(null, a)
    }

    function yd(a) {
        try {
            return vd(a())
        } catch (b) {
            return xd(b)
        }
    }

    function zd(a) {
        return null != a.h ? a.h.value : null
    }

    function Ad(a, b) {
        null != a.h && b(a.h.value);
        return a
    }

    function Bd(a, b) {
        null != a.h || b(a.i);
        return a
    }
    class wd {
        constructor(a, b) {
            this.h = a;
            this.i = b
        }
        map(a) {
            return null != this.h ? (a = a(this.h.value), a instanceof wd ? a : vd(a)) : this
        }
    };
    const Cd = class {
        constructor(a) {
            this.h = new ud;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.h.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.h.h[td(a)]
        }
    };
    class Dd {
        constructor() {
            this.h = new ud
        }
        set(a, b) {
            let c = this.h.get(a);
            c || (c = new Cd, this.h.set(a, c));
            c.add(b)
        }
    };
    var J = class extends E {
            constructor(a) {
                super(a, -1, Ed)
            }
            getId() {
                return r(this, 3)
            }
        },
        Ed = [4];
    class Fd {
        constructor({
            Wa: a,
            Jb: b,
            Qb: c,
            jb: d
        }) {
            this.h = b;
            this.l = new rd(a || []);
            this.j = d;
            this.i = c
        }
    };
    const Hd = a => {
            const b = [],
                c = a.l;
            c && c.h.length && b.push({
                Y: "a",
                ea: Gd(c)
            });
            null != a.h && b.push({
                Y: "as",
                ea: a.h
            });
            null != a.i && b.push({
                Y: "i",
                ea: String(a.i)
            });
            null != a.j && b.push({
                Y: "rp",
                ea: String(a.j)
            });
            b.sort(function(d, e) {
                return d.Y.localeCompare(e.Y)
            });
            b.unshift({
                Y: "t",
                ea: "aa"
            });
            return b
        },
        Gd = a => {
            a = a.h.slice(0).map(Id);
            a = JSON.stringify(a);
            return Nc(a)
        },
        Id = a => {
            const b = {};
            null != r(a, 7) && (b.q = r(a, 7));
            null != r(a, 2, !1) && (b.o = r(a, 2));
            null != r(a, 5, !1) && (b.p = r(a, 5));
            return b
        };
    var Jd = class extends E {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return t(this, 1, a)
        }
    };

    function Kd(a) {
        const b = [].slice.call(arguments).filter(bc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ia || []);
            d = Object.assign(d, e.Na)
        });
        return new Ld(c, d)
    }

    function Md(a) {
        switch (a) {
            case 1:
                return new Ld(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Ld(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Ld(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Ld(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Nd(a) {
        if (null == a) var b = null;
        else {
            var c = Hd(a);
            a = [];
            for (b of c) c = String(b.ea), a.push(b.Y + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Ld(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Ld {
        constructor(a, b) {
            this.Ia = a;
            this.Na = b
        }
    };
    const Od = new Ld(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });

    function Qd(a, b, c = null, d = !1) {
        Rd(a, b, c, d)
    }

    function Rd(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Hc("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = xa(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                fc(e, "load", f);
                fc(e, "error", f)
            };
            ec(e, "load", f);
            ec(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Td = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            F(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Sd(c)
        },
        Sd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Qd(b, a, void 0, !1)
        };

    function Ud(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Vd(a, b, c, d, e) {
        const f = [];
        F(a, function(g, h) {
            (g = Wd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Wd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Wd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Vd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Xd(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Yd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Xd(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Vd(h[l], a.j, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.j;
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
    class Zd {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.h = []
        }
    };

    function $d() {
        var a = ae,
            b = n.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function be(a, b, c, d = !1, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Zd ? f = c : (f = new Zd, F(c, (h, l) => {
                var k = f;
                const m = k.l++;
                h = Ud(l, h);
                k.h.push(m);
                k.i[m] = h
            }));
            const g = Yd(f, "/pagead/gen_204?id=" + b + "&");
            g && Qd(n, g)
        } catch (f) {}
    }
    class ce {
        constructor() {
            this.h = Math.random()
        }
    };
    var de = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function ee(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new fe;
        return a.google_reactive_ads_global_state
    }
    class fe {
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
            this.floatingAdsStacking = new ge;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var ge = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var K = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    var he = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        ie = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        je = a => {
            const b = K(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        ke = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var le = class extends E {
            constructor(a) {
                super(a)
            }
        },
        me = class extends E {
            constructor(a) {
                super(a)
            }
            i() {
                return D(this, 2)
            }
        },
        oe = class extends E {
            constructor() {
                super(void 0, -1, ne)
            }
        },
        pe = class extends E {
            constructor(a) {
                super(a)
            }
        },
        qe = class extends E {
            constructor() {
                super()
            }
        },
        ne = [1];
    var te = class extends E {
            constructor(a) {
                super(a, -1, re)
            }
            i() {
                return A(this, se, 1)
            }
        },
        se = class extends E {
            constructor(a) {
                super(a)
            }
        },
        re = [1];
    var ue = class extends E {
        constructor(a) {
            super(a)
        }
    };
    var ve = class extends E {
        constructor(a) {
            super(a)
        }
    };
    var xe = class extends E {
            constructor(a) {
                super(a, -1, we)
            }
        },
        we = [6, 7, 9, 10, 11];

    function ye(a) {
        var b = [];
        sd(a.getElementsByTagName("p"), function(c) {
            100 <= ze(c) && b.push(c)
        });
        return b
    }

    function ze(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        sd(a.childNodes, function(c) {
            b += ze(c)
        });
        return b
    }

    function Ae(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Be(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }
    const Ce = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = Ia(b);
            a = Be(this, a);
            "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = ye(a[c]),
                        e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.h
            })
        }
    };

    function De(a) {
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
    };
    var L = class {
            constructor(a, b = !1) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Ee = class {
            constructor(a, b = 0) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Fe = class {
            constructor(a, b = []) {
                this.h = a;
                this.defaultValue = b
            }
        };
    var Ge = new L(1082, !0),
        He = new L(1220),
        Ie = new L(1214),
        Je = new Ee(1130, 100),
        Ke = new class {
            constructor(a, b = "") {
                this.h = a;
                this.defaultValue = b
            }
        }(14),
        Le = new L(316),
        Me = new L(1207, !0),
        Ne = new L(313),
        Oe = new L(369),
        Pe = new L(1171),
        Qe = new L(1201, !0),
        Re = new L(217),
        Se = new L(1198, !0),
        Te = new L(1216),
        Ue = new L(1215),
        Ve = new L(1086),
        We = new Ee(1079, 5),
        Xe = new Fe(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Ye = new L(203),
        Ze = new L(84),
        $e = new L(1974),
        af = new L(1162),
        bf = new L(1120),
        cf = new Ee(1114, 1),
        df = new Ee(1110, 5),
        ef = new Ee(1111, 5),
        ff = new Ee(1112, 5),
        gf = new Ee(1113, 5),
        hf = new Ee(1104),
        jf = new Ee(1108),
        kf = new Ee(1106),
        lf = new Ee(1107),
        mf = new Ee(1105),
        nf = new L(491815314),
        of = new Ee(1115, -1),
        pf = new L(1121),
        qf = new L(1928),
        rf = new L(1941),
        sf = new L(370946349),
        tf = new L(392736476),
        uf = new Ee(406149835),
        vf = new Fe(1932),
        wf = new Ee(1935);
    var M = a => {
        var b = "qa";
        if (a.qa && a.hasOwnProperty(b)) return a.qa;
        b = new a;
        return a.qa = b
    };
    var xf = class {
            constructor() {
                const a = {};
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.l = (b, c) => null != a[b] ? a[b] : c;
                this.h = (b, c) => null != a[b] ? a[b] : c;
                this.i = (b, c) => null != a[b] ? a[b] : c;
                this.m = () => {}
            }
        },
        N = a => M(xf).j(a.h, a.defaultValue),
        O = a => M(xf).l(a.h, a.defaultValue);

    function yf(a, b, c) {
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
        De(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function zf(a, b) {
        const c = e => {
                e = Af(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Af(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Bf(a.previousSibling, c),
                    ja: e => Bf(e.previousSibling, c),
                    ma: 0
                };
            case 2:
                return {
                    init: Bf(a.lastChild, c),
                    ja: e => Bf(e.previousSibling, c),
                    ma: 0
                };
            case 3:
                return {
                    init: Bf(a.nextSibling, d),
                    ja: e => Bf(e.nextSibling, d),
                    ma: 3
                };
            case 1:
                return {
                    init: Bf(a.firstChild, d),
                    ja: e => Bf(e.nextSibling, d),
                    ma: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Af(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Bf(a, b) {
        return a && b(a) ? a : null
    };
    var Cf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Df = a => "string" === typeof a,
        Ef = a => void 0 === a;
    var Gf = class extends E {
            constructor(a) {
                super(a, -1, Ff)
            }
        },
        Ff = [2, 8],
        Hf = [3, 4, 5],
        If = [6, 7];
    var Jf;
    Jf = {
        Ib: 0,
        Sa: 3,
        Ta: 4,
        Ua: 5
    };
    var Kf = Jf.Sa,
        Lf = Jf.Ta,
        Mf = Jf.Ua;
    const Nf = a => null != a ? !a : a,
        Of = (a, b) => {
            let c = !1;
            for (let d = 0; d < a.length; d++) {
                const e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Qf = (a, b) => {
            var c = A(a, Gf, 2);
            if (!c.length) return Pf(a, b);
            a = w(a, 1);
            if (1 === a) return Nf(Qf(c[0], b));
            c = Ba(c, d => () => Qf(d, b));
            switch (a) {
                case 2:
                    return Of(c, !1);
                case 3:
                    return Of(c, !0)
            }
        },
        Pf = (a, b) => {
            const c = Cb(a, Hf);
            a: {
                switch (c) {
                    case Kf:
                        var d = w(a, Db(a, Hf, 3));
                        break a;
                    case Lf:
                        d = w(a, Db(a, Hf, 4));
                        break a;
                    case Mf:
                        d = w(a, Db(a, Hf, 5));
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e =
                        b(...yb(a, 8))
                } catch (f) {
                    return
                }
                b = w(a, 1);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = C(a, Db(a, If, 7));
                else a: {
                    switch (c) {
                        case Lf:
                            a = Kb(a, Db(a, If, 6));
                            break a;
                        case Mf:
                            a = C(a, Db(a, If, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === qa(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return Df(a) && Df(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === qa(String(e), a);
                        case 11:
                            return null != e && 1 === qa(String(e), a)
                    }
                }
            }
        };
    var Rf = (a, b) => !a || !(!b || !Qf(a, b));
    var Tf = class extends E {
            constructor(a) {
                super(a, -1, Sf)
            }
        },
        Sf = [4];
    var Uf = class extends E {
        constructor(a) {
            super(a)
        }
    };
    var Wf = class extends E {
            constructor(a) {
                super(a, -1, Vf)
            }
        },
        Vf = [5],
        Xf = [1, 2, 3, 6, 7];

    function Yf(a, b) {
        return t(a, 1, b)
    }

    function Zf(a, b) {
        return zb(a, 2, b)
    }
    var ag = class extends E {
            constructor() {
                super(void 0, -1, $f)
            }
            T() {
                return w(this, 1)
            }
        },
        $f = [2];

    function bg(a, b) {
        return t(a, 1, b)
    }
    var cg = class extends E {
        constructor() {
            super()
        }
    };

    function dg(a, b) {
        return t(a, 1, b)
    }

    function eg(a, b) {
        return t(a, 2, b)
    }
    var fg = class extends E {
        constructor() {
            super()
        }
        getWidth() {
            return B(r(this, 1), 0)
        }
        getHeight() {
            return B(r(this, 2), 0)
        }
    };

    function gg(a, b) {
        return Hb(a, 1, b)
    }

    function hg(a, b) {
        return Hb(a, 2, b)
    }

    function ig(a, b) {
        Hb(a, 3, b)
    }
    var jg = class extends E {
        constructor() {
            super()
        }
    };
    var kg = class extends E {
        constructor() {
            super()
        }
    };

    function lg(a, b) {
        return Ib(a, 4, mg, b)
    }

    function ng(a, b) {
        return Ib(a, 9, mg, b)
    }
    var og = class extends E {
            constructor() {
                super()
            }
        },
        mg = [4, 8, 5, 6, 9];

    function pg(a, b) {
        return Hb(a, 1, b)
    }

    function qg(a, b) {
        return Jb(a, 2, b)
    }

    function rg(a, b) {
        return zb(a, 4, b)
    }

    function sg(a, b) {
        return Jb(a, 5, b)
    }

    function tg(a, b) {
        return Ab(a, 6, b)
    }
    var vg = class extends E {
        constructor() {
            super(void 0, -1, ug)
        }
    };

    function wg(a, b) {
        return Ab(a, 1, b)
    }

    function xg(a, b) {
        return Ab(a, 2, b)
    }
    var Ag = class extends E {
            constructor() {
                super()
            }
            T() {
                return w(this, 1)
            }
        },
        Bg = class extends E {
            constructor() {
                super()
            }
        },
        ug = [2, 4, 5],
        Cg = [1, 2];
    var Eg = class extends E {
            constructor() {
                super(void 0, -1, Dg)
            }
        },
        Gg = class extends E {
            constructor() {
                super(void 0, -1, Fg)
            }
        },
        Dg = [2, 3],
        Fg = [5],
        Hg = [1, 2, 3, 4];

    function Ig(a, b) {
        return Ib(a, 4, Jg, b)
    }
    var Kg = class extends E {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return B(r(this, 2), 0)
            }
        },
        Jg = [4, 5, 7];

    function Lg(a, ...b) {
        Mg(a, ...b.map(c => ({
            Ra: 4,
            message: c
        })))
    }

    function Ng(a, ...b) {
        Mg(a, ...b.map(c => ({
            Ra: 7,
            message: c
        })))
    };

    function Og(a) {
        return JSON.stringify([a.map(b => [{
            [b.Ra]: b.message.toJSON()
        }])])
    };
    var Pg = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Qg() {
        this.j = this.j;
        this.l = this.l
    }
    Qg.prototype.j = !1;

    function Rg(a, b) {
        a.j ? b() : (a.l || (a.l = []), a.l.push(b))
    }
    Qg.prototype.h = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };

    function Sg(a, b, c, d) {
        ec(b, c, d);
        Rg(a, () => fc(b, c, d))
    }

    function Tg(a, b) {
        1 !== a.state && (a.state = 1, a.R && a.R(b))
    }

    function Ug(a) {
        a.s.document.visibilityState ? Sg(a, a.s.document, "visibilitychange", b => {
            "hidden" === a.s.document.visibilityState && Tg(a, b);
            "visible" === a.s.document.visibilityState && (a.state = 0)
        }) : "onpagehide" in a.s ? (Sg(a, a.s, "pagehide", b => {
            Tg(a, b)
        }), Sg(a, a.s, "pageshow", () => {
            a.state = 0
        })) : Sg(a, a.s, "beforeunload", b => {
            Tg(a, b)
        })
    }

    function Vg(a, b) {
        a.R || Ug(a);
        a.R = b
    }
    var Wg = class extends Qg {
        constructor(a) {
            super();
            this.s = a;
            this.state = 0;
            this.R = null
        }
    };

    function Mg(a, ...b) {
        a.u && 65536 <= Og(a.h.concat(b)).length && Xg(a);
        a.h.push(...b);
        a.h.length >= a.m && Xg(a);
        a.h.length && null === a.i && (a.i = setTimeout(() => {
            Xg(a)
        }, a.B))
    }

    function Yg(a, b, c, d) {
        a.j || (a.j = new Wg(b), Vg(a.j, () => {
            for (const e of a.l) e();
            c()
        }));
        d && 1 !== a.j.state && a.l.push(d)
    }

    function Xg(a) {
        null !== a.i && (clearTimeout(a.i), a.i = null);
        if (a.h.length) {
            var b = Og(a.h);
            a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.h = []
        }
    }

    function Zg(a, b, c) {
        Yg(a, b, () => {
            Xg(a)
        }, c)
    }
    var $g = class {
            constructor(a, b, c) {
                this.v = Pg;
                this.B = a;
                this.m = b;
                this.u = c;
                this.l = [];
                this.h = [];
                this.i = null
            }
        },
        ah = class extends $g {
            constructor(a = 1E3, b = 100, c = !1) {
                super(a, b, c && !0)
            }
        };

    function bh(a, b) {
        b = Ab(b, 1, Date.now());
        var c = Yc(window);
        b = Ab(b, 2, c);
        return Ab(b, 6, a.i)
    }

    function ch(a, b, c, d, e, f) {
        const g = xg(wg(new Ag, b), c);
        b = tg(qg(pg(sg(rg(new vg, d), e), g), a.h.slice()), f);
        b = Ig(new Kg, b);
        a.l && Lg(a.j, bh(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(h => h.T() === g.T() && w(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function dh(a, b, c, d) {
        if (a.m) {
            var e = new Eg;
            b = Jb(e, 2, b);
            c = Jb(b, 3, c);
            d && Ab(c, 1, d);
            d = new Kg;
            d = Ib(d, 7, Jg, c);
            a.l && Lg(a.j, bh(a, d))
        }
    }
    var eh = class {
        constructor(a, b, c, d = new ah(b)) {
            this.i = a;
            this.m = c;
            this.j = d;
            this.h = [];
            this.l = 0 < this.i && Mc() < 1 / this.i
        }
    };
    var fh = class {
        constructor() {
            this.h = {
                [Kf]: {},
                [Lf]: {},
                [Mf]: {}
            }
        }
    };
    var gh = /^true$/.test("false"),
        hh = (a, b) => {
            switch (b) {
                case 1:
                    return w(a, Db(a, Xf, 1));
                case 2:
                    return w(a, Db(a, Xf, 2));
                case 3:
                    return w(a, Db(a, Xf, 3));
                case 6:
                    return w(a, Db(a, Xf, 6));
                default:
                    return null
            }
        },
        ih = (a, b) => {
            if (!a) return null;
            switch (b) {
                case 1:
                    return D(a, 1);
                case 7:
                    return C(a, 3);
                case 2:
                    return Kb(a, 2);
                case 3:
                    return C(a, 3);
                case 6:
                    return yb(a, 4);
                default:
                    return null
            }
        };
    const jh = cc(() => {
        if (!gh) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (a) {}
        return {}
    });
    var nh = (a, b, c, d = 0) => {
        M(kh).j[d] = M(kh).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = jh();
        if (null != e[b]) return e[b];
        b = lh(d)[b];
        if (!b) return c;
        b = new Wf(b);
        b = mh(b);
        a = ih(b, a);
        return null != a ? a : c
    };
    const mh = a => {
        const b = M(fh).h;
        if (b) {
            const c = Ea(A(a, Uf, 5), d => Rf(z(d, Gf, 1), b));
            if (c) return z(c, Tf, 2) ? ? null
        }
        return z(a, Tf, 4) ? ? null
    };
    class kh {
        constructor() {
            this.i = {};
            this.l = [];
            this.j = {};
            this.h = new Map
        }
    }
    var oh = (a, b = !1, c) => !!nh(1, a, b, c),
        ph = (a, b = 0, c) => {
            a = Number(nh(2, a, b, c));
            return isNaN(a) ? b : a
        },
        qh = (a, b = "", c) => nh(3, a, b, c),
        rh = (a, b = [], c) => nh(6, a, b, c),
        lh = a => M(kh).i[a] || (M(kh).i[a] = {});
    const sh = (a, b) => {
        const c = lh(b);
        F(a, (d, e) => c[e] = d)
    };
    var th = (a, b, c, d, e = !1) => {
            const f = [],
                g = [];
            za(b, h => {
                const l = lh(h);
                za(a, k => {
                    var m = Cb(k, Xf);
                    const u = hh(k, m);
                    if (u) {
                        var v = M(kh).h.get(h) ? .get(u) ? .slice(0) ? ? [];
                        a: {
                            const x = new Gg;
                            switch (m) {
                                case 1:
                                    Bb(x, 1, Hg, u);
                                    break;
                                case 2:
                                    Bb(x, 2, Hg, u);
                                    break;
                                case 3:
                                    Bb(x, 3, Hg, u);
                                    break;
                                case 6:
                                    Bb(x, 4, Hg, u);
                                    break;
                                default:
                                    m = void 0;
                                    break a
                            }
                            zb(x, 5, v);m = x
                        }
                        if (v = m) v = !!M(kh).j[h] ? .has(u);
                        v && f.push(m);
                        if (v = m) v = !!M(kh).h.get(h) ? .has(u);
                        v && g.push(m);
                        e || (m = M(kh), m.h.has(h) || m.h.set(h, new Map), m.h.get(h).has(u) || m.h.get(h).set(u, []), d && m.h.get(h).get(u).push(d));
                        l[u] = k.toJSON()
                    }
                })
            });
            (f.length || g.length) && dh(c, f, g, d ? ? void 0)
        },
        uh = (a, b) => {
            const c = lh(b);
            za(a, d => {
                var e = new Wf(d);
                const f = Cb(e, Xf);
                (e = hh(e, f)) && (c[e] || (c[e] = d))
            })
        },
        vh = () => Ba(Object.keys(M(kh).i), a => Number(a)),
        wh = a => {
            Ha(M(kh).l, a) || sh(lh(4), a)
        };
    class P {
        constructor(a) {
            this.methodName = a
        }
    }
    var xh = new P(1),
        yh = new P(16),
        zh = new P(15),
        Ah = new P(2),
        Bh = new P(3),
        Ch = new P(4),
        Dh = new P(5),
        Eh = new P(6),
        Fh = new P(7),
        Gh = new P(8),
        Hh = new P(9),
        Ih = new P(10),
        Jh = new P(11),
        Kh = new P(12),
        Lh = new P(13),
        Mh = new P(14),
        Q = (a, b, c) => {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        Nh = (a, b, c) => b[a.methodName] || c || (() => {}),
        Oh = a => {
            Q(Dh, oh, a);
            Q(Eh, ph, a);
            Q(Fh, qh, a);
            Q(Gh, rh, a);
            Q(Lh, uh, a);
            Q(zh, wh, a)
        },
        Ph = a => {
            Q(Ch, b => {
                M(fh).h = b
            }, a);
            Q(Hh, (b, c) => {
                    var d = M(fh);
                    d.h[Kf][b] || (d.h[Kf][b] = c)
                },
                a);
            Q(Ih, (b, c) => {
                var d = M(fh);
                d.h[Lf][b] || (d.h[Lf][b] = c)
            }, a);
            Q(Jh, (b, c) => {
                var d = M(fh);
                d.h[Mf][b] || (d.h[Mf][b] = c)
            }, a);
            Q(Mh, b => {
                var c = M(fh);
                for (const d of [Kf, Lf, Mf]) Object.assign(c.h[d], b[d])
            }, a)
        },
        Qh = a => {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };

    function Rh(a, b, c) {
        a.j = Nh(xh, b, () => {});
        a.l = d => Nh(Ah, b, () => [])(d, c);
        a.i = () => Nh(Bh, b, () => [])(c);
        a.h = d => {
            Nh(yh, b, () => {})(d, c)
        }
    }
    class Sh {
        constructor() {
            this.j = () => {};
            this.h = () => {};
            this.l = () => [];
            this.i = () => []
        }
    };
    class Th {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Uh = a => !!(a.error && a.meta && a.id);
    let Vh = null;

    function Wh() {
        if (null === Vh) {
            Vh = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Vh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Vh
    };

    function Xh() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Yh() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    class Zh {
        constructor(a, b) {
            var c = Yh() || Xh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const $h = n.performance,
        ai = !!($h && $h.mark && $h.measure && $h.clearMarks),
        bi = cc(() => {
            var a;
            if (a = ai) a = Wh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ci(a) {
        a && $h && bi() && ($h.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), $h.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class di {
        constructor() {
            this.i = [];
            this.j = n || n;
            let a = null;
            n && (n.google_js_reporting_queue = n.google_js_reporting_queue || [], this.i = n.google_js_reporting_queue, a = n.google_measure_js_timing);
            this.h = bi() || (null != a ? a : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Zh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            $h && bi() && $h.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Yh() || Xh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                $h && bi() && $h.mark(b);
                !this.h || 2048 < this.i.length ||
                    this.i.push(a)
            }
        }
    };
    var ei = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Ec(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var fi = (a, b) => {
        do {
            const c = Ic(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function gi(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = H(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var hi = (a, b) => !((Qc.test(b.google_ad_width) || Pc.test(a.style.width)) && (Qc.test(b.google_ad_height) || Pc.test(a.style.height))),
        ji = (a, b) => (a = ii(a, b)) ? a.y : 0,
        ii = (a, b) => {
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
        ki = a => {
            let b = 0;
            for (let c in Cf) - 1 != a.indexOf(c) && (b |= Cf[c]);
            return b
        },
        li = (a, b, c, d, e) => {
            if (a !== a.top) return Fc(a) ? 3 : 16;
            if (!(488 > K(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = K(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = K(a).clientWidth; c; c = c.parentElement)
                        if ((d = Ic(c, a)) && (e = H(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        mi = (a, b, c, d) => {
            const e = li(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || fi(c, b) ? (b = K(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        ni = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const oi = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Ic(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        pi = (a, b, c) => {
            a = ii(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var qi = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Ic(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            ni(b, c, "0px");
            b.style.width = K(a).clientWidth + "px";
            if (0 !== pi(a, b, c)) {
                ni(b, c, "0px");
                var d = pi(a, b, c);
                ni(b, c, -1 * d + "px");
                a = pi(a, b, c);
                0 !== a && a !== d && ni(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var ri = class {
        constructor(a, b) {
            this.J = a;
            this.j = b
        }
        height() {
            return this.j
        }
        h(a) {
            return 300 < a && 300 < this.j ? this.J : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var si = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Ic(a, b)) && e[c] && d(e[c]) || null
        },
        ti = a => b => b.J <= a,
        wi = (a, b, c, d) => {
            const e = a && ui(c, b),
                f = vi(b, d);
            return g => !(e && g.height() >= f)
        },
        xi = a => b => b.height() <= a,
        ui = (a, b) => ji(a, b) < K(b).clientHeight - 100,
        yi = (a, b) => {
            var c = si(b, a, "height", H);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = si(b, a, "height", H);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && H(b.style.height)) && (c = Math.min(c, d)), (d = si(b, a, "maxHeight", H)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const vi = (a, b) => {
        const c = 0 == id(a);
        return b && c ? Math.max(250, 2 * K(a).clientHeight / 3) : 250
    };
    var zi = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const Ai = RegExp("(^| )adsbygoogle($| )");

    function Bi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = vc(d.Wb);
            a[e] = d.value
        }
    };
    class Ci {
        constructor() {
            var a = fd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.h = null;
            this.j = !1;
            this.l = Math.random();
            this.i = this.H;
            this.m = a
        }
        Oa(a) {
            this.h = a
        }
        u(a) {
            this.j = a
        }
        Pa(a) {
            this.i = a
        }
        H(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.l : Math.random()) > c) return !1;
            Uh(b) || (b = new Th(b, {
                context: a,
                id: e
            }));
            if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (Gc(n.document, this.m), n.error_rep_loaded = !0);
            return !1
        }
        fa(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        sa(a, b) {
            return (...c) => this.fa(a, () => b.apply(void 0, c))
        }
        ga(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    const Di = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Ei = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Yh();
                let l, k = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (m) {
                    k = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Di({
                        label: a.toString(),
                        value: h,
                        duration: (Yh() || 0) - h,
                        type: k,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        Fi = (a, b) => Ei(a, b, (c, d) => {
            (new Ci).H(c, d)
        }, void 0, !1);

    function Gi(a, b, c) {
        return Ei(a, b, void 0, c, !0).apply()
    }

    function Hi(a) {
        if (!a) return null;
        var b = r(a, 7);
        if (r(a, 1) || a.getId() || 0 < yb(a, 4).length) {
            b = yb(a, 4);
            var c = r(a, 3),
                d = r(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Ae(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Ae(b[c]);
            a = (b = e) ? new Ce(b, r(a, 2), r(a, 5), Ii(r(a, 6))) : null
        } else a = b ? new Ce(b, r(a, 2), r(a, 5), Ii(r(a, 6))) : null;
        return a
    }
    var Ji = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ii(a) {
        return null == a ? a : Ji[a]
    }
    var Ki = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Li(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Mi(a) {
        a = Li(a);
        return a.optimization = a.optimization || {}
    };
    var Ni = class extends E {
            constructor(a) {
                super(a)
            }
            getName() {
                return r(this, 4)
            }
        },
        Oi = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Pi = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Qi = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Ri = [1, 2, 3];
    var Ui = class extends E {
            constructor(a) {
                super(a, -1, Si)
            }
            i() {
                return z(this, Ti, 3)
            }
        },
        Ti = class extends E {
            constructor(a) {
                super(a)
            }
            i() {
                return Lb(this, Vi, 2, Wi)
            }
        },
        Vi = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Si = [1, 4],
        Wi = [1, 2];
    var Yi = class extends E {
            constructor(a) {
                super(a, -1, Xi)
            }
        },
        Zi = class extends E {
            constructor(a) {
                super(a)
            }
        },
        aj = class extends E {
            constructor(a) {
                super(a, -1, $i)
            }
        },
        bj = class extends E {
            constructor(a) {
                super(a)
            }
        },
        cj = class extends E {
            constructor(a) {
                super(a)
            }
        },
        dj = class extends E {
            constructor(a) {
                super(a)
            }
        },
        ej = class extends E {
            constructor(a) {
                super(a)
            }
            i() {
                return xb(this, 23)
            }
        },
        Xi = [1, 2, 5, 7],
        $i = [2, 5, 6, 11];
    var fj = class extends E {
        constructor(a) {
            super(a)
        }
    };
    var gj = a => {
        switch (r(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = z(a, J, 1), null == b ? b = null : (a = r(a, 2), b = null == a ? null : new Fd({
                    Wa: [b],
                    jb: a
                }));
                return null != b ? vd(b) : xd(Error("Missing dimension when creating placement id"));
            case 3:
                return xd(Error("Missing dimension when creating placement id"));
            default:
                return xd(Error("Invalid type: " + r(a, 8)))
        }
    };
    var hj = (a, b) => {
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

    function ij(a, b) {
        const c = new Dd,
            d = new Cd;
        b.forEach(e => {
            if (Lb(e, Oi, 1, Ri)) {
                e = Lb(e, Oi, 1, Ri);
                if (z(e, ue, 1) && z(z(e, ue, 1), J, 1) && z(e, ue, 2) && z(z(e, ue, 2), J, 1)) {
                    const g = jj(a, z(z(e, ue, 1), J, 1)),
                        h = jj(a, z(z(e, ue, 2), J, 1));
                    if (g && h)
                        for (var f of hj({
                                anchor: g,
                                position: r(z(e, ue, 1), 2)
                            }, {
                                anchor: h,
                                position: r(z(e, ue, 2), 2)
                            })) c.set(ea(f.anchor), f.position)
                }
                z(e, ue, 3) && z(z(e, ue, 3), J, 1) && (f = jj(a, z(z(e, ue, 3), J, 1))) && c.set(ea(f), r(z(e, ue, 3), 2))
            } else Lb(e, Pi, 2, Ri) ? kj(a, Lb(e, Pi, 2, Ri), c) : Lb(e, Qi, 3, Ri) && lj(a, Lb(e, Qi, 3, Ri), d)
        });
        return new mj(c,
            d)
    }
    class mj {
        constructor(a, b) {
            this.i = a;
            this.h = b
        }
    }
    const kj = (a, b, c) => {
            z(b, ue, 2) ? (b = z(b, ue, 2), (a = jj(a, z(b, J, 1))) && c.set(ea(a), r(b, 2))) : z(b, J, 1) && (a = nj(a, z(b, J, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        lj = (a, b, c) => {
            z(b, J, 1) && (a = nj(a, z(b, J, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        jj = (a, b) => (a = nj(a, b)) && 0 < a.length ? a[0] : null,
        nj = (a, b) => (b = Hi(b)) ? b.query(a) : null;

    function oj(a, b, c) {
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
            if (pj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.h.add(d));
        return !1
    }

    function qj(a) {
        a = rj(a);
        return a.has("all") || a.has("after")
    }

    function sj(a) {
        a = rj(a);
        return a.has("all") || a.has("before")
    }

    function rj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function pj(a) {
        const b = rj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var tj = class {
        constructor() {
            this.h = new Set
        }
    };

    function uj(a, b) {
        if (!a) return !1;
        a = Ic(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function vj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function wj(a) {
        return !!a.nextSibling || !!a.parentNode && wj(a.parentNode)
    };

    function xj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = yj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function yj(a) {
        let b = "";
        F(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };

    function zj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    const Aj = a => {
        const b = zj(a);
        return b ? Aa(Ba(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var Bj = a => {
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

    function Cj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        const c = A(a.i, xe, 1);
        a.j = 0;
        const d = Dj(a.B);
        if (xj(a.h.location, "google_audio_sense")) {
            var e = new le;
            e = t(e, 1, 1);
            var f = new me;
            f = t(f, 2, !0);
            e = Hb(e, 2, f);
            f = new oe;
            var g = new pe;
            var h = t(g, 1, 1);
            kb(f);
            g = Gb(f, pe, 1, !1, !1);
            h = null != h ? h : new pe;
            var l = wb(f, 1, 2, void 0, !1);
            g.push(h);
            l.push(h.A);
            fb(h) && Ya(l, 8);
            g = new qe;
            g = t(g, 1, !0);
            f = Hb(f, 2, g);
            e = Hb(e, 3, f)
        } else e = z(a.i, le, 27);
        if (f = e)
            if (g = z(a.i, te, 6) ? .i() || [], e = a.h, 1 == w(f, 1) && z(f, me, 2) ? .i() && 0 != g.length) {
                var k;
                f = [];
                for (k of g)
                    if (g = Hi(z(k,
                            J, 1) || null)) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(he).filter(ie(f)).filter(je(e));
                f.sort(ke);
                if (k = f[0] || null) f = e.document.createElement("div"), f.id = "google-auto-placed-read-aloud-player-reserved", Uc(f, {
                    width: "100%",
                    height: "65px"
                }), k.insertBefore(f, k.firstChild), Li(e).audioSenseSpaceReserved = !0
            }
        k = a.h;
        var m;
        try {
            var u = (m = k.localStorage.getItem("google_ama_settings")) ? Qb(fj, m) : null
        } catch (x) {
            u = null
        }
        m = null !== u && D(u, 2, !1);
        u = Li(k);
        m && (u.eatf = !0, cd(7, [!0, 0, !1]));
        b: {
            f = {
                cb: !1,
                eb: !1
            };h = Ia(k.document.querySelectorAll(".google-auto-placed"));
            l = Ia(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"));
            const x = Ia(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));g = (Aj(k) || Ia(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ia(k.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const y = Ia(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                G = Ia(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                Fa = Ia(k.document.querySelectorAll("div.googlepublisherpluginad")),
                X = Ia(k.document.querySelectorAll("html > ins.adsbygoogle"));e = [].concat(Ia(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ia(k.document.querySelectorAll("body ins.adsbygoogle")));m = [];
            for (const [Ga, ya] of [
                    [f.Lb, h],
                    [f.cb, l],
                    [f.Ob, x],
                    [f.Mb, g],
                    [f.Pb, y],
                    [f.Kb, G],
                    [f.Nb, Fa],
                    [f.eb, X]
                ]) f = ya,
            !1 === Ga ? m = m.concat(f) : e = e.concat(f);e = Bj(e);m = Bj(m);
            e = e.slice(0);
            for (v of m)
                for (m = 0; m < e.length; m++)(v.contains(e[m]) || e[m].contains(v)) && e.splice(m, 1);
            var v = e;m = K(k).clientHeight;
            for (k = 0; k < v.length; k++)
                if (!(v[k].getBoundingClientRect().top > m)) {
                    v = !0;
                    break b
                }
            v = !1
        }
        v = v ? u.eatfAbg = !0 : !1;
        if (v) return !0;
        v = new Cd([2]);
        for (u = 0; u < c.length; u++) {
            m = a;
            e = c[u];
            k = u;
            f = b;
            g = d;
            h = v;
            if (z(e, Jd, 4) && h.contains(r(z(e, Jd, 4), 1)) && 1 === r(e, 8) && Ej(e, g)) {
                m.j++;
                if (f = Fj(m, e, f, g)) g = Li(m.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), z(e, J, 1) && null != r(z(e, J, 1), 5) && (g.numPostPlacementsPlaced ?
                    g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: k,
                    element: f.ia
                }), cd(7, [!1, m.j, !0]);
                m = f
            } else m = null;
            if (m) return !0
        }
        cd(7, [!1, a.j, !1]);
        return !1
    }

    function Fj(a, b, c, d) {
        if (!Ej(b, d) || 1 != r(b, 8)) return null;
        d = z(b, J, 1);
        if (!d) return null;
        d = Hi(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Ki[r(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = uj(vj(d), f);
                        break a;
                    case 3:
                        f = uj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = uj(g ? 1 == g.nodeType ? g : vj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !wj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !De(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.u;
            f = r(b, 2);
            g = ea(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(ea(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(ea(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.v;
            f = r(b, 2);
            a: switch (f) {
                case 1:
                    g = qj(d.previousElementSibling) || sj(d);
                    break a;
                case 4:
                    g = qj(d) || sj(d.nextElementSibling);
                    break a;
                case 2:
                    g = sj(d.firstElementChild);
                    break a;
                case 3:
                    g = qj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || oj(c, d, f)
        }
        if (c) return null;
        f = z(b, ve, 3);
        c = {};
        f && (c.Qa = r(f, 1), c.Ha = r(f, 2), c.Xa = !!xb(f, 3));
        f = z(b, Jd, 4) && r(z(b, Jd, 4), 2) ? r(z(b, Jd, 4), 2) : null;
        f = Md(f);
        g = null != r(b, 12, !1) ? r(b, 12) : null;
        g = null == g ? null : new Ld(null, {
            google_ml_rank: g
        });
        b = Gj(a, b);
        b = Kd(a.m, f, g, b);
        f = a.h;
        a = a.G;
        var h = f.document,
            l = c.Xa || !1;
        g = (new xc(h)).createElement("DIV");
        const k = g.style;
        k.width = "100%";
        k.height = "auto";
        k.clear = l ? "both" : "none";
        l = g.style;
        l.textAlign = "center";
        c.ib && Bi(l, c.ib);
        h = (new xc(h)).createElement("INS");
        l = h.style;
        l.display = "block";
        l.margin = "auto";
        l.backgroundColor =
            "transparent";
        c.Qa && (l.marginTop = c.Qa);
        c.Ha && (l.marginBottom = c.Ha);
        c.Va && Bi(l, c.Va);
        g.appendChild(h);
        c = {
            pa: g,
            ia: h
        };
        c.ia.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ia) c.pa.className = h.join(" ");
        h = c.ia;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.pa;
                if (N(Ne)) {
                    {
                        const G = zf(d, e);
                        if (G.init) {
                            var u = G.init;
                            for (d = u; d = G.ja(d);) u = d;
                            var v = {
                                anchor: u,
                                position: G.ma
                            }
                        } else v = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] =
                        0;
                    yf(m, v.anchor, v.position)
                } else yf(m, d, e);
                b: {
                    var x = c.ia;x.dataset.adsbygoogleStatus = "reserved";x.className += " adsbygoogle-noablate";m = {
                        element: x
                    };
                    var y = b && b.Na;
                    if (x.hasAttribute("data-pub-vars")) {
                        try {
                            y = JSON.parse(x.getAttribute("data-pub-vars"))
                        } catch (G) {
                            break b
                        }
                        x.removeAttribute("data-pub-vars")
                    }
                    y && (m.params = y);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (G) {
                (x = c.pa) && x.parentNode && (y = x.parentNode, y.removeChild(x), De(y) && (y.style.display = y.getAttribute("data-init-display") || "none"));
                x = !1;
                break a
            }
            x = !0
        }
        return x ? c : null
    }

    function Gj(a, b) {
        return zd(Bd(gj(b).map(Nd), c => {
            Li(a.h).exception = c
        }))
    }
    const Hj = class {
        constructor(a, b, c, d, e) {
            this.h = a;
            this.G = b;
            this.i = c;
            this.m = e || null;
            this.u = (this.B = d) ? ij(a.document, A(d, Ni, 5)) : ij(a.document, []);
            this.v = new tj;
            this.j = 0;
            this.l = !1
        }
    };

    function Dj(a) {
        const b = {};
        a && wb(a, 6, 0, !1, fb(a)).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Ej(a, b) {
        return a && void 0 !== Eb(a, Jd, 4, !1) && b[r(z(a, Jd, 4), 2)] ? !1 : !0
    };
    var Ij = class extends E {
        constructor(a) {
            super(a)
        }
    };
    const Jj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Kj = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        Lj = class {
            constructor(a, b, c) {
                this.url = a;
                this.s = b;
                this.Ka = !!c;
                this.depth = null
            }
        };

    function Mj(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class Nj {
        constructor(a = null) {
            this.m = ae;
            this.h = null;
            this.l = this.H;
            this.i = a;
            this.j = !1
        }
        Pa(a) {
            this.l = a
        }
        Oa(a) {
            this.h = a
        }
        u(a) {
            this.j = a
        }
        fa(a, b, c) {
            let d, e;
            try {
                this.i && this.i.h ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    ci(e), b = this.l(a, new Th(f, {
                        message: Mj(f)
                    }), void 0, c)
                } catch (g) {
                    this.H(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        sa(a, b) {
            return (...c) => this.fa(a, () => b.apply(void 0, c))
        }
        H(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Sa = new Zd;
                var g = Sa;
                g.h.push(1);
                g.i[1] = Ud("context", a);
                Uh(b) || (b = new Th(b, {
                    message: Mj(b)
                }));
                if (b.msg) {
                    g = Sa;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = Ud("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (cb) {}
                if (d) try {
                    d(b)
                } catch (cb) {}
                d = Sa;
                l = [l];
                d.h.push(3);
                d.i[3] = l;
                d = n;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Ec(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Lj(m || "", k));
                    try {
                        d = k.parent
                    } catch (cb) {
                        d = null
                    }
                } while (d && k != d);
                for (let cb = 0, yg = l.length - 1; cb <= yg; ++cb) l[cb].depth = yg - cb;
                k = n;
                if (k.location &&
                    k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var u = l[m];
                        u.url || (u.url = k.location.ancestorOrigins[m - 1] || "", u.Ka = !0)
                    }
                var v = l;
                let zc = new Lj(n.location.href, n, !1);
                k = null;
                const Pd = v.length - 1;
                for (u = Pd; 0 <= u; --u) {
                    var x = v[u];
                    !k && Jj.test(x.url) && (k = x);
                    if (x.url && !x.Ka) {
                        zc = x;
                        break
                    }
                }
                x = null;
                const nm = v.length && v[Pd].url;
                0 != zc.depth && nm && (x = v[Pd]);
                f = new Kj(zc, x);
                if (f.i) {
                    v = Sa;
                    var y = f.i.url || "";
                    v.h.push(4);
                    v.i[4] = Ud("top", y)
                }
                var G = {
                    url: f.h.url || ""
                };
                if (f.h.url) {
                    var Fa =
                        f.h.url.match(Bc),
                        X = Fa[1],
                        Ga = Fa[3],
                        ya = Fa[4];
                    y = "";
                    X && (y += X + ":");
                    Ga && (y += "//", y += Ga, ya && (y += ":" + ya));
                    var zg = y
                } else zg = "";
                X = Sa;
                G = [G, {
                    url: zg
                }];
                X.h.push(5);
                X.i[5] = G;
                be(this.m, e, Sa, this.j, c)
            } catch (Sa) {
                try {
                    be(this.m, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Mj(Sa),
                        url: f && f.h.url
                    }, this.j, c)
                } catch (zc) {}
            }
            return !0
        }
        ga(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    class R extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, R) : this.stack = Error().stack || ""
        }
    };
    let ae, S;
    const Oj = new di;
    var Pj = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || (Oj.h = !1, Oj.i != Oj.j.google_js_reporting_queue && (bi() && za(Oj.i, ci), Oj.i.length = 0))
    };
    (a => {
        ae = a || new ce;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        $d();
        S = new Nj(Oj);
        S.u(!0);
        "complete" == n.document.readyState ? Pj() : Oj.h && ec(n, "load", () => {
            Pj()
        })
    })();
    var Qj = (a, b, c) => S.fa(a, b, c),
        Rj = (a, b) => S.sa(a, b),
        Sj = (a, b, c) => {
            const d = M(Sh).i();
            !b.eid && d.length && (b.eid = d.toString());
            be(ae, a, b, !0, c)
        },
        Tj = (a, b, c, d) => {
            let e;
            Uh(b) ? e = b.msg || Mj(b.error) : e = Mj(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof Th ? b.error : b, c.pbr || (c.pbr = !0, S.H(a, b, .1, d, "puberror")), !1) : S.H(a, b, c, d)
        };

    function Uj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? yd(() => Qb(Ij, c)) : vd(null)
    };

    function Vj() {
        if (Wj) return Wj;
        const a = ed() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Wj = b : a.google_persistent_state_async = Wj = new Xj
    }

    function Yj(a) {
        return Zj[a] || "google_ps_" + a
    }

    function ak(a, b, c) {
        b = Yj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function bk(a, b, c) {
        return ak(a, b, () => c)
    }

    function ck(a) {
        return !!bk(Vj(), 30, a)
    }
    class Xj {
        constructor() {
            this.S = {}
        }
    }
    var Wj = null;
    const Zj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function dk(a) {
        this.h = a || {
            cookie: ""
        }
    }
    dk.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Xb, g = c.Yb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.hb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    dk.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.h.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    dk.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    dk.prototype.clear = function() {
        var a = (this.h.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            hb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function ek(a, b = window) {
        if (xb(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function fk(a) {
        var b = new gk;
        return t(b, 5, a)
    }
    var gk = class extends E {
        constructor() {
            super()
        }
    };
    const hk = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function ik(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = hk(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Td({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function jk(a) {
        if (a.i) return a.i;
        a.i = Sc(a.m, "__tcfapiLocator");
        return a.i
    }

    function kk(a) {
        return "function" === typeof a.m.__tcfapi || null != jk(a)
    }

    function lk(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (jk(a)) {
            mk(a);
            const e = ++a.G;
            a.v[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function mk(a) {
        a.u || (a.u = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, ec(a.m, "message", a.u))
    }
    class nk extends Qg {
        constructor(a) {
            super();
            this.m = a;
            this.i = null;
            this.v = {};
            this.G = 0;
            this.B = !1;
            this.u = null
        }
        h() {
            this.v = {};
            this.u && (fc(this.m, "message", this.u), delete this.u);
            delete this.v;
            delete this.m;
            delete this.i;
            super.h()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = dc(() => a(b));
            let d = 0;
            d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, 500);
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = hk(b), b.internalBlockOnErrors = this.B, g && 0 === b.internalErrorState ||
                    (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                lk(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && lk(this, "removeEventListener", null, a.listenerId)
        }
    };
    var sk = ({
            s: a,
            W: b,
            qb: c,
            R: d,
            ka: e = !1,
            la: f = !1
        }) => {
            b = ok({
                s: a,
                W: b,
                ka: e,
                la: f
            });
            null != b.h || "tcunav" != b.i.message ? d(b) : pk(a, c).then(g => g.map(qk)).then(g => g.map(h => rk(a, h))).then(d)
        },
        ok = ({
            s: a,
            W: b,
            ka: c = !1,
            la: d = !1
        }) => {
            if (!tk({
                    s: a,
                    W: b,
                    ka: c,
                    la: d
                })) return rk(a, fk(!0));
            b = Vj();
            return (b = bk(b, 24)) ? rk(a, qk(b)) : xd(Error("tcunav"))
        };

    function tk({
        s: a,
        W: b,
        ka: c,
        la: d
    }) {
        if (!(d = !d && kk(new nk(a)))) {
            if (c = !c) {
                if (b) {
                    a = Uj(a);
                    if (null != a.h)
                        if ((a = a.h.value) && null != r(a, 1, !1)) b: switch (a = r(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else S.H(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function pk(a, b) {
        return Promise.race([uk(), vk(a, b)])
    }

    function uk() {
        return (new Promise(a => {
            var b = Vj();
            a = {
                resolve: a
            };
            const c = bk(b, 25, []);
            c.push(a);
            b.S[Yj(25)] = c
        })).then(wk)
    }

    function vk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, xd(Error("tcto")))
        })
    }

    function wk(a) {
        return a ? vd(a) : xd(Error("tcnull"))
    }

    function qk(a) {
        if (ik(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return fk(a)
    }

    function rk(a, b) {
        return (a = ek(b, a)) ? vd(a) : xd(Error("unav"))
    };
    var yk = class extends E {
            constructor(a) {
                super(a)
            }
            i() {
                return z(this, xk, 2)
            }
        },
        xk = class extends E {
            constructor(a) {
                super(a, -1, zk)
            }
        },
        zk = [1, 2, 3];
    const Ak = class {
        constructor(a) {
            this.exception = a
        }
    };

    function Bk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Li(e.h);
            A(e.i, xe, 1);
            d.call(c, new Ak(b))
        } catch (f) {
            a = a.i, b = f, nd(a), a.h = 2, a.j = b, pd(a.i)
        }
    }
    var Ck = class {
        constructor(a, b, c) {
            this.j = a;
            this.h = b;
            this.i = c
        }
        start() {
            this.l()
        }
        l() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        Cj(this.h, !0);
                        Bk(this);
                        break;
                    default:
                        Cj(this.h, !1) ? Bk(this) : this.j.setTimeout(ka(this.l, this), 100)
                }
            } catch (a) {
                Bk(this, a)
            }
        }
    };
    var Dk = "a".charCodeAt(),
        Ek = ic(ld),
        Fk = ic(md);

    function Gk(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    }

    function Hk(a) {
        return String.fromCharCode(Dk + Gk(a, 6)) + String.fromCharCode(Dk + Gk(a, 6))
    }

    function Ik(a) {
        let b = Gk(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!Gk(a, 1),
                e = Gk(a, 16);
            if (d)
                for (d = Gk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Jk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Gk(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function Kk(a) {
        const b = Gk(a, 16);
        return !0 === !!Gk(a, 1) ? (a = Ik(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Jk(a, b)
    }
    class Lk {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.h = 0
        }
    };
    var Nk = (a, b) => {
        try {
            var c = Pa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new Lk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = Gk(d, 12);
            c.cmpVersion = Gk(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = Gk(d, 6);
            c.isServiceSpecific = !!Gk(d, 1);
            c.useNonStandardStacks = !!Gk(d, 1);
            c.specialFeatureOptins = Mk(Jk(d, 12, Fk), Fk);
            c.purpose = {
                consents: Mk(Jk(d, 24, Ek), Ek),
                legitimateInterests: Mk(Jk(d, 24, Ek), Ek)
            };
            c.purposeOneTreatment = !!Gk(d, 1);
            c.publisherCC = Hk(d);
            c.vendor = {
                consents: Mk(Kk(d), b),
                legitimateInterests: Mk(Kk(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const Mk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var Ok = class {
        constructor() {
            this.h = {}
        }
    };
    var Pk = class extends E {
            constructor() {
                super()
            }
        },
        Qk = class extends E {
            constructor() {
                super()
            }
        };
    var Rk = class extends E {
            constructor() {
                super()
            }
        },
        Sk = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 25, 26];
    var Tk = class {};
    var Vk = class extends E {
            constructor(a) {
                super(a, -1, Uk)
            }
        },
        Wk = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Xk = class extends E {
            constructor(a) {
                super(a)
            }
        },
        Uk = [7];
    var Yk = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var Zk = class extends Ok {
            constructor() {
                super();
                var a = n.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.h = JSON.parse(a)
                } catch (b) {}
            }
        },
        $k;

    function al(a) {
        return (a = bl(a)) ? z(a, Wk, 4) : null
    }

    function bl(a) {
        if (a = (new dk(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                cl(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? Qb(Vk, b) : null
        } catch (c) {
            return cl(2), null
        }
    }

    function cl(a) {
        new Tk;
        var b = new Qk;
        a = t(b, 7, a);
        b = new Pk;
        a = Hb(b, 1, a);
        b = new Rk;
        Ib(b, 22, Sk, a);
        $k || ($k = new Zk);
        a = $k.h[Yk.key];
        if ("proto" === Yk.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    ic(ld).map(a => Number(a));
    ic(md).map(a => Number(a));

    function dl(a) {
        a.__tcfapiPostMessageReady || el(new fl(a))
    }

    function el(a) {
        a.i = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, (f, g) => {
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
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    }
    var fl = class {
        constructor(a) {
            this.h = a;
            this.i = null
        }
    };
    var gl = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Hc("IFRAME", c);
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

    function hl() {
        var a = window,
            b = N(Pe);
        a.__uspapi || a.frames.__uspapiLocator || (a = new il(a), jl(a), b && kl(a))
    }

    function jl(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", gl(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => ll(a, ...b)))
    }

    function kl(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", gl(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], ma("__tcfapi", (...b) => ml(a, ...b)), dl(a.h))
    }

    function ll(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.m
        }, !0)
    }

    function ml(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.h.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(nl(a, e, null), !0) : d(null, !1);
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
                    d(nl(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function nl(a, b, c) {
        if (!a.j) return null;
        b = Nk(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class il {
        constructor(a) {
            this.h = a;
            this.i = a.document;
            this.m = (a = (a = bl(this.i)) ? z(a, Xk, 5) || null : null) ? r(a, 2) : null;
            this.j = (a = al(this.i)) && null != r(a, 1) ? r(a, 1) : null;
            this.l = (a = al(this.i)) && null != r(a, 2) ? r(a, 2) : null
        }
    };
    const ol = a => {
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
        pl = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var ql = a => {
        a = wb(a, 2, 0, !1, fb(a));
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    };
    const sl = (a, b) => {
            a = pl(ol(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Nc(a),
                d = rl(a);
            return b.find(e => {
                const f = void 0 !== Eb(e, bj, 7, !1) ? r(z(e, bj, 7), 1) : r(e, 1);
                e = void 0 !== Eb(e, bj, 7, !1) ? r(z(e, bj, 7), 2) : 2;
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
        rl = a => {
            const b = {};
            for (;;) {
                b[Nc(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const tl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var ul = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Sj("ama", b, .01)
        },
        vl = a => {
            const b = {};
            F(tl, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var wl = a => {
        a = z(a, Zi, 3);
        return !a || r(a, 1) <= Date.now() ? !1 : !0
    };

    function xl(a) {
        if (N(Le)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Qb(Yi, b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var yl = class extends E {
        constructor(a) {
            super(a)
        }
        i() {
            return z(this, yk, 2)
        }
        l() {
            return D(this, 3)
        }
    };
    var Al = class extends E {
            constructor(a) {
                super(a, -1, zl)
            }
            i() {
                return yb(this, 1)
            }
            l() {
                return z(this, yl, 2)
            }
        },
        zl = [1];
    var Cl = class extends E {
            constructor(a) {
                super(a, -1, Bl)
            }
            getId() {
                return B(r(this, 1), 0)
            }
            T() {
                return w(this, 7)
            }
        },
        Bl = [2];
    var El = class extends E {
            constructor(a) {
                super(a, -1, Dl)
            }
            T() {
                return w(this, 5)
            }
        },
        Dl = [2];
    var Gl = class extends E {
            constructor(a) {
                super(a, -1, Fl)
            }
        },
        Il = class extends E {
            constructor(a) {
                super(a, -1, Hl)
            }
            T() {
                return w(this, 1)
            }
        },
        Jl = class extends E {
            constructor(a) {
                super(a)
            }
            i() {
                return B(r(this, 2), 0)
            }
            l() {
                return B(r(this, 4), 0)
            }
            m() {
                return D(this, 3)
            }
        },
        Fl = [1, 4, 2, 3],
        Hl = [2];
    var Ml = class extends E {
            constructor(a) {
                super(a, -1, Kl)
            }
            l() {
                return Lb(this, yl, 13, Ll)
            }
            u() {
                return void 0 !== Eb(this, yl, Db(this, Ll, 13))
            }
            i() {
                return Lb(this, Al, 14, Ll)
            }
            m() {
                return void 0 !== Eb(this, Al, Db(this, Ll, 14))
            }
        },
        Kl = [19],
        Ll = [13, 14];
    let Nl = void 0;

    function Ol() {
        Vb(Nl, Tb);
        return Nl
    };
    var Rl = (a, b, c = "", d = null) => 1 === b && Pl(c, d) ? !0 : Ql(a, c, e => Ca(A(e, Yb, 2), f => r(f, 1) === b)),
        Pl = (a, b) => !b || D(b, 22) && !N(Ue) ? !1 : b.u() ? D(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? D(b.i().l(), 1) : !1,
        Sl = (a, b) => {
            b = B(r(b, 18), 0); - 1 !== b && (a.tmod = b)
        },
        Ul = a => {
            const b = Fc(I) || I;
            return Tl(b, a) ? !0 : Ql(I, "", c => Ca(wb(c, 3, 0, !1, fb(c)), d => d === a))
        };

    function Tl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ha(a.split(","), b.toString())
    }

    function Ql(a, b, c) {
        a = Fc(a) || a;
        const d = Vl(a);
        b && (b = kd(String(b)));
        return hc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Vl(a) {
        a = Wl(a);
        const b = {};
        F(a, (c, d) => {
            try {
                const e = new Xb(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Wl = a => N(Ge) ? (a = ok({
        s: a,
        W: Ol()
    }), null != a.h ? Xl(a.h.value) : {}) : Xl(a.localStorage);

    function Xl(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : gc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Yl(a) {
        N(Qe) && Sj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Zl = a => !!a && (0 < A(a, xe, 1).length || N(Me) && 0 < A(a, se, 3).length);

    function T(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function $l(a) {
        a = T(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ga: !0,
            pb: b,
            oa: a.ablation_viewport_offset
        } : null
    }

    function am(a, b) {
        a = T(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function bm(a) {
        T(I).allow_second_reactive_tag = a
    }

    function cm() {
        const a = T(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function dm(a) {
        return a.document.querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };

    function em(a, b, c, d) {
        fm(new gm(a, b, c, d))
    }

    function fm(a) {
        Bd(Ad(ok({
            s: a.s,
            W: D(a.i, 6)
        }), b => {
            hm(a, b, !0)
        }), () => {
            im(a)
        })
    }

    function hm(a, b, c) {
        Bd(Ad(jm(b), d => {
            km("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.s;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                ul(d, {
                    lserr: 1
                })
            }
            c ? im(a) : a.h(null, null)
        })
    }

    function im(a) {
        Bd(Ad(lm(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            mm(a)
        })
    }

    function jm(a) {
        return (a = (a = xl(a)) ? wl(a) ? a : null : null) ? vd(a) : xd(Error("invlocst"))
    }

    function lm(a) {
        var b = a.s;
        if ((T(b) ? .head_tag_slot_vars ? .google_ad_host ? ? dm(b)) && (!D(a.i, 22) || !N(Te))) return xd(Error("invtag"));
        a: {
            b = a.s;
            var c = a.j;a = a.i;
            if (a ? .u()) b = a ? .l() ? .i() ? .i(),
            Zl(b) ? Yl(!1) : b = null;
            else {
                if (a ? .m()) {
                    const d = a ? .i() ? .i(),
                        e = a ? .i() ? .l() ? .i() ? .i();
                    if (d && 1 === d.length && d[0] === c && Zl(e) && C(a, 17) === b.location.host) {
                        Yl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Yi, a = A(b, xe, 1), c = Jb(c, 1, a), a = A(b, aj, 2), c = Jb(c, 7, a), N(Me) && 0 < A(b, se, 3).length && (a = new te, b = A(b, se, 3), b = Jb(a, 1, b), Hb(c, 6, b)), b = vd(c)) : b = xd(Error("invtag"));
        return b
    }

    function mm(a) {
        sk({
            s: a.s,
            W: D(a.i, 6),
            qb: 50,
            R: b => {
                om(a, b)
            }
        })
    }

    function om(a, b) {
        Bd(Ad(b, c => {
            hm(a, c, !1)
        }), c => {
            km(c.message);
            a.h(null, null)
        })
    }

    function km(a) {
        Sj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class gm {
        constructor(a, b, c, d) {
            this.s = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
    };
    var rm = (a, b, c, d) => {
        try {
            const e = sl(a, A(c, aj, 7));
            if (e && ql(e)) {
                r(e, 4) && (d = Kd(d, new Ld(null, {
                    google_package: r(e, 4)
                })));
                const f = new Hj(a, b, c, e, d);
                Gi(1E3, () => {
                    var g = new qd;
                    (new Ck(a, f, g)).start();
                    return g.i
                }, a).then(la(pm, a), la(qm, a))
            }
        } catch (e) {
            ul(a, {
                atf: -1
            })
        }
    };
    const pm = a => {
            ul(a, {
                atf: 1
            })
        },
        qm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            ul(a, {
                atf: 0
            })
        };

    function sm(a) {
        N(bf) && (a.easpi = N(bf), N(af) && (a.easpa = !0), a.asntp = O(hf), a.asntpv = O(mf), a.asntpl = O(kf), a.asntpm = O(lf), a.asntpc = O(jf), a.asna = O(df), a.asnd = O(ef), a.asnp = O(ff), a.asns = O(gf), a.asmat = O(cf), a.asptt = O( of ), a.aspe = !0, a.asro = N(pf), N(nf) && (a.ascet = !0))
    };
    Ka || !p("Safari") || ua();
    class tm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function um() {
        const {
            promise: a,
            resolve: b
        } = new tm;
        return {
            promise: a,
            resolve: b
        }
    };

    function vm(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = um();
        b[7] = c;
        a();
        return c
    }

    function wm(a) {
        return vm(() => {
            Gc(n.document, a)
        }).promise
    };
    var xm = a => {
        if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        F(a, (d, e) => {
            zi[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        sm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function ym(a) {
        return da(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };
    var Bm = (a, b) => {
        T(I).ama_ran_on_page || Gi(1001, () => zm(new Am(a, b)), n)
    };

    function zm(a) {
        em(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
            var d = a.h,
                e = a.i;
            T(I).ama_ran_on_page || b && Cm(d, e, b, c)
        })
    }
    class Am {
        constructor(a, b) {
            this.h = n;
            this.i = a;
            this.j = b
        }
    }

    function Cm(a, b, c, d) {
        d && (Li(a).configSourceInAbg = d);
        void 0 !== Eb(c, Ui, 24, !1) && (d = Mi(a), d.availableAbg = !0, d.ablationFromStorage = !!z(c, Ui, 24) ? .i() ? .i());
        if (ym(b) && (d = sl(a, A(c, aj, 7)), !d || !xb(d, 8))) return;
        T(I).ama_ran_on_page = !0;
        z(c, ej, 15) ? .i() && (T(a).enable_overlap_observer = !0);
        var e = z(c, cj, 13);
        e && 1 === r(e, 1) ? (d = 0, (e = z(e, dj, 6)) && r(e, 3) && (d = r(e, 3) || 0), am(a, d)) : z(c, Ui, 24) ? .i() ? .i() && (Mi(a).ablatingThisPageview = !0, am(a, 1));
        cd(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = vl(da(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const g = Kd(Od, new Ld(null, b));
        Qj(782, () => {
            rm(a, f, c, g)
        })
    };
    var Dm = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Em = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Fm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
                    RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Gm = a => {
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

    function Hm(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = T(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !jd() ? Em : Fm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = Gm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    async function Im(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function Jm(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = Yc(a.s)
    }

    function Km(a) {
        const b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = Hm(a.s)
    }

    function Lm(a, b) {
        var c = new og;
        var d = Jm(a);
        c = t(c, 1, d);
        d = Km(a);
        c = t(c, 2, d);
        c = t(c, 3, a.state.sd);
        return t(c, 7, Math.round(b || a.s.performance.now()))
    }

    function Mm(a) {
        return !(!Jm(a) || !Km(a))
    }
    async function Nm() {
        var a = M(Om);
        if (a.i && !a.state.le.includes(1)) {
            a.state.le.push(1);
            var b = a.s.performance.now();
            await Im(a.s, () => Mm(a));
            var c = gg(hg(new jg, eg(dg(new fg, K(a.s).scrollWidth), K(a.s).scrollHeight)), eg(dg(new fg, K(a.s).clientWidth), K(a.s).clientHeight)),
                d = ei(a.s);
            0 !== d && ig(c, bg(new cg, d));
            Ng(a.h, lg(Lm(a, b), c));
            Zg(a.h, a.s, () => {
                var e = a.h;
                var f = Lm(a);
                var g = new kg;
                f = Ib(f, 8, mg, g);
                Ng(e, f)
            })
        }
    }
    async function Pm(a, b, c) {
        if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.s.performance.now();
            await Im(a.s, () => Mm(a));
            Ng(a.h, ng(Lm(a, d), Zf(Yf(new ag, b), c)))
        }
    }
    var Om = class {
        constructor(a) {
            this.s = ed() || window;
            this.h = a ? ? new ah(100, 100, N(He));
            if (N(Ie)) this.state = ak(Vj(), 33, () => {
                const b = O(Je);
                return {
                    sd: b,
                    ssp: 0 < b && Mc() < 1 / b,
                    pc: null,
                    wpc: null,
                    le: [],
                    lgdp: []
                }
            });
            else {
                a = O(Je);
                const b = ck(0 < a && Mc() < 1 / a);
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
        get i() {
            return this.state.ssp
        }
    };

    function Qm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Rm(a) {
        var b = I.document;
        if (b.currentScript) return Qm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === Qm(c, a)) return 0;
        return 1
    };

    function Sm(a, b = 0) {
        b = 0 !== b ? `${"google_experiment_mod"}${b}` : "google_experiment_mod";
        a: {
            var c = -1;
            try {
                a && (c = parseInt(a.getItem(b), 10))
            } catch {
                c = null;
                break a
            }
            c = 0 <= c && 1E3 > c ? c : null
        }
        if (null === c) {
            c = Lc() ? null : Math.floor(1E3 * Mc());
            var d;
            if (d = null != c && a) a: {
                var e = String(c);
                try {
                    if (a) {
                        a.setItem(b, e);
                        d = e;
                        break a
                    }
                } catch {}
                d = null
            }
            a = d ? c : null
        } else a = c;
        return a
    };

    function Tm(a, b) {
        return {
            [Kf]: {
                [55]: () => 0 === a,
                [23]: c => Rl(I, Number(c)),
                [24]: c => Ul(Number(c)),
                [61]: () => D(b, 6),
                [63]: () => D(b, 6) || ".google.ch" === C(b, 8)
            },
            [Lf]: {
                [7]: c => {
                    try {
                        var d = window.localStorage
                    } catch (e) {
                        d = null
                    }
                    return Sm(d, Number(c)) ? ? void 0
                }
            },
            [Mf]: {
                [6]: () => C(b, 15)
            }
        }
    };
    var Um = (a = n) => a.ggeac || (a.ggeac = {});

    function Vm(a, b = window.document) {
        Xc(a, b)
    }

    function Wm(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function Xm(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };
    const Ym = (a, b) => {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    };
    class Zm {
        constructor() {
            this[Kf] = {
                [8]: a => {
                    try {
                        return null != ba(a)
                    } catch {}
                },
                [9]: a => {
                    try {
                        var b = ba(a)
                    } catch {
                        return
                    }
                    if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                    return a
                },
                [10]: () => window == window.top,
                [6]: a => Ha(M(Sh).i(), parseInt(a, 10)),
                [27]: a => {
                    a = Ym(a, "boolean");
                    return void 0 !== a ? a : void 0
                },
                [60]: a => {
                    try {
                        return !!n.document.querySelector(a)
                    } catch {}
                },
                [69]: a => Wm(a, n.document),
                [70]: a => Xm(a, n.document)
            };
            this[Lf] = {
                [3]: () => Tc(),
                [6]: a => {
                    a = Ym(a, "number");
                    return void 0 !== a ? a : void 0
                },
                [11]: (a = "") => {
                    var b;
                    a = (b = (b = n.location.href.match(Bc)[3] || null) ? decodeURI(b) : b) ? Nc(b + a) : null;
                    return null == a ? void 0 : a % 1E3
                }
            };
            this[Mf] = {
                [2]: () => window.location.href,
                [3]: () => {
                    try {
                        return window.top.location.hash
                    } catch {
                        return ""
                    }
                },
                [4]: a => {
                    a = Ym(a, "string");
                    return void 0 !== a ? a : void 0
                },
                [10]: () => {
                    try {
                        const a = n.document;
                        return a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""
                    } catch {
                        return ""
                    }
                },
                [11]: () => {
                    try {
                        return ba("google_tag_data") ? .uach ? .fullVersionList ? .find(a =>
                            "Google Chrome" === a.brand) ? .version ? ? ""
                    } catch {
                        return ""
                    }
                }
            }
        }
    };
    const $m = [12, 13, 20];

    function an(a, b, c, d) {
        const e = M(fh).h;
        if (!Rf(z(b, Gf, 3), e)) return null;
        var f = A(b, Cl, 2),
            g = w(b, 6);
        if (g) {
            Bb(d, 1, Cg, g);
            f = e[Lf];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Ab(d, 3, c)
            } catch (l) {}
            return (b = bn(b, c)) ? cn(a, [b], 1) : null
        }
        if (g = w(b, 10)) {
            Bb(d, 2, Cg, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Lf][9];
                    break;
                case 2:
                    h = e[Lf][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === w(b, 11)) return null;
            void 0 !== c && Ab(d, 3, c);
            return (b = bn(b, c)) ? cn(a, [b], 1) : null
        }
        d = e ? Aa(f, l => Rf(z(l,
            Gf, 3), e)) : f;
        if (!d.length) return null;
        c = d.length * B(r(b, 1), 0);
        return (b = w(b, 4)) ? dn(a, b, c, d) : cn(a, d, c / 1E3)
    }

    function en(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Ha(a, b) || a.push(b)
    }

    function fn(a, b, c) {
        const d = [],
            e = gn(a.m, b);
        var f;
        if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return ch(a.h, b, c, d, [], 4), d;
        if (!e.length) return ch(a.h, b, c, d, [], 3), d;
        const g = Ha($m, b),
            h = [];
        za(e, l => {
            var k = new Bg;
            if (l = an(a, l, c, k)) 0 !== Cb(k, Cg) && h.push(k), k = l.getId(), d.push(k), en(a, k, g ? 4 : c), (l = A(l, Wf, 2)) && (g ? th(l, vh(), a.h, k) : th(l, [c], a.h, k))
        });
        ch(a.h, b, c, d, h, 1);
        return d
    }

    function hn(a, b) {
        a.m.push(...Aa(Ba(b, c => new Il(c)), c => !Ha($m, c.T())))
    }

    function cn(a, b, c) {
        const d = a.j,
            e = Da(b, f => !!d[f.getId()]);
        return e ? e : a.v ? null : Jc(b, c)
    }

    function dn(a, b, c, d) {
        const e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = cn(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function jn(a, b) {
        Q(xh, c => {
            a.j[c] = !0
        }, b);
        Q(Ah, (c, d) => fn(a, c, d), b);
        Q(Bh, c => (a.i[c] || []).concat(a.i[4]), b);
        Q(Kh, c => void hn(a, c), b);
        Q(yh, (c, d) => void en(a, c, d), b)
    }
    class kn {
        init(a, b, c, {
            ab: d = !1,
            Tb: e = {},
            Zb: f = []
        } = {}) {
            this.m = a;
            this.u = {};
            this.v = d;
            this.l = e;
            this.i = {
                [b]: [],
                [4]: []
            };
            this.j = {};
            (a = Wh()) && za(a.split(",") || [], g => {
                (g = parseInt(g, 10)) && (this.j[g] = !0)
            });
            za(f, g => {
                this.j[g] = !0
            });
            this.h = c;
            return this
        }
    }
    const gn = (a, b) => (a = Da(a, c => c.T() == b)) && A(a, El, 2) || [],
        bn = (a, b) => {
            var c = A(a, Cl, 2),
                d = c.length,
                e = B(r(a, 8), 0);
            a = d * B(r(a, 1), 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Mc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = M(fh).h;
            return !c || e && !Rf(z(c, Gf, 3), e) ? null : c
        };
    class ln {
        constructor() {
            this.h = () => {}
        }
    }
    var mn = a => {
        M(ln).h(a)
    };
    var on = (a, b, c, d = Um(), e = 0, f = new eh(z(a, Jl, 5) ? .i() ? ? 0, z(a, Jl, 5) ? .l() ? ? 0, z(a, Jl, 5) ? .m() ? ? !1)) => {
            d.hasOwnProperty("init-done") ? (Nh(Kh, d)(Ba(A(a, Il, 2), g => g.toJSON())), Nh(Lh, d)(Ba(A(a, Wf, 1), g => g.toJSON()), e), b && Nh(Mh, d)(b), nn(e, d)) : (jn(M(kn).init(A(a, Il, 2), e, f, c), d), Oh(d), Ph(d), Qh(d), nn(e, d), th(A(a, Wf, 1), [e], f, void 0, !0), gh = gh || !(!c || !c.fb), mn(M(Zm)), b && mn(b))
        },
        nn = (a, b = Um()) => {
            Rh(M(Sh), b, a);
            pn(b, a);
            M(ln).h = Nh(Mh, b);
            M(xf).m()
        },
        pn = (a, b) => {
            const c = M(xf);
            c.j = (d, e) => Nh(Dh, a, () => !1)(d, e, b);
            c.l = (d, e) => Nh(Eh, a,
                () => 0)(d, e, b);
            c.h = (d, e) => Nh(Fh, a, () => "")(d, e, b);
            c.i = (d, e) => Nh(Gh, a, () => [])(d, e, b);
            c.m = () => {
                Nh(zh, a)(b)
            }
        };

    function qn(a) {
        var b = M(Sh).l(a);
        Pm(M(Om), a, b)
    }
    var rn = (a, b, c) => {
        var d = T(a);
        if (d.plle) nn(1, Um(a));
        else {
            d.plle = !0;
            d = z(b, Gl, 12);
            var e = D(b, 9);
            on(d, Tm(c, b), {
                ab: e && !!a.google_disable_experiments,
                fb: e
            }, Um(a), 1);
            if (c = C(b, 15)) c = Number(c), M(Sh).j(c);
            for (const f of wb(b, 19, 0, !1, fb(b))) b = f, M(Sh).h(b);
            qn(12);
            qn(10);
            a = Fc(a) || a;
            xj(a.location, "google_mc_lab") && M(Sh).h(44738307);
            xj(a.location, "google_auto_storify_swipeable") && M(Sh).h(44773747);
            xj(a.location, "google_auto_storify_scrollable") && M(Sh).h(44773746)
        }
    };
    var sn = {
            "120x90": !0,
            "160x90": !0,
            "180x90": !0,
            "200x90": !0,
            "468x15": !0,
            "728x15": !0
        },
        tn = (a, b) => {
            if (15 == b) {
                if (728 <= a) return 728;
                if (468 <= a) return 468
            } else if (90 == b) {
                if (200 <= a) return 200;
                if (180 <= a) return 180;
                if (160 <= a) return 160;
                if (120 <= a) return 120
            }
            return null
        };

    function un(a) {
        return b => !!(b.ha & a)
    }
    class U extends ri {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ha = c;
            this.gb = d
        }
        na() {
            return this.ha
        }
        i(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const vn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        wn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        xn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function yn(a) {
        var b = 0;
        a.U && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b) return {
            M: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.U.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            M: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            M: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                M: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                M: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            Ma: b
        }
    }

    function zn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const An = Ja("script");

    function Bn(a, b, c) {
        null != a.ha && (c.google_responsive_formats = a.ha);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.G && (c.gfwroml = a.G);
        null != a.N && (c.gfwromr = a.N);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.O && (c.gfwroz = a.O);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.aa && (c.gzi = a.aa);
        b = Fc(window) || window;
        xj(b.location, "google_responsive_dummy_ad") &&
            (Ha([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${An}>window.top.postMessage('${a}', '*'); 
          </${An}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class Cn {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, u = null) {
            this.u = a;
            this.da = b;
            this.ha = c;
            this.h = d;
            this.P = e;
            this.i = f;
            this.j = g;
            this.G = h;
            this.N = l;
            this.l = k;
            this.m = m;
            this.O = u;
            this.aa = this.B = this.v = null
        }
        size() {
            return this.da
        }
    };
    const Dn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var En = class extends ri {
            h(a) {
                return Math.min(1200, Math.max(this.J, Math.round(a)))
            }
        },
        Hn = (a, b) => {
            Fn(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new Cn(9, new En(a, Math.floor(a * b.google_phwr)));
            var c = yc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * vn.mobile_banner_image_sidebyside + wn.mobile_banner_image_sidebyside) + 96), a = {
                ca: a,
                ba: c,
                K: 1,
                L: 12,
                U: "mobile_banner_image_sidebyside"
            }) : (a = zn(a), a = {
                ca: a.width,
                ba: a.height,
                K: 1,
                L: 13,
                U: "image_sidebyside"
            }) : (a = zn(a), a = {
                ca: a.width,
                ba: a.height,
                K: 4,
                L: 2,
                U: "image_stacked"
            });
            Gn(b, a);
            return new Cn(9, new En(a.ca, a.ba))
        },
        In = (a, b) => {
            Fn(a, b);
            var c = yn({
                L: b.google_content_recommendation_rows_num,
                K: b.google_content_recommendation_columns_num,
                U: b.google_content_recommendation_ui_type
            });
            if (c.M) a = {
                ca: 0,
                ba: 0,
                K: 0,
                L: 0,
                U: "image_stacked",
                M: c.M
            };
            else {
                var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
                var e = c.Ma[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = xn[e];
                let g = c.K[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.L[d];
                c = Math.floor(((a - 8 * f - 8) / f * vn[e] + wn[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    nb: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    nb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ca: a.width,
                    ba: a.height,
                    K: f,
                    L: d,
                    U: e
                }
            }
            if (a.M) throw new R(a.M);
            Gn(b, a);
            return new Cn(9, new En(a.ca, a.ba))
        };

    function Fn(a, b) {
        if (0 >= a) throw new R("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Gn(a, b) {
        a.google_content_recommendation_ui_type = b.U;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };
    class Jn extends ri {
        h() {
            return this.J
        }
        i(a, b, c) {
            qi(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Kn = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Ln = class extends ri {
            h() {
                return Math.min(1200, this.J)
            }
        },
        Mn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = li(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = K(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const l = g.parentElement.childNodes;
                                for (let k = 0; k < l.length; ++k) {
                                    const m = l[k];
                                    if (m != g && oi(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        qi(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new R("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new R("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Cn(11, new ri(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new R("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new R("Invalid height: height=" + f);
                if (50 > f) throw new R("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new R("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Cn(11, new ri(a, f))
            }
            d = Kn[f];
            if (!d) throw new R("Invalid data-ad-layout value: " + f);
            c = ui(c, b);
            b = K(b).clientWidth;
            b = "in-article" !==
                f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Cn(11, "in-article" == f ? new Ln(a, b) : new ri(a, b))
        };
    var Nn = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Pn = (a, b) => {
            var c = On.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var V = [new U(970, 90, 2), new U(728, 90, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 600, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 600, 4), new U(125, 125, 1), new U(120, 600, 4), new U(120, 240, 4), new U(120, 120, 1, !0)],
        On = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9], V[16]];
    var Rn = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                C: a,
                F: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || Qn(b) || e.google_ad_resize ? (b = mi(a, c, d, e), c = !0 !== b ? {
                C: a,
                F: b
            } : {
                C: K(c).clientWidth || a,
                F: !0
            }) : c = {
                C: a,
                F: 2
            };
            const {
                C: f,
                F: g
            } = c;
            return !0 !== g ? {
                C: a,
                F: g
            } : d.parentElement ? {
                C: f,
                F: g
            } : {
                C: a,
                F: g
            }
        },
        Un = (a, b, c, d, e) => {
            const {
                C: f,
                F: g
            } = Qj(247, () => Rn(a, b, c, d, e));
            var h = !0 === g;
            const l = H(d.style.width),
                k = H(d.style.height),
                {
                    Z: m,
                    X: u,
                    na: v,
                    La: x
                } = Sn(f, b, c, d, e, h);
            h = Tn(b, v);
            var y;
            const G = (y = si(d, c, "marginLeft",
                    H)) ? y + "px" : "",
                Fa = (y = si(d, c, "marginRight", H)) ? y + "px" : "";
            y = si(d, c, "zIndex") || "";
            return new Cn(h, m, v, null, x, g, u, G, Fa, k, l, y)
        },
        Qn = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Sn = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, K(c).clientWidth) ? 4 : 3 : ki(b);
            let g;
            var h = !1;
            let l = !1;
            var k = 488 > K(c).clientWidth;
            if (k) {
                g = fi(d, c);
                var m = ui(d, c);
                h = !m && g;
                l = m && g
            }
            m = [ti(a), un(b)];
            m.push(wi(k, c, d, l));
            null != e.google_max_responsive_height && m.push(xi(e.google_max_responsive_height));
            k = [y => !y.gb];
            if (h || l) h = yi(c, d), k.push(xi(h));
            let u = Pn(Nn(m), Nn(k));
            if (!u) throw new R("No slot size for availableWidth=" + a);
            const {
                Z: v,
                X: x
            } = Qj(248, () => {
                var y;
                a: if (f) {
                    if (e.gfwrnh && (y = H(e.gfwrnh))) {
                        y = {
                            Z: new Jn(a, y),
                            X: !0
                        };
                        break a
                    }
                    y = a / 1.2;
                    var G = Math;
                    var Fa = G.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var X = Infinity;
                    else {
                        X = d;
                        let ya = Infinity;
                        do {
                            var Ga = si(X, c, "height", H);
                            Ga && (ya = Math.min(ya, Ga));
                            (Ga = si(X, c, "maxHeight", H)) && (ya = Math.min(ya, Ga))
                        } while ((X = X.parentElement) && "HTML" != X.tagName);
                        X = ya
                    }
                    G = Fa.call(G, y, X);
                    if (G < .5 * y || 100 > G) G = y;
                    y = {
                        Z: new Jn(a, Math.floor(G)),
                        X: G < y ? 102 : !0
                    }
                } else y = {
                    Z: u,
                    X: 100
                };
                return y
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                Z: Vn(a, c, d, v, e),
                X: !1,
                na: b,
                La: g
            } : {
                Z: v,
                X: x,
                na: b,
                La: g
            }
        };
    const Tn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Vn = (a, b, c, d, e) => {
            const f = e.google_ad_height || si(c, b, "height", H);
            b = Mn(a, b, c, f, e).size();
            return b.J * b.height() > a * d.height() ? new U(b.J, b.height(), 1) : d
        };
    var Wn = (a, b, c, d, e) => {
        var f;
        (f = K(b).clientWidth) ? 488 > K(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, qi(b, c), f = {
            C: f,
            F: !0
        }) : f = {
            C: a,
            F: 5
        } : f = {
            C: a,
            F: 4
        }: f = {
            C: a,
            F: 10
        };
        const {
            C: g,
            F: h
        } = f;
        if (!0 !== h || a == g) return new Cn(12, new ri(a, d), null, null, !0, h, 100);
        const {
            Z: l,
            X: k,
            na: m
        } = Sn(g, "auto", b, c, e, !0);
        return new Cn(1, l, m, 2, !0, h, k)
    };
    var Yn = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of Dn)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (Qn(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Xn(b), 1);
            if (27 === b.google_reactive_ad_format) return Xn(b), 1
        },
        $n = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && si(b, d, "width",
                H) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Zn(a, e, b, c, d)) ? f : Un(e, c.google_ad_format, d, b, c);
            f.size().i(d, c, b);
            Bn(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Zn = (a, b, c, d, e) => {
            const f = d.google_ad_height || si(c, e, "height", H);
            switch (a) {
                case 5:
                    const {
                        C: g,
                        F: h
                    } = Qj(247, () => Rn(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && qi(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return Hn(g, d);
                case 9:
                    return In(b, d);
                case 8:
                    return Mn(b, e, c, f, d);
                case 10:
                    return Wn(b, e, c, f, d)
            }
        },
        Xn = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function ao(a, b) {
        var c = Fc(b);
        if (c) {
            c = K(c).clientWidth;
            const d = Ic(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function bo(a) {
        S.Oa(b => {
            b.shv = String(a);
            b.mjsv = "m202212050101";
            const c = M(Sh).i(),
                d = T(n);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    }

    function co(a) {
        bo(C(a, 2));
        a = D(a, 6);
        Vb(Nl, Ef);
        Nl = a
    };

    function eo({
        Ya: a,
        kb: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function fo(a) {
        var b = S;
        try {
            return Vb(a, Df), new Ml(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Ml
    };

    function go(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function ho(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function io() {
        const a = new Set,
            b = zj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch (c) {}
        return a
    }

    function jo(a) {
        a = a.id;
        return null != a && (io().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function ko(a, b, c) {
        if (!a.sources) return !1;
        switch (lo(a)) {
            case 2:
                const d = mo(a);
                if (d) return c.some(f => no(d, f));
            case 1:
                const e = oo(a);
                if (e) return b.some(f => no(e, f))
        }
        return !1
    }

    function lo(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function oo(a) {
        return po(a, b => b.currentRect)
    }

    function mo(a) {
        return po(a, b => b.previousRect)
    }

    function po(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function no(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function qo() {
        const a = [...document.getElementsByTagName("iframe")].filter(jo),
            b = [...io()].map(c => document.getElementById(c)).filter(c => null !== c);
        ro = window.scrollX;
        so = window.scrollY;
        return to = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function uo() {
        var a = new vo;
        if (N(Ye)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b) wo(a).observe({
                    type: c,
                    buffered: !0
                });
                xo(a)
            }
        }
    }

    function wo(a) {
        a.u || (a.u = new PerformanceObserver(Fi(640, b => {
            const c = ro !== window.scrollX || so !== window.scrollY ? [] : to,
                d = qo();
            for (const h of b.getEntries()) switch (h.entryType) {
                case "layout-shift":
                    b = a;
                    var e = h,
                        f = c,
                        g = d;
                    if (!e.hadRecentInput) {
                        b.G += Number(e.value);
                        Number(e.value) > b.O && (b.O = Number(e.value));
                        b.P += 1;
                        if (f = ko(e, f, g)) b.v += e.value, b.Aa++;
                        if (5E3 < e.startTime - b.za || 1E3 < e.startTime - b.Ca) b.za = e.startTime, b.i = 0, b.m = 0;
                        b.Ca = e.startTime;
                        b.i += e.value;
                        f && (b.m += e.value);
                        b.i > b.da && (b.da = b.i, b.Fa = b.m, b.Ea = e.startTime +
                            e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = h;
                    a.ya = Math.floor(b.renderTime || b.loadTime);
                    a.xa = b.size;
                    break;
                case "first-input":
                    b = h;
                    a.va = Number((b.processingStart - b.startTime).toFixed(3));
                    a.wa = !0;
                    break;
                case "longtask":
                    b = Math.max(0, h.duration - 50), a.B += b, a.N = Math.max(a.N, b), a.aa += 1
            }
        })));
        return a.u
    }

    function xo(a) {
        const b = Fi(641, () => {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && yo(a)
            }),
            c = Fi(641, () => void yo(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            wo(a).disconnect()
        }
    }

    function yo(a) {
        if (!a.Ba) {
            a.Ba = !0;
            wo(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += ho("cls", a.G), b += ho("mls", a.O), b += go("nls", a.P), window.LayoutShiftAttribution && (b += ho("cas", a.v), b += go("nas", a.Aa)), b += ho("wls", a.da), b += ho("tls", a.Ea), window.LayoutShiftAttribution && (b += ho("was", a.Fa)));
            window.LargestContentfulPaint && (b += go("lcp", a.ya), b += go("lcps", a.xa));
            window.PerformanceEventTiming && a.wa && (b += go("fid", a.va));
            window.PerformanceLongTaskTiming &&
                (b += go("cbt", a.B), b += go("mbt", a.N), b += go("nlt", a.aa));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) jo(c) && d++;
            b += go("nif", d);
            b += go("ifi", id(window));
            c = M(Sh).i();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Da ? `&${"qqid"}=${encodeURIComponent(a.Da)}` : go("pvsid", Yc(n));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.j || (a.j = !0, a.h())
        }
    }
    class vo extends Qg {
        constructor() {
            super();
            this.m = this.i = this.P = this.O = this.G = 0;
            this.Ca = this.za = Number.NEGATIVE_INFINITY;
            this.va = this.xa = this.ya = this.Aa = this.Fa = this.v = this.Ea = this.da = 0;
            this.wa = !1;
            this.aa = this.N = this.B = 0;
            const a = document.querySelector("[data-google-query-id]");
            this.Da = a ? a.getAttribute("data-google-query-id") : null;
            this.u = null;
            this.Ba = !1;
            this.ua = () => {}
        }
        h() {
            super.h();
            this.ua()
        }
    }
    var ro = void 0,
        so = void 0,
        to = [];
    var W = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function zo() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function Ao(a = window) {
        return !a.PeriodicSyncManager
    }

    function Bo() {
        var a = window.document;
        const b = M(xf).i(vf.h, vf.defaultValue);
        Xc(b, a)
    }

    function Co(a, b) {
        return a || ".google.ch" === b || "function" === typeof I.__tcfapi
    }

    function Z(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function Do() {
        const a = `${W.issuerOrigin}${W.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: W.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(W.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            Z(W.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? Z(W.issuerOrigin, 6, !0) : Z(W.issuerOrigin, 5)
        })
    }

    function Eo() {
        const a = `${W.issuerOrigin}${W.issuancePath}`;
        Z(W.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            Z(W.issuerOrigin, 10);
            return Do()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return Z(W.issuerOrigin, 10), Do();
            Z(W.issuerOrigin, 9)
        })
    }

    function Fo() {
        Z(W.issuerOrigin, 13);
        return document.hasTrustToken(W.issuerOrigin).then(a => a ? Do() : Eo())
    }

    function Go() {
        Z(Y.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Y.issuerOrigin}${Y.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                Z(Y.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) Z(Y.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    Z(Y.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Y.issuerOrigin}${Y.getStatePath}`;
                Z(Y.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Yc(window);
            return a.then(e => {
                const f = `${Y.issuerOrigin}${Y.issuancePath}`;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                Z(Y.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        const f = O(uf);
                        Math.random() <=
                            f && Td({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function Ho(a) {
        if (document.hasTrustToken && !N(sf)) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.i.some(d => d.issuerOrigin === W.issuerOrigin)) {
                    let d = b.get(W.issuerOrigin);
                    d || (d = Fo(), b.set(W.issuerOrigin, d));
                    c.push(d)
                }
                a.i.some(d => d.issuerOrigin === Y.issuerOrigin) && (a = b.get(Y.issuerOrigin), a || (a = Go(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var Io = class extends Qg {
        constructor(a, b) {
            super();
            this.i = [];
            a && zo() && this.i.push(W);
            b && this.i.push(Y);
            if (document.hasTrustToken && !N(sf)) {
                const c = new Map;
                this.i.forEach(d => {
                    c.set(d.issuerOrigin, {
                        issuerOrigin: d.issuerOrigin,
                        state: 1,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...c, ...window.goog_tt_state_map]) : c;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map = new Map)
            }
        }
    };

    function Jo(a, b) {
        return t(a, 2, b)
    }

    function Ko(a, b) {
        return t(a, 3, b)
    }

    function Lo(a, b) {
        return t(a, 4, b)
    }

    function Mo(a, b) {
        return t(a, 5, b)
    }

    function No(a, b) {
        return t(a, 9, b)
    }

    function Oo(a, b) {
        return Jb(a, 10, b)
    }

    function Po(a, b) {
        return t(a, 11, b)
    }

    function Qo(a, b) {
        return t(a, 1, b)
    }

    function Ro(a, b) {
        return t(a, 7, b)
    }
    var To = class extends E {
            constructor() {
                super(void 0, -1, So)
            }
        },
        Uo = class extends E {
            constructor() {
                super()
            }
            getVersion() {
                return C(this, 2)
            }
        },
        So = [10, 6];
    const Vo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Wo() {
        if ("function" !== typeof I.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = I.google_tag_data ? ? (I.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = I.navigator.userAgentData.getHighEntropyValues(Vo).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Xo(a) {
        return Po(Oo(Mo(Jo(Qo(Lo(Ro(No(Ko(new To, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new Uo;
            c = t(c, 1, b.brand);
            return t(c, 2, b.version)
        }) || []), a.wow64 || !1)
    }

    function Yo() {
        return Wo() ? .then(a => Xo(a)) ? ? null
    };

    function Zo(a, b) {
        b.google_ad_host || (a = dm(a)) && (b.google_ad_host = a)
    }

    function $o(a, b, c = "") {
        I.google_sa_impl && !I.document.getElementById("google_shimpl") && (delete I.google_sa_queue, delete I.google_sa_impl);
        I.google_sa_queue || (I.google_sa_queue = [], I.google_process_slots = Rj(215, () => ap(I.google_sa_queue)), a = bp(c, a, b), Gc(I.document, a).id = "google_shimpl")
    }

    function ap(a) {
        const b = a.shift();
        "function" === typeof b && S.fa(216, b);
        a.length && n.setTimeout(Rj(215, () => ap(a)), 0)
    }

    function cp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function bp(a, b, c) {
        b = D(c, 4) ? b.lb : b.mb;
        const d = {};
        a: {
            if (D(c, 4)) {
                if (a = a || Hm(I)) {
                    a = {
                        client: a,
                        plah: I.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        dp(a, d);
        dp(M(xf).h(Ke.h, Ke.defaultValue) ? {
            bust: M(xf).h(Ke.h, Ke.defaultValue)
        } : {}, d);
        return qc(b, d)
    }

    function dp(a, b) {
        F(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function ep(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    ad = d;
                    break a
                }
            } catch (g) {}
            ad = null
        }
        if (ad) return null;d = Hc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = sc(a.tb).toString();d.style.display = "none";
        return d
    }

    function fp(a, b, c, d) {
        gp(a, b, c, d, (e, f) => {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = Hc("DIV");
            h.id = e + "_host";
            const l = h.style;
            l.border = "none";
            l.height = `${f}px`;
            l.width = `${g}px`;
            l.margin = "0px";
            l.padding = "0px";
            l.position = "relative";
            l.visibility = "visible";
            l.backgroundColor = "transparent";
            h.style.display = "inline-block";
            c.appendChild(h);
            return {
                bb: e,
                sb: h
            }
        })
    }

    function gp(a, b, c, d, e) {
        const f = e(a, b);
        e = f.bb;
        hp(a, c, b);
        c = oa;
        const g = (new Date).getTime();
        b.google_lrv = C(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? h => h() : h => window.setTimeout(h, 0);
        cp(a, () => {
            var {
                sb: h
            } = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                outerInsElement: h,
                innerInsElement: h
            })) && S.ga(911, h)
        }, d)
    }

    function hp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !sn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Nc(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let l = 0;
                        for (let k = 0; k < h.length; ++k) {
                            const m = h[k];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const l = h.frames;
                    for (f = 0; f < l.length; ++f)
                        if (a === l[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Nc(b + e.join()).toString()
        }
    }

    function ip() {
        var a = Fc(n);
        a && (a = ee(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function jp(a) {
        Bo();
        Co(Ol(), C(a, 8)) || Rj(779, () => {
            var b = N(Ao(window) ? rf : qf);
            const c = N(tf);
            b = new Io(b, c);
            0 < O(wf) ? I.google_trust_token_operation_promise = Ho(b) : Ho(b)
        })();
        a = Yo();
        null != a && a.then(b => {
            a: {
                hb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Sb);
                    break a
                } finally {
                    hb = !1
                }
                c = void 0
            }
            I.google_user_agent_client_hint = c
        });
        Vm(M(xf).i(Xe.h, Xe.defaultValue), I.document)
    };

    function kp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function lp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Dc(c, "client");
            d && (b.google_ad_client = kp("google_ad_client", d));
            (c = Dc(c, "host")) && (b.google_ad_host = kp("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = kp(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function mp(a) {
        if (a = dd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function np(a, b, c, d) {
        lp(a, b);
        if (c.document && c.document.body && !Yn(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = ao(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!sn[e + "x" + g];
                var h = f;
                if (e) {
                    const l = tn(f, g);
                    if (l) h = l, b.google_ad_format = l + "x" + g + "_0ads_al";
                    else throw new R("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                g = Un(f, "auto", c, a, b);
                h = f;
                g.size().i(c,
                    b, a);
                Bn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.J > f && !e && (b.google_ad_width = g.J, a.style.width = `${g.J}px`)
            }
        }(e = a.offsetWidth) || (e = si(a, c, "width", H));
        e = e || b.google_ad_width || 0;
        if (488 > K(c).clientWidth) {
            f = Fc(c) || c;
            g = b.google_ad_client;
            if (d = xj(f.location, "google_responsive_slot_preview") || N(Re) || Rl(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Yn(c, b) || hi(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Ic(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ha(["static", "relative"], f.position)) {
                            b.gfwrnwer =
                                17;
                            d = !1;
                            break b
                        }
                    }
                    d = li(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = Yn(c, b)) $n(e, a, b, c, d);
        else {
            if (hi(a, b)) {
                if (d = Ic(a, c)) a.style.width = d.width, a.style.height = d.height, gi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = mp(c)
            } else gi(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? $n(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = mi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };
    var pp = class extends Qg {
        constructor(a) {
            var b = op;
            super();
            this.B = a;
            this.N = b;
            this.G = new Map;
            this.v = new Map;
            this.P = new Map;
            this.O = new Map;
            this.u = void 0;
            this.m = I
        }
        h() {
            delete this.i;
            this.G.clear();
            this.v.clear();
            this.P.clear();
            this.O.clear();
            this.u && (fc(this.m, "message", this.u), delete this.u);
            delete this.m;
            delete this.N;
            super.h()
        }
    };
    const qp = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.R({
                    consentData: c ? ? void 0,
                    Za: d ? void 0 : 2
                })
            })
        },
        rp = {
            Rb: a => a.R,
            Sb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Ub: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    Za: b.success ? void 0 : 2
                })
            }
        };

    function op(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Vb: b.__uspapiReturn.callId
        }
    }
    var sp = class extends Qg {
        constructor() {
            super();
            this.caller = new pp(a => "function" === typeof a.__uspapi);
            this.caller.G.set("getDataWithCallback", qp);
            this.caller.v.set("getDataWithCallback", rp)
        }
        h() {
            var a = this.caller;
            a.j || (a.j = !0, a.h());
            super.h()
        }
        u() {
            var a = this.caller;
            a.i ? a = a.i : (a.B && a.B(a.m) ? a.i = a.m : a.i = Sc(a.m, "__uspapiLocator"), a = a.i ? ? null);
            return !!a
        }
    };

    function tp() {
        const a = gd `(a=0)=>{let b;const c=class{};}`;
        try {
            var b = window;
            const c = a instanceof nc && a.constructor === nc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (c) {
            return {
                supports: !1,
                error: String(c)
            }
        }
    };
    var up = a => {
        ec(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    var vp = class extends Qg {
        constructor() {
            super();
            this.m = I;
            this.i = null
        }
        h() {
            super.h()
        }
        u() {
            var a;
            (a = "function" === typeof this.m ? .__uspapi) || (a = this.i ? this.i : this.i = Sc(this.m, "__uspapiLocator"), a = null != a);
            return a
        }
    };
    var wp = class extends Qg {
        constructor() {
            super();
            this.u = I;
            this.i = null;
            this.m = !1
        }
    };
    let xp = null;
    const yp = [],
        zp = new Map;
    let Ap = -1;

    function Bp(a) {
        return Ai.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }
    var Dp = (a, b, c) => {
        a.dataset.adsbygoogleStatus = "done";
        Cp(a, b, c)
    };

    function Cp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = np);
        var e = b.google_reactive_ads_config;
        e || np(a, b, d, c);
        Zo(d, b);
        if (!Ep(a, b, d)) {
            e || (d.google_lpabyc = ji(a, d) + si(a, d, "height", H));
            if (e) {
                e = e.page_level_pubvars || {};
                if (T(I).page_contains_reactive_tag && !T(I).allow_second_reactive_tag) {
                    if (e.pltais) {
                        bm(!1);
                        return
                    }
                    throw new R("Only one 'enable_page_level_ads' allowed per page.");
                }
                T(I).page_contains_reactive_tag = !0;
                bm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = hd(d);
            F(Dm, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (T(I).first_tag_on_page || 0);
            Qj(164, () => {
                fp(d, b, a, c)
            })
        }
    }

    function Ep(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = $l(c);
        if (f && f.Ga && "on" !== b.google_adtest && !e) {
            e = ji(a, c);
            const g = K(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.oa || f.oa && (e || 0) >= f.oa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ea(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.pb && (null !== Rc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Rc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Ic(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Fp(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Bp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }
    var Hp = (a, b, c) => {
        if (a && a.shift) {
            let d = 20;
            for (; 0 < a.length && 0 < d;) {
                try {
                    Gp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    };

    function Ip() {
        const a = Hc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Uc(a, {
            display: "none"
        });
        return a
    }
    var Jp = (a, b) => {
            const c = {};
            F(de, (f, g) => {
                !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
            });
            da(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
            const d = Ip();
            Zc.body.appendChild(d);
            const e = {
                google_reactive_ads_config: c,
                google_ad_client: a.google_ad_client
            };
            e.google_pause_ad_requests = !!T(I).pause_ad_requests;
            Dp(d, e, b)
        },
        Kp = (a, b) => {
            ee(n).wasPlaTagProcessed = !0;
            const c = () => Jp(a, b),
                d = n.document;
            if (d.body || "complete" === d.readyState || "interactive" === d.readyState) Jp(a,
                b);
            else {
                const e = dc(S.sa(191, c));
                ec(d, "DOMContentLoaded", e);
                (new n.MutationObserver((f, g) => {
                    d.body && (e(), g.disconnect())
                })).observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }
        };

    function Gp(a, b, c) {
        const d = {};
        Qj(165, () => Lp(a, d, b, c), e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Mp(a) {
        delete a.google_checked_head;
        F(a, (b, c) => {
            zi[c] || (delete a[c], n.console.warn(`AdSense head tag doesn't support ${c.replace("google","data").replace(/_/g,"-")} attribute.`))
        })
    }
    var Pp = (a, b) => {
        var c = I.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || I.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = T(window);
            if (d.head_tag_slot_vars) Np(c);
            else {
                var e = {};
                lp(c, e);
                Mp(e);
                var f = jc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                I.adsbygoogle || (I.adsbygoogle = []);
                d = I.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.l() ? .l() && N(Ve) ? Op(f, a) : up(() => {
                    Op(f, a)
                })
            }
        }
    };
    const Np = a => {
        const b = T(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Dc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new R("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    };

    function Qp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }
    var Lp = (a, b, c, d) => {
        if (null == a) throw new R("push() called with no parameters.");
        d.m() && Rp(a, d.i().i(), C(d, 2));
        var e = Qp(a);
        if (0 !== e) d = cm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = oa), null == xp ? (Sp(a), yp.push(a)) : 3 === e ? Qj(787, () => {
            xp.handleAdConfig(a)
        }) : S.ga(730, xp.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            $o(c, d, Tp(a));
            Up();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new R("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Vp(a, d);
            else if ((e = a.params) && F(e, (g, h) => {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Wp(a.element);
                lp(e, b);
                c = T(n).head_tag_slot_vars || {};
                F(c, (g, h) => {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !T(n).head_tag_slot_vars) throw new R("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new R("Ad client is missing from the slot.");
                var f = (c = 0 === (T(I).first_tag_on_page || 0) && xm(b)) && ym(c);
                c && (f || (Vp(c, d), T(I).skip_next_reactive_tag = !0), N(Se) && f && Xp(c));
                0 === (T(I).first_tag_on_page || 0) && (T(I).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!T(I).pause_ad_requests;
                Dp(e, b, d);
                !N(Se) && c && f && Xp(c)
            }
        }
    };
    let Yp = !1;

    function Rp(a, b, c) {
        Yp || (Yp = !0, a = Tp(a) || Hm(I), Sj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Tp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }
    const Up = () => {
            if (N(Oe)) {
                var a = $l(I);
                if (!(a = a && a.Ga)) {
                    try {
                        var b = I.localStorage
                    } catch (c) {
                        b = null
                    }
                    b = b ? xl(b) : null;
                    a = !(b && wl(b) && b)
                }
                a || am(I, 1)
            }
        },
        Xp = a => {
            $c(() => {
                ee(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
            })
        };

    function Vp(a, b) {
        if (T(I).skip_next_reactive_tag) T(I).skip_next_reactive_tag = !1;
        else {
            0 === (T(I).first_tag_on_page || 0) && (T(I).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner;
                const d = T(n);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            Bm(a, b);
            Kp(a, b)
        }
    }
    const Wp = a => {
            if (a) {
                if (!Bp(a) && (a.id ? a = Fp(a.id) : a = null, !a)) throw new R("'element' has already been filled.");
                if (!("innerHTML" in a)) throw new R("'element' is not a good DOM element.");
            } else if (a = Fp(), !a) throw new R("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            return a
        },
        Zp = () => {
            var a = new nk(I),
                b = N($e) ? new sp : new vp;
            const c = new wp;
            var d = I.__cmp ? 1 : 0;
            a = kk(a) ? 1 : 0;
            b = b.u() ? 1 : 0;
            if (!c.m) {
                if (!c.i) {
                    var e = Sc(c.u, "googlefcPresent");
                    c.i = e ? e : null
                }
                c.m = !0
            }
            Sj("cmpMet", {
                tcfv1: d,
                tcfv2: a,
                usp: b,
                fc: c.i ? 1 : 0,
                ptt: 9
            }, .001)
        },
        $p = a => {
            Vj().S[Yj(26)] = !!Number(a)
        },
        aq = a => {
            Number(a) ? T(I).pause_ad_requests = !0 : (T(I).pause_ad_requests = !1, a = () => {
                if (!T(I).pause_ad_requests) {
                    var b = {};
                    let c;
                    "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                    I.dispatchEvent(c)
                }
            }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
        },
        bq = a => {
            Sj("adsenseGfpKnob", {
                value: a,
                ptt: 9
            }, .1);
            switch (a) {
                case 0:
                case 2:
                    a = !0;
                    break;
                case 1:
                    a = !1;
                    break;
                default:
                    throw Error(`Illegal value of ${"cookieOptions"}: ${a}`);
            }
            I._gfp_a_ = a
        },
        dq = a => {
            try {
                Object.defineProperty(a, "requestNonPersonalizedAds", {
                    set: $p
                }), Object.defineProperty(a, "pauseAdRequests", {
                    set: aq
                }), Object.defineProperty(a, "cookieOptions", {
                    set: bq
                }), Object.defineProperty(a, "onload", {
                    set: cq
                })
            } catch {}
        };

    function cq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Op(a, b) {
        b = wm(qc(b.ob, M(xf).h(Ke.h, Ke.defaultValue) ? {
            bust: M(xf).h(Ke.h, Ke.defaultValue)
        } : {})).then(c => {
            null == xp && (c.init(a), xp = c, eq())
        });
        S.ga(723, b);
        b.finally(() => {
            yp.length = 0;
            Sj("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - Ap
            })
        })
    }
    const eq = () => {
        for (const [a, b] of zp) - 1 !== b && (n.clearTimeout(b), zp.delete(a));
        for (let a = 0; a < yp.length; a++) {
            if (zp.has(a)) continue;
            const b = yp[a],
                c = Qp(b);
            Qj(723, () => {
                if (3 === c) xp.handleAdConfig(b);
                else if (2 === c) {
                    var d = xp.handleAdBreakBeforeReady(b);
                    S.ga(730, d)
                }
            })
        }
    };

    function Sp(a) {
        var b = yp.length;
        if (2 === Qp(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === Ap && (Ap = Date.now());
            var c = n.setTimeout(() => {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), zp.set(b, -1), Sj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * O(We));
            zp.set(b, c)
        }
    };
    (function(a, b, c, d = () => {}) {
        S.Pa(Tj);
        Qj(166, () => {
            const e = fo(b);
            co(e);
            d();
            cd(16, [1, e.toJSON()]);
            var f = ed(dd(I)) || I;
            const g = c(eo({
                Ya: a,
                kb: C(e, 2)
            }), e);
            Sl(f, e);
            rn(f, e, null === I.document.currentScript ? 1 : Rm(g.rb));
            Nm();
            if (!ta() || 0 <= qa(wa(), 11)) {
                Pj(N(Ze));
                jp(e);
                hl();
                try {
                    uo()
                } catch {}
                ip();
                Pp(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    Sj("new_abg_tag", {
                        value: `${D(e,16)}`,
                        host_v: `${D(e,22)}`,
                        frequency: .01
                    }, .01);
                    Zp();
                    var l = {
                        push: v => {
                            Gp(v, g, e)
                        },
                        loaded: !0
                    };
                    dq(l);
                    if (h)
                        for (var k of ["requestNonPersonalizedAds",
                                "pauseAdRequests", "cookieOptions"
                            ]) void 0 !== h[k] && (l[k] = h[k]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Hp(h, g, e);
                    f.adsbygoogle = l;
                    h && (l.onload = h.onload);
                    (k = ep(g)) && document.documentElement.appendChild(k);
                    var {
                        supports: m,
                        error: u
                    } = tp();
                    Sj("modern_js", {
                        fy: B(r(e, 1), 0),
                        supports: String(m),
                        c: 2021,
                        e: u
                    }, .01)
                }
            }
        })
    })("m202212050101", "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < B(r(b, 1), 0) ? `_fy${B(r(b,1),0)}` : "";
        var d = C(b, 3);
        const e = C(b, 2);
        b = fd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        d = fd `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            ob: b,
            mb: fd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            lb: fd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            ac: fd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
            tb: d,
            rb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20230111\",\"r20190131\",null,null,null,null,\".google.com.kh\",null,null,null,[[[1082,null,null,[1]],[1220,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1217,null,null,[1]],[1122,null,null,[1]],[1218,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1184,null,null,[1]],[1219,null,null,[1]],[1190,null,null,[1]],[380254521,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[]],[10001,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1947,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,501545963,null,[null,1]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1115,null,[null,-1]],[null,1194,null,[null,1]],[null,469675170,null,[null,30000]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[10,[[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[10,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44768832,[[1160,null,null,[1]]]]]],[10,[[44767166],[44767167]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44777509,[[1200,null,null,[1]]]]],null,51],[1,[[31070201],[31070202,[[1210,null,null,[1]]]]]],[10,[[31071258],[31071259]]],[1000,[[31071630,[[null,null,14,[null,null,\"31071630\"]]],[6,null,null,null,6,null,\"31071630\"]],[31071631,[[null,null,14,[null,null,\"31071631\"]]],[6,null,null,null,6,null,\"31071631\"]]],[4,null,55],63],[1000,[[31071634,[[null,null,14,[null,null,\"31071634\"]]],[6,null,null,null,6,null,\"31071634\"]],[31071635,[[null,null,14,[null,null,\"31071635\"]]],[6,null,null,null,6,null,\"31071635\"]]],[4,null,55],63],[1000,[[31071636,[[null,null,14,[null,null,\"31071636\"]]],[6,null,null,null,6,null,\"31071636\"]],[31071637,[[null,null,14,[null,null,\"31071637\"]]],[6,null,null,null,6,null,\"31071637\"]]],[4,null,55],63],[1000,[[31071638,[[null,null,14,[null,null,\"31071638\"]]],[6,null,null,null,6,null,\"31071638\"]],[31071639,[[null,null,14,[null,null,\"31071639\"]]],[6,null,null,null,6,null,\"31071639\"]]],[4,null,55],63],[1000,[[31071640,[[null,null,14,[null,null,\"31071640\"]]],[6,null,null,null,6,null,\"31071640\"]],[31071641,[[null,null,14,[null,null,\"31071641\"]]],[6,null,null,null,6,null,\"31071641\"]]],[4,null,55],63],[1,[[44772268],[44772269,[[1185,null,null,[1]]]]]],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[200,[[44779793],[44779794,[[63682,null,null,[1]]]]],null,51],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44777421],[44779109],[44779906]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44776369],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[10,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[1,[[31071081,[[null,1103,null,[null,31071081]],[1121,null,null,[1]]]],[31071082,[[1120,null,null,[1]],[null,1103,null,[null,31071082]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,80,null,115,1],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[10,[[44778613,[[null,1103,null,[null,44778613]]]],[44778614,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,44778614]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[480632076,null,null,[1]],[469675169,null,null,[1]],[472491850,null,null,[1]]]]],[4,null,55],null,null,null,null,20,null,115,1],[10,[[44779076,[[null,1103,null,[null,44779076]]]],[44779077,[[1120,null,null,[1]],[null,1195,null,[null,5]],[null,1103,null,[null,44779077]],[null,1114,null,[null,0.4]],[null,1108,null,[null,1000]],[null,1194,null,[null,2]]]]],[4,null,55],null,null,null,null,430,null,115,1]]],[11,[[10,[[44781117],[44781118],[44781119,[[1957,null,null,[]]]]],null,48],[1000,[[31071235,[[483374575,null,null,[1]]]]],[4,null,8,null,null,null,null,[\"sharedStorage\"]]]]],[12,[[10,[[31071578],[31071579,[[1214,null,null,[1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[31071300,[[203,null,null,[1]]]],[31071301,[[203,null,null,[1]],[493422261,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[10,[[31071351],[31071352,[[424117738,null,null,[1]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[31070380],[31070381,[[477209535,null,null,[1]],[487608180,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[null,null,null,[null,null,null,[\"A\/6fvn8\/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N\/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nrjb\/iPi\/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,472572701],[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[null,null,null,[null,null,null,[\"A\/6fvn8\/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N\/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nrjb\/iPi\/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,472572701],[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[50,[[31071010],[31071011,[[1974,null,null,[1]]]]]],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[10,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[10,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/((?!10[012345])\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],[null,[]],null,null,1,\"erekerek2d.info\",1494955181,[44759875,44759926,44759837]]");