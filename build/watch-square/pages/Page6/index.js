let $style$1806868334 = {
  "@info": {
    "styleObjectId": 1806868334
  }
};
const $app_style$1806868334 = $style$1806868334;
function percentText(progress) {
  return Math.round(progress * 100) + "%";
}
function buildCard(progress, color, title, detail) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  return {
    title,
    detail,
    color,
    percent: percentText(progress),
    circumference: "" + circumference,
    dashOffset: "" + circumference * (1 - progress)
  };
}
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((current.getTime() - start.getTime()) / 864e5) + 1;
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const WEEK_NAMES = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const $app_script$1806868334 = {
  data: function dataFun() {
    return {
      todayText: "",
      cards: []
    };
  },
  onInit() {
    this.updateProgress();
  },
  updateProgress() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekIndex = now.getDay();
    const totalDaysOfYear = isLeapYear(year) ? 366 : 365;
    const currentDayOfYear = getDayOfYear(now);
    const totalDaysOfMonth = getDaysInMonth(year, month);
    const secondsToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    this.todayText = year + "年" + month + "月" + day + "日";
    this.cards = [buildCard(currentDayOfYear / totalDaysOfYear, "#ff6b6b", "年", "第 " + currentDayOfYear + " / " + totalDaysOfYear + " 天"), buildCard(day / totalDaysOfMonth, "#4ecdc4", "月", "第 " + day + " / " + totalDaysOfMonth + " 天"), buildCard(secondsToday / 86400, "#ffd166", "日", now.getHours() + " 时 " + now.getMinutes() + " 分"), buildCard((weekIndex + 1) / 7, "#5b8def", "星期", WEEK_NAMES[weekIndex])];
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1806868334.default || $app_script$1806868334;
  $app_module$.exports.style = $app_style$1806868334;
});
$app_bootstrap$("@app-component/index");
