function pad2(value) {
  return value < 10 ? '0' + value : '' + value
}

function text(s) {
  return s
}

function buildHistoryData() {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const result = {}
  let month = 0
  let day = 0

  for (month = 1; month <= 12; month++) {
    for (day = 1; day <= monthDays[month - 1]; day++) {
      const key = pad2(month) + '-' + pad2(day)
      result[key] = [
        {
          year: text('\u53f2\u8bb0'),
          text:
            month +
            text('\u6708') +
            day +
            text(
              '\u65e5\u8fd9\u4e00\u5929\u53d1\u751f\u8fc7\u8bb8\u591a\u503c\u5f97\u56de\u770b\u7684\u5386\u53f2\u4e8b\u4ef6\u3002'
            ),
        },
        {
          year: text('\u8d44\u6599'),
          text: text(
            '\u9002\u5408\u4f5c\u4e3a\u4eca\u5929\u7684\u5386\u53f2\u56de\u987e\u5165\u53e3\uff0c\u540e\u7eed\u53ef\u4ee5\u7ee7\u7eed\u8865\u5145\u66f4\u591a\u771f\u5b9e\u4e8b\u4ef6\u5185\u5bb9\u3002'
          ),
        },
      ]
    }
  }

  result['01-01'] = [
    { year: '1912', text: text('\u4e2d\u534e\u6c11\u56fd\u4e34\u65f6\u653f\u5e9c\u5728\u5357\u4eac\u6210\u7acb\u3002') },
    { year: '1995', text: text('\u4e16\u754c\u8d38\u6613\u7ec4\u7ec7\u6b63\u5f0f\u8fd0\u4f5c\u3002') },
    { year: '2002', text: text('\u6b27\u5143\u5728\u6b27\u76df\u591a\u56fd\u6b63\u5f0f\u6d41\u901a\u3002') },
  ]

  result['01-10'] = [
    { year: '1863', text: text('\u4f26\u6566\u5efa\u6210\u4e16\u754c\u7b2c\u4e00\u6761\u5730\u94c1\u3002') },
    { year: '1920', text: text('\u56fd\u9645\u8054\u76df\u6b63\u5f0f\u6210\u7acb\u3002') },
    { year: '2001', text: text('\u4e2d\u56fd\u795e\u821f\u4e8c\u53f7\u65e0\u4eba\u98de\u8239\u53d1\u5c04\u6210\u529f\u3002') },
  ]

  result['01-23'] = [
    { year: '1556', text: text('\u4e2d\u56fd\u5609\u9756\u5927\u5730\u9707\u53d1\u751f\u3002') },
    { year: '2020', text: text('\u6b66\u6c49\u56e0\u75ab\u60c5\u5b9e\u65bd\u79bb\u6c49\u79bb\u9102\u901a\u9053\u7ba1\u63a7\u3002') },
  ]

  result['04-26'] = [
    { year: '1986', text: text('\u5207\u5c14\u8bfa\u8d1d\u5229\u6838\u7535\u7ad9\u53d1\u751f\u4e25\u91cd\u4e8b\u6545\u3002') },
    { year: '1989', text: text('\u6211\u56fd\u9996\u53f0\u5343\u4e07\u6b21\u5de8\u578b\u8ba1\u7b97\u673a\u7814\u5236\u6210\u529f\u3002') },
    { year: '2001', text: text('\u795e\u821f\u4e00\u53f7\u98de\u8239\u5728\u5317\u4eac\u56fd\u9645\u822a\u5929\u57ce\u5bf9\u5916\u5c55\u51fa\u3002') },
  ]

  result['07-20'] = [
    { year: '1969', text: text('\u963f\u6ce2\u7f57\u5341\u4e00\u53f7\u5b87\u822a\u5458\u9996\u6b21\u767b\u9646\u6708\u7403\u3002') },
    { year: '1976', text: text('\u6d77\u76d7\u4e00\u53f7\u6210\u529f\u62cd\u6444\u706b\u661f\u8868\u9762\u7167\u7247\u3002') },
  ]

  result['10-01'] = [
    { year: '1949', text: text('\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u4e2d\u592e\u4eba\u6c11\u653f\u5e9c\u6210\u7acb\u3002') },
    { year: '1999', text: text('\u5e86\u795d\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u6210\u7acb\u4e94\u5341\u5468\u5e74\u5927\u4f1a\u4e3e\u884c\u3002') },
  ]

  result['12-20'] = [
    { year: '1999', text: text('\u6fb3\u95e8\u56de\u5f52\u7956\u56fd\u3002') },
    { year: '2001', text: text('\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a\u53d1\u5c55\u8fdb\u5165\u65b0\u9636\u6bb5\u3002') },
  ]

  return result
}

export default buildHistoryData()
