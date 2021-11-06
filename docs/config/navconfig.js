module.exports = [
  // 以docs为根目录
  { text: 'Home', link: '/' },
  
  // 下拉列表显示分组
  {
    text: '学习笔记',
    items: [
      { text: '前端知识回顾', link: '/pages/note/front-review/' },
      { 
        text: '测试test', 
        items: [
          { text: 'test', link: '/pages/note/test/' },
        ] 
      },
    ]
  },

  { text: '面试题', link: '/pages/interview/' },
];