    function tx(s) {
        return document.write(s)
    };
    var fs = {
        IE: document.all ? true : false,
        loc: location.href,
        $: function(id) {
            return document.getElementById(id)
        },
        $_raw: function(s) {
            s = (s + "").toString();
            return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A")
        }
    };
    var _w_ = {
        f: function(v) {
            var f = 'ABCDEFGHIJKLMNOPQRSTUVWQYZabcdefghijklmnopqrstuvwqyz!@#$%^&*()_+-={}|[]\\:";\'<>?,./~`';
            var s = f.split('');
            return s[v]
        },
        s: function(v) {
            var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            return a[v]
        },
        l: function(x, y, z) {
            var n;
            if (z || z == 0) {
                n = _w_.s(x) * _w_.s(y) + _w_.s(z)
            } else {
                n = _w_.s(x) + _w_.s(y)
            }
            return n
        },
        u: function(v) {
            var d = ['://', 'http', 'https', 'www', '.com', '.net', '.info', '.org', '.biz'];
            return d[v]
        }
    };
    var wb = {
    s: _w_.u(_w_.s(2)) +          // https
       _w_.u(_w_.s(0)) +          // ://
       'ocimnet.blogspot.com',    // domain tujuan

    $_sty_me: function(o) {
        if (o === true) {
            return "display:none";
        } else {
            return "font-size:36px;text-align:center;display:block;color:red;background:#000;padding:30px";
        }
    }
};
}
