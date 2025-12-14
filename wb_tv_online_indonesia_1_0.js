/* =====================================================
   TV Online Indonesia - Clean Version
   Tanpa Proteksi | Bebas Domain | Blogger Friendly
   ===================================================== */

var wb = {};
var fs = {
  $: function(id) { return document.getElementById(id); },
  loc: window.location.href
};

wb.tv_setting = {
  player_width: 640,
  player_height: 360,
  icon_width: 120,
  channel_start: 0,
  float_icon: false
};

/* ===== DAFTAR CHANNEL ===== */
wb.tv_this = function () {
  var w = wb.tv_setting.icon_width;
  return [
    ['RCTI', '2.bp.blogspot.com/-zvai-lgamfY/TtYbmpzH1CI/AAAAAAAABdo/gnAgcZ9B2e8/s' + w + '/rcti'],
    ['SCTV', '2.bp.blogspot.com/-pw89jHptp0c/TtYbmuDjhVI/AAAAAAAABdw/-BnBB9dL7TsA/s' + w + '/sctv'],
    ['Indosiar', '4.bp.blogspot.com/-xkrrHwYu4qM/TtYa_7xsHVI/AAAAAAAABb4/PeGRJG1L0_8/s' + w + '/indosiar'],
    ['ANTV', '4.bp.blogspot.com/-aQpVBPuxSB0/TtYa2a0a9YI/AAAAAAAABaw/4D0_KC1ZPLg/s' + w + '/antv'],
    ['Trans TV', '4.bp.blogspot.com/-O9TIVtVyXMA/TtYbnDUD_AI/AAAAAAAABeM/FBK2lWDrQAA/s' + w + '/trans'],
    ['TV One', '1.bp.blogspot.com/-gfXcWHW-Jao/TtYbnNMUPzI/AAAAAAAABeU/u7K-zBesqU8/s' + w + '/tvone'],
    ['Metro TV', '1.bp.blogspot.com/-3G7uuMuIiYE/TtYbVGSEjDI/AAAAAAAABc8/sxmPcWctJ8k/s' + w + '/metro']
  ];
};

/* ===== PLAYER ===== */
wb.tvo = function (url, name) {
  fs.$('TVPlayerWb').src = url;
  fs.$('NamaTV').innerHTML = 'Sedang diputar: <b>' + name + '</b>';
};

/* ===== LOAD SCRIPT ===== */
wb.tv_load = function () {

  var ch = wb.tv_this();
  var x = wb.tv_setting.player_width;
  var y = wb.tv_setting.player_height;
  var z = wb.tv_setting.icon_width;
  var start = wb.tv_setting.channel_start;

  var playerURL = "https://www.youtube.com/embed/live_stream?channel=";

  /* STYLE */
  var style = `
  <style>
    .tvbox{border:1px solid #ccc;padding:8px;background:#f9f9f9}
    #NamaTV{margin-bottom:5px;font-weight:bold}
    ul#fsTVOnline{list-style:none;padding:0;margin:0}
    ul#fsTVOnline li{float:left;margin:5px}
    ul#fsTVOnline img{cursor:pointer;border-radius:6px}
    .clear{clear:both}
  </style>`;

  /* PLAYER */
  var html = `
  ${style}
  <div class="tvbox">
    <div id="NamaTV"></div>
    <iframe id="TVPlayerWb" width="${x}" height="${y}" frameborder="0" allowfullscreen></iframe>
  </div>
  <ul id="fsTVOnline">`;

  ch.forEach(function (v, i) {
    html += `
      <li>
        <img src="https://${v[1]}.png" width="${z}"
        onclick="wb.tvo('${playerURL}', '${v[0]}')" alt="${v[0]}">
      </li>`;
  });

  html += '</ul><div class="clear"></div>';

  fs.$('TVOnline').innerHTML = html;

  wb.tvo(playerURL, ch[start][0]);
};

/* AUTO LOAD */
document.addEventListener("DOMContentLoaded", wb.tv_load);
