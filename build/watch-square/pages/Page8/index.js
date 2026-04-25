let $style$2095071952 = {
  "@info": {
    "styleObjectId": 2095071952
  }
};
const $app_style$2095071952 = $style$2095071952;
const HOLIDAY_DATA = {
  "2025": {
    holidays: [{
      name: "元旦",
      range: "2025-01-01",
      days: 1,
      start: "2025-01-01"
    }, {
      name: "春节",
      range: "2025-01-28 ~ 2025-02-04",
      days: 8,
      start: "2025-01-28"
    }, {
      name: "清明节",
      range: "2025-04-04 ~ 2025-04-06",
      days: 3,
      start: "2025-04-04"
    }, {
      name: "劳动节",
      range: "2025-05-01 ~ 2025-05-05",
      days: 5,
      start: "2025-05-01"
    }, {
      name: "端午节",
      range: "2025-05-31 ~ 2025-06-02",
      days: 3,
      start: "2025-05-31"
    }, {
      name: "国庆/中秋",
      range: "2025-10-01 ~ 2025-10-08",
      days: 8,
      start: "2025-10-01"
    }],
    workdays: ["2025-01-26", "2025-02-08", "2025-04-27", "2025-09-28", "2025-10-11"],
    sourceText: "国办发明电〔2024〕12号"
  },
  "2026": {
    holidays: [{
      name: "元旦",
      range: "2026-01-01 ~ 2026-01-03",
      days: 3,
      start: "2026-01-01"
    }, {
      name: "春节",
      range: "2026-02-15 ~ 2026-02-23",
      days: 9,
      start: "2026-02-15"
    }, {
      name: "清明节",
      range: "2026-04-04 ~ 2026-04-06",
      days: 3,
      start: "2026-04-04"
    }, {
      name: "劳动节",
      range: "2026-05-01 ~ 2026-05-05",
      days: 5,
      start: "2026-05-01"
    }, {
      name: "端午节",
      range: "2026-06-19 ~ 2026-06-21",
      days: 3,
      start: "2026-06-19"
    }, {
      name: "中秋节",
      range: "2026-09-25 ~ 2026-09-27",
      days: 3,
      start: "2026-09-25"
    }, {
      name: "国庆节",
      range: "2026-10-01 ~ 2026-10-07",
      days: 7,
      start: "2026-10-01"
    }],
    workdays: ["2026-01-04", "2026-02-14", "2026-02-28", "2026-05-09", "2026-09-20", "2026-10-10"],
    sourceText: "国办发明电〔2025〕7号"
  }
};
function getTodayKey() {
  const now = /* @__PURE__ */ new Date();
  return now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
}
function getAvailableYears() {
  const years = Object.keys(HOLIDAY_DATA);
  const todayKey = getTodayKey();
  const result = [];
  let i = 0;
  for (i = 0; i < years.length; i++) {
    const year = years[i];
    const holidayCards = buildHolidayCards(HOLIDAY_DATA[year].holidays, todayKey);
    const workdayCards = buildWorkdayCards(HOLIDAY_DATA[year].workdays, todayKey);
    if (holidayCards.length > 0 || workdayCards.length > 0) {
      result.push(year);
    }
  }
  return result;
}
function buildYearButtons(selectedYear, yearList) {
  const list = [];
  let i = 0;
  for (i = 0; i < yearList.length; i++) {
    list.push({
      year: yearList[i],
      buttonClass: yearList[i] === selectedYear ? "year-chip year-chip-active" : "year-chip",
      textClass: yearList[i] === selectedYear ? "year-chip-text year-chip-text-active" : "year-chip-text"
    });
  }
  return list;
}
function buildHolidayCards(items, todayKey) {
  const list = [];
  let i = 0;
  for (i = 0; i < items.length; i++) {
    if (items[i].start >= todayKey) {
      list.push({
        name: items[i].name,
        range: items[i].range,
        daysText: items[i].days + "天"
      });
    }
  }
  return list;
}
function buildWorkdayCards(items, todayKey) {
  const list = [];
  let i = 0;
  for (i = 0; i < items.length; i++) {
    if (items[i] >= todayKey) {
      list.push({
        text: items[i]
      });
    }
  }
  return list;
}
function getStatusText(dateText, holidays, workdays) {
  let i = 0;
  for (i = 0; i < workdays.length; i++) {
    if (workdays[i] === dateText) {
      return "今日为调休上班";
    }
  }
  for (i = 0; i < holidays.length; i++) {
    if (holidays[i].range.indexOf(dateText) >= 0) {
      return "今日在放假范围内";
    }
  }
  return "今日为普通日";
}
const $app_script$2095071952 = {
  data: function dataFun() {
    return {
      titleText: "Holiday Schedule",
      subtitleText: "调休与放假",
      todayText: "",
      statusText: "",
      selectedYear: "2026",
      sourceText: "",
      availableYears: [],
      yearButtons: [],
      holidayCards: [],
      workdayCards: []
    };
  },
  onInit() {
    const now = /* @__PURE__ */ new Date();
    const availableYears = getAvailableYears();
    const currentYear = "" + now.getFullYear();
    this.availableYears = availableYears;
    if (availableYears.indexOf(currentYear) >= 0) {
      this.selectedYear = currentYear;
    } else if (availableYears.length > 0) {
      this.selectedYear = availableYears[0];
    }
    this.todayText = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日";
    this.applyYear(this.selectedYear);
  },
  applyYear(year) {
    const data = HOLIDAY_DATA[year];
    const now = /* @__PURE__ */ new Date();
    const todayKey = getTodayKey();
    this.selectedYear = year;
    this.sourceText = data.sourceText;
    this.yearButtons = buildYearButtons(year, this.availableYears);
    this.holidayCards = buildHolidayCards(data.holidays, todayKey);
    this.workdayCards = buildWorkdayCards(data.workdays, todayKey);
    if ("" + now.getFullYear() === year) {
      this.statusText = getStatusText(todayKey, data.holidays, data.workdays);
    } else {
      this.statusText = "已切换至 " + year + " 年调休安排";
    }
  },
  chooseYear(event) {
    const year = event && event.currentTarget && event.currentTarget.attr && event.currentTarget.attr.dataYear;
    if (year && HOLIDAY_DATA[year]) {
      this.applyYear(year);
    }
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$2095071952.default || $app_script$2095071952;
  $app_module$.exports.style = $app_style$2095071952;
});
$app_bootstrap$("@app-component/index");
