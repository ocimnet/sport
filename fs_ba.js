    var _$_00 = " onmouseout='fs.tt.hide()' onmouseover='fs.tt.show(\"",
        _$_01 = "<a oncontextmenu='return !1' onclick='fs.ajaxBrowseMe(\"";
    $.support.cors = !0;
    (function($) {
        $.cookie = function(b, j, m) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(j)) || j === null || j === ___UN)) {
                m = $.extend({}, m);
                if (j === null || j === ___UN) {
                    m.expires = -1
                }
                if (typeof m.expires === "number") {
                    var d = m.expires,
                        t = m.expires = new Date();
                    t.setDate(t.getDate() + d)
                }
                j = String(j);
                return (document.cookie = [fs.raw(b), "=", m.raw ? j : fs.raw(j), m.expires ? "; expires=" + m.expires.toUTCString() : "", m.path ? "; path=" + m.path : "", m.domain ? "; domain=" + m.domain : "", m.secure ? "; secure" : ""].join(""))
            }
            m = j || {};
            var D = m.raw ? function(s) {
                    return s
                } : decodeURIComponent,
                p = document.cookie.split("; ");
            for (var i = 0, P; P = p[i] && p[i].split("="); i++) {
                if (D(P[0]) === b) return D(P[1] || "")
            }
            return null
        }
    })(jQuery);
    fs.uncmt = function(s) {
        return $.trim($(s).html().split("<!--")[1].split("-->")[0])
    };
    (function(A, B, C) {
        var D = function() {
            var E = 5,
                F = 5,
                G = 300,
                H = 20,
                I = 70,
                J = 85,
                K = 0,
                L, M;
            return {
                show: function(a, b) {
                    var c, d;
                    if (L == null) {
                        L = B.createElement("div");
                        L.setAttribute("id", "tt");
                        M = B.createElement("div");
                        M.setAttribute("id", "ttcont");
                        L.appendChild(M);
                        D.c(0, 0);
                        B.body.appendChild(L);
                        B.onmousemove = function(e) {
                            var f = e.pageY,
                                g = e.pageX,
                                h = L.offsetHeight + E,
                                i = L.offsetWidth + F,
                                j = A.innerWidth - (i + 100),
                                k, l;
                            if (f > h) {
                                k = (f - h) + "px";
                                if (g > j) {
                                    l = (g - i) + "px"
                                } else if (g < j) {
                                    l = (g + F) + "px"
                                }
                            } else if (f < h) {
                                k = (f + (E * 2)) + "px";
                                if (g > j) {
                                    l = (g - i - F) + "px"
                                } else if (g < j) {
                                    l = (g + (F * 3)) + "px"
                                }
                            }
                            L.style.top = k;
                            L.style.left = l
                        }
                    }
                    M.innerHTML = a;
                    L.style.display = "block";
                    L.style.width = b ? b + "px" : "auto";
                    c = L.offsetWidth;
                    if (!b) {
                        d = c
                    }
                    if (c > G) {
                        d = G + "px"
                    }
                    if (b) {
                        d = b + "px"
                    }
                    L.style.width = d;
                    C(L.t);
                    D.b(1)
                },
                hide: function() {
                    C(L.t);
                    D.b(-1)
                },
                a: function(a) {
                    var b = K,
                        c = H;
                    if ((b != J && a == 1) || (b != 0 && a == -1)) {
                        if (J - b < H && a == 1) {
                            c = J - b
                        } else if (K < H && a == -1) {
                            c = b
                        }
                        K = b + (c * a);
                        D.c(K, .01)
                    } else {
                        C(L.t);
                        if (a == -1) {
                            L.style.display = "none"
                        }
                    }
                },
                b: function(a) {
                    L.t = setInterval(function() {
                        D.a(a)
                    }, I)
                },
                c: function(a, b) {
                    L.style.opacity = a * b;
                    L.style.filter = "alpha(opacity=" + a + ")"
                }
            }
        }();
        A.fs.tt = A.tooltip = D
    })(window, document, clearInterval);
    fs.$_R = function(k) {
        return k.replace(/\'/g, "").replace(/&#39;/g, "&#8217;").replace(/&quot;/g, "").replace(/\"/g, "")
    };
    fs.formSE = function(a) {
        var b = $(a),
            q = b.data("target"),
            c = b.find(".q"),
            n = c.data(),
            o = n.nobg,
            d = n.background,
            e = "url(" + (d ? d : "https://3.bp.blogspot.com/-75yOt9t9yNE/TshWxrEKlKI/AAAAAAAABI4/Kpf84ktotGc/s800/wb_search_watermark.gif") + ")",
            f = c.val(),
            h = function() {
                if (f == "" && o == null) {
                    c.css({
                        backgroundImage: e
                    })
                }
            },
            p = function() {
                if (o == null) {
                    c.css({
                        backgroundImage: "none"
                    })
                }
                c.select()
            };
        c.blur(function() {
            f = $(this).val();
            h()
        }).keyup(function() {
            f = $(this).val()
        }).focus(p);
        h();
        b.submit(function() {
            var i = fs.$_encode(f),
                j = b.find(".ext").val(),
                k = _$S + "/p/search.html",
                l = "site%3Aocimnet.blogspot.com+",
                m;
            if (f != "") {
                if (j == "topik") {
                    m = "/search?q=" + i
                } else if (j == "video") {
                    m = _$S + "/p/video.html?ext=match&start-index=1&q=" + i
                } else if (j == "google") {
                    m = "https://www.google.co.id/search?q=" + l + i
                } else if (j == "yahoo") {
                    m = "https://search.yahoo.com/search?p=" + l + i
                } else if (j == "bing") {
                    m = "https://www.bing.com/search?q=" + l + i
                } else {
                    m = k + "?ext=" + j + "&q=" + i
                }
                window.open(m, q ? q : "_top")
            } else {
                alert("Masukkan kata kunci!")
            }
            return !1
        }).show()
    };
    fs.toTbl = {
        stripe: function(a, b) {
            var c = $(a + " .tabel"),
                d = $(".tbl0"),
                e = "cellpadding";
            if (c.fs()) {
                c.addClass("stripe")
            }
            if (b && d.fs() && !d.attr(e)) {
                d.attr(e, "0")
            }
        },
        $: function(x, y, t) {
            t = $.extend({}, {
                a: "<table class=tabel>",
                b: "</table>",
                c: "<tr>",
                d: "</tr>",
                e: "<td>",
                f: "</td>",
                g: "<td colspan=%n%>"
            }, t);
            var T = x.length,
                c = y - (T - y * Math.floor(T / y)) + 1,
                s = t.a;
            $.each(x, function(k, v) {
                switch (!0) {
                    case k == 0:
                        s += t.c + t.e + v + t.f;
                        break;
                    case (k + 1) % y == 0:
                        s += t.e + v + t.f + t.d + t.c;
                        break;
                    case k == T - 1:
                        s += t.g.replace("%n%", c) + v + t.f + t.d;
                        break;
                    default:
                        s += t.e + v + t.f;
                        break
                }
            });
            s += t.b;
            return s
        }
    };
    fs.$_tt = function(a) {
        var b = "onmouseover",
            c = "title",
            d = function(e) {
                if (!e.hasClass("sirri") && !e.hasClass("sirri-text") && !e.hasClass("fsnott") && !e.attr(b) && e.parents().get(0).tagName != "A") {
                    return !0
                }
                return !1
            };
        $(a + " acronym[" + c + "]").attr({
            onmouseover: function() {
                return "fs.tt.show('<b>" + this.innerHTML + ":</b> " + this[c] + "')"
            },
            onmouseout: "fs.tt.hide()"
        }).removeAttr(c);
        $(a + " a[" + c + "]").each(function() {
            var z = $(this);
            if (d(z)) {
                z.fs("tt", {
                    c: fs.$_YM(z.attr(c))
                }).removeAttr(c)
            }
        });
        $(a + " img[" + c + "]").each(function() {
            var z = $(this);
            if (d(z)) {
                z.fs("tt", {
                    c: "<center><img class=fs_atrplusImg src=" + z.attr("src") + "><br><div class=fsatrplusDiv>" + fs.$_R(z.attr(c)) + "</div></center>"
                })
            }
            z.removeAttr(c)
        })
    };
    fs.$_css = function(f) {
        if ($("#s_" + f).fs()) {
            return
        }
        $("head").append($("<link/>").attr({
            href: _$s + "/css/" + f + ".css",
            type: "text/css",
            rel: "stylesheet",
            media: "screen",
            charset: "utf-8",
            id: "s_" + f
        }))
    };
    fs.FS = {
        videos: _$s + "/js/fs_videos_i.js",
        imgPost: _$s + "/js/fs_img_post_i.js",
        SWF: _$s + "/js/fs_swfobject.js",
        attr: function(a) {
            return _$s + "/js/attr/" + a + ".js"
        },
        f: function(a) {
            return _$s + "/js/" + a + ".js"
        },
        ajax: function(a, b, c) {
            return _$s + "/ajax_" + (c ? "php" : "data") + "/" + a + (c ? ".php" : (b ? "." + b : ".html"))
        },
    };
    fs.navi = function(x, y, z, c) {
        c = $.extend({
            f: ___,
            a: ["Page", "Previous", "Next", "First", "Last"],
            b: "Page %PG% of %PGS%",
            c: "&laquo; First",
            d: "Last &raquo;",
            e: "&laquo; Prev",
            g: "Next &raquo;",
            h: "<span class='extend'>...</span>",
            i: 5,
            j: 3,
            k: 5
        }, c);
        var Z = " &raquo; ",
            a = Math.ceil,
            b = Math.round,
            d = c.i,
            e = c.j,
            f = c.k,
            h = d - 1,
            m = Math.floor(h / 2),
            n = a(h / 2),
            o = x - m,
            q, s = "<div class='fs_navi'>",
            t = [],
            p = 0,
            u = "smaller",
            v = 0,
            w = "",
            i, j, k, l, r;
        if (b((y / z)) - (y / z) >= 0) {
            r = b(y / z)
        } else {
            r = a(y / z)
        }
        if (o <= 0) {
            o = 1
        }
        q = x + n;
        if ((q - o) != h) {
            q = o + h
        }
        if (q > r) {
            o = r - h;
            q = r
        }
        if (o < 1) {
            o = 1
        }
        if (c.b != "") {
            s += "<span class='pages'>" + fs.replace(c.b, {
                "%PG%": x,
                "%PGS%": r
            }, "g") + "</span>"
        }
        if (o >= 2 && d < r) {
            s += "<a " + c.f(1, y, z, c.a[3] + Z + c.a[0] + " 1") + " class='first'>" + c.c + "</a>";
            if (x > 1 && c.e != "") {
                s += "<a " + c.f(x - 1, y, z, c.a[1] + Z + c.a[0] + " " + (x - 1)) + " class='previous'>" + c.e + "</a>" + c.h
            }
        }
        for (i = f; i <= r; i += f) {
            t.push(i)
        }
        for (j = 0; j < t.length; j++) {
            if (t[j] < (o - m) && p < e) {
                s += "<a " + c.f(t[j], y, z, c.a[0] + " " + t[j]) + " class='larger left'>" + t[j] + "</a>";
                p++
            }
        }
        if (p > 0) {
            s += c.h
        }
        for (k = o; k <= q; k++) {
            if (k == x) {
                s += "<span class='current'>" + k + "</span>";
                u = "larger"
            } else {
                s += "<a " + c.f(k, y, z, c.a[0] + " " + k) + " class='page " + u + "'>" + k + "</a>"
            }
        }
        for (l = 0; l < t.length; l++) {
            if (t[l] > (q + n) && v < e) {
                w += "<a " + c.f(t[l], y, z, c.a[0] + " " + t[l]) + " class='larger right'>" + t[l] + "</a>";
                v++
            }
        }
        if (w != "") {
            s += c.h
        }
        s += w;
        if (q < r) {
            s += c.h;
            if (x < r && c.g != "") {
                s += "<a " + c.f(x + 1, y, z, c.a[2] + Z + c.a[0] + " " + (x + 1)) + " class='next'>" + c.g + "</a>"
            }
            s += "<a " + c.f(r, y, z, c.a[4] + Z + c.a[0] + " " + r) + " class='last'>" + c.d + "</a>"
        }
        s += "</div>";
        return s
    };
    fs.chkLbl = function(a, v) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].t == v) {
                return !0;
                break
            }
        }
        return !1
    };
    (function(g, G, n) {
        var f = {
            script: function(a) {
                if (a) {
                    if (!fs.un(window.fbAsyncInit)) {
                        window.fbAsyncInit = function() {
                            FB.init({
                                cookie: !0,
                                xfbml: !0
                            });
                            a()
                        }
                    } else {
                        a()
                    }
                }
                var x = document,
                    y = "script",
                    z = "facebook-jssdk",
                    s, j = x.getElementsByTagName(y)[0];
                if (x.getElementById(z)) {
                    return
                }
                s = x.createElement(y);
                s.id = z;
                s.src = "https://connect.facebook.net/id_ID/all.js#xfbml=1&appId=378838775523593";
                j.parentNode.insertBefore(s, j)
            },
            comments: function() {
                var a = "__fsFBcomments",
                    A = {
                        path: "/",
                        expires: 30
                    },
                    b = "always",
                    B = "click",
                    c = "fs-fb-comments",
                    C = c + "-show",
                    d = c + "-status acronym:first",
                    D = c + "-hide",
                    e = c + "-always",
                    E = c + "-reset",
                    F = "<font color='#FF6600'>Update<blink>!</blink></font> ",
                    h = "Klik baru tampil",
                    H = "Selalu tampil",
                    I = G(a),
                    j, J = function() {
                        var K = fs.POST_DATA.url;
                        $.getJSON("https://graph.facebook.com/", {
                            ids: K
                        }, function(l) {
                            var L = c + "-span-",
                                m = " <span class='" + L + "c'>&raquo; ",
                                M = l[K].comments,
                                N = l[K].shares,
                                o = (M == null) ? 0 : M,
                                O = (N == null) ? 0 : N;
                            m += (o == 0 && O == 0) ? "tambahkan yuk!!!" : "";
                            m += (o > 0) ? "<b><blink>" + o + "</blink></b> komentar" : "";
                            m += (o > 0 && O > 0) ? ", " : "";
                            m += (O > 0) ? "<b>" + O + "</b> shares" : "";
                            m += "</span>";
                            $(g + C + " ." + L + "b span").html(m)
                        })
                    },
                    fr = function() {
                        $(g + c).html("<fb:comments href='" + fs.POST_DATA.url + "' num_posts='5' width='600'></fb:comments>");
                        f.script(function() {
                            FB.XFBML.parse($(g + c)[0])
                        })
                    };
                if ($(g + c + "-disabled").fs()) {
                    $(g + c + "-table").remove();
                    return
                }
                if (I == null) {
                    G(a, B, A)
                }
                if (I == null || I == B) {
                    $(g + C).fadeIn(3000);
                    J();
                    $(g + d).html(h);
                    j = g + c + "," + g + D + "," + g + e
                } else if (I == b) {
                    $(g + d).html(H);
                    j = g + c + "," + g + D + "," + g + E;
                    $(j).fadeIn(3000);
                    fr()
                }
                $(g + C).click(function() {
                    $(this).hide();
                    n();
                    $(j).fadeIn(3000);
                    fr()
                });
                $(g + D).click(function() {
                    $(this).hide();
                    n();
                    $(g + c + "," + g + e + "," + g + E).hide();
                    $(g + C).fadeIn(3000);
                    J()
                });
                $(g + e).click(function() {
                    $(this).hide();
                    n();
                    G(a, b, A);
                    $(g + d).html(F + H);
                    $(g + E).fadeIn(3000)
                });
                $(g + E).click(function() {
                    $(this).hide();
                    n();
                    G(a, B, A);
                    $(g + d).html(F + h);
                    $(g + c + "," + g + D).hide();
                    $(g + C).fadeIn(3000);
                    J()
                })
            }
        };
        window.fs.facebook = f
    })("#", $.cookie, fs.tt.hide);
    (function() {
        var c = {
            d: "rand/wb_",
            i: "fs-change-theme",
            s: function(p) {
                $("#" + c.i + "-link").attr("href", _$s + "/css/" + c.d + p + ".css")
            },
            r: function(e) {
                var a = fs.$_rand(e.length);
                c.s(e[a])
            },
            a: function(A) {
                var b = c.i,
                    B = b + "-active";
                $("#" + b + " ." + b).each(function() {
                    var C = $(this),
                        D = C.data("title"),
                        E = C.data("css"),
                        F = (E == A) ? "Warna <b>&ldquo;" + D + "&rdquo;</b> aktif <font color=#ffff00>(DITERAPKAN)</font>" : "Klik untuk mengganti warna <b>&ldquo;" + D + "&rdquo;</b>",
                        G = (C.is("A")) ? F : D.replace(/{OH}/g, "<b><u>").replace(/{EH}/g, "</u></b>").replace(/{br}/g, "<br>");
                    C.fs("tt", {
                        c: G
                    }).removeClass(B);
                    if (E == A) {
                        C.addClass(B)
                    }
                })
            },
            $: function(H, I, K, l) {
                var L = "#" + c.i,
                    m = $.cookie(K),
                    M = {
                        path: "/",
                        expires: 30
                    },
                    N = fs.raw(m, 1);
                $(l).append(fs.uncmt(L + "-uncmt"));
                if (m == null) {
                    $.cookie(K, I, M);
                    c.r(H);
                    c.a(I)
                } else if (N == I) {
                    c.r(H);
                    c.a(I)
                } else {
                    c.s(N);
                    c.a(N)
                }
                $(L + " a").click(function() {
                    var O = $(this).data("css"),
                        _0 = "jQuery_confirm";
                    $.cookie(K, O, M);
                    fs.tt.hide();
                    c.a(O);
                    if (O == I) {
                        fs.$_css(_0);
                        fs.$_data(fs.FS.f(_0), function() {
                            $.confirm({
                                title: "Setting Random CSS",
                                message: "<b>Warna " + I + " (default setting) diaktifkan</b><br><br>Efek random warna ini akan terlihat jika Anda membuka beberapa halaman, warna akan berubah-ubah.",
                                buttons: {
                                    OK: {
                                        class: "blue",
                                        action: ___
                                    }
                                }
                            })
                        })
                    } else {
                        c.s(O)
                    }
                });
                $(L).show()
            }
        };
        window.fs.css = c
    })();
    (function(b, c) {
        var a = "fsIdleScreen",
            d = " p:first",
            e = 1000,
            t = 0,
            s = !1,
            q = {
                opacity: "0",
                height: "0",
                width: "0",
                left: "50%",
                top: "50%",
                zIndex: "-1"
            },
            C = function() {
                t += 10;
                if (t > 60) {
                    D()
                }
            },
            A = function(p) {
                if (!$("#" + a).fs()) {
                    $("body").prepend("<div id='" + a + "'><p></p><div id='" + a + "F'></div></div>")
                }
                var f = $("#" + a + d);
                if (!p) {
                    f.html("<img src='" + _$s + "/imagesarea/icon-n-bg/darkloading.gif'><br>PLEASE WAIT<br>Loading...")
                } else {
                    f.html("Energy saving mode<br><span>Move your mouse to go back to the page.</span>");
                    $("#" + a + "F").html("<span style='color:#666'>ocimnet.blogspot.com</span> &copy; 2009 - " + _$year + ". Some rights reserved")
                }
                $("#" + a).show().css(q).animate({
                    width: "100%",
                    height: $(b).height(),
                    left: "0",
                    top: "0",
                    opacity: p ? "1" : "0.5",
                    zIndex: "999999999"
                }, p ? e : 0);
                $(b).resize(function() {
                    $("#" + a).css({
                        height: $(this).height()
                    })
                })
            },
            B = function() {
                $("#" + a + d + ",#" + a + "F").empty();
                $("#" + a).animate(q, e).hide(e)
            },
            D = function() {
                if (!s) {
                    A(1);
                    s = !0
                }
            },
            E = function() {
                if (s) {
                    B();
                    s = !1
                }
            };
        b.fs.idleLoad = function() {
            A();
            $(c).ready(function() {
                B()
            })
        };
        b.fs.idleTime = function(x, y) {
            setTimeout(function() {
                setInterval(C, (y) ? y : 30000);
                $(c).mousemove(function() {
                    t = 0;
                    E()
                }).keypress(function() {
                    t = 0;
                    E()
                })
            }, x ? x : 100)
        }
    })(window, document);
    fs.lightBox = function(a, b) {
        var c = "fs_lightBox",
            d = "jQuery_" + c;
        fs.$_css(d);
        b = b ? b : ___;
        if (!fs.un($.fn[c])) {
            fs.$_data(fs.FS.f(d), a).done(b)
        } else {
            a();
            b()
        }
    };
    (function($, A) {
        var B = {
            exist: function() {
                return this.length > 0
            },
            removeAttrs: function(a) {
                var b = a.split(",");
                return this.each(function() {
                    var c = $(this),
                        i;
                    for (i = 0; i < b.length; i++) {
                        c.removeAttr($.trim(b[i]))
                    }
                })
            },
            tt: function(a) {
                a = a || null;
                return this.each(function() {
                    var b, c = $(this),
                        d;
                    if (a) {
                        d = a
                    } else {
                        d = c.data("tt");
                        if (typeof d == "string") {
                            d = eval("(" + d + ")")
                        }
                    }
                    if (d != null) {
                        b = (d.w != null) ? "'" + d.c + "'," + d.w : "'" + d.c + "'";
                        c.attr({
                            onmouseover: "fs.tt.show(" + b + ")",
                            onmouseout: "fs.tt.hide()"
                        }).removeAttr("data-tt").removeData("tt")
                    }
                })
            },
            links: function(j) {
                return this.each(function() {
                    var c = $(this),
                        d = c.data("links"),
                        a = c.attr("fs-href");
                    if (typeof d == "string") {
                        d = eval("(" + d + ")")
                    } else if (!fs.un(d) && a) {
                        d = {
                            href: fs.raw(a, 1),
                            title: c.html(),
                            option: "f"
                        }
                    } else {
                        return
                    }
                    var e = d.href,
                        f = d.title,
                        h = d.options,
                        i = d.target,
                        b = document.title;
                    if (j) {
                        c.attr({
                            target: i ? i : "_blank",
                            onmousedown: "$(this).fs('links')",
                            href: d.href
                        }).fadeIn()
                    } else {
                        if (h == "i") {
                            c[0].href = fs.feng(h, e, f ? f : "Zoom Gambar", b)
                        } else {
                            c[0].href = fs.clickCond() ? fs.$_adf_ly(e) : fs.feng(h ? h : "f", e, f ? f : "Open Document", b);
                            fs.clickCount++
                        }
                    }
                })
            },
            NRC: function() {
                return this.each(function() {
                    $(this).contextmenu(function(e) {
                        e.preventDefault()
                    })
                })
            },
            scroll: function(a, b) {
                return $($.browser.webkit ? "body" : "html").animate({
                    scrollTop: this.offset().top - (a ? a : 10)
                }, b ? b : 800)
            }
        };
        $.fn.fs = function(a) {
            var b = this,
                c = arguments;
            if (a && B[a]) {
                return B[a].apply(b, fs.args(c))
            } else {
                return B.exist.apply(b, c)
            }
        };
        window.FS = B
    })(jQuery);
    (function(A) {
        var Z = "http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/",
            B = [
                [":))", 21, "tertawa"],
                [":\)\]", 100, "sedang menelepon"],
                [";\)\)", 71, "hi..hi..hi"],
                [";\;\)", 5, "mengedipkan mata"],
                ["\\:d\/", 69, "menari"],
                [":d", 4, "tersenyum lebar"],
                ["\;\)", 3, "mengerlingkan mata"],
                [":p", 10, "menjulurkan lidah"],
                [":\(\(", 20, "menangis"],
                ["\^:\)\^", 77, "salut"],
                ["&gt;:\)", 19, "setan"],
                [":\)", 1, "senang"],
                [":\(\|\)", 51, "monyet"],
                [":\(", 2, "sedih"],
                [":x", 8, "jatuh cinta"],
                ["=\(\(", 12, "patah hati"],
                [":\-\o", 13, "terkejut"],
                [":-\/", 7, "bingung"],
                [":-\*", 11, "cium"],
                ["\(:\|", 37, "mengantuk"],
                [":\|", 22, "wajah tanpa emosi"],
                ["8-\}", 35, "konyol"],
                ["~x\(", 102, "putus asa"],
                [":-t", 104, "time out"],
                ["b-\(", 66, "babak belur"],
                [":-\l", 62, "frustasi"],
                ["x\(", 14, "marah"],
                ["\=\)\)", 24, "berguling dilantai"],
                ["=d&gt;", 41, "tepuk tangan"],
                ["i-\)", 28, "tidur"],
                ["\(\*\)", 79, "bintang"],
                [":-bd", 113, "hebat"],
                ["\\m\/", 111, "metal!!"],
                ["~o\)", 57, "kopi"],
                ["@};-", 53, "bunga mawar"],
                ["@-\)", 43, "terhipnotis"],
                [":-q", 112, "payah"],
                [":@\)", 49, "babi"],
                ["8-x", 59, "tengkorak"],
                [":-ss", 42, "ketakutan"]
            ];
        function C() {
            var a = [],
                b = "<table width='100%' class='",
                d = "<td align='center' width='50%'>";
            $.each(B, function(k, v) {
                a.push(b + "tbl0 intabel'><tr>" + d + "<img style='cursor:help' align='absmiddle' src='" + Z + v[1] + ".gif' alt='" + v[2] + "'" + _$_00 + v[2] + "\")' /></td>" + d + "<textarea readonly='readonly' onclick='this.select()'>" + v[0] + "</textarea></td></tr></table>")
            });
            return fs.toTbl.$(a, 4, {
                a: b + "nohover tabel'>",
                e: "<td width='25%'>"
            })
        }
        function D() {
            fs.tt.show("<img src=//1.bp.blogspot.com/-R-5KbiU5LtM/UCPT4C3buXI/AAAAAAAACDU/obi8QKsNrAw/s45/eYahoo_icon.png align=absmiddle> <b>KLIK<blink>!</blink></b> untuk menampilkan <b>daftar Y! smiley</b>")
        }
        A.FS.eYahoo = function(a) {
            var b = this,
                c = ".hotspot span:eq(",
                d = b.find(c + "0)"),
                h = b.find(c + "1)");
            b.show().mouseover(D).mouseout(fs.tt.hide);
            b.toggle(function() {
                if (!a.html().trim()) {
                    a.html(C())
                }
                a.fadeIn("slow", function() {
                    d.show();
                    h.hide()
                });
                b.unbind("mouseover")
            }, function() {
                a.fadeOut(function() {
                    d.hide();
                    h.show()
                });
                b.mouseover(D)
            })
        };
        A.fs.$_YM = function(a, b) {
            var c = b ? "'" : "",
                d = "<img class=" + c + "fs-smiley" + c + " align=" + c + "absmiddle" + c + " src=" + c + Z,
                e = ".gif" + c + " title=" + c,
                f = new Array(),
                h;
            f[0] = /:\)\)/g;
            f[1] = /:\)\]/g;
            f[2] = /;\)\)/g;
            f[3] = /;\;\)/g;
            f[4] = /\\:d\//gi;
            f[5] = /:d/gi;
            f[6] = /\;\)/g;
            f[7] = /:p/gi;
            f[8] = /:\(\(/g;
            f[9] = /\^:\)\^/g;
            f[10] = /&gt;:\)/gi;
            f[11] = /:\)/g;
            f[12] = /:\(\|\)/g;
            f[13] = /:\(/g;
            f[14] = /:x/gi;
            f[15] = /=\(\(/g;
            f[16] = /:\-\o/gi;
            f[17] = /:-\//g;
            f[18] = /:-\*/g;
            f[19] = /\(:\|/g;
            f[20] = /:\|/g;
            f[21] = /8-\}/g;
            f[22] = /~x\(/gi;
            f[23] = /:-t/gi;
            f[24] = /b-\(/gi;
            f[25] = /:-\l/gi;
            f[26] = /x\(/gi;
            f[27] = /\=\)\)/g;
            f[28] = /=d&gt;/gi;
            f[29] = /i-\)/gi;
            f[30] = /\(\*\)/g;
            f[31] = /:-bd/gi;
            f[32] = /\\m\//gi;
            f[33] = /~o\)/gi;
            f[34] = /@};-/g;
            f[35] = /@-\)/g;
            f[36] = /:-q/gi;
            f[37] = /:@\)/g;
            f[38] = /8-x/gi;
            f[39] = /:-ss/gi;
            for (h = 0; h < f.length; h++) {
                a = a.replace(f[h], d + B[h][1] + e + B[h][2].replace(/ /g, "&nbsp;") + c + ">")
            }
            return a
        }
    })(window);
    fs.calls = function(a, b) {
        if (!$.isArray(a)) {
            a = [a]
        }
        $.each(a, function(k, v) {
            setTimeout(b, v * 1000)
        })
    };
    (function(F, S) {
        var A = function(a) {
                var s = this,
                    b = {
                        s: s.selector,
                        easing: "linear",
                        duration: 500,
                        queue: !1,
                        marginStop: 30,
                        parent: "",
                        stop: !1,
                        marginTop: 0,
                        e: "scroll.fs_" + F
                    },
                    a = $.extend(b, a),
                    c = s.offset().top,
                    d = {
                        queue: a.queue,
                        easing: a.easing,
                        duration: a.duration
                    },
                    e = a.s,
                    W = window;
                s.css("position", "relative");
                if (a.stop) {
                    $(e).css({
                        top: "0"
                    });
                    $(W).unbind(a.e);
                    return
                }
                $(W).bind(a.e, function() {
                    var f = $(this).scrollTop(),
                        h = $(e),
                        j = (a.parent == "") ? h.parent() : $(a.parent),
                        l = j.offset().top,
                        m = (a.parent == "") ? l : c;
                    if (f > m && j.height() + j.position().top - a.marginStop > f + h.height()) {
                        h.animate({
                            top: (f - m + a.marginTop) + "px"
                        }, d)
                    } else if (f < m) {
                        h.animate({
                            top: "0"
                        }, d)
                    }
                })
            },
            B = function(a) {
                a = a || {
                    parent: "#mainwrapper",
                    marginStop: 125,
                    marginTop: 15
                };
                $("#HTML11").fs(F, a)
            },
            C = function(a) {
                if (fs.is.single) {
                    B({
                        stop: 1
                    });
                    setTimeout(B, a ? a : 100)
                }
            };
        S.FS[F] = A;
        S.fs[F] = C
    })("reScroll", window);
    fs.utm = function(a, b) {
        b = $.extend({}, {
            a: "ocimnet.blogspot.com",
            b: "banner",
            c: "logolink",
            d: "ads"
        }, b);
        return a + ((a.match(/\?/) == null) ? "?" : "&") + $.param({
            utm_source: b.a,
            utm_medium: b.b,
            utm_content: b.c,
            utm_campaign: b.d,
            utm_term: document.title
        })
    };
    (function(A, B, C, D, E, F, X, G, H, I, J, M, O, P, S) {
        var K = function(a) {
                var b = a.split("-"),
                    c = {
                        d: b[2].substring(0, 2),
                        m: b[1],
                        y: b[0]
                    },
                    i;
                for (i = 0; i < _$m.length; i++) {
                    if (parseInt(c.m, 10) == _$m[i]) {
                        c.m = _$M[i];
                        break
                    }
                }
                return c
            },
            L = function(a, b) {
                var c = {},
                    d = [],
                    e = a.category,
                    f = a.link,
                    i;
                for (i = 0; i < f.length; i++) {
                    if (f[i].rel == "alternate") {
                        c.f = f[i].href;
                        break
                    }
                }
                if (b) {
                    for (i = 0; i < f.length; i++) {
                        if (f[i].rel == "replies" && f[i].type == "text/html") {
                            c.d = f[i].title.split(" ")[0];
                            break
                        }
                    }
                    if (e.length > 0) {
                        for (i = 0; i < e.length; i++) {
                            d.push(e[i].term)
                        }
                    } else {
                        d.push("tidak berkategori")
                    }
                    c.c = d
                }
                c.g = ("content" in a) ? a.content.$t : ("summary" in a) ? a.summary.$t : "";
                return c
            },
            N = function(a) {
                var b = a.indexOf("<img"),
                    c = a.indexOf("src=\"", b),
                    d = a.indexOf("\"", c + 5),
                    e = a.substr(c + 5, d - c - 5);
                return (b != -1 && c != -1 && d != -1 && e != "") ? e : "https://3.bp.blogspot.com/_ActSVcJ9YKs/TLkf8ea0JMI/AAAAAAAABTs/rIZyBtha7Rs/s100/NoThumb.gif"
            },
            R = function(a, b) {
                return {
                    "alt": "json",
                    "redirect": "false",
                    "start-index": a,
                    "max-results": b
                }
            },
            T = function(q, w, e, r, t, y) {
                var a = this;
                a.Q = q;
                a.W = w;
                a.E = r;
                a.R = 0;
                a.T = 1;
                a.Y = fs.un(y) ? "width:100%;filter:progid:DXImageTransform.Microsoft.alpha(opacity=100);-moz-opacity:1" : "";
                a.U = 0.2;
                if (a.Y != "") {
                    a.E += 500
                }
                fs.$(t).innerHTML = "<div id='" + w + "' class='" + e + "'><div style='" + a.Y + "'>" + q[0] + "</div></div>";
                S(function() {
                    a.i()
                }, r)
            };
        T.prototype = {
            i: function() {
                var a = this,
                    b = fs.$(a.W);
                a.I = b.firstChild;
                b.onmouseover = function() {
                    a.R = 1
                };
                b.onmouseout = function() {
                    a.R = 0
                };
                a.r()
            },
            r: function() {
                var a = this;
                if (a.R == 1) {
                    S(function() {
                        a.r()
                    }, 100)
                } else {
                    a.f("reset");
                    a.I.innerHTML = a.Q[a.T];
                    a.O = setInterval(function() {
                        a.f("up", "O")
                    }, 100);
                    a.T = (a.T < a.Q.length - 1) ? a.T + 1 : 0;
                    S(function() {
                        a.r()
                    }, a.E)
                }
            },
            f: function(a, b) {
                var d = this,
                    c = d.I;
                if (a == "reset") {
                    d.U = 0.2
                }
                if (c.filters && c.filters[0]) {
                    if (typeof c.filters[0].opacity == "number") {
                        c.filters[0].opacity = d.U * 100
                    } else {
                        c.style.filter = "alpha(opacity=" + d.U * 100 + ")"
                    }
                } else if (fs.un(c.style.MozOpacity) && d.Y != "") {
                    c.style.MozOpacity = d.U
                } else {
                    d.U = 1
                }
                if (a == "up") {
                    d.U += 0.2
                }
                if (a == "up" && d.U >= 1) {
                    clearInterval(d[b])
                }
            }
        };
        _A = _$_00, _Z = "/feeds/posts/default", _B = "<br style='margin-bottom:", _C = "px'/>Loading data ke ", _D = "<table border='0' cellpadding='0' cellspacing='0'", _E = "openSearch$totalResults", _F = "<div class=clear style=height:2px/>\"", _G = " href='javascript:;'", _H = " class='fsnott'", _I = " onclick='$(\"", _J = "</td></tr></table>", _K = " width=100 class=tt_float_left align=left", _L = "$(this).val()", _M = "<td align='center'", _N = " style='color:#000'", _O = "><tr><td class='cntribboncolor' valign='middle' style='padding", _P = "><span class='spn'>", _Q = " style='font-size:", _R = "<option value=''", _S = {
            border: "1px solid #D8DFEA",
            fontSize: "11px",
            width: "99px",
            padding: "1px",
            cursor: "pointer",
            marginBottom: "3px"
        };
        C.l = function(a, b, c) {
            return this.html($("<div/>").css("height", a + "px").addClass("LOAD LOAD" + (b ? b : 1)).html(c ? c : ""))
        };
        C[X] = function(a, b, d, e, h, i) {
            var c = $("<select/>");
            c.attr({
                onchange: "$('" + b + "').fs('" + B + "','" + E + "',1,{u:" + _L + (i ? "," + i : "") + "})" + ((h && !$.isEmptyObject(h)) ? ";$('" + h.a + "').text((" + _L + "=='')?'" + h.b + "':fs.raw(" + _L + ".split('/')[2],1))" : ""),
                size: "1"
            }).css(_S);
            if (d && d != "") {
                c.append(_R + ">" + d + "</option>")
            }
            $.each(a, function(k, v) {
                var f = v.t,
                    g = {
                        value: "/-/" + fs.raw(v.t)
                    };
                if (e && k == e) {
                    g.selected = "selected"
                }
                if (v.c != null) {
                    f += " (" + v.c + ")"
                }
                c.append($("<option/>").attr(g).html(f))
            });
            this.html(c)
        };
        C[D] = function(z, y) {
            if (!z) {
                z = 1
            }
            var b = this,
                k = b.selector,
                c = $.extend({}, {
                    u: "",
                    q: _Z,
                    n: 25,
                    s: 250
                }, y);
            f = b.find(".list"), g = b.find(".filter"), j = fs.loc.split("?")[0], s = (c.n * z) - c.n + 1;
            f.fs(B, 568, 1, _B + "200" + _C + s + " - " + (s + c.n - 1));
            $.get(c.q + c.u, R(s, c.n), function(d) {
                var _0 = "<th align='center'",
                    h = "<table width='100%' class='tabel stripe'><tr>" + _0 + " width='40'>No</th>" + _0 + ">Judul Posting</th>" + _0 + ">Komentar</th>" + _0 + ">Kategori</th>" + _0 + ">Tanggal</th></tr>",
                    w = d.feed,
                    e = w.entry,
                    r = parseInt(w[_E].$t, 10),
                    o = (e.length > c.n) ? c.n : e.length,
                    i;
                for (i = 0; i < o; i++) {
                    if (i == e.length) {
                        break
                    }
                    var a = I(e[i].title.$t),
                        p = L(e[i], 1),
                        x = K(e[i].published.$t);
                    h += "<tr" + ((j == p.f) ? " class='select'" : "") + " valign='top'><td align='right'>" + (s + i) + ".</td><td><a" + _A + "<font style=font-size:12px><b><u>" + a + "</u></b></font><br><br><img src=" + N(p.g) + _K + ">" + J(I(O(p.g, c.s))) + _F + ")' href='" + p.f + "'>" + a + "</a>" + ((j == p.f) ? " <blink>&raquo;</blink> posting yang Anda buka saat ini" : "") + "</td>" + _M + ">" + ((parseInt(p.d) > 0) ? p.d : "-") + "</td>" + _M + "><span" + _A + p.c.join(", ") + "\")' style='cursor:help'><img src='https://4.bp.blogspot.com/-_PQIJ_qIjD0/TshHCghraRI/AAAAAAAABF8/jBnryR-rh-I/s12/i_search_lup.png' align='absmiddle'" + _H + "> Lihat</span></td>" + _M + ">" + x.d + " " + x.m + " " + x.y + "</td></tr>"
                }
                h += "</table><div style=text-align:right><small><a href=/2010/12/cara-pasang-sitemap-blogspot-seperti.html class=fsnott>Pasang sitemap kek gini di blog kamu</a></small></div>";
                f.html(h);
                b.find(".nav").html(fs.navi(z, r, c.n, {
                    f: function(_9, _8, _7, _6) {
                        return fs.replace(_A + "%T%\")'" + _I + k + "\").fs(\"" + B + "\",\"" + D + "\",%V%" + (y ? "," + G(y) : "") + ");fs.tt.hide();return !1'" + _G, {
                            "%V%": _9,
                            "%T%": _6
                        }, "g")
                    }
                }));
                if (!g.html().trim()) {
                    (function() {
                        var _ = $("<select/>");
                        _.attr({
                            onchange: "$('" + k + "').fs('" + B + "','" + D + "',1,{u:" + _L + "});$('#ajaxTocCap').html($(this).children().eq(this.selectedIndex).data().value)",
                            size: "1"
                        }).css(_S).append(_R + " data-value=''>All</option>");
                        $.each(fs.ALL_LABELS, function(k, v) {
                            _.append($("<option/>").attr({
                                value: "/-/" + fs.raw(v.t),
                                "data-value": "&raquo; dibawah kategori <u>" + v.t + "</u>"
                            }).html(v.t + " (" + v.c + ")"))
                        });
                        g.html(_)
                    })()
                }
            }, "json" + (P(c.q) ? "p" : ""))
        };
        C[E] = function(s, c) {
            if (s < 1 || !s) {
                s = 1
            }
            var f = this,
                g = f.selector,
                d = $.extend({}, {
                    u: "",
                    q: _Z,
                    t: !1,
                    w: !1,
                    n: 5,
                    b: "#ffffff",
                    s: 250,
                    f: {
                        b: 300,
                        w: 35,
                        h: 35
                    },
                    l: {
                        b: 875,
                        w: 70,
                        h: 70
                    },
                    c: ___
                }, c),
                l = fs.loc.split("?")[0],
                m = function(_) {
                    return _B + _ + _C + s + " - " + (s + d.n - 1)
                };
            if (d.w) {
                d.t = !1
            }
            if (d.t) {
                f.fs(B, 32, 2)
            } else if (d.w) {
                f.fs(B, 488, 1, m(170))
            } else {
                f.fs(B, 300, 1, m(70))
            }
            $.get(d.q + d.u, R(s, d.n), function(v) {
                var h, w = v.feed,
                    e = w.entry,
                    r = parseInt(w[_E].$t, 10),
                    o, i, b, q, j, k = w.link,
                    t;
                for (i = 0; i < k.length; i++) {
                    if (k[i].rel == "alternate") {
                        t = k[i].href;
                        break
                    }
                }
                q = t.split("/label/");
                if (q.length > 1) {
                    j = unescape(q[1]);
                    b = "Post under " + _$_01 + j + "\",1);return !1' href='" + t + "' class='{tNUM}'" + _A + "Kategori &raquo; <u><b>" + j + "</b></u>\")'>" + j + "</a>"
                } else {
                    b = "Post Recomendation"
                }
                if (e.length > d.n) {
                    o = d.n
                } else {
                    o = e.length
                }
                if (d.t) {
                    h = []
                } else {
                    h = "<table border='0' cellspacing='5' 
                    h += " bgcolor='" + d.b + "'>"
                }
                for (i = 0; i < o; i++) {
                    if (i == e.length) {
                        break
                    }
                    var a = I(e[i].title.$t),
                        u = L(e[i], 1),
                        y = N(u.g),
                        z = I(O(u.g, d.s)),
                        x = K(e[i].published.$t);
                    if (d.t) {
                        h[i] = _D + _O + ":0 5px' height='59' width='100%'><div id='tickerContent'><img" + _H + " align='left' src='" + y + "' border='0' width='30' height='30' style='border:1px solid #fff;margin:5px 10px 0 5px'> <a class='garis t" + i + "' href='" + u.f + "'" + _A + "<b>" + a + "</b><br><br><img src=" + y + _K + "> " + J(z) + _F + ",250)'>" + H(a, 50, 1) + "</a><br>" + J(H(z, 130, 1)) + "</div></td></tr" + _O + "-right:5px' height='15' align='right'" + _P + b.replace("{tNUM}", "t" + i) + " " + (i + 1) + "</span" + _P + u.d + " komentar</span> <a href='" + u.f + "' class='t" + i + "'" + _A + "readmore &raquo; &ldquo;" + a + "&rdquo;\")'>readmore <blink>&raquo;</blink></a>" + _J
                    } else {
                        h += "<tr valign='top'><td class='img_ajax'><img src='" + y + "' width='" + (d.w ? d.l.w : d.f.w) + "' height='" + (d.w ? d.l.h : d.f.h) + "' border='0'" + _H + "></td><td" + _Q + "11px'><a " + ((l == u.f) ? "class='sirri' " : "") + "href='" + u.f + "'" + (d.w ? "" : _A + "<span style=font-size:12px><b><u>" + a + "</u></b></span><br><br><img src=" + y + _K + ">" + J(z) + _F + ",250)'") + "><b>" + a + "</b></a> " + (d.w ? "<div class='fdesc'>" + J(z) + " <a class='readmore' href='" + u.f + "'>baca selengkapnya &#8594;</a></div>" : "") + "<span" + _Q + "9px'>Dipublikasikan pada <span" + _N + ">" + x.d + " " + x.m + " " + x.y + "</span>, saat ini ada <a" + _N + " class='garis' href='" + u.f + "#comments'" + (d.w ? "" : _A + "Berikan komentar ke: <b>" + a + "</b>, saat ini baru ada <b>" + u.d + "</b> komentar\",250)'") + "><font" + _N + ">" + u.d + " komentar</font></a> " + ((l == u.f) ? "<span style='color:#666'>(posting yang terbuka saat ini)</span>" : "") + "</span></td></tr>"
                    }
                }
                if (d.t) {
                    new T(h, "domticker", "class", 5000, g, 1)
                } else {
                    h += "</table>";
                    if (r > d.n) {
                        h += _D + (d.w ? "" : _Q + "80%;font-family:arial'") + " width='" + (d.w ? d.l.b : d.f.b) + "' bgcolor='" + d.b + "'><tr>";
                        if (d.w) {
                            h += "<td style='padding-left:5px'>" + fs.navi(s > 1 ? Math.ceil(s / d.n) : 1, r, d.n, {
                                b: "<u><b>" + M(r) + "</b> posts</u>, page %PG% of %PGS%",
                                i: 7,
                                k: 10,
                                f: function(_9, _8, _7, _6) {
                                    return fs.replace(_A + "%T%\")'" + _I + g + "\").fs(\"" + B + "\",\"" + E + "\",%P%" + (c ? "," + G(c) : "") + ");fs.tt.hide()'" + _G, {
                                        "%P%": _9 > 1 ? (_9 * d.n) - d.n + 1 : 1,
                                        "%T%": _6
                                    }, "g")
                                }
                            })
                        } else {
                            h += "<td width='30%'>" + ((s > 1) ? "<a" + _I + g + "\").fs(\"" + B + "\",\"" + E + "\"," + (s - d.n) + (c ? "," + G(c) : "") + ")'" + _G + _H + ">&laquo; Previous</a>" : "") + "</td>" + _M + " width='40%'>Total: " + M(r) + " posts</td><td align='right' width='30%'>" + ((r >= (s + d.n)) ? "<a" + _I + g + "\").fs(\"" + B + "\",\"" + E + "\"," + (s + d.n) + (c ? "," + G(c) : "") + ")'" + _G + _H + ">Next &raquo;</a>" : "")
                        }
                        h += _J
                    }
                    f.html(h)
                }
                d.c()
            }, "json" + (P(d.q) ? "p" : ""))
        };
        C[F] = function(a, b) {
            if (!a || a < 1) {
                a = 1
            }
            var d = $.extend({}, {
                    n: 5,
                    l: 55,
                    q: "/feeds/comments/default",
                    u: ""
                }, b),
                c = this,
                f = function(y, z) {
                    return "<a" + _I + c.selector + "\").fs(\"" + B + "\",\"" + F + "\"," + y + (b ? "," + G(b) : "") + ");fs.tt.hide()'" + _G + _H + ">" + z + "</a>"
                };
            c.fs(B, 75, 1);
            $.get(d.q + d.u, R(a, d.n), function(j) {
                var g = j.feed.entry,
                    h = parseInt(j.feed[_E].$t, 10),
                    l = M(h),
                    m = a + d.n,
                    s = _D + " width='100%' style='margin-bottom:-5px'><tr><td width='60%'><h2>Recent Comments <small>(<acronym" + _A + "Total komentar: " + l + "\")'>" + l + "</acronym>)</small></h2></td>" + _M + " width='40%'>",
                    i;
                if (h > d.n) {
                    if (a > 1) {
                        s += f(a - d.n, "&laquo; Previous") + " &nbsp; "
                    }
                    if (h >= m) {
                        s += f(m, "Next &raquo;")
                    }
                }
                s += _J + "<ul>";
                for (i = 0; i < d.n; i++) {
                    if (i == g.length) {
                        break
                    }
                    var w = L(g[i], 0),
                        o = w.f,
                        p = o.split("#")[0],
                        q = p.split("/")[5].split(".html")[0],
                        r = q.replace(/-/g, " "),
                        t = K(g[i].published.$t),
                        x = w.g.replace(/<\S[^>]*>/g, " "),
                        e = function(y) {
                            return I(J(y, 1)).replace(/fs-smiley/g, "fsnott")
                        },
                        k = "http://img1.blogblog.com/img/",
                        v = g[i].author[0],
                        u = v.gd$image.src;
                    s += "<li><a" + _A + "<b>" + I(r).toUpperCase() + "</b><br><br><table width=100% class=tbl0><tr><td><b><u>" + ((v.uri != null && v.uri.$t.indexOf("https://www.blogger.com/profile/08121763620991506423") != -1) ? "Admin" : I(g[i].author[0].name.$t)) + "</u></b> said:</td><td align=right><small><u>" + t.d + " " + t.m + " " + t.y + "</u></small>" + _J + " <img src=" + ((u.indexOf(k + "blank.gif") != -1) ? k + "anon36.png" : u.replace("/s220/", "/s32/")) + " height=32 align=left class=fs_avatar> " + I(J(x, 0)) + _F + ")' href='" + o + "'>";
                    if (x.length < d.l) {
                        s += e(x)
                    } else {
                        x = H(x, d.l, 1);
                        s += e(x) + "..."
                    }
                    s += "</a></li>"
                }
                s += "</ul>";
                c.html(s)
            }, "json" + (P(d.q) ? "p" : ""))
        };
        A.FS[B] = function(a) {
            var b = arguments,
                c = this;
            if (a && C[a]) {
                return C[a].apply(c, fs.args(b))
            } else {
                return C.l.apply(c, b)
            }
        }
    })(window, "ajax", {}, "toc", "posts", "comments", "labels", JSON.stringify, fs.$_cutStr, fs.$_R, fs.$_YM, fs.$_NumF, fs.$_remTag, fs.isExtURL, setTimeout);
    function tx(s) {
        return document.write(s)
    }
    fs.$_long = fs.feng;
    fs.warungbebas = function(A, B) {
        var C = fs.$_GET,
            D = fs.raw,
            E = "#fs_jlabel_p_w1",
            F = "#fs_jlabel_w1",
            G = "#fs_sitemap_feature",
            H = "#fs_jlabel_p_list",
            I = "#fs_jlabel_p_cap td:first",
            J = "#tagsarea",
            S = "ajax",
            T = "posts",
            U = fs.loc,
            K = fs.reScroll,
            L = function(a, b, c, d, e) {
                $(H).fs(S, T, 1, {
                    w: 1,
                    u: (c ? "?q=" + a : "/-/" + D(a)),
                    c: e ? e : ___
                });
                $(G).hide();
                $(I).html((c ? "Hasil penelusuran untuk" : "Daftar posting dalam kategori") + ": <span>" + a.replace(/\+/g, " ") + "</span>");
                $(E).show(0, function() {
                    if (b) {
                        $(this).fs("scroll")
                    }
                    $(H).fadeIn(K)
                });
                if (d) {
                    N();
                    setTimeout(function() {
                        $(F).fadeIn(K)
                    }, 5000)
                }
            },
            M = function(a) {
                var b = [];
                $.each(A, function(k, v) {
                    b.push(_$_01 + v.t + "\",1,0," + (a ? 1 : 0) + ");return !1'" + _$_00 + (a ? "<div class=flst" + v.s + "><span class=fl>" + v.t + "</span><br>" + v.c + " posting</div>" : "<b>" + v.c + "</b> posting dibawah kategori <b>" + v.t + "</b>") + "\")' href='/search/label/" + D(v.t) + "'" + (a ? " class='label-size label-size-" + v.s + "'" : "") + ">" + v.t + "</a>")
                });
                b.push("<div class='clear'/>");
                return b.join(" ")
            },
            N = function() {
                var a = $("#fs_jlabel_list");
                if (!a.html().trim()) {
                    a.html(M())
                }
            },
            O = fs.$_rand,
            P = fs.$_data,
            Q = fs.FS.attr,
            R = fs.$_css,
            _A = "albricontent",
            _B = "#wb_recents",
            _C = "#leftcontent";
        window.fs.ajaxBrowseMe = L;
        if (fs.is.single) {
            if ($(".fs_budul").fs()) {
                fs.facebook.script(function() {
                    P(fs.FS.f("fs_budul"), function() {
                        fs.budul.init((!fs.un(fs.BUDUL) ? {} : $.isFunction(fs.BUDUL) ? {
                            callback: fs.BUDUL
                        } : fs.BUDUL))
                    })
                })
            } else {
                fs.facebook.script()
            }
        }
        $(".data-link,a[fs-href]").fs("links", 1);
        $("a[rel='tag']").attr("onclick", "fs.ajaxBrowseMe($(this).data('tag'),1);return !1").fs("NRC");
        $("a[rel='nofollow']").removeAttr("rel");
        $("a[fs-ttt='mobile']").attr("href", U.split("?")[0] + "?m=1");
        $("#top_link_navi_0").attr("href", U);
        $(".data-tt").fs("tt");
        if (U.split("?")[0] != _$S + "/p/sitemap.html") {
            $("#fs_to_sitemap").fs("NRC").click(function() {
                $(H).empty();
                $(E).show();
                $(G).fadeIn(function() {
                    $(G).fs("scroll", 60);
                    if ($(F).is(":visible")) {
                        $(F).fadeOut()
                    }
                    $(I).html("<span>Daftar Posting</span> <span id='ajaxTocCap'></span> <small>(Sorot dengan mouse untuk melihat deskripsi posting)</small>");
                    K(800)
                }).fs(S, "toc");
                return !1
            })
        } else {
            $("#fs_sitemap_page").fs(S, "toc")
        }
        $("#fs_jlabel_p_close").click(function() {
            $(E).fadeOut(K)
        });
        $("#fs_jlabel_close").click(function() {
            $(F).fadeOut(K)
        });
        $("#moverlable").attr("href", "javascript:;").fs("NRC").click(function() {
            N();
            if ($(F).is(":visible")) {
                $(F).fadeOut()
            } else {
                $(F).fadeIn(function() {
                    $(F).fs("scroll")
                })
            }
            K(3000)
        }).show();
        $(J).show();
        $(J + " .widget-content").html(M(1));
        if (!fs.is.home || !fs.is.page) {
            $(_B).fs(S, T, 1);
            $("#wb_listcatrecent").fs(S, "labels", A, _B, "Filter Kategori", 0, {
                a: "#recent_caption",
                b: "Recent Posts"
            })
        }
        if (fs.is.home) {
            fs.homeRandomPosts(A);
            if (navigator.userAgent.indexOf("Chrome") != -1) {
                $("." + _A + "index").css("height", "130px")
            }
        }
        if (!fs.is.home) {
            (function(x, y) {
                $(x + "," + y).delay(1500).show(1000);
                $(x + " td:first").append($(y));
                $(y + " a").addClass("garis")
            })("#fs_breadcrumb", "#postpath");
            $("#wb_top_featured_ticker").fs(S, T, 1, {
                t: 1,
                u: "/-/" + D(A[O(A.length)].t)
            })
        }
        if (fs.is.single || fs.is.page) {
            $("#" + _A + " a:has(img)").each(function(k, v) {
                if (!$(v).hasClass("fsnott")) {
                    $(v).addClass("zoom")
                }
            });
            (function(a, b, c, d, e, f) {
                $("a:not(.zoom)[target='_" + f + "']" + a + c + b + c + a + d + b + d + a + e + b + e).addClass(f).removeClass("zoom")
            })(",a[href*='javascript:", ",a[onclick*='", "download']", "openurl']", "openurlIfr']", "blank");
            (function(a) {
                var b = fs.mo(a),
                    c = "admin",
                    d = "__fs" + c;
                if (C(c) === b) {
                    R(a);
                    $.cookie(d, b, {
                        path: "/",
                        expires: 365
                    })
                }
                if ($.cookie(d) === b) {
                    R(a)
                }
            })("XzFfbGJyXzJf")
        }
        if (!fs.is.single && U.split("?")[0] != _$S + "/p/video.html") {
            fs.idleTime()
        }
        if (fs.is.single) {
            (function(a, b, c, d, f) {
                if ($("#fs_video_wrapper").fs()) {
                    R("fs_videos_i");
                    P(fs.FS.videos, function() {
                        fs.videos.init()
                    })
                }
                if ($("#" + a).fs()) {
                    f(___, function() {
                        P(fs.FS.f(a), function() {
                            setTimeout(fs.videosLB, 100)
                        })
                    })
                }
                if ($("#img_results").fs() || $(".fs_img_maper").fs()) {
                    R("fs_img_post_i");
                    P(fs.FS.imgPost)
                }
                if ($(b).fs()) {
                    f(___, function() {
                        P(fs.FS.f("fs_flickr"), function() {
                            var z = $(b).data(),
                                y = z.options,
                                x = z.key;
                            fs.flickr((x != null) ? x : "wallpaper", (y != null) ? eval("(" + y + ")") : {})
                        })
                    })
                }
                $.each(["", "fs-", "data-"], function(k, v) {
                    if ($("a[" + v + c).fs()) {
                        f(function() {
                            $("a[" + v + c).fs("lightBox", {
                                hook: v + "rel"
                            })
                        })
                    }
                });
                if ($("." + d).fs()) {
                    P(Q(d), function() {
                        fs.$_teka_teki()
                    })
                }
            })("fs_videosLB", "#flickr_wrap", "rel^='fs_lightBox']", "teka-teki", fs.lightBox);
            fs.facebook.comments();
            (function(a, b) {
                var c, d, e, f;
                $.each(["newer", "older"], function(k, v) {
                    c = $(a + "-" + v + "-link a").eq(0);
                    if (c.fs()) {
                        d = c.attr("href");
                        c.load(d + " #cdsubbrandtextnew h1", function() {
                            e = $(this), f = e.text();
                            e.text((f.length > 90) ? fs.$_cutStr(f) : f).fs("tt", {
                                c: "<b>" + fs.$_R(f) + "</b> <font color=#FFFF66><small>(Posting Lebih " + b[k] + ")</small></font>"
                            })
                        })
                    }
                });
                $(a + "-fs").append($(a))
            })("#blog-pager", ["Baru", "Lama"]);
            (function(b) {
                var a = "#lablebottompost",
                    g = B.length,
                    e = O(g),
                    f = "#wb_rels",
                    h = "ads_KS";
                if ($(a + " a").length > 1) {
                    $(a + "_and").html("dan ")
                }
                if (g) {
                    $(f).fs(S, T, 1, {
                        u: "/-/" + D(B[e].t)
                    });
                    $("#wb_c_rels").fs(S, "labels", B, f, 0, e)
                }
                if (b(B, "Dewasa") && $.cookie("__18plus") != "1") {
                    R("jQuery_confirm");
                    P(Q("confirm18age"), function() {
                        fs._18()
                    })
                }
                if (!b(B, "TV Online") && !b(B, "Video")) {
                    fs.idleTime()
                }
                if (b(B, "Ayat Suci")) {
                    setTimeout(fs.ad.rep, 3000);
                    $("." + h).empty();
                    P(Q("fs_r_" + h), function() {
                        $("." + h).each(function() {
                            fs.ad.KS($(this));
                            setTimeout(fs.ad.info, 1000)
                        })
                    })
                }
            })(fs.chkLbl);
            if (fs.un(fs.bloggerComments)) {
                fs.bloggerComments.init()
            }
            setTimeout(function() {
                var c = "#comment",
                    b = $(c + "s h4:first"),
                    a = parseFloat(b.html().substring(0, 1));
                if (a < 1) {
                    b.hide();
                    $(c + "s").show()
                }
                if ($(c + "-editor").fs()) {
                    if (a < 1 || C("showComment") != "") {
                        $(".comment-form").css({
                            marginRight: "-20px",
                            width: "620px",
                            maxWidth: "620px"
                        })
                    }
                    $(c + "-editor-fs-attr").insertBefore(c + "-editor").show();
                    $("#fs_eYlink").fs("eYahoo", $("#fs_eYlists"));
                    $("#cmssg").css({
                        color: "#999",
                        paddingBottom: "10px"
                    })
                }
            }, 7000);
            if ($("cite.user a").fs()) {
                $("<div/>").css({
                    fontSize: "90%"
                }).html($("<a/>").attr({
                    href: "http://www.thumbshots.com",
                    target: "_blank"
                }).html("Thumbnails site comenters by Thumbshots")).insertBefore("#backlinks-container")
            }
            setTimeout(function() {
                P("http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f8dbfa671d41a69", function() {
                    var x = "#lintasme",
                        y = 550,
                        z = 600,
                        a = " a:first",
                        b = "background-position",
                        c = [
                            ["75px", "-1px -1px", "-80px -1px"],
                            ["78px", "-163px -1px", "-245px -1px"],
                            ["75px", "-80px -1px", "-1px -1px"],
                            ["78px", "-245px -1px", "-163px -1px"]
                        ],
                        d = O(c.length),
                        e = document.title,
                        f = "http://www.lintas.me/?c=bookmarklet&url=" + D(U) + "&title=" + D(e),
                        g = fs.$_win_c;
                    if ($(x).fs()) {
                        $(x).css("width", c[d][0]).show();
                        $(x + a).css(b, c[d][1]).attr("href", f).hover(function() {
                            $(this).css(b, c[d][2]);
                            fs.tt.show("Bagikan &ldquo;<b>" + fs.$_R(e) + "</b>&rdquo; di Lintas.Me")
                        }, function() {
                            $(this).css(b, c[d][1]);
                            fs.tt.hide()
                        });
                        $(x + a).click(function() {
                            window.open(f, "", "toolbar=no,scrollbars=yes,width=" + y + ",height=" + z + ",left=" + g("l", y) + ",top=" + g("t", z));
                            return !1
                        })
                    }
                    $("#SB_tbl_wrap").show(K)
                })
            }, 20000);
            fs.calls([10, 20], function() {
                var a = "nr_clear";
                if ($("#fs_" + a).fs()) {
                    return
                }
                $("#nrelate_related_placeholder a").each(function() {
                    var b = $(this),
                        c = b.find("img").attr("src"),
                        d = b.find(".nr_post_title").html(),
                        e = "<font color=#FFFF00>Klik {X}<blink>...</blink></font>",
                        f = "<div class=ttnrw>";
                    b.fs("tt", {
                        c: "<center>" + f + "<b>" + ((d == null) ? "Ini perlu tahu lho..." : d) + "</b></div><img class=ttnri src=" + c + ">" + f + ((d == null) ? e.replace("{X}", "agar tahu") : "Belum tahu? " + e.replace("{X}", "aja")) + "</div></center>"
                    }).find("img").removeAttr("title")
                });
                $("." + a + ":last").attr("id", "fs_" + a)
            })
        }(function(a) {
            var b = a + "/label/",
                c = _C + ",#sidebar",
                d = "$('#postpath,#fs_breadcrumb').remove()",
                e = "#smart-fs-search",
                f = C("q");
            if (U.indexOf(b) != -1) {
                L(D(U.split(b)[1].split("?")[0], 1), 1, 0, 0, function() {
                    $(c).hide();
                    setTimeout(d, 1000)
                })
            }
            if (U.indexOf(a + "?") != -1) {
                L(f, 1, 1, 0, function() {
                    $(c).hide();
                    $(e + " .q").val(f.replace(/\+/g, " ")).select();
                    setTimeout(d, 1000)
                })
            }
            fs.formSE(e)
        })("/search");
        fs.calls([7, 15], function() {
            $(".fs_scrollto").attr({
                onclick: "$($(this).attr('href')).fs('scroll');return !1"
            })
        });
        $(_C + " span.fs").each(function() {
            var a = $(this),
                b = fs.$_YM(a.html(), 1);
            a.html(b).removeClass("fs")
        });
        fs.toTbl.stripe("#" + _A, 1);
        $.each([_C, "#HTML11"], function(k, v) {
            if ($(v).fs()) {
                fs.$_tt(v)
            }
        });
        (function(h) {
            var x = "supercounters",
                u = "https://www." + x + ".com/fc.php?id=" + h + "&w=1&v=1",
                d = document,
                w = window,
                y = screen,
                z;
            w.sc_onlinetext = function(i, a) {
                z = $.trim(a.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ""))
            };
            u += "&ua=" + D(navigator.userAgent) + "&tt=" + D(d.title) + "&ref=" + D(d.referrer) + "&url=" + D(w.location) + "&sw=" + y.width + "&sh=" + y.height + "&rand=" + Math.round(100 * Math.random()) + "&label=";
            $.getScript(u, function() {
                $("." + x).each(function() {
                    var q = $(this),
                        Q = fs.replace(q.data("text"), {
                            "{N}": z,
                            "{b}": "<b>",
                            "{/b}": "</b>"
                        });
                    q.html(Q)
                })
            })
        })(222804);
        $("#recentComments").fs(S, "comments");
        K(10000);
        setTimeout(fs.ad.info, 3000);
        $("#wb_copyright").html(" - " + _$year)
    };
