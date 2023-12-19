/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
/*const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2c4a9f061e9eb384',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fb6ec97a662d21eb9759e508d911c79e',

  PROVINCE: '山西',
  CITY: '太原',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宿舍的好友们',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9-OK6PGAcFIAk8D7SsyPJFv8_Gc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ROUhaYcgvqLpIV8Gwp-khjgPvEiG1WLSMW393mwjiRA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
         // type: '*生日', name: '阴历', year: '2002', date: '01-08',
      //  },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '阳历', year: '2002', date: '01-08',
        },
       // {
        //  type: '节日', name: '相识纪念日', year: '2022', date: '08-03',
       // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
         //在一起的日子
        { keyword: 'love_day', date: '2023-04-16' },
        // 结婚纪念日
       // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
*/
const USER_CONFIG = {
{"APP_ID":"wx2c4a9f061e9eb384",
  "APP_SECRET":"fb6ec97a662d21eb9759e508d911c79e",
  "IS_SHOW_COLOR":true,
  "CALLBACK_TEMPLATE_ID":"fb6ec97a662d21eb9759e508d911c79e",
  "CALLBACK_USERS":[{"name":"自己","id":"fb6ec97a662d21eb9759e508d911c79e"}],
  "USERS":[{"name":"舍友","id":"o9-OK6PGAcFIAk8D7SsyPJFv8_Gc","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"太原","horoscopeDate":"10-15","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"*生日","name":"生日","date":"10-14","year":"2004"}],"customizedDateList":[]},{"name":"舍友","id":"o9-OK6B2lq9y1u5kxSpE4_2uub3E","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"太原","horoscopeDate":"12-13","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"节日","name":"哈哈哈哈","date":"11-27","year":"2023"}],"customizedDateList":[]},{"name":"舍友","id":"o9-OK6DhvL08O3xUy9dd3rbrQwng","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"太原","horoscopeDate":"10-01","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"*生日","name":"公历","date":"08-18","year":"2004"}],"customizedDateList":[]},{"name":"舍友","id":"o9-OK6E3nMt4X5ear4HhEP2TAltM","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"忻州","horoscopeDate":"04-23","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"*生日","name":"生日","date":"04-23","year":"2004"}],"customizedDateList":[]},{"name":"舍友","id":"o9-OK6HQFjxo3inqpBor_TF4u8-A","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"晋城","horoscopeDate":"07-23","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"*生日","name":"生日","date":"11-23","year":"2005"}],"customizedDateList":[]},{"name":"斌斌","id":"o9-OK6LZUwoJns-eMlowFN-pJn0k","useTemplateId":"j2-YKE1aIKYjPifNqvMqlAFwYCLBI-3VEJ43hozPPi8","province":"山西","city":"太原","horoscopeDate":"11-11","horoscopeDateType":"今日","openUrl":"https://shuangxunian.github.io/","festivals":[{"type":"生日","name":"生日","date":"10-18","year":"2004"}],"customizedDateList":[]}],"SWITCH":{"weather":true,"holidaytts":true,"CIBA":true,"oneTalk":true,"earthyLoveWords":false,"momentCopyrighting":false,"poisonChickenSoup":false,"poetry":false,"horoscope":false,"birthdayMessage":false}}


                     }












  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
 /* CALLBACK_TEMPLATE_ID: 'ROUhaYcgvqLpIV8Gwp-khjgPvEiG1WLSMW393mwjiRA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9-OK6PGAcFIAk8D7SsyPJFv8_Gc',
    }
  ],

}
*/
module.exports = USER_CONFIG

