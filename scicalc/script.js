! function (t) {
	var o = {};

	function e(n) {
		if (o[n]) return o[n].exports;
		var r = o[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
	}
	e.m = t, e.c = o, e.d = function (t, o, n) {
		e.o(t, o) || Object.defineProperty(t, o, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, e.r = function (t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, e.n = function (t) {
		var o = t && t.__esModule ? function () {
			return t.default
		} : function () {
			return t
		};
		return e.d(o, "a", o), o
	}, e.o = function (t, o) {
		return Object.prototype.hasOwnProperty.call(t, o)
	}, e.p = "", e(e.s = 0)
}([function (t, o, e) {
	"use strict";
	e.r(o);
	const n = (t, o) => t + o,
		r = (t, o) => t - o,
		u = (t, o) => t * o,
		s = (t, o) => t / o,
		i = t => t <= 1 ? 1 : t * i(t - 1),
		c = (t, o) => Math.log(t) / Math.log(o),
		a = 645,
		p = 9,
		d = 16;
	const h = new class {
		constructor() {
			this.storedInput = "0", this.previouslyStoredInput = "0"
		}
		reset() {
			this.storedInput = "0", this.previouslyStoredInput = "0"
		}
		setStoredInput(t) {
			this.storedInput = t
		}
		getStoredInput() {
			return this.storedInput
		}
		setPreviouslyStoredInput(t) {
			this.previouslyStoredInput = t
		}
		getPreviouslyStoredInput() {
			return this.previouslyStoredInput
		}
	};
	var l = "",
		g = !1,
		S = "",
		b = "big-screen",
		I = !1,
		m = !1,
		f = 0,
		M = [];
	const y = t => t.includes(".");

	function k() {
		return "small-screen" === b ? p : "big-screen" === b ? d : void console.log("THERE HAS BEEN AN ERROR!")
	}

	function x(t) {
		return t.toString().split("").length
	}

	function w(t) {
		const o = h.getStoredInput();
		!1 === g ? (g = !0, h.setPreviouslyStoredInput(o), h.setStoredInput("0"), l = t, R(!0)) : !0 === g && (l = t)
	}

	function v() {
		h.reset(), g = !1, l = "", !1, M = [], $("#reset-button").text("AC")
	}

	function N() {
		$("#reset-button").text("C")
	}

	function P() {
		const t = parseInt(h.getPreviouslyStoredInput(), 10),
			o = parseInt(h.getStoredInput(), 10);
		let e;
		switch (l) {
			case "+":
				e = n(t, o);
				break;
			case "-":
				e = r(t, o);
				break;
			case "*":
				e = u(t, o);
				break;
			case "/":
				e = s(t, o);
				break;
			case "EE":
				e = t * Math.pow(10, o);
				break;
			case "customroot":
				e = Math.pow(t, 1 / o);
				break;
			case "customexp":
				e = Math.pow(t, o);
				break;
			case "reverse-customexp":
				e = Math.pow(o, t);
				break;
			case "custom-logarithm":
				e = c(t, o);
				break;
			default:
				e = o
		}
		h.setStoredInput(e.toString()), g = !1
	}

	function C(t) {
		const o = h.getStoredInput(),
			e = x(o),
			n = parseInt(o, 10);
		Number.isInteger(n), y(o);
		e < k() && ("0" === o ? h.setStoredInput(`${t}`) : h.setStoredInput(`${o}${t}`)), R()
	}
	const E = t => {
		const o = (new Intl.NumberFormat).format(t);
		return "-0" === t ? `-${o}` : o
	};

	function R(t) {
		const o = h.getStoredInput();
		S = t ? h.getPreviouslyStoredInput() : o, S = E(function (t) {
			var o = k(),
				e = t.toString().split(""),
				n = "";
			if (e.length <= o) return t;
			if (e.length > o)
				for (var r = 0; r <= o; r++) n += e[r];
			return n
		}(S)), $("#input-output").text(S)
	}

	function O() {
		$(window).width() <= a && "big-screen" == b ? (b = "small-screen", $(".big-screen").toggle(), A(), I = !1, $("#rad-display").text(""), $("#rad-button").text("Rad")) : $(window).width() > a && "small-screen" == b && (b = "big-screen", $(".big-screen").toggle())
	}

	function A() {
		$("#e-to-the-x-button").html("e<sup>x</sup>"), $("#ten-to-the-x-button").html("10<sup>x</sup>"), $("#log-base-e-button").html("ln"), $("#log-base-10-button").html("log<sub>10</sub>"), $("#sin-button").html("sin"), $("#cos-button").html("cos"), $("#tan-button").html("tan"), $("#sinh-button").html("sinh"), $("#cosh-button").html("cosh"), $("#tanh-button").html("tanh")
	}
	const _ = () => {
			const t = h.getStoredInput(),
				o = y(t);
			x(t) < k() && !o && h.setStoredInput(`${t}.`), N()
		},
		j = t => {
			$(`#number-${t}`).click(() => {
				C(t), N()
			}), $(document).keypress(o => {
				String.fromCharCode(o.keyCode) === `${t}` && (C(t), N())
			})
		},
		H = (t, o) => {
			$(`#${t}`).click(function () {
				o(), R()
			})
		};
	Array(10).fill(0).map((t, o) => t + o).forEach(j);
	const q = (t, o, e) => {
		$(`#${t}`).click(() => {
			g && (P(), R()), w(o), N()
		}), [o].concat(e).forEach(t => {
			$(document).keypress(e => {
				String.fromCharCode(e.keyCode) === t && (g && (P(), R()), w(o), N())
			})
		})
	};
	q("add-button", "+", []), q("subtract-button", "-", []), q("multiplication-button", "*", ["x"]), q("division-button", "/", [""]), H("reset-button", () => {
		v()
	}), H("decimal-point", () => {
		_()
	}), H("calculate-button", () => {
		P(), g = !1
	}), H("make-negative-button", () => {
		const t = h.getStoredInput();
		let o = "-" === t[0] ? t.slice(1) : `-${t}`;
		h.setStoredInput(o)
	}), H("percent-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput((t / 100).toString())
	}), H("memory-clear", () => {
		f = 0
	}), H("memory-add", () => {
		const t = h.getStoredInput();
		f += Number(t)
	}), H("memory-subtract", () => {
		const t = h.getStoredInput();
		f -= Number(t)
	}), H("memory-recall", () => {
		h.setStoredInput(f.toString())
	}), H("second-power-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(Math.pow(Number(t), 2).toString())
	}), H("third-power-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(Math.pow(Number(t), 3).toString())
	}), H("ten-to-the-x-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(m ? Math.pow(2, Number(t)).toString() : Math.pow(10, Number(t)).toString())
	}), H("inverse-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput((1 / Number(t)).toString()), N()
	}), H("square-root-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(Math.pow(Number(t), .5).toString())
	}), H("third-root-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(Math.pow(Number(t), 1 / 3).toString())
	}), H("log-base-10-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(m ? (Math.log(Number(t)) / Math.log(2)).toString() : Math.log10(Number(t)).toString())
	}), H("factorial-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(i(Number(t)).toString())
	}), H("sin-button", () => {
		const t = h.getStoredInput();
		m ? h.setStoredInput(I ? Math.asin(t).toString() : (180 * Math.asin(t) / Math.PI).toString()) : h.setStoredInput(I ? Math.sin(t).toString() : Math.sin(t * Math.PI / 180).toString())
	}), H("cos-button", () => {
		const t = h.getStoredInput();
		m ? h.setStoredInput(I ? Math.acos(t).toString() : (180 * Math.acos(t) / Math.PI).toString()) : h.setStoredInput(I ? Math.cos(t).toString() : Math.cos(t * Math.PI / 180).toString())
	}), H("tan-button", () => {
		const t = h.getStoredInput();
		m ? h.setStoredInput(I ? Math.atan(t).toString() : (180 * Math.atan(t) / Math.PI).toString()) : h.setStoredInput(I ? Math.tan(t).toString() : Math.tan(t * Math.PI / 180).toString())
	}), H("e-constant-button", () => {
		h.setStoredInput(Math.E.toString())
	}), H("rad-button", () => {
		I ? (I = !1, $("#rad-display").text(""), $("#rad-button").text("Rad")) : (I = !0, $("#rad-display").text("Rad"), $("#rad-button").text("Deg")), I = !I
	}), H("sinh-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(m ? Math.asinh(t).toString() : Math.sinh(t).toString())
	}), H("cosh-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(m ? Math.acosh(t).toString() : Math.cosh(t).toString())
	}), H("tanh-button", () => {
		const t = h.getStoredInput();
		h.setStoredInput(m ? Math.atanh(t).toString() : Math.tanh(t).toString())
	}), H("pi-button", () => {
		h.setStoredInput(Math.PI.toString()), N()
	}), H("random-button", () => {
		h.setStoredInput(Math.random().toString()), N()
	}), $(document).ready(function () {
		O(), $(window).resize(function () {
			console.log($(window).width()), O()
		}), $(document).keydown(function (t) {
			8 !== t.keyCode && 46 !== t.keyCode || (v(), R())
		}), $(document).keydown(function (t) {
			110 === t.keyCode && (_(), R())
		}), $(document).keydown(function (t) {
			13 === t.keyCode && (P(), g = !1, R())
		}), $(document).keypress(function (t) {
			if ("%" === String.fromCharCode(t.keyCode)) {
				const t = h.getStoredInput();
				h.setStoredInput((t / 100).toString()), R()
			}
		}), $("#set-parenthesis").click(function () {
			!0 === g && (M.push([h.getPreviouslyStoredInput(), l]), h.reset(), g = !1, l = "", R())
		}), $("#close-parenthesis").click(function () {
			if (console.log(M), M.length > 0) {
				P();
				var t = M.pop();
				h.setPreviouslyStoredInput(t[0]), l = t[1], P(), R()
			}
		}), $("#second-setting-button").click(function () {
			m ? (m = !1, A()) : (m = !0, $("#e-to-the-x-button").html("y<sup>x</sup>"), $("#ten-to-the-x-button").html("2<sup>x</sup>"), $("#log-base-e-button").html("log<sub>y</sub>"), $("#log-base-10-button").html("log<sub>2</sub>"), $("#sin-button").html("sin<sup>-1</sup>"), $("#cos-button").html("cos<sup>-1</sup>"), $("#tan-button").html("tan<sup>-1</sup>"), $("#sinh-button").html("sinh<sup>-1</sup>"), $("#cosh-button").html("cosh<sup>-1</sup>"), $("#tanh-button").html("tanh<sup>-1</sup>"))
		}), $("#x-to-the-y-button").click(function () {
			!0 === g && (P(), R()), w("customexp")
		}), $("#e-to-the-x-button").click(function () {
			if (m) !0 === g && (P(), R()), w("reverse-customexp");
			else {
				const t = h.getStoredInput();
				h.setStoredInput(Math.exp(Number(t)).toString()), R()
			}
		}), $("#custom-root-button").click(function () {
			!0 === g && (P(), R()), w("customroot")
		}), $("#log-base-e-button").click(function () {
			if (m) !0 === g && (P(), R()), w("custom-logarithm");
			else {
				const t = h.getStoredInput();
				h.setStoredInput(Math.log(Number(t)).toString()), R()
			}
		}), $("#ee-button").click(function () {
			!0 === g && (P(), R()), w("EE")
		})
	})
}]);