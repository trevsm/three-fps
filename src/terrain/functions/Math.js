export const math = (function () {
  return {
    rand_range: function (a, b) {
      return Math.random() * (b - a) + a
    },

    rand_normalish: function () {
      const r = Math.random() + Math.random() + Math.random() + Math.random()
      return (r / 4.0) * 2.0 - 1
    },

    rand_int: function (a, b) {
      return Math.round(Math.random() * (b - a) + a)
    },

    lerp: function (x, a, b) {
      return x * (b - a) + a
    },

    smoothstep: function (x, a, b) {
      x = x * x * (3.0 - 2.0 * x)
      return x * (b - a) + a
    },

    smootherstep: function (x, a, b) {
      x = x * x * x * (x * (x * 6 - 15) + 10)
      return x * (b - a) + a
    },

    clamp: function (x, a, b) {
      return Math.min(Math.max(x, a), b)
    },

    sat: function (x) {
      return Math.min(Math.max(x, 0.0), 1.0)
    },

    in_range: (x, a, b) => {
      return x >= a && x <= b
    },
  }
})()

export let perlin = {
  rand_vect: function () {
    let theta = Math.random() * 2 * Math.PI
    return { x: Math.cos(theta), y: Math.sin(theta) }
  },
  dot_prod_grid: function (x, y, vx, vy) {
    let g_vect
    let d_vect = { x: x - vx, y: y - vy }
    if (this.gradients[[vx, vy]]) {
      g_vect = this.gradients[[vx, vy]]
    } else {
      g_vect = this.rand_vect()
      this.gradients[[vx, vy]] = g_vect
    }
    return d_vect.x * g_vect.x + d_vect.y * g_vect.y
  },
  smootherstep: function (x) {
    return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3
  },
  interp: function (x, a, b) {
    return a + this.smootherstep(x) * (b - a)
  },
  seed: function () {
    this.gradients = {}
  },
  memory: {},
  get: function (x, y) {
    if (this.memory.hasOwnProperty([x, y])) return this.memory[[x, y]]
    let xf = Math.floor(x)
    let yf = Math.floor(y)
    //interpolate
    let tl = this.dot_prod_grid(x, y, xf, yf)
    let tr = this.dot_prod_grid(x, y, xf + 1, yf)
    let bl = this.dot_prod_grid(x, y, xf, yf + 1)
    let br = this.dot_prod_grid(x, y, xf + 1, yf + 1)
    let xt = this.interp(x - xf, tl, tr)
    let xb = this.interp(x - xf, bl, br)
    let v = this.interp(y - yf, xt, xb)
    this.memory[[x, y]] = v
    return v
  },
}
perlin.seed()
