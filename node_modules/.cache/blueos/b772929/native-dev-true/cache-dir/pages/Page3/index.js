let $style$1217327819 = {
  "@info": {
    "styleObjectId": 1217327819
  }
};
const $app_style$1217327819 = $style$1217327819;
const SOLAR_TERMS = [{
  name: "小寒",
  month: 1,
  day: 5,
  hint: "寒气未尽，万物蓄力。"
}, {
  name: "大寒",
  month: 1,
  day: 20,
  hint: "一年最冷的时候，空气也最清。"
}, {
  name: "立春",
  month: 2,
  day: 4,
  hint: "春意起笔，四时重新开场。"
}, {
  name: "雨水",
  month: 2,
  day: 19,
  hint: "天泽渐丰，土地开始回转。"
}, {
  name: "惊蛰",
  month: 3,
  day: 5,
  hint: "春雷乍响，沉睡的生机被唤醒。"
}, {
  name: "春分",
  month: 3,
  day: 20,
  hint: "昼夜平分，世界处在温柔的正中。"
}, {
  name: "清明",
  month: 4,
  day: 4,
  hint: "气清景明，适合远望也适合想念。"
}, {
  name: "谷雨",
  month: 4,
  day: 20,
  hint: "雨生百谷，田野开始真正丰盛。"
}, {
  name: "立夏",
  month: 5,
  day: 5,
  hint: "夏天登场，光线和热度一起变强。"
}, {
  name: "小满",
  month: 5,
  day: 21,
  hint: "将满未满，是最有余味的状态。"
}, {
  name: "芒种",
  month: 6,
  day: 5,
  hint: "忙着播种，也忙着迎接盛夏。"
}, {
  name: "夏至",
  month: 6,
  day: 21,
  hint: "白昼最长，阳光到达顶点。"
}, {
  name: "小暑",
  month: 7,
  day: 7,
  hint: "热意渐浓，盛夏刚刚开始发力。"
}, {
  name: "大暑",
  month: 7,
  day: 22,
  hint: "热浪最盛，蝉鸣会把午后拉长。"
}, {
  name: "立秋",
  month: 8,
  day: 7,
  hint: "暑气仍在，但秋天已经悄悄入场。"
}, {
  name: "处暑",
  month: 8,
  day: 23,
  hint: "暑意开始退场，风会先一步变凉。"
}, {
  name: "白露",
  month: 9,
  day: 7,
  hint: "清晨有露，空气里多了锋利的清意。"
}, {
  name: "秋分",
  month: 9,
  day: 23,
  hint: "昼夜再度平衡，秋色最匀称。"
}, {
  name: "寒露",
  month: 10,
  day: 8,
  hint: "露气更寒，清晨已有深秋质感。"
}, {
  name: "霜降",
  month: 10,
  day: 23,
  hint: "霜气将至，天地边缘开始显得锐利。"
}, {
  name: "立冬",
  month: 11,
  day: 7,
  hint: "冬天起笔，万物收敛成更安静的姿态。"
}, {
  name: "小雪",
  month: 11,
  day: 22,
  hint: "雪意初显，冷意比白色更先到来。"
}, {
  name: "大雪",
  month: 12,
  day: 7,
  hint: "冬景渐厚，世界像被悄悄调低了音量。"
}, {
  name: "冬至",
  month: 12,
  day: 21,
  hint: "夜最长，但从这天起白昼又会慢慢赢回来。"
}];
function buildDate(year, month, day) {
  return new Date(year, month - 1, day, 12, 0, 0);
}
function getDayDiff(target, now) {
  return Math.round((target.getTime() - now.getTime()) / 864e5);
}
function buildCards(activeName) {
  const list = [];
  let i = 0;
  for (i = 0; i < SOLAR_TERMS.length; i++) {
    list.push({
      name: SOLAR_TERMS[i].name,
      dateText: SOLAR_TERMS[i].month + "月" + SOLAR_TERMS[i].day + "日",
      hint: SOLAR_TERMS[i].hint,
      cardClass: SOLAR_TERMS[i].name === activeName ? "term-card term-card-active" : "term-card",
      nameClass: SOLAR_TERMS[i].name === activeName ? "term-name term-name-active" : "term-name"
    });
  }
  return list;
}
const $app_script$1217327819 = {
  data: function dataFun() {
    return {
      todayText: "",
      seasonTitle: "",
      seasonDateText: "",
      seasonHint: "",
      seasonDistanceText: "",
      termCards: []
    };
  },
  onInit() {
    this.updateTerms();
  },
  updateTerms() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const today = new Date(year, now.getMonth(), now.getDate(), 12, 0, 0);
    let nearest = null;
    let nearestDistance = 99999;
    let i = 0;
    for (i = 0; i < SOLAR_TERMS.length; i++) {
      const termDate = buildDate(year, SOLAR_TERMS[i].month, SOLAR_TERMS[i].day);
      const distance = Math.abs(getDayDiff(termDate, today));
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = {
          name: SOLAR_TERMS[i].name,
          month: SOLAR_TERMS[i].month,
          day: SOLAR_TERMS[i].day,
          hint: SOLAR_TERMS[i].hint,
          diff: getDayDiff(termDate, today)
        };
      }
    }
    this.todayText = year + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    this.seasonTitle = nearest.name;
    this.seasonDateText = nearest.month + "月" + nearest.day + "日";
    this.seasonHint = nearest.hint;
    if (nearest.diff === 0) {
      this.seasonDistanceText = "今天正好是这个节气";
    } else if (nearest.diff > 0) {
      this.seasonDistanceText = "距离今天还有 " + nearest.diff + " 天";
    } else {
      this.seasonDistanceText = "距离今天已经过去 " + Math.abs(nearest.diff) + " 天";
    }
    this.termCards = buildCards(nearest.name);
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1217327819.default || $app_script$1217327819;
  $app_module$.exports.style = $app_style$1217327819;
});
$app_bootstrap$("@app-component/index");
