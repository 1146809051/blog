module.exports = [
    { text: 'Home', link: '/' },
    {
      text: '链接',
      items: [
        { text: 'test1', link: '/test1/' },
        {
          text: '链接2',
          link: 'https://www.baidu.com'
        }
      ]
    },
    // 内部链接 以docs为根目录  
    { text: 'test2', link: '/test2/' },
    // { text: 'demo', link: '/test/demo' },
];