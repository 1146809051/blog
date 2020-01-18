const demo1 = require("../config/sidebarManage/demo1");
const demo2 = require("../config/sidebarManage/demo2");

module.exports = [
    // "",
    ["", "首页"],
    
    demo1,
    demo2,

    {
      // 侧边栏在 /foo/ 上
      '/demo/': [
        "/test/demo/demo3-1", "ddd1",
        "/test/demo/demo3-2", "ddd2"
      ],
    }
  ];