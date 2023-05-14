var p = Object.defineProperty;
var T = (l, t, e) => t in l ? p(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var x = (l, t, e) => (T(l, typeof t != "symbol" ? t + "" : t, e), e);
const v = (l, t) => {
  const e = l.indexOf(t);
  e > -1 && l.splice(e, 1);
}, y = (l, t) => setTimeout(() => {
  t > 0 && l("execution time timeout");
}, t * 1e3);
class O {
  constructor() {
    x(this, "value");
    x(this, "updated", () => {
    });
    let t = this;
    this.value = new Proxy([], {
      get(e, u, r) {
        return Reflect.get(e, u, r);
      },
      set(e, u, r, n) {
        let h = e[u];
        return Reflect.set(e, u, r, n), t.updated(h, r), !0;
      }
    });
  }
}
const w = (l, t) => {
  l.updated = t;
};
function I(l, t) {
  const { wait: e = "all", output: u = "sort", second: r = 0 } = t || {};
  let n = [], s = 0;
  return (...c) => new Promise((d, m) => {
    try {
      let f = y(m, r), o = new O();
      for (let i in c)
        if (toString.call(c[i]) === "[object Function]") {
          const a = c[i];
          o.value.push(a), (!Array.isArray(e) || e.includes(parseInt(i))) && (c[i] = () => {
            n.push({ callback: c[i], result: a() }), v(o.value, a);
          });
        }
      s = o.value.length, w(o, () => {
        (e === "all" && n.length === s || Array.isArray(e) && n.length === e.length) && (clearTimeout(f), u === "sort" && (n = n.sort((i, a) => {
          const b = c.indexOf(i.callback), k = c.indexOf(a.callback);
          return b - k;
        }), d(n)), u === "order" && d(n)), e === "race" && n.length && d([n[0]]);
      }), l(...c);
    } catch (f) {
      m(f);
    }
  });
}
export {
  I as default
};
