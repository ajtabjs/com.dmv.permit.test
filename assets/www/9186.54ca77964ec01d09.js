"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [9186], {
        9186: (W, m, r) => {
            r.r(m), r.d(m, {
                CategoryPageModule: () => G
            });
            var k = r(2200),
                x = r(9417),
                d = r(691),
                u = r(8132),
                f = r(467),
                _ = r(2615),
                P = r(3396),
                p = r(6901),
                M = r(703),
                F = r(4001),
                t = r(3664),
                v = r(7408);
            const T = (n, c) => c.id;

            function $(n, c) {
                if (1 & n && (t.j41(0, "span"), t.EFF(1), t.nI1(2, "translate"), t.k0s()), 2 & n) {
                    const e = t.XpG().$implicit;
                    t.R7$(), t.Lme("", t.bMT(2, 2, "correct"), " ", e.answer_true, "/")
                }
            }

            function j(n, c) {
                1 & n && (t.j41(0, "span", 19), t.EFF(1), t.nI1(2, "translate"), t.k0s()), 2 & n && (t.R7$(), t.JRh(t.bMT(2, 1, "fail_cate")))
            }

            function b(n, c) {
                1 & n && (t.j41(0, "span", 20), t.EFF(1), t.nI1(2, "translate"), t.k0s()), 2 & n && (t.R7$(), t.JRh(t.bMT(2, 1, "pass")))
            }

            function w(n, c) {
                if (1 & n && (t.j41(0, "div", 17), t.nVh(1, j, 3, 3, "span", 19), t.nVh(2, b, 3, 3, "span", 20), t.k0s()), 2 & n) {
                    const e = t.XpG(2).$implicit;
                    t.R7$(), t.vxM(e.answer_true < e.num_score ? 1 : -1), t.R7$(), t.vxM(e.answer_true >= e.num_score ? 2 : -1)
                }
            }

            function R(n, c) {
                1 & n && (t.j41(0, "div", 17)(1, "span", 21), t.EFF(2), t.nI1(3, "translate"), t.k0s()()), 2 & n && (t.R7$(2), t.JRh(t.bMT(3, 1, "continue")))
            }

            function I(n, c) {
                1 & n && (t.j41(0, "div", 17), t.EFF(1), t.nI1(2, "translate"), t.k0s()), 2 & n && (t.R7$(), t.SpI(" ", t.bMT(2, 1, "start"), " "))
            }

            function S(n, c) {
                if (1 & n && (t.j41(0, "div", 14)(1, "div", 16), t.nVh(2, w, 3, 2, "div", 17), t.nVh(3, R, 4, 3, "div", 17), t.nVh(4, I, 3, 3, "div", 17), t.k0s(), t.nrm(5, "ion-icon", 18), t.k0s()), 2 & n) {
                    const e = t.XpG().$implicit;
                    t.R7$(2), t.vxM(2 == e.check ? 2 : -1), t.R7$(), t.vxM(1 == e.check ? 3 : -1), t.R7$(), t.vxM(0 == e.check ? 4 : -1)
                }
            }

            function O(n, c) {
                1 & n && (t.j41(0, "div", 15)(1, "div", 22), t.nrm(2, "ion-icon", 23), t.k0s()())
            }

            function V(n, c) {
                if (1 & n) {
                    const e = t.RV6();
                    t.j41(0, "div", 10), t.bIt("click", function () {
                        const i = _.eBV(e),
                            s = i.$implicit,
                            h = i.$index,
                            g = t.XpG(2);
                        return _.Njj(g.goTest(s, h))
                    }), t.j41(1, "div", 11)(2, "div", 12), t.EFF(3), t.k0s(), t.j41(4, "div", 13), t.nVh(5, $, 3, 4, "span"), t.j41(6, "span"), t.EFF(7), t.nI1(8, "translate"), t.nI1(9, "translate"), t.k0s()()(), t.nVh(10, S, 6, 3, "div", 14)(11, O, 3, 0, "div", 15), t.k0s()
                }
                if (2 & n) {
                    const e = c.$implicit,
                        o = c.$index,
                        i = t.XpG(2);
                    t.R7$(3), t.SpI(" ", e.name, " "), t.R7$(2), t.vxM(e.answer_true > 0 ? 5 : -1), t.R7$(2), t.LHq("", e.num_question, " ", t.bMT(8, 7, "questions"), " \u2022 ", e.num_grade, " ", t.bMT(9, 9, "mistakes_allowed")), t.R7$(3), t.vxM(i.checkPremium || !i.checkPremium && o <= i.numberPremium ? 10 : 11)
                }
            }

            function X(n, c) {
                if (1 & n && (t.j41(0, "div", 7), t.Z7z(1, V, 12, 11, "div", 9, T), t.k0s()), 2 & n) {
                    const e = t.XpG();
                    t.R7$(), t.Dyx(e.datas)
                }
            }

            function D(n, c) {
                1 & n && (t.j41(0, "div", 8)(1, "div", 24), t.nrm(2, "ion-spinner", 25), t.EFF(3), t.nI1(4, "translate"), t.k0s()()), 2 & n && (t.R7$(3), t.SpI(" ", t.bMT(4, 1, "loading"), "... "))
            }
            const Q = [{
                path: "",
                component: (() => {
                    class n {
                        constructor() {
                            this.alertCtrl = (0, _.WQX)(d.hG), this.route = (0, _.WQX)(p.nX), this.router = (0, _.WQX)(p.Ix), this.dataServ = (0, _.WQX)(P.R), this.storeServ = (0, _.WQX)(M._), this.modalController = (0, _.WQX)(d.W3), this.title = this.route.snapshot.paramMap.get("title"), this.stateName = this.route.snapshot.paramMap.get("state"), this.datas = [], this.loadDone = !1, this.id = 0, this.checkPremium = this.storeServ.getCheckPremium(), this.numberPremium = 4
                        }
                        ngOnInit() {}
                        ionViewDidEnter() {
                            this.id > 0 ? this.dataServ.countItem(this.id).then(e => {
                                let o = 0,
                                    i = 0,
                                    s = 0,
                                    h = 0;
                                const g = e.length;
                                if (g > 0) {
                                    for (let a = 0; a < g; a++) 1 == e[a].answer_true ? o++ : 2 == e[a].answer_true ? i++ : 3 == e[a].answer_true && s++, e[a].answer_test > 0 && (h = 1);
                                    for (let a = 0; a < this.datas.length; a++)
                                        if (this.datas[a].id == e[0].state_test_id) {
                                            this.datas[a].answer_true = o, this.datas[a].answer_false = i, this.datas[a].check = h, (o > 0 || i > 0 || s > 0) && (this.datas[a].check = 2);
                                            break
                                        }
                                } else
                                    for (let a = 0; a < this.datas.length; a++)
                                        if (this.datas[a].id == this.id) {
                                            this.datas[a].answer_true = 0, this.datas[a].answer_false = 0, this.datas[a].check = 0;
                                            break
                                        }
                            }) : this.loadStartData()
                        }
                        goTest(e, o) {
                            var i = this;
                            return (0, f.A)(function* () {
                                if (i.checkPremium || !i.checkPremium && o <= i.numberPremium) i.id = e.id, yield i.router.navigate(["test", {
                                    id: e.id,
                                    name: e.name,
                                    num_question: e.num_question,
                                    num_score: e.num_score,
                                    num_grade: e.num_grade,
                                    check: e.check,
                                    state: i.stateName
                                }]);
                                else if (typeof i.storeServ.getProducts() < "u") {
                                    const s = yield i.modalController.create({
                                        component: F.o
                                    });
                                    yield s.present();
                                    const {
                                        data: h
                                    } = yield s.onDidDismiss();
                                    h && h.isPremium && (i.checkPremium = !0)
                                } else yield i.storeServ.toastMessage("This product has not yet been approved for purchase. Please try again")
                            })()
                        }
                        loadList(e) {
                            const o = e.length;
                            for (let i = 0; i < o; i++) e[i].answer_true = 0, e[i].answer_false = 0, e[i].check = 0, this.dataServ.countItem(e[i].id).then(s => {
                                let h = 0,
                                    g = 0,
                                    a = 0,
                                    y = 0;
                                const C = s.length;
                                if (C > 0) {
                                    for (let l = 0; l < C; l++) 1 == s[l].answer_true ? h++ : 2 == s[l].answer_true ? g++ : 3 == s[l].answer_true && a++, s[l].answer_test > 0 && (y = 1);
                                    for (let l = 0; l < o; l++)
                                        if (e[l].id == s[0].state_test_id) {
                                            e[l].answer_true = h, e[l].answer_false = g, e[l].check = y, (h > 0 || g > 0 || a > 0) && (e[l].check = 2);
                                            break
                                        }
                                }
                            })
                        }
                        resetQuestion() {
                            var e = this;
                            return (0, f.A)(function* () {
                                yield(yield e.alertCtrl.create({
                                    header: "Reset All The Questions",
                                    message: 'Do you want to reset all the questions you have learned? If you choose "OK" all the questions you have learned will be reset and you will have to learn from the beginning.',
                                    buttons: [{
                                        text: "Cancel",
                                        role: "cancel",
                                        handler: () => {}
                                    }, {
                                        text: "Ok",
                                        handler: () => {
                                            const i = e.datas.length;
                                            for (let s = 0; s < i; s++) e.datas[s].answer_true = 0, e.datas[s].answer_false = 0, e.datas[s].check = 0;
                                            e.dataServ.resetAllTestQuestion()
                                        }
                                    }]
                                })).present()
                            })()
                        }
                        loadStartData() {
                            this.dataServ.getQuestionType().then(e => {
                                this.loadList(e), this.datas = e, setTimeout(() => {
                                    this.loadDone = !0
                                }, 100)
                            })
                        }
                        static# t = this.\u0275fac = function (o) {
                            return new(o || n)
                        };
                        static# e = this.\u0275cmp = t.VBU({
                            type: n,
                            selectors: [
                                ["app-category"]
                            ],
                            standalone: !1,
                            decls: 12,
                            vars: 3,
                            consts: [
                                [1, "mi-header-background-color"],
                                ["slot", "start"],
                                [1, "mi-back-button"],
                                ["slot", "end", 1, "mi-header-button"],
                                [1, "mi-header-button-item", 3, "click"],
                                ["name", "refresh"],
                                [1, "main-content"],
                                [1, "category-content"],
                                ["slot", "fixed", 1, "loading-view"],
                                [1, "category-item"],
                                [1, "category-item", 3, "click"],
                                [1, "category-item-content"],
                                [1, "category-item-title"],
                                [1, "category-item-description"],
                                [1, "category-item-status"],
                                [1, "lock-item-status"],
                                [1, "category-status-content"],
                                [1, "category-status-text"],
                                ["name", "chevron-forward"],
                                [1, "category-false"],
                                [1, "category-true"],
                                [1, "category-continue"],
                                [1, "lock-border"],
                                ["name", "lock-closed"],
                                [1, "spinner-loading"],
                                ["name", "bubbles"]
                            ],
                            template: function (o, i) {
                                1 & o && (t.j41(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1), t.nrm(3, "ion-back-button", 2), t.k0s(), t.j41(4, "ion-title"), t.EFF(5), t.k0s(), t.j41(6, "ion-buttons", 3)(7, "div", 4), t.bIt("click", function () {
                                    return i.resetQuestion()
                                }), t.nrm(8, "ion-icon", 5), t.k0s()()()(), t.j41(9, "ion-content", 6), t.nVh(10, X, 3, 0, "div", 7), t.nVh(11, D, 5, 3, "div", 8), t.k0s()), 2 & o && (t.R7$(5), t.SpI(" ", i.title, " "), t.R7$(5), t.vxM(i.datas.length > 0 ? 10 : -1), t.R7$(), t.vxM(i.loadDone ? -1 : 11))
                            },
                            dependencies: [d.QW, d.W9, d.eU, d.iq, d.w2, d.BC, d.ai, d.el, v.D9],
                            styles: [".category-item-description[_ngcontent-%COMP%]{font-size:13px;color:var(--mi-des-color);padding-top:2px}.category-item[_ngcontent-%COMP%]{padding:10px;display:flex;justify-content:flex-start;align-items:center;background-color:#fff;position:relative;box-shadow:0 0 0 1px #dddfe2;border-radius:4px;margin:10px 8px}.category-item-content[_ngcontent-%COMP%]{width:100%;padding-right:8px}.category-item-status[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:14px;font-weight:700}.category-item-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-left:4px;color:var(--mi-des-color);font-size:23px}.category-status-text[_ngcontent-%COMP%]{color:var(--mi-title-color)}.category-false[_ngcontent-%COMP%]{color:var(--mi-fail-color)}.category-true[_ngcontent-%COMP%]{color:var(--mi-success-color)}.category-continue[_ngcontent-%COMP%]{color:var(--mi-warning-color)}.category-start[_ngcontent-%COMP%]{color:var(--mi-des-color)}"]
                        })
                    }
                    return n
                })()
            }];
            let E = (() => {
                    class n {
                        static# t = this.\u0275fac = function (o) {
                            return new(o || n)
                        };
                        static# e = this.\u0275mod = t.$C({
                            type: n
                        });
                        static# n = this.\u0275inj = _.G2t({
                            imports: [u.iI.forChild(Q), u.iI]
                        })
                    }
                    return n
                })(),
                G = (() => {
                    class n {
                        static# t = this.\u0275fac = function (o) {
                            return new(o || n)
                        };
                        static# e = this.\u0275mod = t.$C({
                            type: n
                        });
                        static# n = this.\u0275inj = _.G2t({
                            imports: [k.MD, x.YN, d.bv, E, v.h]
                        })
                    }
                    return n
                })()
        }
    }
]);