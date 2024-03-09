(function() {
    "use strict";
    var t = {
            3979: function(t, e, i) {
                var n = i(144),
                    s = function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("div", [i("div", {
                            attrs: {
                                id: "header"
                            }
                        }, [i("h1", [t._v("Aviation Checklist Creator")]), t._m(0), i("div", {
                            attrs: {
                                id: "editor"
                            }
                        }, [0 === t.checklistSets.length ? i("div", [i("p", [t._v(" Want a demo? Use "), i("strong", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(e) {
                                    return t.loadCSVFromWebURL("/assets/checklists/n934gr.md")
                                }
                            }
                        }, [t._v("my checklist")])]), t._v(", make changes, and watch them update. ")])]) : t._e(), i("textarea", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.user_raw_data,
                                expression: "user_raw_data"
                            }],
                            staticStyle: {
                                "overflow-y": "scroll"
                            },
                            attrs: {
                                rows: "16",
                                cols: "62"
                            },
                            domProps: {
                                value: t.user_raw_data
                            },
                            on: {
                                input: function(e) {
                                    e.target.composing || (t.user_raw_data = e.target.value)
                                }
                            }
                        })]), i("div", {
                            attrs: {
                                id: "right-pane"
                            }
                        }, [i("div", {
                            staticClass: "file_container",
                            on: {
                                drop: function(e) {
                                    return e.preventDefault(), t.importFile(e)
                                },
                                dragover: function(t) {
                                    t.preventDefault()
                                }
                            }
                        }, [i("p", [t._v("Have your own file? Drag it here to import it.")])]), t.checklistSets.length > 0 ? i("div", [t._m(1), i("ul", [i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: t.onDownloadMarkdown
                            }
                        }, [t._v("Original")]), t._v(" (for re-importing later) ")]), i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: t.onDownloadCSV
                            }
                        }, [t._v("CSV")])]), i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: t.onDownloadDynon
                            }
                        }, [t._v("Dynon")])]), i("li", [i("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: t.onDownloadFlightDeckEFB
                            }
                        }, [t._v("FlightDeck EFB")])]), i("li", [t._v("Use print dialog to save to PDF (3 sections per page).")]), i("li", [t._v(" Want another format? Let me know at robby@freerobby.com. ")])])]) : t._e()])]), t._l(t.checklistSets, (function(e, n) {
                            return i("checklist-set", {
                                key: e.id,
                                attrs: {
                                    title: e.title,
                                    checklists: e.checklists,
                                    generated: 0 === n ? "Printed " + t.formatted_date() : ""
                                }
                            })
                        }))], 2)
                    },
                    r = [function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("div", {
                            staticClass: "instructions"
                        }, [i("ol", [i("li", [t._v(" Write your checklist in the following format: "), i("pre", [t._v("# Name of Section\n\n## Name of Checklist 1\n\n* Item 1: Action to Perform\n* Item 2: Action to Perform\n\n## Name of Checklist 2\n\n* Item 1: Action to Perform\n* Item 2: Action to Perform\n            ")])]), i("li", [t._v("This tool will render your checklist to CSV, Dynon, and PDF.")])])])
                    }, function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("p", [i("strong", [t._v("Download")])])
                    }],
                    o = (i(560), function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("div", {
                            staticClass: "checklist-set"
                        }, [i("h1", {
                            class: {
                                emergency: "Emergency" === t.title,
                                reference: "Reference" === t.title
                            }
                        }, [t._v(" " + t._s(t.title) + " ")]), t._l(t.checklists, (function(t) {
                            return i("checklist", {
                                key: t.id,
                                attrs: {
                                    title: t.title,
                                    items: t.items
                                }
                            })
                        })), "" !== t.generated ? i("div", {
                            staticClass: "generated"
                        }, [t._v(t._s(t.generated))]) : t._e()], 2)
                    }),
                    c = [],
                    l = function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("div", {
                            staticClass: "checklist"
                        }, [i("h2", [t._v(" " + t._s(t.title))]), i("ul", t._l(t.items, (function(t) {
                            return i("checklist-item", {
                                key: t.id,
                                attrs: {
                                    item: t
                                }
                            })
                        })), 1)])
                    },
                    a = [],
                    u = function() {
                        var t = this,
                            e = t.$createElement,
                            i = t._self._c || e;
                        return i("li", [i("div", {
                            staticClass: "checklist-item"
                        }, [t._v(" " + t._s(t.item.subject) + " "), i("span", {
                            staticClass: "dots"
                        }), t._v(" " + t._s(t.item.operation) + " ")])])
                    },
                    h = [],
                    d = {
                        name: "ChecklistItem",
                        props: ["item"]
                    },
                    f = d,
                    m = i(1001),
                    p = (0, m.Z)(f, u, h, !1, null, "3cae748f", null),
                    v = p.exports,
                    k = {
                        name: "Checklist",
                        components: {
                            ChecklistItem: v
                        },
                        props: ["title", "items"]
                    },
                    _ = k,
                    g = (0, m.Z)(_, l, a, !1, null, "3deab2ba", null),
                    w = g.exports,
                    b = {
                        name: "ChecklistSet",
                        components: {
                            Checklist: w
                        },
                        props: ["title", "checklists", "generated"]
                    },
                    S = b,
                    C = (0, m.Z)(S, o, c, !1, null, "280382c4", null),
                    y = C.exports,
                    D = i(7460),
                    x = i.n(D),
                    E = {
                        name: "App",
                        components: {
                            ChecklistSet: y
                        },
                        data() {
                            return {
                                checklistSets: [],
                                user_raw_data: ""
                            }
                        },
                        beforeMount() {
                            null !== localStorage.getItem("user_raw_data") && (this.user_raw_data = localStorage.getItem("user_raw_data"))
                        },
                        methods: {
                            formatted_date: function() {
                                var t = new Date;
                                return t.toDateString()
                            },
                            importFile: function(t) {
                                let e = t.dataTransfer.files[0];
                                var i = new FileReader;
                                i.readAsText(e, "UTF-8"),
                                i.onload = t => {
                                    var e = t.target.result;
                                    this.loadCSVFromRaw(e)
                                }
                            },
                            loadCSVFromWebURL: function(t) {
                                var e = this,
                                    i = new XMLHttpRequest;
                                i.open("GET", t),
                                i.send(null),
                                i.onload = function() {
                                    e.loadCSVFromRaw(i.responseText)
                                }
                            },
                            loadCSVFromRaw: function(t) {
                                this.user_raw_data = t
                            },
                            initiatePlaintextDownload: function(t, e) {
                                var i = document.createElement("a");
                                i.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e)),
                                i.setAttribute("download", t),
                                i.style.display = "none",
                                document.body.appendChild(i),
                                i.click(),
                                document.body.removeChild(i)
                            },
                            onDownloadCSV: function() {
                                this.initiatePlaintextDownload("checklist.csv", this.user_raw_data)
                            },
                            onDownloadDynon: function() {
                                for (var t = this.checklistSets, e = [], i = 0, n = 0; n < t.length; n++)
                                    for (var s = 0; s < t[n].checklists.length; s++) {
                                        e.push("CHKLST" + i.toString() + ".TITLE, " + t[n].title + ": " + t[n].checklists[s].title);
                                        for (var r = 0; r < t[n].checklists[s].items.length; r++)
                                            void 0 !== t[n].checklists[s].items[r].operation ? e.push("CHKLST" + i.toString() + ".LINE" + (r + 1).toString() + ", " + t[n].checklists[s].items[r].subject + ": " + t[n].checklists[s].items[r].operation) : e.push("CHKLST" + i.toString() + ".LINE" + (r + 1).toString() + ", " + t[n].checklists[s].items[r].subject);
                                        i++
                                    }
                                this.initiatePlaintextDownload("checklist.txt", e.join("\n"))
                            },
                            onDownloadFlightDeckEFB: function() {
                                for (var t = {
                                        name: "Aviation Checklist Export",
                                        checklistSections: []
                                    }, e = this.checklistSets, i = 0; i < e.length; i++)
                                    for (var n = 0; n < e[i].checklists.length; n++) {
                                        var s = {};
                                        s["name"] = e[i].title + ": " + e[i].checklists[n].title,
                                        s["isAbnormalProcedure"] = "Reference" === e[i].title,
                                        s["isEmergencyProcedure"] = "Emergency" === e[i].title,
                                        s["checklistItems"] = [];
                                        for (var r = 0; r < e[i].checklists[n].items.length; r++)
                                            s["checklistItems"].push({
                                                name: e[i].checklists[n].items[r].subject + " - " + e[i].checklists[n].items[r].operation,
                                                completed: !1
                                            });
                                        t["checklistSections"].push(s)
                                    }
                                this.initiatePlaintextDownload("checklist.fdcl", JSON.stringify(t))
                            },
                            onDownloadMarkdown: function() {
                                for (var t = this.checklistSets, e = [], i = 0; i < t.length; i++) {
                                    e.push("# " + t[i].title),
                                    e.push("");
                                    for (var n = 0; n < t[i].checklists.length; n++) {
                                        e.push("## " + t[i].checklists[n].title),
                                        e.push("");
                                        for (var s = 0; s < t[i].checklists[n].items.length; s++)
                                            void 0 !== t[i].checklists[n].items[s].operation ? e.push("* " + t[i].checklists[n].items[s].subject + ": " + t[i].checklists[n].items[s].operation) : e.push("* " + t[i].checklists[n].items[s].subject);
                                        e.push("")
                                    }
                                }
                                this.initiatePlaintextDownload("checklist.md", e.join("\n"))
                            },
                            handle_update_csv: function(t) {
                                var e = t.data,
                                    i = [],
                                    n = null,
                                    s = null;
                                for (let r = 0; r < e.length; r++)
                                    e[r].length < 2 && "" === e[r][0] || (e[r][0] !== n && (i.push({
                                        title: e[r][0],
                                        checklists: []
                                    }), n = e[r][0], s = null), e[r][1] !== s && (i.slice(-1)[0]["checklists"].push({
                                        title: e[r][1],
                                        items: []
                                    }), s = e[r][1]), i.slice(-1)[0]["checklists"].slice(-1)[0].items.push({
                                        subject: e[r][2],
                                        operation: e[r][3]
                                    }));
                                this.checklistSets = i
                            },
                            parse: function(t) {
                                "#" === t.substring(0, 1) ? this.parse_md(t) : this.parse_csv(t)
                            },
                            parse_csv: function(t) {
                                var e = this;
                                x().parse(t, {
                                    complete: function(t) {
                                        e.handle_update_csv(t)
                                    }
                                })
                            },
                            parse_md: function(t) {
                                var e = t.split("\n"),
                                    i = [];
                                while (e.length > 0) {
                                    var n = e.shift();
                                    if ("# " === n.substring(0, 2))
                                        i.push({
                                            title: n.substring(2),
                                            checklists: []
                                        });
                                    else if ("## " === n.substring(0, 3))
                                        i.slice(-1)[0]["checklists"].push({
                                            title: n.substring(3),
                                            items: []
                                        });
                                    else if ("* " === n.substring(0, 2)) {
                                        var s = n.indexOf(": ");
                                        s >= 0 ? i.slice(-1)[0]["checklists"].slice(-1)[0].items.push({
                                            subject: n.substring(2, s),
                                            operation: n.substring(s + 2)
                                        }) : i.slice(-1)[0]["checklists"].slice(-1)[0].items.push({
                                            subject: n.substring(2)
                                        })
                                    }
                                }
                                this.checklistSets = i
                            }
                        },
                        watch: {
                            user_raw_data: function(t) {
                                "" !== t && localStorage.setItem("user_raw_data", t),
                                this.parse(t)
                            }
                        }
                    },
                    F = E,
                    j = (0, m.Z)(F, s, r, !1, null, null, null),
                    P = j.exports;
                n.Z.config.productionTip = !1,
                new n.Z({
                    render: t => t(P)
                }).$mount("#app")
            }
        },
        e = {};
    function i(n) {
        var s = e[n];
        if (void 0 !== s)
            return s.exports;
        var r = e[n] = {
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.exports
    }
    i.m = t,
    function() {
        var t = [];
        i.O = function(e, n, s, r) {
            if (!n) {
                var o = 1 / 0;
                for (u = 0; u < t.length; u++) {
                    n = t[u][0],
                    s = t[u][1],
                    r = t[u][2];
                    for (var c = !0, l = 0; l < n.length; l++)
                        (!1 & r || o >= r) && Object.keys(i.O).every((function(t) {
                            return i.O[t](n[l])
                        })) ? n.splice(l--, 1) : (c = !1, r < o && (o = r));
                    if (c) {
                        t.splice(u--, 1);
                        var a = s();
                        void 0 !== a && (e = a)
                    }
                }
                return e
            }
            r = r || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > r; u--)
                t[u] = t[u - 1];
            t[u] = [n, s, r]
        }
    }(),
    function() {
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return i.d(e, {
                a: e
            }), e
        }
    }(),
    function() {
        i.d = function(t, e) {
            for (var n in e)
                i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }
    }(),
    function() {
        i.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(),
    function() {
        var t = {
            143: 0
        };
        i.O.j = function(e) {
            return 0 === t[e]
        };
        var e = function(e, n) {
                var s,
                    r,
                    o = n[0],
                    c = n[1],
                    l = n[2],
                    a = 0;
                if (o.some((function(e) {
                    return 0 !== t[e]
                }))) {
                    for (s in c)
                        i.o(c, s) && (i.m[s] = c[s]);
                    if (l)
                        var u = l(i)
                }
                for (e && e(n); a < o.length; a++)
                    r = o[a],
                    i.o(t, r) && t[r] && t[r][0](),
                    t[r] = 0;
                return i.O(u)
            },
            n = self["webpackChunkaviation_checklist"] = self["webpackChunkaviation_checklist"] || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }();
    var n = i.O(void 0, [998], (function() {
        return i(3979)
    }));
    n = i.O(n)
})();
//# sourceMappingURL=app.c2f5452c.js.map
