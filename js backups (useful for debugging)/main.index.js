window.__require = function t(e, o, n) {
function i(s, r) {
if (!o[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!r && p) return p(a, !0);
if (c) return c(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var _ = o[s] = {
exports: {}
};
e[s][0].call(_.exports, function(t) {
return i(e[s][1][t] || t);
}, _, _.exports, t, e, o, n);
}
return o[s].exports;
}
for (var c = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
Side_msg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3970eHJyA9D5oTTYduxDS7X", "Side_msg");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./game_ttk"), r = cc._decorator, a = r.ccclass, p = r.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.texts = [];
e.Da_put = [];
e.SideState = !1;
e.hide_pos = null;
e.show_pos = cc.Vec2.ZERO;
return e;
}
e.prototype.start = function() {
this.hide_pos = new cc.Vec2(this.node.getPosition().x, this.node.getPosition().y);
this.show_pos.x = cc.Canvas.instance.node.width / 2 - this.node.width;
this.show_pos.y = this.node.getPosition().y;
};
e.prototype.changeState = function() {
s.Game_c.instance.ttk_c.playAU_effect(0);
this.SideState = !this.SideState;
this.UpdateDisplay();
};
e.prototype.UpdateDisplay = function() {
var t, e = this;
if (this.SideState) {
t = cc.v2(this.show_pos);
s.Game_c.instance.ttk_c.player_skills.forEach(function(t, o) {
e.texts[o].string = t.toString();
0 == o ? e.Da_put[o].string = "x10" : o < 5 ? e.Da_put[o].string = "x20+" + 5 * o : o < 8 ? e.Da_put[o].string = "x" + (o - 2) + "0+" + 5 * o : 8 == o ? e.Da_put[o].string = "x100+50" : 9 == o && (e.Da_put[o].string = "x200+100");
});
} else t = cc.v2(this.hide_pos);
console.log(t);
cc.tween(this.node).to(.5, {
position: new cc.Vec3(t.x, t.y)
}).start();
};
c([ p([ cc.Label ]) ], e.prototype, "texts", void 0);
c([ p([ cc.Label ]) ], e.prototype, "Da_put", void 0);
return c([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./game_ttk": "game_ttk"
} ],
ausc: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7cd90TRkNJKHoJK4kadfVY6", "ausc");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.au1 = null;
e.au2 = null;
return e;
}
e.prototype.start = function() {};
c([ a(cc.AudioClip) ], e.prototype, "au1", void 0);
c([ a(cc.AudioClip) ], e.prototype, "au2", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
card_s: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cea4dpFeqtHALVAumWJSVJK", "card_s");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./game_ttk"), r = cc._decorator, a = r.ccclass, p = r.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.num_node = null;
e.choose_node = null;
e.fssss = [];
e._cid = 0;
e._num = 0;
e._choose_state = !1;
return e;
}
Object.defineProperty(e.prototype, "cid", {
get: function() {
return this._cid;
},
set: function(t) {
var e = t > 25 ? cc.Color.BLACK : new cc.Color(224, 31, 6);
this.num_node.node.color = e;
var o = t % 13 + 1;
if (1 == o) {
this.num = 11;
this.num_node.string = "A";
} else if (o > 10) {
this.num = 10;
switch (o) {
case 11:
this.num_node.string = "J";
break;

case 12:
this.num_node.string = "Q";
break;

case 13:
this.num_node.string = "K";
}
} else {
this.num = o;
this.num_node.string = o.toString();
}
var n = Math.floor(t / 13);
this.node.getComponent(cc.Sprite).spriteFrame = this.fssss[n];
this.node.getComponent(cc.Sprite).spriteFrame;
this._cid = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "num", {
get: function() {
return this._num;
},
set: function(t) {
this._num = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "choose_state", {
get: function() {
return this._choose_state;
},
set: function(t) {
this.choose_node.active = t;
this._choose_state = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.click = function() {
s.Game_c.instance.ttk_c.playAU_effect(0);
this.choose_state ? this.node.setPosition(new cc.Vec2(this.node.position.x, this.node.position.y - 50)) : this.node.setPosition(new cc.Vec2(this.node.position.x, this.node.position.y + 50));
this.choose_state = !this._choose_state;
this.node.getParent().getComponent("hand_msg").choosed_node = this.node;
};
e.prototype.start = function() {
this.cid = Math.floor(52 * Math.random());
};
c([ p(cc.Label) ], e.prototype, "num_node", void 0);
c([ p(cc.Node) ], e.prototype, "choose_node", void 0);
c([ p([ cc.SpriteFrame ]) ], e.prototype, "fssss", void 0);
return c([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./game_ttk": "game_ttk"
} ],
game_ttk: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9251eKohNFUoJdDL7/JbZL", "game_ttk");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Game_c = void 0;
var s = t("./hand_msg"), r = t("./hp_display"), a = t("./icons_msg"), p = t("./win_msg"), _ = cc._decorator, l = _.ccclass, u = _.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.playerhp_comp = null;
e.monsterhp_comp = null;
e.hand_comp = null;
e.win_node = null;
e.win_s = [];
e.card_icons = [];
e.monster_nowner = null;
e.mons_pics = [];
e.iconmsg = null;
e.defeat = null;
e.au1 = [];
e.nowLevel = 1;
e.monster_hp = e.nowLevel * e.nowLevel * 30;
e.plyer_hp = 100;
e.player_skills = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
e.action_sign = !1;
e.action_list = [];
e.action_data = [];
e.effect_au_sign = !0;
return e;
}
e.prototype.level_init = function(t) {
this.nowLevel = t;
this.monster_nowner.spriteFrame = this.mons_pics[(t - 1) % 7];
this.monster_hp = 40 * this.nowLevel + 20;
this.plyer_hp = 90 + 10 * this.nowLevel;
this.init_hp();
this.init_hand_card(6);
};
e.prototype.init_hp = function() {
this.playerhp_comp.maxhp = this.plyer_hp;
this.playerhp_comp.hp = this.plyer_hp;
this.monsterhp_comp.maxhp = this.monster_hp;
this.monsterhp_comp.hp = this.monster_hp;
this.monsterhp_comp.nns_node.active = !1;
this.monsterhp_comp.nns = 0;
};
e.prototype.init_hand_card = function(t) {
this.hand_comp.init_usedmessage();
for (var e = 0; e < t; e++) this.hand_comp.node.addChild(cc.instantiate(this.hand_comp.c_mod));
};
e.prototype.ttk_action = function(t, e, o) {
var n = this;
void 0 === o && (o = 0);
var i, c = cc.tween(this.monster_nowner.node).to(.1, {
scale: 1.5
}, {
easing: "bounceInOut"
}).to(.1, {
scale: 2
}, {
easing: "bounceInOut"
}).call((i = this, function() {
var e = i.action_data[0];
i.action_data.shift();
console.log("_val ", e);
if (t) {
i.monsterhp_comp.hp -= e;
i.monsterhp_comp.hp <= 0 && i.action_list.length < 2 && i.Level_end(!0);
} else {
i.playerhp_comp.hp -= e;
i.playerhp_comp.hp <= 0 && i.monsterhp_comp.hp > 0 && i.Level_end(!1);
}
if (i.action_list.length > 0) {
i.playAU_effect(1);
i.action_list[0].start();
i.action_list.shift();
} else i.action_sign = !1;
}));
if (this.action_sign) {
this.action_list.push(c);
this.action_data.push(e);
} else {
this.playAU_effect(1);
cc.tween(this.monster_nowner.node).to(.1, {
scale: 1.5
}, {
easing: "bounceInOut"
}).to(.1, {
scale: 2
}, {
easing: "bounceInOut"
}).call(function() {
if (t) {
n.monsterhp_comp.hp -= e;
n.monsterhp_comp.hp <= 0 && n.action_list.length < 2 && n.Level_end(!0);
} else {
n.playerhp_comp.hp -= e;
if (n.playerhp_comp.hp <= 0) {
n.Level_end(!1);
return;
}
}
if (n.action_list.length > 0 && n.monsterhp_comp.hp > 0) {
n.playAU_effect(1);
n.action_list[0].start();
n.action_list.shift();
} else n.action_sign = !1;
}).start();
this.action_sign = !0;
}
if (t && this.monsterhp_comp.hp - e <= 0) return !0;
};
e.prototype.Level_end = function(t) {
if (t) {
for (var e = 0; e < this.win_s.length; e++) this.init_win(this.win_s[e], Math.floor(10 * Math.random()), Math.floor(3 * Math.random()) + 1);
f.instance.ttk_c.playAU_effect(2);
this.win_node.active = !0;
} else this.defeat.active = !0;
};
e.prototype.back_main = function() {
for (var t = cc.sys.localStorage.getItem("userData"), e = null == t ? {
data: []
} : JSON.parse(t), o = f.instance.ttk_c.nowLevel - 1, n = 0; n < 10; n++) {
var i = e.data[n];
if (null == i || o > i) {
e.data.splice(n, 0, o);
break;
}
}
cc.sys.localStorage.setItem("userData", JSON.stringify(e));
cc.director.loadScene("s_sence");
};
e.prototype.init_win = function(t, e, o) {
t.icon_type = e;
t.icon.spriteFrame = this.card_icons[e];
t.up_num = o;
};
e.prototype.level_up_button = function(t) {
f.instance.ttk_c.playAU_effect(0);
this.hand_comp.clear_use_card();
var e = t.target.parent.getComponent("win_msg");
this.player_skills[e.icon_type] += e.up_num;
this.level_init(this.nowLevel + 1);
this.win_node.active = !1;
this.iconmsg.addiconlv(e.icon_type, this.player_skills[e.icon_type]);
};
e.prototype.playAU_effect = function(t) {
this.effect_au_sign && cc.audioEngine.play(this.au1[t], !1, 1);
};
e.prototype.start = function() {
f.instance.ttk_c = this;
this.level_init(1);
this.player_skills = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
};
c([ u(r.default) ], e.prototype, "playerhp_comp", void 0);
c([ u(r.default) ], e.prototype, "monsterhp_comp", void 0);
c([ u(s.default) ], e.prototype, "hand_comp", void 0);
c([ u(cc.Node) ], e.prototype, "win_node", void 0);
c([ u([ p.default ]) ], e.prototype, "win_s", void 0);
c([ u([ cc.SpriteFrame ]) ], e.prototype, "card_icons", void 0);
c([ u(cc.Sprite) ], e.prototype, "monster_nowner", void 0);
c([ u([ cc.SpriteFrame ]) ], e.prototype, "mons_pics", void 0);
c([ u(a.default) ], e.prototype, "iconmsg", void 0);
c([ u(cc.Node) ], e.prototype, "defeat", void 0);
c([ u([ cc.AudioClip ]) ], e.prototype, "au1", void 0);
return c([ l ], e);
}(cc.Component);
o.default = h;
var f = function() {
function t() {}
t.instance = new t();
return t;
}();
o.Game_c = f;
cc._RF.pop();
}, {
"./hand_msg": "hand_msg",
"./hp_display": "hp_display",
"./icons_msg": "icons_msg",
"./win_msg": "win_msg"
} ],
hand_msg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7ef7d9uHmxMto5sTCL0gdO7", "hand_msg");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./game_ttk"), r = cc._decorator, a = r.ccclass, p = r.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.c_mod = null;
e.usd_node = null;
e.used_text = null;
e._choosed_node = null;
e.usedmessage = {
_pair: 0,
_3kind: 0,
_4kind: 0,
_flush: !1,
_straight: !1,
power_straight: !1
};
e.use_now = 0;
e.usedlist = [];
e.repeat_value = [];
e.flush_value = [];
return e;
}
Object.defineProperty(e.prototype, "choosed_node", {
get: function() {
return this._choosed_node;
},
set: function(t) {
if (null != this._choosed_node) if (this._choosed_node == t) this._choosed_node = null; else {
this._choosed_node.getComponent("card_s").click();
this._choosed_node = t;
} else this._choosed_node = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.init_usedmessage = function() {
this.usedmessage = {
_pair: 0,
_3kind: 0,
_4kind: 0,
_flush: !1,
_straight: !1,
power_straight: !1
};
this.usedlist = [];
this.repeat_value = [];
this.flush_value = [];
this.use_now = 0;
this.used_text.string = 5 - this.use_now + "/5";
};
e.prototype.Deal = function() {
s.Game_c.instance.ttk_c.playAU_effect(0);
if (this._choosed_node) {
var t = this._choosed_node.getComponent("card_s");
this.change_check(t.cid);
this._choosed_node.setParent(this.usd_node);
this._choosed_node.setPosition(0, 0);
this._choosed_node = null;
if (s.Game_c.instance.ttk_c.ttk_action(!0, t.num)) return;
this.node.addChild(cc.instantiate(this.c_mod));
console.log(this.usedmessage);
this.use_now += 1;
this.used_text.string = 5 - this.use_now + "/5";
if (this.use_now >= 5) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 10 * s.Game_c.instance.ttk_c.player_skills[0])) return;
if (this.usedmessage._pair > 0) {
console.log("一对");
if (s.Game_c.instance.ttk_c.ttk_action(!0, 20 * s.Game_c.instance.ttk_c.player_skills[1] + 5)) return;
if (this.usedmessage._pair > 1) {
console.log("两对");
if (s.Game_c.instance.ttk_c.ttk_action(!0, 20 * s.Game_c.instance.ttk_c.player_skills[2] + 10)) return;
}
if (this.usedmessage._3kind > 0) {
console.log("三条");
if (s.Game_c.instance.ttk_c.ttk_action(!0, 20 * s.Game_c.instance.ttk_c.player_skills[3] + 15)) return;
}
if (this.usedmessage._3kind > 0 && this.usedmessage._pair > 1 && this.usedmessage._4kind < 1) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 30 * s.Game_c.instance.ttk_c.player_skills[5] + 25)) return;
console.log("葫芦");
}
if (this.usedmessage._4kind > 0) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 50 * s.Game_c.instance.ttk_c.player_skills[7] + 35)) return;
console.log("四条");
}
}
if (this.usedmessage._straight) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 20 * s.Game_c.instance.ttk_c.player_skills[4] + 20)) return;
console.log("顺子");
}
if (this.usedmessage._flush) {
console.log("同花");
if (s.Game_c.instance.ttk_c.ttk_action(!0, 40 * s.Game_c.instance.ttk_c.player_skills[6] + 30)) return;
if (this.usedmessage._straight) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 100 * s.Game_c.instance.ttk_c.player_skills[8] + 50)) return;
console.log("同花顺子");
if (this.usedmessage.power_straight) {
if (s.Game_c.instance.ttk_c.ttk_action(!0, 200 * s.Game_c.instance.ttk_c.player_skills[9] + 100)) return;
console.log("皇家同花顺");
}
}
}
if (s.Game_c.instance.ttk_c.ttk_action(!1, 10 * s.Game_c.instance.ttk_c.nowLevel)) return;
}
}
};
e.prototype.clear_use_card = function() {
this.node.destroyAllChildren();
this.usd_node.destroyAllChildren();
};
e.prototype.change_check = function(t) {
this.check_pair(t);
this.check_flush(t);
this.check_straight(t);
};
e.prototype.d_check_pair = function() {
var t = [];
this.usedlist.forEach(function(e) {
t[e.sign_sum] ? t[e.sign_sum] += 1 : t[e.sign_sum] = 1;
});
var e = 0;
t.forEach(function(t) {
e += Math.floor(t / 2);
});
return e;
};
e.prototype.check_pair = function(t) {
var e = t % 13 + 1;
if (this.repeat_value[e]) {
this.repeat_value[e] += 1;
if (this.repeat_value[e] % 2 == 0) {
this.usedmessage._pair += 1;
this.repeat_value[e] % 4 == 0 && (this.usedmessage._4kind += 1);
}
this.repeat_value[e] % 3 == 0 && (this.usedmessage._3kind += 1);
} else this.repeat_value[e] = 1;
};
e.prototype.check_flush = function(t, e) {
void 0 === e && (e = 5);
var o = Math.floor(t / 13);
if (this.flush_value[o]) {
this.flush_value[o] += 1;
this.flush_value[o] >= e && (this.usedmessage._flush = !0);
} else this.flush_value[o] = 1;
};
e.prototype.check_straight = function(t, e) {
void 0 === e && (e = 5);
for (var o = t % 13 + 1, n = 0, i = 0, c = 1; c < e; c++) {
s = (s = o + c) > 13 ? s - 13 : s;
if (!this.repeat_value[s]) break;
i += 1;
}
for (c = 1; c < e; c++) {
s = (s = o - c) < 1 ? s + 13 : s;
if (!this.repeat_value[s]) break;
n += 1;
}
n + i + 1 >= e && (this.usedmessage._straight = !0);
if (null != this.repeat_value[12]) {
n = 0;
i = 0;
for (c = 1; c < 3; c++) {
s = (s = 12 + c) > 13 ? s - 13 : s;
if (!this.repeat_value[s]) break;
i += 1;
}
for (c = 1; c < 3; c++) {
var s;
s = (s = o - c) < 1 ? s + 13 : s;
if (!this.repeat_value[s]) break;
n += 1;
}
n + i + 1 >= e && (this.usedmessage.power_straight = !0);
}
};
c([ p(cc.Prefab) ], e.prototype, "c_mod", void 0);
c([ p(cc.Node) ], e.prototype, "usd_node", void 0);
c([ p(cc.Label) ], e.prototype, "used_text", void 0);
return c([ a ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"./game_ttk": "game_ttk"
} ],
hp_display: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "144252XZ1NEqrmJnWycfuUp", "hp_display");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bar = null;
e.hpnumdisplay = null;
e.dadisplay = null;
e.pop_node = null;
e.nnsdisplay = null;
e.nns_node = null;
e._nns = 0;
return e;
}
Object.defineProperty(e.prototype, "maxhp", {
get: function() {
return this._maxhp;
},
set: function(t) {
this._maxhp = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hp", {
get: function() {
return this._hp;
},
set: function(t) {
console.log("====" + t);
this.bar.progress = t / this._maxhp;
this.hpnumdisplay.string = t + "/" + this._maxhp;
if (t < this._hp && null != this.dadisplay) {
this.dadisplay.string = (t - this._hp).toString();
this.nns += t - this._hp;
this.pop_node.opacity = 230;
this.damage_pop();
}
this._hp = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "nns", {
get: function() {
return this._nns;
},
set: function(t) {
var e = .1 * (Math.abs(t).toString().length + 3);
if (0 != t) {
this.nns_node.active || (this.nns_node.active = !0);
this.nns_node.scale = e;
this.nnsdisplay.string = t.toString();
this._nns = t;
} else {
this.nns_node.active = !1;
this._nns = t;
}
},
enumerable: !1,
configurable: !0
});
e.prototype.damage_pop = function() {
cc.tween(this.pop_node).to(1, {
opacity: 0
}, {
easing: "easeInBack"
}).start();
};
c([ a(cc.ProgressBar) ], e.prototype, "bar", void 0);
c([ a(cc.Label) ], e.prototype, "hpnumdisplay", void 0);
c([ a(cc.Label) ], e.prototype, "dadisplay", void 0);
c([ a(cc.Node) ], e.prototype, "pop_node", void 0);
c([ a(cc.Label) ], e.prototype, "nnsdisplay", void 0);
c([ a(cc.Node) ], e.prototype, "nns_node", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
icon_display: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6db32Zz3pBHnLow1JhB6baQ", "icon_display");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.c_num = null;
e.cns = [];
e._icon_type = 1;
e._icon_lv = 1;
return e;
}
Object.defineProperty(e.prototype, "icon_type", {
get: function() {
return this._icon_type;
},
set: function(t) {
this.node.getComponent(cc.Sprite).spriteFrame = this.cns[t];
this._icon_type = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "icon_lv", {
get: function() {
return this._icon_lv;
},
set: function(t) {
this.c_num.node.parent.active || (this.c_num.node.parent.active = !0);
this.c_num.string = t.toString();
this._icon_lv = t;
},
enumerable: !1,
configurable: !0
});
c([ a(cc.Label) ], e.prototype, "c_num", void 0);
c([ a([ cc.SpriteFrame ]) ], e.prototype, "cns", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
icons_msg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0c395cNXnBNUrttYk0jQZna", "icons_msg");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon_mod = null;
e.iconlist = [];
return e;
}
e.prototype.addiconlv = function(t, e) {
void 0 === e && (e = 1);
console.log("addiconlv", t, e);
if (null != this.icon_mod[t] && null != this.icon_mod[t].getComponent("icon_display")) this.icon_mod[t].getComponent("icon_display").icon_lv = e; else {
this.icon_mod[t] = cc.instantiate(this.icon_mod);
this.icon_mod[t].getComponent("icon_display").icon_type = t;
this.node.addChild(this.icon_mod[t]);
e > 1 && (this.icon_mod[t].getComponent("icon_display").icon_lv = e);
}
};
c([ a(cc.Prefab) ], e.prototype, "icon_mod", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
sscript: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7381c8/mNZNhrndT8XBkxpP", "sscript");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = (s.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.jump = function() {
cc.director.loadScene("ttk_s");
};
e.prototype.c = function() {
var t = cc.sys.localStorage.getItem("userData"), e = null == t ? {
data: []
} : JSON.parse(t);
console.log(JSON.stringify(e));
jsb.reflection.callStaticMethod("RankingApi", "setData:", JSON.stringify(e).slice(9, -2));
};
return c([ r ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
win_msg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bdf5bmgneJGi7XzhiY24SaC", "win_msg");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var i, c = arguments.length, s = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, o, s) : i(e, o)) || s);
return c > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lv_text = null;
e.icon = null;
e._icon_type = 0;
e._up_num = 0;
return e;
}
Object.defineProperty(e.prototype, "icon_type", {
get: function() {
return this._icon_type;
},
set: function(t) {
this._icon_type = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "up_num", {
get: function() {
return this._up_num;
},
set: function(t) {
this.lv_text.string = "LV+" + t;
this._up_num = t;
},
enumerable: !1,
configurable: !0
});
c([ a(cc.Label) ], e.prototype, "lv_text", void 0);
c([ a(cc.Sprite) ], e.prototype, "icon", void 0);
return c([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "Side_msg", "ausc", "card_s", "game_ttk", "hand_msg", "hp_display", "icon_display", "icons_msg", "sscript", "win_msg" ]);