let $style$2003381839 = {
  "@info": {
    "styleObjectId": 2003381839
  }
};
const $app_style$2003381839 = $style$2003381839;
const FORTUNE_LEVELS = [{
  name: "大吉",
  desc: "气势正旺，适合主动推进计划。"
}, {
  name: "中吉",
  desc: "整体平顺，稳稳发力会更顺手。"
}, {
  name: "小吉",
  desc: "会有小惊喜，适合处理日常和细节。"
}, {
  name: "吉",
  desc: "运势温和，适合循序渐进。"
}, {
  name: "末吉",
  desc: "结果一般，但耐心一点会慢慢转好。"
}];
const CAREER_TEXTS = ["事业运上升，适合推进一直拖着的事。", "稳中有进，今天更适合把细节做好。", "适合低调积累，别急着一次求满。", "会遇到一点小阻力，但整理思路后能过。", "适合先做计划，再逐步推进执行。"];
const LOVE_TEXTS = ["爱情运偏暖，表达真心会有回应。", "感情适合慢一点，耐心比热烈更重要。", "单身者容易遇到舒服的聊天氛围。", "适合把关心落到小行动里。", "别想太多，真诚一点就已经很好。"];
const MONEY_TEXTS = ["财运平稳，适合克制冲动消费。", "有小机会，但更适合保守处理。", "适合理清预算，钱会花得更值。", "今天不宜冒进，稳住就是赚到。", "会有一点小收获，记得见好就收。"];
const HEALTH_TEXTS = ["健康运不错，适合早睡和散步。", "注意补水和休息，状态会更稳。", "今天适合拉伸身体，放松肩颈。", "少熬夜，精神会比想象中更快回升。", "情绪平稳比硬撑更重要。"];
const $app_script$2003381839 = {
  data: function dataFun() {
    return {
      todayText: "",
      fortuneName: "",
      fortuneDesc: "",
      randomCode: "",
      careerText: "",
      loveText: "",
      moneyText: "",
      healthText: ""
    };
  },
  onInit() {
    this.drawFortune();
  },
  drawFortune() {
    const now = /* @__PURE__ */ new Date();
    const seed = Math.floor(Math.random() * 1e6);
    const level = FORTUNE_LEVELS[seed % FORTUNE_LEVELS.length];
    this.todayText = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    this.fortuneName = level.name;
    this.fortuneDesc = level.desc;
    this.randomCode = "签号 " + seed;
    this.careerText = CAREER_TEXTS[(seed + 1) % CAREER_TEXTS.length];
    this.loveText = LOVE_TEXTS[(seed + 2) % LOVE_TEXTS.length];
    this.moneyText = MONEY_TEXTS[(seed + 3) % MONEY_TEXTS.length];
    this.healthText = HEALTH_TEXTS[(seed + 4) % HEALTH_TEXTS.length];
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$2003381839.default || $app_script$2003381839;
  $app_module$.exports.style = $app_style$2003381839;
});
$app_bootstrap$("@app-component/index");
