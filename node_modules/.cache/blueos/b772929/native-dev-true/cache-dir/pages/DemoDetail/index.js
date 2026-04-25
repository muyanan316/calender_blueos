let $style$465862127 = {
  "@info": {
    "styleObjectId": 465862127
  }
};
const $app_style$465862127 = $style$465862127;
const $app_script$465862127 = {
  data: function dataFun() {
    return {
      text: "Demo Detail"
    };
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$465862127.default || $app_script$465862127;
  $app_module$.exports.style = $app_style$465862127;
});
$app_bootstrap$("@app-component/index");
