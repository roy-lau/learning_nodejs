!(function (e, t, n) {
  "use strict";
  function o() {
    for (
      var e = ["taobao.com", "tmall.com", "etao.com"], t = 0;
      t < e.length;
      t++
    )
      if (location.hostname.indexOf(e[t]) >= 0) return 0.1;
    return 0.1;
  }
  function r(n, o) {
    if (!e.cdnNodeCb) {
      e.cdnNodeCb = function (t) {
        o(t), (e.cdnNodeCb = null);
      };
      var r = "script",
        i = t.createElement(r),
        a = t.getElementsByTagName(r)[0];
      (i.src = n), a.parentNode.insertBefore(i, a);
    }
  }
  function i() {
    for (var e = M.split("&"), t = {}, n = 0; n < e.length; n++) {
      var o = e[n],
        r = o.split("=");
      t[r[0]] = r[1];
    }
    return t;
  }
  function a(e, t) {
    return e && e.getAttribute ? e.getAttribute(t) || "" : "";
  }
  function s() {
    return (
      (h = h || t.getElementsByTagName("head")[0]),
      v || (h ? (v = h.getElementsByTagName("meta")) : [])
    );
  }
  function c(e) {
    var t,
      n,
      o,
      r = s(),
      i = r.length;
    for (t = 0; i > t; t++)
      if (((n = r[t]), a(n, "name") == e)) {
        o = a(n, "content");
        break;
      }
    return o;
  }
  function d() {
    var e = c("aplus-rate-ahot");
    return parseFloat(e || "");
  }
  function m() {
    var e = c("aplus-rate-ahot-res");
    return parseFloat(e || "");
  }
  function u() {
    return !!b.match(/iPad|iPod|iPhone|Android/i);
  }
  function l() {
    return (
      ("www.taobao.com" === location.hostname ||
        "www.tmall.com" === location.hostname) &&
      "/" === location.pathname
    );
  }
  function p(e, n) {
    var o = e,
      r = t.getElementById(o);
    return (
      r ||
        ((r = t.createElement("iframe")),
        r.setAttribute("frameborder", "0"),
        (r.style.cssText = "width:0;height:0;border:0;display:none;"),
        r.setAttribute("id", o),
        r.setAttribute("name", o)),
      n && r.setAttribute("src", n),
      r.parentNode || t.body.appendChild(r),
      r
    );
  }
  var f = 1;
  if (!(e._ap_agp_heat && f <= e._ap_agp_heat.version)) {
    var h,
      v,
      g = e.performance ||
        e.mozPerformance ||
        e.msPerformance ||
        e.webkitPerformance || { _na: 1 },
      E = location,
      T = (location.href, E.hostname, e.navigator),
      N = T.appVersion,
      b = (T && T.userAgent) || "",
      R = m(),
      S = d(),
      y = o(),
      I = t.getElementById("tb-beacon-aplus"),
      M = a(I, "exparams"),
      w = parent !== e.self,
      C = u(),
      _ = l(),
      O = { layout: 0, shouldBindMonitor: !1 },
      P = {
        RATE: {
          RESOURCE_TIMING: isNaN(R) ? 0.001 : R,
          PERFORMANCE_TIMING: isNaN(S) ? y : S,
          CDN_TIMING: 0.2,
          ENGINSTART: 1,
        },
        THRESHOLD: { RESOURCE_TIMING: 50 },
        DEBUG: {
          RESOURCE_TIMING: location.search.indexOf("agp-debug-resource") > -1,
          PERFORMANCE_TIMING: location.search.indexOf("agp-debug-perf") > -1,
          CDN_TIMING: location.search.indexOf("agp-debug-cdn") > -1,
        },
        ID: {
          IFRAME: "aplus_iframe_resource_timing",
          FORM: "aplus_form_resource_timing",
        },
      },
      A = function (e) {
        return void 0 === e || 0 === e ? 0 : Math.floor(e);
      },
      B =
        (e.attachEvent
          ? function (t) {
              e.attachEvent("onload", t);
            }
          : e.addEventListener
          ? function (t) {
              e.addEventListener("load", t, !1);
            }
          : function () {},
        function () {
          for (
            var e = "",
              t =
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            e.length < 16;

          )
            e += t.substr(Math.floor(62 * Math.random()), 1);
          return e;
        }),
      x = function (e) {
        var t,
          n = [];
        for (t in e)
          e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
        return n.join("&");
      },
      L = function (e) {
        var t = 0;
        return parseFloat(
          e.replace(/\./g, function () {
            return 0 === t++ ? "." : "";
          })
        );
      },
      D = function (e, t) {
        var n, o;
        (t[(n = "trident")] = 0.1),
          (o = e.match(/Trident\/([\d.]*)/)) && o[1] && (t[n] = L(o[1])),
          (t.core = n);
      },
      G = function (e) {
        var t, n;
        return (t = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) &&
          (n = t[1] || t[2])
          ? L(n)
          : 0;
      },
      k = function (e) {
        return e || "other";
      },
      F = function (n) {
        function o() {
          for (
            var e = [
                ["Windows NT 5.1", "winXP"],
                ["Windows NT 6.1", "win7"],
                ["Windows NT 6.0", "winVista"],
                ["Windows NT 6.2", "win8"],
                ["iPad", "ios"],
                ["iPhone;", "ios"],
                ["iPod", "ios"],
                ["Macintosh", "mac"],
                ["Android", "android"],
                ["Ubuntu", "ubuntu"],
                ["Linux", "linux"],
                ["Windows NT 5.2", "win2003"],
                ["Windows NT 5.0", "win2000"],
                ["Windows", "winOther"],
                ["rhino", "rhino"],
              ],
              t = 0,
              o = e.length;
            o > t;
            ++t
          )
            if (-1 != n.indexOf(e[t][0])) return e[t][1];
          return "other";
        }
        function r(t, n, o, r) {
          var i,
            a = e.navigator.mimeTypes;
          try {
            for (i in a)
              if (a.hasOwnProperty(i) && a[i][t] == n) {
                if (void 0 !== o && r.test(a[i][o])) return !0;
                if (void 0 === o) return !0;
              }
            return !1;
          } catch (s) {
            return !1;
          }
        }
        var i,
          a,
          s,
          c,
          d,
          m,
          u,
          l,
          p = "",
          f = p,
          h = p,
          v = [6, 9],
          g = "{{version}}",
          E = "<!--[if IE " + g + "]><s></s><![endif]-->",
          T = t && t.createElement("div"),
          b = [],
          R = {
            webkit: void 0,
            trident: void 0,
            gecko: void 0,
            presto: void 0,
            chrome: void 0,
            safari: void 0,
            firefox: void 0,
            ie: void 0,
            ieMode: void 0,
            opera: void 0,
            mobile: void 0,
            core: void 0,
            shell: void 0,
            phantomjs: void 0,
            os: void 0,
            ipad: void 0,
            iphone: void 0,
            ipod: void 0,
            ios: void 0,
            android: void 0,
            nodejs: void 0,
            extraName: void 0,
            extraVersion: void 0,
          };
        if (
          (T &&
            T.getElementsByTagName &&
            ((T.innerHTML = E.replace(g, "")),
            (b = T.getElementsByTagName("s"))),
          b.length > 0)
        ) {
          for (D(n, R), c = v[0], d = v[1]; d >= c; c++)
            if (((T.innerHTML = E.replace(g, c)), b.length > 0)) {
              R[(h = "ie")] = c;
              break;
            }
          !R.ie && (s = G(n)) && (R[(h = "ie")] = s);
        } else
          (a = n.match(/AppleWebKit\/([\d.]*)/)) && a[1]
            ? ((R[(f = "webkit")] = L(a[1])),
              (a = n.match(/OPR\/(\d+\.\d+)/)) && a[1]
                ? (R[(h = "opera")] = L(a[1]))
                : (a = n.match(/Chrome\/([\d.]*)/)) && a[1]
                ? (R[(h = "chrome")] = L(a[1]))
                : (a = n.match(/\/([\d.]*) Safari/)) &&
                  a[1] &&
                  (R[(h = "safari")] = L(a[1])),
              / Mobile\//.test(n) && n.match(/iPad|iPod|iPhone/)
                ? ((R.mobile = "apple"),
                  (a = n.match(/OS ([^\s]*)/)),
                  a && a[1] && (R.ios = L(a[1].replace("_", "."))),
                  (i = "ios"),
                  (a = n.match(/iPad|iPod|iPhone/)),
                  a && a[0] && (R[a[0].toLowerCase()] = R.ios))
                : / Android/i.test(n)
                ? (/Mobile/.test(n) && (i = R.mobile = "android"),
                  (a = n.match(/Android ([^\s]*);/)),
                  a && a[1] && (R.android = L(a[1])))
                : (a = n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) &&
                  (R.mobile = a[0].toLowerCase()),
              (a = n.match(/PhantomJS\/([^\s]*)/)) &&
                a[1] &&
                (R.phantomjs = L(a[1])))
            : (a = n.match(/Presto\/([\d.]*)/)) && a[1]
            ? ((R[(f = "presto")] = L(a[1])),
              (a = n.match(/Opera\/([\d.]*)/)) &&
                a[1] &&
                ((R[(h = "opera")] = L(a[1])),
                (a = n.match(/Opera\/.* Version\/([\d.]*)/)) &&
                  a[1] &&
                  (R[h] = L(a[1])),
                (a = n.match(/Opera Mini[^;]*/)) && a
                  ? (R.mobile = a[0].toLowerCase())
                  : (a = n.match(/Opera Mobi[^;]*/)) && a && (R.mobile = a[0])))
            : (s = G(n))
            ? ((R[(h = "ie")] = s), D(n, R))
            : (a = n.match(/Gecko/)) &&
              ((R[(f = "gecko")] = 0.1),
              (a = n.match(/rv:([\d.]*)/)) &&
                a[1] &&
                ((R[f] = L(a[1])),
                /Mobile|Tablet/.test(n) && (R.mobile = "firefox")),
              (a = n.match(/Firefox\/([\d.]*)/)) &&
                a[1] &&
                (R[(h = "firefox")] = L(a[1])));
        i || (i = o());
        var S, y;
        if (!r("type", "application/vnd.chromium.remoting-viewer")) {
          (S = "scoped" in t.createElement("style")), (y = "v8Locale" in e);
          try {
            l = e.external || void 0;
          } catch (I) {}
          if ((a = n.match(/360SE/))) m = "360";
          else if ((a = n.match(/SE\s([\d.]*)/)) || (l && "SEVersion" in l))
            (m = "sougou"), (u = L(a[1]) || 0.1);
          else if ((a = n.match(/Maxthon(?:\/)+([\d.]*)/)) && l) {
            m = "maxthon";
            try {
              u = L(l.max_version || a[1]);
            } catch (M) {
              u = 0.1;
            }
          } else
            S && y
              ? (m = "360se")
              : S ||
                y ||
                !/Gecko\)\s+Chrome/.test(N) ||
                R.opera ||
                R.trident ||
                (m = "360ee");
        }
        return (
          (a = n.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))
            ? ((m = "tt"), (u = L(a[2]) || 0.1))
            : (a = n.match(/LBBROWSER/)) || (l && "LiebaoGetVersion" in l)
            ? (m = "liebao")
            : (a = n.match(/TheWorld/))
            ? ((m = "theworld"), (u = 3))
            : (a = n.match(/TaoBrowser\/([\d.]*)/)) &&
              ((m = "taobao"), (u = L(a[1]) || 0.1)),
          (R.os = i),
          (R.core = R.core || f),
          (R.shell = h),
          (R.ieMode = (R.ie && t.documentMode) || R.ie),
          (R.extraName = m),
          (R.extraVersion = u),
          (R.resolution = e.screen.width + "x" + e.screen.height),
          R
        );
      },
      U =
        (B(),
        "BackCompat" == t.compatMode ? t.body : t.documentElement,
        E.protocol),
      j = "https:" == U,
      V = U + "//res.mmstat.com/perf.gif?logtype=2&cache=",
      W = "//cdn.cmos.greencompute.org/";
    if (n && "object" == typeof n) {
      for (var z in n) P.RATE[z] = n[z];
      n.BASE_URL && (V = n.BASE_URL), n.BASE_CDN && (V = n.BASE_URL);
    }
    var q = function (e) {
      this.config = e;
    };
    q.prototype = {
      startup: function () {
        var t = this;
        (this["spm-cnt"] =
          e.goldlog && e.goldlog.spm_ab ? e.goldlog.spm_ab : null),
          t.sendPV(),
          t.sendCDNTime();
      },
      collectPerformanceTiming: function () {
        var t = g.timing,
          n = {};
        if (!t) return n;
        var o,
          r,
          i,
          a = {
            navigationStart: "ns",
            unloadEventStart: "ues",
            unloadEventEnd: "uee",
            redirectStart: "rds",
            redirectEnd: "rde",
            fetchStart: "fs",
            domainLookupStart: "dls",
            domainLookupEnd: "dle",
            connectStart: "cs",
            connectEnd: "ce",
            secureConnectionStart: "scs",
            requestStart: "rqs",
            responseStart: "rps",
            responseEnd: "rpe",
            domLoading: "dl",
            domInteractive: "di",
            domContentLoadedEventStart: "dcles",
            domContentLoadedEventEnd: "dclee",
            domComplete: "dc",
            loadEventStart: "les",
            loadEventEnd: "lee",
          },
          s = t.navigationStart;
        for (o in a)
          (r = t[o]),
            (i = a[o]),
            0 === r || void 0 === r
              ? (n[i] = "na")
              : "number" == typeof r && (n[i] = r - s);
        var c, d;
        return (
          "number" == typeof t.msFirstPaint
            ? (c = t.msFirstPaint)
            : e.chrome &&
              e.chrome.loadTimes &&
              (d = e.chrome.loadTimes().firstPaintTime) &&
              (c = Math.ceil(1e3 * d)),
          "number" == typeof c ? (c -= s) : (c = "na"),
          (n.fp = c),
          n
        );
      },
      collectResourceByNameTiming: function (t) {
        var n = this;
        if ("performance" in e && "getEntriesByName" in g) {
          var o = {},
            r = g.getEntriesByName(U + W);
          if (r[0] && r[0].initiatorType) {
            var i = r[0];
            o = {
              rs: A(i.redirectStart),
              re: A(i.redirectEnd),
              fs: A(i.fetchStart),
              st: A(i.startTime),
              dls: A(i.domainLookupStart),
              dle: A(i.domainLookupEnd),
              cs: A(i.connectStart),
              ce: A(i.connectEnd),
              scs: A(i.secureConnectionStart),
              resqs: A(i.requestStart),
              resps: A(i.responseStart),
              respe: A(i.responseEnd),
              restype: i.initiatorType,
              n: i.name,
              cn: t.node,
            };
          }
          setTimeout(function () {
            n.sendData("//res.mmstat.com/c.gif", o);
          }, 0);
        }
      },
      collectResourceTiming: function () {
        var e = [],
          t = g.getEntriesByType("resource");
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var o = t[n];
            o.initiatorType &&
              e.push({
                rs: A(o.redirectStart),
                re: A(o.redirectEnd),
                fs: A(o.fetchStart),
                st: A(o.startTime),
                dls: A(o.domainLookupStart),
                dle: A(o.domainLookupEnd),
                cs: A(o.connectStart),
                ce: A(o.connectEnd),
                scs: A(o.secureConnectionStart),
                resqs: A(o.requestStart),
                resps: A(o.responseStart),
                respe: A(o.responseEnd),
                restype: o.initiatorType,
                n: o.name,
              });
          }
        return e;
      },
      sendPV: function () {
        if (
          "timing" in g &&
          (Math.random() < P.RATE.PERFORMANCE_TIMING ||
            P.DEBUG.PERFORMANCE_TIMING)
        ) {
          var t = this;
          if (!this.initialized) {
            var n,
              o,
              r,
              a,
              s,
              c,
              d,
              m,
              u,
              l,
              p,
              f,
              h,
              v = 1;
            try {
              (n = F(b)),
                (o = n.os),
                (r = n.shell),
                (a = n.core),
                (s = n.resolution),
                (c = n.extraName),
                (d = n.extraVersion),
                (m = o ? o + (n[o] ? n[o] : "") : ""),
                (u = r ? r + parseInt(n[r]) : ""),
                (l = a),
                (p = s),
                (f = c ? c + (d ? parseInt(d) : "") : ""),
                (t.mx = f);
            } catch (E) {}
            t.sendResourceTiming();
            var T = { p: v, o: k(m), b: k(u), w: k(l), s: p, mx: f };
            this["spm-cnt"] && (T["spm-cnt"] = this["spm-cnt"].join(".")),
              e.goldlog && goldlog.pvid && (T["spm-cnt"] += "." + goldlog.pvid),
              j && (T.isps = 1),
              (h = i().trid) && (T.trid = h),
              setTimeout(function () {
                var e,
                  n,
                  o = t.collectPerformanceTiming();
                for (e in o)
                  o.hasOwnProperty(e) && ((n = o[e]), T[e] || (T[e] = n));
                (t.initialized = !0), t.sendData(V + Math.random(), T);
              }, 0);
          }
        }
      },
      sendCDNTime: function () {
        var t = this;
        !C &&
          _ &&
          (Math.random() < P.RATE.CDN_TIMING || P.DEBUG.CDN_TIMING) &&
          "performance" in e &&
          (this.initiCDN ||
            (r(W, function (e) {
              t.collectResourceByNameTiming(e);
            }),
            (this.initiCDN = !0)));
      },
      sendResourceTiming: function () {
        var t = this;
        if (
          (Math.random() < P.RATE.RESOURCE_TIMING || P.DEBUG.RESOURCE_TIMING) &&
          "performance" in e &&
          "getEntriesByType" in g &&
          g.getEntriesByType("resource") instanceof Array
        )
          for (
            var n = "|--|",
              o = this.collectResourceTiming(),
              r = this.groupResourceTimingData(o),
              i = 0;
            i < r.length;
            i++
          )
            !(function (o) {
              setTimeout(function () {
                var i = [
                  e.goldlog ? goldlog.pvid : "",
                  "total=" + r.length,
                  "index=" + (o + 1),
                  "rescnt=" + r[o].groupItem.length,
                  r[o].groupItemString,
                  t["spm-cnt"] ? "spm-cnt=" + t["spm-cnt"] : "",
                  t.mx ? "mx=" + t.mx : "",
                ].join(n);
                t.setResourceTimingForm("content", i);
              }, 500 * (o + 1));
            })(i);
      },
      groupResourceTimingData: function (e) {
        for (var t = this, n = []; e.length; )
          n.push(e.splice(0, P.THRESHOLD.RESOURCE_TIMING));
        for (var o = 0; o < n.length; o++) {
          for (
            var r = n[o], i = "", a = "|--|", s = "resinfo=", c = 0;
            c < r.length;
            c++
          ) {
            var d = r[c];
            i += s + t.serializeResourceObj(d) + a;
          }
          n[o] = { groupItem: r, groupItemString: i };
        }
        return n;
      },
      serializeResourceObj: function (e) {
        var t,
          n = [],
          o = "|-|";
        for (t in e)
          e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
        return n.join(o);
      },
      setResourceTimingForm: function (e, n) {
        var o,
          r,
          i = P.ID.IFRAME + "_" + Math.floor(1e6 * Math.random()),
          a = p(i);
        (o = t.createElement("form")),
          (o.style.display = "none"),
          (o.target = a.id),
          (o.method = "POST"),
          (o.action = "//res.mmstat.com/1.gif"),
          o.setAttribute("id", P.ID.FORM),
          (r = t.createElement("input")),
          (r.type = "hidden"),
          o.appendChild(r);
        var s = t.createElement("input");
        (s.type = "submit"),
          (s.value = ""),
          o.appendChild(s),
          t.body.appendChild(o),
          (r = o.getElementsByTagName("input")[0]),
          (r.name = e),
          (r.value = n),
          o.submit(),
          (a.onload = function () {
            o.parentNode.removeChild(o), a.parentNode.removeChild(a);
          });
      },
      sendData: function (t, n) {
        var o = new Image(),
          r = "_img_" + Math.random(),
          i = -1 == t.indexOf("?") ? "?" : "&";
        (e[r] = o),
          (o.onload = o.onerror = function () {
            e[r] = null;
          }),
          (o.src = t + i + x(n)),
          (o = null);
      },
    };
    var H =
      g.setResourceTimingBufferSize || g.webkitSetResourceTimingBufferSize;
    if (
      (H && H.call(g, 200),
      (e._ap_agp_heat = { version: f }),
      Math.random() < P.RATE.ENGINSTART && !w)
    ) {
      var Q = new q(O);
      Q.startup();
    }
  }
})(window, document);
