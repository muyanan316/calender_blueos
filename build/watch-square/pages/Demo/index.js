let $style$1302357824 = {
  "@info": {
    "styleObjectId": 1302357824
  }
};
const $app_style$1302357824 = $style$1302357824;
const router = $app_require$("@app-module/system.router");
const POEMS = [{
  text: "床前明月光，疑是地上霜。",
  author: "李白《静夜思》"
}, {
  text: "春眠不觉晓，处处闻啼鸟。",
  author: "孟浩然《春晓》"
}, {
  text: "举头望明月，低头思故乡。",
  author: "李白《静夜思》"
}, {
  text: "欲穷千里目，更上一层楼。",
  author: "王之涣《登鹳雀楼》"
}, {
  text: "会当凌绝顶，一览众山小。",
  author: "杜甫《望岳》"
}];
const RANDOM_GREETINGS = ["Good Day", "你好！", "Hello！", "Ciallo(∠・ω< )⌒☆"];
const $app_script$1302357824 = {
  data: function dataFun() {
    return {
      greetingText: "",
      poemText: "",
      poemAuthor: ""
    };
  },
  onInit() {
    this.updateGreeting();
    this.updatePoem();
  },
  updateGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (Math.random() < 0.7) {
      this.greetingText = RANDOM_GREETINGS[Math.floor(Math.random() * RANDOM_GREETINGS.length)];
      return;
    }
    if (hour >= 5 && hour < 12) {
      this.greetingText = Math.random() < 0.5 ? "早上好" : "Good morning";
    } else if (hour >= 12 && hour < 18) {
      this.greetingText = Math.random() < 0.5 ? "下午好" : "Good afternoon";
    } else {
      this.greetingText = Math.random() < 0.5 ? "晚上好" : "Good evening";
    }
  },
  updatePoem() {
    const item = POEMS[Math.floor(Math.random() * POEMS.length)];
    this.poemText = item.text;
    this.poemAuthor = item.author;
  },
  goPage1() {
    router.push({
      uri: "/pages/Page1"
    });
  },
  goPage2() {
    router.push({
      uri: "/pages/Page2"
    });
  },
  goPage3() {
    router.push({
      uri: "/pages/Page3"
    });
  },
  goPage4() {
    router.push({
      uri: "/pages/Page4"
    });
  },
  goPage5() {
    router.push({
      uri: "/pages/Page5"
    });
  },
  goPage6() {
    router.push({
      uri: "/pages/Page6"
    });
  },
  goPage7() {
    router.push({
      uri: "/pages/Page7"
    });
  },
  goPage8() {
    router.push({
      uri: "/pages/Page8"
    });
  },
  goPage9() {
    router.push({
      uri: "/pages/Page9"
    });
  }
};
$app_define$("@app-component/index", [], function($app_require$2, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1302357824.default || $app_script$1302357824;
  $app_module$.exports.style = $app_style$1302357824;
});
$app_bootstrap$("@app-component/index");
