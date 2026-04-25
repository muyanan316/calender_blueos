let $style$824300809 = {
  "@info": {
    "styleObjectId": 824300809
  }
};
const $app_style$824300809 = $style$824300809;
const WEEK_TITLES = ["日", "一", "二", "三", "四", "五", "六"];
function buildEmptyCell() {
  return {
    dayText: "",
    cardClass: "day-card day-card-empty",
    textClass: "day-number day-number-empty"
  };
}
const $app_script$824300809 = {
  data: function dataFun() {
    return {
      titleText: "",
      weekTitles: WEEK_TITLES,
      rows: [],
      year: 0,
      month: 0,
      todayYear: 0,
      todayMonth: 0,
      todayDay: 0
    };
  },
  onInit() {
    const now = /* @__PURE__ */ new Date();
    this.todayYear = now.getFullYear();
    this.todayMonth = now.getMonth() + 1;
    this.todayDay = now.getDate();
    this.year = this.todayYear;
    this.month = this.todayMonth;
    this.refreshCalendar();
  },
  refreshCalendar() {
    const firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    const cells = [];
    let i = 0;
    let day = 0;
    let rowIndex = 0;
    this.titleText = this.year + "年 " + this.month + "月";
    for (i = 0; i < firstWeekDay; i++) {
      cells.push(buildEmptyCell());
    }
    for (day = 1; day <= daysInMonth; day++) {
      const isToday = this.year === this.todayYear && this.month === this.todayMonth && day === this.todayDay;
      cells.push({
        dayText: "" + day,
        cardClass: isToday ? "day-card day-card-today" : "day-card",
        textClass: "day-number"
      });
    }
    while (cells.length % 7 !== 0) {
      cells.push(buildEmptyCell());
    }
    const rows = [];
    for (rowIndex = 0; rowIndex < cells.length; rowIndex += 7) {
      rows.push({
        days: cells.slice(rowIndex, rowIndex + 7)
      });
    }
    this.rows = rows;
  },
  prevYear() {
    this.year = this.year - 1;
    this.refreshCalendar();
  },
  nextYear() {
    this.year = this.year + 1;
    this.refreshCalendar();
  },
  prevMonth() {
    if (this.month === 1) {
      this.year = this.year - 1;
      this.month = 12;
    } else {
      this.month = this.month - 1;
    }
    this.refreshCalendar();
  },
  nextMonth() {
    if (this.month === 12) {
      this.year = this.year + 1;
      this.month = 1;
    } else {
      this.month = this.month + 1;
    }
    this.refreshCalendar();
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$824300809.default || $app_script$824300809;
  $app_module$.exports.style = $app_style$824300809;
});
$app_bootstrap$("@app-component/index");
