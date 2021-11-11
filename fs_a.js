
    var ___ = function() {},
        ___UN, _$m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        _$M = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agust", "Sep", "Okt", "Nov", "Des"],
        _80 = "http://",
        __0 = "warungbebas.com",
        __1 = "www." + __0,
        _$s = _80 + "dns." + __0,
        _$Si = _80 + "images." + __0,
        _$0 = _80 + "suport." + __0,
        _$S = _80 + __1,
        _$1 = _80 + "public." + __0,
        _$date = new Date(),
        _$year = _$date.getFullYear(),
        fs = {
            IE: document.all ? !0 : !1,
            loc: location.href,
            host: location.hostname,
            UN: "undefined",
            clickCount: 0,
            clickCond: function() {
                if (fs.clickCount % 3 == 0) {
                    return !0
                }
                return !1
            },
            un: function(a) {
                return typeof a != fs.UN
            },
            $_win_atr: function(x, y) {
                var s = window.screen,
                    X = s.width,
                    Y = s.height;
                return "toolbar=no,scrollbars=yes,left=10,top=10,width=" + (X - x) + ",height=" + (Y - y)
            },
            $_win_c: function(o, l) {
                var p, s = window.screen;
                if (o == "l") {
                    p = (s.width / 2) - (l / 2)
                } else {
                    p = (s.height / 2) - (l / 2)
                }
                return p
            },
            $: function(a) {
                return document.getElementById(a.replace("#", ""))
            },
            raw: function(s, o) {
                s = (s + "").toString();
                return o ? decodeURIComponent(s) : encodeURIComponent(s)
            },
            $_raw: function(s) {
                return fs.raw(s, 0)
            },
            $_rand: function(a) {
                return Math.floor(a * Math.random())
            },
            $_cutStr: function(s, P, w) {
                var p = (P) ? P : 50,
                    x, y, z;
                x = s.substring(0, p - 4);
                y = x.lastIndexOf(" ");
                z = s.substring(0, y);
                if (s.length < p) {
                    s = s
                } else {
                    s = (w ? z : x) + " ..."
                }
                return s
            },
            $_NumF: function(s, a) {
                var a = a || "",
                    r = /(\d+)(\d{3})/;
                s += "";
                x = s.split(".");
                y = x[0];
                z = x.length > 1 ? "." + x[1] : "";
                while (r.test(y)) y = y.replace(r, "$1" + "." + "$2");
                return a + y + z
            },
            $_remTag: function(t, c) {
                t = t.replace(/<[a-zA-Z\/][^>]*>/gi, " ");
                c = (c < t.length - 1) ? c : t.length - 2;
                while (t.charAt(c - 1) != " " && t.indexOf(" ", c) != -1) c++;
                t = t.substring(0, c - 1);
                return t + " ..."
            },
            $_url: function(s) {
                return s.replace("http://", "").replace("https://", "")
            },
            $_adf_ly: function(a) {
                return (a.indexOf("/adf.ly/") == -1) ? "https://web.archive.org/web/20140208205155/http://adf.ly/28948/" + fs.raw(a) : a
            },
            $_encode: function(a) {
                return a.replace(/[^a-zA-Z 0-9]+/g, " ").replace(/\s{2,}/g, " ").replace(/\s+$/, "").replace(/^\s+/, "").replace(/ /g, "\+")
            },
            $_plus_min: function(s) {
                return s.replace(/\+/g, "-")
            },
            $_get_ttl: function() {
                return document.title
            },
            evenODD: function(i) {
                return i % 2 == 0 ? "even" : "odd"
            },
            args: function(a, b) {
                return Array.prototype.slice.call(a, b ? b : 1)
            },
            getParam: function(a, b) {
                a = a.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                var d = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(b);
                return d == null ? "" : fs.raw(d[1], 1)
            },
            $_GET: function(s) {
                if (s) {
                    return fs.getParam(s, fs.loc)
                } else {
                    var a = location.search,
                        b = a.length,
                        c = {},
                        d, e, f;
                    if (b > 1) {
                        d = a.substring(1, b).split("&");
                        for (e = 0; e < d.length; e++) {
                            f = d[e].split("=");
                            c[f[0]] = fs.raw(f[1], 1)
                        }
                    }
                    return c
                }
            },
            isExtURL: function(u) {
                var r = u.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),
                    l = location.protocol,
                    s = "string",
                    v = !1;
                if (typeof r[1] === s && r[1].length > 0 && r[1].toLowerCase() !== l) {
                    v = !0
                }
                if (typeof r[2] === s && r[2].length > 0 && r[2].replace(new RegExp(":(" + {
                        "http:": 80,
                        "https:": 443
                    } [l] + ")?$"), "") !== fs.host) {
                    v = !0
                }
                return v
            },
            qi: function(t, o) {
                return o ? btoa(t) : atob(unescape(t))
            },
            $_$: function(u) {
                return fs.host === u.split("/")[2]
            },
            mo: function(s, o) {
                var a = "%5F%3",
                    b = "%5F",
                    A = "%7E%3",
                    B = "%7E",
                    R = {
                        "a": a + 1 + b,
                        "i": a + 2 + b,
                        "u": a + 3 + b,
                        "e": a + 4 + b,
                        "o": a + 5 + b,
                        "A": A + 1 + B,
                        "I": A + 2 + B,
                        "U": A + 3 + B,
                        "E": A + 4 + B,
                        "O": A + 5 + B
                    },
                    r = {},
                    x = fs.replace,
                    y = fs.qi,
                    z = unescape;
                $.each(R, function(k, v) {
                    r[k] = z(v)
                });
                return o ? y(x(s, r, "g", 0), 1) : x(y(s), r, "g", 1)
            },
            replace: function(s, d, i, o) {
                $.each(d, function(k, v) {
                    s = s.replace(new RegExp(o ? v : k, i ? i : "gi"), o ? k : v)
                });
                return s
            },
            $_data: function(s, i, t, a) {
                return $.ajax({
                    type: "GET",
                    url: s,
                    success: i ? i : ___,
                    cache: t ? t : 1,
                    dataType: a ? a : "script"
                })
            },
            feng: function(a, b, c, d) {
                var e = 0,
                    f, h = [{
                        b: _$1,
                        p: {
                            d: "/downloads.php",
                            i: "/pictures.php",
                            f: "/open.php",
                            r: "/go.php"
                        },
                        c: "?"
                    }, {
                        b: _$S + "/p/function.html?option=",
                        p: {
                            d: "d",
                            i: "i",
                            f: "f",
                            r: "r"
                        },
                        c: "&"
                    }],
                    i = {},
                    j = btoa;
                if (a && h[e].p[a] != null && b) {
                    f = h[e].b + h[e].p[a] + h[e].c;
                    i.query = j(b);
                    if (c) i.request = j(c);
                    if (d) i.title = j(d);
                    if (a == "d") i.timer = 10;
                    f += $.param(i)
                } else {
                    f = _$S
                }
                return f
            },
            ERROR: !1
        };
    (function(w, a, b, c, d) {
        var A = function(u, t) {
                w.open(c("i", u, (t ? t : d), d))
            },
            F = function() {
                return fs.clickCount++
            },
            B = function(u, t) {
                w.open((a() ? b(u) : c("d", u, (t ? t : d))));
                F()
            },
            C = function(u, t) {
                w.open((a() ? b(u) : c("r", u, (t ? "open " + t : "open page"))));
                F()
            },
            D = function(u, t) {
                w.open((a() ? b(u) : c("f", u, (t ? t : "Open Document"), d)));
                F()
            },
            E = function(x, y) {
                w.open(c("f", y, x))
            };
        w.open_image = A;
        w.download = B;
        w.openurl = C;
        w.openurlIfr = D;
        w.popme = E
    })(window, fs.clickCond, fs.$_adf_ly, fs.feng, document.title);
}
