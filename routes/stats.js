const express = require("express");
const router = express.Router();


/**
 * 订单统计
 */
router.get("/order", (req, res) => {
  let source = [
    { type: '热销榜', data: [320, 332, 301, 334, 390, 330, 320] },
    { type: '新品专享', data: [120, 132, 101, 134, 90, 1230, 210] },
    { type: '炒饭系列', data: [220, 182, 1191, 234, 1290, 330, 310] },
    { type: '千万销量', data: [150, 232, 201, 154, 190, 330, 410]},
    { type: '营养适配', data: [862, 1018, 964, 1026, 1679, 1600, 1570] },
    { type: '满减专区', data: [620, 732, 701, 734, 1090, 1130, 1120] },
    { type: '冒菜', data: [120, 132, 101, 134, 290, 230, 220]},
    { type: '海鲜自助', data: [60, 72, 71, 74, 190, 130, 110] },
    { type: '小吃', data: [62, 82, 91, 84, 109, 110, 120] },
  ]
  let date = ['1月', '2月','3月','4月','5月','6月','7月']
  res.send({
    code: 0,
    data: {
      date,
      source
    }
  })

});

/**
 * 商品统计
 */
router.get("/goods", (req, res) => {
  let source = [
    { type: '热销榜', data: [320, 332, 301, 334, 390, 330, 1320] },
    { type: '新品专享', data: [120, 132, 101, 134, 90, 230, 210] },
    { type: '炒饭系列', data: [220, 182, 191, 234, 290, 330, 1310] },
    { type: '千万销量', data: [150, 232, 201, 154, 190, 330, 410]},
    { type: '营养适配', data: [862, 1018, 964, 1026, 1679, 1600, 1570] },
    { type: '满减专区', data: [620, 732, 701, 734, 1090, 1130, 1120] },
    { type: '冒菜', data: [120, 132, 101, 134, 290, 230, 220]},
    { type: '海鲜自助', data: [60, 72, 71, 74, 190, 130, 110] },
    { type: '小吃', data: [62, 82, 91, 84, 109, 110, 120] },
  ]
  let date = ['2-17', '2-18','2-19','2-20','2-21','2-23','2-24']
  res.send({
    code: 0,
    data: {
      date,
      source
    }
  })

});
/**
 * 商品统计
 */
 router.get("/total", (req, res) => {
  let source = [
    { type: '订单', data: [3210, 3322, 3021, 3334, 3930, 3350, 3250] },
    { type: '销售额', data: [1210, 1322, 1021, 1334, 940, 2305, 2150] },
    { type: '注册人数', data: [2120, 1822, 1291, 2334, 2950, 3350, 3510] },
    { type: '管理员人数', data: [1150, 2322, 2201, 3154, 1950, 3350, 4510]},
    
  ]
  let date = ['第一周', '第二周','第三周','第四周','第五周','第六周','第七周']
  res.send({
    code: 0,
    data: {
      date,
      source
    }
  })

});





module.exports = router;
