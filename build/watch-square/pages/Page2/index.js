let $style$1020814314 = {
  "@info": {
    "styleObjectId": 1020814314
  }
};
const $app_style$1020814314 = $style$1020814314;
const SYNODIC_MONTH = 29.530588853;
const KNOWN_NEW_MOON_UTC = Date.UTC(2e3, 0, 6, 18, 14, 0);
const PHASES = [{
  key: "new",
  name: "新月",
  short: "新月"
}, {
  key: "waxing-crescent",
  name: "峨眉月",
  short: "峨眉"
}, {
  key: "first-quarter",
  name: "上弦月",
  short: "上弦"
}, {
  key: "waxing-gibbous",
  name: "盈凸月",
  short: "盈月"
}, {
  key: "full",
  name: "满月",
  short: "满月"
}, {
  key: "waning-gibbous",
  name: "亏凸月",
  short: "亏月"
}, {
  key: "last-quarter",
  name: "下弦月",
  short: "下弦"
}, {
  key: "waning-crescent",
  name: "残月",
  short: "残月"
}];
function round(value, digits) {
  const unit = Math.pow(10, digits);
  return Math.round(value * unit) / unit;
}
function getMoonAge(date) {
  const utcTime = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  const days = (utcTime - KNOWN_NEW_MOON_UTC) / 864e5;
  return (days % SYNODIC_MONTH + SYNODIC_MONTH) % SYNODIC_MONTH;
}
function getIllumination(age) {
  return (1 - Math.cos(2 * Math.PI * age / SYNODIC_MONTH)) / 2;
}
function getPhaseInfo(age) {
  if (age < 1.84566) return {
    key: "new",
    name: "新月",
    desc: "夜空最暗，月相从这里重新开始。",
    index: 0
  };
  if (age < 5.53699) return {
    key: "waxing-crescent",
    name: "峨眉月",
    desc: "右侧开始发亮，像一弯细银钩。",
    index: 1
  };
  if (age < 9.22831) return {
    key: "first-quarter",
    name: "上弦月",
    desc: "月面接近一半，轮廓很利落。",
    index: 2
  };
  if (age < 12.91963) return {
    key: "waxing-gibbous",
    name: "盈凸月",
    desc: "离满月很近，夜色会亮很多。",
    index: 3
  };
  if (age < 16.61096) return {
    key: "full",
    name: "满月",
    desc: "整轮月面最圆最亮，存在感最强。",
    index: 4
  };
  if (age < 20.30228) return {
    key: "waning-gibbous",
    name: "亏凸月",
    desc: "满月开始消退，亮面慢慢向左收缩。",
    index: 5
  };
  if (age < 23.99361) return {
    key: "last-quarter",
    name: "下弦月",
    desc: "再次回到半月，但亮面已经转到左边。",
    index: 6
  };
  if (age < 27.68493) return {
    key: "waning-crescent",
    name: "残月",
    desc: "只剩最后一弯月牙，天亮前尤其动人。",
    index: 7
  };
  return {
    key: "new",
    name: "新月",
    desc: "月相即将回到起点，新的循环又要开始了。",
    index: 0
  };
}
function buildSteps(activeIndex) {
  const list = [];
  let i = 0;
  for (i = 0; i < PHASES.length; i++) {
    list.push({
      name: PHASES[i].name,
      short: PHASES[i].short,
      dotClass: i === activeIndex ? "phase-dot phase-dot-active" : "phase-dot",
      nameClass: i === activeIndex ? "phase-step-name phase-step-name-active" : "phase-step-name"
    });
  }
  return list;
}
const $app_script$1020814314 = {
  data: function dataFun() {
    return {
      todayText: "",
      phaseName: "",
      phaseDesc: "",
      moonAgeText: "",
      illuminationText: "",
      cycleText: "",
      phaseKey: "",
      phaseSteps: []
    };
  },
  onInit() {
    this.updateMoonData();
  },
  updateMoonData() {
    const now = /* @__PURE__ */ new Date();
    const age = getMoonAge(now);
    const illumination = getIllumination(age);
    const info = getPhaseInfo(age);
    this.todayText = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    this.phaseName = info.name;
    this.phaseDesc = info.desc;
    this.moonAgeText = "月龄 " + round(age, 1) + " 天";
    this.illuminationText = "照明率 " + round(illumination * 100, 1) + "%";
    this.cycleText = "本轮月相进度 " + round(age / SYNODIC_MONTH * 100, 1) + "%";
    this.phaseKey = info.key;
    this.phaseSteps = buildSteps(info.index);
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1020814314.default || $app_script$1020814314;
  $app_module$.exports.style = $app_style$1020814314;
});
$app_bootstrap$("@app-component/index");
