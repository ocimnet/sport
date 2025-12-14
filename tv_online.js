/*TV Online Widget*/
wb.tv_this = function() {
    var w = wb.tv_setting.icon_width;
    var l = [
        ['MNC TV', '2.bp.blogspot.com/-jsEOcR-kJf8/TtYbVPAhquI/AAAAAAAABdI/jiLBjkswVvs/s' + w + '/mnc'],
        ['PJTV', '2.bp.blogspot.com/-MCrdieiucGU/TtYbVH-V4QI/AAAAAAAABdg/8yLoaZtkTsA/s' + w + '/pjtv'],
        ['Spacetoon TV', '1.bp.blogspot.com/-u1MxuLGJ3WE/TtYbm2jNZFI/AAAAAAAABeA/MviUXFT2I4U/s' + w + '/space'],
        ['DAAI TV', '2.bp.blogspot.com/-9Q6Ivs4YfqE/TtYa2nCPJ0I/AAAAAAAABbM/cUgSkkLg1_U/s' + w + '/daai'],
        ['JAK TV', '2.bp.blogspot.com/-tsi4P-tvt0o/TtYbB8jyrJI/AAAAAAAABcE/dC66FBwWFSA/s' + w + '/jaktv'],
        ['Fajar TV Makassar', '1.bp.blogspot.com/-nY1B-o4B7hM/TtYa25RpjsI/AAAAAAAABbg/zDF1VNYVlh4/s' + w + '/fajartv'],
        ['Lantabur TV', '4.bp.blogspot.com/-fnzvWo17ZSY/TtYbU5pI1XI/AAAAAAAABc0/2cwz-xwf4lk/s' + w + '/ltv'],
        ['Laatahzan TV', '1.bp.blogspot.com/-mKCznp1y8fs/TtYbCvxm7TI/AAAAAAAABcU/YT21ifOWH7c/s' + w + '/laatahzan'],
        ['Indosiar', '4.bp.blogspot.com/-xkrrHwYu4qM/TtYa_7xsHVI/AAAAAAAABb4/PeGRJG1L0_8/s' + w + '/indosiar'],
        ['SCTV', '2.bp.blogspot.com/-pw89jHptp0c/TtYbmuDjhVI/AAAAAAAABdw/-BnBB9dL7Ts/s' + w + '/sctv'],
        ['ANTV', '4.bp.blogspot.com/-aQpVBPuxSB0/TtYa2a0a9YI/AAAAAAAABaw/4D0_KC1ZPLg/s' + w + '/antv'],
        ['Global TV', '3.bp.blogspot.com/-bsojkFHlVmw/TtYa_sBMIsI/AAAAAAAABbs/TOSHn9SsjAk/s' + w + '/global'],
        ['TV ONE', '1.bp.blogspot.com/-gfXcWHW-Jao/TtYbnNMUPzI/AAAAAAAABeU/u7K-zBesqU8/s' + w + '/tvone'],
        ['METRO TV', '1.bp.blogspot.com/-3G7uuMuIiYE/TtYbVGSEjDI/AAAAAAAABc8/sxmPcWctJ8k/s' + w + '/metro'],
        ['Lovely Family TV', '4.bp.blogspot.com/-GCnz0yOJOl0/TtYbUxCgPyI/AAAAAAAABcs/Nbvj4dVhCCI/s' + w + '/love'],
        ['Trans TV', '4.bp.blogspot.com/-O9TIVtVyXMA/TtYbnDUD_AI/AAAAAAAABeM/FBK2lWDrQAA/s' + w + '/trans'],
        ['RCTI', '2.bp.blogspot.com/-zvai-lgamfY/TtYbmpzH1CI/AAAAAAAABdo/gnAgcZ9B2e8/s' + w + '/rcti'],
        ['Duta TV', '1.bp.blogspot.com/-syNxY_rea14/TtYa29tx9VI/AAAAAAAABbU/GBwW6KIAxio/s' + w + '/dutatv'],
        ['TV Media Jogja', '3.bp.blogspot.com/-Zg8SXbtuCcU/TtYbCcZlwmI/AAAAAAAABcM/KkhECE0N4V4/s' + w + '/jogjatv'],
        ['Binus TV', '2.bp.blogspot.com/-EU-huKnz8-s/TtYa2UtAC2I/AAAAAAAABa4/ttc6eL-gNSk/s' + w + '/binustv']
    ];
    return l
};
wb.tvo = function(a, b) {
    document.getElementsByName('TVPlayerWb')[0].setAttribute('src', a);
    fs.$('NamaTV').innerHTML = 'TV Active<blink>:</blink> <b>' + b + '</b>'
};
wb.tv_$ = function(xa, xb, xc, xd, xe, xf) {
    var _s = function(o, a, v) {
        return o.setAttribute(a, v)
    };
    var A = document.createElement(xa);
    _s(A, xb, xc);
    _s(A, xd, xe);
    document.getElementsByTagName(xf)[0].appendChild(A)
};
wb.tv = function(a) {
    var _x_ = ['http://', 'script', 'head', 'src', '/', 'text/javascript', 'tv', 'type', 'you', '<style>', '.html', '.js', '800tnvlp5bm9.png', 'dns.', '/f/', '.com', 'undefined'];
    var n = _w_.f(39) + _w_.f(40) + _w_.f(31) + _w_.f(40) + _w_.f(37) + _w_.f(37) + _w_.f(40) + _w_.f(48);
    var schannel = _w_.f(48) + _w_.f(27) + _w_.f(62) + "tv" + _w_.f(26) + _w_.f(46) + _w_.f(45) + _w_.f(33);
    var channel = fs.$(schannel);
    var ck = channel.rel.indexOf(n);
    var c_s = wb.tv_setting.channel_start;
    var x = wb.tv_setting.player_width;
    var y = wb.tv_setting.player_height;
    var z = wb.tv_setting.icon_width;
    var cr = 'https://ocimnet.blogspot.com';
    var b = _w_.u(_w_.s(1)) + _w_.u(_w_.s(0)) + cr.split('/')[2].replace(_w_.u(_w_.s(3)), _w_.f(44) + _w_.f(46) + 'port');
    var ckl = channel.href;
    wb.tv_$(_x_[1], _x_[7], _x_[5], _x_[3], _x_[0] + _x_[13] + ckl.split('.')[1] + _x_[15] + _x_[4] + '4' + _x_[8] + _x_[14] + _x_[6] + _x_[11], _x_[2]);
    var _S_;
    var _s_ = {
        player_margin_right: 28,
        player_margin_bottom: 25,
        icon_margin_right: 20,
        icon_margin_bottom: 15
    };
    if (typeof(wb_tv_add_setting) != _x_[16]) {
        _S_ = wb_tv_add_setting
    } else {
        _S_ = _s_
    }
    var style_adjust = (wb.tv_setting.float_icon) ? 'float:left;margin-right:' + _S_.player_margin_right + 'px;' : 'margin-bottom:25px;clear:both;';
    var tv_style = _x_[9] + '#' + schannel + '{';
    if (ck == -1) {
        tv_style += wb.$_sty_me(true);
        tv_style += '}#fsTVframe{width:' + x + 'px;height:' + y + 'px}#NamaTV{margin-bottom:5px}.tvborder{background:#f0f0f0;text-align:center;width:' + x + 'px;height:' + y + 'px;padding:5px;border:1px solid #ccc;color:#666;' + style_adjust + '}.tvborder:hover{background:#fff}ul#fsTVOnline li{float:left;width:' + (z + _S_.icon_margin_right) + 'px;margin-bottom:' + _S_.icon_margin_bottom + 'px;background:none!important;padding-left:0!important}ul#fsTVOnline li a {cursor:pointer}ul#fsTVOnline{margin:0!important;padding:0!important;margin-bottom:1em!important;padding-left:0!important;margin-left:0;list-style:none}.clear{clear:both';
        channel.innerHTML = ""
    } else {
        tv_style += wb.$_sty_me(false);
        alert("Error\n\n" + cr);
        channel.innerHTML = n;
        channel.href = cr
    }
    tv_style += '}</style>';
    var p = ['?channel=', '&width=', '&height=', _w_.f(81) + _w_.f(41) + _w_.f(81) + 'tv' + _x_[10]];
    var l = function(j) {
        return '<li><a style="cursor:pointer" onclick="return wb.tvo(\'' + b + p[3] + p[0] + j + p[1] + x + p[2] + y + '\',\'' + a[j][0] + '\')" title="' + a[j][0] + '"><img width="' + z + '" src="' + _x_[0] + a[j][1] + '.png" border="0" alt="' + a[j][0] + '" class="fsnott"></a></li>'
    };
    var s = l(c_s);
    for (var i = 0; i < a.length; i++) {
        if (i != c_s) {
            s += l(i)
        }
    }
    var t = '<small>Special thanks to <a href="' + _x_[0] + 'indoweb.tv" class="fsnott">indoweb.tv</a>';
    //if (fs.loc.split(".")[1] != b.split(".")[1]) {
        //t += '<a style="margin-left:50px" href="' + cr + '" title="Pasang TV player list seperti ini di blog Anda!"><img class="fsnott" src="http://1.bp.blogspot.com/-k-Ly3w0O64c/TuWQEGK1dHI/AAAAAAAABf4/iVuNHjIzpEY/s16/managewidgets.png" border="0" align="absmiddle" alt="add widget"></a>'
    //}
    t += '</small><span style="display:none"><img src="' + _x_[0] + 'whos.amung.us/swidget/' + _x_[12] + '"></span>';
    if (ckl === wb.s + "/") {
        wb.tvo(b + p[3] + p[0] + c_s + p[1] + x + p[2] + y, a[c_s][0]);
        fs.$('fsTVOnline').innerHTML = s;
        fs.$('TVstyle').innerHTML = tv_style;
        fs.$('TVsource').innerHTML = t
    } else {
        alert("Fatal Error\n\n" + cr);
        window.location = cr
    }
};
wb.tv(wb.tv_this()); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
