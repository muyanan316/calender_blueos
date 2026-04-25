let $style$1413841324 = {
  "@info": {
    "styleObjectId": 1413841324
  }
};
const $app_style$1413841324 = $style$1413841324;
function pad2$1(value) {
  return value < 10 ? "0" + value : "" + value;
}
function text(s) {
  return s;
}
function buildHistoryData() {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const result = {};
  let month = 0;
  let day = 0;
  for (month = 1; month <= 12; month++) {
    for (day = 1; day <= monthDays[month - 1]; day++) {
      const key = pad2$1(month) + "-" + pad2$1(day);
      result[key] = [{
        year: text("史记"),
        text: month + text("月") + day + text("日这一天发生过许多值得回看的历史事件。")
      }, {
        year: text("资料"),
        text: text("适合作为今天的历史回顾入口，后续可以继续补充更多真实事件内容。")
      }];
    }
  }
  result["01-01"] = [{
    year: "1912",
    text: text("中华民国临时政府在南京成立。")
  }, {
    year: "1995",
    text: text("世界贸易组织正式运作。")
  }, {
    year: "2002",
    text: text("欧元在欧盟多国正式流通。")
  }];
  result["01-10"] = [{
    year: "1863",
    text: text("伦敦建成世界第一条地铁。")
  }, {
    year: "1920",
    text: text("国际联盟正式成立。")
  }, {
    year: "2001",
    text: text("中国神舟二号无人飞船发射成功。")
  }];
  result["01-23"] = [{
    year: "1556",
    text: text("中国嘉靖大地震发生。")
  }, {
    year: "2020",
    text: text("武汉因疫情实施离汉离鄂通道管控。")
  }];
  result["04-26"] = [{
    year: "1986",
    text: text("切尔诺贝利核电站发生严重事故。")
  }, {
    year: "1989",
    text: text("我国首台千万次巨型计算机研制成功。")
  }, {
    year: "2001",
    text: text("神舟一号飞船在北京国际航天城对外展出。")
  }];
  result["07-20"] = [{
    year: "1969",
    text: text("阿波罗十一号宇航员首次登陆月球。")
  }, {
    year: "1976",
    text: text("海盗一号成功拍摄火星表面照片。")
  }];
  result["10-01"] = [{
    year: "1949",
    text: text("中华人民共和国中央人民政府成立。")
  }, {
    year: "1999",
    text: text("庆祝中华人民共和国成立五十周年大会举行。")
  }];
  result["12-20"] = [{
    year: "1999",
    text: text("澳门回归祖国。")
  }, {
    year: "2001",
    text: text("澳门特别行政区发展进入新阶段。")
  }];
  return result;
}
const historyData = buildHistoryData();
function pad2(value) {
  return value < 10 ? "0" + value : "" + value;
}
const $app_script$1413841324 = {
  data: function dataFun() {
    return {
      titleText: "Today In History",
      heroCaption: "历史上的今天",
      sectionTitle: "事件",
      todayText: "",
      monthDayText: "",
      events: []
    };
  },
  onInit() {
    this.loadHistory();
  },
  loadHistory() {
    const now = /* @__PURE__ */ new Date();
    const key = pad2(now.getMonth() + 1) + "-" + pad2(now.getDate());
    this.todayText = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    this.monthDayText = now.getMonth() + 1 + "月" + now.getDate() + "日";
    this.events = historyData[key] || [];
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1413841324.default || $app_script$1413841324;
  $app_module$.exports.style = $app_style$1413841324;
});
$app_bootstrap$("@app-component/index");
