(function() {
    var n = "undefined",
        t = function(t) {
            return typeof t !== n
        },
        e = "js15_as.js",
        r = "",
        i = !1,
        o = !1,
        a = !1,
        s = !1,
        c = "0.2.1",
        u = 25,
        _ = "-",
        f = "_HISTATS_SID",
        d = "histats_custom_destDivProducer",
        p = function(n) {
            _ += "_" + n
        };
    p(c);
    var v = function() {
            i && console.log.apply(this, arguments)
        },
        l = function(n, r) {
            var i = n || {};
            try {
                var o = r.document,
                    a = r.navigator,
                    s = r.screen,
                    c = r.Date,
                    f = r.Math,
                    d = function() {
                        return o
                    },
                    p = function() {
                        return d().getElementsByTagName("body")[0] || d().getElementsByTagName("head")[0]
                    },
                    l = function(n) {
                        return "function" == typeof n
                    },
                    h = function(n) {
                        return t(n) && n instanceof Array
                    },
                    m = function(n) {
                        return t(n) && !!d().getElementById(n)
                    },
                    y = function(n) {
                        var e = !1;
                        if (t(n)) {
                            if ("NaN" == parseInt(n)) return !1;
                            e = parseInt(n) > 0
                        }
                        return e
                    },
                    g = function(n) {
                        return y(n) ? parseInt(n) : 0
                    },
                    w = function(n) {
                        return "string" != typeof n || n.length < 1 ? n : n.replace(/^['"]?(.*)['"]$/, "$1")
                    },
                    T = t(window["_DEBUG_HISTATS_ASYNCR_DO_NOT_AUTOSTART"]),
                    I = function() {
                        return parseInt(1e4 * f.random()) + 1
                    },
                    H = function() {
                        return Math.floor(4e8 * Math.random()) - 2e8
                    },
                    C = I(),
                    E = "histats_counter",
                    b = H(),
                    S = function(n, e, r) {
                        if (!t(n)) return t(r) && r(n), void 0;
                        for (var i in n) n.hasOwnProperty(i) && e(i, n[i], n)
                    },
                    R = 0,
                    O = function() {
                        R++
                    },
                    A = function(n) {
                        return "string" == typeof n
                    },
                    D = function(n) {
                        var e = !1;
                        return t(n) && A(n) && (e = (n + "").length > 0), e
                    },
                    N = "1000",
                    U = "0",
                    B = "0.php?";
                i.o_i = 0, i.ver = 16, i.eve = 3, i.cver = 0, i.s_id = 0, i.s_pd = 0, i.d_op = 0, i.i_dom = 4, i.i_id = 0, i.i_w = 0, i.i_h = 0, i.i_b = "", i.s_d = "", i.s_u = "", i.s_l = "0", i.s_t = "", i.d_s = 0, i.d_fa = 0;
                var j = 0,
                    F = 0;
                i.d_tf = 0, i.d_nv = 1, i.d_mu = 0, i.d_cv = 0, i.d_cs = 0, i.d_cp = 0, i.d_pON = 0;
                var G = 45e3,
                    x = 0;
                i.d_pn = 0, i.d_pt = 0, i.f_pv = 0, i.s_ta = "", i.a_va = [], i.s_ti = "", i.asi = 0, i.o_fa = 0, i.o_de = 0, i.o_BC = 0, i.o_fr = 0, i.p_ff = 0, i.n_a = "", i.n_f = 0, i.n_n = 0, i.o_n = 0;
                var k = 31536e6;
                i.c_on = 0, i.s_sc1 = "1", i.s_sc2 = "11111111", i.s_asc2 = {};
                var L = function() {
                        return i.i_id
                    },
                    M = function(n) {
                        i.i_id = g(n)
                    },
                    q = function() {
                        return 700 == L() || 0 == L()
                    },
                    P = function() {
                        var n = L();
                        return !q() && n > 0 && n < 5e3
                    },
                    z = function() {
                        return L() >= 8e3 && L() < 9e3
                    },
                    J = function() {
                        return L() >= 1e4 && L() < 10100
                    },
                    W = function() {
                        return L() >= 500 && L() < 600
                    },
                    Y = function(n) {
                        artificialFrameRequestReference = r.setTimeout(n, 1e3 / u)
                    },
                    $ = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || r.oRequestAnimationFrame || Y,
                    K = function() {
                        return 1 == i.asi || "1" == i.asi
                    },
                    V = function() {
                        i.asi = 1
                    },
                    Q = "";
                i.fasi = function(n) {
                    i.asi = n
                };
                var X = "https://",
                    Z = function() {
                        try {
                            return "https:" === o.location.protocol ? "https://" : "http://"
                        } catch (n) {
                            return "https://"
                        }
                    },
                    nn = function() {
                        try {
                            return "https:" === o.location.protocol
                        } catch (n) {
                            return !1
                        }
                    },
                    tn = function() {
                        return "s10.histats.com"
                    },
                    en = function() {
                        return "s10.histats.com"
                    },
                    rn = function() {
                        return "s" + i.i_dom + ".histats.com"
                    },
                    on = function() {
                        return "s" + i.i_dom + "i.histats.com"
                    },
                    an = function(n) {
                        d().writeln('<script type="text/javascript" language="JavaScript" src="' + n + '"></script>')
                    },
                    sn = function(n) {
                        return '<script type="text/javascript" language="JavaScript" >document.writeln(\'' + n + "');</script>"
                    },
                    cn = function(n) {
                        d().writeln(sn(n))
                    },
                    un = function(n) {
                        d().write(n)
                    },
                    _n = function() {
                        var n = '<div id="' + Bn() + '" style="display: none;"></div>';
                        un(n), E = Bn()
                    },
                    fn = function() {
                        var n = d().createElement("div");
                        n.id = Bn();
                        var t = d().getElementById("histats_counter");
                        t ? t.appendChild(n) : v("err_10")
                    },
                    dn = !0,
                    pn = [0, 1500, 5e3],
                    vn = function(n, t, e) {
                        var r = [0, 1500, 5e3],
                            i = [],
                            o = !1;
                        for (var a in r) {
                            var s = r[a],
                                c = function(n) {
                                    for (; i.length;) {
                                        var t = i.pop();
                                        clearTimeout(t)
                                    }
                                    o || (o = !0, e(n))
                                },
                                u = setTimeout(function() {
                                    dn && ln(n, c)
                                }, s);
                            i.push(u)
                        }
                    },
                    ln = function(n, t) {
                        var e = d().createElement("script");
                        try {
                            e.async = !0
                        } catch (r) {}
                        e.type = "text/javascript", e.src = n, e && "function" == typeof t && (e.readyState ? e.onreadystatechange = function() {
                            var n = e.readyState;
                            ("loaded" == n || "complete" == n || parseInt(n) > 1) && (e.onreadystatechange = null, t(r))
                        } : "function" == typeof e.addEventListener ? e.addEventListener("load", function(n) {
                            t(n)
                        }) : dn = !1), p().appendChild(e)
                    },
                    hn = function() {
                        return 1 == i.p_ff
                    },
                    mn = function() {
                        return i.p_ff = 1
                    },
                    yn = function() {
                        return i.o_fa > 0
                    },
                    gn = function() {
                        return i.o_fa = 1
                    };
                i.is = t, i.isd = y;
                var wn = function() {
                        return i.s_id
                    },
                    Tn = function() {
                        return wn() < 1
                    },
                    In = function(n) {
                        i.s_id = g(n)
                    },
                    Hn = function() {
                        return Cn(wn())
                    },
                    Cn = function(n) {
                        return y(n)
                    },
                    En = function(n) {
                        if (m(n)) return d().getElementById(n)
                    },
                    bn = function() {
                        return En(Fn()) || En(Bn())
                    },
                    Sn = function() {
                        return En(Bn()) || En(Fn())
                    },
                    Rn = function() {
                        var n = Sn();
                        return n && (n.style.display = "block"), n
                    },
                    On = function(n) {
                        try {
                            var t = Rn();
                            if (t) return t.innerHTML = n, !0
                        } catch (e) {}
                        return !1
                    },
                    An = function(n) {
                        try {
                            var t = bn();
                            if (t) return t.style.display = "block", t.innerHTML = n, !0
                        } catch (e) {}
                        return !1
                    },
                    Dn = function(n) {
                        return n.id
                    },
                    Nn = function(n, t) {
                        var e = (t + "").match("(^|;)\\s*" + n + "\\s*=\\s*([^;]+)");
                        return e ? e.pop() : ""
                    },
                    Un = function(n) {
                        return Nn(n, d().cookie)
                    },
                    Bn = function() {
                        return "histats_counter_" + C
                    },
                    jn = function() {
                        return "histats_counter_" + wn() + "_" + L()
                    },
                    Fn = function() {
                        return "histats_counter"
                    };
                i.GC = Un;
                var Gn = function(n) {
                        var t = n + wn();
                        return Un(t)
                    },
                    xn = function(n) {
                        return D(n) ? r.encodeURIComponent ? r.encodeURIComponent(n) : r.escape(n).split("@").join("%40") : ""
                    };
                i.ENCODE = xn;
                var kn = function(n) {
                    if (!D(n)) return "";
                    try {
                        return r.decodeURIComponent ? r.decodeURIComponent(n) : r.unescape(n)
                    } catch (t) {
                        try {
                            return unescape(n)
                        } catch (t) {
                            v(t, n)
                        }
                    }
                };
                i.DECODE = kn;
                var Ln = function(n) {
                    try {
                        return r.decodeURIComponent ? r.decodeURIComponent(n) : n
                    } catch (t) {
                        return v(t, n), n
                    }
                };
                i.DECODEuri = Ln;
                var Mn = function(n, t, e) {
                        try {
                            if (i.o_BC) return "";
                            var r, o;
                            o = new c, o.setTime(o.getTime() + e), r = e > 0 ? "; expires=" + o.toGMTString() : "; expires=Thu, 01-Jan-1970 00:00:01 GMT", d().cookie = n + "=" + t + r + "; path=/"
                        } catch (a) {
                            v(this, a)
                        }
                    },
                    qn = function(n, t) {
                        return Mn(n + wn(), t, k)
                    },
                    Pn = function(n) {
                        Mn(n, "", -1)
                    };
                i.SC = Mn, i.framed_page = function() {
                    i.o_fr = 1
                }, i.start = function(n, t, e, r, o, a, s) {
                    In(t), i.i_dom = e, M(r), i.i_w = o, i.i_h = a, i.s_sc2 = s, (i.s_sc2.length > 8 || i.s_sc2.length < 1) && (i.s_sc2 = "")
                }, i.init = function() {
                    if (!i.o_i) {
                        ++i.o_i;
                        var n = new r.Date;
                        i.o_n = n.getTime(), i.n_a = a.appName, ("Opera" === i.n_a || a.userAgent.indexOf("Firefox") >= 0) && (i.n_f = 1), i.s_u = d().URL ? d().URL : d().location, i.s_u = Ln(i.s_u).substr(0, 500), N = d().referrer + "", i.s_ti = d().title, i.s_ti = Ln(i.s_ti).substr(0, 500);
                        var t = -1;
                        try {
                            i.d_s = s.width, i.o_fr && r.top != r.self && (N = "" + r.top.document.referrer), i.s_l = a["language"] || a.browserLanguage || "", "lt" == i.s_l.substr(0, 2) && (i.s_l = "lT"), "gt" == i.s_l.substr(0, 2) && (i.s_l = "gT"), i.s_l.length < 1 && (i.s_l = "0"), t = N.indexOf("//" + d().location.host)
                        } catch (e) {
                            i.s_l = "0", N = "1000", i.d_s = "0"
                        }
                        if (i.d_s = g(i.d_s), N = N.substr(0, 500), j = g(Gn("HstCla")), i.d_fa = g(Gn("HstCfa")), g(Gn("NoHits") > 0) && gn(), i.d_fa < 1 && (i.d_fa = i.o_n, qn("HstCfa", i.d_fa)), i.d_nv = 1, qn("HstCla", i.o_n), i.c_on = g(Gn("HstCla")), i.c_on > 0) {
                            j > 0 && (F = parseInt(i.o_n - j)), i.d_fa > 0 && (i.d_tf = parseInt(i.o_n - i.d_fa)), i.d_pn = g(Gn("HstPn")), i.d_pt = g(Gn("HstPt")), i.d_cv = g(Gn("HstCnv")), i.d_cs = g(Gn("HstCns")), i.d_mu = g(Gn("HstCmu")), i.d_pn++, i.d_pt++;
                            var o = 1e3,
                                c = 3600 * o,
                                u = 24 * c * 30.4,
                                _ = 600 * o,
                                f = 45 * o;
                            parseInt(i.o_n - i.d_mu) >= u && (qn("HstCmu", i.o_n), i.d_mu = 0), i.d_mu++, j < 1 || F >= u ? (i.d_pn = 1, i.d_cv = 1, i.d_pt = 1, i.d_cs = 1) : F > 0 && (F < c ? i.d_nv = 0 : (i.d_pn = 1, i.d_cv++), F > _ && i.d_cs++), i.d_cv < 1 && (i.d_cv = 1), 1 == i.d_nv && r.setTimeout(function() {
                                i.track_event("b")
                            }, f), qn("HstPn", i.d_pn), qn("HstPt", i.d_pt), qn("HstCnv", i.d_cv), qn("HstCns", i.d_cs)
                        }
                        D(N) && 1 == i.d_nv && t < 1 ? qn("c_ref_", xn(N)) : (D(kn(Un("c_ref_" + wn()))) && (N = kn(Un("c_ref_" + wn()))), D(N) || (N = "1000")), i.d_op = Un("c_pd_" + wn()), y(i.d_op) || (i.d_op = 0), i.s_pd > 0 && qn("c_pd_", i.s_pd)
                    }
                };
                var zn = function() {
                        try {
                            return (new Date).getTimezoneOffset() * -1
                        } catch (n) {
                            return 0
                        }
                    },
                    Jn = function() {
                        try {
                            return Math.round((new Date).getTime() / 1e3)
                        } catch (n) {
                            return 0
                        }
                    },
                    Wn = function(n) {
                        return n / 60
                    },
                    Yn = function() {
                        i.init(), U = "" + (wn() + "") + ("&@f" + i.ver) + ("&@g" + i.d_nv) + ("&@h" + i.d_pn) + ("&@i" + i.d_cv) + ("&@j" + i.c_on) + ("&@k" + F) + ("&@l" + i.d_pt) + ("&@m" + xn(i.s_ti)) + ("&@n" + i.imp_v()) + ("&@o" + xn(N)) + ("&@q" + i.s_pd) + ("&@r" + i.d_op) + ("&@s" + L()) + ("&@t" + xn(i.s_l)) + ("&@u" + i.d_s) + ("&@b1:" + H()) + ("&@b3:" + Jn()) + ("&@b4:" + xn("undefined" != typeof e ? e : "err")) + ("&@b5:" + zn()) + ("&@a" + xn(_)) + ("&@v" + xn(i.s_u))
                    };
                i.add_v = function(n, t) {
                    D(n) && D(t) && ("tags" == n && (t = t.split(";").join(",")), i.a_va[g(i.a_va.length)] = xn(n) + "=" + xn(t))
                }, i.imp_v = function() {
                    var n = "0";
                    if ("undefined" != typeof r.Histats_variables) {
                        var t = r.Histats_variables;
                        if (t.length > 0 && t.length % 2 == 0)
                            for (var e = 0; e < t.length;) i.add_v(t[e], t[e + 1]), e += 2
                    }
                    var o = i.a_va.length;
                    return o < 1 ? n : (n += i.a_va.join("|"), n.substr(0, 300))
                };
                var $n = function(n) {
                        if (y(i.i_dom) && !Tn()) {
                            var t = "https://" + rn() + n + "&@w";
                            ln(t)
                        }
                    },
                    Kn = function() {
                        if (y(i.i_dom) && !Tn()) {
                            var n = X + rn() + "/stats/" + B + U + "&@w";
                            K() ? fn() : _n(), ln(n)
                        }
                    };
                i.load_JScall = Kn, i.load_GIFimg = O, i.load_GIFicon = O, i.load_gifImgOrTopImg = i.load_GIFimg, i.track_hits = function() {
                    yn() || (Yn(), J() ? (B = "i/" + wn() + ".gif?", i.load_gifImgOrTopImg()) : z() ? (B = L() + ".gif?", i.load_GIFicon()) : q() || W() ? (tt("1"), B = "0.php?", Kn(), lt()) : (B = wn() + ".php?", Kn()))
                };
                var Vn = function() {},
                    Qn = function() {
                        x++
                    },
                    Xn = function() {
                        return x > 100
                    };
                i.track_event = function(n, t) {
                    if (!Xn()) {
                        Qn();
                        var e = "/stats/e.php?" + (wn() + "") + ("&@A" + n + "&@R" + f.ceil(1e5 * f.random()));
                        $n(e)
                    }
                };
                var Zn = function(n) {
                        tt(n), lt()
                    },
                    nt = function(n) {
                        ut(n), lt()
                    };
                r.chfh = Zn, r.chfh2 = nt;
                var tt = function(n) {
                        A(n) && (i.s_sc1 = n)
                    },
                    et = function(n) {
                        var t = {};
                        n = w(n);
                        try {
                            if (A(n))
                                for (var e = /([0-9]+)([^=]+)=([^#]+)/g, r, i = 1; i++ < 100 && null != (r = e.exec(n));) 4 == r.length && (t[r[1]] = r[2] + "=" + r[3])
                        } catch (o) {
                            v(this, o)
                        }
                        return t
                    },
                    rt = function() {
                        return D(i.s_sc2) ? ("" + i.s_sc2).split("") : []
                    },
                    it = function(n, t) {
                        var e = "";
                        for (var r in n) "1" == n[r] && t[r] && (e = e + t[r] + "#");
                        return e
                    },
                    ot = function(n, t) {
                        var e = [];
                        for (var r in n)
                            if ("1" == n[r] && t[r]) {
                                var i = t[r].split("=", 2);
                                e.push({
                                    name: i[0],
                                    value: i[1]
                                })
                            }
                        return e
                    },
                    at = function(n) {
                        return "_HistatsCounterGraphics_" + n
                    },
                    st = function(n) {
                        var t = at(L()) + "_setValues";
                        r[t] = n
                    },
                    ct = function(n) {
                        return X + en() + "/counters/cc_" + n + ".js"
                    },
                    ut = function(n) {
                        i.s_asc2 = et(n);
                        var t = rt();
                        i.s_sc1 = it(t, i.s_asc2), st(ot(t, i.s_asc2))
                    };
                i.sc1 = ut, r._HST_cntval || (r._HST_cntval = "");
                var _t = {
                        counterObjInstance: void 0
                    },
                    ft = function() {
                        return {
                            main_div_name: Bn(),
                            siteId: wn()
                        }
                    },
                    dt = function() {
                        var n = ct(L());
                        ln(n, function() {
                            var n = r[at(L())],
                                t = Rn();
                            t && (_t.counterObjInstance = n(ft(), r), null != _t.counterObjInstance && _t.counterObjInstance.start())
                        })
                    },
                    pt = function(n) {
                        return n > 0 && n < 400
                    },
                    vt = function() {
                        "undefined" != typeof st_dominio && y(st_dominio) && (i.i_dom = st_dominio), "undefined" != typeof cimg && y(cimg) && M(cimg), "undefined" != typeof cwi && y(cwi) && (i.i_w = cwi), "undefined" != typeof che && y(che) && (i.i_h = che), "undefined" != typeof s_sid && y(s_sid) && In(s_sid), "undefined" != typeof zstpagid && y(zstpagid) && (i.s_pd = zstpagid), "undefined" != typeof uhist && y(uhist) && (i.o_BC = 1), "undefined" != typeof ExFd && y(ExFd) && i.framed_page()
                    };
                i.oldcode_start = vt;
                var lt = function() {
                    P() && !hn() && (mn(), dt())
                };
                i.load_flash = lt;
                var ht = function() {
                    try {
                        var n = r["_Hasync"];
                        if ("undefined" != typeof n && "function" == typeof n.push)
                            for (var t in n) {
                                var e = null;
                                e = r[n[t][0]];
                                var o = n[t][0].split(".");
                                "Histats" == o[0], 2 == o.length && (e = i[o[1]]), "function" == typeof e && e.apply(i, (n[t][1] + "").split(","))
                            }
                    } catch (a) {
                        v(a)
                    }
                };
                T || ht(), i.filename = e
            } catch (mt) {}
            return i
        };
    r += "__ALLJS__", r += "_ASYNC_", r += "_NOTGIF_";
    var h = window["Histats"] || {},
        m = window,
        y = "_DEBUG_HISTATS_RESET_PARENT",
        g = "_DEBUG_HISTATS_USE_MOCKED_WINDOW",
        w = "_DEBUG_HISTATS_RETURN_BUILDER",
        T = "_DEBUG_HISTATS_forced";
    o = t(window[y]) && 1 == window[y], a = t(window[g]) && window[g] === !0, s = t(window[w]) && window[w] === !0, i = t(window[T]) && window[T] === !0, i = i || o || a, i && (window["histats_counters_byType"] = window["histats_counters_byType"] || {}, window["histats_counters_byType"][r] = window["histats_counters_byType"][r] || [], window["histats_counters_byType"][r].push(e)), o && (h = {}), a && (m = window["mocked_window"]), i ? s ? window["histatsByName_" + e] = l : window["histatsByName_" + e] = l(h, m) : window["Histats"] = l(h, m)
}).call(this);